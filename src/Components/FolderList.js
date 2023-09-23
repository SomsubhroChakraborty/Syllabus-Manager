import React, { useState } from 'react';
import NoteList from './NoteList';
import './Folder.css';

function FolderList() {
  const [folders, setFolders] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [newFolderName, setNewFolderName] = useState('');

  const addFolder = () => {
    if (newFolderName.trim() !== '') {
      setFolders([...folders, { name: newFolderName, notes: [] }]);
      setNewFolderName('');
    }
  };

  return (
    <div>
      <div className="input_section">
        <input
          type="text"
          placeholder="New Folder Name"
          value={newFolderName}
          onChange={(e) => setNewFolderName(e.target.value)}
        />
        <button onClick={addFolder}>Create Folder</button>
      </div>
      <ul>
        {folders.map((folder, index) => (
          <li key={index}>
            <div className="folder-item">
              <button
                className="folder-button"
                onClick={() => setSelectedFolder(folder)}
              >
                {folder.name}
              </button>
            </div>
          </li>
        ))}
      </ul>
      {selectedFolder && <NoteList folder={selectedFolder} />}
    </div>
  );
}

export default FolderList;
