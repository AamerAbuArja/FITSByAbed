import React from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Image from '../../assets/Image 1 .jpeg';
import Process from '../../assets/Business-Central-Circle-of-Products.jpg';
import Central from '../../assets/Central.png';
import { Link } from 'react-router-dom';

const D365BusinessCentral = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
   
      <div className="container mx-auto px-6 py-12 flex-1">
        <div className="bg-white shadow-lg rounded-2xl p-8 max-w-5xl mx-auto text-gray-800">
          <h1 className="text-5xl font-bold text-[#0078B8] mb-8 text-center">Microsoft Dynamics 365 Business Central: A Unified Business Solution</h1>
          <img src={Central} alt="Microsoft D365 Business Central" className="w-full rounded-lg mb-6" />
          
          <p className="text-lg leading-relaxed mb-6">
            Microsoft Dynamics 365 Business Central is an all-in-one ERP solution designed to streamline business processes, improve operational efficiency, and provide better decision-making capabilities for small and medium-sized businesses. It offers real-time financial insights, supply chain management, and an integrated approach to managing customer relationships, all within one platform.
          </p>
          
          <h2 className="text-3xl font-semibold text-[#0078B8]  mt-10 mb-6">Why Choose Business Central?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Comprehensive Financial Management</h3>
              <p className="text-gray-600">Gain deep insights into financial operations, enabling data-driven decisions and improved forecasting.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Seamless Integration</h3>
              <p className="text-gray-600">Integrates effortlessly with Microsoft 365, Azure, and other cloud services for enhanced connectivity.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Scalability & Flexibility</h3>
              <p className="text-gray-600">Easily scale and adapt to your business needs as your operations grow, with full cloud support.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">AI-Powered Insights</h3>
              <p className="text-gray-600">Utilize advanced analytics and AI to automate decision-making processes and optimize operations.</p>
            </div>
          </div>
          
          <h2 className="text-3xl font-semibold text-[#0078B8]  mt-10 mb-6">Industries Benefiting from Business Central</h2>
          <div className="flex flex-wrap gap-4">
            <span className="bg-[#0078B8] text-white px-5 py-2 rounded-lg">Retail</span>
            <span className="bg-[#0078B8] text-white px-5 py-2 rounded-lg">Manufacturing</span>
            <span className="bg-[#0078B8] text-white px-5 py-2 rounded-lg">Wholesale Distribution</span>
            <span className="bg-[#0078B8] text-white px-5 py-2 rounded-lg">Professional Services</span>
            <span className="bg-[#0078B8] text-white px-5 py-2 rounded-lg">Finance</span>
          </div>
          
          <h2 className="text-3xl font-semibold text-[#0078B8]  mt-10 mb-6">Key Benefits of Using Business Central</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-3">
            <li>Comprehensive financial reporting and real-time analytics</li>
            <li>Automated workflows to enhance operational efficiency</li>
            <li>Unified view of inventory, sales, and customer data</li>
            <li>Improved collaboration and productivity with cloud-based tools</li>
            <li>Enhanced customer satisfaction through personalized service offerings</li>
          </ul>
          
          <h2 className="text-3xl font-semibold text-[#0078B8]  mt-10 mb-6">Implementation Process</h2>
          <img src={Process} alt="Implementation Process" className="w-full rounded-lg mb-6" />
          <iframe
  width="100%"
  height="400"
  src="https://www.youtube.com/watch?v=G2EcHJNtkUM&t=83s"
  title="Implementation Process Video"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  className="rounded-lg"
></iframe>
          <ol className="list-decimal list-inside text-lg text-gray-700 space-y-3">
            <li>Business needs assessment and goal alignment</li>
            <li>Configuration and customization of the platform</li>
            <li>Data migration and system integration</li>
            <li>Testing, training, and quality assurance</li>
            <li>Go-live deployment and continuous support</li>
            <li>Post-implementation monitoring and optimization</li>
          </ol>
          
          <h2 className="text-3xl font-semibold text-[#0078B8]  mt-10 mb-6">Conclusion</h2>
          <p className="text-lg leading-relaxed">
            Microsoft Dynamics 365 Business Central offers a robust ERP solution that helps small and medium-sized businesses achieve operational efficiency, real-time visibility, and smarter decision-making through its integrated capabilities and AI-driven insights. With a user-friendly interface and cloud scalability, it empowers businesses to streamline their operations and unlock new growth opportunities.
          </p>
         <div className='mt-5'>
           <span className=''>If you want more information</span> <Link to={'/contact'} ><button className="ml-2 px-4 py-2 bg-[#0078B8] text-white font-semibold rounded-lg hover:bg-[#005F8A] transition duration-300">
            Get in Touch
          </button>
          </Link>
           </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default D365BusinessCentral;
