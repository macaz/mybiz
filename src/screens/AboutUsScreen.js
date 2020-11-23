import React from 'react';
import { StyleSheet, ScrollView, Text, View, Dimensions } from 'react-native';
import { Card } from 'react-native-elements';
import StaffList from '../components/StaffList';

// NOTE - The staff list is hardcoded but could be accessed from an API in production //

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const AboutUsScreen = () => {

    return (
        <ScrollView style={styles.main}>

            <Card>
                <View  style={styles.card}>
                    <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit scelerisque mauris pellentesque pulvinar pellentesque. Tincidunt vitae semper quis lectus nulla at.</Text>
                    <Text></Text>
                    <Text style={styles.text}>Morbi quis commodo odio aenean sed adipiscing diam. Sed nisi lacus sed viverra tellus in hac habitasse platea. Vitae et leo duis ut diam quam nulla.</Text>
                </View>
            
            </Card>

            <Card 
            title='MEET THE TEAM'
            titleStyle={{
                color: '#7f8989',
                fontFamily: 'quicksand-semibold-600'
            }}
            >
                <View style={styles.list}>
                    <StaffList 
                    />
                </View>
            </Card>
            
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#f0f6f6',
        flex: 1
    },
    card: {
        padding: 5
    },
    list: {
        marginTop: 15,
        marginBottom: 15,
        paddingHorizontal: 15,
    },
    text: {
        fontSize: 16.5,
        textAlign: 'center',
        color: '#313e47',
        fontFamily: 'quicksand-semibold-600',
    },
    modalWindow: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: 'lightgray',
        borderStyle: 'solid',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginHorizontal: "5%",
        marginVertical: "40%",
        height: 450
    },
    modalTop: {
        backgroundColor: '#313e47',
        height: 120,
        width: '100%',
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalMiddle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 120
    },
    modalBottom: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 170,
        height: 170,
        borderRadius: 170 / 2,
        overflow: 'hidden',
        borderWidth: 7,
        borderColor: 'white',
        marginTop: 120
    },
    modalName: {
        fontSize: 33,
        marginTop: -50,
        fontWeight: 'bold',
        fontFamily: 'quicksand-semibold-600',
        color: 'black'
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

export default AboutUsScreen;