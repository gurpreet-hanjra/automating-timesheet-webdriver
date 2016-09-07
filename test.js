var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'firefox'
    }
};

var currentWeekIndex = 0;

var url = 'https://mckinsey.moveinsync.com/Ncr/',
    username = 'gurpreet_singh_hanjra@mckinsey.com',
    password = 'gyrml@143';

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
