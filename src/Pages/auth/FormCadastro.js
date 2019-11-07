import React, { Component } from 'react';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, modificaNome, cadastraUsuario } from '../../actions/AutenticacaoActions';
import { Button, Text, Item, Input, View } from 'native-base';
import { ImageBackground, ActivityIndicator } from 'react-native';

class formCadastro extends Component {

    _cadastraUsuario() {
        const { nome, email, senha } = this.props;

        this.props.cadastraUsuario({ nome, email, senha });
    }

    renderBtnCadastro() {
        if (this.props.loading_cadastro) {
            return (
                <ActivityIndicator size="large" color='#03a9f4' />
            )
        }
        return (
            <Button rounded
                style={{ alignSelf: 'center', width: 120, backgroundColor: '#03a9f4' }}
                onPress={() => this._cadastraUsuario()}>
                <Text> Cadastrar</Text>
            </Button>
        )
    }


    render() {
        return (
            <ImageBackground style={{ flex: 1, width: null }} source={require('../../imgs/bg.jpg')}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View>
                        <Item rounded style={{ marginTop: 100, width: 350, marginBottom: 8 }}>
                            <Input
                                value={this.props.nome}
                                placeholder="Nome"
                                underlineColorAndroid='rgba(0,0,0,0)'
                                style={{ borderRadius: 50, backgroundColor: 'white' }}
                                onChangeText={texto => this.props.modificaNome(texto)}
                            />
                        </Item>
                        <Item rounded rounded style={{ marginBottom: 8 }}>
                            <Input
                                value={this.props.email}
                                placeholder="E-mail"
                                style={{ borderRadius: 50, backgroundColor: 'white' }}
                                onChangeText={texto => this.props.modificaEmail(texto)}
                            />
                        </Item>
                        <Item rounded>
                            <Input
                                secureTextEntry
                                value={this.props.senha}
                                placeholder="Senha"
                                style={{ borderRadius: 50, backgroundColor: 'white' }}
                                onChangeText={texto => this.props.modificaSenha(texto)}
                            />
                        </Item>
                        <Text style={{ color: '#ff0000', fontSize: 18, margin: 15 }}>{this.props.erroCadastro}</Text>
                        {this.renderBtnCadastro()}

                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);

    return (
        {
            nome: state.AutenticacaoReducer.nome,
            email: state.AutenticacaoReducer.email,
            senha: state.AutenticacaoReducer.senha,
            erroCadastro: state.AutenticacaoReducer.erroCadastro,
            loading_cadastro: state.AutenticacaoReducer.loading_cadastro
        }
    );
}

export default connect(mapStateToProps, { modificaEmail, modificaSenha, modificaNome, cadastraUsuario })(formCadastro);