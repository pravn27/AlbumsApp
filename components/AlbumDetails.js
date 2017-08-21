import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

export default class AlbumDetails extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <View style={styles.thumbnailContainer}>
                        <Image style={styles.thumbnailStyle} source={{ uri: this.props.data.image }}/>
                    </View>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerTextStyle}>{this.props.data.title}</Text>
                        <Text>{this.props.data.artist}</Text>
                    </View>
                </CardSection>

                <CardSection>
                    <Image style={styles.mainImage} source={{uri: this.props.data.image}}/>
                </CardSection>
                
                <CardSection>
                    <Button whenPressed={() => Linking.openURL(this.props.data.url)}>
                        Buy Now
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 20
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    mainImage: {
        height: 300,
        flex: 1,
        width: null
    }
})