"use server";
import { contactFormSchema } from "@/lib/validations";

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

  if (result.success) {
    return { success: true, data: [] };
  }

  const errors =
    result.error?.issues.map((err) => ({
      path: err.path[0],
      message: err.message,
    })) || [];

  return { success: false, data: errors };

  // Send the email
};
