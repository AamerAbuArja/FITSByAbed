import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';



const CareerPage = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    file: null, // حقل رفع السيرة الذاتية
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const first = form.querySelector('input[name="firstName"]');
    const last = form.querySelector('input[name="lastName"]');
    const email = form.querySelector('input[name="email"]');
    const role = form.querySelector('input[name="Position"]');
    const phone = form.querySelector('input[name="phone"]');
    const message = form.querySelector('textarea[name="message"]');
    const fileInput = form.querySelector('input[type="file"]');
    const file = fileInput.files[0];

    const reader = new FileReader();

    reader.onloadend = async () => {
      const base64 = reader.result.split(',')[1]; // remove 'data:*/*;base64,' prefix

      const payload = {
        type: "Career",
        first,
        last,
        email,
        role,
        phone,
        message,
        ContentBytes: base64,
        ContentType: file.type,
        Name: file.name
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

    if (file) {
      reader.readAsDataURL(file); // triggers onloadend
    } else {
      alert("Please select a file.");
    }
  };

  const { t } = useTranslation();

  return (
    <div className="my-16 px-6">
      <h3 className="text-center text-[#0078B8] font-semibold text-lg uppercase">{t('Join_Our_Team')}</h3>
      <h1 className="text-center text-3xl font-bold mt-2 text-gray-800">{t('Apply_for_a_Job')}</h1>
      <h2 className="text-center text-lg text-gray-500 mt-2 mb-8">{t('Fill_out_the_form_to_apply_for_a_position_with_us')}</h2>

      <div className="max-w-lg mx-auto p-8 bg-white shadow-xl rounded-lg">
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder={t('First Name')}
              className="border border-gray-300 p-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0078B8] transition-all duration-300"
              required
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
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
            placeholder={t('Phone')}
            className="border border-gray-300 p-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0078B8] transition-all duration-300"
          />
          <input
            type="Position"
            name="Position"
            // value={formData.phone}
            // onChange={handleInputChange}
            placeholder="Position"
            className="border border-gray-300 p-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0078B8] transition-all duration-300"
          />
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
            <label htmlFor="file" className="text-gray-700 font-medium">Upload your CV </label>
          </div>
          <input
            type="file"
            name="file"
            id="file"
            className="border border-gray-300 p-4 w-full rounded-lg bg-gray-100 focus:outline-none transition-all duration-300"
            required
          />

          <textarea
            name="message"
            // value={formData.message}
            // onChange={handleInputChange}
            placeholder={t('Why_do_you_want_to_join_us')}
            className="border border-gray-300 p-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0078B8] transition-all duration-300 h-40"
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

export default CareerPage;
