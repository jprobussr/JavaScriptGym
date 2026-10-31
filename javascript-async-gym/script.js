const paymentApproved = true;

const processPayment = new Promise((resolve, reject) => {
    if (paymentApproved === true) {
        resolve('Payment successful');
    } else {
        reject('Payment declined');
    }
});

processPayment.then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});
