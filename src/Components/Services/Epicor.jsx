import React from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Image from '../../assets/epicor_cover.jpeg'
import Process from '../../assets/ERP.png'
import { Link } from 'react-router-dom';

const Epicor = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
    
      <div className="container mx-auto px-6 py-12 flex-1">
        <div className="bg-white shadow-lg rounded-2xl p-8 max-w-5xl mx-auto text-gray-800">
          <h1 className="text-5xl font-bold text-[#0078B8] mb-8 text-center">Epicor ERP Overview</h1>
          <img src={Image} alt="Epicor ERP" className="w-full rounded-lg mb-6" />
          
          <p className="text-lg leading-relaxed mb-6">
            Technological barriers are making it increasingly difficult to access and integrate your critical business information, holding you back from realizing true productivity. Epicor's global ERP platform combines the consistency and adaptability you need to be a true competitor worldwide. It is designed to reflect how the business world has shifted towards an emphasis on immediate results, delivering the visibility needed to drive effective collaboration and real results.
          </p>

          <h2 className="text-3xl font-semibold text-[#0078B8] mt-10 mb-6">Key Benefits of Epicor ERP</h2>
          <p className="text-lg leading-relaxed mb-6">
            Epicor provides a comprehensive solution that helps businesses break down the barriers of outdated systems and drive true operational efficiency. With Epicor ERP, you can streamline your financial processes, enhance collaboration across departments, and ensure that your supply chain runs smoothly while meeting your regulatory needs.
          </p>
          
          <h2 className="text-3xl font-semibold text-[#0078B8] mt-10 mb-6">Key Areas of Epicor ERP</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Financial Management</h3>
              <p className="text-gray-600">
                Epicor streamlines and automates your financial processes, from sophisticated reporting down to general ledger journals, while giving you the visibility needed to meet regulations and comply with audit demands.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Sales Management</h3>
              <p className="text-gray-600">
                Enhance collaboration among departments and locations to ensure smooth sailing throughout the order cycle, from quote to cash, and ultimately better manage demand.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Supply Chain Management</h3>
              <p className="text-gray-600">
                Ensure your supply chain drives efficiency, empowering you to deliver quality service and product quickly at a lower cost.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Customer Relationship Management</h3>
              <p className="text-gray-600">
                Realize efficiency in your operations and optimize relationships with a panoramic view of your interactions with customers, partners, and suppliers.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Compliance & Risk Management</h3>
              <p className="text-gray-600">
                Today's regulations are becoming increasingly complex. Epicor helps you manage compliance effectively and better control risk.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-semibold text-[#0078B8] mt-10 mb-6">Conclusion</h2>
          <p className="text-lg leading-relaxed">
            And this is only the beginning. Say goodbye to the barriers that have plagued your business until now with a solution that can be configured to suit your specific needs. Epicor drives superior business performance with insight throughout your organization that is current and fits the context of your needs.
          </p>
          
          <div className="mt-5">
            <span>If you want more information, feel free to contact us.</span>
            <Link to={'/contact'}>
              <button className="mx-2 gap-3 px-4 py-2 bg-[#0078B8] text-white font-semibold rounded-lg hover:bg-[#005F8A] transition duration-300">
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

export default Epicor;
