import { useState, useEffect } from 'react';

export default function Page() {
  const [currentImage, setCurrentImage] = useState('');

  // Function to fetch a new image from the server
  const fetchNewImage = async () => {
    const response = await fetch('/api/frame', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ action: 'new_image' }),  // This tells the server what we want
    });
    if (response.ok) {
      const data = await response.json();
      setCurrentImage(data.imageUrl);
    }
  };

  // Fetch an initial image on component mount
  useEffect(() => {
    fetchNewImage();
  }, []);

  return (
    <>
      <h1>Dynamic Image Viewer</h1>
      <button onClick={fetchNewImage}>Show me Purpleman</button>
      {currentImage && <img src={currentImage} alt="Displayed Image" />}
    </>
  );
}
