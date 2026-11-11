import {PokemonType} from "../../../models/PokemonType.ts";


export const PokemonTypePill = ({type}: { type: PokemonType }) => {
    const backgroundColor: Record<PokemonType, string> = {
        [PokemonType.fire]: "orange",
        [PokemonType.water]: "blue",
        [PokemonType.unknown]: "grey",
    }

    const backgroundColorMapper = backgroundColor[type]
    return (
        <div className="pokemon-type-pill-wrapper">
            <div className="pokemon-type-pill-badge" style={{backgroundColor: backgroundColorMapper}}>
                <span className="pokemon-type-pill-label">{type}</span>
            </div>
        </div>
    )
}