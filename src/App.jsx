import React from 'react'
import './App.css'

const stylists = [
  {
    id: 1,
    name: "Sarah Johnson",
    address: "123 Main Street, Downtown, NY 10001",
    rate: "$85/hour",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 4:00 PM",
    willingToTravel: "Yes, within 15 miles",
    yearsOfExperience: "12 years",
    specialty: "Modern cuts and color techniques",
    services: [
      { name: "Haircut", duration: "45 minutes" },
      { name: "Hair Color", duration: "2 hours" },
      { name: "Highlights", duration: "2.5 hours" },
      { name: "Blowout", duration: "30 minutes" },
      { name: "Haircut & Color", duration: "2.5 hours" }
    ],
    about: "With over 10 years of experience in the industry, Sarah specializes in modern cuts and color techniques. She is known for her attention to detail and personalized approach to each client's unique style."
  },
  {
    id: 2,
    name: "Michael Chen",
    address: "456 Oak Avenue, Midtown, NY 10018",
    rate: "$95/hour",
    hours: "Tue-Sat: 10:00 AM - 7:00 PM, Sun: 11:00 AM - 5:00 PM",
    willingToTravel: "Yes, within 25 miles",
    yearsOfExperience: "15 years",
    specialty: "Precision cuts and balayage",
    services: [
      { name: "Precision Cut", duration: "60 minutes" },
      { name: "Balayage", duration: "3 hours" },
      { name: "Ombre", duration: "2.5 hours" },
      { name: "Color Correction", duration: "4 hours" },
      { name: "Styling", duration: "45 minutes" }
    ],
    about: "Michael is a master stylist with expertise in precision cuts and balayage. His creative vision and technical skills have earned him recognition in top fashion magazines. He believes in enhancing natural beauty."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    address: "789 Park Boulevard, Uptown, NY 10025",
    rate: "$75/hour",
    hours: "Mon-Thu: 8:00 AM - 5:00 PM, Fri-Sat: 9:00 AM - 6:00 PM",
    willingToTravel: "No, salon only",
    yearsOfExperience: "7 years",
    specialty: "Classic and contemporary techniques",
    services: [
      { name: "Classic Cut", duration: "40 minutes" },
      { name: "Color Treatment", duration: "1.5 hours" },
      { name: "Perm", duration: "3 hours" },
      { name: "Deep Conditioning", duration: "20 minutes" },
      { name: "Updo", duration: "1 hour" }
    ],
    about: "Emily brings a fresh perspective to hair styling with her background in both classic and contemporary techniques. She is passionate about helping clients find their perfect look and creating styles that boost confidence."
  }
]

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Hair Stylists</h1>
        <p className="subtitle">Find your perfect stylist</p>
      </header>
      
      <main className="main-content">
        <div className="stylists-container">
          {stylists.map((stylist) => (
            <div key={stylist.id} className="stylist-card">
              <h2 className="stylist-name">{stylist.name}</h2>
              <div className="stylist-info">
                <p className="stylist-address">
                  <span className="label">Address:</span> {stylist.address}
                </p>
                <p className="stylist-rate">
                  <span className="label">Rate:</span> {stylist.rate}
                </p>
                <p className="stylist-hours">
                  <span className="label">Hours:</span> {stylist.hours}
                </p>
                <p className="stylist-travel">
                  <span className="label">Willing to travel to customer:</span> {stylist.willingToTravel}
                </p>
                <p className="stylist-experience">
                  <span className="label">Years of Experience:</span> {stylist.yearsOfExperience}
                </p>
                <p className="stylist-specialty">
                  <span className="label">Speciality:</span> {stylist.specialty}
                </p>
                <div className="stylist-services">
                  <span className="label">Services:</span>
                  <div className="services-list">
                    {stylist.services.map((service, index) => (
                      <div key={index} className="service-item">
                        <span className="service-name">{service.name}</span>
                        <span className="service-duration">{service.duration}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="stylist-about">
                  <span className="label">About:</span>
                  <p className="about-text">{stylist.about}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
