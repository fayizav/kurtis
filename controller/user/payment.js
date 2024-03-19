const { log } = require("debug/src/browser");
const payment = require('../../helpers/user/payment')

const { category } = require("../../model/connection");

let loggedInStatus;


let loginStatus,username;



exports.verifyPayment= (req, res) => {
    try {
      payment
        .verifyPayment(req.body)
        .then((response) => {
            res.json({ status: true });
        })
        .catch((err) => {
          res.json({ status: "payment failed" });
        });
    } catch {
      res.render("error");
    }
  }
