import React, { useState, useEffect } from 'react';
import { ImageStudio } from './components/ImageStudio';
import { ImageLightbox } from './components/ImageLightbox';
import { GeneratedImage } from './types';
import { translations } from './translations';
import { AnimatedKeywords } from './components/AnimatedKeywords';
import { MovingTips } from './components/MovingTips';

const App: React.FC = () => {
  const [lightboxImage, setLightboxImage] = useState<GeneratedImage | null>(null);
  const [backgroundUrl, setBackgroundUrl] = useState<string | null>(null);
  const [lang, setLang] = useState<'en' | 'ar'>('en');
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const handleOpenLightbox = (image: GeneratedImage) => {
    setLightboxImage(image);
  };

  const handleCloseLightbox = () => {
    setLightboxImage(null);
  };

  const handleGenerationSuccess = (images: GeneratedImage[]) => {
    if (images.length > 0) {
      setBackgroundUrl(images[0].url);
    }
  };

  const toggleLanguage = () => {
    setLang(prevLang => prevLang === 'en' ? 'ar' : 'en');
  };

  return (
    <div className="min-h-screen font-sans text-slate-300 bg-slate-900 flex flex-col overflow-y-auto">
      {/* Background Layers */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {backgroundUrl && (
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-1000 ease-in-out"
            style={{ backgroundImage: `url(${backgroundUrl})`, opacity: 0.15 }}
          />
        )}
        <div className="absolute inset-0 w-full h-full bg-slate-900/60 backdrop-blur-2xl" />
      </div>

      <div className="absolute top-4 end-4 z-20">
        <button
          onClick={toggleLanguage}
          className="px-4 py-2 text-sm font-medium text-slate-200 bg-slate-800/70 border border-slate-700 rounded-md hover:bg-slate-700/90 transition"
        >
          {t.language_toggle}
        </button>
      </div>

      {/* Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-start p-4 sm:p-6 lg:p-8 w-full">
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center text-center">
          
          <header className="my-8">
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-100">
              {t.logo_part1}<span className="text-indigo-500">{t.logo_part2}</span>
            </h1>
            <p className="text-slate-400 text-lg mt-2">{t.slogan}</p>
          </header>
          
          <AnimatedKeywords />
          <MovingTips tips={t.moving_tips} />

          <ImageStudio
            onImageSelect={handleOpenLightbox}
            onGenerationSuccess={handleGenerationSuccess}
            translations={t}
          />
        </div>
      </main>
      
      {lightboxImage && (
        <ImageLightbox
          image={lightboxImage}
          onClose={handleCloseLightbox}
        />
      )}
    </div>
  );
};

export default App;