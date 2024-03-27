// import { useForm } from "react-hook-form";
// import { useState, useTransition } from "react";
// // import { register as registerAction } from "app/actions/register";
// import { useRegisterMutation } from "app/redux/features/authApiSlice";

// type FormInputs = {
//   first_name: string;
//   last_name: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
//   terms: boolean;
// };

// export default function useRegister() {

//   const [error, setError] = useState<string | undefined>("");
//   const [success, setSuccess] = useState<string | undefined>("");
//   const [isPending, startTransition] = useTransition();
//   const [register2, { isLoading }] = useRegisterMutation();

//   const {
//     register,
//     watch,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormInputs>();

//   const password = watch("password");
//   const confirmPassword = watch("confirmPassword");

//   const onSubmit = handleSubmit((data: any) => {
//     register2(data)
//       .unwrap()
//       .then(() => {
//         setError(undefined);
//         setSuccess("You have been registered successfully");
//       })
//       .catch(() => {
//         setSuccess(undefined);
//         setError("There was an error while registering, please try again");
//       });

//     // startTransition(() => {
//     //   registerAction(data).then((data) => {
//     //     if (data?.error) {
//     //       console.log(data.error);
//     //       setSuccess(undefined);
//     //       setError(data.error);
//     //     }
//     //     if (data?.success) {
//     //       setError(undefined);
//     //       setSuccess(data.success);
//     //     }
//     //   });
//     // });
//   });
// }
