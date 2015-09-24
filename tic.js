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

function Player() {
	this.games =  0;
}

var playerOne = {
	type: 'even'

}

var cells = $('li');

function togglePlayerHover() {
	for(var i = 0; i < cells.length; i++) {
		($(cells[i])).toggleClass('even-hover');
	}
}
