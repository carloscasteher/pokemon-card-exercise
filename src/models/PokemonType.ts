export const PokemonType = {
    fire: "fire",
    water: "water",
    unknown: "unknown",
} as const

export type PokemonType = (typeof PokemonType)[keyof typeof PokemonType]

export const toPokemonType = (value: string): PokemonType =>
    Object.values(PokemonType).find((type) => type === value) ?? PokemonType.unknown

