import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const MostQuestions = ({ changeLanguage }) => {
  const [openAnswer, setOpenAnswer] = useState(null);
  const { t, i18n } = useTranslation();
  
 
  const questions = [

    { "id": 1, "question": "What is Epicor ERP?", "answer": "Epicor ERP is an enterprise resource planning (ERP) system designed to help businesses manage operations such as manufacturing, finance, supply chain, and customer management." },
    { "id": 2, "question": "What are the key features of Epicor ERP?", "answer": "Customization flexibility, strong support for manufacturing, seamless integration with other systems, advanced reporting and analytics, and user-friendly interface." },
    { "id": 3, "question": "Is Epicor ERP suitable for small and medium-sized businesses?", "answer": "Yes, Epicor provides flexible solutions that fit businesses of all sizes, with scalability options based on business needs." },
    { "id": 4, "question": "What languages and databases does Epicor ERP support?", "answer": "It primarily supports SQL Server as the database and uses C# and .NET for development." },
    { "id": 5, "question": "Can Epicor ERP integrate with other systems?", "answer": "Yes, it can integrate with other systems via APIs or integration tools like Epicor Service Connect." },
    { "id": 6, "question": "What is Microsoft D365 Finance and Operations?", "answer": "It is an ERP system from Microsoft that helps manage financial and operational processes, targeting large enterprises." },
    { "id": 7, "question": "What is the difference between D365 Finance and D365 Supply Chain Management?", "answer": "D365 Finance focuses on accounting and financial management, while D365 Supply Chain Management focuses on production and supply chain processes." },
    { "id": 8, "question": "Can Microsoft D365 Finance and Operations be customized?", "answer": "Yes, it can be customized using Power Apps, Power Automate, and its development language (X++)." },
    { "id": 9, "question": "What hosting options are available for D365 Finance and Operations?", "answer": "It is cloud-based via Azure, with integration options for on-premise systems." },
    { "id": 10, "question": "Does Microsoft D365 Finance and Operations support financial compliance?", "answer": "Yes, it supports compliance with international accounting standards and various tax regulations." },
    { "id": 11, "question": "What is the difference between Microsoft D365 Business Central and D365 Finance and Operations?", "answer": "Business Central is designed for small and medium-sized businesses, while Finance and Operations is meant for large and complex enterprises." },
    { "id": 12, "question": "What are the key features of Business Central?", "answer": "Financial management, inventory and supply chain management, sales and purchasing, Microsoft 365 integration, and built-in analytics." },
    { "id": 13, "question": "Can Business Central integrate with external applications?", "answer": "Yes, it supports integration with Power BI, Power Apps, and Dynamics 365 CRM." },
    { "id": 14, "question": "Does Business Central support customization?", "answer": "Yes, it can be customized using Visual Studio Code and AL Language." },
    { "id": 15, "question": "What are the hosting options for Business Central?", "answer": "It can be hosted on the cloud via Azure or deployed on-premise based on business needs." },
    { "id": 16, "question": "What is ERP development?", "answer": "It involves designing, developing, customizing, and implementing ERP solutions to meet business requirements." },
    { "id": 17, "question": "What skills are needed for ERP development?", "answer": "Knowledge of databases (SQL), programming (C#, .NET, X++, JavaScript), data analysis, and business processes." },
    { "id": 18, "question": "What are the best programming languages for ERP development?", "answer": "C#, .NET, Java, Python, and customization languages like AL for Business Central." },
    { "id": 19, "question": "Can an open-source ERP be developed?", "answer": "Yes, open-source solutions like Odoo and ERPNext can be customized to meet business needs." },
    { "id": 20, "question": "What are the biggest challenges in ERP development?", "answer": "Business process complexity, data integration, security, and user-friendliness." },
    { "id": 21, "question": "What is the role of an ERP consultant?", "answer": "Analyzing business needs, selecting the right system, overseeing implementation, and training employees." },
    { "id": 22, "question": "What are the key stages of ERP implementation?", "answer": "Planning, requirements analysis, configuration and customization, testing, training, and go-live." },
    { "id": 23, "question": "How long does it take to implement an ERP system?", "answer": "It depends on the company’s size and complexity but typically takes several months to a year." },
    { "id": 24, "question": "Can data be migrated from an old system to a new ERP?", "answer": "Yes, data migration is done using specialized tools to ensure accuracy and integrity." },
    { "id": 25, "question": "What are the main challenges in ERP implementation?", "answer": "Resistance to change, high implementation costs, system integration, and adequate training for employees." },
    { "id": 26, "question": "Why do pharmaceutical companies need ERP systems?", "answer": "To ensure regulatory compliance, track supply chain operations, optimize production, and manage quality control." },
    { "id": 27, "question": "What features should an ERP system have for the pharmaceutical industry?", "answer": "Batch tracking, supply chain management, compliance with quality standards (e.g., FDA, GMP), and detailed reporting." },
    { "id": 28, "question": "Are there ERP systems specialized for the pharmaceutical sector?", "answer": "Yes, solutions like SAP for Pharmaceuticals, Epicor Pharma Solutions, and Microsoft D365 cater to the industry’s needs." },
    { "id": 29, "question": "How does ERP help in regulatory compliance for pharmaceuticals?", "answer": "By enabling automatic tracking of raw materials, managing quality control, and maintaining accurate production records." },
    { "id": 30, "question": "Can an ERP system integrate with laboratory systems in the pharmaceutical industry?", "answer": "Yes, it can be integrated with Laboratory Information Management Systems (LIMS) to ensure accurate quality analysis." }

];

  const toggleAnswer = (id) => {
    setOpenAnswer(openAnswer === id ? null : id);
  };

  const isArabic = i18n.language === 'ar'; // تحقق من اللغة الحالية

  return (
    <div className="px-6 w-full h-full my-16 ">
      <div className="max-w-4xl mx-auto">
        <h1 className={`text-3xl font-extrabold ${isArabic ? 'text-right' : 'text-left'} text-[#0078B8]`}>
          Frequently Asked Questions
        </h1>
        <h2 className={`text-xl ${isArabic ? 'text-right' : 'text-left'} text-gray-700 mt-2`}>
          Answers to your most common questions
        </h2>

        <div className="mt-6 space-y-4">
          {questions.map((question) => (
            <div key={question.id} className="border-b pb-4 transition-all">
              <button
                className={`flex items-center justify-between w-full text-lg font-semibold ${isArabic ? 'text-right' : 'text-left'} text-[#0078B8] hover:text-hover focus:outline-none`}
                onClick={() => toggleAnswer(question.id)}
              >
                <span>{t(question.question)}</span>
                <span className="text-2xl">
                  {openAnswer === question.id ? '-' : '+'}
                </span>
              </button>
              {openAnswer === question.id && (
                <div className={`mt-2 text-gray-800 transition-all ${isArabic ? 'text-right' : 'text-left'}`}>
                  {t(question.answer)}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
  <h1 className="text-3xl font-semibold text-gray-900">
    {t("Still have questions")}
  </h1>
  <p className="text-lg text-gray-500 mt-2">
    {t("Can’t find the answer you’re looking for? Please chat to our friendly team.")}
  </p>
  <Link to={'/Contact'}>
    <button className="bg-[#0078B8] text-white px-8 py-4 mt-4 rounded-full hover:bg-hover focus:outline-none transition-colors duration-300">
      {t("Get In Touch")}
    </button>
  </Link>
</div>
      </div>
    </div>
  );
};

export default MostQuestions;
