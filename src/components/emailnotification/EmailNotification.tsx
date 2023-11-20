// import emailjs from "@emailjs/browser";


// const SendEmail = (email:[]) => {
//   if (
//     process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
//     process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
//     process.env.NEXT_PUBLIC_EMAILJS_USER_ID &&
//     email
//   ) {
//     emailjs
//       .sendForm(
//         process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
//         process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
//         email,
//         process.env.NEXT_PUBLIC_EMAILJS_USER_ID
//       )
//       .then(
//         (result) => {
//           alert(result.text);
//         },
//         (error) => {
//           alert(error.text);
//         }
//       );
//   }
// };
