import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Picker, Text, ScrollView, Slider, Button, ActivityIndicator } from 'react-native';
import FormRow from '../FormRow';
import { connect } from 'react-redux';
import { editarPet, salvarPet, modificaData } from '../../actions/AppActions';
import { DatePicker } from 'native-base';

class PetEdit extends Component {

    static navigationOptions = () => {
        return {
            title: 'Cadastrar Pet'
        };
    };

    _salvarPet() {
        const { especie, genero, nomePet, raça, peso, obs, dataNascimento} = this.props;

        this.props.salvarPet({ especie, genero, nomePet, raça, peso, obs, dataNascimento});
    }

    renderBtnAcessar() {

        if (this.props.loading_salvar) {
            return (
                <ActivityIndicator size="large" color='#03a9f4' style={{ marginTop: 15 }} />
            )
        }
        return (
            <View style={styles.button}>
                <Text
                    style={{ alignSelf: 'center', alignItems: "center", color: '#ffff' }}
                    onPress={() => { this._salvarPet() }}>
                    Salvar
            </Text>
            </View>
        )
    }

    render() {
        return (
            <ScrollView style={styles.content}>

                <FormRow>
                    <Picker
                        selectedValue={this.props.especie}
                        onValueChange={especie => this.props.editarPet(especie)
                        }>
                        <Picker.Item label="Cachorro" value="Canina" />
                        <Picker.Item label="Gato" value="Felina" />
                    </Picker>
                </FormRow>

                <FormRow>
                    <Picker
                        selectedValue={this.props.genero}
                        onValueChange={genero => this.props.editarPet(genero)}>
                        <Picker.Item label="Macho" value="Macho" />
                        <Picker.Item label="Fêmea" value="Fêmea" />
                    </Picker>
                </FormRow>

                <FormRow>
                    <TextInput style={styles.input}
                        placeholder="Nome"
                        value={this.props.nomePet}
                        onChangeText={nomePet => this.props.editarPet(nomePet)}
                    />
                </FormRow>

                <FormRow>
                    <TextInput style={styles.input}
                        placeholder="Raça"
                        value={this.props.raça}
                        onChangeText={raça => this.props.editarPet(raça)}
                    />
                </FormRow>

                <FormRow>
                    <Text style={{fontSize:15, marginLeft:15}}>Data de nascimento:</Text>
                    <DatePicker 
                        minimumDate={new Date(1997, 1, 1)}
                        maximumDate={new Date(2100, 12, 31)}
                        timeZoneOffsetInMinutes={undefined}
                        modalTransparent={false}
                        animationType={"fade"}
                        androidMode={"default"}
                        placeHolderText="Selecione"
                        textStyle={{ color: '#03a9f4' }}
                        value={this.props.dataNascimento}
                        disabled={false}
                        onDateChange={texto => this.modificaData(texto)}
                        
                    />
                    
                </FormRow>

                <FormRow>
                    <TextInput style={styles.input}
                        placeholder="OBS:"
                        value={this.props.obs}
                        onChangeText={obs => this.props.editarPet(obs)}
                        numberOfLines={3}
                        multiline={true}
                    />
                </FormRow>

                {this.renderBtnAcessar()}

            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    input: {
        padding: 5,
        marginLeft: 15,
        fontSize: 15,
    },
    content: {
        flex: 1,
    },
    fontPeso: {
        paddingLeft: 15,
        marginBottom: 10
    },
    button: {

        padding: 12,
        paddingHorizontal: 30,
        backgroundColor: '#03a9f4',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 30,
        marginTop: 15,
        marginBottom:10

    }
});

const mapStateToProps = state => {
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

export default connect(mapStateToProps, { editarPet, salvarPet, modificaData })(PetEdit);
