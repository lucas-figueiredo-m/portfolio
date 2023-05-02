export type ObjectValues<T> = T[keyof T];

export type ContactFormType = {
  senderName: string;
  senderEmail: string;
  senderMessage: string;
};
