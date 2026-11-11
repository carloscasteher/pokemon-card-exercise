export const PokemonImage = ({imageUrl}: { imageUrl: string }) => {
    return (
        <div className="pokemon-card-image">
            <img src={imageUrl} alt="Pokemon image"/>
        </div>
    )
}
