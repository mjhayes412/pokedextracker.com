import { Config }       from '../../config';
import { API }          from '../utils/api';
import { checkVersion } from './utils';

export const SET_POKEMON         = 'SET_POKEMON';
export const SET_CURRENT_POKEMON = 'SET_CURRENT_POKEMON';

export function retrievePokemon (id) {
  return (dispatch) => {
    dispatch(checkVersion());

    return API.get(`${Config.API_HOST}/pokemon/${id}`)
    .then((pokemon) => dispatch(setPokemon(pokemon)));
  };
}

export function setCurrentPokemon (pokemon) {
  return { type: SET_CURRENT_POKEMON, pokemon };
}

export function setPokemon (pokemon) {
  return { type: SET_POKEMON, pokemon };
}
