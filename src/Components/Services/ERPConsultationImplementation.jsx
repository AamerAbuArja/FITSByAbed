import React from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Image from '../../assets/shacke.jpg';
import Process from '../../assets/ERP.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ERPConsultationImplementation = ({changeLanguage }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
   
      <div className="container mx-auto px-6 py-12 flex-1">
        <div className="bg-white shadow-lg rounded-2xl p-8 max-w-5xl mx-auto text-gray-800">
          <h1 className="text-5xl font-bold text-[#0078B8] mb-8 text-center">{t('ERP Consultation & Implementation: A Complete Guide')}</h1>
          <img src={Image} alt="ERP Consultation and Implementation" className="w-full rounded-lg mb-6" />
          
          <p className="text-lg leading-relaxed mb-6">
            {t('ERP consultation')}
          </p>
          
          <h2 className="text-3xl font-semibold text-[#0078B8]  mt-10 mb-6">{t('Why Choose ERP Consultation?')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">{t('Expert Guidance')}</h3>
              <p className="text-gray-600">{t('Experienced professionals help you select and implement the best ERP solution.')}</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">{t('Customized Solutions')}</h3>
              <p className="text-gray-600">{t('ERP systems tailored to your business requirements and industry standards.')}</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">{t('Seamless Integration')}</h3>
              <p className="text-gray-600">{t('Ensure smooth integration with existing tools and workflows.')}</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">{t('Long-Term Support')}</h3>
              <p className="text-gray-600">{t('Ongoing maintenance and optimization for sustained success.')}</p>
            </div>
          </div>
          
          <h2 className="text-3xl font-semibold text-[#0078B8]  mt-10 mb-6">{t('Industries Benefiting from ERP Consultation')}</h2>
          <div className="flex flex-wrap gap-4">
            <span className="bg-[#0078B8] text-white px-5 py-2 rounded-lg">{t('Manufacturing')}</span>
            <span className="bg-[#0078B8] text-white px-5 py-2 rounded-lg">{t('Healthcare')}</span>
            <span className="bg-[#0078B8] text-white px-5 py-2 rounded-lg">{t('Retail')}</span>
            <span className="bg-[#0078B8] text-white px-5 py-2 rounded-lg">{t('Finance')}</span>
            <span className="bg-[#0078B8] text-white px-5 py-2 rounded-lg">{t('Logistics')}</span>
          </div>
          
          <h2 className="text-3xl font-semibold text-[#0078B8]  mt-10 mb-6">{t('Benefits of ERP Consultation')}</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-3">
            <li>{t('Enhanced business process efficiency')}</li>
            <li>{t('Cost-effective ERP implementation')}</li>
            <li>{t('Improved data accuracy and reporting')}</li>
            <li>{t('Better decision-making with real-time insights')}</li>
            <li>{t('Seamless cross-department collaboration')}</li>
          </ul>
          
          <h2 className="text-3xl font-semibold text-[#0078B8]  mt-10 mb-6">{t('ERP Implementation Process')}</h2>
          <img src={Process} alt="ERP Implementation Process" className="w-full rounded-lg mb-6" />
          <ol className="list-decimal list-inside text-lg text-gray-700 space-y-3">
            <li>{t('Business needs assessment')}</li>
            <li>{t('ERP selection and customization')}</li>
            <li>{t('System configuration and data migration')}</li>
            <li>{t('Testing and validation')}</li>
            <li>{t('Employee training and deployment')}</li>
            <li>{t('Post-implementation support')}</li>
          </ol>
          
          <h2 className="text-3xl font-semibold text-[#0078B8]  mt-10 mb-6">{t('Conclusion')}</h2>
          <p className="text-lg leading-relaxed">
           {t('ERP consultation and implementation')}
          </p>
         <div className='mt-5'>
           <span className=''>{t('If you want more information')}</span> <Link to={'/contact'} ><button className="ml-2 px-4 py-2 bg-[#0078B8] text-white font-semibold rounded-lg hover:bg-[#005F8A] transition duration-300">
            {t('Get In Touch')}
          </button>
          </Link>
           </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ERPConsultationImplementation;