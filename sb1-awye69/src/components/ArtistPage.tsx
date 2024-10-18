import React, { useState } from 'react';

interface MusicPlatform {
  name: string;
  action: string;
  releaseAction: string;
}

const platforms: MusicPlatform[] = [
  { name: 'TikTok', action: 'Use Sound', releaseAction: 'Listen' },
  { name: 'Spotify', action: 'Pre-Save', releaseAction: 'Listen' },
  { name: 'YouTube', action: 'Subscribe', releaseAction: 'Play' },
  { name: 'Apple Music', action: 'Pre-Add', releaseAction: 'Listen' },
  { name: 'SoundCloud', action: 'Follow', releaseAction: 'Listen' },
  { name: 'Audiomack', action: 'Follow', releaseAction: 'Listen' },
  { name: 'Amazon Music', action: 'Pre-Save', releaseAction: 'Listen' },
  { name: 'Deezer', action: 'Pre-Save', releaseAction: 'Listen' },
];

const ArtistPage: React.FC = () => {
  const [songTitle, setSongTitle] = useState('');
  const [albumArt, setAlbumArt] = useState<File | null>(null);
  const [platformLinks, setPlatformLinks] = useState<Record<string, string>>({});
  const [releaseDate, setReleaseDate] = useState('');

  const handleAlbumArtChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAlbumArt(e.target.files[0]);
    }
  };

  const handlePlatformLinkChange = (platform: string, link: string) => {
    setPlatformLinks(prev => ({ ...prev, [platform]: link }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    console.log({ songTitle, albumArt, platformLinks, releaseDate });
    alert('Data submitted successfully!');
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-5 text-white">Upload Song Details</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
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
          <label htmlFor="albumArt" className="block text-sm font-medium text-gray-300">Album Art</label>
          <input
            type="file"
            id="albumArt"
            onChange={handleAlbumArtChange}
            accept="image/*"
            className="mt-1 block w-full text-gray-300"
            required
          />
        </div>

        <div>
          <label htmlFor="releaseDate" className="block text-sm font-medium text-gray-300">Release Date</label>
          <input
            type="datetime-local"
            id="releaseDate"
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
            className="mt-1 block w-full border border-gray-600 rounded-md shadow-sm p-2 bg-gray-700 text-white"
            required
          />
        </div>
        
        {platforms.map((platform) => (
          <div key={platform.name}>
            <label htmlFor={platform.name} className="block text-sm font-medium text-gray-300">
              {platform.name} Link ({platform.action})
            </label>
            <input
              type="url"
              id={platform.name}
              value={platformLinks[platform.name] || ''}
              onChange={(e) => handlePlatformLinkChange(platform.name, e.target.value)}
              className="mt-1 block w-full border border-gray-600 rounded-md shadow-sm p-2 bg-gray-700 text-white"
              required
            />
          </div>
        ))}
        
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ArtistPage;