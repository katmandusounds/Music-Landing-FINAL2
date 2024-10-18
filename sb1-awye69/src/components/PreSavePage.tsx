import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PreSaveButton from './PreSaveButton';
import ColorThief from 'colorthief';
import EmailCollector from './EmailCollector';

const PreSavePage: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<string | null>(null);
  const [isReleased, setIsReleased] = useState(false);
  const [email, setEmail] = useState('');
  const [backgroundStyle, setBackgroundStyle] = useState({});

  // Example data - replace with actual data from your backend
  const songTitle = "Feelings";
  const albumArtUrl = "https://ik.imagekit.io/yello93/brisky%20feelings%20idea%20no%20prod%20credit.png?updatedAt=1728939862648";
  const releaseDate = new Date('2024-10-18T00:00:00'); // Replace with actual release date

  const platforms = [
    { name: 'TikTok', action: 'Use Sound', logo: 'https://ik.imagekit.io/yello93/tiktok-plain-1.svg?updatedAt=1728938955703', link: 'https://vm.tiktok.com/ZGdd9HGkW/' },
    { name: 'Spotify', action: 'Listen', logo: 'https://ik.imagekit.io/yello93/spotify-logo.svg?updatedAt=1728938955296', link: 'https://open.spotify.com/album/28yzqtUbXDaWllYGX2lezP' },
    { name: 'YouTube', action: 'Watch', logo: 'https://ik.imagekit.io/yello93/YouTube_Logo_2017.svg?updatedAt=1728938955619', link: 'https://youtu.be/dt_IV3BGqoo?si=J_M68mesavZmTc54' },
    { name: 'Apple Music', action: 'Listen', logo: 'https://ik.imagekit.io/yello93/apple-music-3.svg?updatedAt=1728938955269', link: 'https://music.apple.com/gb/album/feelings-single/1772826037' },
    { name: 'SoundCloud', action: 'Listen', logo: 'https://ik.imagekit.io/yello93/Soundcloud_logo.svg?updatedAt=1728938955377', link: 'https://soundcloud.com/brisky-sc/feelings' },
    { name: 'Amazon Music', action: 'Listen', logo: 'https://ik.imagekit.io/yello93/Amazon_music_logo.svg.png?updatedAt=1728938955740', link: 'https://music.amazon.co.uk/tracks/B0DJHGJN9J?marketplaceId=A1F83G8C2ARO7P&musicTerritory=GB&ref=dm_sh_Srt2QRK6FeRKD9fIrCR7LdrXW' },
    { name: 'Deezer', action: 'Listen', logo: 'https://ik.imagekit.io/yello93/Deezer_logo_2007.svg?updatedAt=1728938955530', link: 'https://www.deezer.com/en/album/652380711' },
  ];

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = releaseDate.getTime() - now.getTime();

      if (difference <= 0) {
        setIsReleased(true);
        setTimeLeft(null);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer); // Cleanup the timer on component unmount
  }, [releaseDate]);

  useEffect(() => {
    const img = new Image();
    const colorThief = new ColorThief();

    img.crossOrigin = 'Anonymous';
    img.src = albumArtUrl;

    img.onload = () => {
      const palette = colorThief.getPalette(img, 5);
      
      // Create circular gradients using the extracted colors
      const circularGradients = palette.map((color, index) => {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = 30 + Math.random() * 40; // Random size between 30% and 70%
        return `radial-gradient(circle at ${x}% ${y}%, rgba(${color.join(',')}, 0.7) 0%, rgba(${color.join(',')}, 0) ${size}%)`;
      }).join(', ');

      // Add a dark gradient overlay in the center
      const darkOverlay = 'radial-gradient(circle at 50% 50%, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 70%)';

      const gradientStyle = {
        background: `${circularGradients}, ${darkOverlay}, black`,
        backgroundSize: '200% 200%, 100% 100%, 100% 100%',
        animation: 'move-background 30s ease infinite',
      };

      setBackgroundStyle(gradientStyle);
    };
  }, [albumArtUrl]);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    alert('Thank you for subscribing!');
    setEmail('');
  };

  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 space-y-6 relative overflow-hidden" style={backgroundStyle}>
      <div className="w-[72%] max-w-[280px] z-10">
        <img src={albumArtUrl} alt="Album Art" className="w-full aspect-square object-cover rounded-lg shadow-lg" />
      </div>
      
      

      
      <div className="text-center z-10"> 
        <h1 className="text-2xl font-bold text-white">{songTitle}</h1>
        {!isReleased && timeLeft && (
          <p className="text-yellow-400 font-bold mt-2">{timeLeft}</p>
        )}
        














        <p className="text-sm mt-4 text-white">Choose your preferred music service</p>
      </div>
      <div className="w-[72%] max-w-[280px] z-10">
  {platforms.map((platform) => {
    // Determine action based on platform name and release status
    const action =
      platform.name === 'TikTok' ? 'Use Sound' :
      platform.name === 'YouTube' ? 'Watch Video' :
      isReleased ? 'Listen' : platform.action;

    return (
      <PreSaveButton
        key={platform.name}
        platform={platform.name}
        action={action}
        logo={platform.logo}
        link={platform.link}
      />
    );
  })}
</div>
      <div className="text-xs text-gray-300 mt-4 text-center z-10">
      <a href="https://www.wadizthismusic.com" target="_blank" rel="noopener noreferrer">
  <img 
    src="https://ik.imagekit.io/yello93/wadiz%20this%20with%20stroket.png?updatedAt=1728942887027" 
    alt="Company Logo" 
    className="mx-auto mb-4 h-12 w-auto transition duration-300 ease-in-out"
    onMouseOver={e => e.currentTarget.src = "https://ik.imagekit.io/yello93/wadiz%20this%20yellow%20stroke.png?updatedAt=1728944115158"}  // Yellow logo on hover
    onMouseOut={e => e.currentTarget.src = "https://ik.imagekit.io/yello93/wadiz%20this%20with%20stroket.png?updatedAt=1728942887027"}  // White logo when not hovered 
  />
</a>
        
<p style={{ fontSize: '9px' }}>By using this service you agree to our Privacy Policy and Terms Of Use.</p>
<p style={{ fontSize: '9px' }}>Manage your permissions</p>
<a href="mailto:info@wadizthismusic.com" className="text-gray-300 hover:text-gray-100" style={{ fontSize: '9px' }}>Report a Problem</a>

        <br />
        <div className="mt-2">
          <Link to="/" className="text-gray-300 hover:text-gray-100 mr-4" style={{ fontSize: '9px' }}>©℗ 2024 Wadiz This Music Limited</Link>
          <Link to="/admin" className="text-gray-300 hover:text-gray-100" style={{ fontSize: '9px' }}>      </Link>
        </div>
      </div>
    </div>
    
  );
};

export default PreSavePage;