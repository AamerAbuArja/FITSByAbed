import React from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Image from '../../assets/pharam.jpg';
import Process from '../../assets/pro.jpg';
import pharma from '../../assets/pharma2.png';
import { Link } from 'react-router-dom';

const ERPPharmaIndustries = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
    
      <div className="container mx-auto px-6 py-12 flex-1">
        <div className="bg-white shadow-lg rounded-2xl p-8 max-w-5xl mx-auto text-gray-800">
          <h1 className="text-5xl font-bold text-[#0078B8] mb-8 text-center">ERP for Pharmaceutical Industries</h1>
          <img src={pharma} alt="ERP for Pharmaceutical Industries" className="w-full rounded-lg mb-6" />
          
          <p className="text-lg leading-relaxed mb-6">
            ERP solutions for the pharmaceutical industry help streamline operations, ensure compliance with regulatory standards, and enhance efficiency. These systems integrate inventory management, production planning, quality control, and financial management into a single platform.
          </p>
          
          <h2 className="text-3xl font-semibold text-[#0078B8] mt-10 mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Regulatory Compliance</h3>
              <p className="text-gray-600">Ensures adherence to FDA, GMP, and other pharmaceutical regulations.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Inventory Management</h3>
              <p className="text-gray-600">Tracks raw materials, batch numbers, and expiry dates efficiently.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Quality Control</h3>
              <p className="text-gray-600">Monitors production quality and ensures product safety.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Supply Chain Optimization</h3>
              <p className="text-gray-600">Enhances coordination between suppliers, manufacturers, and distributors.</p>
            </div>
          </div>
          
          <h2 className="text-3xl font-semibold text-[#0078B8] mt-10 mb-6">Benefits of ERP in Pharmaceuticals</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-3">
            <li>Improved compliance with industry regulations</li>
            <li>Enhanced inventory control and cost management</li>
            <li>Better production planning and resource allocation</li>
            <li>Streamlined documentation and reporting</li>
            <li>Increased efficiency and reduced operational costs</li>
          </ul>
          
          <h2 className="text-3xl font-semibold text-[#0078B8] mt-10 mb-6">Implementation Process</h2>
          <img src={Process} alt="Implementation Process" className="w-full rounded-lg mb-6" />
          <ol className="list-decimal list-inside text-lg text-gray-700 space-y-3">
            <li>Business needs assessment and planning</li>
            <li>Customization and system configuration</li>
            <li>Data migration and validation</li>
            <li>Testing and quality assurance</li>
            <li>Training and system deployment</li>
            <li>Continuous support and system optimization</li>
          </ol>
          
          <h2 className="text-3xl font-semibold text-[#0078B8] mt-10 mb-6">Conclusion</h2>
          <p className="text-lg leading-relaxed">
            Implementing an ERP solution in the pharmaceutical industry enhances operational efficiency, ensures compliance, and optimizes the supply chain. A well-integrated ERP system is crucial for maintaining quality and driving business growth.
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

export default ERPPharmaIndustries;
