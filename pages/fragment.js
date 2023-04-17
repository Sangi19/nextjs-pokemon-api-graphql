import { gql } from '@apollo/client';

export const CORE_POKEMON = gql`
  fragment RecursivePokemonFragment on Pokemon {
    id
    number
    name
    classification
    types
    resistant
    weaknesses
    fleeRate
    maxCP
  }
`;