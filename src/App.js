import React from 'react';
import './style.css';
import Navbar from './Components/Navbar';
import FolderList from './Components/FolderList';

export default function App() {
  return (
    <div classname="main">
      <Navbar />
      <FolderList />
      {/* <Note/> */}
    </div>
  );
}
