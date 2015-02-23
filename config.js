'use strict';

module.exports = {
  configurations: function() {
    var configs = {
      from : "example@example.com",
      maileAPIKey: "key-example",
      mailerDomain: "example.com",
      emailsList: "test.js",
      emailTitle: "Example Title",
      link: "http://www.example.com",
      message: "This message is before the link",
      authorName: "Example Author"
    }
    return configs;
  }
};

