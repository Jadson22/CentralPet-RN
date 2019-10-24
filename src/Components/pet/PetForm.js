import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Picker, Text, ScrollView, Slider, Button, ActivityIndicator } from 'react-native';
import FormRow from '../FormRow';
import { connect } from 'react-redux';
import { limparFormPet, editarPet, modificaNome, modificaRaça, modificaGenero, modificaEspecie, modificaPeso, modificaObs, salvarPet, modificaData } from '../../actions/AppActions';
import { DatePicker } from 'native-base';

class PetForm extends Component {

    static navigationOptions = () => {
        return {
            title: 'Cadastrar Pet'
        };
    };

    componentDidMount(){
        const {navigation, editarPet, limparFormPet} = this.props;
        const {params} = navigation.state;
        
        if(params && params.editPet){
            editarPet(params.editPet);
        }else{
            limparFormPet();
        }
    }

    _salvarPet() {
        const { detalhePet } = this.props;
        this.props.salvarPet({ detalhePet });
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
                        onValueChange={texto => this.props.modificaEspecie(texto)
                        }>
                        <Picker.Item label="Cachorro" value="Canina" />
                        <Picker.Item label="Gato" value="Felina" />
                    </Picker>
                </FormRow>

                <FormRow>
                    <Picker
                        selectedValue={this.props.genero}
                        onValueChange={texto => this.props.modificaGenero(texto)}>
                        <Picker.Item label="Macho" value="Macho" />
                        <Picker.Item label="Fêmea" value="Fêmea" />
                    </Picker>
                </FormRow>

                <FormRow>
                    <TextInput style={styles.input}
                        placeholder="Nome"
                        value={this.props.nomePet}
                        onChangeText={texto => this.props.modificaNome(texto)}
                    />
                </FormRow>

                <FormRow>
                    <TextInput style={styles.input}
                        placeholder="Raça"
                        value={this.props.raça}
                        onChangeText={texto => this.props.modificaRaça(texto)}
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

                    <View style={styles.fontPeso}>
                        <Text>Peso: {this.props.peso} Kg</Text>
                    </View>


                    <Slider
                        onValueChange={texto => this.props.modificaPeso(texto)}
                        value={this.props.peso}
                        minimumValue={0}
                        maximumValue={80}
                        step={0.5}
                        thumbTintColor={'#03a9f4'} />

                </FormRow>

                <FormRow>
                    <TextInput style={styles.input}
                        placeholder="OBS:"
                        value={this.props.obs}
                        onChangeText={texto => this.props.modificaObs(texto)}
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

export default connect(mapStateToProps, { limparFormPet, editarPet, modificaNome, modificaRaça, modificaGenero, modificaEspecie, modificaPeso, modificaObs, salvarPet, modificaData })(PetForm);
