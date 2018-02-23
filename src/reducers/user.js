import * as types from '../actions/types.js'
import Cookies from 'js-cookie'

const initialState = {
    token: Cookies.get('token'),
    recovery_hash: '',
    data: {
        role: 'client',
        profile_id: '',
        zodiac: '',
        weight: {},
        want_children: '',
        smoke: '',
        russian_language: '',
        religion: '',
        profession: '',
        primary_language: '',
        occupation: '',
        mobile: '',
        message: '',
        marital_status: '',
        last_name: '',
        first_name: '',
        interests: [],
        id: '',
        height: {},
        hair_length: '',
        hair_color: '',
        female_ethnicity: [],
        eyes: '',
        ethnicity: '',
        english_language: '',
        email: '',
        education: '',
        drink: '',
        country: '',
        city: '',
        children: '',
        age: '',
        birthday: {},
        about_children: '',
        match: {},
        avatar: {0:{}}
    }
}

export default function user(user = initialState, action = {}) {
    let temp = Object.assign([], user.data)
    switch (action.type) {
        case types.SET_TOKEN:
            return Object.assign({}, user, {
                token: action.value
            });
        case types.LOGOUT:
            return Object.assign({}, user, {
                token: action.value
            });
        case types.SET_RECOVERY_HASH:
            return Object.assign({}, user, {
                recovery_hash: action.hash
            });
        case types.SET_CLIENT_DATA:
            for (let k in temp) {
                if (action.data[k]) {
                    temp[k] = action.data[k]
                }
            }
            return Object.assign({}, user, {
                data: temp
            });
        default:
            return user;
    }
}