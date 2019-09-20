function CricketScoreKeeper() {
  let oversLeft = 0;
  let oversPlayed = 0;
  let overs = 0;
  let currentScore = 0; 
  let overCounter = 0;
  let score = 0;
  let wickets = 10;


  function isValidScore(over) {
    let overScore = Number(over);
    let regex = /^[w]{2}\s\d[-0-9\s]{1,6}$/;
    let result = regex.test(overScore);

    for (let index = 0; index < result.length; index++) {
      const validScore = result[index];
      if (validScore === true) {
      }
    }
    // return false;
  }

  function scoreKeeper(overScore) {
    if (overs !== oversPlayed) {
        const over = overScore || '';
       
        for (let i = 0; i < over.length; i++) {
 switch (over[i]) {
      case "w":
        score += 0;
      case "-":
       score += 0;
      case "1":
        score += 1;
      case "2":
        score += 2;
      case "3":
        score += 3;
      case "4":
        score += 4;
     case "5":
        score += 5;
    case "6":
        score += 6;
      default:
        score += 0;
    }
  }
}
 currentScore += score;
  }

  function overScoreTotal(){
      currentScore += score
  }

  function overallTotalScore(){
    return overScoreTotal++
  }

  function setOver(overs) {
    overs = oversLeft;
    overCounter = overs * 6;
    for (let i = 0; i < overs.length; i++) {
      const element = overs[i];
      element = overs;
    }
  }

  function wicketsLeft(){
      const wicketCheck = "w"
     for (let index = 0; index < wicketCheck.length; index++) {
         const element = wicketCheck[index];
         wickets.element--
     }
  }

  return {
    isValidScore,
    scoreKeeper,
    overScoreTotal,
    overallTotalScore,
    setOver,
    wicketsLeft
  };
}

module.exports = CricketScoreKeeper;
