import cron from "node-cron";
import nodemailer from "nodemailer";
import Mailgen from "mailgen";
import * as dotenv from "dotenv";

dotenv.config();

//Send an email after one minute
export const mailerCron = (message: {
  fullName: string;
  email: string;
  message: string;
}) => {
  return cron.schedule(afterOneMin(), async function job() {
    const FROM_EMAIL: string = process.env.SENDER_MAIL!;
    const FROM_MAIL_PASSWORD: string = process.env.SENDER_MAIL_PASSWORD!;
    const TO_EMAIL: string = process.env.RECEIVER_MAIL!;
    //Creating transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: FROM_EMAIL,
        pass: FROM_MAIL_PASSWORD,
      },
    });

    const MailGenerator = new Mailgen({
      theme: "default",
      product: {
        name: "Aime Ndayambaje Portfolio",
        link: "https://aimelive.netlify.app/",
      },
    });

    const response = {
      body: {
        name: "Aime Ndayambaje",
        intro:
          "You've received new contact message from your portoflio website form",
        table: {
          data: [
            {
              sender: message.fullName,
              email: message.email,
              message: message.message,
            },
          ],
        },
        outro: message.message,
      },
    };

    const mail = MailGenerator.generate(response);

    // Define the message to be sent
    const mailMessage = {
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `Portfolio message - ${message.fullName}`,
      html: mail,
    };
    // // Send the message using the created transport object
    transporter.sendMail(mailMessage, (error) => {
      if (error) {
        console.log("Email service not working ", error);
      }
      mailerCron(message).stop();
    });
  });
};

function afterOneMin(): string {
  const date = new Date();
  return `${date.getSeconds()} ${
    date.getMinutes() + 1
  } ${date.getHours()} ${date.getDate()} ${
    date.getMonth() + 1
  } ${date.getDay()}`;
}
