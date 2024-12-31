import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const VideoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    // İlk yüklemeyi işaretle
    setIsInitialLoad(false);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed top-0 left-0 right-0 w-full h-[800px] bg-black transform transition-transform duration-700 ease-in-out z-50
        ${isInitialLoad ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
        aria-label="Videoyu Kapat"
      >
        <X size={24} />
      </button>
      <video
        className="w-1200px h-1200px object-cover justify-center"
        autoPlay
        loop
        playsInline
        controls={true}
      >
        <source
          src="../src/videos/AQMCNSIkZr3eTTtGY_Vnz2PPgaVTBS1oCQTlz5rzIqR0Fj30VLm_C-penSZeU5P2U7gEKXkL-UcPHavG6nOZ7iqaTdNZtUElokKSGQI.mp4"
          type="video/mp4"
        />
        Tarayıcınız video elementini desteklemiyor.
      </video>
    </div>
  );
};

export default VideoBanner;