import React from 'react';

const Home = ({ albums, addToPlaylist, folders }) => {
  const handleAddToPlaylist = (album) => {
    const folderName = prompt("Masukkan nama folder atau playlist untuk menambahkan lagu ini:");
    if (folderName) {
      addToPlaylist(album, folderName);
    }
  };

  return (
    <div className="home">
      <h2>Browse Albums</h2>
      <div className="album-grid">
        {albums.map((album) => (
          <div key={album.id} className="album-card">
            <img src={album.cover} alt={album.title} />
            <h3>{album.title}</h3>
            <p>{album.artist}</p>
            <button
              className="add-button"
              onClick={() => handleAddToPlaylist(album)}
              title="Add to Playlist"
            >
              <i className="fas fa-plus"></i> 
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
