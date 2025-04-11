import React, { useState } from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import { FaCheckCircle } from 'react-icons/fa';
import image from '../../assets/Deal.jpg';
import { Link } from 'react-router-dom';
import PPI from '../../Logo/PPI.png'
import pdf from '../../assets/Epicor-ERP-Pharma-Group-CS-ENS.pdf'
import { useTranslation } from 'react-i18next';

const SuccessStory = () => {
  const { t } = useTranslation();
 

  return (
    <div className="min-h-screen flex flex-col">
  
      <div className="container mx-auto px-6 py-12 flex-1 text-white">
        <div className="bg-white text-gray-800 shadow-2xl rounded-lg p-10 md:p-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-[#0078B8]">
           {t('Client Success Stories')}
          </h1>
          <img src={image} alt="" className="w-full h-[80vh] " />
          
          {/* النص على شكل نقاط */}
          <div className="my-10">
            <ul className="list-disc pl-5 text-lg md:text-xl leading-relaxed text-gray-700">
              <li>{t('Impact of modern technologies in improving operational efficiency')}</li>
              <li>{t('Tailored services')}</li>
              <li>{t('Achieving measurable')}
              </li>
              <li>{t('Industries transformed')}
              </li>
            </ul>
          </div>

          {/* Success Story Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#f1f1f1] p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <img src={PPI} className="w-28 mx-3 " />
                <h3 className="text-xl font-semibold">{t('Pharma Pharmaceutical Industries')}
                </h3>
              </div>
              <p className="text-gray-700 mb-4">
              {t('We developed')}


              </p>
              <a 
  href={pdf} 
  target="_blank" 
>
  <button className="bg-[#0078B8] text-white px-4 py-2 rounded-lg hover:bg-[#005f7f] transition-all duration-200">
  {t('Learn More')}

  </button>
</a>

            </div>

          

           
          </div>

          {/* عرض النص المتغير */}
          {/* {storyText && (
            <div className="mt-8 p-6 bg-[#f9f9f9] rounded-lg shadow-md text-gray-800">
              <h2 className="text-2xl font-semibold text-[#0078B8] mb-4">Details:</h2>
              <p>{storyText}</p>
            </div>
          )} */}

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-semibold text-[#0078B8] mb-4">{t('Start Your Success Story with Us')}
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
            {t('Let us')}

            </p>
            <Link to={'/Contact'}>
              <button className="bg-[#0078B8] text-white px-8 py-3 text-lg rounded-full hover:bg-[#005f7f] transition-all duration-200">
              {t('Get Started')}

              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SuccessStory;
