"use server";
import { contactFormSchema } from "@/lib/validations";
import { EmailTemplate } from "@/components/email-template/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type Response = {
  success: boolean;
  data: {
    path: string | number;
    message: string;
  }[];
};

type PrevState = {
  success: boolean;
  data: Array<{
    path: string | number;
    message: string;
  }>;
};

export const sendEmail = async (
  prevState: PrevState,
  formData: FormData,
): Promise<Response> => {
  const payload = Object.fromEntries(formData.entries());
  const result = contactFormSchema.safeParse(payload);

  if (!result.success) {
    const errors =
      result.error?.issues.map((err) => ({
        path: err.path[0],
        message: err.message,
      })) || [];

    return { success: false, data: errors };
  }

  try {
    const { name, message, email } = result.data;

    const data = await resend.emails.send({
      from: email,
      to: ["definitelywebdev@yahoo.com"],
      subject: `${name}`,
      text: message,
      // react: EmailTemplate({ message }) as React.ReactElement,
    });

    if (data?.error) {
      throw data.error;
    }

    return { success: true, data: [] };
  } catch (err) {
    return {
      success: false,
      data: [
        {
          path: "serverError",
          message: "We're currently experiencing technical difficulties. Please try again later.",
        },
      ],
    };
  }

  // Send the email
};
