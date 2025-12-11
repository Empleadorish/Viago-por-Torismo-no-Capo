// src/App.jsx
import React from 'react';
import HeroSection from './components/HeroSection.jsx';
import PopularTours from './components/PopularTours.jsx';
import AboutSection from './components/AboutSection.jsx';
import Gallery from './components/Gallery.jsx';
import BookingForm from './components/BookingForm.jsx';
import Contact from './components/Contact.jsx';


export default function App() {
return (
<>
<HeroSection />
<PopularTours />
<AboutSection />
<Gallery />
<BookingForm />
<Contact />
</>
);
}




/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;


body {
font-family: 'Inter', sans-serif;
background-color: #f7fafc;
margin: 0;
padding: 0;
}


a {
text-decoration: none;
}


button {
cursor: pointer;
}