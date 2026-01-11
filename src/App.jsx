import React from 'react'
import './App.css'

const stylists = [
  {
    id: 1,
    name: "Sarah Johnson",
    profilePicture: "https://i.pravatar.cc/200?img=1",
    address: "123 Main Street, Downtown, NY 10001",
    email: "sarah.johnson@hairstudio.com",
    phone: "(212) 555-0123",
    rate: "$85/hour",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 4:00 PM",
    currentAvailability: "Available this week",
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
    about: "With over 10 years of experience in the industry, Sarah specializes in modern cuts and color techniques. She is known for her attention to detail and personalized approach to each client's unique style.",
    portfolio: [
      "https://images.unsplash.com/photo-1560869713-7d0a8b9b0a0a?w=400",
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400",
      "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=400",
      "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=400"
    ]
  },
  {
    id: 2,
    name: "Michael Chen",
    profilePicture: "https://i.pravatar.cc/200?img=2",
    address: "456 Oak Avenue, Midtown, NY 10018",
    email: "michael.chen@hairstudio.com",
    phone: "(212) 555-0456",
    rate: "$95/hour",
    hours: "Tue-Sat: 10:00 AM - 7:00 PM, Sun: 11:00 AM - 5:00 PM",
    currentAvailability: "Limited availability - next opening in 2 weeks",
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
    about: "Michael is a master stylist with expertise in precision cuts and balayage. His creative vision and technical skills have earned him recognition in top fashion magazines. He believes in enhancing natural beauty.",
    portfolio: [
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400",
      "https://images.unsplash.com/photo-1560869713-7d0a8b9b0a0a?w=400",
      "https://images.unsplash.com/photo-1515191107209-c28698631303?w=400"
    ]
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    profilePicture: "https://i.pravatar.cc/200?img=3",
    address: "789 Park Boulevard, Uptown, NY 10025",
    email: "emily.rodriguez@hairstudio.com",
    phone: "(212) 555-0789",
    rate: "$75/hour",
    hours: "Mon-Thu: 8:00 AM - 5:00 PM, Fri-Sat: 9:00 AM - 6:00 PM",
    currentAvailability: "Available next week",
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
    about: "Emily brings a fresh perspective to hair styling with her background in both classic and contemporary techniques. She is passionate about helping clients find their perfect look and creating styles that boost confidence.",
    portfolio: [
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400",
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400"
    ]
  },
  {
    id: 4,
    name: "Jessica Martinez",
    profilePicture: "https://i.pravatar.cc/200?img=4",
    address: "321 Broadway, SoHo, NY 10013",
    email: "jessica.martinez@hairstudio.com",
    phone: "(212) 555-0234",
    rate: "$90/hour",
    hours: "Mon-Wed: 10:00 AM - 6:00 PM, Thu-Fri: 11:00 AM - 7:00 PM, Sat: 9:00 AM - 5:00 PM",
    currentAvailability: "Available this week",
    willingToTravel: "Yes, within 20 miles",
    yearsOfExperience: "8 years",
    specialty: "Vintage and retro styling",
    services: [
      { name: "Vintage Cut", duration: "50 minutes" },
      { name: "Retro Styling", duration: "1.5 hours" },
      { name: "Pin Curls", duration: "2 hours" },
      { name: "Vintage Updo", duration: "1.5 hours" },
      { name: "Color & Style", duration: "3 hours" }
    ],
    about: "Jessica specializes in vintage and retro hair styling, bringing classic Hollywood glamour to modern clients. Her attention to period-accurate techniques has made her a favorite for themed events and period productions.",
    portfolio: [
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400",
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400"
    ]
  },
  {
    id: 5,
    name: "David Kim",
    profilePicture: "https://i.pravatar.cc/200?img=5",
    address: "567 Lexington Avenue, Upper East Side, NY 10022",
    email: "david.kim@hairstudio.com",
    phone: "(212) 555-0345",
    rate: "$100/hour",
    hours: "Mon-Fri: 8:00 AM - 5:00 PM",
    currentAvailability: "Fully booked - next opening in 3 weeks",
    willingToTravel: "No, salon only",
    yearsOfExperience: "18 years",
    specialty: "Asian hair techniques and keratin treatments",
    services: [
      { name: "Asian Hair Cut", duration: "55 minutes" },
      { name: "Keratin Treatment", duration: "2.5 hours" },
      { name: "Straightening", duration: "3 hours" },
      { name: "Texturizing", duration: "1 hour" },
      { name: "Consultation & Cut", duration: "1.5 hours" }
    ],
    about: "David is renowned for his expertise in Asian hair types and advanced keratin treatments. With nearly two decades of experience, he combines traditional techniques with modern innovations to achieve stunning results.",
    portfolio: [
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400",
      "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
    ]
  },
  {
    id: 6,
    name: "Amanda Thompson",
    profilePicture: "https://i.pravatar.cc/200?img=6",
    address: "890 5th Avenue, Upper West Side, NY 10021",
    email: "amanda.thompson@hairstudio.com",
    phone: "(212) 555-0457",
    rate: "$80/hour",
    hours: "Tue-Sat: 9:00 AM - 6:00 PM, Sun: 10:00 AM - 4:00 PM",
    currentAvailability: "Available next week",
    willingToTravel: "Yes, within 10 miles",
    yearsOfExperience: "6 years",
    specialty: "Natural hair and protective styles",
    services: [
      { name: "Natural Hair Cut", duration: "45 minutes" },
      { name: "Protective Style", duration: "2 hours" },
      { name: "Braids", duration: "3 hours" },
      { name: "Twists", duration: "2.5 hours" },
      { name: "Deep Treatment", duration: "1 hour" }
    ],
    about: "Amanda specializes in natural hair care and protective styling. She is passionate about healthy hair practices and helping clients embrace their natural texture while maintaining beautiful, manageable styles.",
    portfolio: [
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400",
      "https://images.unsplash.com/photo-1582095133178-3f714427a5b9?w=400",
      "https://images.unsplash.com/photo-1614289371518-722f2615943d?w=400",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
    ]
  },
  {
    id: 7,
    name: "Robert Williams",
    profilePicture: "https://i.pravatar.cc/200?img=7",
    address: "234 Park Avenue, Midtown East, NY 10017",
    email: "robert.williams@hairstudio.com",
    phone: "(212) 555-0568",
    rate: "$70/hour",
    hours: "Mon-Fri: 10:00 AM - 7:00 PM, Sat: 9:00 AM - 5:00 PM",
    currentAvailability: "Available this week",
    willingToTravel: "Yes, within 30 miles",
    yearsOfExperience: "5 years",
    specialty: "Men's grooming and fades",
    services: [
      { name: "Men's Cut", duration: "30 minutes" },
      { name: "Fade", duration: "45 minutes" },
      { name: "Beard Trim", duration: "20 minutes" },
      { name: "Hot Towel Shave", duration: "30 minutes" },
      { name: "Cut & Style", duration: "1 hour" }
    ],
    about: "Robert is a specialist in men's grooming with expertise in modern fades and classic cuts. His precision and attention to detail have made him a go-to stylist for professional men seeking a polished look.",
    portfolio: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400"
    ]
  },
  {
    id: 8,
    name: "Lisa Anderson",
    profilePicture: "https://i.pravatar.cc/200?img=8",
    address: "678 Madison Avenue, Upper East Side, NY 10065",
    email: "lisa.anderson@hairstudio.com",
    phone: "(212) 555-0679",
    rate: "$110/hour",
    hours: "Wed-Sun: 10:00 AM - 6:00 PM",
    currentAvailability: "Limited availability - next opening in 1 week",
    willingToTravel: "Yes, within 15 miles",
    yearsOfExperience: "20 years",
    specialty: "Bridal and special event styling",
    services: [
      { name: "Bridal Consultation", duration: "1 hour" },
      { name: "Bridal Updo", duration: "2 hours" },
      { name: "Special Event Styling", duration: "1.5 hours" },
      { name: "Trial Run", duration: "2.5 hours" },
      { name: "Hair & Makeup", duration: "3 hours" }
    ],
    about: "Lisa is a master of bridal and special event hair styling with two decades of experience. Her elegant and timeless designs have graced countless weddings and red carpet events throughout New York.",
    portfolio: [
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=400",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400",
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=400",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400"
    ]
  },
  {
    id: 9,
    name: "James Taylor",
    profilePicture: "https://i.pravatar.cc/200?img=9",
    address: "145 West 57th Street, Midtown, NY 10019",
    email: "james.taylor@hairstudio.com",
    phone: "(212) 555-0780",
    rate: "$65/hour",
    hours: "Mon-Sat: 9:00 AM - 6:00 PM",
    currentAvailability: "Available this week",
    willingToTravel: "No, salon only",
    yearsOfExperience: "4 years",
    specialty: "Quick cuts and express services",
    services: [
      { name: "Express Cut", duration: "25 minutes" },
      { name: "Quick Style", duration: "20 minutes" },
      { name: "Wash & Go", duration: "30 minutes" },
      { name: "Trim", duration: "15 minutes" },
      { name: "Blow Dry", duration: "25 minutes" }
    ],
    about: "James specializes in efficient, high-quality cuts for busy professionals. His express services are perfect for those who need a great look without spending hours in the salon.",
    portfolio: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
    ]
  },
  {
    id: 10,
    name: "Maria Garcia",
    profilePicture: "https://i.pravatar.cc/200?img=10",
    address: "432 Columbus Avenue, Upper West Side, NY 10024",
    email: "maria.garcia@hairstudio.com",
    phone: "(212) 555-0891",
    rate: "$88/hour",
    hours: "Mon-Thu: 9:00 AM - 7:00 PM, Fri-Sat: 10:00 AM - 6:00 PM",
    currentAvailability: "Available next week",
    willingToTravel: "Yes, within 12 miles",
    yearsOfExperience: "11 years",
    specialty: "Curly hair and texture work",
    services: [
      { name: "Curly Cut", duration: "1 hour" },
      { name: "Deva Cut", duration: "1.5 hours" },
      { name: "Curly Styling", duration: "45 minutes" },
      { name: "Texture Treatment", duration: "2 hours" },
      { name: "Curly Consultation", duration: "1 hour" }
    ],
    about: "Maria is an expert in curly and textured hair, specializing in the Deva Cut method. She helps clients embrace and enhance their natural curl pattern with personalized care and styling techniques.",
    portfolio: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400",
      "https://images.unsplash.com/photo-1582095133178-3f714427a5b9?w=400",
      "https://images.unsplash.com/photo-1614289371518-722f2615943d?w=400"
    ]
  },
  {
    id: 11,
    name: "Christopher Brown",
    profilePicture: "https://i.pravatar.cc/200?img=11",
    address: "789 Greenwich Street, West Village, NY 10014",
    email: "christopher.brown@hairstudio.com",
    phone: "(212) 555-0902",
    rate: "$92/hour",
    hours: "Tue-Sat: 11:00 AM - 8:00 PM, Sun: 12:00 PM - 6:00 PM",
    currentAvailability: "Available this week",
    willingToTravel: "Yes, within 18 miles",
    yearsOfExperience: "9 years",
    specialty: "Edgy and alternative styles",
    services: [
      { name: "Alternative Cut", duration: "1 hour" },
      { name: "Undercut", duration: "50 minutes" },
      { name: "Color Transformation", duration: "3.5 hours" },
      { name: "Fashion Color", duration: "4 hours" },
      { name: "Creative Styling", duration: "1.5 hours" }
    ],
    about: "Christopher is known for his bold, edgy styles and creative color work. He specializes in alternative and fashion-forward looks, helping clients express their unique personality through their hair.",
    portfolio: [
      "https://images.unsplash.com/photo-1582095133178-3f714427a5b9?w=400",
      "https://images.unsplash.com/photo-1614289371518-722f2615943d?w=400",
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
    ]
  },
  {
    id: 12,
    name: "Patricia Lee",
    profilePicture: "https://i.pravatar.cc/200?img=12",
    address: "321 Bleecker Street, Greenwich Village, NY 10012",
    email: "patricia.lee@hairstudio.com",
    phone: "(212) 555-1013",
    rate: "$105/hour",
    hours: "Mon-Fri: 9:00 AM - 5:00 PM",
    currentAvailability: "Fully booked - next opening in 4 weeks",
    willingToTravel: "No, salon only",
    yearsOfExperience: "22 years",
    specialty: "Classic elegance and timeless styles",
    services: [
      { name: "Classic Cut", duration: "50 minutes" },
      { name: "Elegant Updo", duration: "2 hours" },
      { name: "French Twist", duration: "1.5 hours" },
      { name: "Classic Color", duration: "2.5 hours" },
      { name: "Full Service", duration: "4 hours" }
    ],
    about: "Patricia brings over two decades of experience in classic, elegant styling. Her timeless approach and meticulous attention to detail have made her a favorite among clients seeking sophisticated, refined looks.",
    portfolio: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400",
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=400",
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=400"
    ]
  },
  {
    id: 13,
    name: "Daniel White",
    profilePicture: "https://i.pravatar.cc/200?img=13",
    address: "654 Spring Street, SoHo, NY 10012",
    email: "daniel.white@hairstudio.com",
    phone: "(212) 555-1124",
    rate: "$78/hour",
    hours: "Mon-Sat: 10:00 AM - 7:00 PM",
    currentAvailability: "Available next week",
    willingToTravel: "Yes, within 22 miles",
    yearsOfExperience: "6 years",
    specialty: "Hair extensions and volumizing",
    services: [
      { name: "Extension Consultation", duration: "1 hour" },
      { name: "Tape-In Extensions", duration: "2.5 hours" },
      { name: "Clip-In Extensions", duration: "1 hour" },
      { name: "Volumizing Treatment", duration: "1.5 hours" },
      { name: "Extension Maintenance", duration: "1.5 hours" }
    ],
    about: "Daniel specializes in hair extensions and volumizing techniques. He helps clients achieve their desired length and volume through expertly applied extension methods and volumizing treatments.",
    portfolio: [
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400",
      "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400"
    ]
  }
]

function App() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedSpecialty, setSelectedSpecialty] = React.useState('all');
  const [selectedRate, setSelectedRate] = React.useState('all');
  const [selectedTravel, setSelectedTravel] = React.useState('all');
  const [selectedStylistId, setSelectedStylistId] = React.useState(null);
  const [showRegistration, setShowRegistration] = React.useState(false);
  const [registrationServices, setRegistrationServices] = React.useState([{ name: '', duration: '' }]);

  // Get unique values for filters
  const specialties = [...new Set(stylists.map(s => s.specialty))];
  const rates = [...new Set(stylists.map(s => s.rate))].sort((a, b) => {
    const numA = parseInt(a.replace(/[^0-9]/g, ''));
    const numB = parseInt(b.replace(/[^0-9]/g, ''));
    return numA - numB;
  });

  const filteredStylists = stylists.filter((stylist) => {
    // Search filter
    const query = searchQuery.toLowerCase();
    const matchesSearch = !searchQuery || (
      stylist.name.toLowerCase().includes(query) ||
      stylist.address.toLowerCase().includes(query) ||
      stylist.email.toLowerCase().includes(query) ||
      stylist.phone.toLowerCase().includes(query) ||
      stylist.specialty.toLowerCase().includes(query) ||
      stylist.rate.toLowerCase().includes(query) ||
      stylist.hours.toLowerCase().includes(query) ||
      stylist.currentAvailability.toLowerCase().includes(query) ||
      stylist.willingToTravel.toLowerCase().includes(query) ||
      stylist.yearsOfExperience.toLowerCase().includes(query) ||
      stylist.about.toLowerCase().includes(query) ||
      stylist.services.some(service => 
        service.name.toLowerCase().includes(query)
      )
    );

    // Specialty filter
    const matchesSpecialty = selectedSpecialty === 'all' || stylist.specialty === selectedSpecialty;

    // Rate filter
    const matchesRate = selectedRate === 'all' || stylist.rate === selectedRate;

    // Travel filter
    const matchesTravel = selectedTravel === 'all' || 
      (selectedTravel === 'yes' && stylist.willingToTravel.toLowerCase().includes('yes')) ||
      (selectedTravel === 'no' && stylist.willingToTravel.toLowerCase().includes('no'));

    return matchesSearch && matchesSpecialty && matchesRate && matchesTravel;
  });

  const selectedStylist = stylists.find(s => s.id === selectedStylistId);
  
  // Find similar stylists based on shared services
  const getSimilarStylists = (stylist) => {
    if (!stylist) return [];
    return stylists.filter(otherStylist => {
      if (otherStylist.id === stylist.id) return false;
      const stylistServiceNames = stylist.services.map(s => s.name.toLowerCase());
      const otherServiceNames = otherStylist.services.map(s => s.name.toLowerCase());
      return stylistServiceNames.some(service => otherServiceNames.includes(service));
    }).slice(0, 6);
  };

  // If a stylist is selected, show detail page
  if (selectedStylist) {
    const similarStylists = getSimilarStylists(selectedStylist);
    
    return (
      <div className="app">
        <header className="header">
          <button 
            className="back-button"
            onClick={() => setSelectedStylistId(null)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Stylists
          </button>
          <h1>{selectedStylist.name}</h1>
          <p className="subtitle">{selectedStylist.specialty}</p>
        </header>
        
        <main className="main-content detail-page">
          <div className="detail-container">
            <div className="detail-main">
              <div className="detail-image-section">
                <img 
                  src={selectedStylist.profilePicture} 
                  alt={selectedStylist.name}
                  className="detail-profile-picture"
                />
              </div>
              
              <div className="detail-info-section">
                <div className="detail-info-card">
                  <h2 className="detail-section-title">Contact Information</h2>
                  <div className="detail-contact-info">
                    <p><span className="label">Address:</span> {selectedStylist.address}</p>
                    <p><span className="label">Email:</span> <a href={`mailto:${selectedStylist.email}`}>{selectedStylist.email}</a></p>
                    <p><span className="label">Phone:</span> <a href={`tel:${selectedStylist.phone}`}>{selectedStylist.phone}</a></p>
                  </div>
                  
                  <h2 className="detail-section-title">Pricing & Availability</h2>
                  <div className="detail-pricing-info">
                    <p><span className="label">Rate:</span> {selectedStylist.rate}</p>
                    <p><span className="label">Hours:</span> {selectedStylist.hours}</p>
                    <p><span className="label">Current Availability:</span> {selectedStylist.currentAvailability}</p>
                    <p><span className="label">Willing to Travel:</span> {selectedStylist.willingToTravel}</p>
                  </div>
                  
                  <h2 className="detail-section-title">Experience</h2>
                  <p><span className="label">Years of Experience:</span> {selectedStylist.yearsOfExperience}</p>
                </div>
                
                <div className="detail-info-card">
                  <h2 className="detail-section-title">Services Offered</h2>
                  <div className="detail-services-list">
                    {selectedStylist.services.map((service, index) => (
                      <div key={index} className="detail-service-item">
                        <span className="service-name">{service.name}</span>
                        <span className="service-duration">{service.duration}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="detail-info-card">
                  <h2 className="detail-section-title">About</h2>
                  <p className="detail-about-text">{selectedStylist.about}</p>
                </div>
              </div>
            </div>
            
            {selectedStylist.portfolio && selectedStylist.portfolio.length > 0 && (
              <div className="portfolio-section">
                <h2 className="detail-section-title portfolio-title">Previous Work</h2>
                <div className="portfolio-gallery">
                  {selectedStylist.portfolio.map((imageUrl, index) => (
                    <div key={index} className="portfolio-item">
                      <img 
                        src={imageUrl} 
                        alt={`Previous work ${index + 1}`}
                        className="portfolio-image"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {similarStylists.length > 0 && (
            <div className="similar-stylists-section">
              <h2 className="similar-section-title">Similar Stylists</h2>
              <div className="similar-stylists-carousel">
                {similarStylists.map((similarStylist) => (
                  <div 
                    key={similarStylist.id} 
                    className="similar-stylist-item"
                    onClick={() => setSelectedStylistId(similarStylist.id)}
                  >
                    <img 
                      src={similarStylist.profilePicture} 
                      alt={similarStylist.name}
                      className="similar-item-picture"
                    />
                    <div className="similar-item-info">
                      <h3 className="similar-item-name">{similarStylist.name}</h3>
                      <p className="similar-item-specialty">{similarStylist.specialty}</p>
                      <p className="similar-item-rate">{similarStylist.rate}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    );
  }

  // Show registration page
  if (showRegistration) {
    return (
      <div className="app">
        <header className="header">
          <button 
            className="back-button"
            onClick={() => setShowRegistration(false)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back
          </button>
          <h1>Become a Stylist</h1>
          <p className="subtitle">Join our community of talented hair stylists</p>
        </header>
        
        <main className="main-content">
          <div className="registration-container">
            <form className="registration-form" onSubmit={(e) => {
              e.preventDefault();
              alert('Registration submitted! (This is a demo - no data is saved)');
              setShowRegistration(false);
            }}>
              <div className="form-section">
                <h2 className="form-section-title">Account Information</h2>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password *</label>
                  <input type="password" id="password" name="password" required minLength="6" />
                </div>
              </div>

              <div className="form-section">
                <h2 className="form-section-title">Personal Information</h2>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="profilePicture">Profile Picture URL</label>
                  <input type="url" id="profilePicture" name="profilePicture" placeholder="https://example.com/image.jpg" />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address *</label>
                  <input type="text" id="address" name="address" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input type="tel" id="phone" name="phone" required />
                </div>
              </div>

              <div className="form-section">
                <h2 className="form-section-title">Professional Details</h2>
                <div className="form-group">
                  <label htmlFor="specialty">Specialty *</label>
                  <input type="text" id="specialty" name="specialty" required placeholder="e.g., Modern cuts and color techniques" />
                </div>
                <div className="form-group">
                  <label htmlFor="yearsOfExperience">Years of Experience *</label>
                  <input type="text" id="yearsOfExperience" name="yearsOfExperience" required placeholder="e.g., 5 years" />
                </div>
                <div className="form-group">
                  <label htmlFor="rate">Rate per Hour *</label>
                  <input type="text" id="rate" name="rate" required placeholder="e.g., $75/hour" />
                </div>
                <div className="form-group">
                  <label htmlFor="hours">Business Hours *</label>
                  <input type="text" id="hours" name="hours" required placeholder="e.g., Mon-Fri: 9:00 AM - 6:00 PM" />
                </div>
                <div className="form-group">
                  <label htmlFor="currentAvailability">Current Availability *</label>
                  <input type="text" id="currentAvailability" name="currentAvailability" required placeholder="e.g., Available this week" />
                </div>
                <div className="form-group">
                  <label htmlFor="willingToTravel">Willing to Travel *</label>
                  <select id="willingToTravel" name="willingToTravel" required>
                    <option value="">Select an option</option>
                    <option value="Yes, within 10 miles">Yes, within 10 miles</option>
                    <option value="Yes, within 15 miles">Yes, within 15 miles</option>
                    <option value="Yes, within 20 miles">Yes, within 20 miles</option>
                    <option value="Yes, within 25 miles">Yes, within 25 miles</option>
                    <option value="Yes, within 30 miles">Yes, within 30 miles</option>
                    <option value="No, salon only">No, salon only</option>
                  </select>
                </div>
              </div>

              <div className="form-section">
                <h2 className="form-section-title">About</h2>
                <div className="form-group">
                  <label htmlFor="about">About Yourself *</label>
                  <textarea id="about" name="about" rows="5" required placeholder="Tell us about your experience and style..."></textarea>
                </div>
              </div>

              <div className="form-section">
                <h2 className="form-section-title">Services</h2>
                <div className="form-group">
                  <label>Services Offered (Add at least one service)</label>
                  <div className="services-input-container">
                    {registrationServices.map((service, index) => (
                      <div key={index} className="service-input-row">
                        <input 
                          type="text" 
                          className="service-name-input" 
                          placeholder="Service name (e.g., Haircut)" 
                          value={service.name}
                          onChange={(e) => {
                            const newServices = [...registrationServices];
                            newServices[index].name = e.target.value;
                            setRegistrationServices(newServices);
                          }}
                        />
                        <input 
                          type="text" 
                          className="service-duration-input" 
                          placeholder="Duration (e.g., 45 minutes)" 
                          value={service.duration}
                          onChange={(e) => {
                            const newServices = [...registrationServices];
                            newServices[index].duration = e.target.value;
                            setRegistrationServices(newServices);
                          }}
                        />
                        {registrationServices.length > 1 && (
                          <button 
                            type="button" 
                            className="remove-service-button"
                            onClick={() => {
                              setRegistrationServices(registrationServices.filter((_, i) => i !== index));
                            }}
                          >
                            Remove
                          </button>
                        )}
                      </div>
                    ))}
                    <button 
                      type="button" 
                      className="add-service-button"
                      onClick={() => {
                        setRegistrationServices([...registrationServices, { name: '', duration: '' }]);
                      }}
                    >
                      Add Service
                    </button>
                  </div>
                </div>
              </div>

              <div className="form-actions">
                <button type="submit" className="submit-button">Register as Stylist</button>
                <button type="button" className="cancel-button" onClick={() => setShowRegistration(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </main>
      </div>
    );
  }

  // Show list view
  return (
    <div className="app">
      <header className="header">
        <button 
          className="register-stylist-button"
          onClick={() => setShowRegistration(true)}
        >
          I am a stylist
        </button>
        <h1>Hair Stylists</h1>
        <p className="subtitle">Find your perfect stylist</p>
      </header>
      
      <main className="main-content">
        <div className="search-container">
          <div className="search-wrapper">
            <button 
              type="button" 
              className="search-button"
              aria-label="Search"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </button>
            <input
              type="text"
              className="search-input"
              placeholder="Search by name, specialty, services, location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                type="button"
                className="clear-button"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            )}
          </div>
        </div>

        <div className="filters-container">
          <div className="filter-group">
            <label htmlFor="specialty-filter" className="filter-label">Specialty</label>
            <select
              id="specialty-filter"
              className="filter-select"
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
            >
              <option value="all">All Specialties</option>
              {specialties.map((specialty) => (
                <option key={specialty} value={specialty}>{specialty}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="rate-filter" className="filter-label">Rate</label>
            <select
              id="rate-filter"
              className="filter-select"
              value={selectedRate}
              onChange={(e) => setSelectedRate(e.target.value)}
            >
              <option value="all">All Rates</option>
              {rates.map((rate) => (
                <option key={rate} value={rate}>{rate}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="travel-filter" className="filter-label">Travel</label>
            <select
              id="travel-filter"
              className="filter-select"
              value={selectedTravel}
              onChange={(e) => setSelectedTravel(e.target.value)}
            >
              <option value="all">All</option>
              <option value="yes">Willing to Travel</option>
              <option value="no">Salon Only</option>
            </select>
          </div>

          {(selectedSpecialty !== 'all' || selectedRate !== 'all' || selectedTravel !== 'all') && (
            <button
              className="clear-filters-button"
              onClick={() => {
                setSelectedSpecialty('all');
                setSelectedRate('all');
                setSelectedTravel('all');
              }}
            >
              Clear Filters
            </button>
          )}
        </div>
        
        <div className="stylists-container">
          {filteredStylists.length === 0 ? (
            <div className="no-results">
              <div className="no-results-icon">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </div>
              <h3 className="no-results-title">No stylists found</h3>
              <p className="no-results-message">Try adjusting your search terms or browse all stylists</p>
            </div>
          ) : (
            filteredStylists.map((stylist) => (
            <div 
              key={stylist.id}
              className="stylist-card"
              onClick={() => setSelectedStylistId(stylist.id)}
            >
              <div className="stylist-header">
                <img 
                  src={stylist.profilePicture} 
                  alt={stylist.name}
                  className="stylist-profile-picture"
                />
                <h2 className="stylist-name">{stylist.name}</h2>
              </div>
              <div className="stylist-info">
                <p className="stylist-address">
                  <span className="label">Address:</span> {stylist.address}
                </p>
                <div className="stylist-contact">
                  <span className="label">Contact:</span>
                  <div className="contact-info">
                    <p className="stylist-email">
                      <span className="contact-label">Email:</span> <a href={`mailto:${stylist.email}`} onClick={(e) => e.stopPropagation()}>{stylist.email}</a>
                    </p>
                    <p className="stylist-phone">
                      <span className="contact-label">Phone:</span> <a href={`tel:${stylist.phone}`} onClick={(e) => e.stopPropagation()}>{stylist.phone}</a>
                    </p>
                  </div>
                </div>
                <p className="stylist-rate">
                  <span className="label">Rate:</span> {stylist.rate}
                </p>
                <p className="stylist-hours">
                  <span className="label">Hours:</span> {stylist.hours}
                </p>
                <p className="stylist-availability">
                  <span className="label">Current Availability:</span> {stylist.currentAvailability}
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
            ))
          )}
        </div>
      </main>
    </div>
  )
}

export default App
