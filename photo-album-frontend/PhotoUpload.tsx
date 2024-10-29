// PhotoUpload.tsx
import React, { useState } from 'react';
import axios from 'axios';

interface PhotoUploadProps {
  albumId: string; // Album ID to associate the uploaded photo with
}

const PhotoUpload: React.FC<PhotoUploadProps> = ({ albumId }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('photo', selectedFile);
    formData.append('albumId', albumId);

    setUploading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/photos/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setMessage('Photo uploaded successfully!');
      console.log('Upload response:', response.data);
    } catch (error) {
      setMessage('Failed to upload photo.');
      console.error(error);
    } finally {
      setUploading(false);
      setSelectedFile(null);
    }
  };

  return (
    <div className="photo-upload">
      <input type="file" onChange={handleFileChange} />
      <button
        onClick={handleUpload}
        disabled={uploading || !selectedFile}
        className="bg-blue-500 text-white p-2 rounded mt-2"
      >
        {uploading ? 'Uploading...' : 'Upload Photo'}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default PhotoUpload;
