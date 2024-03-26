"use server";

import { getUserByEmail } from "app/data/user";
import { RegisterSchema } from "app/schemas";
import bcrypt from "bcrypt";
import * as z from "zod";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  console.log(values);
  const validatedFields = RegisterSchema.safeParse(values);
  //console.log(validatedFields);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password, name, surname } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

//   const existingUser = await getUserByEmail(email);

//   if (existingUser) {
//       return { error: "Email already in use!" };
//   }

  try {
    const newUserResponse = await fetch(
      "https://idio-mind-backend-ten.vercel.app/api/Accounts/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: name,
          last_name: surname,
          email: email,
          password: hashedPassword,
        }),
      }
    );
    if (!newUserResponse.ok) {
      throw new Error(`HTTP error! status: ${newUserResponse.status}`);
    }
  } catch (error) {
    console.error("An error occurred:", error);
    return { error: (error as Error).message};
  }

  // TODO: Send verification email

  return { success: "A confirmation email was sent!, please confirm it and then log in" };
};
