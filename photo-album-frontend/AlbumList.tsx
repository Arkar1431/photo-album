import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AlbumList: React.FC = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/albums').then((response) => {
      setAlbums(response.data);
    });
  }, []);

  return (
    <div className="album-list">
      {albums.map((album) => (
        <div key={album._id}>{album.name}</div>
      ))}
    </div>
  );
};

export default AlbumList;
