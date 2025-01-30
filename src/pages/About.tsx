import React from 'react';

function About() {
  return (
    <div className="text-blue-200">
      <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500">
        About A5 Gallery
      </h2>
      <div className="bg-black/50 backdrop-blur-xl rounded-lg p-8 border border-blue-900/30">
        <p className="text-blue-300 mb-4">
          A5 Gallery là thư viện lưu trữ ảnh của A5 từ năm 2021 - 2025
        </p>
        <p className="text-blue-300">
           <span className="font-bold rgb-led-text">LPNM</span>
        </p>
      </div>
    </div>
  );
}

export default About;