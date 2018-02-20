import * as config from '../config'
import { setAlert } from 'actions'
import store from 'store'
import 'whatwg-fetch'

const responseHandler = (response) => {
    let promise = response.json()
    let ok = response.ok
    
    promise.then(response => {
        if (response.validate) {
            for (let k in response.validate) {
                for (let j in response.validate[k]) {
                    store.dispatch(setAlert(response.validate[k][j], 'error'))
                }
            }
        }

        if (response.message && (! response.validate || response.validate == null)) {
            store.dispatch(setAlert(response.message, ok ? 'success' : 'error'))
        }

        if (response.errors) {
            for (let k in response.errors) {
                for (let j in response.errors[k]) {
                    store.dispatch(setAlert(response.errors[k][j], 'error'))
                }
            }
        }
    })
    return promise;
}

export default {
    login(data) {
        return fetch(config.API_URL + 'login', {
            method: 'post',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(responseHandler)
        .catch(error => console.log(error))
    },

    activateUser(hash) {
        return fetch(config.API_URL + 'activate/' + hash, {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(responseHandler)
        .catch(error => console.log(error))
    },

    signUpStart(data) {
        return fetch(config.API_URL + 'signup/start', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(responseHandler)
        .catch(error => console.log(error))
    },

    signUpOne(data) {
        console.log(data)
        return fetch(config.API_URL + 'signup/' + data.route + '/step/one', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(responseHandler)
        .catch(error => console.log(error))
    },

    signUpTwo(data) {
        let formData = new FormData()
        formData.append('avatar', data.avatar)
        formData.append('height', data.height)
        formData.append('width', data.width)
        formData.append('x', data.x)
        formData.append('y', data.y)
        formData.append('remember_token', data.remember_token)

        return fetch(config.API_URL + 'signup/client/step/two', {
            method: 'post',
            headers: {
                //'Content-Type': 'multipart/form-data'
            },
            body: formData
        })
        .then(responseHandler)
        .catch(error => console.log(error))
    },

    signUpTwoGirl(data) {
        return fetch(config.API_URL + 'signup/girl/step/two', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(responseHandler)
        .catch(error => console.log(error))
    },

    signUpThree(data) {
        return fetch(config.API_URL + 'signup/last', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(responseHandler)
        .catch(error => console.log(error))
    },

    signUpThreeGirl(data) {
        return fetch(config.API_URL + 'signup/girl/step/four', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(responseHandler)
        .catch(error => console.log(error))
    },

    signUpFinish(data) {
        return fetch(config.API_URL + 'signup/finish', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(responseHandler)
            .catch(error => console.log(error))
    },

    getOptionsSignUp(type) {
        return fetch(config.API_URL + type, {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(responseHandler)
        .catch(error => console.log(error))
    },

    getHeights() {
        return fetch(config.API_URL + 'height', {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(responseHandler)
        .catch(error => console.log(error))
    },

    getWeights() {
        return fetch(config.API_URL + 'weight', {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(responseHandler)
        .catch(error => console.log(error))
    },

    getEyesColor() {
        return fetch(config.API_URL + 'eyes', {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(responseHandler)
        .catch(error => console.log(error))
    },

    getHairColor() {
        return fetch(config.API_URL + 'hair_colors', {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(responseHandler)
        .catch(error => console.log(error))
    },

    getHairLength() {
        return fetch(config.API_URL + 'hair_lengths', {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(responseHandler)
        .catch(error => console.log(error))
    },

    getEthnicities() {
        return fetch(config.API_URL + 'ethnicities', {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(responseHandler)
        .catch(error => console.log(error))
    },

    getMaritalStatus() {
        return fetch(config.API_URL + 'marital_statuses', {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(responseHandler)
        .catch(error => console.log(error))
    },

    getInterests() {
        return fetch(config.API_URL + 'interests', {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(responseHandler)
        .catch(error => console.log(error))
    },

    getReligions() {
        return fetch(config.API_URL + 'religions', {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(responseHandler)
        .catch(error => console.log(error))
    },

    getWantChildren() {
        return fetch(config.API_URL + 'want_children', {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(responseHandler)
        .catch(error => console.log(error))
    }
}