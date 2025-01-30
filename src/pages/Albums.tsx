import React, { useState } from 'react';
import { galleryItems } from '../data/galleryItems';
import { albumImages } from '../data/albumImages';

function Albums() {
  const [selectedAlbum, setSelectedAlbum] = useState<string | null>(null);
  const [password, setPassword] = useState('');
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [isPasswordVerified, setIsPasswordVerified] = useState(false);

  const handleAlbumClick = (albumId: string) => {
    if (albumId === '7' && !isPasswordVerified) {
      setSelectedAlbum(albumId);
    } else {
      setSelectedAlbum(albumId);
    }
  };

  const handleBack = () => {
    setSelectedAlbum(null);
    setPassword('');
    setShowPasswordError(false);
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace 'your-password-here' with the actual password you want to use
    if (password === 'nguyenquocheo') {
      setIsPasswordVerified(true);
      setShowPasswordError(false);
    } else {
      setShowPasswordError(true);
    }
  };

  if (selectedAlbum === '7' && !isPasswordVerified) {
    return (
      <div>
        <button
          onClick={handleBack}
          className="mb-8 px-4 py-2 rounded-lg bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 transition-all duration-300 flex items-center space-x-2"
        >
          <span>←</span>
          <span>Back to Albums</span>
        </button>
        <div className="max-w-md mx-auto bg-black/50 backdrop-blur-xl rounded-lg p-8 border border-blue-900/30">
          <h3 className="text-2xl font-semibold text-blue-300 mb-6">Enter Password</h3>
          <form onSubmit={handlePasswordSubmit}>
            <div className="space-y-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-blue-900/20 border border-blue-900/30 text-blue-200 placeholder-blue-400/50 focus:outline-none focus:border-blue-400/50"
                placeholder="Enter password"
              />
              {showPasswordError && (
                <p className="text-red-400 text-sm">Incorrect password. Please try again.</p>
              )}
              <button
                type="submit"
                className="w-full px-4 py-2 rounded-lg bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 transition-all duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  if (selectedAlbum) {
    const images = albumImages[selectedAlbum as keyof typeof albumImages] || [];

    return (
      <div>
        <button
          onClick={handleBack}
          className="mb-8 px-4 py-2 rounded-lg bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 transition-all duration-300 flex items-center space-x-2"
        >
          <span>←</span>
          <span>Back to Albums</span>
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-black/90 to-black/40 backdrop-blur-xl border border-blue-900/30 hover:border-blue-400/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,136,255,0.3)] transform hover:-translate-y-1"
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <img
                  src={image.url}
                  alt={image.title}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700 ease-out filter brightness-75 contrast-125 group-hover:brightness-100"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-xl font-semibold text-blue-300 tracking-wider">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500">
        Photo Albums
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-black/90 to-black/40 backdrop-blur-xl border border-blue-900/30 hover:border-blue-400/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,136,255,0.3)] transform hover:-translate-y-1 cursor-pointer"
            onClick={() => handleAlbumClick(item.id.toString())}
          >
            <div className="aspect-w-16 aspect-h-9 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-900/10 z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700 ease-out filter brightness-75 contrast-125 group-hover:brightness-100"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute bottom-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-semibold text-blue-300 mb-3 tracking-wider animate-pulse">
                  {item.title}
                </h3>
                <p className="text-blue-200 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {item.description}
                </p>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-blue-400/10 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Albums;