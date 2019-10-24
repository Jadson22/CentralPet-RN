import {
    MODIFICA_NOME,
    MODIFICA_RAÇA,
    MODIFICA_GENERO,
    MODIFICA_ESPECIE,
    MODIFICA_PESO,
    MODIFICA_OBS,
    CADASTRO_PET_SUCESSO,
    CADASTRO_EM_ANDAMENTO_PET,
    CADASTRO_PET_ERRO,
    MODIFICA_DATA,
    LISTA_PET_EDIT,
    LIMPAR_FORM_PET
} from '../actions/Types';

const INITIAL_STATE = {
    id: null,
    especie: 'Cachorro',
    genero: 'Macho',
    nomePet: '',
    raça: '',
    peso: 0,
    obs: '',
    loading_salvar: false,
    dataNascimento: '23/06/2019',
}

export default (state = INITIAL_STATE, action) => {
    console.log(action);

    switch (action.type) {
        case MODIFICA_NOME:
            return { ...state, nomePet: action.payload }

        case MODIFICA_RAÇA:
            return { ...state, raça: action.payload }

        case MODIFICA_GENERO:
            return { ...state, genero: action.payload }

        case MODIFICA_ESPECIE:
            return { ...state, especie: action.payload }

        case MODIFICA_PESO:
            return { ...state, peso: action.payload }

        case MODIFICA_OBS:
            return { ...state, obs: action.payload }

        case MODIFICA_DATA:
            return { ...state, dataNascimento: action.payload }

        case LIMPAR_FORM_PET:
        case CADASTRO_PET_SUCESSO:
            return { ...state, especie: 'Cachorro', genero: 'Macho', nomePet: '', raça: '', peso: 0, obs: '', loading_salvar: false }

        case CADASTRO_EM_ANDAMENTO_PET:
            return { ...state, loading_salvar: true }

        case CADASTRO_PET_ERRO:
            return { ...state, loading_salvar: false }

        case LISTA_PET_EDIT:
            return action.payload;
            
        default:
            return state;
    }

}
