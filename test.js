const credentails = require('./credentials.js');
const webdriverio = require('webdriverio');
const options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};

const url = 'https://mckinsey.moveinsync.com/Ncr/';
var username;
var password;

//console.log(credentails.username);

if (!credentails) {
  username = credentails.username;
  password = credentails.password;
} else {
  throw Error ('username and password not found. Please see readme.md to set it');
}

//console.log(username, password);

webdriverio
    .remote(options)
    .init()
    .url(url)
    .setValue('#username', username)
    .setValue("[name='j_password']", password)
    .click('.buttonstyle1')
    .waitForExist('.modifySchedule', 5000)
    .getTitle().then(function(title) {
        console.log('Title was: ' + title);
    })
    .isExisting('#login').then(function(isExisting) {
        console.log(isExisting); // outputs: false
    })
    /*.click("[name='weekList']")
    .getValue("[name='weekList']")
    .then(function(value) {
        currentWeekIndex = Number(value) + 1;
        console.log(this, value, currentWeekIndex);
    })*/
    .click("[name='weekList'] option[value='2']")
    //.selectByIndex("[name='weekList']", currentWeekIndex)
    //.click('#login')
    ///.end();
