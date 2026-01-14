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
    hairTextureTypes: "Type A, Type B, Type C",
    accommodations: "Kids welcome, Pets allowed",
    lastMinuteBookingsAllowed: "Yes",
    streetParkingAvailable: "Yes",
    cancellationPolicy: "24-hour cancellation notice required. Full charge for no-shows or cancellations within 24 hours.",
    acceptedPaymentTypes: "Cash, Credit Card, Debit Card, Venmo, PayPal",
    services: [
      { name: "Haircut", duration: "45 minutes", price: "$30" },
      { name: "Hair Color", duration: "2 hours", price: "$120" },
      { name: "Highlights", duration: "2.5 hours", price: "$150" },
      { name: "Blowout", duration: "30 minutes", price: "$25" },
      { name: "Haircut & Color", duration: "2.5 hours", price: "$140" }
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
    hairTextureTypes: "Type A, Type B",
    accommodations: "Kids welcome",
    lastMinuteBookingsAllowed: "No",
    streetParkingAvailable: "Yes, but paid",
    cancellationPolicy: "48-hour cancellation notice required. 50% charge for cancellations within 48 hours. Full charge for no-shows.",
    acceptedPaymentTypes: "Cash, Credit Card, Venmo, Zelle",
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
    hairTextureTypes: "Type A, Type B, Type C",
    accommodations: "Kids welcome, Pets allowed",
    lastMinuteBookingsAllowed: "Yes",
    streetParkingAvailable: "Yes",
    cancellationPolicy: "24-hour cancellation notice required. Cancellations within 24 hours may result in a cancellation fee.",
    acceptedPaymentTypes: "Cash, Credit Card, Debit Card, Cash App",
    services: [
      { name: "Classic Cut", duration: "40 minutes", price: "$35" },
      { name: "Color Treatment", duration: "1.5 hours", price: "$100" },
      { name: "Perm", duration: "3 hours", price: "$150" },
      { name: "Deep Conditioning", duration: "20 minutes", price: "$20" },
      { name: "Updo", duration: "1 hour", price: "$60" }
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
    hairTextureTypes: "Type A, Type B",
    accommodations: "Kids welcome",
    lastMinuteBookingsAllowed: "Yes",
    streetParkingAvailable: "Yes",
    cancellationPolicy: "72-hour cancellation notice required for appointments. Late cancellations subject to 50% fee.",
    acceptedPaymentTypes: "Cash, Credit Card, PayPal, Venmo",
    services: [
      { name: "Vintage Cut", duration: "50 minutes", price: "$40" },
      { name: "Retro Styling", duration: "1.5 hours", price: "$80" },
      { name: "Pin Curls", duration: "2 hours", price: "$90" },
      { name: "Vintage Updo", duration: "1.5 hours", price: "$75" },
      { name: "Color & Style", duration: "3 hours", price: "$200" }
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
    hairTextureTypes: "Type A",
    accommodations: "Kids welcome",
    lastMinuteBookingsAllowed: "No",
    streetParkingAvailable: "No",
    cancellationPolicy: "48-hour cancellation notice required. Full charge for no-shows. 50% charge for cancellations within 48 hours.",
    acceptedPaymentTypes: "Cash, Credit Card, Debit Card, Venmo, PayPal, Cash App",
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
    hairTextureTypes: "Type C",
    accommodations: "Kids welcome, Pets allowed",
    lastMinuteBookingsAllowed: "Yes",
    streetParkingAvailable: "Yes",
    cancellationPolicy: "24-hour cancellation notice required. Full charge for no-shows or same-day cancellations.",
    acceptedPaymentTypes: "Cash, Credit Card, Venmo, PayPal, Cash App",
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
    hairTextureTypes: "Type A, Type B, Type C",
    accommodations: "Kids welcome",
    lastMinuteBookingsAllowed: "Yes",
    streetParkingAvailable: "Yes, but paid",
    cancellationPolicy: "24-hour cancellation notice required. Cancellations within 24 hours may be charged 50% of service cost.",
    acceptedPaymentTypes: "Cash, Credit Card, Debit Card",
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
    hairTextureTypes: "Type A, Type B",
    accommodations: "Kids welcome",
    lastMinuteBookingsAllowed: "No",
    streetParkingAvailable: "Yes",
    cancellationPolicy: "7-day cancellation notice required for bridal appointments. 50% non-refundable deposit required at booking.",
    acceptedPaymentTypes: "Cash, Credit Card, Debit Card, Check, PayPal, Venmo",
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
    hairTextureTypes: "Type A, Type B, Type C",
    accommodations: "Kids welcome, Pets allowed",
    lastMinuteBookingsAllowed: "Yes",
    streetParkingAvailable: "Yes",
    cancellationPolicy: "12-hour cancellation notice required. Full charge for no-shows.",
    acceptedPaymentTypes: "Cash, Credit Card, Venmo",
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
    hairTextureTypes: "Type B, Type C",
    accommodations: "Kids welcome",
    lastMinuteBookingsAllowed: "Yes",
    streetParkingAvailable: "Yes",
    cancellationPolicy: "24-hour cancellation notice required. Full charge for cancellations within 24 hours or no-shows.",
    acceptedPaymentTypes: "Cash, Credit Card, Venmo, PayPal, Cash App",
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
    hairTextureTypes: "Type A, Type B, Type C",
    accommodations: "Kids welcome",
    lastMinuteBookingsAllowed: "Yes",
    streetParkingAvailable: "Yes, but paid",
    cancellationPolicy: "48-hour cancellation notice required for color services. 24-hour notice for cuts. Full charge for no-shows.",
    acceptedPaymentTypes: "Cash, Credit Card, Venmo, Zelle, Cash App",
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
    hairTextureTypes: "Type A, Type B",
    accommodations: "Kids welcome",
    lastMinuteBookingsAllowed: "No",
    streetParkingAvailable: "No",
    cancellationPolicy: "72-hour cancellation notice required. Full charge for cancellations within 72 hours.",
    acceptedPaymentTypes: "Cash, Credit Card, Debit Card, Check, PayPal",
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
    hairTextureTypes: "Type A, Type B, Type C",
    accommodations: "Kids welcome, Pets allowed",
    lastMinuteBookingsAllowed: "Yes",
    streetParkingAvailable: "Yes",
    cancellationPolicy: "48-hour cancellation notice required. 50% deposit required for extension appointments. Full charge for no-shows.",
    acceptedPaymentTypes: "Cash, Credit Card, Debit Card, Venmo, PayPal, Zelle",
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
  const [selectedHairTextureType, setSelectedHairTextureType] = React.useState('all');
  const [selectedDate, setSelectedDate] = React.useState('');
  const [selectedTime, setSelectedTime] = React.useState('');
  const [appliedDate, setAppliedDate] = React.useState('');
  const [appliedTime, setAppliedTime] = React.useState('');
  const [selectedStylistId, setSelectedStylistId] = React.useState(null);
  const [showReviewForm, setShowReviewForm] = React.useState(false);
  const [reviewRating, setReviewRating] = React.useState(0);
  const [reviewComment, setReviewComment] = React.useState('');
  const [hoveredRating, setHoveredRating] = React.useState(0);
  const [showRegistration, setShowRegistration] = React.useState(false);
  const [showLogin, setShowLogin] = React.useState(false);
  const [showUserRegistration, setShowUserRegistration] = React.useState(false);
  const [showUserLogin, setShowUserLogin] = React.useState(false);
  const [showStylistDropdown, setShowStylistDropdown] = React.useState(false);
  const [showUserDropdown, setShowUserDropdown] = React.useState(false);
  const [loggedInStylist, setLoggedInStylist] = React.useState(null);
  const [loggedInUser, setLoggedInUser] = React.useState(null);
  const [showProfile, setShowProfile] = React.useState(false);
  const [showUserProfile, setShowUserProfile] = React.useState(false);
  const [isEditingProfile, setIsEditingProfile] = React.useState(false);
  const [isEditingUserProfile, setIsEditingUserProfile] = React.useState(false);
  const [editedProfile, setEditedProfile] = React.useState(null);
  const [editedUserProfile, setEditedUserProfile] = React.useState(null);
  const [registrationServices, setRegistrationServices] = React.useState([{ name: '', duration: '', price: '' }]);
  const [profilePhoto, setProfilePhoto] = React.useState(null);
  const [portfolioPhotos, setPortfolioPhotos] = React.useState([]);
  const [selectedHairStyles, setSelectedHairStyles] = React.useState([]);
  const [customHairStyleInput, setCustomHairStyleInput] = React.useState('');
  
  // Initialize recommendations from localStorage or use empty object
  const [recommendations, setRecommendations] = React.useState(() => {
    try {
      const saved = localStorage.getItem('stylistRecommendations');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });
  
  // Save recommendations to localStorage whenever they change
  React.useEffect(() => {
    try {
      localStorage.setItem('stylistRecommendations', JSON.stringify(recommendations));
    } catch (e) {
      console.error('Failed to save recommendations to localStorage', e);
    }
  }, [recommendations]);
  
  // Initialize reviews from localStorage or use empty object
  const [reviews, setReviews] = React.useState(() => {
    try {
      const saved = localStorage.getItem('stylistReviews');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });
  
  // Save reviews to localStorage whenever they change
  React.useEffect(() => {
    try {
      localStorage.setItem('stylistReviews', JSON.stringify(reviews));
    } catch (e) {
      console.error('Failed to save reviews to localStorage', e);
    }
  }, [reviews]);
  
  // Initialize recently viewed from localStorage (per user)
  const [recentlyViewed, setRecentlyViewed] = React.useState(() => {
    try {
      const saved = localStorage.getItem('recentlyViewedStylists');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });
  
  // Save recently viewed to localStorage whenever they change
  React.useEffect(() => {
    try {
      localStorage.setItem('recentlyViewedStylists', JSON.stringify(recentlyViewed));
    } catch (e) {
      console.error('Failed to save recently viewed to localStorage', e);
    }
  }, [recentlyViewed]);
  const [hairStyleSearchQuery, setHairStyleSearchQuery] = React.useState('');
  const [selectedPaymentTypes, setSelectedPaymentTypes] = React.useState([]);
  const [selectedHairTextureTypes, setSelectedHairTextureTypes] = React.useState([]);
  const [currentAvailability, setCurrentAvailability] = React.useState('');
  const [customAvailability, setCustomAvailability] = React.useState('');
  const [useCustomAvailability, setUseCustomAvailability] = React.useState(false);

  const paymentTypes = [
    "Cash",
    "Credit Card",
    "Debit Card",
    "Check",
    "Venmo",
    "PayPal",
    "Zelle",
    "Cash App",
    "Apple Pay",
    "Google Pay",
    "Square",
    "Stripe"
  ];

  const availabilityOptions = [
    "Available this week",
    "Available next week",
    "Available in 2 weeks",
    "Available in 3 weeks",
    "Available in 4 weeks",
    "Limited availability - next opening in 1 week",
    "Limited availability - next opening in 2 weeks",
    "Limited availability - next opening in 3 weeks",
    "Fully booked - next opening in 1 week",
    "Fully booked - next opening in 2 weeks",
    "Fully booked - next opening in 3 weeks",
    "Fully booked - next opening in 4 weeks",
    "Available immediately",
    "Not currently accepting new clients"
  ];

  // Close dropdowns when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (showStylistDropdown && !event.target.closest('.stylist-menu-container')) {
        setShowStylistDropdown(false);
      }
      if (showUserDropdown && !event.target.closest('.user-menu-container')) {
        setShowUserDropdown(false);
      }
    };

    if (showStylistDropdown || showUserDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [showStylistDropdown, showUserDropdown]);

  // Initialize editedProfile when entering edit mode
  React.useEffect(() => {
    if (isEditingProfile && loggedInStylist && !editedProfile) {
      setEditedProfile({ 
        ...loggedInStylist, 
        editedServices: [...loggedInStylist.services],
        editedPortfolio: [...(loggedInStylist.portfolio || [])]
      });
    }
  }, [isEditingProfile, loggedInStylist, editedProfile]);

  // Initialize editedUserProfile when entering edit mode
  React.useEffect(() => {
    if (isEditingUserProfile && loggedInUser && !editedUserProfile) {
      // Parse preferences from comma-separated string to array
      const preferencesArray = loggedInUser.preferences 
        ? loggedInUser.preferences.split(',').map(p => p.trim()).filter(p => p)
        : [];
      
      setEditedUserProfile({ 
        ...loggedInUser,
        favorites: [...(loggedInUser.favorites || [])], // Preserve favorites array
        preferencesArray: preferencesArray // Store as array for editing
      });
    }
  }, [isEditingUserProfile, loggedInUser, editedUserProfile]);

  // Helper function to toggle favorite
  const toggleFavorite = (stylistId) => {
    if (!loggedInUser) return;
    
    const currentFavorites = loggedInUser.favorites || [];
    const isFavorited = currentFavorites.includes(stylistId);
    
    const updatedFavorites = isFavorited
      ? currentFavorites.filter(id => id !== stylistId)
      : [...currentFavorites, stylistId];
    
    setLoggedInUser({
      ...loggedInUser,
      favorites: updatedFavorites
    });
  };

  // Helper function to recommend a stylist
  const recommendStylist = (stylistId) => {
    // Only allow users/customers to recommend, not stylists
    if (!loggedInUser) {
      alert('Please log in as a customer to recommend a stylist.');
      return;
    }
    
    const currentRecommendations = recommendations[stylistId] || [];
    const userId = loggedInUser.id;
    
    // Check if user already recommended this stylist
    if (currentRecommendations.includes(userId)) {
      alert('You have already recommended this stylist.');
      return;
    }
    
    // Add user to recommendations list
    setRecommendations({
      ...recommendations,
      [stylistId]: [...currentRecommendations, userId]
    });
  };

  // Helper function to get recommendation count for a stylist
  const getRecommendationCount = (stylistId) => {
    return (recommendations[stylistId] || []).length;
  };

  // Helper function to check if current user has recommended a stylist
  const hasRecommended = (stylistId) => {
    // Only check for logged-in users/customers, not stylists
    if (!loggedInUser) return false;
    const userId = loggedInUser.id;
    return (recommendations[stylistId] || []).includes(userId);
  };

  // Helper function to add a review for a stylist
  const addReview = (stylistId, rating, comment) => {
    // Only allow users/customers to review, not stylists
    if (!loggedInUser) {
      alert('Please log in as a customer to review a stylist.');
      return;
    }
    
    const currentReviews = reviews[stylistId] || [];
    const userId = loggedInUser.id;
    const userName = loggedInUser.name || 'Anonymous';
    
    // Check if user already reviewed this stylist
    const existingReviewIndex = currentReviews.findIndex(r => r.userId === userId);
    
    const newReview = {
      userId,
      userName,
      rating,
      comment,
      date: new Date().toISOString()
    };
    
    let updatedReviews;
    if (existingReviewIndex >= 0) {
      // Update existing review
      updatedReviews = [...currentReviews];
      updatedReviews[existingReviewIndex] = newReview;
    } else {
      // Add new review
      updatedReviews = [...currentReviews, newReview];
    }
    
    setReviews({
      ...reviews,
      [stylistId]: updatedReviews
    });
  };

  // Helper function to get reviews for a stylist
  const getReviews = (stylistId) => {
    return reviews[stylistId] || [];
  };

  // Helper function to check if current user has reviewed a stylist
  const hasReviewed = (stylistId) => {
    if (!loggedInUser) return false;
    const userId = loggedInUser.id;
    return (reviews[stylistId] || []).some(r => r.userId === userId);
  };

  // Helper function to get average rating for a stylist
  const getAverageRating = (stylistId) => {
    const stylistReviews = reviews[stylistId] || [];
    if (stylistReviews.length === 0) return 0;
    const sum = stylistReviews.reduce((acc, review) => acc + review.rating, 0);
    return (sum / stylistReviews.length).toFixed(1);
  };

  // Helper function to add a stylist to recently viewed
  const addToRecentlyViewed = (stylistId) => {
    if (!loggedInUser || !stylistId) return;
    
    const userId = loggedInUser.id;
    const userRecentlyViewed = recentlyViewed[userId] || [];
    
    // Remove if already in list (to move to front)
    const filtered = userRecentlyViewed.filter(id => id !== stylistId);
    
    // Add to front and limit to 20 most recent
    const updated = [stylistId, ...filtered].slice(0, 20);
    
    setRecentlyViewed({
      ...recentlyViewed,
      [userId]: updated
    });
  };

  // Helper function to get recently viewed stylists for current user
  const getRecentlyViewed = () => {
    if (!loggedInUser) return [];
    const userId = loggedInUser.id;
    const viewedIds = recentlyViewed[userId] || [];
    return viewedIds.map(id => stylists.find(s => s.id === id)).filter(Boolean);
  };

  // Helper function to generate Google Maps URL
  const getGoogleMapsUrl = (address) => {
    const encodedAddress = encodeURIComponent(address);
    return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  };

  // Parse payment types string into array
  const parsePaymentTypes = (paymentTypesString) => {
    if (!paymentTypesString) return [];
    return paymentTypesString.split(',').map(type => type.trim());
  };

  // Get payment method icon
  const getPaymentIcon = (paymentType) => {
    const type = paymentType.toLowerCase();
    
    if (type.includes('cash')) {
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
          <line x1="1" y1="10" x2="23" y2="10"></line>
          <path d="M7 14h.01M17 14h.01"></path>
        </svg>
      );
    } else if (type.includes('credit card')) {
      // Credit card icon with chip
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
          <line x1="1" y1="10" x2="23" y2="10"></line>
          <rect x="4" y="6" width="6" height="4" rx="0.5"></rect>
          <path d="M18 16h-4M16 14h-2"></path>
        </svg>
      );
    } else if (type.includes('debit card')) {
      // Debit card icon with chip and lines
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
          <line x1="1" y1="10" x2="23" y2="10"></line>
          <rect x="4" y="6" width="6" height="4" rx="0.5"></rect>
          <path d="M18 16h-4M16 14h-2M16 18h-2"></path>
        </svg>
      );
    } else if (type.includes('venmo')) {
      // Venmo logo - "V" letter
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 12l10 10 10-10L12 2zm0 3.5L18.5 12 12 18.5 5.5 12 12 5.5z"/>
        </svg>
      );
    } else if (type.includes('paypal')) {
      // PayPal logo - "P" letter
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 3h6c3 0 5 2 5 5s-2 5-5 5H9.5v4.5H7V3zm2.5 6h3c1.5 0 2.5-1 2.5-2.5S14 4.5 12.5 4.5H9.5V9z"/>
        </svg>
      );
    } else if (type.includes('zelle')) {
      // Zelle logo - "Z" letter
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 4h16v2.5H8.5l9 9H4v-2.5h11.5l-9-9H4V4z"/>
        </svg>
      );
    } else if (type.includes('cash app')) {
      // Cash App logo - "$" in square
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2"/>
          <path d="M12 6v12M10 8h4M10 16h4"/>
          <circle cx="12" cy="8" r="1" fill="currentColor"/>
          <circle cx="12" cy="16" r="1" fill="currentColor"/>
        </svg>
      );
    } else if (type.includes('check')) {
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6L9 17l-5-5"></path>
        </svg>
      );
    } else {
      // Default icon for unknown payment types
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      );
    }
  };

  // Helper function to check if a stylist might be available at a given date/time
  const checkAvailability = (stylist, dateStr, timeStr) => {
    // If neither date nor time is selected, don't filter
    if (!dateStr && !timeStr) return true;
    
    try {
      // Use current date if only time is provided (to get current day of the week)
      const dateToUse = dateStr || new Date().toISOString().split('T')[0];
      const selectedDate = new Date(dateToUse + 'T00:00:00'); // Add time to avoid timezone issues
      const dayIndex = selectedDate.getDay(); // 0 = Sunday, 1 = Monday, etc. (current day of week when date not provided)
      const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const dayAbbrev = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const selectedDayName = dayNames[dayIndex];
      const selectedDayAbbrev = dayAbbrev[dayIndex];
      
      const hours = stylist.hours || '';
      const hoursLower = hours.toLowerCase();
      
      // Check for day ranges (e.g., "Mon-Fri", "Tue-Sat")
      const dayMap = { mon: 1, tue: 2, wed: 3, thu: 4, fri: 5, sat: 6, sun: 0 };
      const dayRangePattern = /(mon|tue|wed|thu|fri|sat|sun)\s*-\s*(mon|tue|wed|thu|fri|sat|sun)/gi;
      const dayRangeMatches = [...hoursLower.matchAll(dayRangePattern)];
      
      let dayInHours = false;
      
      if (dayRangeMatches.length > 0) {
        // Check if selected day falls within any range
        for (const match of dayRangeMatches) {
          const startDay = match[1].toLowerCase();
          const endDay = match[2].toLowerCase();
          const startIndex = dayMap[startDay];
          const endIndex = dayMap[endDay];
          
          // Check if selected day falls within the range
          if (startIndex <= endIndex) {
            // Normal range (e.g., Mon-Fri)
            if (dayIndex >= startIndex && dayIndex <= endIndex) {
              dayInHours = true;
              break;
            }
          } else {
            // Wrapping range (e.g., Sat-Mon)
            if (dayIndex >= startIndex || dayIndex <= endIndex) {
              dayInHours = true;
              break;
            }
          }
        }
      }
      
      // If day range didn't match, check if the selected day is mentioned directly in the hours
      if (!dayInHours) {
        dayInHours = hoursLower.includes(selectedDayName.toLowerCase().substring(0, 3)) ||
                      hoursLower.includes(selectedDayAbbrev.toLowerCase()) ||
                      (selectedDayName === 'Monday' && (hoursLower.includes('mon') || hoursLower.includes('weekday'))) ||
                      (selectedDayName === 'Tuesday' && hoursLower.includes('tue')) ||
                      (selectedDayName === 'Wednesday' && hoursLower.includes('wed')) ||
                      (selectedDayName === 'Thursday' && (hoursLower.includes('thu') || hoursLower.includes('thur'))) ||
                      (selectedDayName === 'Friday' && hoursLower.includes('fri')) ||
                      (selectedDayName === 'Saturday' && hoursLower.includes('sat')) ||
                      (selectedDayName === 'Sunday' && hoursLower.includes('sun'));
      }
      
      // If only date is provided, check day availability
      if (dateStr && !timeStr) {
        return dayInHours;
      }
      
      // If only time is provided or both are provided, check day first
      if (!dayInHours) return false;
      
      // Time checking is basic for now - return true if day matches
      // (More sophisticated time parsing could be added here)
      
      // Try to parse the time (expecting HH:MM format)
      const [hoursStr, minutesStr] = timeStr.split(':');
      const selectedHour = parseInt(hoursStr);
      const selectedMinute = parseInt(minutesStr || '0');
      
      // Extract time ranges from hours string (simple pattern matching)
      // This is a basic check - in a real app, you'd want more sophisticated parsing
      const timePatterns = hours.match(/\d{1,2}:\d{2}\s*(AM|PM)/gi);
      if (timePatterns && timePatterns.length >= 2) {
        // If we can parse opening and closing times, check if selected time falls within
        // For now, just return true if day matches (more sophisticated logic could be added)
        return true;
      }
      
      return true; // If we can't parse times, assume available if day matches
    } catch (e) {
      return true; // If parsing fails, don't filter out the stylist
    }
  };

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

    // Hair texture type filter
    const matchesHairTextureType = selectedHairTextureType === 'all' || 
      (stylist.hairTextureTypes && stylist.hairTextureTypes.includes(selectedHairTextureType));

    return matchesSearch && matchesSpecialty && matchesRate && matchesTravel && matchesHairTextureType;
  });

  const selectedStylist = stylists.find(s => s.id === selectedStylistId);
  
  // Track when a stylist is viewed (for recently viewed list)
  React.useEffect(() => {
    if (selectedStylistId && loggedInUser) {
      addToRecentlyViewed(selectedStylistId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedStylistId, loggedInUser?.id]);
  
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
                <div className="detail-image-wrapper">
                  <img 
                    src={selectedStylist.profilePicture} 
                    alt={selectedStylist.name}
                    className="detail-profile-picture"
                  />
                  {loggedInUser && (
                    <button
                      className={`recommend-button-detail ${hasRecommended(selectedStylist.id) ? 'recommended' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        recommendStylist(selectedStylist.id);
                      }}
                      aria-label={hasRecommended(selectedStylist.id) ? "You've recommended this stylist" : "Recommend this stylist"}
                      disabled={hasRecommended(selectedStylist.id)}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill={hasRecommended(selectedStylist.id) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                      <span>{hasRecommended(selectedStylist.id) ? 'Recommended' : 'Recommend this stylist'}</span>
                    </button>
                  )}
                  {getRecommendationCount(selectedStylist.id) > 0 && (
                    <p className="recommendation-count-detail">
                      {getRecommendationCount(selectedStylist.id)} {getRecommendationCount(selectedStylist.id) === 1 ? 'person recommends' : 'people recommend'} this stylist
                    </p>
                  )}
                </div>
              </div>
              
              <div className="detail-info-section">
                <div className="detail-info-card">
                  <h2 className="detail-section-title">Contact Information</h2>
                  <div className="detail-contact-info">
                    <p><span className="label">Address:</span> <a href={getGoogleMapsUrl(selectedStylist.address)} target="_blank" rel="noopener noreferrer">{selectedStylist.address}</a></p>
                    <p><span className="label">Email:</span> <a href={`mailto:${selectedStylist.email}`}>{selectedStylist.email}</a></p>
                    <p><span className="label">Phone:</span> <a href={`tel:${selectedStylist.phone}`}>{selectedStylist.phone}</a></p>
                  </div>
                  
                  <h2 className="detail-section-title">Pricing & Availability</h2>
                  <div className="detail-pricing-info">
                    <p><span className="label">Rate:</span> {selectedStylist.rate}</p>
                    <p><span className="label">Hours:</span> {selectedStylist.hours}</p>
                    <p><span className="label">Current Availability:</span> {selectedStylist.currentAvailability}</p>
                    <p><span className="label">Willing to Travel:</span> {selectedStylist.willingToTravel}</p>
                    {selectedStylist.accommodations && (
                      <p><span className="label">Accommodations:</span> {selectedStylist.accommodations}</p>
                    )}
                    {selectedStylist.lastMinuteBookingsAllowed && (
                      <p><span className="label">Last Minute Bookings Allowed:</span> {selectedStylist.lastMinuteBookingsAllowed}</p>
                    )}
                    {selectedStylist.streetParkingAvailable && (
                      <p><span className="label">Is Street Parking Available:</span> {selectedStylist.streetParkingAvailable}</p>
                    )}
                    {selectedStylist.acceptedPaymentTypes && (
                      <p><span className="label">Accepted Payment Types:</span> {selectedStylist.acceptedPaymentTypes}</p>
                    )}
                    {selectedStylist.cancellationPolicy && (
                      <p><span className="label">Cancellation Policy:</span> {selectedStylist.cancellationPolicy}</p>
                    )}
                  </div>
                  
                  <h2 className="detail-section-title">Experience</h2>
                  <p><span className="label">Years of Experience:</span> {selectedStylist.yearsOfExperience}</p>
                  {selectedStylist.hairTextureTypes && (
                    <p><span className="label">Hair Texture Types:</span> {selectedStylist.hairTextureTypes}</p>
                  )}
                </div>
                
                <div className="detail-info-card">
                  <h2 className="detail-section-title">Services Offered</h2>
                  <div className="detail-services-list">
                    {selectedStylist.services.map((service, index) => (
                      <div key={index} className="detail-service-item">
                        <span className="service-name">
                          {service.name}{service.price ? ` (${service.price})` : ''}
                        </span>
                        <span className="service-duration">{service.duration}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="detail-info-card">
                  <h2 className="detail-section-title">About</h2>
                  <p className="detail-about-text">{selectedStylist.about}</p>
                </div>
                
                <div className="detail-info-card">
                  <h2 className="detail-section-title">Reviews</h2>
                  {(() => {
                    const stylistReviews = getReviews(selectedStylist.id);
                    const avgRating = getAverageRating(selectedStylist.id);
                    const userReview = stylistReviews.find(r => loggedInUser && r.userId === loggedInUser.id);
                    
                    return (
                      <>
                        {stylistReviews.length > 0 && (
                          <div className="reviews-summary">
                            <div className="average-rating">
                              <span className="rating-number">{avgRating}</span>
                              <div className="rating-stars-display">
                                {[1, 2, 3, 4, 5].map(star => (
                                  <svg key={star} width="20" height="20" viewBox="0 0 24 24" fill={star <= avgRating ? "#ffd700" : "#e0e0e0"} stroke="#ffd700" strokeWidth="2">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                  </svg>
                                ))}
                              </div>
                              <span className="review-count">({stylistReviews.length} {stylistReviews.length === 1 ? 'review' : 'reviews'})</span>
                            </div>
                          </div>
                        )}
                        
                        {loggedInUser && !userReview && !showReviewForm && (
                          <button
                            className="write-review-button"
                            onClick={() => setShowReviewForm(true)}
                          >
                            Write a Review
                          </button>
                        )}
                        
                        {loggedInUser && showReviewForm && (
                          <div className="review-form">
                            <h3 className="review-form-title">Write a Review</h3>
                              <div className="rating-input">
                              <label>Rating:</label>
                              <div 
                                className="star-rating"
                                onMouseLeave={() => setHoveredRating(0)}
                              >
                                {[1, 2, 3, 4, 5].map(star => (
                                  <button
                                    key={star}
                                    type="button"
                                    className="star-button"
                                    onClick={() => setReviewRating(star)}
                                    onMouseEnter={() => setHoveredRating(star)}
                                  >
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill={star <= (hoveredRating || reviewRating) ? "#ffd700" : "#e0e0e0"} stroke="#ffd700" strokeWidth="2">
                                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                    </svg>
                                  </button>
                                ))}
                              </div>
                            </div>
                            <div className="review-comment-input">
                              <label htmlFor="review-comment">Your Review:</label>
                              <textarea
                                id="review-comment"
                                value={reviewComment}
                                onChange={(e) => setReviewComment(e.target.value)}
                                placeholder="Share your experience..."
                                rows="5"
                                className="review-textarea"
                              />
                            </div>
                            <div className="review-form-actions">
                              <button
                                className="submit-review-button"
                                onClick={() => {
                                  if (reviewRating === 0) {
                                    alert('Please select a rating');
                                    return;
                                  }
                                  addReview(selectedStylist.id, reviewRating, reviewComment);
                                  setShowReviewForm(false);
                                  setReviewRating(0);
                                  setReviewComment('');
                                }}
                              >
                                Submit Review
                              </button>
                              <button
                                className="cancel-review-button"
                                onClick={() => {
                                  setShowReviewForm(false);
                                  setReviewRating(0);
                                  setReviewComment('');
                                }}
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        )}
                        
                        {userReview && (
                          <div className="user-review">
                            <div className="user-review-header">
                              <h3 className="user-review-title">Your Review</h3>
                              <span className="user-review-author">{userReview.userName}</span>
                            </div>
                            <div className="user-review-rating">
                              {[1, 2, 3, 4, 5].map(star => (
                                <svg key={star} width="20" height="20" viewBox="0 0 24 24" fill={star <= userReview.rating ? "#ffd700" : "#e0e0e0"} stroke="#ffd700" strokeWidth="2">
                                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                </svg>
                              ))}
                            </div>
                            {userReview.comment && (
                              <p className="user-review-comment">{userReview.comment}</p>
                            )}
                            <span className="user-review-date">{new Date(userReview.date).toLocaleDateString()}</span>
                          </div>
                        )}
                        
                        <div className="reviews-list">
                          {stylistReviews
                            .filter(r => !loggedInUser || r.userId !== loggedInUser.id)
                            .map((review, index) => (
                            <div key={index} className="review-item">
                              <div className="review-header">
                                <span className="review-author">{review.userName}</span>
                                <div className="review-rating">
                                  {[1, 2, 3, 4, 5].map(star => (
                                    <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill={star <= review.rating ? "#ffd700" : "#e0e0e0"} stroke="#ffd700" strokeWidth="2">
                                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                    </svg>
                                  ))}
                                </div>
                              </div>
                              {review.comment && (
                                <p className="review-text">{review.comment}</p>
                              )}
                              <span className="review-date">{new Date(review.date).toLocaleDateString()}</span>
                            </div>
                          ))}
                        </div>
                      </>
                    );
                  })()}
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

  // Show user login page
  if (showUserLogin) {
    return (
      <div className="app">
        <header className="header">
          <button 
            className="back-button"
            onClick={() => setShowUserLogin(false)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back
          </button>
          <h1>User Login</h1>
          <p className="subtitle">Sign in to your account</p>
        </header>
        
        <main className="main-content">
          <div className="registration-container">
            <form className="registration-form" onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const email = formData.get('email');
              const password = formData.get('password');
              
              // Test account: test@gmail.com / 1234
              if (email === 'test@gmail.com' && password === '1234') {
                const testUser = {
                  id: 1000,
                  name: "Test User",
                  email: "test@gmail.com",
                  phone: "(212) 555-0000",
                  address: "123 User Street, User City, NY 10001",
                  preferences: "Looking for modern styles and color techniques",
                  favorites: [] // Initialize favorites array
                };
                setLoggedInUser(testUser);
                setShowUserLogin(false);
              } else {
                alert('Invalid email or password. Use test@gmail.com / 1234 for test account.');
              }
            }}>
              <div className="form-section">
                <div className="form-group">
                  <label htmlFor="user-login-email">Email *</label>
                  <input type="email" id="user-login-email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="user-login-password">Password *</label>
                  <input type="password" id="user-login-password" name="password" required />
                </div>
              </div>

              <div className="form-actions">
                <button type="submit" className="submit-button">Login</button>
                <button type="button" className="cancel-button" onClick={() => setShowUserLogin(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </main>
      </div>
    );
  }

  // Show stylist login page
  if (showLogin) {
    return (
      <div className="app">
        <header className="header">
          <button 
            className="back-button"
            onClick={() => setShowLogin(false)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back
          </button>
          <h1>Stylist Login</h1>
          <p className="subtitle">Sign in to your stylist account</p>
        </header>
        
        <main className="main-content">
          <div className="registration-container">
            <form className="registration-form" onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const email = formData.get('email');
              const password = formData.get('password');
              
              // Test account: test@gmail.com / 1234
              if (email === 'test@gmail.com' && password === '1234') {
                // Find the test stylist or create a test stylist object
                const testStylist = stylists.find(s => s.email === 'test@gmail.com') || {
                  id: 999,
                  name: "Test Stylist",
                  profilePicture: "https://i.pravatar.cc/200?img=1",
                  address: "123 Test Street, Test City, NY 10001",
                  email: "test@gmail.com",
                  phone: "(212) 555-0000",
                  rate: "$80/hour",
                  hours: "Mon-Fri: 9:00 AM - 6:00 PM",
                  currentAvailability: "Available this week",
                  willingToTravel: "Yes, within 15 miles",
                  yearsOfExperience: "5 years",
                  specialty: "Modern cuts and styling",
                  hairTextureTypes: "Type A, Type B, Type C",
                  accommodations: "Kids welcome",
                  lastMinuteBookingsAllowed: "Yes",
                  streetParkingAvailable: "Yes",
                  acceptedPaymentTypes: "Cash, Credit Card, Venmo",
                  cancellationPolicy: "24-hour cancellation notice required. Full charge for no-shows or cancellations within 24 hours.",
                  services: [
                    { name: "Haircut", duration: "45 minutes" },
                    { name: "Hair Color", duration: "2 hours" },
                    { name: "Highlights", duration: "2.5 hours" }
                  ],
                  about: "Test stylist account for demonstration purposes.",
                  portfolio: [
                    "https://images.unsplash.com/photo-1560869713-7d0a8b9b0a0a?w=400",
                    "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400"
                  ]
                };
                setLoggedInStylist(testStylist);
                setShowLogin(false);
              } else {
                alert('Invalid email or password. Use test@gmail.com / 1234 for test account.');
              }
            }}>
              <div className="form-section">
                <div className="form-group">
                  <label htmlFor="stylist-login-email">Email *</label>
                  <input type="email" id="stylist-login-email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="stylist-login-password">Password *</label>
                  <input type="password" id="stylist-login-password" name="password" required />
                </div>
              </div>

              <div className="form-actions">
                <button type="submit" className="submit-button">Login</button>
                <button type="button" className="cancel-button" onClick={() => setShowLogin(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </main>
      </div>
    );
  }

  // Show user profile page for logged in user
  if (showUserProfile && loggedInUser) {
    const currentUser = isEditingUserProfile && editedUserProfile ? editedUserProfile : loggedInUser;
    const userFavorites = currentUser.favorites || [];
    const favoriteStylists = stylists.filter(s => userFavorites.includes(s.id));
    const recentlyViewedStylists = getRecentlyViewed();
    
    const handleSaveUserProfile = () => {
      // Clean up preferencesArray before saving
      const { preferencesArray, ...profileToSave } = editedUserProfile;
      setLoggedInUser({
        ...profileToSave,
        preferences: editedUserProfile.preferences || ''
      });
      setIsEditingUserProfile(false);
      setEditedUserProfile(null);
      setCustomHairStyleInput(''); // Clear custom input
      alert('Profile saved successfully!');
    };

    const handleCancelEditUser = () => {
      setIsEditingUserProfile(false);
      setEditedUserProfile(null);
      setCustomHairStyleInput(''); // Clear custom input
    };

    return (
      <div className="app">
        <header className="header">
          <button 
            className="back-button"
            onClick={() => {
              setShowUserProfile(false);
              setIsEditingUserProfile(false);
              setEditedUserProfile(null);
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Home
          </button>
          {!isEditingUserProfile ? (
            <button 
              className="edit-profile-button header-right-button"
              onClick={() => setIsEditingUserProfile(true)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
              Edit Profile
            </button>
          ) : (
            <div className="edit-actions header-right-button">
              <button 
                className="save-profile-button"
                onClick={handleSaveUserProfile}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                  <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                  <polyline points="17 21 17 13 7 13 7 21"></polyline>
                  <polyline points="7 3 7 8 15 8"></polyline>
                </svg>
                Save Changes
              </button>
              <button 
                className="cancel-edit-button"
                onClick={handleCancelEditUser}
              >
                Cancel
              </button>
            </div>
          )}
          <h1>{currentUser.name}</h1>
          <p className="subtitle">My Profile</p>
        </header>
        
        <main className="main-content detail-page">
          <div className="detail-container">
            <div className="detail-main">
              <div className="detail-image-section">
                <div className="user-profile-avatar">
                  <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
              </div>
              
              <div className="detail-info-section">
                <div className="detail-info-card">
                  <h2 className="detail-section-title">Personal Information</h2>
                  {isEditingUserProfile ? (
                    <div className="edit-form-group">
                      <label><span className="label">Name:</span></label>
                      <input 
                        type="text" 
                        value={editedUserProfile?.name || ''} 
                        onChange={(e) => setEditedUserProfile({...editedUserProfile, name: e.target.value})}
                        className="edit-input"
                      />
                      <label><span className="label">Email:</span></label>
                      <input 
                        type="email" 
                        value={editedUserProfile?.email || ''} 
                        onChange={(e) => setEditedUserProfile({...editedUserProfile, email: e.target.value})}
                        className="edit-input"
                      />
                      <label><span className="label">Phone:</span></label>
                      <input 
                        type="tel" 
                        value={editedUserProfile?.phone || ''} 
                        onChange={(e) => setEditedUserProfile({...editedUserProfile, phone: e.target.value})}
                        className="edit-input"
                      />
                      <label><span className="label">Address:</span></label>
                      <input 
                        type="text" 
                        value={editedUserProfile?.address || ''} 
                        onChange={(e) => setEditedUserProfile({...editedUserProfile, address: e.target.value})}
                        className="edit-input"
                      />
                    </div>
                  ) : (
                    <div className="detail-contact-info">
                      <p><span className="label">Name:</span> {currentUser.name}</p>
                      <p><span className="label">Email:</span> <a href={`mailto:${currentUser.email}`}>{currentUser.email}</a></p>
                      <p><span className="label">Phone:</span> <a href={`tel:${currentUser.phone}`}>{currentUser.phone}</a></p>
                      <p><span className="label">Address:</span> <a href={getGoogleMapsUrl(currentUser.address)} target="_blank" rel="noopener noreferrer">{currentUser.address}</a></p>
                    </div>
                  )}
                  
                  <h2 className="detail-section-title">Preferences</h2>
                  {isEditingUserProfile ? (
                    <div className="edit-form-group">
                      <label><span className="label">Hair Style Preferences</span></label>
                      <p className="form-hint">Select from available styles or add your own</p>
                      
                      {/* Search Input */}
                      <div className="hair-style-search-wrapper">
                        <input
                          type="text"
                          className="hair-style-search-input"
                          placeholder="Search hair styles..."
                          value={hairStyleSearchQuery}
                          onChange={(e) => setHairStyleSearchQuery(e.target.value)}
                        />
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hair-style-search-icon">
                          <circle cx="11" cy="11" r="8"></circle>
                          <path d="m21 21-4.35-4.35"></path>
                        </svg>
                        {hairStyleSearchQuery && (
                          <button
                            type="button"
                            className="hair-style-search-clear"
                            onClick={() => setHairStyleSearchQuery('')}
                            aria-label="Clear search"
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="18" y1="6" x2="6" y2="18"></line>
                              <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                          </button>
                        )}
                      </div>
                      
                      {/* Predefined Hair Styles */}
                      <div className="hair-styles-grid">
                        {[
                          // Basic Services
                          "Haircut", "Hair Color", "Highlights", "Balayage", "Ombre",
                          "Blowout", "Updo", "Bridal", "Men's Cut", "Fade",
                          "Beard Trim", "Perm", "Keratin Treatment", "Hair Extensions",
                          "Braids", "Natural Hair", "Curly Hair", "Straightening",
                          "Vintage", "Retro", "Classic", "Modern", "Edgy",
                          // Black Hair & Natural Hair Styles
                          "Box Braids", "Cornrows", "Ghana Braids", "Senegalese Twists", "Fulani Braids",
                          "Locs", "Dreadlocks", "Starter Locs", "Maintenance Locs", "Interlocking",
                          "Two Strand Twists", "Flat Twists", "Bantu Knots", "Finger Coils", "Wash and Go",
                          "TWA (Teeny Weeny Afro)", "Afro", "Puff", "Pineapple", "Protective Styles",
                          "Wig Installation", "Weave Installation", "Sew-In", "Quick Weave", "Closure",
                          "Frontal", "360 Frontal", "Crochet Braids", "Passion Twists", "Knotless Braids",
                          "Feed-In Braids", "Micro Braids", "Goddess Braids", "Dutch Braids", "French Braids",
                          // Textured & Curly Hair
                          "Deva Cut", "Curly Cut", "Dry Cut", "Razor Cut", "Texturizing",
                          "Layered Cut", "Shag Cut", "Pixie Cut", "Bob Cut", "Lob Cut",
                          // Color & Highlights
                          "Full Color", "Root Touch-Up", "Color Correction", "Bleach", "Toner",
                          "Foil Highlights", "Babylights", "Balayage Highlights", "Ombre Color", "Sombre",
                          "Fashion Colors", "Pastel Colors", "Vivid Colors", "Color Melt", "Shadow Root",
                          // Styling & Treatments
                          "Hair Treatment", "Deep Conditioning", "Protein Treatment", "Hot Oil Treatment", "Scalp Treatment",
                          "Hair Mask", "Hair Steam", "Hair Botox", "Hair Gloss", "Hair Glaze",
                          // Special Occasions
                          "Wedding Hair", "Prom Hair", "Event Styling", "Red Carpet", "Photoshoot",
                          "Hair & Makeup", "Trial Run", "Hair Consultation", "Color Consultation", "Style Consultation"
                        ].filter((style) => {
                          if (!hairStyleSearchQuery.trim()) return true;
                          return style.toLowerCase().includes(hairStyleSearchQuery.toLowerCase());
                        }).map((style) => (
                          <label key={style} className="hair-style-checkbox">
                            <input
                              type="checkbox"
                              checked={(editedUserProfile?.preferencesArray || []).includes(style)}
                              onChange={(e) => {
                                const currentPrefs = editedUserProfile?.preferencesArray || [];
                                let updatedPrefs;
                                if (e.target.checked) {
                                  updatedPrefs = [...currentPrefs, style];
                                } else {
                                  updatedPrefs = currentPrefs.filter(s => s !== style);
                                }
                                setEditedUserProfile({
                                  ...editedUserProfile,
                                  preferencesArray: updatedPrefs,
                                  preferences: updatedPrefs.join(', ')
                                });
                              }}
                            />
                            <span>{style}</span>
                          </label>
                        ))}
                      </div>
                      
                      {/* Custom Hair Style Input */}
                      <div className="custom-hair-style-input">
                        <input
                          type="text"
                          value={customHairStyleInput}
                          onChange={(e) => setCustomHairStyleInput(e.target.value)}
                          placeholder="Type a custom hair style..."
                          onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                              e.preventDefault();
                              const currentPrefs = editedUserProfile?.preferencesArray || [];
                              if (customHairStyleInput.trim() && !currentPrefs.includes(customHairStyleInput.trim())) {
                                const updatedPrefs = [...currentPrefs, customHairStyleInput.trim()];
                                setEditedUserProfile({
                                  ...editedUserProfile,
                                  preferencesArray: updatedPrefs,
                                  preferences: updatedPrefs.join(', ')
                                });
                                setCustomHairStyleInput('');
                              }
                            }
                          }}
                        />
                        <button
                          type="button"
                          className="add-custom-style-button"
                          onClick={() => {
                            const currentPrefs = editedUserProfile?.preferencesArray || [];
                            if (customHairStyleInput.trim() && !currentPrefs.includes(customHairStyleInput.trim())) {
                              const updatedPrefs = [...currentPrefs, customHairStyleInput.trim()];
                              setEditedUserProfile({
                                ...editedUserProfile,
                                preferencesArray: updatedPrefs,
                                preferences: updatedPrefs.join(', ')
                              });
                              setCustomHairStyleInput('');
                            }
                          }}
                        >
                          Add
                        </button>
                      </div>
                      
                      {/* Selected Styles Bubbles */}
                      {(editedUserProfile?.preferencesArray || []).length > 0 && (
                        <div className="selected-hair-styles">
                          {(editedUserProfile?.preferencesArray || []).map((style, index) => (
                            <span key={index} className="hair-style-bubble">
                              {style}
                              <button
                                type="button"
                                className="remove-bubble-button"
                                onClick={() => {
                                  const currentPrefs = editedUserProfile?.preferencesArray || [];
                                  const updatedPrefs = currentPrefs.filter((_, i) => i !== index);
                                  setEditedUserProfile({
                                    ...editedUserProfile,
                                    preferencesArray: updatedPrefs,
                                    preferences: updatedPrefs.join(', ')
                                  });
                                }}
                                aria-label={`Remove ${style}`}
                              >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <line x1="18" y1="6" x2="6" y2="18"></line>
                                  <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                              </button>
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="detail-pricing-info">
                      {currentUser.preferences ? (
                        <div className="preferences-display">
                          {currentUser.preferences.split(',').map((pref, index) => (
                            <span key={index} className="hair-style-bubble-display">
                              {pref.trim()}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <p><span className="label">Style Preferences:</span> No preferences set</p>
                      )}
                    </div>
                  )}
                </div>
                
                {!isEditingUserProfile && recentlyViewedStylists.length > 0 && (
                  <div className="detail-info-card">
                    <h2 className="detail-section-title">Recently Viewed</h2>
                    <div className="recently-viewed-list">
                      {recentlyViewedStylists.map((stylist) => (
                        <div 
                          key={stylist.id} 
                          className="recently-viewed-item"
                          onClick={() => {
                            setShowUserProfile(false);
                            setSelectedStylistId(stylist.id);
                          }}
                        >
                          <img 
                            src={stylist.profilePicture} 
                            alt={stylist.name}
                            className="recently-viewed-picture"
                          />
                          <div className="recently-viewed-info">
                            <h3 className="recently-viewed-name">{stylist.name}</h3>
                            <p className="recently-viewed-specialty">{stylist.specialty}</p>
                            <p className="recently-viewed-rate">{stylist.rate}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {!isEditingUserProfile && favoriteStylists.length > 0 && (
                  <div className="detail-info-card">
                    <h2 className="detail-section-title">Liked Stylists</h2>
                    <div className="favorites-list">
                      {favoriteStylists.map((stylist) => (
                        <div 
                          key={stylist.id} 
                          className="favorite-stylist-item"
                          onClick={() => {
                            setShowUserProfile(false);
                            setSelectedStylistId(stylist.id);
                          }}
                        >
                          <img 
                            src={stylist.profilePicture} 
                            alt={stylist.name}
                            className="favorite-stylist-picture"
                          />
                          <div className="favorite-stylist-info">
                            <h3 className="favorite-stylist-name">{stylist.name}</h3>
                            <p className="favorite-stylist-specialty">{stylist.specialty}</p>
                            <p className="favorite-stylist-rate">{stylist.rate}</p>
                          </div>
                          <button
                            className="remove-favorite-button"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleFavorite(stylist.id);
                            }}
                            aria-label="Remove from favorites"
                          >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Show profile page for logged in stylist
  if (showProfile && loggedInStylist) {
    const currentStylist = isEditingProfile && editedProfile ? editedProfile : loggedInStylist;
    
    const handleSaveProfile = () => {
      const updatedStylist = {
        ...editedProfile,
        services: editedProfile.editedServices || editedProfile.services,
        portfolio: editedProfile.editedPortfolio || editedProfile.portfolio
      };
      delete updatedStylist.editedServices;
      delete updatedStylist.editedPortfolio;
      setLoggedInStylist(updatedStylist);
      setIsEditingProfile(false);
      setEditedProfile(null);
    };

    const handleCancelEdit = () => {
      setIsEditingProfile(false);
      setEditedProfile(null);
    };

    const similarStylists = stylists.filter(otherStylist => {
      if (otherStylist.id === loggedInStylist.id) return false;
      const stylistServiceNames = loggedInStylist.services.map(s => s.name.toLowerCase());
      const otherServiceNames = otherStylist.services.map(s => s.name.toLowerCase());
      return stylistServiceNames.some(service => otherServiceNames.includes(service));
    }).slice(0, 6);

    return (
      <div className="app">
        <header className="header">
          <button 
            className="back-button"
            onClick={() => {
              setShowProfile(false);
              setIsEditingProfile(false);
              setEditedProfile(null);
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Home
          </button>
          {!isEditingProfile ? (
            <button 
              className="edit-profile-button header-right-button"
              onClick={() => setIsEditingProfile(true)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
              Edit Profile
            </button>
          ) : (
            <div className="edit-actions header-right-button">
              <button 
                className="save-profile-button"
                onClick={handleSaveProfile}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                  <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                  <polyline points="17 21 17 13 7 13 7 21"></polyline>
                  <polyline points="7 3 7 8 15 8"></polyline>
                </svg>
                Save Changes
              </button>
              <button 
                className="cancel-edit-button"
                onClick={handleCancelEdit}
              >
                Cancel
              </button>
            </div>
          )}
          <h1>{currentStylist.name}</h1>
          <p className="subtitle">{currentStylist.specialty}</p>
        </header>
        
        <main className="main-content detail-page">
          <div className="detail-container">
            <div className="detail-main">
              <div className="detail-image-section">
                {isEditingProfile ? (
                  <div className="edit-image-container">
                    <img 
                      src={editedProfile?.profilePicture || currentStylist.profilePicture} 
                      alt={currentStylist.name}
                      className="detail-profile-picture"
                    />
                    <input 
                      type="text" 
                      value={editedProfile?.profilePicture || ''} 
                      onChange={(e) => setEditedProfile({...editedProfile, profilePicture: e.target.value})}
                      className="edit-image-url-input"
                      placeholder="Image URL"
                    />
                  </div>
                ) : (
                  <img 
                    src={currentStylist.profilePicture} 
                    alt={currentStylist.name}
                    className="detail-profile-picture"
                  />
                )}
              </div>
              
              <div className="detail-info-section">
                <div className="detail-info-card">
                  <h2 className="detail-section-title">Contact Information</h2>
                  {isEditingProfile ? (
                    <div className="edit-form-group">
                      <label><span className="label">Address:</span></label>
                      <input 
                        type="text" 
                        value={editedProfile?.address || ''} 
                        onChange={(e) => setEditedProfile({...editedProfile, address: e.target.value})}
                        className="edit-input"
                      />
                      <label><span className="label">Email:</span></label>
                      <input 
                        type="email" 
                        value={editedProfile?.email || ''} 
                        onChange={(e) => setEditedProfile({...editedProfile, email: e.target.value})}
                        className="edit-input"
                      />
                      <label><span className="label">Phone:</span></label>
                      <input 
                        type="tel" 
                        value={editedProfile?.phone || ''} 
                        onChange={(e) => setEditedProfile({...editedProfile, phone: e.target.value})}
                        className="edit-input"
                      />
                    </div>
                  ) : (
                    <div className="detail-contact-info">
                      <p><span className="label">Address:</span> <a href={getGoogleMapsUrl(currentStylist.address)} target="_blank" rel="noopener noreferrer">{currentStylist.address}</a></p>
                      <p><span className="label">Email:</span> <a href={`mailto:${currentStylist.email}`}>{currentStylist.email}</a></p>
                      <p><span className="label">Phone:</span> <a href={`tel:${currentStylist.phone}`}>{currentStylist.phone}</a></p>
                    </div>
                  )}
                  
                  <h2 className="detail-section-title">Pricing & Availability</h2>
                  {isEditingProfile ? (
                    <div className="edit-form-group">
                      <label><span className="label">Rate:</span></label>
                      <input 
                        type="text" 
                        value={editedProfile?.rate || ''} 
                        onChange={(e) => setEditedProfile({...editedProfile, rate: e.target.value})}
                        className="edit-input"
                        placeholder="e.g., $85/hour"
                      />
                      <label><span className="label">Hours:</span></label>
                      <input 
                        type="text" 
                        value={editedProfile?.hours || ''} 
                        onChange={(e) => setEditedProfile({...editedProfile, hours: e.target.value})}
                        className="edit-input"
                        placeholder="e.g., Mon-Fri: 9:00 AM - 6:00 PM"
                      />
                      <label><span className="label">Current Availability:</span></label>
                      <input 
                        type="text" 
                        value={editedProfile?.currentAvailability || ''} 
                        onChange={(e) => setEditedProfile({...editedProfile, currentAvailability: e.target.value})}
                        className="edit-input"
                        placeholder="e.g., Available this week"
                      />
                      <label><span className="label">Willing to Travel:</span></label>
                      <select 
                        value={editedProfile?.willingToTravel || ''} 
                        onChange={(e) => setEditedProfile({...editedProfile, willingToTravel: e.target.value})}
                        className="edit-select"
                      >
                        <option value="Yes, within 10 miles">Yes, within 10 miles</option>
                        <option value="Yes, within 15 miles">Yes, within 15 miles</option>
                        <option value="Yes, within 20 miles">Yes, within 20 miles</option>
                        <option value="Yes, within 25 miles">Yes, within 25 miles</option>
                        <option value="Yes, within 30 miles">Yes, within 30 miles</option>
                        <option value="No, salon only">No, salon only</option>
                      </select>
                        <label><span className="label">Accommodations:</span></label>
                        <input 
                          type="text" 
                          value={editedProfile?.accommodations || ''} 
                          onChange={(e) => setEditedProfile({...editedProfile, accommodations: e.target.value})}
                          className="edit-input"
                          placeholder="e.g., Kids welcome, Pets allowed"
                        />
                        <label><span className="label">Last Minute Bookings Allowed:</span></label>
                        <select
                          value={editedProfile?.lastMinuteBookingsAllowed || ''}
                          onChange={(e) => setEditedProfile({...editedProfile, lastMinuteBookingsAllowed: e.target.value})}
                          className="edit-select"
                        >
                          <option value="">Select an option</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                        <label><span className="label">Is Street Parking Available:</span></label>
                        <select
                          value={editedProfile?.streetParkingAvailable || ''}
                          onChange={(e) => setEditedProfile({...editedProfile, streetParkingAvailable: e.target.value})}
                          className="edit-select"
                        >
                          <option value="">Select an option</option>
                          <option value="No">No</option>
                          <option value="Yes">Yes</option>
                          <option value="Yes, but paid">Yes, but paid</option>
                        </select>
                        <label><span className="label">Accepted Payment Types:</span></label>
                        <input 
                          type="text" 
                          value={editedProfile?.acceptedPaymentTypes || ''} 
                          onChange={(e) => setEditedProfile({...editedProfile, acceptedPaymentTypes: e.target.value})}
                          className="edit-input"
                          placeholder="e.g., Cash, Credit Card, Venmo, PayPal"
                        />
                        <label><span className="label">Cancellation Policy:</span></label>
                        <textarea 
                          value={editedProfile?.cancellationPolicy || ''} 
                          onChange={(e) => setEditedProfile({...editedProfile, cancellationPolicy: e.target.value})}
                          className="edit-textarea"
                          rows="3"
                          placeholder="e.g., 24-hour cancellation notice required..."
                        />
                      </div>
                    ) : (
                      <div className="detail-pricing-info">
                        <p><span className="label">Rate:</span> {currentStylist.rate}</p>
                        <p><span className="label">Hours:</span> {currentStylist.hours}</p>
                        <p><span className="label">Current Availability:</span> {currentStylist.currentAvailability}</p>
                        <p><span className="label">Willing to Travel:</span> {currentStylist.willingToTravel}</p>
                        {currentStylist.accommodations && (
                          <p><span className="label">Accommodations:</span> {currentStylist.accommodations}</p>
                        )}
                        {currentStylist.lastMinuteBookingsAllowed && (
                          <p><span className="label">Last Minute Bookings Allowed:</span> {currentStylist.lastMinuteBookingsAllowed}</p>
                        )}
                        {currentStylist.streetParkingAvailable && (
                          <p><span className="label">Is Street Parking Available:</span> {currentStylist.streetParkingAvailable}</p>
                        )}
                        {currentStylist.acceptedPaymentTypes && (
                          <p><span className="label">Accepted Payment Types:</span> {currentStylist.acceptedPaymentTypes}</p>
                        )}
                        {currentStylist.cancellationPolicy && (
                          <p><span className="label">Cancellation Policy:</span> {currentStylist.cancellationPolicy}</p>
                        )}
                      </div>
                    )}
                  
                  <h2 className="detail-section-title">Experience</h2>
                  {isEditingProfile ? (
                    <div className="edit-form-group">
                      <label><span className="label">Years of Experience:</span></label>
                      <input 
                        type="text" 
                        value={editedProfile?.yearsOfExperience || ''} 
                        onChange={(e) => setEditedProfile({...editedProfile, yearsOfExperience: e.target.value})}
                        className="edit-input"
                        placeholder="e.g., 5 years"
                      />
                      <label><span className="label">Specialty:</span></label>
                      <input 
                        type="text" 
                        value={editedProfile?.specialty || ''} 
                        onChange={(e) => setEditedProfile({...editedProfile, specialty: e.target.value})}
                        className="edit-input"
                        placeholder="e.g., Modern cuts and color techniques"
                      />
                      <label><span className="label">Hair Texture Types:</span></label>
                      <input 
                        type="text" 
                        value={editedProfile?.hairTextureTypes || ''} 
                        onChange={(e) => setEditedProfile({...editedProfile, hairTextureTypes: e.target.value})}
                        className="edit-input"
                        placeholder="e.g., Type A, Type B, Type C"
                      />
                    </div>
                  ) : (
                    <>
                      <p><span className="label">Years of Experience:</span> {currentStylist.yearsOfExperience}</p>
                      <p><span className="label">Specialty:</span> {currentStylist.specialty}</p>
                      {currentStylist.hairTextureTypes && (
                        <p><span className="label">Hair Texture Types:</span> {currentStylist.hairTextureTypes}</p>
                      )}
                    </>
                  )}
                </div>
                
                <div className="detail-info-card">
                  <h2 className="detail-section-title">Services Offered</h2>
                  {isEditingProfile ? (
                    <div className="edit-services-container">
                      {(editedProfile?.editedServices || editedProfile?.services || []).map((service, index) => (
                        <div key={index} className="edit-service-row">
                          <input 
                            type="text" 
                            value={service.name || ''} 
                            onChange={(e) => {
                              const updatedServices = [...(editedProfile?.editedServices || editedProfile?.services || [])];
                              updatedServices[index] = { ...updatedServices[index], name: e.target.value };
                              setEditedProfile({...editedProfile, editedServices: updatedServices});
                            }}
                            className="edit-service-input"
                            placeholder="Service name"
                          />
                          <input 
                            type="text" 
                            value={service.duration || ''} 
                            onChange={(e) => {
                              const updatedServices = [...(editedProfile?.editedServices || editedProfile?.services || [])];
                              updatedServices[index] = { ...updatedServices[index], duration: e.target.value };
                              setEditedProfile({...editedProfile, editedServices: updatedServices});
                            }}
                            className="edit-service-input"
                            placeholder="Duration"
                          />
                          <input 
                            type="text" 
                            value={service.price || ''} 
                            onChange={(e) => {
                              const updatedServices = [...(editedProfile?.editedServices || editedProfile?.services || [])];
                              updatedServices[index] = { ...updatedServices[index], price: e.target.value };
                              setEditedProfile({...editedProfile, editedServices: updatedServices});
                            }}
                            className="edit-service-input"
                            placeholder="Price (optional, e.g., $30)"
                          />
                          <button 
                            type="button"
                            className="remove-service-button"
                            onClick={() => {
                              const updatedServices = (editedProfile?.editedServices || editedProfile?.services || []).filter((_, i) => i !== index);
                              setEditedProfile({...editedProfile, editedServices: updatedServices});
                            }}
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="18" y1="6" x2="6" y2="18"></line>
                              <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                          </button>
                        </div>
                      ))}
                      <button 
                        type="button"
                        className="add-service-button"
                        onClick={() => {
                          const updatedServices = [...(editedProfile?.editedServices || editedProfile?.services || []), { name: '', duration: '', price: '' }];
                          setEditedProfile({...editedProfile, editedServices: updatedServices});
                        }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                        Add Service
                      </button>
                    </div>
                  ) : (
                    <div className="detail-services-list">
                      {currentStylist.services.map((service, index) => (
                        <div key={index} className="detail-service-item">
                          <span className="service-name">
                            {service.name}{service.price ? ` (${service.price})` : ''}
                          </span>
                          <span className="service-duration">{service.duration}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="detail-info-card">
                  <h2 className="detail-section-title">Recommendations</h2>
                  <div className="stylist-recommendations-profile">
                    <div className="recommendation-count-display">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#48bb78" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                      <div className="recommendation-number">{getRecommendationCount(currentStylist.id)}</div>
                      <div className="recommendation-text">
                        {getRecommendationCount(currentStylist.id) === 1 ? 'person recommends' : 'people recommend'} your services
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="detail-info-card">
                  <h2 className="detail-section-title">About</h2>
                  {isEditingProfile ? (
                    <textarea 
                      value={editedProfile?.about || ''} 
                      onChange={(e) => setEditedProfile({...editedProfile, about: e.target.value})}
                      className="edit-textarea"
                      rows="5"
                      placeholder="Tell us about your experience and style..."
                    />
                  ) : (
                    <p className="detail-about-text">{currentStylist.about}</p>
                  )}
                </div>
              </div>
            </div>
            
            <div className="portfolio-section">
              <h2 className="detail-section-title portfolio-title">Previous Work</h2>
              {isEditingProfile ? (
                <div className="edit-portfolio-container">
                  {(editedProfile?.editedPortfolio || editedProfile?.portfolio || []).map((imageUrl, index) => (
                    <div key={index} className="edit-portfolio-item">
                      <img 
                        src={imageUrl} 
                        alt={`Previous work ${index + 1}`}
                        className="portfolio-preview-small"
                        loading="lazy"
                      />
                      <input 
                        type="text" 
                        value={imageUrl} 
                        onChange={(e) => {
                          const updatedPortfolio = [...(editedProfile?.editedPortfolio || editedProfile?.portfolio || [])];
                          updatedPortfolio[index] = e.target.value;
                          setEditedProfile({...editedProfile, editedPortfolio: updatedPortfolio});
                        }}
                        className="edit-portfolio-url-input"
                        placeholder="Image URL"
                      />
                      <button 
                        type="button"
                        className="remove-portfolio-button"
                        onClick={() => {
                          const updatedPortfolio = (editedProfile?.editedPortfolio || editedProfile?.portfolio || []).filter((_, i) => i !== index);
                          setEditedProfile({...editedProfile, editedPortfolio: updatedPortfolio});
                        }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                    </div>
                  ))}
                  <button 
                    type="button"
                    className="add-portfolio-button"
                    onClick={() => {
                      const updatedPortfolio = [...(editedProfile?.editedPortfolio || editedProfile?.portfolio || []), ''];
                      setEditedProfile({...editedProfile, editedPortfolio: updatedPortfolio});
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    Add Portfolio Image
                  </button>
                </div>
              ) : (
                currentStylist.portfolio && currentStylist.portfolio.length > 0 && (
                  <div className="portfolio-gallery">
                    {currentStylist.portfolio.map((imageUrl, index) => (
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
                )
              )}
            </div>
          </div>
          
          {similarStylists.length > 0 && (
            <div className="similar-stylists-section">
              <h2 className="similar-section-title">Similar Stylists</h2>
              <div className="similar-stylists-carousel">
                {similarStylists.map((similarStylist) => (
                  <div 
                    key={similarStylist.id} 
                    className="similar-stylist-item"
                    onClick={() => {
                      setShowProfile(false);
                      setSelectedStylistId(similarStylist.id);
                    }}
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

  // Show user registration page
  if (showUserRegistration) {
    return (
      <div className="app">
        <header className="header">
          <button 
            className="back-button"
            onClick={() => setShowUserRegistration(false)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back
          </button>
          <h1>Create Account</h1>
          <p className="subtitle">Join us to find your perfect stylist</p>
        </header>
        
        <main className="main-content">
          <div className="registration-container">
            <form className="registration-form" onSubmit={(e) => {
              e.preventDefault();
              alert('Registration submitted! (This is a demo - no data is saved)');
              setShowUserRegistration(false);
            }}>
              <div className="form-section">
                <h2 className="form-section-title">Account Information</h2>
                <div className="form-group">
                  <label htmlFor="user-email">Email *</label>
                  <input type="email" id="user-email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="user-password">Password *</label>
                  <input type="password" id="user-password" name="password" required minLength="6" />
                </div>
                <div className="form-group">
                  <label htmlFor="user-confirm-password">Confirm Password *</label>
                  <input type="password" id="user-confirm-password" name="confirmPassword" required minLength="6" />
                </div>
              </div>

              <div className="form-section">
                <h2 className="form-section-title">Personal Information</h2>
                <div className="form-group">
                  <label htmlFor="user-name">Full Name *</label>
                  <input type="text" id="user-name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="user-phone">Phone Number *</label>
                  <input type="tel" id="user-phone" name="phone" required />
                </div>
                <div className="form-group">
                  <label htmlFor="user-address">Address</label>
                  <input type="text" id="user-address" name="address" />
                </div>
              </div>

              <div className="form-section">
                <h2 className="form-section-title">Preferences</h2>
                <div className="form-group">
                  <label>Hair Style Preferences</label>
                  <p className="form-hint">Select from available styles or add your own</p>
                  
                  {/* Search Input */}
                  <div className="hair-style-search-wrapper">
                    <input
                      type="text"
                      className="hair-style-search-input"
                      placeholder="Search hair styles..."
                      value={hairStyleSearchQuery}
                      onChange={(e) => setHairStyleSearchQuery(e.target.value)}
                    />
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hair-style-search-icon">
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.35-4.35"></path>
                    </svg>
                    {hairStyleSearchQuery && (
                      <button
                        type="button"
                        className="hair-style-search-clear"
                        onClick={() => setHairStyleSearchQuery('')}
                        aria-label="Clear search"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                    )}
                  </div>
                  
                  {/* Predefined Hair Styles */}
                  <div className="hair-styles-grid">
                    {[
                      // Basic Services
                      "Haircut", "Hair Color", "Highlights", "Balayage", "Ombre",
                      "Blowout", "Updo", "Bridal", "Men's Cut", "Fade",
                      "Beard Trim", "Perm", "Keratin Treatment", "Hair Extensions",
                      "Braids", "Natural Hair", "Curly Hair", "Straightening",
                      "Vintage", "Retro", "Classic", "Modern", "Edgy",
                      // Black Hair & Natural Hair Styles
                      "Box Braids", "Cornrows", "Ghana Braids", "Senegalese Twists", "Fulani Braids",
                      "Locs", "Dreadlocks", "Starter Locs", "Maintenance Locs", "Interlocking",
                      "Two Strand Twists", "Flat Twists", "Bantu Knots", "Finger Coils", "Wash and Go",
                      "TWA (Teeny Weeny Afro)", "Afro", "Puff", "Pineapple", "Protective Styles",
                      "Wig Installation", "Weave Installation", "Sew-In", "Quick Weave", "Closure",
                      "Frontal", "360 Frontal", "Crochet Braids", "Passion Twists", "Knotless Braids",
                      "Feed-In Braids", "Micro Braids", "Goddess Braids", "Dutch Braids", "French Braids",
                      // Textured & Curly Hair
                      "Deva Cut", "Curly Cut", "Dry Cut", "Razor Cut", "Texturizing",
                      "Layered Cut", "Shag Cut", "Pixie Cut", "Bob Cut", "Lob Cut",
                      // Color & Highlights
                      "Full Color", "Root Touch-Up", "Color Correction", "Bleach", "Toner",
                      "Foil Highlights", "Babylights", "Balayage Highlights", "Ombre Color", "Sombre",
                      "Fashion Colors", "Pastel Colors", "Vivid Colors", "Color Melt", "Shadow Root",
                      // Styling & Treatments
                      "Hair Treatment", "Deep Conditioning", "Protein Treatment", "Hot Oil Treatment", "Scalp Treatment",
                      "Hair Mask", "Hair Steam", "Hair Botox", "Hair Gloss", "Hair Glaze",
                      // Special Occasions
                      "Wedding Hair", "Prom Hair", "Event Styling", "Red Carpet", "Photoshoot",
                      "Hair & Makeup", "Trial Run", "Hair Consultation", "Color Consultation", "Style Consultation"
                    ].filter((style) => {
                      if (!hairStyleSearchQuery.trim()) return true;
                      return style.toLowerCase().includes(hairStyleSearchQuery.toLowerCase());
                    }).map((style) => (
                      <label key={style} className="hair-style-checkbox">
                        <input
                          type="checkbox"
                          checked={selectedHairStyles.includes(style)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedHairStyles([...selectedHairStyles, style]);
                            } else {
                              setSelectedHairStyles(selectedHairStyles.filter(s => s !== style));
                            }
                          }}
                        />
                        <span>{style}</span>
                      </label>
                    ))}
                  </div>
                  
                  {/* Custom Hair Style Input */}
                  <div className="custom-hair-style-input">
                    <input
                      type="text"
                      value={customHairStyleInput}
                      onChange={(e) => setCustomHairStyleInput(e.target.value)}
                      placeholder="Type a custom hair style..."
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          if (customHairStyleInput.trim() && !selectedHairStyles.includes(customHairStyleInput.trim())) {
                            setSelectedHairStyles([...selectedHairStyles, customHairStyleInput.trim()]);
                            setCustomHairStyleInput('');
                          }
                        }
                      }}
                    />
                    <button
                      type="button"
                      className="add-custom-style-button"
                      onClick={() => {
                        if (customHairStyleInput.trim() && !selectedHairStyles.includes(customHairStyleInput.trim())) {
                          setSelectedHairStyles([...selectedHairStyles, customHairStyleInput.trim()]);
                          setCustomHairStyleInput('');
                        }
                      }}
                    >
                      Add
                    </button>
                  </div>
                  
                  {/* Selected Styles Bubbles */}
                  {selectedHairStyles.length > 0 && (
                    <div className="selected-hair-styles">
                      {selectedHairStyles.map((style, index) => (
                        <span key={index} className="hair-style-bubble">
                          {style}
                          <button
                            type="button"
                            className="remove-bubble-button"
                            onClick={() => {
                              setSelectedHairStyles(selectedHairStyles.filter((_, i) => i !== index));
                            }}
                            aria-label={`Remove ${style}`}
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="18" y1="6" x2="6" y2="18"></line>
                              <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                  
                  {/* Hidden input for form submission */}
                  <input
                    type="hidden"
                    name="preferences"
                    value={selectedHairStyles.join(', ')}
                  />
                </div>
              </div>

              <div className="form-actions">
                <button type="submit" className="submit-button">Create Account</button>
                <button type="button" className="cancel-button" onClick={() => setShowUserRegistration(false)}>Cancel</button>
              </div>
            </form>
          </div>
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
                  <label htmlFor="profilePicture">Profile Picture *</label>
                  <div className="file-upload-container">
                    <input 
                      type="file" 
                      id="profilePicture" 
                      name="profilePicture" 
                      accept="image/*"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          setProfilePhoto(e.target.files[0]);
                        }
                      }}
                      className="file-input"
                    />
                    <label htmlFor="profilePicture" className="file-upload-label">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="17 8 12 3 7 8"></polyline>
                        <line x1="12" y1="3" x2="12" y2="15"></line>
                      </svg>
                      {profilePhoto ? profilePhoto.name : 'Choose Profile Photo'}
                    </label>
                    {profilePhoto && (
                      <div className="file-preview">
                        <img src={URL.createObjectURL(profilePhoto)} alt="Profile preview" className="preview-image" />
                        <button 
                          type="button" 
                          className="remove-file-button"
                          onClick={() => setProfilePhoto(null)}
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>
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
                  <label htmlFor="hairTextureTypes">Hair Texture Types *</label>
                  <p className="form-hint">Select all hair texture types you work with</p>
                  <div className="hair-texture-types-grid">
                    <label className="hair-texture-checkbox">
                      <input 
                        type="checkbox" 
                        name="hairTextureTypes" 
                        value="Type A"
                        checked={selectedHairTextureTypes.includes("Type A")}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedHairTextureTypes([...selectedHairTextureTypes, "Type A"]);
                          } else {
                            setSelectedHairTextureTypes(selectedHairTextureTypes.filter(t => t !== "Type A"));
                          }
                        }}
                      />
                      <span>Type A (Straight)</span>
                    </label>
                    <label className="hair-texture-checkbox">
                      <input 
                        type="checkbox" 
                        name="hairTextureTypes" 
                        value="Type B"
                        checked={selectedHairTextureTypes.includes("Type B")}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedHairTextureTypes([...selectedHairTextureTypes, "Type B"]);
                          } else {
                            setSelectedHairTextureTypes(selectedHairTextureTypes.filter(t => t !== "Type B"));
                          }
                        }}
                      />
                      <span>Type B (Wavy)</span>
                    </label>
                    <label className="hair-texture-checkbox">
                      <input 
                        type="checkbox" 
                        name="hairTextureTypes" 
                        value="Type C"
                        checked={selectedHairTextureTypes.includes("Type C")}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedHairTextureTypes([...selectedHairTextureTypes, "Type C"]);
                          } else {
                            setSelectedHairTextureTypes(selectedHairTextureTypes.filter(t => t !== "Type C"));
                          }
                        }}
                      />
                      <span>Type C (Curly)</span>
                    </label>
                  </div>
                  <input
                    type="hidden"
                    name="hairTextureTypes"
                    value={selectedHairTextureTypes.join(', ')}
                  />
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
                <div className="form-group">
                  <label htmlFor="accommodations">Accommodations</label>
                  <input 
                    type="text" 
                    id="accommodations" 
                    name="accommodations" 
                    placeholder="e.g., Kids welcome, Pets allowed"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastMinuteBookingsAllowed">Last Minute Bookings Allowed</label>
                  <select id="lastMinuteBookingsAllowed" name="lastMinuteBookingsAllowed">
                    <option value="">Select an option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="streetParkingAvailable">Is Street Parking Available</label>
                  <select id="streetParkingAvailable" name="streetParkingAvailable">
                    <option value="">Select an option</option>
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                    <option value="Yes, but paid">Yes, but paid</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Accepted Payment Types</label>
                  <p className="form-hint">Select all payment types you accept</p>
                  <div className="payment-types-grid">
                    {paymentTypes.map((type) => (
                      <label key={type} className="payment-type-checkbox">
                        <input
                          type="checkbox"
                          checked={selectedPaymentTypes.includes(type)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedPaymentTypes([...selectedPaymentTypes, type]);
                            } else {
                              setSelectedPaymentTypes(selectedPaymentTypes.filter(t => t !== type));
                            }
                          }}
                        />
                        <span>{type}</span>
                      </label>
                    ))}
                  </div>
                  {/* Hidden input for form submission */}
                  <input
                    type="hidden"
                    name="acceptedPaymentTypes"
                    value={selectedPaymentTypes.join(', ')}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cancellationPolicy">Cancellation Policy</label>
                  <textarea 
                    id="cancellationPolicy" 
                    name="cancellationPolicy" 
                    rows="3" 
                    placeholder="e.g., 24-hour cancellation notice required. Full charge for no-shows or cancellations within 24 hours."
                  ></textarea>
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
                <h2 className="form-section-title">Portfolio</h2>
                <div className="form-group">
                  <label>Portfolio Pictures (Add your previous work)</label>
                  <div className="portfolio-upload-container">
                    <input 
                      type="file" 
                      id="portfolioPictures" 
                      name="portfolioPictures" 
                      accept="image/*"
                      multiple
                      onChange={(e) => {
                        if (e.target.files) {
                          const newFiles = Array.from(e.target.files);
                          setPortfolioPhotos([...portfolioPhotos, ...newFiles]);
                        }
                      }}
                      className="file-input"
                    />
                    <label htmlFor="portfolioPictures" className="file-upload-label">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="17 8 12 3 7 8"></polyline>
                        <line x1="12" y1="3" x2="12" y2="15"></line>
                      </svg>
                      Add Portfolio Pictures
                    </label>
                    {portfolioPhotos.length > 0 && (
                      <div className="portfolio-preview-grid">
                        {portfolioPhotos.map((photo, index) => (
                          <div key={index} className="portfolio-preview-item">
                            <img src={URL.createObjectURL(photo)} alt={`Portfolio ${index + 1}`} className="preview-image" />
                            <button 
                              type="button" 
                              className="remove-file-button"
                              onClick={() => setPortfolioPhotos(portfolioPhotos.filter((_, i) => i !== index))}
                            >
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                              </svg>
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
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
                        <input 
                          type="text" 
                          className="service-price-input" 
                          placeholder="Price (optional, e.g., $30)" 
                          value={service.price || ''}
                          onChange={(e) => {
                            const newServices = [...registrationServices];
                            newServices[index].price = e.target.value;
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
                        setRegistrationServices([...registrationServices, { name: '', duration: '', price: '' }]);
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
        <div className="header-buttons-container">
          {loggedInStylist ? (
            <div className="logged-in-buttons">
              <button 
                className="profile-button"
                onClick={() => setShowProfile(true)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                My Profile
              </button>
              <button 
                className="logout-button"
                onClick={() => {
                  setLoggedInStylist(null);
                  setShowProfile(false);
                  setIsEditingProfile(false);
                  setEditedProfile(null);
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                  <polyline points="16 17 21 12 16 7"></polyline>
                  <line x1="21" y1="12" x2="9" y2="12"></line>
                </svg>
                Logout
              </button>
            </div>
          ) : loggedInUser ? (
            <div className="logged-in-buttons">
              <button 
                className="profile-button"
                onClick={() => setShowUserProfile(true)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                My Profile
              </button>
              <button 
                className="logout-button"
                onClick={() => {
                  setLoggedInUser(null);
                  setShowUserProfile(false);
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                  <polyline points="16 17 21 12 16 7"></polyline>
                  <line x1="21" y1="12" x2="9" y2="12"></line>
                </svg>
                Logout
              </button>
            </div>
          ) : (
            <>
              <div className="user-menu-container">
                <button 
                  className="looking-for-stylist-button"
                  onClick={() => setShowUserDropdown(!showUserDropdown)}
                >
                  I'm looking for a stylist
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '6px', transition: 'transform 0.3s ease', transform: showUserDropdown ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </button>
                {showUserDropdown && (
                  <div className="user-dropdown">
                    <button 
                      className="dropdown-item"
                      onClick={() => {
                        setShowUserDropdown(false);
                        setShowUserRegistration(true);
                      }}
                    >
                      Register
                    </button>
                    <button 
                      className="dropdown-item"
                      onClick={() => {
                        setShowUserDropdown(false);
                        setShowUserLogin(true);
                      }}
                    >
                      Login
                    </button>
                  </div>
                )}
              </div>
              <div className="stylist-menu-container">
                <button 
                  className="register-stylist-button"
                  onClick={() => setShowStylistDropdown(!showStylistDropdown)}
                >
                  I am a stylist
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '6px', transition: 'transform 0.3s ease', transform: showStylistDropdown ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </button>
                {showStylistDropdown && (
                  <div className="stylist-dropdown">
                    <button 
                      className="dropdown-item"
                      onClick={() => {
                        setShowStylistDropdown(false);
                        setShowRegistration(true);
                      }}
                    >
                      Register
                    </button>
                    <button 
                      className="dropdown-item"
                      onClick={() => {
                        setShowStylistDropdown(false);
                        setShowLogin(true);
                      }}
                    >
                      Login
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
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

          <div className="filter-group">
            <label htmlFor="hair-texture-filter" className="filter-label">Hair Texture Type</label>
            <select
              id="hair-texture-filter"
              className="filter-select"
              value={selectedHairTextureType}
              onChange={(e) => setSelectedHairTextureType(e.target.value)}
            >
              <option value="all">All Types</option>
              <option value="Type A">Type A (Straight)</option>
              <option value="Type B">Type B (Wavy)</option>
              <option value="Type C">Type C (Curly)</option>
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="date-filter" className="filter-label">Desired Date</label>
            <input
              type="date"
              id="date-filter"
              className="filter-input"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              onBlur={(e) => {
                if (selectedDate) {
                  setAppliedDate(selectedDate);
                }
              }}
            />
          </div>

          <div className="filter-group">
            <label htmlFor="time-filter" className="filter-label">Desired Time</label>
            <input
              type="time"
              id="time-filter"
              className="filter-input"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              onBlur={(e) => {
                // Update appliedTime when user clicks outside, using current input value
                setAppliedTime(e.target.value || '');
              }}
            />
          </div>

          {(selectedSpecialty !== 'all' || selectedRate !== 'all' || selectedTravel !== 'all' || selectedHairTextureType !== 'all' || selectedDate || selectedTime || appliedDate || appliedTime) && (
            <button
              className="clear-filters-button"
              onClick={() => {
                setSelectedSpecialty('all');
                setSelectedRate('all');
                setSelectedTravel('all');
                setSelectedHairTextureType('all');
                setSelectedDate('');
                setSelectedTime('');
                setAppliedDate('');
                setAppliedTime('');
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
            filteredStylists.map((stylist) => {
              const isFavorited = loggedInUser && (loggedInUser.favorites || []).includes(stylist.id);
              // Check availability: if neither date nor time is applied, all stylists are available
              // Otherwise, check availability (handles date-only, time-only, or both)
              const isAvailableAtDateTime = (!appliedDate && !appliedTime) || checkAvailability(stylist, appliedDate || '', appliedTime || '');
              
              // Determine warning message based on what filters are applied
              let warningMessage = 'Not available';
              if (appliedDate && appliedTime) {
                warningMessage = 'Not available at selected date/time';
              } else if (appliedDate) {
                warningMessage = 'Not available on selected date';
              } else if (appliedTime) {
                warningMessage = 'Not available at selected time';
              }
              
              return (
              <div 
                key={stylist.id}
                className={`stylist-card ${!isAvailableAtDateTime ? 'not-available' : ''}`}
                onClick={() => setSelectedStylistId(stylist.id)}
              >
                <div className="stylist-header">
                  <img 
                    src={stylist.profilePicture} 
                    alt={stylist.name}
                    className="stylist-profile-picture"
                  />
                  <h2 className="stylist-name">{stylist.name}</h2>
                  {loggedInUser && (
                    <button
                      className={`favorite-button ${isFavorited ? 'favorited' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(stylist.id);
                      }}
                      aria-label={isFavorited ? "Remove from favorites" : "Add to favorites"}
                    >
                      <svg viewBox="0 0 24 24" fill={isFavorited ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                    </button>
                  )}
                </div>
              {!isAvailableAtDateTime && (
                <div className="availability-warning">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                  <span>{warningMessage}</span>
                </div>
              )}
              <div className="stylist-info">
                {getRecommendationCount(stylist.id) > 0 && (
                  <p className="recommendation-count-simple">
                    {getRecommendationCount(stylist.id)} {getRecommendationCount(stylist.id) === 1 ? 'person recommends' : 'people recommend'} this stylist
                  </p>
                )}
                <p className="stylist-address">
                  <span className="label">Address:</span> <a href={getGoogleMapsUrl(stylist.address)} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>{stylist.address}</a>
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
                {stylist.accommodations && (
                  <p className="stylist-accommodations">
                    <span className="label">Accommodations:</span> {stylist.accommodations}
                  </p>
                )}
                {stylist.lastMinuteBookingsAllowed && (
                  <p className="stylist-last-minute">
                    <span className="label">Last Minute Bookings Allowed:</span> {stylist.lastMinuteBookingsAllowed}
                  </p>
                )}
                {stylist.streetParkingAvailable && (
                  <p className="stylist-parking">
                    <span className="label">Is Street Parking Available:</span> {stylist.streetParkingAvailable}
                  </p>
                )}
                {stylist.acceptedPaymentTypes && (
                  <div className="stylist-payment-types">
                    <span className="label">Accepted Payment Types:</span>
                    <div className="payment-methods-icons">
                      {parsePaymentTypes(stylist.acceptedPaymentTypes).map((paymentType, index) => (
                        <div key={index} className="payment-method-icon" title={paymentType}>
                          {getPaymentIcon(paymentType)}
                          <span className="payment-method-name">{paymentType}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {stylist.cancellationPolicy && (
                  <p className="stylist-cancellation-policy">
                    <span className="label">Cancellation Policy:</span> {stylist.cancellationPolicy}
                  </p>
                )}
                <p className="stylist-specialty">
                  <span className="label">Speciality:</span> {stylist.specialty}
                </p>
                {stylist.hairTextureTypes && (
                  <p className="stylist-hair-texture">
                    <span className="label">Hair Texture Types:</span> {stylist.hairTextureTypes}
                  </p>
                )}
                <div className="stylist-services">
                  <span className="label">Services:</span>
                  <div className="services-list">
                    {stylist.services.map((service, index) => (
                      <div key={index} className="service-item">
                        <span className="service-name">
                          {service.name}{service.price ? ` (${service.price})` : ''}
                        </span>
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
            );
            })
          )}
        </div>
      </main>
    </div>
  )
}

export default App
