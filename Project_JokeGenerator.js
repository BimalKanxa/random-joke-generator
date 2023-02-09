function randomJokes(jok){
    const randomJoke = Math.floor(Math.random()*jok.length); //get random index value
    const Joke = jok[randomJoke];
    return Joke;
}

let jokes  = [
    "\"Why is England the wettest country? Because the queen reigned there for decades\"",
    "\"What did the full glass say to the empty glass? \"You look drunk\"",
    "\"You don't need a parachute to go skydiving. You need a parachute to go skydiving twice. \"",
    "\"Parallel Lines have so much in commom. It's a shame they'll never meet. \"",
    "\"Women only call me ugly until they find out how much money I make. Then they call me ugly and poor.\"",
    "\"I Broke my finger last week. On the other hand, I'm okay.\"",
    "\"Why do cows wear bells? Because their horns don't work. \" ",
    "\"What happened when the strawberry attempted to cross the road? There was a traffic jam! \"",
    "\"A physicist sees a young man about to jump off the Empire State Building. He yells Don't do it! You have so much potential!\"",
    "\"Why can't orphans play baseball? Because they don't know where home is 😂\""
]



function showJokes() {
    let displayJoke  = randomJokes(jokes);
    document.getElementById("DisplayJoke").value = displayJoke;
}
