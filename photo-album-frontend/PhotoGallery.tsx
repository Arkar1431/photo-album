// PhotoGallery.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Photo {
  _id: string;
  imageUrl: string;
  createdAt: string;
}

interface PhotoGalleryProps {
  albumId: string;
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ albumId }) => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/photos/${albumId}`);
        setPhotos(response.data);
      } catch (error) {
        console.error('Error fetching photos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, [albumId]);

  return (
    <div className="photo-gallery grid grid-cols-2 gap-4">
      {loading ? (
        <p>Loading photos...</p>
      ) : photos.length > 0 ? (
        photos.map((photo) => (
          <div key={photo._id} className="photo-item">
            <img src={photo.imageUrl} alt="Uploaded photo" className="w-full h-auto rounded-lg shadow-lg" />
            <p className="text-gray-500 text-sm">Uploaded on: {new Date(photo.createdAt).toLocaleDateString()}</p>
          </div>
        ))
      ) : (
        <p>No photos in this album yet.</p>
      )}
    </div>
  );
};

export default PhotoGallery;
