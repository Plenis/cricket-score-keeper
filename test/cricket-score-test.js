let assert = require("assert");
let CricketScoreKeeper = require("../cricket-score-keeper");

describe('Cricket Score Keeper' , function(){
    it('should check if over is a valid score' , function(){
        let instance = CricketScoreKeeper();
        instance.setOver('21224332433413')
        instance.setOver('--1-w-')

        assert.equal(instance.isValidScore(false));
        assert.equal(instance.isValidScore(true))
    })

    it('should get the number of overs for the game' , function(){
        let instance = CricketScoreKeeper();
        instance.setOver(5)
        instance.setOver(2)

        assert.equal(instance.setOver(30));
        assert.equal(instance.setOver(12));
    })

    it('should return the total score for each over', function(){
        let instance = CricketScoreKeeper();
        instance.scoreKeeper('------')
        instance.scoreKeeper('-w-2-3')
        instance.scoreKeeper('-6-11-3')
        instance.scoreKeeper('-10-2-w')
        instance.scoreKeeper('12--2-3')

        assert.equal(instance.overScoreTotal(0));
        assert.equal(instance.overScoreTotal(5));
        assert.equal(instance.overScoreTotal(20));
        assert.equal(instance.overScoreTotal(12));
        assert.equal(instance.overScoreTotal(17));
    })

    // it('should return the overall total for the game' , function(){
    //     let instance = CricketScoreKeeper();
    //     instance.overScoreTotal(5)
    //     instance.overScoreTotal(10)
    //     instance.overScoreTotal(6)

    //     assert.equal(instance.overallTotalScore(21));
    // })

    it('should give the number of wickets left', function(){
        let instance = CricketScoreKeeper();
        instance.scoreKeeper('-w-2-3')
        instance.scoreKeeper('ww--3-')

        assert.equal(instance.wicketsLeft(9));
        assert.equal(instance.wicketsLeft(8));
    })

});