import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking } from 'react-native';
import { Button, Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ContactUsScreen = () => {

    return (
        <ScrollView style={styles.main}>

            <Card 
            title='OPENING HOURS' 
            titleStyle={{
                color: '#7f8989',
                fontFamily: 'quicksand-semibold-600'
            }}
            >
                <View style={styles.top}>
        
                    <View style={styles.left}>
                        <Text style={styles.text}>Monday</Text>
                        <Text style={styles.text}>Tuesday</Text>
                        <Text style={styles.text}>Wednesday</Text>
                        <Text style={styles.text}>Thursday</Text>
                        <Text style={styles.text}>Friday</Text>
                        <Text style={styles.text}>Saturday</Text>
                        <Text style={styles.text}>Sunday</Text>
                    </View>
                        
                    <View style={styles.right}>
                        <Text style={styles.textbold}>8am-5pm</Text>
                        <Text style={styles.textbold}>8am-5pm</Text>
                        <Text style={styles.textbold}>8am-5pm</Text>
                        <Text style={styles.textbold}>8am-5pm</Text>
                        <Text style={styles.textbold}>8am-5pm</Text>
                        <Text style={styles.textbold}>8am-5pm</Text>
                        <Text style={styles.textbold}>Closed</Text>
                    </View>

                </View>
            </Card>

            <Card 
            title='CONTACT US'
            titleStyle={{
                color: '#7f8989',
                fontFamily: 'quicksand-semibold-600'
            }}
            >
                <View style={styles.bottom}>

                    <View style={styles.call}>
                        <Button 
                        onPress={() => {Linking.openURL('tel:1800000000');}}
                        title='CALL US'
                        buttonStyle={{
                            backgroundColor: '#41aed5',
                            fontFamily: 'quicksand-semibold-600'
                         }}
                        />
                    </View>

                    <View style={styles.social}>
                        <View style={styles.s1}>
                            <TouchableOpacity 
                            onPress={ ()=>{ Linking.openURL('https://www.facebook.com')}}>
                                <Icon name='facebook' color="white" size={33} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.s1}>
                            <TouchableOpacity 
                            onPress={ ()=>{ Linking.openURL('https://www.instagram.com')}}>
                                <Icon name='instagram' color="white" size={33} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.s1}>
                            <TouchableOpacity 
                            onPress={ ()=>{ Linking.openURL('https://twitter.com')}}>
                                <Icon name='twitter' color="white" size={33} />
                            </TouchableOpacity>
                        </View>
                    </View>
                
                </View>
            </Card>
            
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#f0f6f6',
        flex: 1,
    },
    top: {
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    bottom: {
        backgroundColor: 'white',
    },
    left: {
        flex: 1,
        padding: 20,
        alignItems: 'flex-start',
    },
    right: {
        flex: 1,
        padding: 20,
        alignItems: 'flex-end'
    },
    call: {
        padding: 20,
    },
    social: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'center'
    },
    s1: {
        width: 60,
        height: 60,
        borderRadius: 150 / 2,
        overflow: 'hidden',
        borderColor: '#e2eaea',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#313e47',
        marginLeft: 20,
        marginRight: 20,
    },
    socialbutton: {
        width: 60,
        height: 60,
    },
    text: {
        fontSize: 18,
        marginBottom: 7,
        color: '#313e47',
        fontFamily: 'quicksand-semibold-600',
    },
    textbold: {
        fontSize: 18,
        marginBottom: 7,
        color: '#313e47',
        fontFamily: 'quicksand-semibold-600',
    },
    button: {
        backgroundColor: '#63a4c0'
    },
});

export default ContactUsScreen;