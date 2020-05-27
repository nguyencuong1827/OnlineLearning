import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

 
const SectionCoursesItem = (props) => {
    return <View style={styles.item}>
        <Image style={styles.img} source={require('../../../../../assets/watermelon.jpg')} />
        <View style={styles.content}>
            <Text>{props.item.title}</Text>
            <Text style={styles.darkText}>{props.item.author}</Text>
            <Text style={styles.darkText}>{`${props.item.level} . ${props.item.released} . ${props.item.duration}`}</Text>
        </View>
    </View>
}
export default SectionCoursesItem;
const styles = StyleSheet.create({
    item: {
        margin: 5,
        width: 200,
        height: 180,
        backgroundColor: 'lightgray'
    },
    img: {
        width: 200,
        height: 100,
    },
    content: {
        margin: 5
    },
    darkText: {
        color: 'darkgray'
    }
    
});