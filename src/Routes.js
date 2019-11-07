import React from 'react';
import { createSwitchNavigator, createAppContainer, createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';

import Header from './Components/toolbar/Header';

import FormLogin from './Pages/auth/FormLogin';
import FormCadastro from './Pages/auth/FormCadastro';

import AgendaScreen from './Components/agenda';
import PetScreen from './Pages/app/pet';
import MapaScreen from './Components/mapa';

import PetDetalhe from './Pages/app/pet/PetDetalhe';
import PetForm from './Pages/app/pet/PetForm';
import PetEditForm from './Pages/app/pet/editFormPet';

const Auth = createStackNavigator(
    {
        FormLogin,
        FormCadastro,
    },
    {
        defaultNavigationOptions: {
            header: null,
        },
    },
);

const App = createStackNavigator({
    TabView: createStackNavigator({
        Home: createMaterialTopTabNavigator(
            {
                Agenda: AgendaScreen,
                Pet: PetScreen,
                Mapa: MapaScreen
            },
            {
                tabBarOptions: {
                    activeTintColor: '#fff',
                    inactiveTintColor: '#DCDCDC',
                    showIcon: true,
                    showLabel: false,
                    iconStyle: {
                        width: 40
                    },
                    indicatorStyle: {
                        backgroundColor: '#DCDCDC',
                    },
                    style: {
                        backgroundColor: '#03a9f4',
                        elevation: 0,
                    }
                },
            }
        )
    }, {
        defaultNavigationOptions: {
            header: () => <Header />,
        }
    }),

    DetalhePet: createStackNavigator({
        PetDetalhe,
    }, {
        defaultNavigationOptions: {
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#03a9f4',
            }
        }
    }),

    CadastrarPet: createStackNavigator({
        PetForm,
    }, {
        defaultNavigationOptions: {
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#03a9f4',
            }
        }
    }),

    EditarPet: createStackNavigator({
        PetEditForm,
    }, {
        defaultNavigationOptions: {
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#03a9f4',
            }
        }
    })
    

}, {
    defaultNavigationOptions: {
        header: null
    }
})

const Routes = createAppContainer(
    createSwitchNavigator({
        Auth,
        App,
    }),
);

export default Routes;