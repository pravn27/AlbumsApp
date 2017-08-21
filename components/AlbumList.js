import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetails from './AlbumDetails';

export default class AlbumList extends Component {
    state = { AlbumData: [] }

    componentWillMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({AlbumData: response.data}));
    }

    renderAlbums(){
       return this.state.AlbumData.map(album => 
            <AlbumDetails key={album.title} data={album} />
        );
    }

    render() {
        return (
        <ScrollView>
            {this.renderAlbums()}
        </ScrollView>
        );
    }
}