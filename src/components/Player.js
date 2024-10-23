import React from 'react';

const Player = ({ currentSong, isPlaying, togglePlay }) => {
  return (
    <div className="player">
      <div className="player-content">
        <img
          src={currentSong.albumCover} 
          alt={`${currentSong.title} Cover`} 
          className="player-cover"
        />
        <div className="song-info">
          <h3 className="song-title">{currentSong.title}</h3>
          <p className="song-artist">{currentSong.artist}</p>
        </div>
      </div>
      <div className="controls">
        <button className="control-button">
          <i className="fas fa-random"></i>
        </button>
        <button className="control-button">
          <i className="fas fa-step-backward"></i>
        </button>
        <button className="control-button play-button" onClick={togglePlay}>
          {isPlaying ? <i className="fas fa-pause"></i> : <i className="fas fa-play"></i>}
        </button>
        <button className="control-button">
          <i className="fas fa-step-forward"></i>
        </button>
        <button className="control-button">
          <i className="fas fa-redo-alt"></i>
        </button>
      </div>
    </div>
  );
};

export default Player;
