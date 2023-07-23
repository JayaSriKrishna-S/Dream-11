navigate(input.url);
final_data = parse()
collect(
{
 "name": input.name,
  "team": input.team,
  "battingStyle": final_data.battingStyle,
  "bowlingStyle": final_data.bowlingStyle,
  "playingRole":  final_data.playingRole,
  "description": final_data.content,
});


const battingStyle = $('div.ds-grid > div').filter(function(index){
    return $(this).find('p').first().text() === String('Batting Style')
  })

const bowlingStyle = $('div.ds-grid > div').filter(function(index){
    return $(this).find('p').first().text() === String('Bowling Style')
  })

const playingRole = $('div.ds-grid > div').filter(function(index){
    return $(this).find('p').first().text() === String('Playing Role')
  })



 return {
  	"battingStyle": battingStyle.find('span').text(),
   "bowlingStyle": bowlingStyle.find('span').text(),
   "playingRole": playingRole.find('span').text(),
   "content": $('div.ci-player-bio-content').find('p').first().text()
}