import React, { useState } from 'react';
'use client';
import { useTranslation } from 'react-i18next';

import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
  ServerStackIcon,
  CloudIcon,
  PhoneIcon,
  AcademicCapIcon,
  UsersIcon,
  ShieldCheckIcon,
  LightBulbIcon,
  BriefcaseIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import logo from '../../assets/logo.png';
import { Link } from "react-router-dom";
import { IoServer } from 'react-icons/io5';



import md1 from '../../assets/md1.png'
import md2 from '../../assets/md2.png'
import epicor from '../../assets/epicor-logo.svg'
import md3 from '../../assets/icons8-medicine-48.png'
import md4 from '../../assets/icons8-consultation-48.png'
import md5 from '../../assets/icons8-development-48.png'


// تعديل الخيارات المتعلقة بـ Service
const serviceItems = [
  { name: 'Epicor ERP', description: 'ERP_Solution', href: 'Epicor-ERP', icon: epicor },
  { name: 'Microsoft D365 Finance and Operation', description: 'ERP_Cloud_Solution', href: 'D365FinanceOperations', icon: md1 },
  { name: 'Microsoft D365 Business Central', description: 'ERP_Business_Management_Solution', href: 'D365BusinessCentral', icon: md2 },
  { name: 'ERP_for_Pharmaceutical_Industries', description: 'ERP_Specialized_Pharmaceutical', href: 'ERPPharmaIndustries', icon: ShieldCheckIcon },
  { name: 'ERP_Consultation_and_Implementation', description: 'ERP_Consultation_Services', href: 'ERPConsultationImplementation', icon: BriefcaseIcon },
  { name: 'ERP Development', description: 'ERP_Customization_Services', href: 'ERPDevelopment', icon: GlobeAltIcon },
]

const Nav = ({changeLanguage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { t, i18n } = useTranslation();

  return (
    <div>
      <header className="bg-white shadow-lg">
        <nav className="mx-auto flex w-full items-center justify-between p-6 lg:px-12">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <img alt="Logo" src={logo} className="h-16 w-auto" />
            </a>
          </div>

          <div className="flex lg:hidden">
            
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 p-2.5 text-gray-700"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>

          <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            <Link to={'/'}><a className="text-lg font-semibold text-[#0078B8] hover:text-hover">{t('Home')}</a></Link>
            <Link to={'/about'}> <a className="text-lg font-semibold text-[#0078B8] hover:text-hover">{t('About')}</a></Link>

            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-2 text-lg font-semibold text-[#0078B8] hover:text-hover">
                {t('Service')}
                <ChevronDownIcon className="h-5 w-5 text-gray-400" />
              </PopoverButton>
              <PopoverPanel className="absolute top-full -left-8 z-10 mt-3 w-96 bg-white ring-1 shadow-xl rounded-lg">
                <div className="p-4 space-y-2 ">
                <div className="flex items-center gap-x-4 p-3 text-sm hover:bg-gray-100 rounded-lg">
  <img src={epicor} className="h-10 w-28 text-[#0078B8]" />
  <div>
    <Link to="/Epicor-ERP">
      <a className="block font-semibold text-gray-900 hover:text-hover">Epicor ERP</a>
    </Link>
    <p className="mt-1 text-gray-600 text-xs">
    {t('ERP_Solution')}
    </p>
  </div>
</div>

<div className="flex items-center gap-x-4 p-3 text-sm hover:bg-gray-100 rounded-lg">
  <img src={md1} className="h-10 w-28 text-[#0078B8]" />
  <div>
    <Link to="/D365FinanceOperations">
      <a className="block font-semibold text-gray-900 hover:text-hover">{t('Microsoft D365 Finance and Operation')}</a>
    </Link>
    <p className="mt-1 text-gray-600 text-xs">
    {t('ERP_Cloud_Solution')}
    </p>
  </div>
</div>

<div className="flex items-center gap-x-4 p-3 text-sm hover:bg-gray-100 rounded-lg">
  <img src={md2} className="h-10 w-28 text-[#0078B8]" />
  <div>
    <Link to="/D365BusinessCentral">
      <a className="block font-semibold text-gray-900 hover:text-hover"> {t('Microsoft D365 Business Central')}</a>
    </Link>
    <p className="mt-1 text-gray-600 text-xs">
    {t('ERP_Business_Management_Solution')}
    </p>
  </div>
</div>

<div className="flex items-center gap-x-4 p-3 text-sm hover:bg-gray-100 rounded-lg">
  <img src={md3} className="h-20 w-[370px] text-[#0078B8]" />
  <div>
    <Link to="/ERPPharmaIndustries">
      <a className="block font-semibold text-gray-900 hover:text-hover"> {t('ERP_for_Pharmaceutical_Industries')}</a>
    </Link>
    <p className="mt-1 text-gray-600 text-xs">
    {t('ERP_Specialized_Pharmaceutical')}
    </p>
  </div>
</div>

<div className="flex items-center gap-x-4 p-3 text-sm hover:bg-gray-100 rounded-lg">
<img src={md4} className="h-32 w-[110px] text-[#0078B8]" />
  <div>
    <Link to="/ERPConsultationImplementation">
      <a className="block font-semibold text-gray-900 hover:text-hover">{t('ERP_Consultation_and_Implementation')}</a>
    </Link>
    <p className="mt-1 text-gray-600 text-xs">
    {t('ERP_Consultation_Services')}
    </p>
  </div>
</div>

<div className="flex items-center gap-x-4 p-3 text-sm hover:bg-gray-100 rounded-lg">
<img src={md5} className="h-20 w-[240px] text-[#0078B8]" />
  <div>
    <Link to="/ERPDevelopment">
      <a className="block font-semibold text-gray-900 hover:text-hover"> {t('ERP Development')}</a>
    </Link>
    <p className="mt-1 text-gray-600 text-xs">
    {t('ERP_Customization_Services')}
    </p>
    
  </div>
  
</div>

                </div>
              </PopoverPanel>
            </Popover>

            <Link to={'/successstory'}><a className="text-lg font-semibold text-[#0078B8] hover:text-hover">{t('Successful Story')}</a></Link>
            <Link to={'/MostQuestions'}><a className="text-lg font-semibold text-[#0078B8] hover:text-hover"> {t('Most Questions')}</a></Link>
            <Link to={'/CareerPage'}><a className="text-lg font-semibold text-[#0078B8] hover:text-hover"> Career Page</a></Link>
            <Link to={'/Contact'}><a className="text-lg font-semibold text-[#0078B8] hover:text-hover"> Contact Us</a></Link>
          </PopoverGroup>

          <div className="hidden lg:flex lg:items-center lg:gap-6 ml-8">
            <a href="#" className="text-lg font-semibold flex items-center gap-3  text-white px-4 py-2 rounded-lg  ">
              <PhoneIcon className="h-5 w-5 text-white" /> 
             

            </a>
            {/* <div className="flex space-x-2 rtl:space-x-reverse">
  <button
    onClick={() => changeLanguage("en")}
    className={`px-4 py-2 rounded-md border transition 
      ${i18n.language === 'en' 
        ? 'bg-[#0078B8] text-white' 
        : 'bg-white text-[#0078B8] border-[#0078B8] hover:bg-[#0078B8] hover:text-white'}`}
  >
    English
  </button>
  <button
    onClick={() => changeLanguage("ar")}
    className={`px-4 py-2 rounded-md border transition 
      ${i18n.language === 'ar' 
        ? 'bg-[#0078B8] text-white' 
        : 'bg-white text-[#0078B8] border-[#0078B8] hover:bg-[#0078B8] hover:text-white'}`}
  >
    العربية
  </button>
</div> */}

          </div>
        </nav>

        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full bg-white px-6 py-6 sm:max-w-sm shadow-lg">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <img alt="Logo" src={logo} className="h-16 w-auto" />
              </a>
              <button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 p-2.5">
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 space-y-4">
              <Link to={'/'}><a className="block py-2 text-lg font-semibold text-gray-900 hover:text-hover">{t('Home')}</a></Link>
              <Link to={'/about'}><a className="block py-2 text-lg font-semibold text-gray-900 hover:text-hover">{t('About')}</a></Link>
              <Disclosure>
                <DisclosureButton className="flex w-full items-center justify-between py-2 text-lg font-semibold border-b">
                   {t('Service')}
                  <ChevronDownIcon className="h-5 w-5" />
                </DisclosureButton>
                <DisclosurePanel className="mt-2 space-y-2">
  {serviceItems.map((item) => (
    <Link key={item.name} to={`/${item.href}`} className="block">
      <DisclosureButton as="div" className="block py-2 pl-6 text-sm font-semibold text-gray-900 hover:text-hover">
       
      {t(item.name)}
      </DisclosureButton>
    </Link>
  ))}
</DisclosurePanel>

              </Disclosure>
              <Link to={'/successstory'}><a className="block py-2 text-lg font-semibold text-gray-900 hover:text-hover">{t('Successful Story')}</a></Link>
              <Link to={'/MostQuestions'}><a className="block py-2 text-lg font-semibold text-gray-900 hover:text-hover">{t('Most Questions')}</a></Link>
            </div>
            
            <div className="pt-6">
            <Disclosure>
                <DisclosureButton className="flex w-full items-center justify-between py-2 text-lg font-semibold border-b">
                   {t('Contact')}
                  <ChevronDownIcon className="h-5 w-5" />
                </DisclosureButton>
                <DisclosurePanel className="mt-2 space-y-2">
                <Link to={'/Contact'}>
                <h1 className="block text-lg font-semibold flex items-center    py-2 rounded-lg  ">
                  <PhoneIcon className="h-5 w-5 text-white" />{t('Contact Us')}
                </h1>
              </Link>
              <Link to={'/CareerPage'}>
                <h1 className="block text-lg font-semibold flex items-center    py-2 rounded-lg  ">
                  <PhoneIcon className="h-5 w-5 text-white" />Career
                </h1>
              </Link>
</DisclosurePanel>

              </Disclosure>
           
              <div className="flex space-x-2 rtl:space-x-reverse mt-4">
  <button
    onClick={() => changeLanguage("en")}
    className={`px-4 py-2 rounded-md border transition 
      ${i18n.language === 'en' 
        ? 'bg-[#0078B8] text-white' 
        : 'bg-white text-[#0078B8] border-[#0078B8] hover:bg-[#0078B8] hover:text-white'}`}
  >
    English
  </button>
  <button
    onClick={() => changeLanguage("ar")}
    className={`px-4 py-2 rounded-md border transition 
      ${i18n.language === 'ar' 
        ? 'bg-[#0078B8] text-white' 
        : 'bg-white text-[#0078B8] border-[#0078B8] hover:bg-[#0078B8] hover:text-white'}`}
  >
    العربية
  </button>
</div>

            </div>
            
        
          </DialogPanel>
          
        </Dialog>
       
      </header>
    
    </div>
  );
}

export default Nav;



