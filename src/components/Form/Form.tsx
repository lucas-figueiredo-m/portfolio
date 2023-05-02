import React, { useState } from "react";
import { FormContainer, Input, TextArea } from "./styles";

import { useForm, SubmitHandler } from "react-hook-form";
import { ContactFormType } from "@types";
import { LocalApiService } from "@services/LocalApiService";
import { toast } from "react-toastify";
import { Toast } from "@components/Toast";
import {
  IoCheckmarkCircleOutline,
  IoCloseCircleOutline,
} from "react-icons/io5";
import { theme } from "@styles";
import { Loading } from "@nextui-org/react";
import isEmail from "validator/lib/isEmail";

const SuccessToast: React.FC = () => (
  <Toast
    icon={<IoCheckmarkCircleOutline />}
    color={theme.colors.success}
    label="Your message has been successfully sent."
  />
);

type ErrorToastType = {
  label?: string;
};

const ERROR_TOAST_DEFAULT_LABEL =
  "Sorry, an error occurred. Could you try again?";

const ErrorToast: React.FC<ErrorToastType> = ({
  label = ERROR_TOAST_DEFAULT_LABEL,
}) => (
  <Toast
    icon={<IoCloseCircleOutline />}
    color={theme.colors.error}
    label={label}
  />
);

export const Form: React.FC = () => {
  const { handleSubmit, register, reset } = useForm<ContactFormType>();

  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<ContactFormType> = async (data) => {
    if (!data.senderName || data.senderName === "") {
      return toast(<ErrorToast label="Please, fill your name" />, {
        progressStyle: { backgroundColor: theme.colors.error },
      });
    }

    if (!data.senderEmail || !isEmail(data.senderEmail)) {
      return toast(<ErrorToast label="Please, use a valid e-mail" />, {
        progressStyle: { backgroundColor: theme.colors.error },
      });
    }

    if (
      !data.senderMessage ||
      data.senderMessage.length < 20 ||
      data.senderMessage.length > 2000
    ) {
      return toast(
        <ErrorToast label="Please, write a message between 20 and 2000 characters long." />,
        {
          progressStyle: { backgroundColor: theme.colors.error },
        }
      );
    }

    try {
      setLoading(true);
      await LocalApiService.sendContactMail(data);
      reset();
      toast(<SuccessToast />, {
        progressStyle: { backgroundColor: theme.colors.success },
      });
    } catch (error) {
      toast(<ErrorToast />, {
        progressStyle: { backgroundColor: theme.colors.error },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("senderName")}
        placeholder="Name and/or Company"
        disabled={loading}
      />
      <Input
        {...register("senderEmail")}
        placeholder="E-mail"
        type="email"
        disabled={loading}
      />
      <TextArea
        {...register("senderMessage")}
        placeholder="Message"
        minLength={20}
        maxLength={2000}
        disabled={loading}
      />
      {loading ? (
        <div>
          <Loading color="white" type="points-opacity" size="md" />
        </div>
      ) : (
        <button type="submit" disabled={loading}>
          SEND
        </button>
      )}
    </FormContainer>
  );
};
