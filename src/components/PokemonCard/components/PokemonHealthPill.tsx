export const PokemonHealthPill = ({healthPoints}: { healthPoints: number }) => {
    return (
        <div className="pokemon-health-pill-wrapper">
            <div className="pokemon-health-pill-badge">
                <span className="pokemon-health-pill-label">HP</span>
                <span className="pokemon-health-pill-value">{healthPoints}</span>
            </div>
        </div>
    )
}
