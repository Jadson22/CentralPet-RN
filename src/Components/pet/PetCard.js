import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';

const PetCard = ({ detalhePet, onNavigate }) => (

    <TouchableOpacity onPress={onNavigate} style={styles.container}>
        <View style={styles.card}>
            <Image
                style={{ borderRadius: 100 }}
                source={{ uri: detalhePet.img }}
                aspectRatio={1}
                resizeMode="cover"
            />
            <View style={styles.cardTitleWrapper}>
                <Text style={styles.cardTitle}>{detalhePet.nomePet}</Text>
            </View>
        </View>
    </TouchableOpacity>
    
);

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').width / 3.5,
        borderRadius: 100,
        alignItems: "center",
    },
    card: {
        marginTop: 20,
        borderRadius: 100,
        height: 80,
        width: 80
    },
    cardTitleWrapper: {
        backgroundColor: '#03a9f4',
        position: "absolute",
        bottom: 0,
        width: '100%',
        alignItems: 'center',
        padding: 5,
        borderRadius: 100
    },
    cardTitle: {
        color: 'white',
        fontSize: 12,
    }
});

export default PetCard;