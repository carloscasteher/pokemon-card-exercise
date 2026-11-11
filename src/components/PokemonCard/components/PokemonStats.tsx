export const PokemonStats = ({attack, defense, speed}: { attack: number, defense: number, speed: number }) => {

    return (
        <div className="pokemon-stats-wrapper">
            <PokemonStat label="Attack" value={attack}/>
            <PokemonStat label="Defense" value={defense}/>
            <PokemonStat label="Speed" value={speed}/>
        </div>
    )
}

const PokemonStat = ({label, value}: { label: string, value: number }) => {
    return (
        <div className="pokemon-stat-root">
            <span className="pokemon-stat-value">{value}</span>
            <span className="pokemon-stat-label">{label}</span>
        </div>
    )
}