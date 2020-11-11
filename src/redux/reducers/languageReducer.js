
import { SET_LANGUAGE } from '../actions/languageActions';

const defaultState = { lang: 'en' };

export default function languageReducer(state = defaultState, action) {
  switch(action.type) {
    case SET_LANGUAGE:
      return { ...state, lang: action.payload };
    default:
      return state;
  }
}
