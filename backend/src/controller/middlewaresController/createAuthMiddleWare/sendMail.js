const { emailVerfication, passwordVerfication } = require('../../../emailTemplate/emailVerification');

const { Resend } = require('resend');

const sendMail = async ({
    email,
    name,
    link,
    accufirm_app_email,
    subject = 'verify your email | idurar',
    type = 'emailVerification',
    emailToken,
}) => {
    const resend = new Resend();

    const { data } = await resend.emails.send({
        from: accufirm_app_email,
        to: email,
        subject,
        html:
            type === 'emailVerification'
                ? emailVerfication({ name, link, emailToken })
                : passwordVerfication({ name, link }),
    });
    return data;
};

module.exports = sendMail;