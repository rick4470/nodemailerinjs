'use strict';
/**
 * Module dependencies.
 */
var nodemailer = require('nodemailer'),
    mg = require('nodemailer-mailgun-transport'),
    templates = require('./template'),
    fs = require('fs'),
    configurations = require('./config').configurations();


console.log('Reading in all your  email list......');
var emailList = JSON.parse(fs.readFileSync(configurations.emailsList, 'utf8'));

var auth = {
  auth: {
    api_key: configurations.maileAPIKey,
    domain: configurations.mailerDomain
  }
};

function validateEmail(email) { 
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function sendEmail(subscriber){
  console.log('Authenticating with your mailgun credentials....');
  var nodemailerMailgun = nodemailer.createTransport(mg(auth));
  nodemailerMailgun.sendMail(templates.contactForm(subscriber, configurations),function (err, info) {
    if (!err) {
      console.log('Messsage sent to: ' + subscriber.email);
    }
    else {
      console.log('ERROR!!!--->'+err);
    }
  });
}

console.log('Processing emails');

for (var i = 0; i < emailList.length; i++) {
  if (validateEmail(emailList[i].subscriber.email)) {
    sendEmail(emailList[i].subscriber);
  }
}

console.log('All done, have a great day!');

