import {type PokemonType, toPokemonType} from "./PokemonType.ts";
import type {PokemonApiResponse} from "../api-client/PokeApiClient.ts";

export class PokemonInfo {
    readonly name: string
    readonly imageUrl: string
    readonly attack: number
    readonly defense: number
    readonly speed: number
    readonly health: number
    readonly types: PokemonType[]

    private constructor(name: string, imageUrl: string, attack: number, defense: number, speed: number, health: number, types: PokemonType[]) {
        this.name = name
        this.imageUrl = imageUrl
        this.attack = attack
        this.defense = defense
        this.speed = speed
        this.health = health
        this.types = types
    }

    static fromData(data: PokemonApiResponse) {
        const statPoints = (statName: string) =>
            data.stats.find(({stat}) => stat.name === statName)?.base_stat ?? 0
        const types = data.types.map(({type}) => toPokemonType(type.name))

        return new PokemonInfo(
            data.name,
            data.sprites.front_default,
            statPoints('attack'),
            statPoints('defense'),
            statPoints('speed'),
            statPoints('hp'),
            types
        )
    }
}