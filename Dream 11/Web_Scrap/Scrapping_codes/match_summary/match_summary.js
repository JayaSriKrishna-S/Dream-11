match_summary='https://stats.espncricinfo.com/ci/engine/records/team/match_results.html?id=14450;type=tournament'
navigate(match_summary);
collect(parse());


let matchSummaries = [];

const targetTableRows = $('table.ds-w-full > tbody > tr');

for (let rowIndex = 0; rowIndex < targetTableRows.length; rowIndex++) {
  const tableCells = $(targetTableRows[rowIndex]).find('td'); // Find the td
  matchSummaries.push({
    'team1': $(tableCells[0]).text(),
    'team2': $(tableCells[1]).text(),
    'winner': $(tableCells[2]).text(),
    'margin': $(tableCells[3]).text(),
    'ground': $(tableCells[4]).text(),
    'matchDate': $(tableCells[5]).text(),
    'scorecard': $(tableCells[6]).text(),
  });
}

return{
  "matchSummaries": matchSummaries
};


