import React from "react";
import { SectionTitle } from "@components/SectionTitle";
import { Form } from "..";

export const ContactForm: React.FC = () => {
  return (
    <section className="w-full">
      <SectionTitle label="Contact" title="Get In Touch" />
      <p className="mt-4 text-text-secondary">
        Have a project in mind? Let&apos;s talk.
      </p>
      <Form />
    </section>
  );
};
