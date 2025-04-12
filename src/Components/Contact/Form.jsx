import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

const Form = () => {

  const [loading, setLoading] = useState(false);  // حالة تحميل البيانات

  const { t } = useTranslation();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const first = form.querySelector('input[name="firstName"]');
    const last = form.querySelector('input[name="lastName"]');
    const email = form.querySelector('input[name="email"]');
    const phone = form.querySelector('input[name="phone"]');
    const message = form.querySelector('textarea[name="message"]');
    const payload = {
      type: "Contact",
      first,
      last,
      email,
      phone,
      message
    };

    try {
      const response = await fetch('/api/EmailsForFITS', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      console.log('Email Sent:', data);
    } catch (err) {
      console.error('Error:', err);
    }
  };


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
            onClick={handleSubmit}
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
