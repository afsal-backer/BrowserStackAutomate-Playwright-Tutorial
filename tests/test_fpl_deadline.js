const { expect, test } = require('@playwright/test');

let firstMatchTime;
let utcTime;

test('FPL Deadline Reminder', async ({ page, request }) => {
  //Visit the site
  await page.goto('https://draft.premierleague.com/fixtures');

  //Assert page is opened
  await expect(page).toHaveTitle("View Latest Premier League Fixtures | Fantasy Premier League Draft 2023/24");

  //Find the UTC time of the first match time displayed on the website
  firstMatchTime = await page.locator("(//time)[1]").getAttribute('datetime');
  utcTime = new Date(firstMatchTime);
  subtractHours(2,utcTime);
  
  let systemDate = new Date();

  //Check if deadline is today
  if(systemDate.getUTCDate()==utcTime.getUTCDate() && systemDate.getUTCDay()==utcTime.getUTCDay() && systemDate.getUTCFullYear()==utcTime.getUTCFullYear())
  {
    console.log("Today is FPL deadline day!");
    console.log("Next GW's first match is on: "+utcTime.toUTCString());
    console.log("FPL Transfer Deadline is on: "+utcTime.toUTCString())
  }
  else
  {
    console.log("Deadline is not today!");
    console.log("Next GW's first match is on: "+utcTime.toUTCString());
    console.log("FPL Transfer Deadline is on: "+utcTime.toUTCString())
  }
});

//Deadline is 2 hours before the kick-off time so calculate that using this method
function subtractHours(numOfHours, time) {
  time.setHours(time.getHours() - numOfHours);
  return time;
}



