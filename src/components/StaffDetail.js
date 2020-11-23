import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from "react-native";

const StaffList = ({ result }) => {

    return (
        <View style={styles.list}>
            <Image
                style={styles.image}
                resizeMode="cover"
                source={ result.image }
            />
            <View style={styles.textbox}>
                <Text style={styles.name}>{result.name}</Text>
                <Text style={styles.position}>{result.position}</Text>
            </View>
        </View>
    )};

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    name: {
        fontSize: 19,
        paddingLeft: 18,
        fontWeight: 'bold',
        fontFamily: 'quicksand-semibold-600',
        color: '#41aed5'
    },
    position: {
        fontSize: 16,
        paddingLeft: 18,
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
        padding: 10
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 150 / 2,
        overflow: 'hidden',
        borderWidth: 1.5,
        borderColor: 'white',
        marginLeft: 10,
    },
});

export default StaffList;