navigate('https://stats.espncricinfo.com/ci/engine/records/team/match_results.html?id=14450;type=tournament');

let links = parse().matchSummaryLinks;
for(let i of links) { 
  next_stage({url: i}) 
}

let links = []
const allRows = $('table.ds-w-full > tbody > tr');
 allRows.each((index, element) => {
  const tds = $(element).find('td');
  const rowURL = "https://www.espncricinfo.com" +$(tds[6]).find('a').attr('href');
  links.push(rowURL);
 })
return {
  'matchSummaryLinks': links
};