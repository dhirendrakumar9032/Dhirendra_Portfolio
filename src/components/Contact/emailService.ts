// emailService.ts
import emailjs from "emailjs-com";

export const sendEmail = (
  serviceID: string,
  templateID: string,
  userID: string,
  values: { [key: string]: string }
) => {
  return emailjs.send(serviceID, templateID, values, userID);
};
