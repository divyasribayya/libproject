import React from 'react';
import { FaHeartbeat  } from 'react-icons/fa';
import { BsUmbrella } from "react-icons/bs";
import { IoPeopleOutline } from "react-icons/io5";
import { FaUserShield , FaCarBurst } from "react-icons/fa6";

export const constants = {
    logo: require('../assets/logo.png'),
    bikebg:require('../assets/bike/bikeinsurance.png'),
    resbg:require('../assets/bike/responsivebg.png'),
    bike_img_1:require("../assets/bike/insurancetype1.png"),
    bike_img_2:require("../assets/bike/insurancetype2.png"),
    bike_img_3:require("../assets/bike/insurancetype3.png"),
    home_img_1:require("../assets/Home/about_img_1.png"),
home_img_2:require("../assets/Home/about-img_2.png"),
home_img_3:require("../assets/Home/about_img-3.png"),
home_work_process_1:require("../assets/Home/work_process_img_1.png"),
home_work_process_2:require("../assets/Home/work_process_img_2.png"),
home_work_process_3:require("../assets/Home/work_process_img_3.png"),
why_choose_img:require("../assets/Home/why_choose_img.png"),
customersatisfaction_img:require("../assets/Home/customersatisfaction_img.png"),
home_bg_img:require("../assets/Home/home_bg_img.png"),
family_pic:require("../assets/Home/family_pic.png"),
};

export const heroBannerContent = {
  heading: "Secure Your Future",
  subHeading: "Insurance Solutions by Legacy Insurance Brokers: Comprehensive coverage for auto, home, life, and business, ensuring security and peace of mind.",
  buttonText: "Get a Quote",
  contactInfo: "+91 891-943-9603",
  image: require("../assets/Home/family_pic.png"),
  backgroundImage: require("../assets/Home/family_bg_img.png"),
  responsive_bg_img:require("../assets/Home/responsive_family_bg.png")
};

export const insuranceContent = {
  heading: "Explore Our Bike Insurance Options",
  description: "Discover the perfect bike insurance plan for your needs. From basic protection to comprehensive coverage, we offer tailored solutions to safeguard your bike and ensure peace of mind on every ride.",
  plans: [
    {
      image: require("../assets/bike/insurancetype1.png"), 
      title: "Comprehensive Bike Insurance",
      text: "Protect your bike against a wide range of risks with our comprehensive insurance plan. This coverage includes protection from accidents, theft, fire, and natural disasters, ensuring that your bike is always secure, no matter the situation.",
      features: [
        "Coverage for accidental damage",
        "Protection against theft and vandalism",
        "Coverage for natural disasters and fire",
        "Optional add-ons like zero depreciation and engine protection",
      ],
    },
    {
      image: require("../assets/bike/insurancetype2.png"),
      title: "Third-Party Liability Bike Insurance",
      text: "Stay legally compliant and protect yourself from financial liabilities with our third-party liability insurance. This plan covers damages to other vehicles, property, or individuals in case of an accident involving your bike.",
      features: [
        "Extended accidental damage coverage",
        "24/7 roadside assistance",
        "Additional protection against accidental damage",
        "Flexible coverage options",
      ],
    },
    {
      image: require("../assets/bike/insurancetype3.png"),
      title: "Accidental Damage Coverage",
      text: "Our accidental damage coverage ensures that your bike is protected against unforeseen events, providing financial support for repairs or replacement if needed. Ideal for riders seeking additional peace of mind on the road.",
      features: [
        "Comprehensive accidental damage coverage",
        "Financial support for repairs and replacement",
        "Flexible terms and conditions",
        "Quick claim process",
      ],
    },
  ],
};
export const whyUsContent = {
  subHeading: "Why Choose Us",
  heading: "Why Legacy Insurance Brokers Stand Out in the Insurance Industry",
  features: [
    {
      img: require("../assets/Home/choose_img_1.svg"),
      title: "Extensive Experience and Expertise",
      description:
        "Years of industry experience and specialized knowledge enable us to deliver superior insurance solutions and navigate complex needs effectively."
    },
    {
      img: require("../assets/Home/choose_img-2.svg"),
      title: "Broad Coverage Options",
      description:
        "Offering a wide range of insurance plans to meet diverse needs, ensuring comprehensive protection for auto, home, health, and life."
    },
    {
      img: require("../assets/Home/choose_img-3.svg"),
      title: "Customer-Centric Service",
      description:
        "Dedicated to personalized service, we prioritize your needs, providing tailored solutions and responsive support to enhance your insurance experience."
    }
  ],
  imageSrc: require("../assets/Home/why_choose_img.png"),
  customerSatisfactionSrc: require("../assets/Home/customersatisfaction_img.png"),
};
export const services = [
  {
    id: 1,
    title: "Health Insurance",
    description: "Health insurance plans that cover medical expenses, and emergencies, safeguarding your well-being and financial security.",
    icon: FaHeartbeat, 
    link: "#",
  },
  {
    id: 2,
    title: "Life Insurance",
    description: "Life insurance policies designed to provide financial security for your loved ones, ensuring peace of mind for the future.",
    icon: BsUmbrella, 
    link: "#",
  },
];
export const pricingPlans = [
  {
    price: "$3500 *",
    title: "Basic Plans",
    description: "Essential coverage for your bike at an affordable rate.",
    coverages: [
      "10GB Storage",
      "Basic Support",
      "Access to all features",
    ],
    keyFeatures: [
      "24/7 Customer Service",
      "No setup fees",
      "Cancel anytime"
    ],
    background: '#E6F6FA',
    color: '#000',
  },
  {
    price: "$6500 *",
    title: "Standard Plan",
    description: "Comprehensive protection with added benefits for peace of mind.",
    coverages: [
      "50GB Storage",
      "Priority Support",
      "Advanced features",
    ],
    keyFeatures: [
      "Dedicated account manager",
      "Free onboarding session",
      "Exclusive resources"
    ],
    background: '#024656',
    color: '#fff',
  },
  {
    price: "$8500 *",
    title: "Premium Plan",
    description: "Top-tier coverage with extensive features for complete security.",
    coverages: [
      "Unlimited Storage",
      "24/7 Priority Support",
      "All premium features",
    ],
    keyFeatures: [
      "Personalized consultation",
      "Advanced analytics",
      "Custom integrations"
    ],
    background: '#E6F6FA',
    color: '#000',
  }
];


export const serviceList  = [
  {
    icon: '🚗', 
    title: 'Car Insurance',
    description: 'Comprehensive car insurance coverage ensures protection against accidents, theft, and damage, offering peace of mind .'
  },
  {
    icon: '🚴', 
    title: 'Bike Insurance',
    description: 'Reliable bike insurance providing coverage for accidents, theft, and damage, ensuring your ride is always secure and protected.'
  },
  {
    icon: '☂️', 
    title: 'Life Insurance',
    description: 'Life insurance policies designed to provide financial security for your loved ones, ensuring peace of mind for the future.'
  },
  {
    icon: '❤️', 
    title: 'Health Insurance',
    description: 'Health insurance plans that cover medical expenses, and emergencies, safeguarding your well-being and financial security.'
  }
];

export const products = {
  Car: [
    { name: 'Third Party', icon: <IoPeopleOutline size={50} color="#FF4600" /> },
    { name: 'Comprehensive', icon: <FaUserShield size={50} color="#FF4600" /> },
    { name: 'Own Damage', icon: <FaCarBurst size={50} color="#FF4600" /> },

  ],
  Bike: [
    { name: 'Third Party', icon: <IoPeopleOutline size={50} color="#FF4600" /> },
    { name: 'Comprehensive', icon: <FaUserShield size={50} color="#FF4600" /> },
    { name: 'Own Damage', icon: <FaCarBurst size={50} color="#FF4600" /> }
  ],
  Health: [
    { name: 'Individual Health', icon: <IoPeopleOutline size={50} color="#FF4600" /> },
    { name: 'Family Health', icon: <FaUserShield size={50} color="#FF4600" /> }
  ],
  Life: [
    { name: 'Term Life', icon: <IoPeopleOutline size={50} color="#FF4600" /> },
    { name: 'Whole Life', icon: <FaUserShield size={50} color="#FF4600" /> }
  ]
};
export const recordStats = [
  { number: '3L+', text: 'Trained Advisors' },
  { number: '45L+', text: 'Happy Customers' },
  { number: '45+', text: 'Insurance Partners' },
  { number: '1 Cr+', text: 'Policies Sold' },
];
export const faqContent = {
  subTitle: "FAQs",
  title: "Answers to Your Questions",
  faqs: [
    {
      question: "What is Bike insurance?",
      answer: "Bike insurance provides financial protection for your motorcycle and its rider. It covers damage from accidents, theft, and other risks, while also offering liability coverage for injuries or damages caused to others."
    },
    {
      question: "Why do I need Bike insurance?",
      answer: "Bike insurance is essential to cover unexpected damages or accidents. It protects you financially and ensures you can handle liabilities arising from injuries or damages to others."
    },
    {
      question: "What are the different types of Bike insurance?",
      answer: "There are various types of bike insurance, including comprehensive coverage, third-party liability coverage, and personal accident cover, each offering different levels of protection."
    },
    {
      question: "How much Bike insurance coverage do I need?",
      answer: "The amount of bike insurance coverage you need depends on various factors, including the value of your bike, your usage, and personal preferences. It's advisable to get enough coverage to handle significant repairs or replacements and liabilities."
    }
  ],
  footerText: "When selecting a bike insurance policy online, it's crucial to evaluate several key factors to ensure you get the best coverage for your needs. First, determine the type of plan that suits you, such as a comprehensive policy for broader protection or third-party insurance for basic coverage. Next, use online comparison tools to assess different policies based on features, premiums, and value."
};
export const bikecontent = {
  bikeInsurance: {
    heading: {
      textBefore: "What is",
      textSpan: "Bike Insurance?"
    },
    description: [
      "Bike insurance is an agreement between a bike owner and an insurance company, where the insurer promises to provide financial support to the owner in the event of damage to the bike due to unforeseen circumstances.",
      "This coverage typically includes protection against accidents, theft, and various types of damage. Depending on the policy, it may also offer additional benefits such as roadside assistance, coverage for a temporary replacement bike, and protection against liability for injuries or property damage caused to others."
    ],
    imageSrc: require('../assets/bike/aboutinsurance.png'), 
    altText: "Bike Insurance"
  }
};


export const servicesData = [
  {
    category: "Dairy, Bread & Eggs",
    items: [
      "Butter",
      "Milk Drinks",
      "Curd & Yogurt",
      "Eggs",
      "Buns & Bakery",
      "Cheese",
      "Condensed Milk",
      "Dairy Products",
    ],
  },
  {
    category: "Breakfast & Instant Food",
    items: [
      "Breakfast Cereal",
      "Noodles, Pasta & Soup",
      "Frozen Veg Snacks",
      "Frozen Non-Veg Snacks",
      "Vermicelli",
      "Instant Mixes",
      "Batter",
      "Fruit and Juices",
    ],
  },
  {
    category: "Cold Drinks & Juices",
    items: [
      "Soft Drinks",
      "Fruit Juices",
      "Coldpress",
      "Water & Ice Cubes",
      "Soda & Mixers",
      "Health Drinks",
      "Herbal Drinks",
      "Milk Drinks",
    ],
  },
];
export const partnerData = [
  { link: '/products/financial-management-systems', imgSrc: "https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/brand-logos/fujifilm.svg", alt: 'Finance' },
  { link: '/products/hr-managament-software', imgSrc: "https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/brand-logos/vodafone.svg", alt: 'HRMS' },
  { link: '/products/Ecommerce-software', imgSrc: "	https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/brand-logos/aspnetzero.svg", alt: 'Ecommerce' },
  { link: '/products/trading-software', imgSrc: "	https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/brand-logos/nasa.svg", alt: 'Trading' },
  { link: '/products/point-of-sale', imgSrc: "https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/brand-logos/aon.svg", alt: 'POS' },
  { link: '/products/customer-relationship-management', imgSrc: "https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/brand-logos/hp-3.svg", alt: 'CRM' },
  { link: '/products/financial-management-systems', imgSrc: "https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/brand-logos/fujifilm.svg", alt: 'Finance' },
  { link: '/products/financial-management-systems', imgSrc: "https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/brand-logos/fujifilm.svg", alt: 'Finance' }
];


export const testimonialsData = [
  {
    name: "Nagender Sadanala",
    testimonial: "Tech Cloud Solutions provide us a great ERP software. They have a fantastic ERP product which covers all the modules for manufacturers and trading companies and they provided 24*7 support.Thanks to team.",
    // image: require("../assets/Testimonials/testi1.png"),
    altText: "nagender_rathod_img"
},
{
    name: "Sunilkumar Padavala",
    testimonial: "Tech Cloud ERP offers a wide range of out-of-the-box features with  customization functions to fit various needs. We can create unlimited it's a lifetime ERP with no renewals. Very good software at a lesser cost.",
    altText: "sunil_img"
},
{
    name: "Sushmanth Vaibhav",
    testimonial: "One of the main reason for choosing Tech Cloud ERP was the robustness and flexibility it offered to suit our business needs. We have found it unique and it proves to be the best ERP for our medical devices manufacturing industry.",
    altText: "ferrero_img"
},
{
    name: "Anusha",
    testimonial: " I am using Tech Cloud ERP software for my Medical Services business. I’m very happy with the software. I’m using seamlessly the last 3 years and their support is really good.A big thanks for the Tech Cloud ERP team.",
    altText: "anusha_img"
},
{
    name: "Prerna Prasad",
    testimonial: "Tech Cloud ERP, has provided me the best ERP software which i have been using past 4 years, quite reasonable showing really good results. It has simplified my work and made it pretty efficient.",
    altText: "prerna_img"
},
{
    name: "Alekhya Poloju",
    testimonial: "This software exactly suits for any kind of manufacturing/trading businesses. The price of the software is very less compared to other softwares in the market. The best cloud based software with GST incorporated.",
    altText: "alekhya_img"
},
{
    name: "Manikanta Varma",
    testimonial: " I enthusiastically recommended Tech Cloud ERP to several other businesses. It's great to work with Tech Cloud ERP team. Even, at the highest level (owners and executives) they take a personal interest in their clients and have a deep understanding of their product.",
    altText: "manikanta_img"
},
];