import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { google } from "googleapis";
import { ContactFormType } from "@types";

const { OAuth2 } = google.auth;

const email = process.env.MAIL_ADDRESS;

const clientId = process.env.MAIL_CLIENT_ID;
const clientSecret = process.env.MAIL_CLIENT_SECRET;
const refreshToken = process.env.MAIL_REFRESH_TOKEN;

const OAuth2Client = new OAuth2(clientId, clientSecret);

OAuth2Client.setCredentials({ refresh_token: refreshToken });

interface ApiRequest<T> extends NextApiRequest {
  body: T;
}

const contactRoute = async (
  req: ApiRequest<ContactFormType>,
  res: NextApiResponse
) => {
  const { senderEmail, senderMessage, senderName } = req.body;

  console.log("COntact received!");

  if (senderEmail === "" || senderMessage === "" || senderName === "") {
    return res.status(403).send({ message: "Fields cannot be empty!" });
  }

  const accessToken = await OAuth2Client.getAccessToken();

  const transporter = nodemailer.createTransport({
    auth: {
      type: "OAuth2",
      user: email,
      clientId,
      clientSecret,
      refreshToken,
      accessToken: String(accessToken.token),
    },
    service: "gmail",
  });

  const from = `${senderName} <${senderEmail}>`;

  const message = {
    from,
    to: email,
    subject: `Contact message from ${senderName}`,
    text: senderMessage,
    replyTo: from,
  };

  const sendMail = () => {
    return new Promise((resolve, reject) => {
      transporter.sendMail(message, (error, info) =>
        error ? reject(error) : resolve(info)
      );
    });
  };

  try {
    const mailerRes = await sendMail();
    return res.status(201).send(mailerRes);
  } catch (error) {
    return res.status(403).send(error);
  }
};

export default contactRoute;
