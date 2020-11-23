import React from 'react';
import { Image, View, StyleSheet, Linking, Dimensions } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Drawer, } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const win = Dimensions.get('window');

export function DrawerContent(props) {
    return(
        <View style={{ flex: 1, backgroundColor: '#313e47' }}>

            <DrawerContentScrollView {... props}>

                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View>
                            <Image 
                                source = {require('../../assets/logo.png')}
                                style={styles.logo}
                                
                            />
                        </View>
                    </View>
                </View>

                <Drawer.Section style={styles.drawerSection}>

                    <DrawerItem 
                        icon={({color, size}) => (
                            <Icon 
                                name="account-outline"
                                color='white'
                                size={size}
                            />
                        )}
                        label="ABOUT US"
                        labelStyle={{ color: 'white', fontWeight: 'bold', fontSize: 16, letterSpacing: 1}}
                        onPress={() => {props.navigation.navigate
                        ('About')}}
                    />

                    <DrawerItem 
                        icon={({color, size}) => (
                            <Icon 
                                name="phone-outline"
                                color='white'
                                size={size}
                            />
                        )}
                        label="CONTACT US"
                        labelStyle={{ color: 'white', fontWeight: 'bold', fontSize: 16, letterSpacing: 1}}
                        onPress={() => {props.navigation.navigate
                        ('Contact')}}
                    />

                    <DrawerItem 
                        icon={({color, size}) => (
                            <Icon 
                                name="currency-usd"
                                color='white'
                                size={size}
                            />
                        )}
                        label="SERVICES"
                        labelStyle={{ color: 'white', fontWeight: 'bold', fontSize: 16, letterSpacing: 1}}
                        onPress={() => {props.navigation.navigate
                        ('Price')}}
                    />

                    <DrawerItem 
                        icon={({color, size}) => (
                            <Icon 
                                name="map-marker-outline"
                                color='white'
                                size={size}
                            />
                        )}
                        label="FIND US"
                        labelStyle={{ color: 'white', fontWeight: 'bold', fontSize: 16, letterSpacing: 1}}
                        onPress={() => {props.navigation.navigate
                        ('Location')}}
                    />

                    <DrawerItem 
                        icon={({color, size}) => (
                            <Icon 
                                name="camera-outline"
                                color='white'
                                size={size}
                            />
                        )}
                        label="GALLERY"
                        labelStyle={{ color: 'white', fontWeight: 'bold', fontSize: 16, letterSpacing: 1}}
                        onPress={() => {props.navigation.navigate
                        ('Photo')}}
                    />

                    <DrawerItem 
                        icon={({color, size}) => (
                            <Icon 
                                name="wallet-giftcard"
                                color='white'
                                size={size}
                            />
                        )}
                        label="REWARDS"
                        labelStyle={{ color: 'white', fontWeight: 'bold', fontSize: 16, letterSpacing: 1}}
                        onPress={() => {props.navigation.navigate
                        ('Rewards')}}
                    />

                </Drawer.Section>

            </DrawerContentScrollView>

            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                            name="exit-to-app"
                            color='white'
                            size={size}
                        />
                    )}
                    label="VISIT OUR WEBSITE"
                    labelStyle={{ color: 'white', fontWeight: 'bold', fontSize: 16, letterSpacing: 1}}
                    onPress={ ()=>{ Linking.openURL('https://github.com/macaz/mybiz')}}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
      },
      userInfoSection: {
        paddingLeft: 0,
        paddingTop: 10
      },
      title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
      },
      logo: {
        flex: 1,
        resizeMode: 'contain',
        width: '100%',
        height: 87,
      },
      caption: {
        fontSize: 14,
        lineHeight: 14,
      },
      row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
      },
      section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
      },
      paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
      },
      drawerSection: {
        marginTop: 7,
      },
      bottomDrawerSection: {
          marginBottom: 15,
          borderTopColor: '#7f8989',
          borderTopWidth: 1
      },
      preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
      },
});

