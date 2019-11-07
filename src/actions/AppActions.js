import firebase from 'firebase';
import NavigationService from '../services/navigation';
import _ from 'lodash';
import {
    MODIFICA_NOME,
    MODIFICA_RAÇA,
    MODIFICA_GENERO,
    MODIFICA_ESPECIE,
    MODIFICA_PESO,
    MODIFICA_OBS,
    CADASTRO_EM_ANDAMENTO_PET,
    CADASTRO_PET_SUCESSO,
    CADASTRO_PET_ERRO,
    MODIFICA_DATA,
    LISTA_PET,
    LISTA_PET_EDIT,
    LIMPAR_FORM_PET
} from './Types';


export const modificaNome = (texto) => {
    return {
        type: MODIFICA_NOME,
        payload: texto
    }
}

export const modificaRaça = (texto) => {
    return {
        type: MODIFICA_RAÇA,
        payload: texto
    }
}

export const modificaGenero = (texto) => {
    return {
        type: MODIFICA_GENERO,
        payload: texto
    }
}

export const modificaEspecie = (texto) => {
    return {
        type: MODIFICA_ESPECIE,
        payload: texto
    }
}

export const modificaPeso = (texto) => {
    return {
        type: MODIFICA_PESO,
        payload: texto
    }
}

export const modificaObs = (texto) => {
    return {
        type: MODIFICA_OBS,
        payload: texto
    }
}

export const modificaData = (texto) => {
    return {
        type: MODIFICA_DATA,
        payload: texto
    }
}

export const salvarPet = ({ nomePet, raça, genero, especie, peso, obs, dataNascimento }) => {

    return dispatch => {
        dispatch({ type: CADASTRO_EM_ANDAMENTO_PET });
        const { currentUser } = firebase.auth();

        firebase
            .database()
            .ref('/Pet/' + currentUser.uid + '/CadastroPet/')
            .push({ nomePet, raça, genero, especie, peso, obs, dataNascimento })
            .then(value => cadastraPetSucesso(dispatch));
    }
}

const cadastraPetSucesso = (dispatch) => {

    dispatch({ type: CADASTRO_PET_SUCESSO });
    NavigationService.navigate('Pet');

}
/*
const cadastraPetErro = (erro, dispatch) => {
    console.log(erro);
    dispatch({ type: CADASTRO_PET_ERRO });
    return(
        Alert.alert('Atenção','Verifique sua conexão e tente novamente')
    )
}*/

export const listarPet = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {

        firebase.database().ref('/Pet/' + currentUser.uid + '/CadastroPet/')
            .on("value", snapshot => {
                dispatch({ type: LISTA_PET, payload: snapshot.val() })
            })
    }
}

export const ListaEditPet = editPet => {
    return {
        type: LISTA_PET_EDIT,
        payload: editPet
    }
}

export const limparFormPet = () => {
    return {
        type: LIMPAR_FORM_PET
    }
}