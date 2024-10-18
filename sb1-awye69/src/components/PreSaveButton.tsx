import React from 'react';

interface PreSaveButtonProps {
  platform: string;
  action: string;
  logo: string;
  link: string;
}

const PreSaveButton: React.FC<PreSaveButtonProps> = ({ platform, action, logo, link }) => {
  const logoClass = "h-7 w-20 object-contain"; // Reduced size for logos

  return (
    <div className="flex items-center justify-between bg-gray-100 hover:bg-gray-200 transition-colors duration-200 rounded-none p-3 h-16 w-full cursor-default border-b border-gray-300 last:border-b-0">
      <div className="flex items-center justify-start flex-grow"> {/* Changed justify-center to justify-start */}
        <img src={logo} alt={`${platform} logo`} className={logoClass} />
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white hover:bg-yellow-400 text-black py-1 px-3 rounded transition-colors duration-200 whitespace-nowrap w-24 text-center flex items-center justify-center text-xs font-normal"
      >
        {action}
      </a>
    </div>
  );
};

export default PreSaveButton;