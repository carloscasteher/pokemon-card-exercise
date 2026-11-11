import * as React from "react";


export const PokemonCardRoot = ({children}: { children: React.ReactElement[] | React.ReactElement }) => {
    return (
        <div className="pokemon-card-root">
            <div className="pokemon-card-root-circle"></div>
            <div className="pokemon-card-wrapper">
                {children}
            </div>
        </div>
    )
}
