import React from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Image from '../../assets/Micro.png';
import Process from '../../assets/Microsoft_Dynamics365_blog-1170x617.jpg';
import { Link } from 'react-router-dom';

const D365FinanceOperations = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
    
      <div className="container mx-auto px-6 py-12 flex-1">
        <div className="bg-white shadow-lg rounded-2xl p-8 max-w-5xl mx-auto text-gray-800">
          <h1 className="text-5xl font-bold text-[#0078B8] mb-8 text-center">Microsoft D365 Finance & Operations</h1>
          <img src={Image} alt="Microsoft D365 Finance & Operations" className="w-full rounded-lg mb-6" />
          
          <p className="text-lg leading-relaxed mb-6">
            Finance and Operations apps are enterprise resource planning (ERP) software as a service (SaaS) offerings that are built on and for Microsoft Azure. The Finance and Operations service provides organizations with ERP functionality that supports their unique requirements and helps them adjust to constantly changing business environments, without requiring that they manage infrastructure.
          </p>
          
          <h2 className="text-3xl font-semibold text-[#0078B8] mt-10 mb-6">Why Choose D365 Finance & Operations?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">AI-Driven Insights</h3>
              <p className="text-gray-600">Utilize predictive analytics to optimize financial performance and operations.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Cloud-Based Flexibility</h3>
              <p className="text-gray-600">Access your ERP system from anywhere with secure cloud deployment.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Integrated Finance Management</h3>
              <p className="text-gray-600">Manage budgets, forecasting, and real-time financial insights seamlessly.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Advanced Supply Chain</h3>
              <p className="text-gray-600">Optimize inventory, logistics, and supplier relationships efficiently.</p>
            </div>
          </div>
          
          <h2 className="text-3xl font-semibold text-[#002050] mt-10 mb-6">Microsoft D365 Product Suites</h2>
          <div className="text-lg text-gray-700 space-y-6">
            <h3 className="text-xl font-semibold text-[#0078B8]">Dynamics 365 Finance</h3>
            <p>
              Microsoft Dynamics 365 Finance enables organizations to monitor the performance of financial operations in real-time, predict outcomes, and make data-driven decisions to drive business agility and growth. It empowers users to do business anywhere, anytime, with an intuitive user interface personalized for their roles and preferences.
            </p>

            <h3 className="text-xl font-semibold text-[#0078B8]">Dynamics 365 Supply Chain Management</h3>
            <p>
              Microsoft Dynamics 365 Supply Chain Management empowers employees and organizations with the ability to obtain a unified view of inventory, warehouse, manufacturing, service, and logistics with predictive analytics that turn data into insights to support better strategic decisions.
            </p>

            <h3 className="text-xl font-semibold text-[#0078B8]">Dynamics 365 Commerce</h3>
            <p>
              Dynamics 365 Commerce—built on the proven Dynamics 365 Retail capabilities—delivers a comprehensive omnichannel solution that unifies back-office, in-store, call center, and digital experiences. Dynamics 365 Commerce enables you to build brand loyalty through personalized customer engagements, increase revenue with improved employee productivity, optimize operations to reduce costs, and drive supply chain efficiencies, ultimately delivering better business outcomes.
            </p>

            <h3 className="text-xl font-semibold text-[#0078B8]">Dynamics 365 Human Resources</h3>
            <p>
              Dynamics 365 Human Resources automates human resources tasks throughout the employment life cycle, including organization management, hiring, compensation, benefits, leave and absence, performance, and more. It also helps manage compensation and benefits, employee performance, and ensures that your human resource programs meet changing global regulations.
            </p>
          </div>

          <h2 className="text-3xl font-semibold text-[#0078B8] mt-10 mb-6">Benefits of Using D365 Finance & Operations</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-3">
            <li>Enhanced financial visibility and forecasting</li>
            <li>Automated business processes for improved efficiency</li>
            <li>Integrated analytics for better decision-making</li>
            <li>Optimized supply chain and inventory management</li>
            <li>Scalability to adapt to business growth</li>
          </ul>
          
          <h2 className="text-3xl font-semibold text-[#0078B8] mt-10 mb-6">Implementation Process</h2>
          <img src={Process} alt="Implementation Process" className="w-full rounded-lg mb-6" />
          <iframe
  width="100%"
  height="400"
  src="https://www.youtube.com/embed/MML_ppaZXZk"
  title="Implementation Process Video"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  className="rounded-lg"
></iframe>
          <ol className="list-decimal list-inside text-lg text-gray-700 space-y-3 mt-7">
            <li>Business assessment and requirement gathering</li>
            <li>Solution customization and configuration</li>
            <li>Data migration and system integration</li>
            <li>Testing and user training</li>
            <li>Deployment and go-live support</li>
            <li>Ongoing maintenance and optimization</li>
          </ol>
          
          <h2 className="text-3xl font-semibold text-[#0078B8] mt-10 mb-6">Conclusion</h2>
          <p className="text-lg leading-relaxed">
            Microsoft Dynamics 365 Finance & Operations is a powerful ERP solution that helps businesses streamline operations, enhance financial decision-making, and scale efficiently. With its AI-driven analytics, automation, and cloud capabilities, it is the go-to choice for enterprises looking to modernize their business processes.
          </p>
          
          <div className='mt-5'>
            <span>If you want more information</span> 
            <Link to={'/contact'} >
              <button className="ml-2 px-4 py-2 bg-[#0078B8] text-white font-semibold rounded-lg hover:bg-[#005F8A] transition duration-300">
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

export default D365FinanceOperations;
