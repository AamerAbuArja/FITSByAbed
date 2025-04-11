import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
const apiUrl = import.meta.env.VITE_REACT_APP_BACKEND_BASEURL;
import { useTranslation } from 'react-i18next';

const Form = () => {
  // تحديد حالة البيانات
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);  // حالة تحميل البيانات
 

     //هاد الكود بياخد البيانات مع ملف السيرة الداتية و ببعتها ايميل 
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

  // // دالة لإرسال البيانات إلى الـ Backend باستخدام Axios
  // const handleSubmit = async (e) => {
  //   e.preventDefault();  // منع إعادة تحميل الصفحة عند إرسال النموذج
  //   setLoading(true);  // تفعيل حالة التحميل

  //   try {
  //     const response = await axios.post(`${apiUrl}/submit-form`, formData);

  //     if (response.status === 200) {
       
  //       setFormData({
  //         firstName: '',
  //         lastName: '',
  //         email: '',
  //         phone: '',
  //         message: '',
  //       });
  //     }

  //     toast.success("The request has been sent successfully.");
      
  //   } catch (error) {
    
  //     toast.error(error.response.data.message);
  //   } finally {
  //     setLoading(false);  // إيقاف حالة التحميل
  //   }
  // };

  const { t } = useTranslation();

  return (
    <div className="my-16 px-6">
      <h3 className="text-center text-[#0078B8] font-semibold text-lg uppercase">{t('Contact Us')}</h3>
      <h1 className="text-center text-3xl font-bold mt-2 text-gray-800">{t('Get In Touch')}</h1>
      <h2 className="text-center text-lg text-gray-500 mt-2 mb-8">{t('fill out')}
      </h2>

      <div className="max-w-lg mx-auto p-8 bg-white shadow-xl rounded-lg">
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="firstName"
              // value={formData.firstName}
              // onChange={handleInputChange}
              placeholder={t('First Name')}
              className="border border-gray-300 p-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0078B8] transition-all duration-300"
              required
            />
            <input
              type="text"
              name="lastName"
              // value={formData.lastName}
              // onChange={handleInputChange}
              placeholder={t('Last Name')}
              className="border border-gray-300 p-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0078B8] transition-all duration-300"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            // value={formData.email}
            // onChange={handleInputChange}
            placeholder={t('Email')}
            className="border border-gray-300 p-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0078B8] transition-all duration-300"
            required
          />
          <input
            type="tel"
            name="phone"
            // value={formData.phone}
            // onChange={handleInputChange}
            placeholder={t('Phone Number')}
            className="border border-gray-300 p-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0078B8] transition-all duration-300"
          />
          <textarea
            name="message"
            // value={formData.message}
            // onChange={handleInputChange}
            placeholder={t('Your Message')}
            className="border border-gray-300 p-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0078B8] transition-all duration-300 h-40"
            required
          />
        
          <button
            type="submit"
            // onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-[#0078B8] text-white py-3 rounded-lg hover:bg-[#005f8f] transition ease-in-out duration-300"
          >
          {loading ? t('Sending') : t('Submit')}
          </button>
   
        </div>
      </div>
    </div>
  );
};

export default Form;
