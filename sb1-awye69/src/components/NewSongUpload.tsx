import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface PlatformLink {
  platform: string;
  link: string;
}

const NewSongUpload: React.FC = () => {
  const navigate = useNavigate();
  const [artistName, setArtistName] = useState('');
  const [songTitle, setSongTitle] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [albumCover, setAlbumCover] = useState<File | null>(null);
  const [platformLinks, setPlatformLinks] = useState<PlatformLink[]>([
    { platform: 'Spotify', link: '' },
    { platform: 'Apple Music', link: '' },
    { platform: 'YouTube', link: '' },
    { platform: 'TikTok', link: '' },
    { platform: 'SoundCloud', link: '' },
    { platform: 'Audiomack', link: '' },
    { platform: 'Amazon Music', link: '' },
    { platform: 'Deezer', link: '' },
  ]);

  const handleAlbumCoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAlbumCover(e.target.files[0]);
    }
  };

  const handlePlatformLinkChange = (index: number, link: string) => {
    const newPlatformLinks = [...platformLinks];
    newPlatformLinks[index].link = link;
    setPlatformLinks(newPlatformLinks);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    console.log({ artistName, songTitle, releaseDate, albumCover, platformLinks });
    alert('New song uploaded successfully!');
    navigate('/admin'); // Redirect back to the admin dashboard
  };

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-2xl font-semibold mb-5 text-white">Upload New Song</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="artistName" className="block text-sm font-medium text-gray-300">Artist Name</label>
          <input
            type="text"
            id="artistName"
            value={artistName}
            onChange={(e) => setArtistName(e.target.value)}
            className="mt-1 block w-full border border-gray-600 rounded-md shadow-sm p-2 bg-gray-700 text-white"
            required
          />
        </div>
        <div>
          <label htmlFor="songTitle" className="block text-sm font-medium text-gray-300">Song Title</label>
          <input
            type="text"
            id="songTitle"
            value={songTitle}
            onChange={(e) => setSongTitle(e.target.value)}
            className="mt-1 block w-full border border-gray-600 rounded-md shadow-sm p-2 bg-gray-700 text-white"
            required
          />
        </div>
        <div>
          <label htmlFor="releaseDate" className="block text-sm font-medium text-gray-300">Release Date</label>
          <input
            type="date"
            id="releaseDate"
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
            className="mt-1 block w-full border border-gray-600 rounded-md shadow-sm p-2 bg-gray-700 text-white"
            required
          />
        </div>
        <div>
          <label htmlFor="albumCover" className="block text-sm font-medium text-gray-300">Album Cover Art</label>
          <input
            type="file"
            id="albumCover"
            onChange={handleAlbumCoverChange}
            className="mt-1 block w-full text-gray-300"
            accept="image/*"
            required
          />
        </div>
        {platformLinks.map((platform, index) => (
          <div key={platform.platform}>
            <label htmlFor={platform.platform} className="block text-sm font-medium text-gray-300">{platform.platform} Link</label>
            <input
              type="url"
              id={platform.platform}
              value={platform.link}
              onChange={(e) => handlePlatformLinkChange(index, e.target.value)}
              className="mt-1 block w-full border border-gray-600 rounded-md shadow-sm p-2 bg-gray-700 text-white"
              required
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Upload New Song
        </button>
      </form>
    </div>
  );
};

export default NewSongUpload;