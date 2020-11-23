import React from "react";
import { StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
import StaffDetail from '../components/StaffDetail';

var users = require('../data/staff').users;

const StaffList = () => {

    const navigation = useNavigation();

    return (
        <FlatList 
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            data={users}
            keyExtractor={(result) => result.name}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('StaffShow', { 
                            name: item.name, 
                            position: item.position,
                            about: item.about,
                            image: item.image
                        })}
                    >
                    <StaffDetail 
                        result={item} 
                    />
                    </TouchableOpacity>
                )
            }}
        />
   )
};

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 150 / 2,
        overflow: 'hidden',
        borderWidth: 1.5,
        borderColor: '#e2eaea',
        marginLeft: 10
    },
    textbox: {
        flexDirection: 'column',
        paddingLeft: 18,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'quicksand-semibold-600',
        color: '#41aed5'
    },
    position: {
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'quicksand-semibold-600',
        color: '#313e47'
    },
    list: {
        backgroundColor: '#f7f7f7',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        borderColor: '#e2eaea',
        borderWidth: 1,
        marginLeft: 0,
        marginRight: 0,
        padding: 10,
    }
});

export default StaffList;