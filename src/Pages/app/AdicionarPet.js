import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import { connect } from 'react-redux';
import { modificaAdicionaPetNome, adicionaPet } from '../../actions/AppActions';


class AdicionarPet extends Component {
    navigationOptions = ({
        title: `A`,
    })

    render() {
        return (
            <View>
                <TextInput
                    style={{ fontSize: 20, height: 45 }}
                    onChangeText={(texto) => this.props.modificaAdicionaPetNome(texto)}
                    value={this.props.adiciona_pet_nome}
                />
                <TextInput
                    style={{ fontSize: 20, height: 45 }}
                //onChangeText={(texto) => this.props.modificaAdicionaPetNome(texto)}
                //value={this.props.adiciona_pet_nome}
                />
                <TextInput
                    style={{ fontSize: 20, height: 45 }}
                //onChangeText={(texto) => this.props.modificaAdicionaPetNome(texto)}
                //value={this.props.adiciona_pet_nome}
                />
                <TextInput
                    style={{ fontSize: 20, height: 45 }}
                //onChangeText={(texto) => this.props.modificaAdicionaPetNome(texto)}
                //value={this.props.adiciona_pet_nome}
                />
                <View>
                    <Button
                        style={{ marginTop: 75, alignSelf: 'center', width: 90, backgroundColor: '#03a9f4' }}
                        onPress={() => this.props.adicionaPet(this.props.adiciona_pet_nome)}>
                        <Text style={{ marginLeft: 4, color: '#fff' }}>CADASTRAR</Text>
                    </Button>

                    <Text style={{ color: '#ff0000', fontSize: 20 }}>
                        {this.props.cadastro_resultado_txt_erro}
                    </Text>
                </View>
            </View>
        )
    }
}
const mapStateToProps = state => (
    {
        adiciona_pet_nome: state.AppReducer.adiciona_pet_nome,
        cadastro_resultado_txt_erro: state.AppReducer.cadastro_resultado_txt_erro,
        cadastro_resultado_inclusao: state.AppReducer.cadastro_resultado_inclusao
    }
)

export default connect(mapStateToProps, { modificaAdicionaPetNome, adicionaPet })(AdicionarPet);
