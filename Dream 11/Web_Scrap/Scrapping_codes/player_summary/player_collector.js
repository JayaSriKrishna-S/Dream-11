navigate(input.url);


let playersData = parse().playersData;
for(let obj of playersData) { 
  name = obj['name']
  team = obj['team']
  url = obj['link']
  next_stage({name: name, team: team, url: url}) 
}
var playersLinks = []

const team1 = $("span.ds-capitalize:eq(0)").text();
const team2 = $("span.ds-capitalize:eq(1)").text();

//for batting players
var tables = $('div > table.ci-scorecard-table');
var firstInningRows = $(tables.eq(0)).find('tbody > tr').filter(function(index, element){
  return $(this).find("td").length >= 8
})

var secondInningsRows = $(tables.eq(1)).find('tbody > tr').filter(function(index, element){
  return $(this).find("td").length >= 8
});

firstInningRows.each((index, element) => {
  var tds = $(element).find('td');
  playersLinks.push({
  		"name": $(tds.eq(0)).find('a > span > span').text().replace(' ', ''),
    	"team": team1,
    	"link": "https://www.espncricinfo.com" + $(tds.eq(0)).find('a').attr('href')  
  });
});

secondInningsRows.each((index, element) => {
  var tds = $(element).find('td');
   playersLinks.push({
  		"name": $(tds.eq(0)).find('a > span > span').text().replace(' ', ''),
     	"team": team2,
     	"link": "https://www.espncricinfo.com" + $(tds.eq(0)).find('a').attr('href')  
  });
});

//for bowling players 

var tables = $('div > table.ds-table');
var firstInningRows = $(tables.eq(1)).find('tbody > tr').filter(function(index, element){
  return $(this).find("td").length >= 11
})

var secondInningsRows = $(tables.eq(3)).find('tbody > tr').filter(function(index, element){
  return $(this).find("td").length >= 11
});


firstInningRows.each((index, element) => {
  var tds = $(element).find('td');
  playersLinks.push({
   		"name": $(tds.eq(0)).find('a > span').text().replace(' ', ''),
    	"team": team2.replace(" Innings", ""),
    	"link": "https://www.espncricinfo.com" + $(tds.eq(0)).find('a').attr('href')  
    	
  });
});

secondInningsRows.each((index, element) => {
  var tds = $(element).find('td');
   playersLinks.push({
  		"name": $(tds.eq(0)).find('a > span').text().replace(' ', ''),
    	"team": team1.replace(" Innings", ""),
    	"link": "https://www.espncricinfo.com" + $(tds.eq(0)).find('a').attr('href')
  });
});
  
return {"playersData": playersLinks}
 