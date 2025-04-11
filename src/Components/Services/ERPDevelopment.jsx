import React from 'react';
import Footer from '../Footer/Footer';
import Image from '../../assets/erpsolution.webp'; // يمكنك استبدالها بالصورة المناسبة
import Process from '../../assets/ERPP.jpg'; // يمكنك استبدالها بالصورة المناسبة
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ERPDevelopment = ({changeLanguage }) => {
  
  const { t, i18n } = useTranslation();
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
 
      <div className="container mx-auto px-6 py-12 flex-1">
        <div className="bg-white shadow-lg rounded-2xl p-8 max-w-5xl mx-auto text-gray-800">
          <h1 className="text-5xl font-bold text-[#0078B8] mb-8 text-center">{t('ERP Development')}</h1>
          <img src={Image} alt="ERP Development" className="w-full rounded-lg mb-6" />
          
          <p className="text-lg leading-relaxed mb-6">
          {t('ERP Development is an essential')}
          </p>
          
          <h2 className="text-3xl font-semibold text-[#0078B8] mt-10 mb-6">{t('Why Choose ERP Development?')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">{t('Streamlined Business Processes')}</h3>
              <p className="text-gray-600">{t('Unify')}</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">{t('Real-Time Data & Analytics')}</h3>
              <p className="text-gray-600">{t('Access up-to-date')}</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">{t('Improved Collaboration')}</h3>
              <p className="text-gray-600">{t('Enhance cross-departmental')}</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">{t('Cost Reduction')}</h3>
              <p className="text-gray-600">{t('Reduce operational')}</p>
            </div>
          </div>
          
          <h2 className="text-3xl font-semibold text-[#002050] mt-10 mb-6">{t('Industries Benefiting from ERP Development')}</h2>
          <div className="flex flex-wrap gap-4">
            <span className="bg-[#0078B8] text-white px-5 py-2 rounded-lg">{t('Manufacturing')}</span>
            <span className="bg-[#0078B8] text-white px-5 py-2 rounded-lg">{t('Retail')}</span>
            <span className="bg-[#0078B8] text-white px-5 py-2 rounded-lg">{t('Healthcare')}</span>
            <span className="bg-[#0078B8] text-white px-5 py-2 rounded-lg">{t('Finance')}</span>
            <span className="bg-[#0078B8] text-white px-5 py-2 rounded-lg">{t('Education')}</span>
          </div>
          
          <h2 className="text-3xl font-semibold text-[#0078B8] mt-10 mb-6">{t('Benefits of ERP Development')}</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-3">
            <li>{t('Centralized data management and access')}</li>
            <li>{t('Improved reporting and business insights')}</li>
            <li>{t('Enhanced scalability for business growth')}</li>
            <li>{t('Streamlined compliance and regulatory reporting')}</li>
            <li>{t('Increased productivity with automated processes')}</li>
          </ul>
          
          <h2 className="text-3xl font-semibold text-[#0078B8] mt-10 mb-6">{t('ERP Development Process')}</h2>
          <img src={Process} alt="ERP Development Process" className="w-full rounded-lg mb-6" />
          <ol className="list-decimal list-inside text-lg text-gray-700 space-y-3">
            <li>{t('Business needs assessment and requirement gathering')}</li>
            <li>{t('ERP system customization and integration')}</li>
            <li>{t('Data migration and system testing')}</li>
            <li>{t('Training employees and end-users')}</li>
            <li>{t('Deployment and post-launch support')}</li>
            <li>{t('Continuous updates and optimization')}</li>
          </ol>
          
          <h2 className="text-3xl font-semibold text-[#0078B8] mt-10 mb-6">{t('Conclusion')}</h2>
<p className="text-lg leading-relaxed">
  {t('ERP development is an investment')}

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

export default ERPDevelopment;
