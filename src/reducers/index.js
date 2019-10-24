import { combineReducers } from 'redux';
import AutenticacaoReducer from './AutenticacaoReducer';
import FormPetReducer from './FormPetReducer';
import ListaPetReducer from './ListaPetReducer';

export default combineReducers({
    AutenticacaoReducer,
    FormPetReducer,
    ListaPetReducer
});