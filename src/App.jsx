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
    about: "With over 10 years of experience in the industry, Sarah specializes in modern cuts and color techniques. She is known for her attention to detail and personalized approach to each client's unique style."
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
    about: "Michael is a master stylist with expertise in precision cuts and balayage. His creative vision and technical skills have earned him recognition in top fashion magazines. He believes in enhancing natural beauty."
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
    about: "Emily brings a fresh perspective to hair styling with her background in both classic and contemporary techniques. She is passionate about helping clients find their perfect look and creating styles that boost confidence."
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
    about: "Jessica specializes in vintage and retro hair styling, bringing classic Hollywood glamour to modern clients. Her attention to period-accurate techniques has made her a favorite for themed events and period productions."
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
    about: "David is renowned for his expertise in Asian hair types and advanced keratin treatments. With nearly two decades of experience, he combines traditional techniques with modern innovations to achieve stunning results."
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
    about: "Amanda specializes in natural hair care and protective styling. She is passionate about healthy hair practices and helping clients embrace their natural texture while maintaining beautiful, manageable styles."
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
    about: "Robert is a specialist in men's grooming with expertise in modern fades and classic cuts. His precision and attention to detail have made him a go-to stylist for professional men seeking a polished look."
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
    about: "Lisa is a master of bridal and special event hair styling with two decades of experience. Her elegant and timeless designs have graced countless weddings and red carpet events throughout New York."
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
    about: "James specializes in efficient, high-quality cuts for busy professionals. His express services are perfect for those who need a great look without spending hours in the salon."
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
    about: "Maria is an expert in curly and textured hair, specializing in the Deva Cut method. She helps clients embrace and enhance their natural curl pattern with personalized care and styling techniques."
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
    about: "Christopher is known for his bold, edgy styles and creative color work. He specializes in alternative and fashion-forward looks, helping clients express their unique personality through their hair."
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
    about: "Patricia brings over two decades of experience in classic, elegant styling. Her timeless approach and meticulous attention to detail have made her a favorite among clients seeking sophisticated, refined looks."
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
    about: "Daniel specializes in hair extensions and volumizing techniques. He helps clients achieve their desired length and volume through expertly applied extension methods and volumizing treatments."
  }
]

function App() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredStylists = stylists.filter((stylist) => {
    const query = searchQuery.toLowerCase();
    return (
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
  });

  return (
    <div className="app">
      <header className="header">
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
            <div key={stylist.id} className="stylist-card">
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
                      <span className="contact-label">Email:</span> <a href={`mailto:${stylist.email}`}>{stylist.email}</a>
                    </p>
                    <p className="stylist-phone">
                      <span className="contact-label">Phone:</span> <a href={`tel:${stylist.phone}`}>{stylist.phone}</a>
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
