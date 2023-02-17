const body = document.body;
let itemnumber = 5;
async function init() {

  const response = await fetch("pokemons.json")
  const data = await response.json(response)

  function createHtml(everyRowColumnNumber) {
    var pokemonCount = data.length;
    var everyRowItemNumber =
      pokemonCount / everyRowColumnNumber +
      (pokemonCount % everyRowColumnNumber);
    return newContainer(everyRowItemNumber, everyRowColumnNumber);
  }

  function newContainer(everyRowItemNumber, everyRowColumnNumber) {
    var conatiner = document.createElement("div"); //createing a new container
    conatiner.className = "container";
    conatiner.appendChild(newHeader());
    conatiner.appendChild(newMain(everyRowItemNumber, everyRowColumnNumber));
    return conatiner;
  }

  function newHeader() {
    var header = document.createElement("header"); //creating a new header
    var h1 = document.createElement("h1"); //creating a new h1
    h1.textContent = "Pokedex!";
    header.appendChild(h1);
    return header;
  }

  function newMain(everyRowItemNumber, everyRowColumnNumber) {
    var main = document.createElement("main"); //creating a new main
    var counter = 0;
    for (var i = 0; i < everyRowItemNumber; i++) {
      var ul = newRow();

      for (var j = 0; j < everyRowColumnNumber; j++) {
        var li = newColumn(counter);
        counter++;
        ul.appendChild(li);
      }

      main.appendChild(ul);
    }
    return main;
  }

  function newRow() {
    var ul = document.createElement("ul"); //creating a new ul
    return ul;
  }

  function newColumn(i) {
    const li = document.createElement("li"); //creagin a new li
    const span1 = document.createElement("span"); //creating a new imgholder
    span1.className = "imgholder";
    const img = document.createElement("img"); //creating a new img
    img.src = data[i].image; //insert image
    const span2 = document.createElement("span"); //creating a new nameholder
    span2.textContent = data[i].name; //insert name
    const span3 = document.createElement("span"); //creating a new fectionholder
    span3.textContent = data[i].type; //insert fection
    span3.className = "fection";
    colorize(span3, li);
    span1.appendChild(img);
    li.appendChild(span1);
    li.appendChild(span2);
    li.appendChild(span3);
    return li;
  }

  function colorize(span3, li) {
    if (span3.textContent === "grass") {
      li.style.backgroundColor = "lightgreen";
    } else if (span3.textContent === "fire") {
      li.style.backgroundColor = "lightsalmon";
    } else if (span3.textContent === "water") {
      li.style.backgroundColor = "lightblue";
    } else if (span3.textContent === "bug") {
      li.style.backgroundColor = "khaki";
    } else if (span3.textContent === "ground") {
      li.style.backgroundColor = "peru";
    } else if (span3.textContent === "fairy") {
      li.style.backgroundColor = "violet";
    } else if (span3.textContent === "normal") {
      li.style.backgroundColor = "aqua";
    } else if (span3.textContent === "poison") {
      li.style.backgroundColor = "mediumpurple";
    } else if (span3.textContent === "electric") {
      li.style.backgroundColor = "darkorange";
    } else if (span3.textContent === "ghost") {
      li.style.backgroundColor = "darkorchid";
    } else if (span3.textContent === "rock") {
      li.style.backgroundColor = "grey";
    } else if (span3.textContent === "psychic") {
      li.style.backgroundColor = "darkgoldenrod";
    } else if (span3.textContent === "fighting") {
      li.style.backgroundColor = "blue";
    }
  }

  body.appendChild(createHtml(itemnumber));
}

init();
