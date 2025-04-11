import React from 'react';
import { FaCogs, FaChartLine, FaRocket } from "react-icons/fa";
import ProcessImg from '../../assets/Process.png';
import { useTranslation } from 'react-i18next';

const Process = ({changeLanguage }) => {
   const { t, i18n } = useTranslation();
  return (
    <div className=" py-16 px-5 bg-gray-50">
      
      {/* Section Title */}
      <div className="text-center mb-16">
        <h1 className="text-2xl font-semibold text-[#0078B8] uppercase tracking-wider">{t('Our_Methodology')}</h1>
        <h1 className="text-5xl font-extrabold text-gray-800 mt-4">
          <span className="text-[#0078B8]">{t('Efficient_Workflow')}</span> 
        </h1>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto text-lg">
        {t('Our_Process')}
        </p>
      </div>

      {/* Animated Line */}
      <div className="flex justify-center items-center mt-8 relative">
        <div className="w-32 h-1 bg-blue-300 relative">
          <div className="absolute top-[-5px] left-0 w-3 h-3 text-[#0078B8] rounded-full animate-moving-circle"></div>
        </div>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mt-16">
        {/* Step 1 */}
        <div className="flex flex-col items-center text-center max-w-sm mx-auto">
          <div className="flex justify-center items-center bg-[#0078B8] h-24 w-24 rounded-full shadow-lg relative">
            <FaCogs className="text-white text-4xl" />
          </div>
          <h2 className="mt-10 font-bold text-xl text-gray-800">{t('Define_Objectives')}</h2>
          <p className="mt-4 text-gray-600">
          {t('Team_Collaboration')}
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center text-center max-w-sm mx-auto">
          <img src={ProcessImg} alt="Process Step" className="w-48 h-auto mb-6" />
          <h2 className="font-bold text-xl text-gray-800">{t('Develop_Strategies')}</h2>
          <p className="mt-4 text-gray-600">
          {t('Our_Team_Collaborates')}
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center text-center max-w-sm mx-auto">
          <div className="flex justify-center items-center bg-[#0078B8] h-24 w-24 rounded-full shadow-lg relative">
            <FaRocket className="text-white text-4xl" />
          </div>
          <h2 className="mt-10 font-bold text-xl text-gray-800">{t('Achieve_Success')}</h2>
          <p className="mt-4 text-gray-600">
          {t('We_Begin')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Process;
