const GameBoard = (() =>{

    var gameBoardSelect = document.getElementById("gameboard")
    var scoreHolder = ["square1", "square2", "square3", "square4", "square5", "square6", "square7", "square8", "square9"]
    var counter = 1


    function addSymbol() { 
        if (this.innerHTML == "") {
            this.innerHTML = "X";
            counter +=1;
            var clickedSquare = this;
            scoreHolder = scoreHolder.filter(function(item) {
                return item !== clickedSquare.className;
            });
        }
        computerTurn();
    }
            
            
    function computerTurn() {
        if (counter % 2 == 0 && scoreHolder.length !== 0) {
            var randomNumber = Math.floor(Math.random() * (scoreHolder.length-1));
            var chooseSquare = scoreHolder[randomNumber]
            var square = document.querySelector("." + chooseSquare);
            if (square.innerHTML == "") {
                (square.innerHTML) = "O";
                counter +=1
                scoreHolder = scoreHolder.filter(function(item) {
                    return item !== chooseSquare
                });

                    
            }
                
                
                
        }
    }

            





    for (var i =1; i <10; i++) {
        var square2 = document.querySelector(".square" + i)
        square2.addEventListener("click", addSymbol);
    }

    







    
})();

const Game = (() => {



})








