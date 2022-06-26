let words = [
    {
        "inputs":5,
        "category":"Sports",
        "word":"Chess"
    },
    {
        "inputs":6,
        "category":"European Country Name",
        "word":"France"
    },
    {
        "inputs":9,
        "category":"Sports",
        "word":"Badminton"
    },
    {
        "inputs":8,
        "category":"A part of Art and Craft",
        "word":"Painting"
    },
    {
        "inputs":7,
        "category":"The most important part in the 3 divisions of Science",
        "word":"Biology"
    },
]


$(document).ready(function () {
    fillBlanks();
})

function fillBlanks() {
    const randomWord = words[Math.floor(Math.random() * words.length)];

    $("#blanks").empty();

    //Show blanks uisng <span>
    for (let i = 0; i < randomWord.inputs; i++) {
        let input_html = `<span class="fill_blanks" id="input_${i}">_</span>`
        $("#blanks").append(input_html)
    }

    //Show Hint
    $("#hint").html(randomWord.category)

    var gameOver=false
    $(".clickable").click(function () {
        var correctGuess = false;      

        let id = $(this).attr("id");

        var life = parseInt($("#life").text())

        for (var i = 0; i < randomWord.word.length; i++) {
            if (randomWord.word.charAt(i).toLowerCase() == id) {

                if (life > 0 && ($(".fill_blanks").eq(i).html() == "_" || $(".fill_blanks").eq(i).html() == id)) {

                    //fill blanks
                    $(".fill_blanks").eq(i).html(id);
                    correctGuess = true;

                    if ($("#blanks").text() === randomWord.word.toLowerCase()) {
                        $("#result").text("You Win!!")
                        correctGuess = true;
                        gameOver=true
                    }
                }                
            }
        }
       
        if (life > 0 && correctGuess!=true && gameOver!=true) {           
            life = life - 1
            $("#life").text(life)
        }
        else if (life == 0) {
            $("#result").text("You Lost!!")
        }
    })
}