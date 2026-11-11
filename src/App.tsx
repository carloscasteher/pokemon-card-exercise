import './App.css'
import {PokemonCard} from "./components/PokemonCard/PokemonCard.tsx";

function App() {
    return (
        <div style={{padding: "50px", display: "flex", alignItems: "center", gap: "24px", backgroundColor: "grey", width: "50%"}}>
            <PokemonCard name="charmander"/>
            <PokemonCard name="charmeleon"/>
            <PokemonCard name="charizard"/>
            <PokemonCard name="ponyta"/>
            <PokemonCard name="growlithe"/>
        </div>
    )
}

export default App
