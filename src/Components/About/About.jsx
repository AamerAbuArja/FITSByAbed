import React from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import { FaUsers, FaChartLine, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const About = () => {

  const { t } = useTranslation();
  return (
    <div className=" min-h-screen flex flex-col text-white">
     
      <div className="container mx-auto px-8 py-20 flex-1">
        {/* About Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[#0078B8]">{t('About Us')}</h1>
          <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-black">
          {t('Title explanation')}
          </p>
        </div>

        {/* Our Vision Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div className="bg-[#1f2937] p-8 rounded-xl shadow-xl text-center hover:bg-[#2d3748] transition-all duration-300">
            <FaChartLine className="text-4xl mb-4 m-auto text-[#0078B8]" />
            <h2 className="text-2xl font-semibold mb-4">{t('Our Vision')}</h2>
            <p className="text-gray-300">
           {t( 'Vision explanation')}
            </p>
          </div>
          <div className="bg-[#1f2937] p-8 rounded-xl shadow-xl text-center hover:bg-[#2d3748] transition-all duration-300">
            <FaUsers className="text-4xl mb-4 m-auto text-[#0078B8]" />
            <h2 className="text-2xl font-semibold mb-4">{t('Our Team')}</h2>
            <p className="text-gray-300">
             {t('Team explanation')}
            </p>
          </div>
          <div className="bg-[#1f2937] p-8 rounded-xl shadow-xl text-center hover:bg-[#2d3748] transition-all duration-300">
            <FaCog className="text-4xl mb-4 m-auto text-[#0078B8]" />
            <h2 className="text-2xl font-semibold mb-4">{t('Our Approach')}</h2>
            <p className="text-gray-300">
              {t('Approach explanation')}
            </p>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-4 text-[#0078B8]">{t('Our Story')}</h2>
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-black">
         {t('Story explanation')}
          </p>
        </div>

        

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-semibold mb-6 text-[#0078B8]">{t('Join Us')}</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-black">
          {t('Join Us explanation')}
          </p>
          <Link to={'/Contact'}>
          <button className="bg-[#0078B8] text-white px-8 py-3 rounded-full text-lg hover:bg-[#286280] transition-all duration-300">
           {t('Get In Touch')}
          </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
