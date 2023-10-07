const { expect, test } = require('@playwright/test');

test('Check which team is the table topper', async ({ page }) => {
  // visit the site
  await page.goto('https://www.premierleague.com/tables');

  // get name of the team that is first in the table
  const teamName = await page.locator('(//span[@class="league-table__team-name league-table__team-name--long long"])[1]').textContent();

  console.log("Team that is on top of the table is: "+teamName);
});
