import React, { useEffect } from 'react';
import image1 from '../../Logo/Aik.png';
import image2 from '../../Logo/Almunif.png';
import image3 from '../../Logo/Alwan.png';
import image4 from '../../Logo/Asssila.png';
import image5 from '../../Logo/Atta.png';
import image6 from '../../Logo/Baraka.png';
import image7 from '../../Logo/Deef.png';
import image8 from '../../Logo/Faec.png';
import image9 from '../../Logo/Food.png';
import image10 from '../../Logo/Gears.png';
import image11 from '../../Logo/Golden.png';
import image12 from '../../Logo/Jbally.png';
import image13 from '../../Logo/Jovally.png';
import image14 from '../../Logo/kAYA.png';
import image15 from '../../Logo/Last Made.png';
import image16 from '../../Logo/Mazaady.png';
import image17 from '../../Logo/Nagadi.png';
import image18 from '../../Logo/Order.png';
import image19 from '../../Logo/PPI.png';
import image20 from '../../Logo/Rawafed.png';
import image21 from '../../Logo/Sejel.png';
import image22 from '../../Logo/Solution.png';
import image23 from '../../Logo/Sultan.png';
import image24 from '../../Logo/Telecom.png';
import image25 from '../../Logo/TV.png';
import image26 from '../../Logo/Winds.png';

import { useTranslation } from 'react-i18next';


const Trusted = () => {
  // قائمة الصور
  const images = [
    image1, image2, image3, image4, image5,
    image6, image7, image8, image9, image10,
    image11, image12, image13, image14, image15,
    image16, image17, image18, image19, image20,
    image21, image22, image23, image24, image25,
    image26
  ];
  
  const { t, i18n } = useTranslation();

 


  return (
    <div className="mt-28 text-center bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="container mx-auto px-4">
        {/* العنوان الرئيسي */}
        <h1 className="text-5xl font-bold mb-4 text-gray-900 font-sans">  
        {t('Some_Companies_Weve_Worked_With')} 
</h1>
        <h3 className="text-xl mb-12 text-gray-600 font-light">
        {t('Join_Our_Growing_List_Of_Satisfied_Customers')}
        </h3>

        {/* شريط عرض الصور */}
        <div className="overflow-hidden relative">
          {/* طبقة التدرج للجانب الأيمن */}
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
          {/* طبقة التدرج للجانب الأيسر */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>

          <div className="marquee-container">
  <div className="flex animate-marquee space-x-8 "dir="ltr">
    {/* تكرار الصور بشكل أكبر */}
    {images.concat(images, images, images).map((image, index) => (
      <div key={index} className="flex-shrink-0">
        <img
          src={image}
          alt={`Trusted Image ${index + 1}`}
          className="w-48 h-32 object-cover rounded-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105"
        />
      </div>
    ))}
  </div>
</div>


        </div>

      
      </div>
    </div>
  );
};

export default Trusted;