import React from 'react';
import { StyleSheet } from 'react-native';
import PDFReader from 'rn-pdf-reader-js'

const PriceListScreen = () => {

    return (
            <PDFReader
            style={styles.main}
            source={{
              uri: 'https://seanmcquarrie.com/files/mybiz/pricelist.pdf',
              backgroundColor: '#f0f6f6'
            }} 
            />
    )
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#f0f6f6'
    },
});

export default PriceListScreen;