'use strict';

module.exports = {
  contactForm: function(subscriber, configurations) {
    var email = {
      from: configurations.from,
      to: subscriber.email, 
      subject: configurations.emailTitle,
      text: "Hello "+(subscriber.name !== "" ? subscriber.name:"friend") +", "+configurations.message +". \n\n here --> "+configurations.link+" \n\n Best Regards, \n\n"+configurations.authorName,
    };
    return email;
  }
};