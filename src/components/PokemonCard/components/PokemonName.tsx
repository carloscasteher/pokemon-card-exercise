export const PokemonName = ({name}: { name: string }) => {
    return (
        <div className="pokemon-card-name-wrapper">
            <span className="pokemon-name">{name}</span>
        </div>
    )
}