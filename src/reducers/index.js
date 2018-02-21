import { combineReducers } from 'redux'
import user from './user.js'
import alerts from './alerts.js'
import signup from './signup.js'
import textField from './text_input.js'
import modals from './modals.js'
import textarea from './textarea.js'
import autocomplete from './autocomplete.js'
import { routerReducer } from 'react-router-redux'

const reducer = combineReducers({
    routing: routerReducer,
    user,
    alerts,
    signup,
    textField,
    modals,
    textarea,
    autocomplete
})

export default reducer