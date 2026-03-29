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
    color="#22c55e"
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
    color="#ef4444"
    label={label}
  />
);

const inputStyles =
  "w-full bg-surface border border-border rounded-lg px-4 py-3 text-text-primary text-sm outline-none transition-colors duration-200 focus:border-accent focus:ring-1 focus:ring-accent placeholder:text-text-tertiary disabled:opacity-50";

export const Form: React.FC = () => {
  const { handleSubmit, register, reset } = useForm<ContactFormType>();

  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<ContactFormType> = async (data) => {
    if (!data.senderName || data.senderName === "") {
      return toast(<ErrorToast label="Please, fill your name" />, {
        progressClassName: "!bg-error",
      });
    }

    if (!data.senderEmail || !isEmail(data.senderEmail)) {
      return toast(<ErrorToast label="Please, use a valid e-mail" />, {
        progressClassName: "!bg-error",
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
          progressClassName: "!bg-error",
        }
      );
    }

    try {
      setLoading(true);
      await LocalApiService.sendContactMail(data);
      reset();
      toast(<SuccessToast />, {
        progressClassName: "!bg-success",
      });
    } catch (error) {
      toast(<ErrorToast />, {
        progressClassName: "!bg-error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-10 w-full grid grid-cols-2 gap-4 max-[700px]:grid-cols-1"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="senderName" className="text-sm text-text-secondary">
          Name
        </label>
        <input
          {...register("senderName")}
          id="senderName"
          placeholder="Name and/or Company"
          disabled={loading}
          autoComplete="name"
          className={inputStyles}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="senderEmail" className="text-sm text-text-secondary">
          Email
        </label>
        <input
          {...register("senderEmail")}
          id="senderEmail"
          placeholder="your@email.com"
          type="email"
          disabled={loading}
          autoComplete="email"
          spellCheck={false}
          className={inputStyles}
        />
      </div>
      <div className="flex flex-col gap-2 col-span-2 max-[700px]:col-span-1">
        <label htmlFor="senderMessage" className="text-sm text-text-secondary">
          Message
        </label>
        <textarea
          {...register("senderMessage")}
          id="senderMessage"
          placeholder="Tell me about your project..."
          minLength={20}
          maxLength={2000}
          disabled={loading}
          autoComplete="off"
          className={`${inputStyles} min-h-[150px] resize-none`}
        />
      </div>
      <div>
        <button
          type="submit"
          disabled={loading}
          className="bg-accent hover:bg-accent-hover text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 disabled:opacity-50"
        >
          {loading ? (
            <span className="animate-pulse">Sending...</span>
          ) : (
            "Send Message"
          )}
        </button>
      </div>
    </form>
  );
};
