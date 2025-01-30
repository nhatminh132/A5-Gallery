import React, { useState, useEffect } from 'react';
import TypeWriter from '../components/TypeWriter';

interface BannerSlide {
  image: string;
  title: string;
  description: string;
}

const bannerSlides: BannerSlide[] = [
  {
    image: 'https://plus.unsplash.com/premium_photo-1704667345105-74ca18ddc2d3?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Cô Tạ Uyên Vy',
    description: 'Giáo viên chủ nhiệm đầu tiên của lớp 6A5, người đã đồng hành cùng tập thể lớp trong năm học 2021-2022.'
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1704667345105-74ca18ddc2d3?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Cô Huyền Anh',
    description: 'Giáo viên chủ nhiệm lớp 7A5, đã dẫn dắt lớp trong năm học 2022-2023.'
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1704667345105-74ca18ddc2d3?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Cô Nguyễn Thị Đào',
    description: 'Giáo viên chủ nhiệm của lớp 8A5 trong năm học 2023-2024.'
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1704667345105-74ca18ddc2d3?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Cô Phạm Thị Thanh Thủy',
    description: 'Giáo viên chủ nhiệm của lớp 9A5 trong năm học 2024-2025.'
  }
];

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === bannerSlides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className="text-center mb-16">
        <h1 className="text-6xl font-bold relative inline-block">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 animate-hologram">
            A5 Gallery - Demo
          </span>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-[2px] bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 animate-pulse"></div>
        </h1>
        
        <div className="mt-6 text-xl">
          <TypeWriter 
            words={['6A5', '7A5', '8A5', '9A5']} 
            typingSpeed={200}
            deletingSpeed={150}
            pauseTime={2000}
          />
        </div>
        
        <div className="mt-12 mb-16 relative overflow-hidden rounded-lg">
          <div 
            className="flex transition-transform duration-1000 ease-out"
            style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
          >
            {bannerSlides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0 relative">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full object-cover h-[400px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-left">
                    <h2 className="text-2xl font-bold text-blue-300 mb-2">
                      {slide.title}
                    </h2>
                    <p className="text-blue-200/80 text-sm md:text-base">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {bannerSlides.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentImageIndex === index 
                    ? 'bg-blue-400 w-4' 
                    : 'bg-blue-600/50 hover:bg-blue-400/50'
                }`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;