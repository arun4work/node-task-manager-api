const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    const msg = {
        to: email,
        from: 'a24ren@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
    };
    sgMail.send(msg);
};

const sendCancelEmail = (email, name) => {
    const msg = {
        to: email,
        from: 'a24ren@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye ${name}!. I hope to see you back sometime soon.`,
    };
    sgMail.send(msg);
};

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail,
};
