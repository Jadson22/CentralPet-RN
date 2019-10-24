import React, { Component } from 'react';
import { TouchableHighlight, Image, ImageBackground, ActivityIndicator } from 'react-native';
import { Button, Text, Item, Input, View } from 'native-base';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, autenticarUsuario } from '../../actions/AutenticacaoActions';


class formLogin extends Component {

    _autenticarUsuario() {
        const { email, senha } = this.props;

        this.props.autenticarUsuario({ email, senha });
    }

    renderBtnAcessar() {

        if (this.props.loading_login) {
            return (
                <ActivityIndicator size="large" color='#03a9f4'/>
            )
        }
        return (
            <Button rounded
                style={{ alignSelf: 'center', width: 100, backgroundColor: '#03a9f4' }}
                onPress={() => this._autenticarUsuario()}>
                <Text style={{ marginLeft: 3 }}>Acessar</Text>
            </Button>
        )
    }

    render() {
        const { navigation } = this.props;
        return (

            <ImageBackground style={{ flex: 1, width: null }} source={require('../../imgs/bg.jpg')}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>


                    <Image style={{ width: 200, height: 150, marginTop: 70, marginBottom: 40 }} source={require('../../imgs/logocentralpet.png')} />

                    <View>

                        <Item rounded style={{ width: 330, marginBottom: 8 }}>
                            <Input
                                style={{ borderRadius: 50, backgroundColor: 'white', paddingLeft: '10%'}}
                                underlineColorAndroid='rgba(0,0,0,0)'
                                placeholder='E-mail'
                                value={this.props.email}
                                onChangeText={texto => this.props.modificaEmail(texto)}
                            />
                        </Item>

                        <Item rounded>
                            <Input
                                style={{ borderRadius: 50, backgroundColor: 'white', paddingLeft: '10%' }}
                                underlineColorAndroid='rgba(0,0,0,0)'
                                secureTextEntry
                                value={this.props.senha}
                                placeholder='Senha'
                                onChangeText={texto => this.props.modificaSenha(texto)}
                            />
                        </Item>

                        <Text style={{ color: '#ff0000', fontSize: 18, margin: 10 }}>
                            {this.props.erroLogin}
                        </Text>

                        <View>
                            {this.renderBtnAcessar()}
                        </View>

                        <TouchableHighlight onPress={() => navigation.navigate('FormCadastro')}>
                            <Text style={{ fontSize: 15, textAlign: "center", marginTop: 10, color: 'white' }}>Ainda não tem cadastro? Cadastre-se</Text>
                        </TouchableHighlight>

                    </View>

                </View>
            </ImageBackground>
        );
    }
}

const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        erroLogin: state.AutenticacaoReducer.erroLogin,
        loading_login: state.AutenticacaoReducer.loading_login
    }
)

export default connect(mapStateToProps, { modificaEmail, modificaSenha, autenticarUsuario })(formLogin);