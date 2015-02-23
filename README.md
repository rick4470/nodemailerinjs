## Node Mailer Implementation with a list of emails

This application will allow you to send a messages to list of individuals quickly with [Mail Gun](http://www.mailgun.com/), the program is design to read in all the contacts from `test.js` and start emailing each of the contacts with a predefined template.

Example of the template:
```html
Hello Rick, This message is before the link.

here --> http://www.example.com

Best Regards,

Example Author
```

The variables that are open for you modifications can be found at `config.js`, modify them to your liking and the application will react accordingly.

```javascript
{
  "from" : "example@example.com",
  "maileAPIKey": "key-example",
  "mailerDomain": "example.com",
  "emailsList": "test.js",
  "emailTitle": "Example Title",
  "link": "http://www.example.com",
  "message": "This message is before the link",
  "authorName": "Example Author"
}
```

## Install
To get started using the package follow the steps below:

### Step 1
`npm install`

### Step 2
Add your list of email addresses to `test.js` and
modify the application variables `config.js`

### Step 3
Send your emails! 
```bash
node app.js
```
