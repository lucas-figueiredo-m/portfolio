import React, { useState } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import { ContactFormType } from "@types";
import { LocalApiService } from "@services/LocalApiService";
import { toast } from "react-toastify";
import { Toast } from "@components/Toast";
import {
  IoCheckmarkCircleOutline,
  IoCloseCircleOutline,
} from "react-icons/io5";
import isEmail from "validator/lib/isEmail";

const SuccessToast: React.FC = () => (
  <Toast
    icon={<IoCheckmarkCircleOutline />}
    color="#3FBF66"
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
    color="#E3372B"
    label={label}
  />
);

export const Form: React.FC = () => {
  const { handleSubmit, register, reset } = useForm<ContactFormType>();

  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<ContactFormType> = async (data) => {
    if (!data.senderName || data.senderName === "") {
      return toast(<ErrorToast label="Please, fill your name" />, {
        progressStyle: { backgroundColor: "#E3372B" },
      });
    }

    if (!data.senderEmail || !isEmail(data.senderEmail)) {
      return toast(<ErrorToast label="Please, use a valid e-mail" />, {
        progressStyle: { backgroundColor: "#E3372B" },
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
          progressStyle: { backgroundColor: "#E3372B" },
        }
      );
    }

    try {
      setLoading(true);
      await LocalApiService.sendContactMail(data);
      reset();
      toast(<SuccessToast />, {
        progressStyle: { backgroundColor: "#3FBF66" },
      });
    } catch (error) {
      toast(<ErrorToast />, {
        progressStyle: { backgroundColor: "#E3372B" },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-32 w-full grid grid-cols-2 gap-4 max-[700px]:mt-20 max-[700px]:grid-cols-1"
    >
      <input
        {...register("senderName")}
        placeholder="Name and/or Company"
        disabled={loading}
        className="h-12 w-full bg-white border border-[#8A3E37] py-[1.7rem] px-6 text-black rounded-lg text-[1.2rem] outline-none transition-all duration-500 focus:border-[#FF2D19] placeholder:text-[#FF2D19] max-[450px]:p-[1.4rem] max-[450px]:text-base"
      />
      <input
        {...register("senderEmail")}
        placeholder="E-mail"
        type="email"
        disabled={loading}
        className="h-12 w-full bg-white border border-[#8A3E37] py-[1.7rem] px-6 text-black rounded-lg text-[1.2rem] outline-none transition-all duration-500 focus:border-[#FF2D19] placeholder:text-[#FF2D19] max-[450px]:p-[1.4rem] max-[450px]:text-base"
      />
      <textarea
        {...register("senderMessage")}
        placeholder="Message"
        minLength={20}
        maxLength={2000}
        disabled={loading}
        className="h-40 w-full bg-white border border-[#8A3E37] py-[1.7rem] px-6 text-black rounded-lg text-[1.2rem] outline-none transition-all duration-500 resize-none col-span-2 focus:border-[#FF2D19] placeholder:text-[#FF2D19] max-[700px]:col-span-1 max-[450px]:p-[1.4rem] max-[450px]:text-base"
      />
      {loading ? (
        <div className="border-none py-4 px-10 text-white font-light text-[1.2rem] rounded-lg bg-[#cc0000] transition-all duration-500 w-fit max-[450px]:py-[0.8rem] max-[450px]:px-6 max-[450px]:text-base">
          <span className="animate-pulse">Sending...</span>
        </div>
      ) : (
        <button
          type="submit"
          disabled={loading}
          className="border-none py-4 px-10 text-white font-medium text-[1.2rem] rounded-lg bg-[#FF2D19] transition-all duration-500 w-fit disabled:opacity-50 hover:not-disabled:bg-[#cc0000] max-[450px]:py-[0.8rem] max-[450px]:px-6 max-[450px]:text-base"
        >
          SEND
        </button>
      )}
    </form>
  );
};
