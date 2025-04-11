import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import alhaq from '../../assets/Elhaq.png'
import { Link } from 'react-router-dom';
import fits from '../../../public/logo.png'
import { useTranslation } from 'react-i18next';

const Footer = () => {
  
    const { t } = useTranslation();
  return (
    <footer className="bg-hover text-white py-12 mt-7">
      <div className="container mx-auto px-4">
        {/* أعلى الفوتر: روابط ووسائل التواصل الاجتماعي */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* القسم الأول: معلومات الشركة */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('fits')}</h3>
            <p className="text-gray-400">
            {t('fits explanation')}
            </p>
            <div className='flex mt-3 '>

            <img src={alhaq} alt="" className='mt-5 w-40'  />
            <img src={fits} alt="" className='mt-5 w-40 mx-3'  />
            </div>
          </div>

          {/* القسم الثاني: روابط سريعة */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('Quick Links')}</h3>
            <ul className="space-y-2">
             <Link to="/"> <li><a  className="text-gray-400 hover:text-white transition duration-300"> {t('Home')}</a></li></Link>
             <Link to="/about">   <li><a  className="text-gray-400 hover:text-white transition duration-300"> {t('About Us')}</a></li></Link>
             <Link to="/successstory">  <li><a  className="text-gray-400 hover:text-white transition duration-300"> {t('Successful Story')}</a></li></Link>
             <Link to="/contact">   <li><a  className="text-gray-400 hover:text-white transition duration-300"> {t('Contact Us')}</a></li></Link>
            </ul>
          </div>

          {/* القسم الثالث: معلومات الاتصال */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('Contact')}</h3>
            <div className="text-gray-400 space-y-4">
              {/* السعودية */}
              <div>
                <h4 className="font-semibold text-white">{t('Saudi Arabia')},{t('HQ')}</h4>
                <p>{t('Phone')}: +966 56 811 1156​</p>
                <p>{t('Address')}</p>
              </div>
              {/* الأردن */}
              <div>
                <h4 className="font-semibold text-white">{t('Jordan')}</h4>
                <p>{t('Phone')}: +962 6-523 3885​​</p>
                <p>{t('Addresst')}</p>
              </div>
            </div>
          </div>

          {/* القسم الرابع: وسائل التواصل الاجتماعي */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('Follow')}</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/FITSKSAERP?mibextid=wwXIfr&mibextid=wwXIfr" target ='_blank' className="text-gray-400 hover:text-blue-500 transition duration-300 mx-3">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.linkedin.com/company/fits-soultions/" target='_blank' className="text-gray-400 hover:text-blue-500 transition duration-300 ">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

    
   



        {/* أسفل الفوتر: حقوق النشر */}
        <div className="border-t border-white pt-8 text-center">
          <p className="text-white">
            &copy; {new Date().getFullYear()} {t('final')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
