import { PokemonType } from "../../types/pokemonType"

type Props = {
  data: PokemonType
}

export const Pokemon = ({ data }: Props) => {
  return (
    <div>
      <h3>{ data.data.name}</h3>
      <img src={data.data.sprites.front_default} alt="" />
    </div>
  )
}