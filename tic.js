// An array of board cells, This can be achieved using jQuery selector

// Winning combination arrays, possibly stored in an array

//A model for identiying which player is going, resulting in the correct color scheme
//This is could use an odd/even sequence, when the number is odd = Player one and vice versa






//Player One Model
//Player One View



//Player Two Model
//Player Two View




//Board Model
//Board View 


//Handlers for each cell


game = {
	cells: $('li'),

	setCombos: function () {
		this.combos = [
			[ this.cells[0], this.cells[1], this.cells[2] ],
			[ this.cells[3], this.cells[4], this.cells[5] ],
			[ this.cells[6], this.cells[7], this.cells[8] ],
			[ this.cells[0], this.cells[3], this.cells[6] ],
			[ this.cells[1], this.cells[4], this.cells[7] ],
			[ this.cells[2], this.cells[5], this.cells[8] ],
			[ this.cells[0], this.cells[4], this.cells[8] ],
			[ this.cells[2], this.cells[4], this.cells[6] ],

	 	]
	},
	getWinner: function() {
		for(var i = 0; i < game.combos.length; i++) {
    			if ($(this.combos[i][0]).hasClass('even-select') &&
    				$(this.combos[i][1]).hasClass('even-select') &&
    				$(this.combos[i][2]).hasClass('even-select')) {
    				console.log('even-wins');
    				playerOne.win();
    				playerOne.winAnimation();
    				game.resetBoard();
    				return playerOne.setScore();
    			} else if ($(this.combos[i][0]).hasClass('odd-select') &&
    					   $(this.combos[i][1]).hasClass('odd-select') && 
    					   $(this.combos[i][2]).hasClass('odd-select')) {
    				console.log('odd-wins')
    				 playerTwo.win();
    				 playerTwo.winAnimation();
    				 game.resetBoard();
    				 return playerTwo.setScore();
    			} else if ($(this.cells[0]).hasClass('selected') &&
    			 		   $(this.cells[1]).hasClass('selected') &&  
    			 		   $(this.cells[2]).hasClass('selected') &&
    			 		   $(this.cells[3]).hasClass('selected') &&
    			 		   $(this.cells[4]).hasClass('selected') &&
    			 		   $(this.cells[5]).hasClass('selected') &&
    			 		   $(this.cells[6]).hasClass('selected') &&
    			 		   $(this.cells[7]).hasClass('selected') &&
    			 		   $(this.cells[8]).hasClass('selected')) {
    				console.log('its a tie');
    				$(function(){
    					$('#tie').animate({
    						opacity: 1,
    						top: '-=2'
    					}, 500, function() {
    						$('#tie').animate({
    							top: '+=1'
    						}, 200, function() {
    							$('#tie').animate({
    								opacity: 0,
    								top: '+=1'
    							}, 200)
    						})
    					})
    				})
    				return game.resetBoard();
    			}
    		}

	},
	resetBoard: function() {
		$(this.cells).removeClass();
	},
	setHandlers: function() {
		($(this.cells)).on('click', function(e) {
			var board = $('#board');
			if(board.hasClass('even-hover')) {
				$(this).addClass('selected even-select')

				board.removeClass('even-hover');
				board.addClass('odd-hover');
				game.getWinner();
				
			} else {
				$(this).addClass('selected odd-select')

				board.removeClass('odd-hover');
				board.addClass('even-hover');
				game.getWinner();
			}
		})
	},
	renderWin: function() {

	}
}

playerOne = {
	score: 0, 
	scoreBoardDiv: $('#player-one-score'),
	scoreBoard: $('#player-one-score p'),
	playerOneInput: $('#player-one-input'),
	win: function() {
		this.score += 1;
	},
	winAnimation: function() {
		$('#point-one').animate({
			opacity: 1,
			top: '-=5'
		}, 500, function() {
			$('#point-one').animate({
				opacity: 0,
				top: '+=5'
			}, 300)
		})
	},
	setScore: function() {
		this.scoreBoard.text(playerOne.score);
	},
	addName: function() {
		var that = this;
		this.playerOneInput.on('keypress', function(e) {
				if(e.keyCode === 13) {
					that.scoreBoardDiv.append('<span>' + $(this).val() + '</span>')
					that.playerOneInput.hide();
				}
		})
	}
}

playerTwo = {
	score: 0, 
	scoreBoardDiv: $('#player-two-score'),
	scoreBoard: $('#player-two-score p'),
	playerTwoInput: $('#player-two-input'),
	win: function() {
		this.score += 1;
	},
	winAnimation: function() {
		$('#point-two').animate({
			opacity: 1,
			top: '-=5',
		}, 500, function() {
			$('#point-two').animate({
				opacity: 0,
				top: '+=5',
			}, 300)
		})
	},
	setScore: function() {
		this.scoreBoard.text(playerTwo.score);
	},
	addName: function() {
		var that = this;
		this.playerTwoInput.on('keypress', function(e) {
				if(e.keyCode === 13) {
					that.scoreBoardDiv.append('<span>' + $(this).val() + '</span>')
					that.playerTwoInput.hide();
				}
		})
	}
}

playerTwo.addName();
playerOne.addName();
game.setHandlers();
game.setCombos();
playerOne.setScore();
playerTwo.setScore();

