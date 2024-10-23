import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './components/Home';
import Player from './components/Player';
import Playlist from './components/Playlist';
import albums from './data/Albums'; 
import songs from './data/Songs'; 

const App = () => {
  const [currentPage, setPage] = useState('home');
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [playlists, setPlaylists] = useState({}); 
  const selectSong = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  
  const addToPlaylist = (song, folderName) => {
    setPlaylists((prevPlaylists) => {
      const newPlaylists = { ...prevPlaylists };

      if (!newPlaylists[folderName]) {
        newPlaylists[folderName] = []; 
      }

      newPlaylists[folderName].push(song); 
      return newPlaylists;
    });
  };

  
  const filteredAlbums = albums.filter(album =>
    album.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    album.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredSongs = songs.filter(song =>
    song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  const folders = Object.keys(playlists); 

  return (
    <div className="app">
      <Sidebar setPage={setPage} currentPage={currentPage} />
      <div className="main-content">
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        {currentPage === 'home' && (
          <Home albums={filteredAlbums} addToPlaylist={addToPlaylist} folders={folders} />
        )}
        {currentPage === 'playlist' && (
          <Playlist songs={filteredSongs} selectSong={selectSong} />
        )}
      </div>
      {currentSong && (
        <div className="player-container">
          <Player currentSong={currentSong} isPlaying={isPlaying} togglePlay={togglePlay} />
        </div>
      )}
    </div>
  );
};

export default App;
