// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "hello": "Hello",
        "welcome": "Welcome to our site",
        "Title explanation": `We are a team of passionate professionals dedicated to transforming businesses through innovative
    technology solutions. Our mission is to empower organizations to achieve operational excellence and drive
    sustainable growth in an ever-evolving market landscape.`,
    "Our Vision":"Our Vision",
    "Vision explanation":"To be the global leader in delivering cutting-edge solutions that drive business transformation.",
    "Our Team":"Our Team",
      "Team explanation":` A diverse team of experts, from technology innovators to industry specialists, working together to
              deliver excellence.`,
              "Our Approach":"Our Approach",
              "Approach explanation":"We focus on continuous innovation, agility, and customer-centric solutions to drive real business value.",
               "Our Story":"Our Story",
               "Story explanation":"We start by thoroughly understanding your goals and requirements, establishing a strong foundation for the project. Then, our team collaborates to develop detailed strategies that ensure smooth execution and the best possible outcomes. Finally, we deliver high-quality, innovative solutions that are perfectly aligned with your vision, driving success and achieving your objectives.",
                "Join Us" :"Join Us in Shaping the Future",

                'Join Us explanation':"Whether you're a potential client or a future team member, we’re always excited to connect with like-minded individuals and organizations who share our passion for growth and transformation.",                "Get In Touch":"Get In Touch",
                //footer
                "fits":"Full Insight Technology Solutions",
                  "fits explanation":"We are a leading company in the industry, providing innovative solutions to our clients worldwide.",
                  "Quick Links":"Quick Links",
                    "Contact":"Contact Us",
                    "Saudi Arabia":"Saudi Arabia",
                    "HQ":"HQ",
                    "Phone":"Phone",
                     "Address": "Address Riyadh, Saudi Arabia",
                     "Jordan":"Jordan",
                     "Addresst": "Address: Amman, Jordan",
                       "Follow":"Follow Us",
                         "final":"Full Insight Technology Solution. All Rights Reserved.",
                         "Client Success Stories":"Client Success Stories",
                         "Impact of modern technologies in improving operational efficiency": "Impact of modern technologies in improving operational efficiency",
                         "Tailored services": "Tailored services that provide solutions to unique business challenges",
                         "Achieving measurable": "Achieving measurable results such as cost reduction and increased customer satisfaction",
                         "Industries transformed": "Industries transformed through scalable solutions, including manufacturing, healthcare, and retail",    
                         "Pharma Pharmaceutical Industries": "Pharma Pharmaceutical Industries",     
                         "We developed": "We developed an ERP system for the pharma company to improve efficiency and streamline key operations like inventory, sales, and finance, enabling better decision-making and business growth",  
                         "Learn More": "Learn More",      
                         "Start Your Success Story with Us": "Start Your Success Story with Us", 
                         "Let us": "Let us help you transform your business operations with our innovative solutions and services",    
                         "Get Started": "Get Started",   
                         //FORM
                         "fill out": "We’d love to hear from you. Please fill out this form.",
                         "First Name": "First Name",
                         "Last Name": "Last Name",
                         "Email": "Email",
                         "Phone Number": "Phone Number",
                         "Your Message": "Your Message",
                         //main
                         "STREAMLINE": "STREAMLINE YOUR BUSINESS OPERATIONS",
                         "Epicor ERP Solutions": "Epicor ERP Solutions",
                         "Manage": "Manage your operations seamlessly, from procurement to production and sales.",
                         "Microsoft D365 Business Central": "Microsoft D365 Business Central",
                         
"An ERP system": "An ERP system to boost efficiency, manage employees and payroll, provide financial reports, control inventory, enhance productivity, and support strategic decisions with analytics.",
"Read More": "Read More",
"Microsoft D365 Finance and Operation": "Microsoft D365 Finance and Operation",
"A solution": "A solution to streamline finance, operations, inventory, payroll, and support decision-making with real-time insights.",
"Microsoft": "Microsoft D365 Business Central is an all-in-one solution that streamlines finance, sales, customer service, and inventory management with real-time insights for better decision-making.",
"ERP Development": "ERP Development",
"What we provide":"What we provide",
"erp_for_pharmaceutical_industries": "ERP for pharmaceutical industries optimizes inventory, production, regulatory compliance, and financial management, improving efficiency, accuracy, and decision-making across operations.",
"ERP_for_Pharmaceutical_Industries":"ERP For Pharamcetual Industries",
 "ERP_development": "ERP development involves designing and customizing ERP systems to meet business needs, streamline operations, and enhance efficiency and scalability.",
 
  "ERP_Consultation_and_Implementation": "ERP Consultation and Implementation",
    "ERP_Consultation_and_Implementation_Services": "ERP consultation and implementation services help businesses select, customize, and integrate ERP systems to improve operations and efficiency.",
  "Our_Methodology": "Our Methodology",
   "Efficient_Workflow": "Efficient Workflow",
    "Our_Process": "Our process is designed to ensure efficiency and quality in every project we undertake.",
   "Achieve_Success": "Achieve Success",
   "We_Begin": "We begin by understanding your goals and requirements to build a strong foundation for the project.",
     "Develop_Strategies": "Develop Strategies",
     "Our_Team_Collaborates": "Our team collaborates to create a detailed plan, ensuring smooth execution and optimal results.",
     "Define_Objectives": "Define Objectives",

      "Team_Collaboration": "Our team collaborates to create a detailed plan, ensuring smooth execution and optimal results.",
     "Why_Choose_Us": "Why Choose Us",
       "Unlock_Your_Business_Potential_with_FITS": "Unlock Your Business Potential with FITS",
         "Why_Choose_Usp": "Maximize Your Investment: As certified Microsoft and Epicor partners, we ensure you get the most out of your ERP investment. Streamline Operations: Our tailored solutions and expert implementation drive efficiency and optimize your business processes. Gain a Competitive Edge: Leverage the power of leading ERP platforms to improve decision-making and stay ahead of the competition. Experience Peace of Mind: Our comprehensive support and proactive approach ensure your ERP system runs smoothly, allowing you to focus on your core business. Partnership You Can Trust: We are committed to your success, providing transparent communication and building lasting relationships.",

         "Speed_of_Operation": "Speed of Operation",
         "High_Quality": "High Quality",
         "Customizability": "Customizability",
         "Easy_Integration": "Easy Integration",
         "Excellent_Support": "Excellent Support",
         "Powerful_Analytics": "Powerful Analytics",
          "Stay_Updated_with_Our_Partners_Tweets": "Stay Updated with Our Partners' Tweets",
           "More_Info": "More Info",
             "Some_Companies_Weve_Worked_With": "Some of the Companies We've Worked With",
              "Join_Our_Growing_List_Of_Satisfied_Customers": "Join our growing list of satisfied customers",
                "Join_Our_Team": "Join Our Team",
                 "Apply_for_a_Job": "Apply for a Job",
                  "Fill_out_the_form_to_apply_for_a_position_with_us": "Fill out the form to apply for a position with us.",
  "Why_do_you_want_to_join_us": "Why do you want to join us?",
 "Submit": "Submit",
  "Sending": "Sending",
   "ERP_Solution": "A comprehensive ERP solution that streamlines business processes, from finance to supply chain management",
"ERP_Cloud_Solution": "A cloud-based ERP system that optimizes financial management, operations, and supply chain efficiency",
"ERP_Business_Management_Solution": "An all-in-one business management solution for finance, sales, customer service, and operations",
 "ERP_Specialized_Pharmaceutical": "A specialized ERP system that ensures compliance, manages inventory, and enhances efficiency in pharmaceutical businesses",
 "ERP_Consultation_Services": "Services that help businesses select, customize, and integrate ERP systems for better efficiency",
   "ERP_Customization_Services": "Customizing and building ERP solutions to optimize business processes and scalability",
   "Epicor_ERP_Overview": "Epicor ERP: A Comprehensive Overview",
    "Epicor_ERP_Description": "Epicor ERP is a cutting-edge enterprise resource planning system designed to enhance business operations, drive efficiency, and provide real-time insights. Tailored for industries such as manufacturing, distribution, retail, and services, Epicor offers a scalable and flexible solution to meet diverse business needs.",

 "Why_Choose_Epicor_ERP": "Why Choose Epicor ERP?",
  "AI_Automation": "AI & Automation",
   "User_Friendly_Interface": "User-Friendly Interface",
    "Modern_Intuitive_UI": "Modern and intuitive UI that simplifies navigation and enhances user experience",
     "AI_Predictive_Analytics": "Leverage artificial intelligence for predictive analytics and automated workflows",
      "Cloud_OnPremise": "Cloud & On-Premise",
        "Flexible_Deployment": "Flexible deployment options that adapt to your business infrastructure.",
        "Customizable_Solutions": "Customizable solutions designed for manufacturing, retail, and more.",
          "Industry_Specific_Solutions": "Industry-Specific Solutions",
           "Industries_Benefiting_Epicor": "Industries Benefiting from Epicor ERP",
           "Manufacturing": "Manufacturing",
           "Healthcare": "Healthcare",
           "Automotive": "Automotive",
           "Distribution": "Distribution",
           "Retail": "Retail",
            "Benefits of Using Epicor ERP": "Benefits of Using Epicor ERP",
             "Improved operational efficiency and productivity": "Improved operational efficiency and productivity",
             "Enhanced decision-making through data-driven insights": "Enhanced decision-making through data-driven insights",
             "Streamlined supply chain and inventory management": "Streamlined supply chain and inventory management",
             "Better customer relationship management": "Better customer relationship management",


             
             "What is Epicor ERP?": "Epicor ERP is an enterprise resource planning (ERP) system designed to help businesses manage operations such as manufacturing, finance, supply chain, and customer management.",
             "What are the key features of Epicor ERP?": "Customization flexibility, strong support for manufacturing, seamless integration with other systems, advanced reporting and analytics, and user-friendly interface.",
             "Is Epicor ERP suitable for small and medium-sized businesses?": "Yes, Epicor provides flexible solutions that fit businesses of all sizes, with scalability options based on business needs.",
             "What languages and databases does Epicor ERP support?": "It primarily supports SQL Server as the database and uses C# and .NET for development.",
             "Can Epicor ERP integrate with other systems?": "Yes, it can integrate with other systems via APIs or integration tools like Epicor Service Connect.",
             "What is Microsoft D365 Finance and Operations?": "It is an ERP system from Microsoft that helps manage financial and operational processes, targeting large enterprises.",
             "What is the difference between D365 Finance and D365 Supply Chain Management?": "D365 Finance focuses on accounting and financial management, while D365 Supply Chain Management focuses on production and supply chain processes.",
             "Can Microsoft D365 Finance and Operations be customized?": "Yes, it can be customized using Power Apps, Power Automate, and its development language (X++).",
             "What hosting options are available for D365 Finance and Operations?": "It is cloud-based via Azure, with integration options for on-premise systems.",
             "Does Microsoft D365 Finance and Operations support financial compliance?": "Yes, it supports compliance with international accounting standards and various tax regulations.",
             "What is the difference between Microsoft D365 Business Central and D365 Finance and Operations?": "Business Central is designed for small and medium-sized businesses, while Finance and Operations is meant for large and complex enterprises.",
             "What are the key features of Business Central?": "Financial management, inventory and supply chain management, sales and purchasing, Microsoft 365 integration, and built-in analytics.",
             "Can Business Central integrate with external applications?": "Yes, it supports integration with Power BI, Power Apps, and Dynamics 365 CRM.",
             "Does Business Central support customization?": "Yes, it can be customized using Visual Studio Code and AL Language.",
             "What are the hosting options for Business Central?": "It can be hosted on the cloud via Azure or deployed on-premise based on business needs.",
             "What is ERP development?": "It involves designing, developing, customizing, and implementing ERP solutions to meet business requirements.",
             "What skills are needed for ERP development?": "Knowledge of databases (SQL), programming (C#, .NET, X++, JavaScript), data analysis, and business processes.",
             "What are the best programming languages for ERP development?": "C#, .NET, Java, Python, and customization languages like AL for Business Central.",
             "Can an open-source ERP be developed?": "Yes, open-source solutions like Odoo and ERPNext can be customized to meet business needs.",
             "What are the biggest challenges in ERP development?": "Business process complexity, data integration, security, and user-friendliness.",
             "What is the role of an ERP consultant?": "Analyzing business needs, selecting the right system, overseeing implementation, and training employees.",
             "What are the key stages of ERP implementation?": "Planning, requirements analysis, configuration and customization, testing, training, and go-live.",
             "How long does it take to implement an ERP system?": "It depends on the company’s size and complexity but typically takes several months to a year.",
             "Can data be migrated from an old system to a new ERP?": "Yes, data migration is done using specialized tools to ensure accuracy and integrity.",
             "What are the main challenges in ERP implementation?": "Resistance to change, high implementation costs, system integration, and adequate training for employees.",
             "Why do pharmaceutical companies need ERP systems?": "To ensure regulatory compliance, track supply chain operations, optimize production, and manage quality control.",
             "What features should an ERP system have for the pharmaceutical industry?": "Batch tracking, supply chain management, compliance with quality standards (e.g., FDA, GMP), and detailed reporting.",
             "Are there ERP systems specialized for the pharmaceutical sector?": "Yes, solutions like SAP for Pharmaceuticals, Epicor Pharma Solutions, and Microsoft D365 cater to the industry’s needs.",
             "How does ERP help in regulatory compliance for pharmaceuticals?": "By enabling automatic tracking of raw materials, managing quality control, and maintaining accurate production records.",
             "Can an ERP system integrate with laboratory systems in the pharmaceutical industry?": "Yes, it can be integrated with Laboratory Information Management Systems (LIMS) to ensure accurate quality analysis.",



             "Still have questions": " Still have questions",
             "Can’t find the answer you’re looking for? Please chat to our friendly team.": "Can’t find the answer you’re looking for? Please chat to our friendly team .",





 "ERP Development is an essential":"ERP Development is an essential aspect of modern business management. ERP systems integrate core business processes such as finance, HR, supply chain, and inventory management into a single cohesive system, improving data visibility and decision-making.",


 "Why Choose ERP Development?":"Why Choose ERP Development?",
 "Streamlined Business Processes":"Streamlined Business Processes",
 "Unify":"Unify all business operations into a single platform, reducing complexity and inefficiency.",

 "Real-Time Data & Analytics":"Real-Time Data & Analytics",

 "Access up-to-date":"Access up-to-date information and make informed decisions with real-time data analytics.",

 "Improved Collaboration":"Improved Collaboration",
 "Enhance cross-departmental":"Enhance cross-departmental communication and collaboration through shared data and workflows.",

 "Cost Reduction":"Cost Reduction",
 "Reduce operational":"Reduce operational costs by automating tasks and optimizing resource allocation.",
 "Industries Benefiting from ERP Development":"Industries Benefiting from ERP Development",
"Finance":"Finance",
"Education":"Education",
"Benefits of ERP Development":"Benefits of ERP Development",
"Centralized data management and access":"Centralized data management and access",
"Improved reporting and business insights":"Improved reporting and business insights",

"Enhanced scalability for business growth":"Enhanced scalability for business growth",
"Streamlined compliance and regulatory reporting":"Streamlined compliance and regulatory reporting",
"Increased productivity with automated processes":"Increased productivity with automated processes",
"ERP Development Process":"ERP Development Process",
"Business needs assessment and requirement gathering":"Business needs assessment and requirement gathering",
"ERP system customization and integration":"ERP system customization and integration",
"Training employees and end-users":"Training employees and end-users",
"Deployment and post-launch support":"Deployment and post-launch support",
"Continuous updates and optimization":"Continuous updates and optimization",
"Data migration and system testing":"Data migration and system testing",
"Conclusion":"Conclusion",
"ERP development is an investment":"ERP development is an investment in streamlining business operations and ensuring long-term scalability. By choosing an ERP system, companies can automate workflows, improve decision-making, and stay competitive in an ever-changing market.",


"If you want more information":"If you want more information",
"ERP Consultation & Implementation: A Complete Guide":"ERP Consultation & Implementation: A Complete Guide",
"ERP consultation":"ERP consultation and implementation services help businesses streamline operations, optimize processes, and improve efficiency. Expert consultants guide companies through the selection, customization, and deployment of ERP solutions tailored to their needs.",
"Why Choose ERP Consultation?":"Why Choose ERP Consultation?",
"Expert Guidance":"Expert Guidance",
"Experienced professionals help you select and implement the best ERP solution.":"Experienced professionals help you select and implement the best ERP solution.",

"Customized Solutions":"Customized Solutions",

"ERP systems tailored to your business requirements and industry standards.":"ERP systems tailored to your business requirements and industry standards.",

"Seamless Integration":"Seamless Integration",
"Ensure smooth integration with existing tools and workflows.":"Ensure smooth integration with existing tools and workflows.",
"Long-Term Support":"Long-Term Support",
"Ongoing maintenance and optimization for sustained success.":"Ongoing maintenance and optimization for sustained success.",
"Industries Benefiting from ERP Consultation":"Industries Benefiting from ERP Consultation",
"Logistics":"Logistics",
"Benefits of ERP Consultation":"Benefits of ERP Consultation",
"Enhanced business process efficiency":"Enhanced business process efficiency",
"Cost-effective ERP implementation":"Cost-effective ERP implementation",
"Better decision-making with real-time insights":"Better decision-making with real-time insights",
"Seamless cross-department collaboration":"Seamless cross-department collaboration",
"Improved data accuracy and reporting":"Improved data accuracy and reporting",
"ERP Implementation Process":"ERP Implementation Process",
"ERP selection and customization":"ERP selection and customization",
"Business needs assessment":"Business needs assessment",
"System configuration and data migration":"System configuration and data migration",
"Testing and validation":"Testing and validation",
"Employee training and deployment":"Employee training and deployment",
"Post-implementation support":"Post-implementation support",
" ERP consultation and implementation":" ERP consultation and implementation services provide businesses with the expertise needed to successfully deploy and maintain an ERP system. With the right approach, companies can improve efficiency, reduce costs, and achieve long-term success.",



































      }
    },
    ar: {
      translation: {
        //Nav Page
        "Home": "الصفحة الرئيسية",
        "About": "عنا",
        "Service": "خداماتنا",
        "Successful Story": "قصص نجاحنا",
        "Most Questions": " الاسئلة الشائعة ",
        "Contact Us": "للتواصل",
        "Career Page":"صفحة المهنة",
        // About Page
        "About Us":"عنا",
        "Title explanation":"نحن فريق من المهنيين المتحمسين الملتزمين بتحويل الأعمال من خلال حلول تكنولوجية مبتكرة. تتمثل مهمتنا في تمكين المؤسسات من تحقيق التميز التشغيلي ودفع النمو المستدام في بيئة سوقية دائمة التطور.",
        "Our Vision":"رؤيتنا",
        "Vision explanation":"أن نكون الرائد العالمي في تقديم الحلول المتطورة التي تقود تحول الأعمال.",
        "Our Team":"فريقنا",
        "Team explanation":"فريق متنوع من الخبراء، من مبتكري التكنولوجيا إلى المتخصصين في الصناعة، يعملون معًا لتحقيق التميز.",
        "Our Approach":"نهجنا",
        "Approach explanation":"نحن نركز على الابتكار المستمر والمرونة والحلول التي تركز على العملاء لتعزيز القيمة التجارية الحقيقية.",
        "Our Story":"قصتنا",
        "Story explanation":"نبدأ بفهم أهدافكم ومتطلباتكم بدقة، لنرسي أساسًا متينًا للمشروع. ثم يتعاون فريقنا لوضع استراتيجيات مفصلة تضمن تنفيذًا سلسًا وتحقيق أفضل النتائج الممكنة. وأخيرًا، نقدم حلولًا مبتكرة وعالية الجودة تتوافق تمامًا مع رؤيتكم، مما يدفعكم نحو النجاح وتحقيق أهدافكم.",
        "Join Us" :"انضم إلينا في تشكيل المستقبل",
         'Join Us explanation':`سواء كنت عميلاً محتملاً أو عضوًا مستقبليًا في الفريق، فنحن دائمًا متحمسون للتواصل مع الأفراد والمؤسسات المتشابهة في التفكير والذين يشاركوننا شغفنا بالنمو والتحول.`,
         "Get In Touch":"تواصل معنا ",
         //footer
         "fits":"حلول تقنية الرؤية الكاملة",
         "fits explanation":"نحن شركة رائدة في الصناعة، نقدم حلولاً مبتكرة لعملائنا في جميع أنحاء العالم.",
         "Quick Links":"روابط سريعة",
           "Contact":"تواصل معنا ",
           "Saudi Arabia":"المملكة العربية السعودية",
           "HQ":"المقر الرئيسي",
           "Phone":"الرقم",
            "Address": "العنوان :الرياض, المملكة العربية السعودية",
            "Jordan":"الاردن",
            "Addresst":"عمان, الاردن",
            "Follow":"تابعنا",
              "final":"حلول تقنية شاملة. جميع الحقوق محفوظة.",
              //story success
              "Client Success Stories":"قصص نجاح العملاء",
              "Impact of modern technologies in improving operational efficiency": "تأثير التقنيات الحديثة في تحسين الكفاءة التشغيلية",
              "Tailored services": "خدمات مخصصة تقدم حلولًا للتحديات التجارية الفريدة",
              "Achieving measurable": "تحقيق نتائج قابلة للقياس مثل خفض التكاليف وزيادة رضا العملاء",
              "Industries transformed": "الصناعات التي تم تحويلها من خلال الحلول القابلة للتوسع، بما في ذلك التصنيع والرعاية الصحية والتجزئة",
              "Pharma Pharmaceutical Industries": "صناعات الأدوية والصيدلة",
              "We developed": "طورنا نظام ERP لشركة الأدوية لتحسين الكفاءة وتبسيط العمليات الرئيسية مثل المخزون والمبيعات والمالية، مما يمكّن من اتخاذ قرارات أفضل ونمو الأعمال",
              "Learn More": "تعرف أكثر",
              "Start Your Success Story with Us": "ابدأ قصة نجاحك معنا",
              "Let us": "دعنا نساعدك في تحويل عمليات أعمالك من خلال حلولنا وخدماتنا المبتكرة",
              "Get Started": "ابدأ الآن",
              //FORM 
              "fill out": "نود سماع رأيك. يرجى ملء هذا النموذج.",
              "First Name": "الاسم الأول",
              "Last Name": "الاسم الأخير",
              "Email": "البريد الإلكتروني",
              "Phone Number": "رقم الهاتف",
              "Your Message": "رسالتك",
              //main
"STREAMLINE": "تبسيط عمليات عملك",
"Epicor ERP Solutions": "حلول Epicor ERP",
"Manage": "إدارة عملياتك بسلاسة، من المشتريات إلى الإنتاج والمبيعات.",
"Microsoft D365 Business Central": "مايكروسوفت D365 بيزنس سنترال",
"An ERP system": "نظام ERP لتعزيز الكفاءة، وإدارة الموظفين وكشوف الرواتب، وتوفير التقارير المالية، والتحكم في المخزون، وزيادة الإنتاجية، ودعم القرارات الاستراتيجية من خلال التحليلات.",
"Read More": "اقرأ المزيد",
"Microsoft D365 Finance and Operation": "مايكروسوفت D365 للمالية والعمليات",
"A solution": "حل يساعد على تبسيط المالية والعمليات والمخزون وكشوف الرواتب، ودعم اتخاذ القرار من خلال رؤى فورية.",
"Microsoft": "مايكروسوفت D365 بيزنس سنترال هو حل متكامل يعمل على تبسيط المالية والمبيعات وخدمة العملاء وإدارة المخزون مع رؤى فورية لاتخاذ قرارات أفضل.",
"ERP Development": "تطوير ERP",
"What we provide":"ماذا نقدم لكم",

  "erp_for_pharmaceutical_industries": "نظام ERP للصناعات الدوائية يعمل على تحسين إدارة المخزون، الإنتاج، الامتثال التنظيمي، والإدارة المالية، مما يعزز الكفاءة والدقة واتخاذ القرارات عبر العمليات.",
"ERP_for_Pharmaceutical_Industries": "ERP لصناعات الأدوية",

  "ERP_development": "تطوير ERP يتضمن تصميم وتخصيص أنظمة ERP لتلبية احتياجات الأعمال، تبسيط العمليات، وتعزيز الكفاءة والقابلية للتوسع.",
  
    "ERP_Consultation_and_Implementation": "استشارات وتنفيذ ERP",
    "ERP_Consultation_and_Implementation_Services": "خدمات استشارات وتنفيذ ERP تساعد الشركات في اختيار وتخصيص ودمج أنظمة ERP لتحسين العمليات والكفاءة.",
    "Our_Methodology": "منهجيتنا",
     "Efficient_Workflow": "سير العمل الفعال",
      "Our_Process": "تم تصميم عمليتنا لضمان الكفاءة والجودة في كل مشروع نتعامل معه.",
  "Achieve_Success": "تحقيق النجاح",
   "We_Begin": "نبدأ بفهم أهدافك ومتطلباتك لبناء أساس قوي للمشروع.",
    "Develop_Strategies": "تطوير الاستراتيجيات",
     "Our_Team_Collaborates": "يعمل فريقنا معًا لإنشاء خطة مفصلة، مما يضمن تنفيذًا سلسًا ونتائج مثلى.",
      "Define_Objectives": "حدد الأهداف",
        "Team_Collaboration": "يتعاون فريقنا لإنشاء خطة مفصلة، مما يضمن تنفيذ سلس ونتائج مثالية.",
   "Why_Choose_Us": "لماذا تختارنا",
     "Unlock_Your_Business_Potential_with_FITS": "افتح إمكانيات عملك مع FITS",
  


     "Why_Choose_Usp": "حقق أقصى استفادة من استثمارك: بصفتنا شركاء معتمدين من مايكروسوفت وإيبيكور، نضمن لك الاستفادة القصوى من استثمارك في ERP. تبسيط العمليات: حلولنا المخصصة وتنفيذنا الخبير يعززان الكفاءة ويحسنان العمليات التجارية. تحقيق ميزة تنافسية: استفد من قوة منصات ERP الرائدة لتحسين اتخاذ القرارات والبقاء في صدارة المنافسة. تجربة راحة البال: دعمنا الشامل ونهجنا الاستباقي يضمنان أن يعمل نظام ERP بسلاسة، مما يسمح لك بالتركيز على أعمالك الأساسية. شراكة يمكنك الوثوق بها: نحن ملتزمون بنجاحك، نقدم تواصل شفاف ونبني علاقات طويلة الأمد.",
    


     "Speed_of_Operation": "سرعة العمليات",
     "High_Quality": "جودة عالية",
     "Customizability": "قابلة للتخصيص",
     "Easy_Integration": "تكامل سهل",
     "Excellent_Support": "دعم ممتاز",
     "Powerful_Analytics": "تحليلات قوية",

  "Stay_Updated_with_Our_Partners_Tweets": "تابع آخر تغريدات شركائنا",
   "More_Info": "مزيد من المعلومات",
     "Some_Companies_Weve_Worked_With": "بعض الشركات التي عملنا معها",
           "Join_Our_Growing_List_Of_Satisfied_Customers": "انضم إلى قائمة عملائنا الراضين التي تنمو باستمرار",
           "Join_Our_Team": "انضم إلى فريقنا",
            "Apply_for_a_Job": "قدم لوظيفة",
             "Fill_out_the_form_to_apply_for_a_position_with_us": "املأ النموذج للتقديم على وظيفة معنا.",
"Why_do_you_want_to_join_us": "لماذا ترغب في الانضمام إلينا؟",
            
           "Submit": "إرسال",
  "Sending": "جاري الإرسال",
  "ERP_Solution": "حل ERP شامل يبسط العمليات التجارية من المالية إلى إدارة سلسلة الإمداد",
   "ERP_Cloud_Solution": "نظام ERP سحابي يحسن إدارة المالية، العمليات، وكفاءة سلسلة الإمداد",
             "ERP_Business_Management_Solution": "حل إدارة الأعمال الشامل للمالية، المبيعات، خدمة العملاء، والعمليات",
        "ERP_Specialized_Pharmaceutical": "نظام ERP متخصص يضمن الامتثال، يدير المخزون، ويعزز الكفاءة في الأعمال الصيدلانية",
  "ERP_Consultation_Services": "خدمات تساعد الشركات في اختيار وتخصيص ودمج أنظمة ERP من أجل تحسين الكفاءة",
   "ERP_Customization_Services": "تخصيص وبناء حلول ERP لتحسين العمليات التجارية وقابلية التوسع",
    "Epicor_ERP_Overview": "إيبيكور ERP: نظرة شاملة",
    "Epicor_ERP_Description": "إيبيكور ERP هو نظام تخطيط موارد المؤسسات المتطور المصمم لتحسين العمليات التجارية، وزيادة الكفاءة، وتوفير رؤى لحظية. تم تصميمه خصيصًا للصناعات مثل التصنيع، والتوزيع، والتجزئة، والخدمات، ويوفر إيبيكور حلاً مرنًا وقابلًا للتوسع لتلبية احتياجات الأعمال المتنوعة.",
 "Why_Choose_Epicor_ERP": "لماذا تختار إيبيكور ERP؟",
  "AI_Automation": "الذكاء الاصطناعي والأتمتة",
   "User_Friendly_Interface": "واجهة مستخدم سهلة الاستخدام",
    "Modern_Intuitive_UI": "واجهة مستخدم حديثة وبديهية تسهل التنقل وتعزز تجربة المستخدم",
      "AI_Predictive_Analytics": "استخدم الذكاء الاصطناعي للتحليلات التنبؤية وتدفقات العمل المؤتمتة",
       "Cloud_OnPremise": "السحابة والمحلي",
         "Flexible_Deployment": "خيارات نشر مرنة تتكيف مع بنية عملك التحتية.",
          
           "Customizable_Solutions": "حلول قابلة للتخصيص مصممة للتصنيع والتجزئة والمزيد.",
            "Industry_Specific_Solutions": "حلول متخصصة حسب الصناعة",
            "Industries_Benefiting_Epicor": "الصناعات المستفيدة من نظام Epicor ERP",
              "Manufacturing": "التصنيع",
              "Healthcare": "الرعاية الصحية",
              "Automotive": "صناعة السيارات",
              "Distribution": "التوزيع",
              "Retail": "التجزئة",
                "Benefits of Using Epicor ERP": "فوائد استخدام نظام Epicor ERP",
                 "Improved operational efficiency and productivity": "تحسين الكفاءة التشغيلية والإنتاجية", "Enhanced decision-making through data-driven insights": "تعزيز اتخاذ القرار من خلال رؤى مستندة إلى البيانات",
                  "Streamlined supply chain and inventory management": "إدارة سلسلة التوريد والمخزون بسلاسة",
                  "Better customer relationship management": "إدارة علاقات العملاء بشكل أفضل",

                  "What is Epicor ERP?": "إيبيكور ERP هو نظام تخطيط موارد المؤسسات (ERP) مصمم لمساعدة الشركات في إدارة العمليات مثل التصنيع والمالية وسلسلة الإمداد وإدارة العملاء.",
                  "What are the key features of Epicor ERP?": "مرونة التخصيص، دعم قوي للتصنيع، التكامل السلس مع الأنظمة الأخرى، تقارير وتحليلات متقدمة، وواجهة مستخدم سهلة.",
                  "Is Epicor ERP suitable for small and medium-sized businesses?": "نعم، يوفر إيبيكور حلول مرنة تناسب الشركات بجميع الأحجام، مع خيارات التوسع بناءً على احتياجات العمل.",
                  "What languages and databases does Epicor ERP support?": "يدعم بشكل أساسي SQL Server كقاعدة بيانات ويستخدم C# و .NET للتطوير.",
                  "Can Epicor ERP integrate with other systems?": "نعم، يمكن تكامل إيبيكور مع الأنظمة الأخرى عبر APIs أو أدوات التكامل مثل Epicor Service Connect.",
                  "What is Microsoft D365 Finance and Operations?": "هو نظام ERP من مايكروسوفت يساعد في إدارة العمليات المالية والتشغيلية، ويستهدف الشركات الكبيرة.",
                  "What is the difference between D365 Finance and D365 Supply Chain Management?": "D365 Finance يركز على المحاسبة والإدارة المالية، بينما D365 Supply Chain Management يركز على الإنتاج وعمليات سلسلة الإمداد.",
                  "Can Microsoft D365 Finance and Operations be customized?": "نعم، يمكن تخصيصه باستخدام Power Apps و Power Automate ولغة التطوير الخاصة به (X++).",
                  "What hosting options are available for D365 Finance and Operations?": "يتم استضافته عبر السحابة من خلال Azure، مع خيارات تكامل للأنظمة المحلية.",
                  "Does Microsoft D365 Finance and Operations support financial compliance?": "نعم، يدعم الامتثال للمعايير المحاسبية الدولية واللوائح الضريبية المختلفة.",
                  "What is the difference between Microsoft D365 Business Central and D365 Finance and Operations?": "Business Central مخصص للشركات الصغيرة والمتوسطة، بينما Finance and Operations مخصص للشركات الكبيرة والمعقدة.",
                  "What are the key features of Business Central?": "إدارة مالية، إدارة المخزون وسلسلة الإمداد، المبيعات والمشتريات، تكامل مع Microsoft 365، وتحليلات مدمجة.",
                  "Can Business Central integrate with external applications?": "نعم، يدعم التكامل مع Power BI و Power Apps و Dynamics 365 CRM.",
                  "Does Business Central support customization?": "نعم، يمكن تخصيصه باستخدام Visual Studio Code و AL Language.",
                  "What are the hosting options for Business Central?": "يمكن استضافته على السحابة عبر Azure أو نشره محليًا حسب احتياجات العمل.",
                  "What is ERP development?": "يتعلق بتصميم وتطوير وتخصيص وتنفيذ حلول ERP لتلبية احتياجات الأعمال.",
                  "What skills are needed for ERP development?": "معرفة بقواعد البيانات (SQL)، البرمجة (C#، .NET، X++، JavaScript)، تحليل البيانات، وعمليات الأعمال.",
                  "What are the best programming languages for ERP development?": "C#، .NET، Java، Python، ولغات التخصيص مثل AL لـ Business Central.",
                  "Can an open-source ERP be developed?": "نعم، يمكن تخصيص حلول مفتوحة المصدر مثل Odoo و ERPNext لتلبية احتياجات الأعمال.",
                  "What are the biggest challenges in ERP development?": "تعقيد العمليات التجارية، تكامل البيانات، الأمان، وسهولة الاستخدام.",
                  "What is the role of an ERP consultant?": "تحليل احتياجات الأعمال، اختيار النظام المناسب، الإشراف على التنفيذ، وتدريب الموظفين.",
                  "What are the key stages of ERP implementation?": "التخطيط، تحليل المتطلبات، التخصيص والتخصيص، الاختبار، التدريب، وبدء التشغيل.",
                  "How long does it take to implement an ERP system?": "يعتمد على حجم الشركة وتعقيدها، ولكن عادة ما يستغرق عدة أشهر إلى سنة.",
                  "Can data be migrated from an old system to a new ERP?": "نعم، يتم نقل البيانات باستخدام أدوات متخصصة لضمان الدقة والسلامة.",
                  "What are the main challenges in ERP implementation?": "مقاومة التغيير، تكاليف التنفيذ العالية، تكامل النظام، والتدريب الكافي للموظفين.",
                  "Why do pharmaceutical companies need ERP systems?": "لتنفيذ الامتثال التنظيمي، تتبع عمليات سلسلة الإمداد، تحسين الإنتاج، وإدارة مراقبة الجودة.",
                  "What features should an ERP system have for the pharmaceutical industry?": "تتبع الدُفعات، إدارة سلسلة الإمداد، الامتثال للمعايير (مثل FDA و GMP)، وتقارير مفصلة.",
                  "Are there ERP systems specialized for the pharmaceutical sector?": "نعم، حلول مثل SAP للأدوية، Epicor Pharma Solutions، و Microsoft D365 تلبي احتياجات هذه الصناعة.",
                  "How does ERP help in regulatory compliance for pharmaceuticals?": "من خلال تمكين تتبع المواد الخام تلقائيًا، إدارة مراقبة الجودة، والحفاظ على سجلات الإنتاج الدقيقة.",
                  "Can an ERP system integrate with laboratory systems in the pharmaceutical industry?": "نعم، يمكن تكامل ERP مع أنظمة إدارة المعلومات المخبرية (LIMS) لضمان دقة التحليل الجودة.",




                  
                    "Epicor ERP is an enterprise resource planning (ERP) system designed to help businesses manage operations such as manufacturing, finance, supply chain, and customer management.": "Epicor ERP هو نظام تخطيط موارد المؤسسات (ERP) مصمم لمساعدة الشركات على إدارة العمليات مثل التصنيع والتمويل وسلسلة التوريد وإدارة العملاء.",
                    
                    "Customization flexibility, strong support for manufacturing, seamless integration with other systems, advanced reporting and analytics, and user-friendly interface.": "مرونة التخصيص، دعم قوي للتصنيع، تكامل سلس مع الأنظمة الأخرى، تقارير وتحليلات متقدمة، وواجهة مستخدم سهلة الاستخدام.",
                    
                    "Yes, Epicor provides flexible solutions that fit businesses of all sizes, with scalability options based on business needs.": "نعم، تقدم Epicor حلولًا مرنة تناسب الشركات من جميع الأحجام، مع خيارات قابلة للتطوير بناءً على احتياجات العمل.",
                    
                    "It primarily supports SQL Server as the database and uses C# and .NET for development.": "يدعم أساسًا SQL Server كقاعدة بيانات ويستخدم C# و .NET للتطوير.",
                    
                    "Yes, it can integrate with other systems via APIs or integration tools like Epicor Service Connect.": "نعم، يمكنه التكامل مع الأنظمة الأخرى عبر APIs أو أدوات التكامل مثل Epicor Service Connect.",
                    
                    "It is an ERP system from Microsoft that helps manage financial and operational processes, targeting large enterprises.": "هو نظام ERP من Microsoft يساعد في إدارة العمليات المالية والتشغيلية، ويستهدف الشركات الكبيرة.",
                    
                    "D365 Finance focuses on accounting and financial management, while D365 Supply Chain Management focuses on production and supply chain processes.": "يركز D365 Finance على المحاسبة والإدارة المالية، بينما يركز D365 Supply Chain Management على الإنتاج وعمليات سلسلة التوريد.",
                    
                    "Yes, it can be customized using Power Apps, Power Automate, and its development language (X++).": "نعم، يمكن تخصيصه باستخدام Power Apps و Power Automate ولغته البرمجية (X++).",
                    
                    "It is cloud-based via Azure, with integration options for on-premise systems.": "يتم استضافته على السحابة عبر Azure، مع خيارات تكامل مع الأنظمة المحلية.",
                    
                    "Yes, it supports compliance with international accounting standards and various tax regulations.": "نعم، يدعم الامتثال للمعايير المحاسبية الدولية واللوائح الضريبية المختلفة.",
                    
                    "Business Central is designed for small and medium-sized businesses, while Finance and Operations is meant for large and complex enterprises.": "تم تصميم Business Central للشركات الصغيرة والمتوسطة، بينما تم تصميم Finance and Operations للشركات الكبيرة والمعقدة.",
                    
                    "Financial management, inventory and supply chain management, sales and purchasing, Microsoft 365 integration, and built-in analytics.": "إدارة مالية، إدارة المخزون وسلسلة التوريد، المبيعات والشراء، تكامل مع Microsoft 365، وتحليلات مدمجة.",
                    
                    "Yes, it supports integration with Power BI, Power Apps, and Dynamics 365 CRM.": "نعم، يدعم التكامل مع Power BI و Power Apps و Dynamics 365 CRM.",
                    
                    "Yes, it can be customized using Visual Studio Code and AL Language.": "نعم، يمكن تخصيصه باستخدام Visual Studio Code و AL Language.",
                    
                    "It can be hosted on the cloud via Azure or deployed on-premise based on business needs.": "يمكن استضافته على السحابة عبر Azure أو نشره محليًا بناءً على احتياجات العمل.",
                    
                    "It involves designing, developing, customizing, and implementing ERP solutions to meet business requirements.": "يشمل تصميم وتطوير وتخصيص وتنفيذ حلول ERP لتلبية متطلبات العمل.",
                    
                    "Knowledge of databases (SQL), programming (C#, .NET, X++, JavaScript), data analysis, and business processes.": "معرفة قواعد البيانات (SQL)، البرمجة (C#، .NET، X++، JavaScript)، تحليل البيانات، وعمليات العمل.",
                    
                    "C#, .NET, Java, Python, and customization languages like AL for Business Central.": "C#، .NET، Java، Python، ولغات التخصيص مثل AL لـ Business Central.",
                    
                    "Yes, open-source solutions like Odoo and ERPNext can be customized to meet business needs.": "نعم، يمكن تخصيص الحلول مفتوحة المصدر مثل Odoo و ERPNext لتلبية احتياجات العمل.",
                    
                    "Business process complexity, data integration, security, and user-friendliness.": "تعقيد العمليات التجارية، تكامل البيانات، الأمان، وسهولة الاستخدام.",
                    
                    "Analyzing business needs, selecting the right system, overseeing implementation, and training employees.": "تحليل احتياجات العمل، اختيار النظام الصحيح، الإشراف على التنفيذ، وتدريب الموظفين.",
                    
                    "Planning, requirements analysis, configuration and customization, testing, training, and go-live.": "التخطيط، تحليل المتطلبات، التكوين والتخصيص، الاختبار، التدريب، والانتقال إلى الإنتاج.",
                    
                    "It depends on the company’s size and complexity but typically takes several months to a year.": "يعتمد على حجم وتعقيد الشركة، ولكنه عادة ما يستغرق عدة أشهر إلى سنة.",
                    
                    "Yes, data migration is done using specialized tools to ensure accuracy and integrity.": "نعم، يتم ترحيل البيانات باستخدام أدوات متخصصة لضمان الدقة والسلامة.",
                    
                    "Resistance to change, high implementation costs, system integration, and adequate training for employees.": "المقاومة للتغيير، التكاليف العالية للتنفيذ، تكامل النظام، والتدريب المناسب للموظفين.",
                    
                    "To ensure regulatory compliance, track supply chain operations, optimize production, and manage quality control.": "لضمان الامتثال التنظيمي، تتبع عمليات سلسلة التوريد، تحسين الإنتاج، وإدارة التحكم في الجودة.",
                    
                    "Batch tracking, supply chain management, compliance with quality standards (e.g., FDA, GMP), and detailed reporting.": "تتبع الدُفعات، إدارة سلسلة التوريد، الامتثال للمعايير الجودة (مثل FDA و GMP)، وتقارير مفصلة.",
                    
                    "Yes, solutions like SAP for Pharmaceuticals, Epicor Pharma Solutions, and Microsoft D365 cater to the industry’s needs.": "نعم، الحلول مثل SAP للصناعات الدوائية، Epicor Pharma Solutions، و Microsoft D365 تلبي احتياجات الصناعة.",
                    
                    "By enabling automatic tracking of raw materials, managing quality control, and maintaining accurate production records.": "من خلال تمكين تتبع المواد الخام تلقائيًا، وإدارة التحكم في الجودة، والحفاظ على سجلات الإنتاج الدقيقة.",
                    
                    "Yes, it can be integrated with Laboratory Information Management Systems (LIMS) to ensure accurate quality analysis.": "نعم، يمكن دمجه مع أنظمة إدارة المعلومات المختبرية (LIMS) لضمان تحليل الجودة بشكل دقيق.",
                  
                  






                    "Still have questions": "هل لديك أسئلة أخرى؟",
                    "Can’t find the answer you’re looking for? Please chat to our friendly team.": "لم تجد الإجابة التي تبحث عنها؟ يمكنك الدردشة مع فريقنا الودود.",
                 

 "ERP Development is an essential": "تطوير أنظمة ERP هو جانب أساسي من إدارة الأعمال الحديثة. تعمل أنظمة ERP على دمج العمليات الأساسية للأعمال مثل المالية، الموارد البشرية، سلسلة التوريد، وإدارة المخزون في نظام واحد مترابط، مما يحسن رؤية البيانات واتخاذ القرارات.",

 "Why Choose ERP Development?":"لماذا تختار تطوير تخطيط موارد المؤسسات (ERP)؟",
 "Streamlined Business Processes":"عمليات الأعمال المبسطة",
 "Unify":"توحيد كافة العمليات التجارية في منصة واحدة، مما يقلل من التعقيد وانعدام الكفاءة.",

 "Real-Time Data & Analytics":"البيانات والتحليلات في الوقت الفعلي",
 "Access up-to-date":"احصل على معلومات محدثة واتخذ قرارات مستنيرة باستخدام تحليلات البيانات في الوقت الفعلي.",

 "Improved Collaboration":"تحسين التعاون",

 "Enhance cross-departmental":"تعزيز التواصل والتعاون بين الإدارات من خلال البيانات المشتركة وسير العمل.",
 "Cost Reduction":"تخفيض التكلفة",

 "Reduce operational":"تقليل التكاليف التشغيلية عن طريق أتمتة المهام وتحسين تخصيص الموارد.",
 "Industries Benefiting from ERP Development":"الصناعات المستفيدة من تطوير تخطيط موارد المؤسسات",
"Finance":"المالية",
"Education":"التعليم",
"Benefits of ERP Development":"فوائد تطوير تخطيط موارد المؤسسات",
"Centralized data management and access":"إدارة البيانات والوصول إليها مركزيًا",
"Improved reporting and business insights":"تحسين التقارير ورؤى الأعمال",
"Enhanced scalability for business growth":"تعزيز قابلية التوسع لنمو الأعمال",

"Streamlined compliance and regulatory reporting":"تبسيط الامتثال والتقارير التنظيمية",
"Increased productivity with automated processes":"زيادة الإنتاجية مع العمليات الآلية",
"ERP Development Process":"عملية تطوير تخطيط موارد المؤسسات",
"Business needs assessment and requirement gathering":"تقييم احتياجات الأعمال وجمع المتطلبات",
"ERP system customization and integration":"تخصيص وتكامل نظام تخطيط موارد المؤسسات (ERP)",
"Training employees and end-users":"تدريب الموظفين والمستخدمين النهائيين",
"Deployment and post-launch support":"النشر والدعم بعد الإطلاق",
"Continuous updates and optimization":"التحديثات والتحسينات المستمرة",
"Data migration and system testing":"نقل البيانات واختبار النظام",
"Conclusion":"خاتمة",
"ERP development is an investment":"يُعد تطوير أنظمة تخطيط موارد المؤسسات (ERP) استثمارًا في تبسيط العمليات التجارية وضمان قابلية التوسع على المدى الطويل. باختيار نظام تخطيط موارد المؤسسات (ERP)، يُمكن للشركات أتمتة سير العمل، وتحسين عملية اتخاذ القرارات، والحفاظ على قدرتها التنافسية في سوق دائم التغير.",
"If you want more information":"إذا كنت تريد المزيد من المعلومات",
"ERP Consultation & Implementation: A Complete Guide":"استشارة وتنفيذ تخطيط موارد المؤسسات (ERP): دليل كامل",

"ERP consultation":"تساعد خدمات استشارات وتطبيق أنظمة تخطيط موارد المؤسسات (ERP) الشركات على تبسيط عملياتها وتحسينها ورفع كفاءتها. يرشد الخبراء الاستشاريون الشركات خلال اختيار وتخصيص وتطبيق حلول تخطيط موارد المؤسسات (ERP) المصممة خصيصًا لاحتياجاتها.",
"Why Choose ERP Consultation?":"لماذا تختار استشارة تخطيط موارد المؤسسات (ERP)؟",
"Expert Guidance":"إرشادات الخبراء",
"Experienced professionals help you select and implement the best ERP solution.":"يساعدك المحترفون ذوو الخبرة في اختيار وتنفيذ أفضل حلول تخطيط موارد المؤسسات (ERP).",

"Customized Solutions":"حلول مخصصة",
"ERP systems tailored to your business requirements and industry standards.":"أنظمة تخطيط موارد المؤسسات (ERP) مصممة خصيصًا لتلبية متطلبات عملك ومعايير الصناعة.",
"Seamless Integration":"التكامل السلس",
"Ensure smooth integration with existing tools and workflows.":"ضمان التكامل السلس مع الأدوات وسير العمل الموجودة.",
"Long-Term Support":"الدعم طويل الأمد",
"Ongoing maintenance and optimization for sustained success.":"الصيانة المستمرة والتحسين لتحقيق النجاح المستدام.",
"Industries Benefiting from ERP Consultation":"الصناعات المستفيدة من استشارات تخطيط موارد المؤسسات",
"Logistics":"اللوجستية",
"Benefits of ERP Consultation":"فوائد استشارة تخطيط موارد المؤسسات",

"Enhanced business process efficiency":"تحسين كفاءة العمليات التجارية",
"Cost-effective ERP implementation":"تنفيذ تخطيط موارد المؤسسات (ERP) بتكلفة فعالة",
"Better decision-making with real-time insights":"اتخاذ قرارات أفضل مع رؤى في الوقت الفعلي",
"Seamless cross-department collaboration":"التعاون السلس بين الإدارات",
"Improved data accuracy and reporting":"تحسين دقة البيانات وإعداد التقارير",
"ERP Implementation Process":"عملية تنفيذ تخطيط موارد المؤسسات",
"ERP selection and customization":"اختيار وتخصيص تخطيط موارد المؤسسات (ERP)",
"System configuration and data migration":"تكوين النظام ونقل البيانات",
"Business needs assessment":"تقييم احتياجات الأعمال",
"Testing and validation":"الاختبار والتحقق",
"Employee training and deployment":"تدريب الموظفين ونشرهم",
"Post-implementation support":"دعم ما بعد التنفيذ",
"ERP consultation and implementation":"تُزوّد ​​خدمات استشارات وتطبيق أنظمة تخطيط موارد المؤسسات (ERP) الشركات بالخبرة اللازمة لنشر نظام تخطيط موارد المؤسسات وصيانته بنجاح. باتباع النهج الصحيح، يُمكن للشركات تحسين الكفاءة وخفض التكاليف وتحقيق نجاح طويل الأمد.",





















      }
    }
  },
  lng: "en", // اللغة الافتراضية
  fallbackLng: "en", // في حال لم تكن اللغة موجودة
  interpolation: {
    escapeValue: false // React already safes from xss
  }
});

export default i18n;
