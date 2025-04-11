import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate  } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from './Components/Home/Home'
import Contact from "./Components/Contact/Contact";
import MostQuestions from "./Components/Support/MostQuestions";
import Support from "./Components/Support/Support";
import Epicor from "./Components/Services/Epicor";
import D365FinanceOperations from "./Components/Services/D365FinanceOperations";
import D365BusinessCentral from "./Components/Services/D365BusinessCentral";
import ERPPharmaIndustries from "./Components/Services/ERPPharmaIndustries";
import ERPConsultationImplementation from "./Components/Services/ERPConsultationImplementation";
import ERPDevelopment from "./Components/Services/ERPDevelopment";
import SuccessStory from "./Components/SuccessStory/SuccessStory";
import About from "./Components/About/About";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from 'react-i18next';
import Nav from "./Components/Nav/Nav";
import CareerPage from "./Components/Contact/CareerPage";

const App = () => {
 
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    // تغيير اتجاه الصفحة بناءً على اللغة
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  return (
    <BrowserRouter>
    <ToastContainer />
    <Nav changeLanguage={changeLanguage} />  {/* ✅ تمرير changeLanguage إلى Navbar */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/MostQuestions" element={<Support />} />
      <Route path="/Epicor-ERP" element={<Epicor />} />
      <Route path="/D365FinanceOperations" element={<D365FinanceOperations />} />
      <Route path="/D365BusinessCentral" element={<D365BusinessCentral />} />
      <Route path="/ERPPharmaIndustries" element={<ERPPharmaIndustries />} />
      <Route path="/ERPConsultationImplementation" element={<ERPConsultationImplementation />} />
      <Route path="/ERPDevelopment" element={<ERPDevelopment />} />
      <Route path="/SuccessStory" element={<SuccessStory />} />
      <Route path="/About" element={<About />} />
      <Route path="/CareerPage" element={<CareerPage />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
