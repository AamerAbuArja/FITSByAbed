import React from 'react';
import image from '../../assets/choose-1.jpg';
import { useTranslation } from 'react-i18next';


const Choose = ({changeLanguage }) => {
  const { t, i18n } = useTranslation();
  return (
    <section className="choose flex flex-col  lg:flex-row items-center gap-12 mt-28 w-11/12 mx-auto">
      {/* Image Section */}
      <div className="choose-1 w-full lg:w-5/12">
        <img
          src={image}
          alt="Why Choose Us"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Text and Buttons Section */}
      <div className="choose-2 w-full lg:w-7/12 text-center lg:text-left">
        <h3 className="text-[#0078B8] text-lg font-bold uppercase tracking-wide">
        {t('Why_Choose_Us')}
        </h3>
        <h1 className="text-2xl md:text-4xl font-bold mt-4 leading-snug">
        {t('Unlock_Your_Business_Potential_with_FITS')}
        </h1>
        <p className="text-gray-600 mt-4 text-base md:text-lg leading-relaxed">
        {t('Why_Choose_Usp')}
        </p>

        {/* Buttons */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
         'Speed_of_Operation',
    'High_Quality',
    'Customizability',
    'Easy_Integration',
    'Excellent_Support',
    'Powerful_Analytics',
          ].map((text, index) => (
            <button
              key={index}
              className="hover-effect w-full text-left p-4 bg-white border-l-4 border-[#0078B8] shadow-md transition-all duration-300 ease-in-out hover:text-white hover:bg-[#0078B8] rounded-lg"
            >
            
              {t(text)}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Choose;