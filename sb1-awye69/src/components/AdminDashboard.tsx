import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface SongData {
  id: number;
  songTitle: string;
  artist: string;
  releaseDate: string;
}

const AdminDashboard: React.FC = () => {
  const [songs, setSongs] = useState<SongData[]>([]);

  useEffect(() => {
    // In a real application, you would fetch this data from your backend
    const mockData: SongData[] = [
      { id: 1, songTitle: 'Neon Night', artist: 'John Doe', releaseDate: '2023-06-01' },
      { id: 2, songTitle: 'Electric Dreams', artist: 'Jane Smith', releaseDate: '2023-07-15' },
      { id: 3, songTitle: 'Cosmic Love', artist: 'Alex Johnson', releaseDate: '2023-08-30' },
    ];
    setSongs(mockData);
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-semibold text-white">Admin Dashboard</h1>
        <Link to="/admin/new-song" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          New Song
        </Link>
      </div>
      <table className="min-w-full divide-y divide-gray-600">
        <thead className="bg-gray-700">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Song Title</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Artist</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Release Date</th>
          </tr>
        </thead>
        <tbody className="bg-gray-800 divide-y divide-gray-600">
          {songs.map((song) => (
            <tr key={song.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{song.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{song.songTitle}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{song.artist}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{song.releaseDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;