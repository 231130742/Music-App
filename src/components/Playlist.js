import React from 'react';

const Playlist = ({ songs, selectSong, addToPlaylist }) => {
  const handleSongClick = (song) => {
    selectSong(song);
  };

  return (
    <div className="playlist">
      <h2>Playlist</h2>
      <ul className="song-list">
        {songs.map((song) => (
          <li key={song.id} className="song-item" onClick={() => handleSongClick(song)}>
            <img
              src={song.albumCover}
              alt={`${song.title} Cover`}
              className="song-cover"
            />
            <div className="song-details">
              <p className="song-title">{song.title}</p>
              <p className="song-artist">{song.artist}</p>
              <p className="song-duration">{song.duration}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
