import {useFetchPokemonByName} from "../../api-client/PokeApiClient.ts";
import {PokemonCardRoot} from "./components/PokemonCardRoot.tsx";
import {PokemonHealthPill} from "./components/PokemonHealthPill.tsx";
import {PokemonImage} from "./components/PokemonImage.tsx";
import {PokemonTypePill} from "./components/PokemonTypePill.tsx";
import {PokemonName} from "./components/PokemonName.tsx";
import {PokemonStats} from "./components/PokemonStats.tsx";

export const PokemonCard = ({name}: { name: string }) => {
    const pokemon = useFetchPokemonByName(name)

    if (!pokemon) return null

    return (
        <PokemonCardRoot>
            <PokemonHealthPill healthPoints={pokemon.health}/>
            <PokemonImage imageUrl={pokemon.imageUrl}/>
            <PokemonName name={pokemon.name}/>
            <PokemonTypePill type={pokemon.types[0]}/>
            <PokemonStats attack={pokemon.attack} defense={pokemon.defense} speed={pokemon.speed}/>
        </PokemonCardRoot>

    )
}
