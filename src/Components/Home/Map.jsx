import React from 'react';
import { useTranslation } from 'react-i18next';


const Map = ({changeLanguage }) => {
  const { t, i18n } = useTranslation();
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#0078B8]">{t('More_Info')}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
        {/* Jordan Contact Info */}
        <div className="p-6 border rounded-lg shadow-lg bg-white">
          <h3 className="text-xl font-semibold mb-2">{t('Jordan')}</h3>
          <p className="text-gray-700">{t('Phone')}: +962 6-523 3885</p>
          <p className="text-gray-700">{t('Addresst')}</p>
        </div>

        {/* Saudi Arabia Contact Info */}
        <div className="p-6 border rounded-lg shadow-lg bg-white">
          <h3 className="text-xl font-semibold mb-2">Saudi Arabia</h3>
          <p className="text-gray-700">{t('Phone')}: +966 56 811 1156</p>
          <p className="text-gray-700">{t('Address')}</p>
        </div>
      </div>

      {/* Map Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
        {/* Amman Map */}
        <iframe 
          className="w-full h-96 rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7725.902980248742!2d35.902961!3d31.957036!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5f9cf5d0e7bf%3A0x2c5c3b4f4f4c4e4b!2z2KfZhNin2YLYs9mK2Kkg2KfZhNmB2YrZiNio2YQ!5e0!3m2!1sar!2sjo!4v1710269411178"
          allowFullScreen=""
          loading="lazy">
        </iframe>
      
        {/* Riyadh Map */}
        <iframe 
          className="w-full h-96 rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7224.436708909756!2d46.676388!3d24.728529!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f038b8b8b8b8b%3A0x4d4d4d4d4d4d4d4d!2z2KfZhNin2YLYs9mK2Kkg2KfZhNmB2YrZiNio2YQ!5e0!3m2!1sar!2ssa!4v1710269411178"
          allowFullScreen=""
          loading="lazy">
        </iframe>
      </div>
    </section>
  );
};

export default Map;
