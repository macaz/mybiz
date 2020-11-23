import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, Text, TextInput, View, TouchableOpacity, FlatList, Dimensions, Linking, Modal } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import Feather from 'react-native-vector-icons/Feather';
import icoMoonConfig from '../../assets/theme/selection.json';
const Icon = createIconSetFromIcoMoon(
  icoMoonConfig,
  'icomoon',
  'iconmoon.ttf'
);
import AsyncStorage from '@react-native-community/async-storage';

const numColumns = 3;

const RewardsScreen = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalFinalOpen, setModalFinalOpen] = useState(false);
    const [userInput, setUserInput] = useState('');
    const [secureTextEntry, setSecureTextEntry] = useState(true);

    const updateSecureTextEntry = () => {
        setSecureTextEntry({
            ...secureTextEntry,
            secureTextEntry: !secureTextEntry.secureTextEntry
        });
    }

    const password = '123';

    const [rewards, setRewards] = useState([
        { key: '1', redeem: false },
        { key: '2', redeem: false },
        { key: '3', redeem: false },
        { key: '4', redeem: false },
        { key: '5', redeem: false },
        { key: 'FREE', redeem: false },
    ]);

    useEffect(() => {
        retrieveRewards();
    }, [])

    const passwordValidation = () => {
        if(userInput === password){
            //console.log('password is correct');

            updateRewards();
            setUserInput('');
            setModalOpen(false);
        } else {
            //console.log('password is incorrect');

            setUserInput('');
            setModalOpen(false);
        }
    };

    // Save reward state to async storage
    const saveRewards = async (rewardsArray) => {
        try {
          const rewardsString = JSON.stringify(rewardsArray);
          await AsyncStorage.setItem('@MyStore:rewards',rewardsString);

        } catch (error) {
          // Error saving data
          console.log(error);
        }
    };

    // Retrieve reward state to async storage
    const retrieveRewards = async () => {
        try {
            const rewardsString = await AsyncStorage.getItem('@MyStore:rewards');
            if (rewardsString !== null){
              
              const rewardsArray = JSON.parse(rewardsString);
              setRewards(rewardsArray);

            }
          } catch (error) {
            // Error retrieving data
            console.log(error)
          }
    };

    // Update the rewards card
    const updateRewards = () => {

        let newArray;
        // Find the first object that is false
        var result = rewards.find(item => !item.redeem);

        if(result.key === 'FREE') {
            // Reset user input then rewards
            setUserInput('');
            setModalFinalOpen(true);
        } else {
            // Set it as true
            if(result) result.redeem = true;
            // Copy array and set it
            newArray = [...rewards];
            setRewards(newArray);
            // Save async
            saveRewards(rewards);
        }
        
    }

    // Final redeem
    const finalRedeem = () => {
        let newArray;
        // Reset rewards to default
        newArray = resetRewards();
        setRewards(newArray);
        saveRewards(rewards);
        setModalFinalOpen(false);
    };

    const resetRewards = () => {
        let newArray = [
            { key: '1', redeem: false },
            { key: '2', redeem: false },
            { key: '3', redeem: false },
            { key: '4', redeem: false },
            { key: '5', redeem: false },
            { key: 'FREE', redeem: false },
        ];
        return(newArray);
    }

    return (
        <ScrollView style={styles.main}>

            <Card 
                title='WE REWARD LOYALTY'
                titleStyle={{
                    color: '#7f8989',
                    fontFamily: 'quicksand-semibold-600'
                }}
            >
                <View  style={styles.card}>

                {/* Modal - Password redeem */}
                <Modal 
                visible={modalOpen}
                animationType='slide'
                transparent
                >
                    <View style={styles.modalWindow}>

                        <View style={styles.modalTop}>
                            <Text style={styles.modalName}>PASSWORD</Text>
                        </View>
                        <View style={styles.passwordStyle}>
                        
                            <TextInput 
                                secureTextEntry={secureTextEntry.secureTextEntry ? true : false}
                                style={styles.inputStyle}
                                placeholder='Enter password'
                                onChangeText={text => setUserInput(text)}
                                onEndEditing={() => passwordValidation()}
                            />

                            <TouchableOpacity
                                onPress={updateSecureTextEntry}
                            >
                                {secureTextEntry.secureTextEntry ? 
                                <Feather 
                                    name="eye-off"
                                    color="grey"
                                    size={22}
                                    style={{ paddingRight: 10 }}
                                />
                                :
                                <Feather 
                                    name="eye"
                                    color="grey"
                                    size={22}
                                    style={{ paddingRight: 10 }}
                                />
                                }
                            </TouchableOpacity>

                        </View>

                        <View style={styles.modalBottom}>
                            <Button 
                                onPress={() => setModalOpen(false)}
                                title='CANCEL'
                                buttonStyle={{
                                    backgroundColor: '#41aed5',
                                    fontFamily: 'quicksand-semibold-600',
                                    width: 120,
                                    marginRight: 5
                            }}/>
                            <Button 
                                onPress={() => passwordValidation()}
                                title='SUBMIT'
                                buttonStyle={{
                                    backgroundColor: '#41aed5',
                                    fontFamily: 'quicksand-semibold-600',
                                    paddingHorizontal: 25,
                                    width: 120,
                                    marginLeft: 5
                            }}/>
                        </View>

                    </View>
                </Modal>
                
                {/* Modal - final redeem/reset of loyalty card */}
                <Modal 
                visible={modalFinalOpen}
                animationType='slide'
                transparent
                >
                    <View style={styles.modalWindow}>

                        <View style={styles.modalTop}>
                            <Text style={styles.modalName}>RESET REWARDS</Text>
                        </View>
                        <View>
                            <Text style={styles.modalText}>Do you want to redeem your reward? This will reset the loyalty card.</Text>
                        </View>

                        <View style={styles.modalBottom}>
                            <Button 
                                onPress={() => setModalFinalOpen(false)}
                                title='CANCEL'
                                buttonStyle={{
                                    backgroundColor: '#41aed5',
                                    fontFamily: 'quicksand-semibold-600',
                                    width: 120,
                                    marginRight: 5
                            }}/>
                            <Button 
                                onPress={() => finalRedeem()}
                                title='OK'
                                buttonStyle={{
                                    backgroundColor: '#41aed5',
                                    fontFamily: 'quicksand-semibold-600',
                                    width: 120,
                                    marginLeft: 5
                            }}/>
                        </View>

                    </View>
                </Modal>

                        {/* list of rewards */}
                        <FlatList 
                            horizontal={false}
                            showsHorizontalScrollIndicator={false}
                            data={rewards}
                            keyExtractor={(result) => result.key}
                            numColumns={numColumns}
                            renderItem={({ item }) => {
                        return (
                        <View style={styles.item}>
                            {item.redeem == true? 
                            <Icon name="stamp-with-tick2" color='red' size={75} /> : 
                            <Text style={styles.itemText}>{item.key}</Text> 
                            }
                        </View>
                                )
                            }}
                        />
                        <View style={styles.call}>
                            <Text style={styles.text}>To redeem click on the button and enter '123'. This can be customised to your needs.</Text>
                            <Button 
                                onPress={() => setModalOpen(true)}
                                title='REDEEM'
                                buttonStyle={{
                                    backgroundColor: '#41aed5',
                                    fontFamily: 'quicksand-semibold-600',
                            }}/>
                        </View>
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
        padding: 5,
        justifyContent: 'space-between',
        alignContent: 'space-between',
        alignItems: 'center',
        height: 400
    },
    container: {
        flex: 1,
        marginVertical: 20,
      },
    list: {
        marginTop: 15,
        marginBottom: 15,
    },
    text: {
        fontSize: 16.5,
        textAlign: 'center',
        color: '#313e47',
        fontFamily: 'quicksand-semibold-600',
        paddingBottom: 15
    },
    item: {
        backgroundColor: '#313e47',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        height: 80,
        width: 80,
        borderRadius: 150 / 2,
    },
    itemText: {
        color: 'white',
        fontSize: 16
    },
    call: {
        padding: 20,
        width: '100%'
    },
    modalWindow: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'lightgray',
        borderStyle: 'solid',
        borderRadius: 10,
        elevation: 1,
        marginHorizontal: "10%",
        marginVertical: "60%",
        height: 230
    },
    modalTop: {
        backgroundColor: 'white',
        width: '100%',
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10
    },
    modalBottom: {
        justifyContent: 'center',
        alignItems: 'stretch',
        flexDirection: 'row',
        padding: 15,
        paddingHorizontal: 30
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
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'quicksand-semibold-600',
        color: 'black',
        paddingBottom: 20
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
        paddingHorizontal: 20,
    },
    passwordStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginBottom: 10,
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputStyle: {
        fontSize: 18,
        flex: 1,
        paddingLeft: 10
    },
});

export default RewardsScreen;