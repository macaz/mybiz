import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

const win = Dimensions.get('window');
const ratio = win.width/640; //640 is actual image width

const PhotoScreen = () => {

    var imageArray = [
        require('../../assets/img_slideshow_1.jpg'),
        require('../../assets/img_slideshow_2.jpg'),
        require('../../assets/img_slideshow_3.jpg')
    ];

    return (
        <View style={styles.main}>
            <Swiper autoplay={true} activeDotColor={'#41aed5'}>
                <View style={styles.container}>
                    <Image style={styles.image} source={imageArray[0]} resizeMode={'cover'} />
                </View>
                <View>
                    <Image style={styles.image} source={imageArray[1]} resizeMode={'cover'} />
                </View>
                <View>
                    <Image style={styles.image} source={imageArray[2]} resizeMode={'cover'} />
                </View>
            </Swiper>
        </View>
    )
};

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#f0f6f6',
        flex: 1,
    },
    image: {
        width: win.width,
        height: win.height - 35
    },
    container: {
        backgroundColor: 'red'
    }
});

export default PhotoScreen;