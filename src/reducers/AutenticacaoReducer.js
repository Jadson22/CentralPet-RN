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
} from '../actions/Types';

const INITIAL_STATE = {
    nome: '',
    email: 'jadsonufc@gmail.com',
    senha: '04229914',
    erroCadastro: '',
    erroLogin: '',
    loading_login: false,
    loading_cadastro: false
}

export default (state = INITIAL_STATE, action) => {
    console.log(action);

    switch (action.type) {
        case MODIFICA_EMAIL:
            return { ...state, email: action.payload }
        case MODIFICA_SENHA:
            return { ...state, senha: action.payload }
        case MODIFICA_NOME:
            return { ...state, nome: action.payload }
        case CADASTRO_USUARIO_ERRO:
            return { ...state, loading_cadastro: false, erroCadastro: action.payload }
        case CADASTRO_USUARIO_SUCESSO:
            return { ...state, senha: '', loading_cadastro: false }
        case LOGIN_USUARIO_ERRO:
            return { ...state, erroLogin: action.payload, loading_login: false }
        case LOGIN_EM_ANDAMENTO:
            return { ...state, loading_login: true }
        case LOGIN_USUARIO_SUCESSO:
            return { ...state,senha: '', loading_login: false }
        case CADASTRO_EM_ANDAMENTO:
            return { ...state, loading_cadastro: true }

        default:
            return state;
    }
}