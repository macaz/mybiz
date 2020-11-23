import React from 'react';
import { ScrollView, StyleSheet, View, Linking, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';

const LocationScreen = () => {

    // Business co-ordinates
    const lat = -33.85662400803782;
    const lng = 151.21527524042008;

    const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
    const latLng = `${lat},${lng}`;
    const label = 'MYBIZ';
    const url = Platform.select({
    ios: `${scheme}${label}@${latLng}`,
    android: `${scheme}${latLng}(${label})`
    });

    return (
    <ScrollView>

        <Card 
        title="ADDRESS"
        titleStyle={{
            color: '#7f8989',
            fontFamily: 'quicksand-semibold-600'
        }}
        >
            
            <Text style={styles.heading}>MYBIZ</Text>
            <Text></Text>
            <Text style={styles.address}>Unit 1, Level 2</Text>
            <Text style={styles.address}>3 Main Street</Text>
            <Text style={styles.address}>Sydney   NSW   2000</Text>
            <Text></Text>
            <Text style={styles.phone}>p: 1800 000 000</Text>
            <Text style={styles.phone}>e: info@sydney.com</Text>

            <View style={styles.button}>
                <Button 
                onPress={() => {Linking.openURL(url);}}
                title='GET DIRECTIONS'
                buttonStyle={{
                    backgroundColor: '#41aed5',
                    fontFamily: 'quicksand-semibold-600'
                }}
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
    heading: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#313e47',
        fontFamily: 'quicksand-semibold-600',
    },
    address: {
        fontSize: 16,
        color: '#313e47',
        fontFamily: 'quicksand-semibold-600',
    },
    phone: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#313e47',
        fontFamily: 'quicksand-semibold-600',
    },
    button: {
        marginTop: 25,
        padding: 20
    }
});

export default LocationScreen;