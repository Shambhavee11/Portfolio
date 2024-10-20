import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    github,
    html,
    linkedin,
    python,
    java,
    pricewise,
    threads,
    snapgram,
    summiz,
    estate,
    flask,
    sql, // Import C icon
    cpp, // Import C++ icon
    bash,
    hotel,
    phishing,
    lock,
    C
} from "../assets/icons";

export const skills = [
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Programming Language",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Programming Language",
    },
    {
        imageUrl: flask,
        name: "Flask",
        type: "Web Framework in Python",
    },
    {
        imageUrl: sql,
        name: "SQL",
        type: "Database",
    },
    {
        imageUrl: C, // Add C to skills
        name: "C",
        type: "Programming Language",
    },
    {
        imageUrl: cpp, // Add C++ to skills
        name: "C++",
        type: "Programming Language",
    },
    {
        imageUrl: bash, // Add Bash to skills
        name: "Bash",
        type: "Scripting Language",
    }
];



export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Shambhavee11',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/shambhavee-shukla-283b61253',
    }
];

export const projects = [
    {
        iconUrl: phishing,
        theme: 'btn-back-green',
        name: 'Spam and Phishing Detection',
        description: 'Developed a robust detection system using SVM and Decision Trees, achieving 98% accuracy through sophisticated data preprocessing techniques.',
        link: 'https://github.com/Shambhavee11/Phising-Sites-and-Email-SMS-Spam-Detector',
    },
    {
        iconUrl: lock,
        theme: 'btn-back-black',
        name: ' Two-Factor Authentication OTP Generator',
        description: 'Created a secure authentication system using PyOTP and Python, implementing HOTP and TOTP algorithms for enhanced security.',
        link: 'https://github.com/Shambhavee11/2-Factor-authentication-Otp-generator',
    },
    {
        iconUrl: hotel,
        theme: 'btn-back-pink',
        name: 'Blue Haze Restaurant Website (Prototype)',
        description: 'Created a restaurant website prototype that is entirely responsive and compliant with current web standards, guaranteeing top performance on a range of devices.',
        link: 'https://shambhavee11.github.io/BLUE_HAZE_BOOTSTRAP/',
    },
    
    // Add projects related to C++ or Bash if applicable
];
