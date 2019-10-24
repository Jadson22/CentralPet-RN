import React, { Component } from 'react';
import { ScrollView, Image, StyleSheet, Button } from 'react-native';

import Line from './Line';
import LongText from './LongText';
import { connect } from 'react-redux';
import { editarPet } from '../../actions/AppActions';


class PetDetalhe extends Component {

    static navigationOptions = ({ navigation }) => {
        const { detalhePet } = navigation.state.params;
        return {
            title: detalhePet.nomePet
        };
    };

    render() {
        const { detalhePet } = this.props.navigation.state.params;
        const {nomePet, especie, genero, raça, dataNascimento,peso,obs} = detalhePet
        const { navigation } = this.props;
        return (
            <ScrollView>
                <Image
                    style={styles.image}
                    source={{
                        uri: detalhePet.img
                    }}
                />
                <Line label="Nome:" content={nomePet}/>
                <Line label="Especie:" content={especie}/>
                <Line label="Gênero:" content={genero}/>
                <Line label="Raça:" content={raça}/>
                <Line label="Data do Nascimento:" content={dataNascimento}/>
                <Line label="Peso:" content={peso} complemento="Kg"/>
                <LongText label="OBS:" content={obs}/>


                <Button title="Editar" onPress={ ()=>{ navigation.navigate('PetForm', { editPet: detalhePet})}}/>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    image: {
        aspectRatio: 1,
    }
})


const mapStateToProps = (state) => {
    console.log(state);
    return (
        {
            nomePet: state.FormPetReducer.nomePet,
            raça: state.FormPetReducer.raça,
            genero: state.FormPetReducer.genero,
            especie: state.FormPetReducer.especie,
            peso: state.FormPetReducer.peso,
            obs: state.FormPetReducer.obs,
            loading_salvar: state.FormPetReducer.loading_salvar,
            dataNascimento:state.FormPetReducer.dataNascimento

        }
    );
}
export default connect(mapStateToProps, { editarPet })(PetDetalhe);