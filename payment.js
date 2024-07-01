const Paytm = require('paytm-sdk-nodejs'); // Example SDK, replace with actual

const paytmConfig = {
    mid: 'YOUR_MID',
    key: 'YOUR_KEY',
    website: 'YOUR_WEBSITE'
};

const paytm = new Paytm(paytmConfig);

app.post('/pay', (req, res) => {
    const { amount, orderId, customerId } = req.body;

    const paymentDetails = {
        amount,
        orderId,
        customerId,
        callbackUrl: 'YOUR_CALLBACK_URL'
    };

    paytm.createTransaction(paymentDetails, (err, response) => {
        if (err) throw err;
        res.send(response);
    });
});
