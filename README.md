# Pokemon Catching App

## Application Concept and Wireframe

### Application Concept
-This is a pokemon catching app
-We will be utilizing the pokeAPI for the pokemon data
-Full CRUD
    -Get: get all pokemon 
    -Post: Caught pokemon will be posted to array
    -Put: Give pokemon new name
    -Delete: Release our pokemon back into the wild

### Functionality
-We want a header at the top of the page to display the name of our app
-When the app loads, three images of grass will be loaded on the screen
    -When the grass is clicked, we will reveal a wild pokemon
-Once we select a pokemon we will push that pokemon to our pokedex
-The pokedex will show the new caught pokemon
-The pokedex will show the name of the new caught pokemon
-The pokedex will have a button to release the pokemon

### Endpoints
-Get - fetch 3 random pokemon from pokeAPI (retrieve on front or back)
-Get - fetch our pokedex
-Post - push caught pokemon to our pokedex
-Put - change pokemon name
-Delete - delete our pokemon from pokedex

### Component Architecture
-App.js (stateful: hold our wild pokemon info)
    -Header.js (functional)
    -Finder.js (stateful: axios request to fetch three wild pokemon)
        -Grass.js (stateful: hold state of grass toggle this.state.grassClicked)
    -Pokedex.js (functional)
        -Pokemon.js (stateful: this.state.name, this.state.editing)
