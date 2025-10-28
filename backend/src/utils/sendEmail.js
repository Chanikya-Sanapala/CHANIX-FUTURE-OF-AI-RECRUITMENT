const nodemailer = require('nodemailer');

module.exports = async (email, subject, text) =>{
    try{
        const transporter = nodemailer.createTransport({
            host: process.env.HOST,
            service: process.env.SERVICE,
            port: process.env.PORT_EMAIL,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        await transporter.sendMail({
            from: `"AI Smart Engine" <${process.env.EMAIL_USER}>`,
            to: "<recipient@example.com>",
            subject: "Test Email",
            text: "This is a test email sent from AI Smart Engine."
        });
    }catch(error){
        console.error("Error creating email transporter:", error);
        throw error;
    }
}


// ./utils/email.js

// require("dotenv").config();

// const nodemailer = require("nodemailer");

// const sendEmail = async (option) => {
//   try {
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });
//     const mailOption = {
//       from: process.env.EMAIL_USER,
//       to: option.email,
//       subject: option.subject,
//       html: option.message,
//     };
//     await transporter.sendMail(mailOption, (err, info) => {
//       if (err) console.log(err);
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

// const mailTemplate = (content, buttonUrl, buttonText) => {
//   return `<!DOCTYPE html>
//   <html>
//   <body style="text-align: center; font-family: 'Verdana', serif; color: #000;">
//     <div
//       style="
//         max-width: 400px;
//         margin: 10px;
//         background-color: #fafafa;
//         padding: 25px;
//         border-radius: 20px;
//       "
//     >
//       <p style="text-align: left;">
//         ${content}
//       </p>
//       <a href="${buttonUrl}" target="_blank">
//         <button
//           style="
//             background-color: #444394;
//             border: 0;
//             width: 200px;
//             height: 30px;
//             border-radius: 6px;
//             color: #fff;
//           "
//         >
//           ${buttonText}
//         </button>
//       </a>
//       <p style="text-align: left;">
//         If you are unable to click the above button, copy paste the below URL into your address bar
//       </p>
//       <a href="${buttonUrl}" target="_blank">
//           <p style="margin: 0px; text-align: left; font-size: 10px; text-decoration: none;">
//             ${buttonUrl}
//           </p>
//       </a>
//     </div>
//   </body>
// </html>`;
// };

// module.exports = { sendEmail, mailTemplate };