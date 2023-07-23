// Navigate to the given URL
batting_sum='https://stats.espncricinfo.com/ci/engine/records/team/match_results.html?id=14450;type=tournament'
navigate(batting_sum);

// Assuming parse() returns an object with matchSummaryLinks property containing an array of URLs
const matchSummariesLinks = parse().matchSummaryLinks;

// Loop through each link and call next_stage() with the URL
for (const matchSummaryLink of matchSummariesLinks) {
  // Assuming next_stage() is a function to process the link
  next_stage({ url: matchSummaryLink });
}

let matchSummaryLinks = [];

// Select all rows from the target table
const allRows = $('table.ds-w-full > tbody > tr');

// Loop through each row and extract the URL from the 7th column
allRows.each((index, element) => {
  const tds = $(element).find('td');
  const rowURL = "https://www.espncricinfo.com" + $(tds[6]).find('a').attr('href');
  matchSummaryLinks.push(rowURL);
});

// Return the extracted links
return {
  'matchSummaryLinks': matchSummaryLinks
};