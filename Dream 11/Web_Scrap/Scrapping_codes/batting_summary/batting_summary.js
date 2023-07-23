navigate(input.url);
collect(parse());

const team1 = $("span.ds-capitalize:eq(0)").text();
const team2 = $("span.ds-capitalize:eq(1)").text();
const matchInfo = team1 + ' Vs ' + team2;

// Extract data from the first innings table
const firstInningRows = $('div > table.ci-scorecard-table').eq(0).find('tbody > tr').filter(function(index, element) {
  return $(this).find("td").length >= 8;
});

// Extract data from the second innings table
const secondInningRows = $('div > table.ci-scorecard-table').eq(1).find('tbody > tr').filter(function(index, element) {
  return $(this).find("td").length >= 8;
});

// Prepare batting summary data for both innings
const battingSummary = [];

firstInningRows.each((index, element) => {
  const tds = $(element).find('td');
  battingSummary.push({
    "match": matchInfo,
    "teamInnings": team1,
    "battingPos": index + 1,
    "batsmanName": $(tds.eq(0)).find('a > span > span').text().replace(' ', ''),
    "dismissal": $(tds.eq(1)).find('span > span').text(),
    "runs": $(tds.eq(2)).find('strong').text(),
    "balls": $(tds.eq(3)).text(),
    "4s": $(tds.eq(5)).text(),
    "6s": $(tds.eq(6)).text(),
    "SR": $(tds.eq(7)).text()
  });
});

secondInningRows.each((index, element) => {
  const tds = $(element).find('td');
  battingSummary.push({
    "match": matchInfo,
    "teamInnings": team2,
    "battingPos": index + 1,
    "batsmanName": $(tds.eq(0)).find('a > span > span').text().replace(' ', ''),
    "dismissal": $(tds.eq(1)).find('span > span').text(),
    "runs": $(tds.eq(2)).find('strong').text(),
    "balls": $(tds.eq(3)).text(),
    "4s": $(tds.eq(5)).text(),
    "6s": $(tds.eq(6)).text(),
    "SR": $(tds.eq(7)).text()
  });
});

// Return the batting summary data
return {"battingSummary": battingSummary};
