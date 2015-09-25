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



/* This toggles the hover style of the TTT board cells
   based on player turn. This should be run everytime 
   an event handler fires to ensure the next players color
   is activated 
*/




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
		for(var i = 0; i < game.combos.length; i++){
    			if($(this.combos[i][0]).hasClass('even-select') && $(this.combos[i][1]).hasClass('even-select') && $(this.combos[i][2]).hasClass('even-select')) {
    				console.log('even-wins')
    			} else if($(this.combos[i][0]).hasClass('odd-select') && $(this.combos[i][1]).hasClass('odd-select') && $(this.combos[i][2]).hasClass('odd-select')) {
    				console.log('odd-wins')
    			}

    		}

	},
	setHandlers: function() {
		($(this.cells)).on('click', function(e) {
			var board = $('#board');
			console.log(this);
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

var playerOneScore = $('#player-one-score');


game.setHandlers();
game.setCombos();

