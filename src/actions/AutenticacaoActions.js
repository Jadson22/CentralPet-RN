import NavigationService from '../services/navigation';
import firebase from 'firebase';
import b64 from 'base-64';
import {
    MODIFICA_EMAIL,
    MODIFICA_SENHA,
    MODIFICA_NOME,
    CADASTRO_USUARIO_SUCESSO,
    CADASTRO_USUARIO_ERRO,
    LOGIN_USUARIO_SUCESSO,
    LOGIN_USUARIO_ERRO,
    LOGIN_EM_ANDAMENTO,
    CADASTRO_EM_ANDAMENTO
} from './Types';


export const modificaEmail = (texto) => {
    return {
        type: MODIFICA_EMAIL,
        payload: texto
    }
}

export const modificaSenha = (texto) => {
    return {
        type: MODIFICA_SENHA,
        payload: texto
    }
}

export const modificaNome = (texto) => {
    return {
        type: MODIFICA_NOME,
        payload: texto
    }
}

export const cadastraUsuario = ({ nome, email, senha }) => {

    return dispatch => {
        dispatch({ type: CADASTRO_EM_ANDAMENTO });

        firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then(user => {
                //let emailB64 = b64.encode(email);
                let nomeP = nome;
                firebase.database().ref('/usuarios/'+nomeP)
                    .push({ nome, email, senha})
                    .then(value => cadastraUsuarioSucesso(dispatch))
            }
            )
            .catch(erro => cadastraUsuarioErro(erro, dispatch));
    }
}

const cadastraUsuarioSucesso = (dispatch) => {

    dispatch({ type: CADASTRO_USUARIO_SUCESSO });
    NavigationService.navigate('FormLogin');

}

const cadastraUsuarioErro = (erro, dispatch) => {
    if (erro.message == "The email address is already in use by another account.") {
        dispatch({ type: CADASTRO_USUARIO_ERRO, payload: "Email já cadastrado" });
    }
    else if (erro.message == "Password should be at least 6 characters") {
        dispatch({ type: CADASTRO_USUARIO_ERRO, payload: "A senha deve ter pelo menos 6 caracteres" });
    }
    else if (erro.message == "The email address is badly formatted.") {
        dispatch({ type: CADASTRO_USUARIO_ERRO, payload: "Endereço de email inválido" });
    }
    else {
        dispatch({ type: CADASTRO_USUARIO_ERRO, payload: erro.message });
    }
}

export const autenticarUsuario = ({ email, senha }) => {
    return dispatch => {
        dispatch({ type: LOGIN_EM_ANDAMENTO });

        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
            .then(function () {
                firebase.auth().signInWithEmailAndPassword(email, senha)
                    .then(value => loginUsuarioSucesso(dispatch))
                    .catch(erro => loginUsuarioErro(erro, dispatch));
            })
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
            });
    }
}

const loginUsuarioSucesso = (dispatch) => {

    dispatch({ type: LOGIN_USUARIO_SUCESSO });

    NavigationService.navigate('App');
}

const loginUsuarioErro = (erro, dispatch) => {
    console.log(erro);
    dispatch({
        type: LOGIN_USUARIO_ERRO,
        payload: 'Login incorreto'
    }
    );
}