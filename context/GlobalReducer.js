import { CHANGE_LANG } from 'utils/consts'
import fr_content from 'lang/fr'
import en_content from 'lang/en'

export default function global_reducer(state, action) {
  const lang_content = action.lang === 'fr' ? fr_content : en_content
  switch (action.type) {
    case CHANGE_LANG:
      return { ...state, lang: action.lang, lang_content }
    default:
      throw new Error()
  }
}
