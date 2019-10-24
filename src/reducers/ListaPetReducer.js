import { LISTA_PET } from '../actions/Types'

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {

    switch(action.type) {
        case LISTA_PET:
            return action.payload
        default:
            return state;
    }
}
