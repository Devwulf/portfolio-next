import sendgrid from "@sendgrid/mail";
import DOMPurify from "isomorphic-dompurify";
import { NextApiRequest, NextApiResponse } from "next";
import isEmail from "validator/lib/isEmail";

sendgrid.setApiKey(process.env.SENDGRID_API as string);

type Data = {
    error: string;
};

async function sendEmail(req: NextApiRequest, res: NextApiResponse<Data>) {
    try {
        const email = process.env.EMAIL;
        if (!email || !isEmail(email))
            throw new ReferenceError("An email was not specified.");

        const emailTo = process.env.EMAIL_TO;
        if (!emailTo || !isEmail(emailTo))
            throw new ReferenceError("Email to was not specified.");

        const reqEmail = req.body.email;
        if (!isEmail(reqEmail))
            throw new ReferenceError("Given email was not in email form.");

        await sendgrid.send({
            to: emailTo,
            from: email,
            subject: `Portfolio - ${DOMPurify.sanitize(req.body.name)} contacted you!`,
            html: `<div><p>${DOMPurify.sanitize(req.body.message)}</p><p>Reply address: ${DOMPurify.sanitize(reqEmail)}</p></div>`
        });
    } catch (error: any) {
        return res
            .status(error.statusCode || 500)
            .json({ error: error.message });
    }

    return res.status(200).json({ error: "" });
}

export default sendEmail;
