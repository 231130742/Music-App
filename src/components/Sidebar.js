import React, { useState } from 'react';

const Sidebar = ({ setPage, currentPage }) => {
  const [folders, setFolders] = useState([]); 
  const [folderName, setFolderName] = useState(''); 

  const handleAddFolder = () => {
    if (folderName) {
      setFolders([...folders, folderName]); 
      setFolderName(''); 
    }
  };

  return (
    <div className="sidebar">
      <h3>Your Library</h3> 
      <ul>
        <li className={currentPage === 'home' ? 'active' : ''} onClick={() => setPage('home')}>
          <i className="fas fa-home fa-lg"></i> Home 
        </li>
        <li className={currentPage === 'playlist' ? 'active' : ''} onClick={() => setPage('playlist')}>
          <i className="fas fa-music fa-lg"></i> Playlist 
        </li>
      </ul>

      <h4>Add Custom Folder</h4> 
      <input
        type="text"
        value={folderName}
        onChange={(e) => setFolderName(e.target.value)}
        placeholder="Folder Name"
      />
      <button onClick={handleAddFolder}>Add Folder</button>

      <h4>Your Folders</h4>
      <ul>
        {folders.map((folder, index) => (
          <li
            key={index}
            className={currentPage === folder ? 'active' : ''}
            onClick={() => setPage(folder)}
            style={{ cursor: 'pointer' }}
          >
            <i className="fas fa-compact-disc fa-lg"></i> {folder} 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
