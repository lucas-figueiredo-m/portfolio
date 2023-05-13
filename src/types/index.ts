export type ObjectValues<T> = T[keyof T];

export type ContactFormType = {
  senderName: string;
  senderEmail: string;
  senderMessage: string;
};

export type LogoObject<T extends string> = {
  [key in T]: React.ReactElement;
};
