import React from 'react';

function Upload() {
  return (
    <div className="text-blue-200">
      <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500">
        Upload Photos
      </h2>
      <div className="bg-black/50 backdrop-blur-xl rounded-lg p-8 border border-blue-900/30">
        <div className="flex justify-center">
          <a
            href="https://forms.gle/nwNoZ536hmuj37n88"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 hover:scale-110 transform transition-all duration-300 shadow-[0_0_20px_rgba(0,136,255,0.5)] hover:shadow-[0_0_30px_rgba(0,136,255,0.8)]"
          >
            <span className="text-black text-2xl">+</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Upload;