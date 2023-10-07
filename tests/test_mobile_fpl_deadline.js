const { expect } = require('@playwright/test');
const { test } = require("../fixture");

let firstMatchTime;
let utcTime;

test('@Mobile Check which team is the table topper',async ({ page }, testInfo) => {
  try {
    await page.evaluate((_) => {},
    `browserstack_executor: ${JSON.stringify({ action: "setSessionName", arguments: { name: testInfo.project.name } })}`);
    await page.waitForTimeout(5000);
  
   // visit the site
   await page.goto('https://www.premierleague.com/tables');

   await page.locator("//button[text()='Accept All Cookies']").click();

   // get name of the team that is first in the table
   const teamName = await page.locator('(//span[@class="league-table__team-name league-table__team-name--long long"])[1]').textContent();
 
   console.log("Team that is on top of the table is: "+teamName);

  await page.evaluate((_) => {},
  `browserstack_executor: ${JSON.stringify({ action: "setSessionStatus", arguments: { status: "passed", reason: "Found the table topper" } })}`);
  } catch (e) {
    console.log(e);
    await page.evaluate((_) => {},
    `browserstack_executor: ${JSON.stringify({ action: "setSessionStatus", arguments: { status: "failed", reason: "Test failed" } })}`);
  }

});


