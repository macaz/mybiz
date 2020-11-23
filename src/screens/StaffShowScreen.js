import React from 'react';
import { View, StyleSheet, Image, Dimensions, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const win = Dimensions.get('window');
const ratio = win.width/640; //640 is actual image width

const StaffShowScreen = ({ navigation, route }) => {

    var { name, about, position, image } = route.params;

    return (
        <View>
            <View style={styles.navbar}>
            <Icon.Button name="close" style={{ marginLeft: 6 }} backgroundColor="transparent" underlayColor="transparent" color="darkgrey" size={35} onPress={() => navigation.navigate('About')}></Icon.Button>
            </View>

            <View style={styles.modalWindow}>

                <View style={styles.card}>
                    <View style={styles.modalTop}>
                    <View style={styles.headerTop}></View>

                        <Image
                        style={styles.image}
                        resizeMode="cover"
                        source={image}
                        />
                    </View>
                    <View style={styles.modalMiddle}>
                        <Text style={styles.modalName}>{name}</Text>
                        <Text style={styles.modalPosition}>{position}</Text>
                        <Text></Text>
                        <Text style={styles.modalText}>{about}</Text>
                    </View>
                </View>

            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    navbar: {
        paddingTop: Platform.OS === 'ios' ? 37 : 28,
        backgroundColor: 'white',
        borderBottomWidth: Platform.OS === 'ios' ? 1 : 2,
        borderBottomColor: '#e2eaea',
    },
    main: {
        flex: 1
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 150 / 2,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#e2eaea',
        marginLeft: 10
    },
    name: {
        fontSize: 18,
        paddingLeft: 18,
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
        padding: 10
    },
    modalWindow: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f6f6',
        height: '100%',
        paddingTop: 10,
        paddingHorizontal: 10
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height: '100%',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },
    modalTop: {
        backgroundColor: '#313e47',
        height: 120,
        width: '100%',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTop: {
        backgroundColor: '#41aed5',
        height: 0,
        width: '100%',
        borderLeftWidth: 210,
        borderRightWidth: 70,
        borderBottomWidth: 120,
        borderStyle: 'solid',
        borderLeftColor: '#41aed5',
        borderRightColor: '#7f8989',
        borderBottomColor: '#313e47',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        position: 'absolute'
    },
    headerRight: {
        backgroundColor: '#41aed5',
        height: 0,
        width: '100%',
        borderBottomWidth: 120,
        borderStyle: 'solid',
        borderRightColor: 'transparent',
        borderTopColor: '#313e47',
        borderBottomColor: '#313e47',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },
    modalMiddle: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 140,
    },
    modalBottom: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    image: {
        width: 170,
        height: 170,
        borderRadius: 170 / 2,
        overflow: 'hidden',
        borderWidth: 7,
        borderColor: 'white',
        marginTop: 120,
    },
    modalName: {
        fontSize: 33,
        marginTop: -50,
        fontWeight: 'bold',
        fontFamily: 'quicksand-semibold-600',
        color: '#41aed5'
    },
    modalPosition: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'quicksand-semibold-600',
        color: '#313e47'
    },
    modalText: {
        fontSize: 16.5,
        fontFamily: 'quicksand-semibold-600',
        color: '#7f8989',
        textAlign: 'center',
        paddingHorizontal: 5
    }
});

export default StaffShowScreen;