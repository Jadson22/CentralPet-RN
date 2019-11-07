import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import _ from 'lodash';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/MaterialIcons';
import navigate from '../../../services/navigation';
import PetCard from '../../../Components/pet/PetCard';
import { Container } from 'native-base';
import { connect } from 'react-redux';
import { listarPet } from '../../../actions/AppActions';

class Pet extends Component {

  componentWillMount() {
    this.props.listarPet();
    this.criaFonteDeDados(this.props.pets)
  }

  componentWillReceiveProps(nextProps) {
    this.criaFonteDeDados(nextProps.pets)
  }

  criaFonteDeDados(pets) {
    //const ds = new FlatList.pets({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.fonteDeDados = pets
  }

  render() {

    const { navigation } = this.props;

    return (
      <Container>
        <View>
          <FlatList
            data={this.fonteDeDados}
            renderItem={({ item }) => (
              <View style={{ flex: .35 }}>
                <PetCard
                  detalhePet={item}
                  onNavigate={() => navigation.navigate('PetDetalhe', { detalhePet: item })}
                />
              </View>
            )}
            //keyExtractor={item => item.id}
            numColumns={3}
          />
        </View>
        <ActionButton buttonColor="#03a9f4" onPress={() => navigate.navigate('PetForm')} />
      </Container>
    );
  }
}

Pet.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name={'pets'} size={37} color={tintColor} />
  )
}

mapStateToProps = state => {
  const pets = _.map(state.ListaPetReducer, (val, uid) => {
    return { ...val, uid }
  })
  return { pets }
}

export default connect(mapStateToProps, { listarPet })(Pet);



