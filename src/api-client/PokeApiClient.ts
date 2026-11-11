import {useEffect, useState} from "react";
import {PokemonInfo} from "../models/PokemonInfo.ts";


export type PokemonApiResponse = {
    name: string
    stats: {
        base_stat: number
        stat: {
            name: string
        }

    }[]
    sprites: {
        front_default: string
    }
    types: { type: { name: string } }[]
}

export const useFetchPokemonByName = (name: string) => {
    const [pokemon, setPokemon] = useState<PokemonInfo | undefined>(undefined)

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
                const data: PokemonApiResponse = await response.json()
                setPokemon(PokemonInfo.fromData(data))
            } catch (error) {
                console.log(error)
            }
        }

        fetchPokemon()
    }, [name])

    return pokemon
}
