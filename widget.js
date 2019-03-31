const directions = {
  "default": {
    "stripe": { "x": "400", "y": "0" },
    "name": { "x": "200", "y": "40" },
    "score": { "x": "450", "y": "40" }
  },
  "reverse": {
    "stripe": { "x": "100", "y": "0" },
    "name": { "x": "300", "y": "40" },
    "score": { "x": "50", "y": "40" }
  }
}

const def = 

window.addEventListener('onWidgetLoad', function (obj) {
  const teamADirection = obj["detail"]["fieldData"]["teamADirection"]
  
  $("#teamA > .stripe").attr(directions[teamADirection]["stripe"])
  $("#teamA > .name").attr(directions[teamADirection]["name"])
  $("#teamA > .score").attr(directions[teamADirection]["score"])
  
  const teamBDirection = obj["detail"]["fieldData"]["teamBDirection"]
  
  $("#teamB > .stripe").attr(directions[teamBDirection]["stripe"])
  $("#teamB > .name").attr(directions[teamBDirection]["name"])
  $("#teamB > .score").attr(directions[teamBDirection]["score"])
  
  const teamAScore = parseInt(obj["detail"]["fieldData"]["teamAScore"])
  const teamBScore = parseInt(obj["detail"]["fieldData"]["teamBScore"])
  const bestOf     = parseInt(obj["detail"]["fieldData"]["bestOf"])
  const sum        = teamAScore + teamBScore + 1
  // const text       = `Game ${sum} of ${bestOf}`
  const text       = 'Game ' + sum + ' of ' + bestOf
  
  $("#series > text").text(text)
})
