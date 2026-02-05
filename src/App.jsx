import React from 'react'
import './App.css'
import { API_BASE_URL } from './config.js'

// Helper function to fix image URLs for mobile (replace localhost with current API base)
const fixImageUrl = (url) => {
  if (!url) return url;
  // If URL contains localhost, replace it with current API base URL
  if (url.includes('localhost:3001') || url.includes('127.0.0.1:3001')) {
    const apiBase = API_BASE_URL.replace(/\/api$/, ''); // Remove /api if present
    return url.replace(/https?:\/\/[^/]+/, apiBase);
  }
  return url;
};

// Stylists data will now be fetched from the backend API

function App() {
  // State for stylists data from backend API
  const [stylists, setStylists] = React.useState([]);
  const [stylistsLoading, setStylistsLoading] = React.useState(true);
  const [stylistsError, setStylistsError] = React.useState(null);

  // Fetch stylists from backend API when home page opens (component mount)
  React.useEffect(() => {
    const fetchStylists = async () => {
      try {
        setStylistsLoading(true);
        setStylistsError(null);
        console.log('Fetching stylists from backend API...');
        const response = await fetch(`${API_BASE_URL}/api/stylists`);
        if (!response.ok) {
          throw new Error('Failed to fetch stylists');
        }
        const result = await response.json();
        if (result.success && result.data) {
          console.log(`Successfully fetched ${result.data.length} stylists from backend`);
          setStylists(result.data);
        } else {
          throw new Error('Invalid response format');
        }
      } catch (error) {
        console.error('Error fetching stylists from backend:', error);
        setStylistsError(error.message);
      } finally {
        setStylistsLoading(false);
      }
    };

    // Fetch immediately when component mounts (home page opens)
    fetchStylists();

    // Check if user has seen mission statement before
    const hasSeenMissionStatement = localStorage.getItem('hasSeenMissionStatement');
    if (!hasSeenMissionStatement) {
      setShowMissionStatement(true);
    }
  }, []); // Empty dependency array ensures this runs once on mount

  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedSpecialty, setSelectedSpecialty] = React.useState('all');
  const [selectedRate, setSelectedRate] = React.useState('all');
  const [selectedTravel, setSelectedTravel] = React.useState('all');
  const [selectedHairTextureType, setSelectedHairTextureType] = React.useState('all');
  const [selectedAvailableNow, setSelectedAvailableNow] = React.useState('all');
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage] = React.useState(12);
  const [selectedDate, setSelectedDate] = React.useState('');
  const [selectedTime, setSelectedTime] = React.useState('');
  const [appliedDate, setAppliedDate] = React.useState('');
  const [appliedTime, setAppliedTime] = React.useState('');
  const [showBookingPage, setShowBookingPage] = React.useState(false);
  const [showBookingConfirmation, setShowBookingConfirmation] = React.useState(false);
  const [bookingStylistId, setBookingStylistId] = React.useState(null);
  const userAppointmentsRef = React.useRef(null);
  const [appointmentPurpose, setAppointmentPurpose] = React.useState('');
  const [appointmentDate, setAppointmentDate] = React.useState('');
  const [appointmentTime, setAppointmentTime] = React.useState('');
  const [selectedServices, setSelectedServices] = React.useState([]);
  const [conversationPreference, setConversationPreference] = React.useState('no-preference'); // 'quiet', 'chat', 'no-preference'
  const [userAppointments, setUserAppointments] = React.useState([]);
  const [userAppointmentsLoading, setUserAppointmentsLoading] = React.useState(false);
  const [stylistAppointments, setStylistAppointments] = React.useState([]);
  const [stylistAppointmentsLoading, setStylistAppointmentsLoading] = React.useState(false);
  const [suggestingDateTime, setSuggestingDateTime] = React.useState(null);
  const [suggestedDate, setSuggestedDate] = React.useState('');
  const [suggestedTime, setSuggestedTime] = React.useState('');
  const [viewMode, setViewMode] = React.useState('stylists'); // 'stylists', 'products', or 'bookings'
  const [selectedStylistId, setSelectedStylistId] = React.useState(null);
  const [filtersExpanded, setFiltersExpanded] = React.useState(false); // For mobile collapsible filters
  const [scrollToProducts, setScrollToProducts] = React.useState(false);
  const [productsSectionExpanded, setProductsSectionExpanded] = React.useState(false);
  const productsSectionRef = React.useRef(null);
  const [showReviewForm, setShowReviewForm] = React.useState(false);
  const [reviewRating, setReviewRating] = React.useState(0);
  const [reviewComment, setReviewComment] = React.useState('');
  const [hoveredRating, setHoveredRating] = React.useState(0);
  const [showRegistration, setShowRegistration] = React.useState(false);
  const [showLogin, setShowLogin] = React.useState(false);
  const [showUserRegistration, setShowUserRegistration] = React.useState(false);
  const [showUserLogin, setShowUserLogin] = React.useState(false);
  const [showRegisterOrLogin, setShowRegisterOrLogin] = React.useState(false);
  const [showMissionStatement, setShowMissionStatement] = React.useState(false);
  const [showMissionStatementPage, setShowMissionStatementPage] = React.useState(false);
  const [communityEmail, setCommunityEmail] = React.useState('');
  const [showStylistDropdown, setShowStylistDropdown] = React.useState(false);
  const [showUserDropdown, setShowUserDropdown] = React.useState(false);
  // JWT token state
  const [authToken, setAuthToken] = React.useState(() => {
    // Load token from localStorage on mount
    return localStorage.getItem('authToken') || null;
  });
  
  const [loggedInStylist, setLoggedInStylist] = React.useState(() => {
    // Load stylist from localStorage on mount
    try {
      const saved = localStorage.getItem('loggedInStylist');
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  });
  const [loggedInUser, setLoggedInUser] = React.useState(() => {
    // Load user from localStorage on mount
    try {
      const saved = localStorage.getItem('loggedInUser');
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  });
  
  // Helper function to get auth headers
  const getAuthHeaders = () => {
    const headers = {
      'Content-Type': 'application/json',
    };
    if (authToken) {
      headers['Authorization'] = `Bearer ${authToken}`;
    }
    return headers;
  };
  
  // Helper function to handle logout
  const handleLogout = () => {
    setAuthToken(null);
    setLoggedInUser(null);
    setLoggedInStylist(null);
    localStorage.removeItem('authToken');
    localStorage.removeItem('loggedInUser');
    localStorage.removeItem('loggedInStylist');
  };
  
  // Save token and user/stylist to localStorage when they change
  React.useEffect(() => {
    if (authToken) {
      localStorage.setItem('authToken', authToken);
    } else {
      localStorage.removeItem('authToken');
    }
  }, [authToken]);
  
  React.useEffect(() => {
    if (loggedInUser) {
      localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
    } else {
      localStorage.removeItem('loggedInUser');
    }
  }, [loggedInUser]);
  
  React.useEffect(() => {
    if (loggedInStylist) {
      localStorage.setItem('loggedInStylist', JSON.stringify(loggedInStylist));
    } else {
      localStorage.removeItem('loggedInStylist');
    }
  }, [loggedInStylist]);
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
  
  // Field error states for user registration
  const [userRegistrationErrors, setUserRegistrationErrors] = React.useState({});
  
  // Refs for user registration form fields (for scrolling to errors on mobile)
  const userRegistrationFieldRefs = {
    name: React.useRef(null),
    email: React.useRef(null),
    password: React.useRef(null),
    confirmPassword: React.useRef(null),
    phone: React.useRef(null),
    address: React.useRef(null)
  };

  // Function to scroll to first error field on mobile
  const scrollToFirstError = (errors, fieldRefs) => {
    // Only scroll on mobile (screen width <= 768px)
    if (window.innerWidth > 768) return;
    
    // Priority order: name, email, password, confirmPassword, phone, address
    const fieldOrder = ['name', 'email', 'password', 'confirmPassword', 'phone', 'address'];
    
    for (const field of fieldOrder) {
      if (errors[field] && fieldRefs[field]?.current) {
        setTimeout(() => {
          fieldRefs[field].current.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center',
            inline: 'nearest'
          });
          // Focus the field for better UX
          fieldRefs[field].current.focus();
        }, 100);
        break;
      }
    }
  };

  // Scroll to error when userRegistrationErrors change
  React.useEffect(() => {
    if (Object.keys(userRegistrationErrors).length > 0) {
      scrollToFirstError(userRegistrationErrors, userRegistrationFieldRefs);
    }
  }, [userRegistrationErrors]);
  
  // Field error states for stylist registration
  const [stylistRegistrationErrors, setStylistRegistrationErrors] = React.useState({});
  
  // Refs for stylist registration form fields (for scrolling to errors on mobile)
  const stylistRegistrationFieldRefs = {
    name: React.useRef(null),
    email: React.useRef(null),
    password: React.useRef(null),
    phone: React.useRef(null),
    address: React.useRef(null),
    specialty: React.useRef(null)
  };

  // Scroll to error when stylistRegistrationErrors change
  React.useEffect(() => {
    if (Object.keys(stylistRegistrationErrors).length > 0) {
      // Update field order for stylist form
      const stylistFieldOrder = ['name', 'email', 'password', 'phone', 'address', 'specialty'];
      const stylistErrors = stylistRegistrationErrors;
      const stylistRefs = stylistRegistrationFieldRefs;
      
      // Only scroll on mobile (screen width <= 768px)
      if (window.innerWidth <= 768) {
        for (const field of stylistFieldOrder) {
          if (stylistErrors[field] && stylistRefs[field]?.current) {
            setTimeout(() => {
              stylistRefs[field].current.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center',
                inline: 'nearest'
              });
              // Focus the field for better UX
              stylistRefs[field].current.focus();
            }, 100);
            break;
          }
        }
      }
    }
  }, [stylistRegistrationErrors]);
  
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
  const [customHairStyleInput, setCustomHairStyleInput] = React.useState('');
  const [selectedPaymentTypes, setSelectedPaymentTypes] = React.useState([]);
  const [selectedHairTextureTypes, setSelectedHairTextureTypes] = React.useState([]);
  const [currentAvailability, setCurrentAvailability] = React.useState('');
  const [customAvailability, setCustomAvailability] = React.useState('');
  
  // Work schedule state - each day can have different hours or be closed
  const [workSchedule, setWorkSchedule] = React.useState({
    Monday: { enabled: false, startTime: '09:00', endTime: '17:00' },
    Tuesday: { enabled: false, startTime: '09:00', endTime: '17:00' },
    Wednesday: { enabled: false, startTime: '09:00', endTime: '17:00' },
    Thursday: { enabled: false, startTime: '09:00', endTime: '17:00' },
    Friday: { enabled: false, startTime: '09:00', endTime: '17:00' },
    Saturday: { enabled: false, startTime: '09:00', endTime: '17:00' },
    Sunday: { enabled: false, startTime: '09:00', endTime: '17:00' }
  });
  
  // Edit profile work schedule state
  const [editWorkSchedule, setEditWorkSchedule] = React.useState({
    Monday: { enabled: false, startTime: '09:00', endTime: '17:00' },
    Tuesday: { enabled: false, startTime: '09:00', endTime: '17:00' },
    Wednesday: { enabled: false, startTime: '09:00', endTime: '17:00' },
    Thursday: { enabled: false, startTime: '09:00', endTime: '17:00' },
    Friday: { enabled: false, startTime: '09:00', endTime: '17:00' },
    Saturday: { enabled: false, startTime: '09:00', endTime: '17:00' },
    Sunday: { enabled: false, startTime: '09:00', endTime: '17:00' }
  });
  
  // Function to format schedule for display (converts JSON to readable string)
  const formatScheduleForDisplay = (schedule) => {
    if (!schedule) return '';
    
    // If it's already a string (old format), return as is
    if (typeof schedule === 'string') {
      // Check if it's JSON
      try {
        const parsed = JSON.parse(schedule);
        schedule = parsed;
      } catch (e) {
        // It's a formatted string, return it
        return schedule;
      }
    }
    
    // If it's an object (JSON format), format it
    if (typeof schedule === 'object') {
      const formatTime = (time) => {
        const [hours, minutes] = time.split(':');
        const hour = parseInt(hours);
        const ampm = hour >= 12 ? 'PM' : 'AM';
        const displayHour = hour % 12 || 12;
        return `${displayHour}:${minutes} ${ampm}`;
      };
      
      const enabledDays = Object.entries(schedule)
        .filter(([_, daySchedule]) => daySchedule && daySchedule.enabled)
        .map(([day, daySchedule]) => ({
          day,
          dayAbbr: day.substring(0, 3),
          schedule: daySchedule
        }));
      
      if (enabledDays.length === 0) return '';
      
      // Group consecutive days with same hours
      const groups = [];
      let currentGroup = null;
      
      enabledDays.forEach(({ day, dayAbbr, schedule: daySchedule }) => {
        const timeStr = `${formatTime(daySchedule.startTime)} - ${formatTime(daySchedule.endTime)}`;
        
        if (currentGroup && currentGroup.timeStr === timeStr) {
          currentGroup.endDay = dayAbbr;
        } else {
          if (currentGroup) {
            groups.push(currentGroup);
          }
          currentGroup = {
            startDay: dayAbbr,
            endDay: dayAbbr,
            timeStr
          };
        }
      });
      
      if (currentGroup) {
        groups.push(currentGroup);
      }
      
      return groups.map(group => {
        if (group.startDay === group.endDay) {
          return `${group.startDay}: ${group.timeStr}`;
        } else {
          return `${group.startDay}-${group.endDay}: ${group.timeStr}`;
        }
      }).join(', ');
    }
    
    return '';
  };
  
  // Function to parse hours string into schedule format
  const parseHoursString = (hoursString) => {
    const defaultSchedule = {
      Monday: { enabled: false, startTime: '09:00', endTime: '17:00' },
      Tuesday: { enabled: false, startTime: '09:00', endTime: '17:00' },
      Wednesday: { enabled: false, startTime: '09:00', endTime: '17:00' },
      Thursday: { enabled: false, startTime: '09:00', endTime: '17:00' },
      Friday: { enabled: false, startTime: '09:00', endTime: '17:00' },
      Saturday: { enabled: false, startTime: '09:00', endTime: '17:00' },
      Sunday: { enabled: false, startTime: '09:00', endTime: '17:00' }
    };
    
    if (!hoursString || !hoursString.trim()) {
      return defaultSchedule;
    }
    
    // First, try to parse as JSON (new format)
    try {
      const parsed = JSON.parse(hoursString);
      // Validate it's the correct structure
      if (parsed && typeof parsed === 'object' && parsed.Monday !== undefined) {
        return parsed;
      }
    } catch (e) {
      // Not JSON, continue with string parsing (backward compatibility)
    }
    
    const dayMap = {
      'mon': 'Monday',
      'tue': 'Tuesday',
      'wed': 'Wednesday',
      'thu': 'Thursday',
      'fri': 'Friday',
      'sat': 'Saturday',
      'sun': 'Sunday'
    };
    
    const schedule = { ...defaultSchedule };
    
    // Convert time to 24-hour format
    const parseTime = (hour, minute, ampm) => {
      let h = parseInt(hour);
      if (ampm && ampm.toLowerCase() === 'pm' && h !== 12) h += 12;
      if (ampm && ampm.toLowerCase() === 'am' && h === 12) h = 0;
      return `${String(h).padStart(2, '0')}:${minute}`;
    };
    
    // Split by comma to handle multiple entries
    const entries = hoursString.split(',').map(e => e.trim()).filter(e => e);
    
    entries.forEach(entry => {
      // Try to match patterns like:
      // "Mon-Fri: 9:00 AM - 5:00 PM"
      // "Mon: 9:00 AM - 5:00 PM"
      // "Mon-Fri: 9:00AM - 5:00PM" (no spaces)
      // "Mon: 9:00AM-5:00PM" (no spaces)
      
      // Match day range or single day (with optional colon)
      const dayPattern = /(mon|tue|wed|thu|fri|sat|sun)(?:\s*-\s*(mon|tue|wed|thu|fri|sat|sun))?\s*:?\s*/i;
      const dayMatch = entry.match(dayPattern);
      
      if (dayMatch) {
        const startDay = dayMatch[1].toLowerCase();
        const endDay = dayMatch[2] ? dayMatch[2].toLowerCase() : startDay;
        
        // Extract time part (everything after day pattern)
        const timePart = entry.substring(dayMatch[0].length).trim();
        
        // Match time patterns - flexible with spacing
        // Matches: "9:00 AM - 5:00 PM", "9:00AM-5:00PM", "9:00 AM-5:00 PM", etc.
        const timePatterns = [
          /(\d{1,2}):(\d{2})\s*(am|pm)\s*-\s*(\d{1,2}):(\d{2})\s*(am|pm)/i,
          /(\d{1,2}):(\d{2})(am|pm)\s*-\s*(\d{1,2}):(\d{2})(am|pm)/i,
          /(\d{1,2}):(\d{2})(am|pm)-(\d{1,2}):(\d{2})(am|pm)/i
        ];
        
        let timeMatch = null;
        for (const pattern of timePatterns) {
          timeMatch = timePart.match(pattern);
          if (timeMatch) break;
        }
        
        if (timeMatch) {
          // Extract time components from match groups
          // Pattern 1: "9:00 AM - 5:00 PM" -> groups: [full, 9, 00, AM, 5, 00, PM] (7 groups)
          // Pattern 2: "9:00AM-5:00PM" -> groups: [full, 9, 00, AM, 5, 00, PM] (7 groups)
          // Pattern 3: "9:00AM - 5:00PM" -> groups: [full, 9, 00, AM, 5, 00, PM] (7 groups)
          const startHour = timeMatch[1];
          const startMin = timeMatch[2];
          const startAmpm = timeMatch[3];
          const endHour = timeMatch[4];
          const endMin = timeMatch[5];
          const endAmpm = timeMatch[6];
          
          if (startHour && endHour) {
            const startTime = parseTime(startHour, startMin, startAmpm);
            const endTime = parseTime(endHour, endMin, endAmpm);
            
            // Get day indices
            const dayNames = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
            const startIdx = dayNames.indexOf(startDay);
            const endIdx = dayNames.indexOf(endDay);
            
            // Enable days in range
            if (startIdx >= 0 && endIdx >= 0) {
              for (let i = startIdx; i <= endIdx; i++) {
                const dayName = dayMap[dayNames[i]];
                if (dayName) {
                  schedule[dayName] = {
                    enabled: true,
                    startTime,
                    endTime
                  };
                }
              }
            }
          }
        }
      }
    });
    
    return schedule;
  };
  const [useCustomAvailability, setUseCustomAvailability] = React.useState(false);
  const [footerEmail, setFooterEmail] = React.useState('');
  const [emailSubmitted, setEmailSubmitted] = React.useState(false);

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

  // Initialize editedProfile when entering edit mode (fallback if button doesn't set it)
  React.useEffect(() => {
    if (isEditingProfile && loggedInStylist && !editedProfile) {
      setEditedProfile({ 
        ...loggedInStylist, 
        editedServices: [...loggedInStylist.services],
        editedPortfolio: [...(loggedInStylist.portfolio || [])],
        editedAnnouncements: [...(loggedInStylist.announcements || [])]
      });
      // Parse existing hours into schedule format - always parse, even if empty
      const parsedSchedule = parseHoursString(loggedInStylist.hours || '');
      setEditWorkSchedule(parsedSchedule);
    }
  }, [isEditingProfile, loggedInStylist, editedProfile]);
  
  // Also ensure schedule is loaded when editedProfile changes (in case it was set before schedule)
  React.useEffect(() => {
    if (isEditingProfile && loggedInStylist && editedProfile && loggedInStylist.hours) {
      // Check if schedule needs to be loaded (only if it's still default/empty)
      const hasEnabledDays = Object.values(editWorkSchedule).some(schedule => schedule.enabled);
      if (!hasEnabledDays) {
        const parsedSchedule = parseHoursString(loggedInStylist.hours);
        setEditWorkSchedule(parsedSchedule);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
  const addToRecentlyViewed = async (stylistId) => {
    if (!loggedInUser || !stylistId) return;
    
    const userId = loggedInUser.id;
    
    try {
      // Call backend API to add to recently viewed
      const response = await fetch(`${API_BASE_URL}/api/users/${userId}/recently-viewed`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({ stylistId })
      });
      
      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          // Update local state with backend response
          setRecentlyViewed({
            ...recentlyViewed,
            [userId]: result.data
          });
        }
      } else {
        // If backend fails, fall back to localStorage
        const userRecentlyViewed = recentlyViewed[userId] || [];
        const filtered = userRecentlyViewed.filter(id => id !== stylistId);
        const updated = [stylistId, ...filtered].slice(0, 20);
        setRecentlyViewed({
          ...recentlyViewed,
          [userId]: updated
        });
      }
    } catch (error) {
      console.error('Error adding to recently viewed:', error);
      // Fall back to localStorage on error
      const userRecentlyViewed = recentlyViewed[userId] || [];
      const filtered = userRecentlyViewed.filter(id => id !== stylistId);
      const updated = [stylistId, ...filtered].slice(0, 20);
      setRecentlyViewed({
        ...recentlyViewed,
        [userId]: updated
      });
    }
  };

  // Helper function to get recently viewed stylists for current user
  const getRecentlyViewed = async () => {
    if (!loggedInUser) return [];
    const userId = loggedInUser.id;
    
    try {
      // Try to fetch from backend first
      const response = await fetch(`${API_BASE_URL}/api/users/${userId}/recently-viewed`, {
        headers: getAuthHeaders()
      });
      
      if (response.ok) {
        const result = await response.json();
        if (result.success && result.data) {
          // Update local state with backend data
          const viewedIds = result.data.map(s => s.id);
          setRecentlyViewed({
            ...recentlyViewed,
            [userId]: viewedIds
          });
          return result.data;
        }
      }
    } catch (error) {
      console.error('Error fetching recently viewed:', error);
    }
    
    // Fall back to localStorage if backend fails
    const viewedIds = recentlyViewed[userId] || [];
    return viewedIds.map(id => stylists.find(s => s.id === id)).filter(Boolean);
  };

  // Helper function to generate Google Maps URL
  const getGoogleMapsUrl = (address) => {
    const encodedAddress = encodeURIComponent(address);
    return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  };
  
  // Format years of experience - add "years" if not present
  const formatYearsOfExperience = (years) => {
    if (!years || !years.toString().trim()) return '';
    const yearsStr = years.toString().trim();
    // Check if it already contains "year" or "years"
    if (yearsStr.toLowerCase().includes('year')) {
      return yearsStr;
    }
    // Extract just the number
    const numberMatch = yearsStr.match(/\d+/);
    if (numberMatch) {
      const num = numberMatch[0];
      return `${num} ${num === '1' ? 'year' : 'years'}`;
    }
    return yearsStr;
  };
  
  // Format rate - add $ and /hr if not present
  const formatRate = (rate) => {
    if (!rate || !rate.toString().trim()) return '';
    let rateStr = rate.toString().trim();
    const hasDollar = rateStr.includes('$');
    const hasHour = rateStr.toLowerCase().includes('/hr') || rateStr.toLowerCase().includes('/hour');
    
    // If already has both, return as is
    if (hasDollar && hasHour) {
      return rateStr;
    }
    
    // Extract the number
    const numberMatch = rateStr.match(/[\d.]+/);
    if (numberMatch) {
      const num = numberMatch[0];
      // Remove $ and /hr if present to rebuild correctly
      rateStr = num;
      if (!hasDollar) rateStr = `$${rateStr}`;
      if (!hasHour) rateStr = `${rateStr}/hr`;
      return rateStr;
    }
    return rateStr;
  };
  
  // Format service duration - add "min" if not present
  const formatServiceDuration = (duration) => {
    if (!duration || !duration.toString().trim()) return '';
    const durationStr = duration.toString().trim();
    // Check if it already contains "min" or "minute"
    if (durationStr.toLowerCase().includes('min')) {
      return durationStr;
    }
    // Extract the number
    const numberMatch = durationStr.match(/\d+/);
    if (numberMatch) {
      const num = numberMatch[0];
      return `${num} min`;
    }
    return durationStr;
  };
  
  // Format service price - add $ if not present
  const formatServicePrice = (price) => {
    if (!price || !price.toString().trim()) return '';
    const priceStr = price.toString().trim();
    // Check if it already has $
    if (priceStr.includes('$')) {
      return priceStr;
    }
    // Extract the number
    const numberMatch = priceStr.match(/[\d.]+/);
    if (numberMatch) {
      const num = numberMatch[0];
      return `$${num}`;
    }
    return priceStr;
  };
  
  // Format phone number - standardize to (XXX) XXX-XXXX format
  const formatConversationPreference = (preference) => {
    if (!preference) return null;
    const preferenceMap = {
      'quiet': 'Quiet preferred',
      'chat': 'Happy to chat',
      'no-preference': 'No preference'
    };
    return preferenceMap[preference] || preference;
  };

  const formatPhoneNumber = (phone) => {
    if (!phone || !phone.toString().trim()) return '';
    const phoneStr = phone.toString().trim();
    
    // Remove all non-digit characters
    const digits = phoneStr.replace(/\D/g, '');
    
    // If it's already formatted nicely (has parentheses, dashes, etc.), check if it's valid
    if (phoneStr.includes('(') || phoneStr.includes('-')) {
      // If it looks like it's already formatted, return as is
      if (phoneStr.match(/^[\d\s\-\(\)\+\.]+$/)) {
        return phoneStr;
      }
    }
    
    // Format based on number of digits
    if (digits.length === 10) {
      // US format: (XXX) XXX-XXXX
      return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
    } else if (digits.length === 11 && digits[0] === '1') {
      // US with country code: 1 (XXX) XXX-XXXX
      return `1 (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`;
    } else if (digits.length > 0) {
      // If it doesn't match standard formats, return with some formatting
      // Try to format as (XXX) XXX-XXXX if possible
      if (digits.length >= 10) {
        return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}${digits.length > 10 ? ' ' + digits.slice(10) : ''}`;
      }
      // Otherwise return the digits with some spacing
      return digits;
    }
    
    // If we can't format it, return original
    return phoneStr;
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
      
      // Check if day is enabled in schedule (works with both JSON and string formats)
      let dayInHours = false;
      
      // First, try to parse as JSON (new format)
      try {
        const schedule = parseHoursString(stylist.hours || '');
        if (schedule && schedule[selectedDayName] && schedule[selectedDayName].enabled) {
          dayInHours = true;
        }
      } catch (e) {
        // Not JSON or parse failed, use string matching (backward compatibility)
        const hours = formatScheduleForDisplay(stylist.hours || '');
        const hoursLower = hours.toLowerCase();
        
        // Check for day ranges (e.g., "Mon-Fri", "Tue-Sat")
        const dayMap = { mon: 1, tue: 2, wed: 3, thu: 4, fri: 5, sat: 6, sun: 0 };
        const dayRangePattern = /(mon|tue|wed|thu|fri|sat|sun)\s*-\s*(mon|tue|wed|thu|fri|sat|sun)/gi;
        const dayRangeMatches = [...hoursLower.matchAll(dayRangePattern)];
        
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
      }
      
      // If only date is provided, check day availability
      if (dateStr && !timeStr) {
        return dayInHours;
      }
      
      // If only time is provided or both are provided, check day first
      if (!dayInHours) return false;
      
      // If time is provided, check if it falls within the schedule
      if (timeStr) {
        // Try to parse the time (expecting HH:MM format)
        const [hoursStr, minutesStr] = timeStr.split(':');
        const selectedHour = parseInt(hoursStr);
        const selectedMinute = parseInt(minutesStr || '0');
        const selectedTime24 = `${String(selectedHour).padStart(2, '0')}:${String(selectedMinute).padStart(2, '0')}`;
        
        // Try to get schedule from JSON format
        try {
          const schedule = parseHoursString(stylist.hours || '');
          if (schedule && schedule[selectedDayName] && schedule[selectedDayName].enabled) {
            const daySchedule = schedule[selectedDayName];
            const startTime = daySchedule.startTime;
            const endTime = daySchedule.endTime;
            
            // Compare times (24-hour format)
            if (selectedTime24 >= startTime && selectedTime24 <= endTime) {
              return true;
            }
          }
        } catch (e) {
          // Not JSON format, fall back to basic check
          // For string format, just return true if day matches
          return true;
        }
      }
      
      // If no time provided or time check passed, return true
      return true;
      
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
      formatScheduleForDisplay(stylist.hours || '').toLowerCase().includes(query) ||
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

    // Available now filter
    const matchesAvailableNow = selectedAvailableNow === 'all' || 
      (selectedAvailableNow === 'yes' && stylist.availableNow === true) ||
      (selectedAvailableNow === 'no' && (stylist.availableNow === false || stylist.availableNow === undefined));

    return matchesSearch && matchesSpecialty && matchesRate && matchesTravel && matchesHairTextureType && matchesAvailableNow;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredStylists.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedStylists = filteredStylists.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedSpecialty, selectedRate, selectedTravel, selectedHairTextureType, selectedAvailableNow, appliedDate, appliedTime]);

  const selectedStylist = stylists.find(s => s.id === selectedStylistId);
  
  // Track when a stylist is viewed (for recently viewed list)
  React.useEffect(() => {
    if (selectedStylistId && loggedInUser) {
      addToRecentlyViewed(selectedStylistId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedStylistId, loggedInUser?.id]);
  
  // State for recently viewed stylists
  const [recentlyViewedStylists, setRecentlyViewedStylists] = React.useState([]);
  const [recentlyViewedLoading, setRecentlyViewedLoading] = React.useState(false);

  // Fetch user appointments when profile is shown or when bookings view is active
  React.useEffect(() => {
    const fetchUserAppointments = async () => {
      if ((!showUserProfile && viewMode !== 'bookings') || !loggedInUser || !loggedInUser.id) return;
      
      try {
        setUserAppointmentsLoading(true);
        const response = await fetch(`${API_BASE_URL}/api/appointments?userId=${loggedInUser.id}`, {
          headers: getAuthHeaders()
        });
        if (!response.ok) {
          throw new Error('Failed to fetch appointments');
        }
        const result = await response.json();
        if (result.success && result.data) {
          setUserAppointments(result.data);
        }
      } catch (error) {
        console.error('Error fetching user appointments:', error);
        setUserAppointments([]);
      } finally {
        setUserAppointmentsLoading(false);
      }
    };
    
    fetchUserAppointments();
  }, [loggedInUser?.id, showUserProfile, viewMode]);

  // Fetch recently viewed stylists when user profile is shown
  React.useEffect(() => {
    const fetchRecentlyViewed = async () => {
      if (!showUserProfile || !loggedInUser || !loggedInUser.id) {
        setRecentlyViewedStylists([]);
        return;
      }
      
      try {
        setRecentlyViewedLoading(true);
        const viewed = await getRecentlyViewed();
        setRecentlyViewedStylists(viewed || []);
      } catch (error) {
        console.error('Error fetching recently viewed:', error);
        setRecentlyViewedStylists([]);
      } finally {
        setRecentlyViewedLoading(false);
      }
    };
    
    fetchRecentlyViewed();
  }, [showUserProfile, loggedInUser?.id]);
  
  // Fetch stylist appointments when profile is shown
  React.useEffect(() => {
    const fetchStylistAppointments = async () => {
      if (!showProfile || !loggedInStylist || !loggedInStylist.id) return;
      
      try {
        setStylistAppointmentsLoading(true);
        const response = await fetch(`${API_BASE_URL}/api/appointments?stylistId=${loggedInStylist.id}`, {
          headers: getAuthHeaders()
        });
        if (!response.ok) {
          throw new Error('Failed to fetch appointments');
        }
        const result = await response.json();
        if (result.success && result.data) {
          setStylistAppointments(result.data);
        }
      } catch (error) {
        console.error('Error fetching stylist appointments:', error);
        setStylistAppointments([]);
      } finally {
        setStylistAppointmentsLoading(false);
      }
    };
    
    fetchStylistAppointments();
  }, [loggedInStylist?.id, showProfile]);
  
  // Reset products section expanded state when stylist changes (expanded by default)
  React.useEffect(() => {
    if (selectedStylistId) {
      // If not coming from product click, expand by default
      if (!scrollToProducts) {
        setProductsSectionExpanded(true);
      }
    }
  }, [selectedStylistId, scrollToProducts]);

  // Scroll to products section when navigating from product click
  React.useEffect(() => {
    if (scrollToProducts && selectedStylist && productsSectionRef.current) {
      // Small delay to ensure the DOM has updated
      setTimeout(() => {
        productsSectionRef.current?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
        setScrollToProducts(false);
      }, 100);
    }
  }, [scrollToProducts, selectedStylist]);

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
                    src={fixImageUrl(selectedStylist.profilePicture)} 
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
                    <p><span className="label">Phone:</span> <a href={`tel:${selectedStylist.phone}`}>{formatPhoneNumber(selectedStylist.phone)}</a></p>
                  </div>
                  
                  <h2 className="detail-section-title">Pricing & Availability</h2>
                  <div className="detail-pricing-info">
                    <p><span className="label">Rate:</span> {formatRate(selectedStylist.rate)}</p>
                    <p><span className="label">Hours:</span> {formatScheduleForDisplay(selectedStylist.hours)}</p>
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
                  <p><span className="label">Years of Experience:</span> {formatYearsOfExperience(selectedStylist.yearsOfExperience)}</p>
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
                          {service.name}{service.price ? ` (${formatServicePrice(service.price)})` : ''}
                        </span>
                        <span className="service-duration">{formatServiceDuration(service.duration)}</span>
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
                          {stylistReviews.length === 0 ? (
                            <div className="no-reviews-message">
                              <p>No reviews yet</p>
                            </div>
                          ) : (
                            stylistReviews
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
                            ))
                          )}
                        </div>
                      </>
                    );
                  })()}
                </div>
                  </div>
                </div>
                
                {selectedStylist.announcements && selectedStylist.announcements.length > 0 && (
                  <div className="detail-info-card">
                    <h2 className="detail-section-title">Announcements</h2>
                    <div className="announcements-list">
                      {selectedStylist.announcements.map((announcement, index) => (
                        <div key={index} className="announcement-item">
                          <div className="announcement-content">
                            <p className="announcement-text">{announcement.text}</p>
                            {announcement.date && (
                              <span className="announcement-date">
                                {new Date(announcement.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {selectedStylist.portfolio && selectedStylist.portfolio.length > 0 && (
                  <div className="portfolio-section">
                <h2 className="detail-section-title portfolio-title">Previous Work</h2>
                <div className="portfolio-gallery">
                  {selectedStylist.portfolio.map((imageUrl, index) => (
                    <div key={index} className="portfolio-item">
                      <img 
                        src={fixImageUrl(imageUrl)} 
                        alt={`Previous work ${index + 1}`}
                        className="portfolio-image"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {selectedStylist.products && selectedStylist.products.length > 0 && (
              <div className="products-section" ref={productsSectionRef}>
                <div 
                  className="products-section-header"
                  onClick={() => setProductsSectionExpanded(!productsSectionExpanded)}
                  style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                >
                  <h2 className="detail-section-title portfolio-title">Products</h2>
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    style={{ 
                      transform: productsSectionExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease'
                    }}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
                {productsSectionExpanded && (
                  <div className="products-carousel">
                    {selectedStylist.products.map((product, index) => (
                      <div key={index} className="product-item">
                        <img 
                          src={fixImageUrl(product.image) || 'https://via.placeholder.com/200'} 
                          alt={product.title || 'Product'}
                          className="product-image"
                          loading="lazy"
                        />
                        <div className="product-info">
                          <h3 className="product-title">{product.title}</h3>
                          <p className="product-price">{product.price && product.price.startsWith('$') ? product.price : `$${product.price}`}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
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
                      src={fixImageUrl(similarStylist.profilePicture)} 
                      alt={similarStylist.name}
                      className="similar-item-picture"
                    />
                    <div className="similar-item-info">
                      <h3 className="similar-item-name">{similarStylist.name}</h3>
                      <p className="similar-item-specialty">{similarStylist.specialty}</p>
                      <p className="similar-item-rate">{formatRate(similarStylist.rate)}</p>
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

  // Booking confirmation page
  if (showBookingConfirmation) {
    return (
      <div className="app">
        <header className="header">
          <h1>Booking Confirmation</h1>
        </header>
        <main className="main-content">
          <div className="booking-confirmation-container">
            <div className="booking-confirmation-icon">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h2 className="booking-confirmation-title">Booking Request Sent</h2>
            <p className="booking-confirmation-message">
              Your booking request has been successfully sent to the stylist. 
              You will be notified once they confirm your appointment.
            </p>
            <button
              className="check-booking-status-button"
              onClick={async () => {
                setShowBookingConfirmation(false);
                setShowUserProfile(true);
                // Refresh appointments to show the new booking
                if (loggedInUser && loggedInUser.id) {
                  try {
                    setUserAppointmentsLoading(true);
                    const response = await fetch(`${API_BASE_URL}/api/appointments?userId=${loggedInUser.id}`, {
          headers: getAuthHeaders()
        });
                    const result = await response.json();
                    if (result.success && result.data) {
                      setUserAppointments(result.data);
                    }
                  } catch (error) {
                    console.error('Error fetching appointments:', error);
                  } finally {
                    setUserAppointmentsLoading(false);
                  }
                }
                // Scroll to appointments section after a short delay to ensure the profile is rendered
                setTimeout(() => {
                  if (userAppointmentsRef.current) {
                    userAppointmentsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }, 200);
              }}
            >
              Check the status of your booking here
            </button>
            <button
              className="back-to-home-button"
              onClick={() => {
                setShowBookingConfirmation(false);
              }}
            >
              Back to Home
            </button>
          </div>
        </main>
      </div>
    );
  }

  // Show booking page
  if (showBookingPage && bookingStylistId) {
    const bookingStylist = stylists.find(s => s.id === bookingStylistId);
    
    const toggleService = (service) => {
      const isSelected = selectedServices.some(s => s.name === service.name);
      if (isSelected) {
        setSelectedServices(selectedServices.filter(s => s.name !== service.name));
      } else {
        setSelectedServices([...selectedServices, service]);
      }
    };
    
    const handleBookingSubmit = async (e) => {
      e.preventDefault();
      
      // If services are selected, use them; otherwise require purpose text
      const finalPurpose = selectedServices.length > 0 
        ? selectedServices.map(s => {
            const serviceText = s.name + (s.price ? ` (${formatServicePrice(s.price)})` : '') + (s.duration ? ` - ${formatServiceDuration(s.duration)}` : '');
            return serviceText;
          }).join(', ') + (appointmentPurpose.trim() ? ` - ${appointmentPurpose.trim()}` : '')
        : appointmentPurpose.trim();
      
      if (!finalPurpose) {
        alert('Please select at least one service or enter what the appointment is for.');
        return;
      }
      
      if (!appointmentDate) {
        alert('Please select a date for the appointment.');
        return;
      }
      
      if (!appointmentTime) {
        alert('Please select a time for the appointment.');
        return;
      }
      
      try {
        // Ensure conversationPreference is always set
        const finalConversationPreference = conversationPreference && ['quiet', 'chat', 'no-preference'].includes(conversationPreference) 
          ? conversationPreference 
          : 'no-preference';
        
        const bookingData = {
          stylistId: bookingStylistId,
          userId: loggedInUser ? loggedInUser.id : null,
          purpose: finalPurpose,
          services: selectedServices.map(s => s.name),
          date: appointmentDate,
          time: appointmentTime,
          customerName: loggedInUser ? loggedInUser.name : '',
          customerEmail: loggedInUser ? loggedInUser.email : '',
          customerPhone: loggedInUser ? loggedInUser.phone : '',
          conversationPreference: finalConversationPreference
        };
        
        const headers = getAuthHeaders();
        console.log('Booking request:', {
          url: `${API_BASE_URL}/api/appointments`,
          hasAuthToken: !!authToken,
          userId: loggedInUser?.id,
          bookingData
        });
        
        const response = await fetch(`${API_BASE_URL}/api/appointments`, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(bookingData)
        });
        
        // Try to parse JSON response
        let result;
        try {
          const text = await response.text();
          result = text ? JSON.parse(text) : {};
        } catch (parseError) {
          console.error('Failed to parse response:', parseError);
          alert(`Server error (${response.status}): ${response.statusText}. Please try again.`);
          return;
        }
        
        // Log full response for debugging
        console.log('Booking response:', {
          status: response.status,
          statusText: response.statusText,
          ok: response.ok,
          result: result
        });
        
        if (!response.ok) {
          // Handle HTTP error status codes
          let errorMessage = 'Failed to book appointment. Please try again.';
          
          // Try to get error message from various possible locations
          if (result.message) {
            errorMessage = result.message;
          } else if (result.error) {
            errorMessage = result.error;
          } else if (result.msg) {
            errorMessage = result.msg;
          }
          
          // Check for validation errors
          if (result.errors && Array.isArray(result.errors) && result.errors.length > 0) {
            const errorMessages = result.errors.map(err => {
              if (typeof err === 'string') return err;
              return err.message || err.msg || JSON.stringify(err);
            }).filter(Boolean).join(', ');
            if (errorMessages) {
              errorMessage = errorMessages;
            }
          }
          
          // Check for field errors
          if (result.fieldErrors && typeof result.fieldErrors === 'object') {
            const fieldErrorMessages = Object.values(result.fieldErrors)
              .filter(Boolean)
              .join(', ');
            if (fieldErrorMessages) {
              errorMessage = fieldErrorMessages;
            }
          }
          
          // If we still don't have a specific message, use status-based message
          if (errorMessage === 'Failed to book appointment. Please try again.') {
            if (response.status === 401) {
              errorMessage = 'Authentication failed. Please log in again.';
            } else if (response.status === 403) {
              errorMessage = 'Access denied. You do not have permission to perform this action.';
            } else if (response.status === 400) {
              errorMessage = 'Invalid request. Please check all fields and try again.';
            } else if (response.status === 404) {
              errorMessage = 'Stylist not found. Please try selecting a different stylist.';
            } else if (response.status >= 500) {
              errorMessage = 'Server error. Please try again later.';
            }
          }
          
          console.error('Booking error details:', {
            status: response.status,
            statusText: response.statusText,
            result: result,
            errorMessage: errorMessage
          });
          
          alert(errorMessage);
          return;
        }
        
        if (result.success) {
          setShowBookingPage(false);
          setShowBookingConfirmation(true);
          setBookingStylistId(null);
          setAppointmentPurpose('');
          setAppointmentDate('');
          setAppointmentTime('');
          setSelectedServices([]);
          setConversationPreference('no-preference');
        } else {
          const errorMsg = result.message || 'Failed to book appointment. Please try again.';
          console.error('Booking failed:', result);
          alert(errorMsg);
        }
      } catch (error) {
        console.error('Error booking appointment:', error);
        const errorMsg = error.message || 'Unknown error occurred';
        alert(`Failed to book appointment: ${errorMsg}. Please check your connection and try again.`);
      }
    };
    
    return (
      <div className="app">
        <header className="header">
          <button 
            className="back-button"
            onClick={() => {
          setShowBookingPage(false);
          setBookingStylistId(null);
          setAppointmentPurpose('');
          setAppointmentDate('');
          setAppointmentTime('');
          setSelectedServices([]);
          setConversationPreference('no-preference');
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Home
          </button>
          <h1>Book Appointment</h1>
          <p className="subtitle">Schedule with {bookingStylist ? bookingStylist.name : 'Stylist'}</p>
        </header>
        
        <main className="main-content">
          <div className="booking-container">
            {bookingStylist && (
              <div className="booking-stylist-info">
                <img 
                  src={fixImageUrl(bookingStylist.profilePicture)} 
                  alt={bookingStylist.name}
                  className="booking-stylist-photo"
                />
                <div className="booking-stylist-details">
                  <h2>{bookingStylist.name}</h2>
                  <p className="booking-stylist-specialty">{bookingStylist.specialty}</p>
                  <p className="booking-stylist-rate">{formatRate(bookingStylist.rate)}</p>
                  <p className="booking-stylist-address">{bookingStylist.address}</p>
                </div>
              </div>
            )}
            
            <form className="booking-form" onSubmit={handleBookingSubmit}>
              {bookingStylist && bookingStylist.services && bookingStylist.services.length > 0 && (
                <div className="form-group">
                  <label className="form-label">
                    Select Services <span className="required">*</span>
                  </label>
                  <div className="booking-services-grid">
                    {bookingStylist.services.map((service, index) => {
                      const isSelected = selectedServices.some(s => s.name === service.name);
                      return (
                        <button
                          key={index}
                          type="button"
                          className={`booking-service-button ${isSelected ? 'selected' : ''}`}
                          onClick={() => toggleService(service)}
                        >
                          <div className="booking-service-checkbox">
                            {isSelected && (
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                            )}
                          </div>
                          <div className="booking-service-info">
                            <div className="booking-service-name">{service.name}</div>
                            <div className="booking-service-details">
                              {service.price && <span className="booking-service-price">{formatServicePrice(service.price)}</span>}
                              {service.price && service.duration && <span className="booking-service-separator"> • </span>}
                              {service.duration && <span className="booking-service-duration">{formatServiceDuration(service.duration)}</span>}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
              
              <div className="form-group">
                <label htmlFor="appointment-purpose" className="form-label">
                  Additional Notes (Optional)
                </label>
                <textarea
                  id="appointment-purpose"
                  className="form-textarea"
                  value={appointmentPurpose}
                  onChange={(e) => setAppointmentPurpose(e.target.value)}
                  placeholder="Add any additional notes or custom requests..."
                  rows="3"
                />
                {selectedServices.length > 0 && (
                  <p className="form-hint">Selected services will be included in your appointment booking.</p>
                )}
              </div>
              
              <div className="form-row date-time-row">
                <div className="form-group">
                  <label htmlFor="appointment-date" className="form-label">
                    Date <span className="required">*</span>
                  </label>
                  <input
                    type="date"
                    id="appointment-date"
                    className="form-input"
                    value={appointmentDate}
                    onChange={(e) => setAppointmentDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="appointment-time" className="form-label">
                    Time <span className="required">*</span>
                  </label>
                  <input
                    type="time"
                    id="appointment-time"
                    className="form-input"
                    value={appointmentTime}
                    onChange={(e) => setAppointmentTime(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label className="form-label">
                  Conversation Preference
                </label>
                <p className="form-hint" style={{ marginBottom: '12px', fontSize: '0.9rem', color: '#666' }}>
                  Let your stylist know your preference for conversation during the appointment
                </p>
                <div className="conversation-preference-options">
                  <label className="conversation-preference-option">
                    <input
                      type="radio"
                      name="conversation-preference"
                      value="quiet"
                      checked={conversationPreference === 'quiet'}
                      onChange={(e) => setConversationPreference(e.target.value)}
                    />
                    <div className="preference-content">
                      <div className="preference-title">Quiet preferred</div>
                      <div className="preference-description">You'd rather not have conversation during the appointment</div>
                    </div>
                  </label>
                  <label className="conversation-preference-option">
                    <input
                      type="radio"
                      name="conversation-preference"
                      value="chat"
                      checked={conversationPreference === 'chat'}
                      onChange={(e) => setConversationPreference(e.target.value)}
                    />
                    <div className="preference-content">
                      <div className="preference-title">Happy to chat</div>
                      <div className="preference-description">You're open to friendly conversation</div>
                    </div>
                  </label>
                  <label className="conversation-preference-option">
                    <input
                      type="radio"
                      name="conversation-preference"
                      value="no-preference"
                      checked={conversationPreference === 'no-preference'}
                      onChange={(e) => setConversationPreference(e.target.value)}
                    />
                    <div className="preference-content">
                      <div className="preference-title">No preference</div>
                      <div className="preference-description">You're okay either way; you'll let the appointment unfold naturally</div>
                    </div>
                  </label>
                </div>
              </div>
              
              <div className="booking-actions">
                <button 
                  type="button"
                  className="cancel-booking-button"
                  onClick={() => {
                    setShowBookingPage(false);
                    setBookingStylistId(null);
                    setAppointmentPurpose('');
                    setAppointmentDate('');
                    setAppointmentTime('');
                    setSelectedServices([]);
                    setConversationPreference('no-preference');
                  }}
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="submit-booking-button"
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    );
  }

  // Show mission statement page
  if (showMissionStatementPage) {
    return (
      <div className="app">
        <header className="header">
          <button 
            className="back-button"
            onClick={() => setShowMissionStatementPage(false)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Home
          </button>
          <h1>Our Mission</h1>
          <p className="subtitle">What drives us at Grwmglow</p>
        </header>
        
        <main className="main-content">
          <div className="mission-statement-page-container">
            <div className="mission-statement-page-content">
              <div className="mission-statement-page-icon">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <div className="mission-statement-page-text">
                <p>At <strong>Grwmglow</strong>, our mission is to do one thing and one thing well. To make the search for a hair stylist as easy and pain-free as possible. To eliminate the need for platforms like Instagram or Google Maps. To be the Uber of beauty services.</p>
              </div>
              <div className="mission-statement-page-divider"></div>
              <div className="mission-statement-page-story">
                <h3 className="mission-statement-page-story-title">Our Story</h3>
                <div className="mission-statement-page-story-text">
                  <p>Grwmglow came from the realization that there is a lack of a marketplace dedicated to stylists. In this day and age the best we've managed to do when it comes to beauty needs is Instagram or word of mouth. Grwmglow incorporates the strengths of platforms like Instagram and the trust factor of word of mouth in your next stylist search.</p>
                </div>
              </div>
              <div className="mission-statement-page-cta">
                <h3>Join Our Community</h3>
                <p>Stay updated with the latest stylists and exclusive offers</p>
                <form 
                  className="mission-statement-page-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (communityEmail && emailRegex.test(communityEmail.trim())) {
                      // Here you can add API call to save the email
                      console.log('Community email submitted:', communityEmail);
                      alert('Thank you for joining our community!');
                      setCommunityEmail('');
                    } else {
                      alert('Please enter a valid email address (e.g., example@domain.com)');
                    }
                  }}
                >
                  <div className="mission-statement-page-input-wrapper">
                    <svg className="mission-statement-page-email-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <input
                      type="email"
                      className="mission-statement-page-email-input"
                      placeholder="Enter your email"
                      value={communityEmail}
                      onChange={(e) => setCommunityEmail(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="mission-statement-page-submit-button">
                    Join
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Show register or login page
  if (showRegisterOrLogin) {
    return (
      <div className="app">
        <header className="header">
          <button 
            className="back-button"
            onClick={() => setShowRegisterOrLogin(false)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back
          </button>
          <h1>Register or Login</h1>
          <p className="subtitle">Create an account or sign in to book an appointment</p>
        </header>
        
        <main className="main-content">
          <div className="register-login-container">
            <div className="register-login-options">
              <div className="register-login-card">
                <div className="register-login-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="8.5" cy="7" r="4"></circle>
                    <line x1="20" y1="8" x2="20" y2="14"></line>
                    <line x1="23" y1="11" x2="17" y2="11"></line>
                  </svg>
                </div>
                <h2 className="register-login-title">New User?</h2>
                <p className="register-login-description">Create an account to book appointments with stylists</p>
                <button
                  className="register-login-action-button"
                  onClick={() => {
                    setShowRegisterOrLogin(false);
                    setShowUserRegistration(true);
                  }}
                >
                  Register
                </button>
              </div>
              
              <div className="register-login-card">
                <div className="register-login-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                    <polyline points="10 17 15 12 10 7"></polyline>
                    <line x1="15" y1="12" x2="3" y2="12"></line>
                  </svg>
                </div>
                <h2 className="register-login-title">Already have an account?</h2>
                <p className="register-login-description">Sign in to continue booking appointments</p>
                <button
                  className="register-login-action-button"
                  onClick={() => {
                    setShowRegisterOrLogin(false);
                    setShowUserLogin(true);
                  }}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
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
            <form className="registration-form" onSubmit={async (e) => {
              e.preventDefault();
              
              try {
                const formData = new FormData(e.target);
                const email = formData.get('email');
                const password = formData.get('password');
                
                // Validate email format
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!email || !emailRegex.test(email.trim())) {
                  alert('Please enter a valid email address (e.g., example@domain.com)');
                  return;
                }
                
                // Call backend login endpoint
                const response = await fetch(`${API_BASE_URL}/api/users/login`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ email, password })
                });
                
                const result = await response.json();
                
                if (result.success && result.data && result.token) {
                  // Login successful - set logged in user and token
                  setLoggedInUser(result.data);
                  setAuthToken(result.token);
                  setShowUserLogin(false);
                  alert('Login successful! Welcome back.');
                } else {
                  alert(result.message || 'Invalid email or password. Please try again.');
                }
              } catch (error) {
                console.error('Error during login:', error);
                alert('Login failed. Please check your connection and try again.');
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
            <form className="registration-form" onSubmit={async (e) => {
              e.preventDefault();
              
              try {
                const formData = new FormData(e.target);
                const email = formData.get('email');
                const password = formData.get('password');
                
                // Validate email format
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!email || !emailRegex.test(email.trim())) {
                  alert('Please enter a valid email address (e.g., example@domain.com)');
                  return;
                }
                
                // Call backend login endpoint
                const response = await fetch(`${API_BASE_URL}/api/stylists/login`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ email, password })
                });
                
                const result = await response.json();
                
                if (result.success && result.data && result.token) {
                  // Login successful - set logged in stylist and token
                  setLoggedInStylist(result.data);
                  setAuthToken(result.token);
                  setShowLogin(false);
                  alert('Login successful! Welcome back.');
                } else {
                  alert(result.message || 'Invalid email or password. Please try again.');
                }
              } catch (error) {
                console.error('Error during login:', error);
                alert('Login failed. Please check your connection and try again.');
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
    
    const handleSaveUserProfile = async () => {
      try {
        if (!editedUserProfile) {
          alert('No changes to save. Please edit your profile first.');
          return;
        }
        
        if (!loggedInUser || !loggedInUser.id) {
          alert('Unable to identify user. Please log in again.');
          return;
        }
        
        // Validate phone number format if provided
        if (editedUserProfile.phone && editedUserProfile.phone.trim()) {
          const phoneRegex = /^[\d\s\-\(\)\.\+]+$/;
          if (!phoneRegex.test(editedUserProfile.phone.trim())) {
            alert('Phone number can only contain numbers and formatting characters (spaces, hyphens, parentheses, dots, or +). Letters are not allowed.');
            return;
          }
          
          // Check if phone has at least 7 digits
          const phoneDigits = editedUserProfile.phone.replace(/\D/g, '');
          if (phoneDigits.length < 7 || phoneDigits.length > 15) {
            alert('Phone number must be between 7 and 15 digits.');
            return;
          }
        }
        
        // Prepare updated user data
        const updatedUser = {
          name: editedUserProfile.name || '',
          email: editedUserProfile.email || '',
          phone: editedUserProfile.phone || '',
          address: editedUserProfile.address || '',
          preferences: editedUserProfile.preferencesArray 
            ? editedUserProfile.preferencesArray.join(', ') 
            : (editedUserProfile.preferences || '')
        };
        
        // Send update to backend API
        const response = await fetch(`${API_BASE_URL}/api/users/${loggedInUser.id}`, {
          method: 'PUT',
          headers: getAuthHeaders(),
          body: JSON.stringify(updatedUser)
        });
        
        // Check if response is ok before parsing JSON
        let result;
        try {
          const responseText = await response.text();
          
          if (!response.ok) {
            try {
              result = JSON.parse(responseText);
              throw new Error(result.message || `HTTP error! status: ${response.status}`);
            } catch (parseError) {
              throw new Error(`Server error: ${response.status} ${response.statusText}`);
            }
          }
          
          result = JSON.parse(responseText);
        } catch (parseError) {
          console.error('Error parsing response:', parseError);
          throw new Error(`Failed to parse server response: ${parseError.message}`);
        }
        
        if (result.success && result.data) {
          // Update local state with the response from backend
          setLoggedInUser(result.data);
          setIsEditingUserProfile(false);
          setEditedUserProfile(null);
          setCustomHairStyleInput(''); // Clear custom input
          alert('Profile updated successfully!');
        } else {
          alert(result.message || 'Failed to update profile. Please try again.');
        }
      } catch (error) {
        console.error('Error updating user profile:', error);
        const errorMessage = error.message || 'Unknown error occurred';
        alert(`Failed to update profile: ${errorMessage}. Please check your connection and try again.`);
      }
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
                      <p><span className="label">Phone:</span> <a href={`tel:${currentUser.phone}`}>{formatPhoneNumber(currentUser.phone)}</a></p>
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
                            src={fixImageUrl(stylist.profilePicture)} 
                            alt={stylist.name}
                            className="recently-viewed-picture"
                          />
                          <div className="recently-viewed-info">
                            <h3 className="recently-viewed-name">{stylist.name}</h3>
                            <p className="recently-viewed-specialty">{stylist.specialty}</p>
                            <p className="recently-viewed-rate">{formatRate(stylist.rate)}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {!isEditingUserProfile && (
                  <div className="detail-info-card" ref={userAppointmentsRef}>
                    <h2 className="detail-section-title">Appointments</h2>
                    {userAppointmentsLoading ? (
                      <p>Loading appointments...</p>
                    ) : userAppointments.length > 0 ? (
                      <div className="appointments-list">
                        {userAppointments.map((appointment) => {
                          const stylist = stylists.find(s => s.id === appointment.stylistId);
                          const appointmentDate = new Date(appointment.date);
                          const isPast = appointmentDate < new Date();
                          
                          return (
                            <div 
                              key={appointment.id} 
                              className={`appointment-item ${isPast ? 'past' : 'upcoming'}`}
                              onClick={() => {
                                if (stylist) {
                                  setShowUserProfile(false);
                                  setSelectedStylistId(stylist.id);
                                }
                              }}
                            >
                              <div className="appointment-header">
                                <div className="appointment-stylist-info">
                                  {stylist && (
                                    <img 
                                      src={fixImageUrl(stylist.profilePicture)} 
                                      alt={stylist.name}
                                      className="appointment-stylist-photo"
                                    />
                                  )}
                                  <div className="appointment-stylist-details">
                                    <h3 className="appointment-stylist-name">
                                      {stylist ? stylist.name : 'Unknown Stylist'}
                                    </h3>
                                    <p className="appointment-status">
                                      <span className={`status-badge ${appointment.status}`}>
                                        {appointment.status}
                                      </span>
                                    </p>
                                  </div>
                                </div>
                                <div className="appointment-date-time">
                                  <div className="appointment-date">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                      <line x1="16" y1="2" x2="16" y2="6"></line>
                                      <line x1="8" y1="2" x2="8" y2="6"></line>
                                      <line x1="3" y1="10" x2="21" y2="10"></line>
                                    </svg>
                                    <span>{appointmentDate.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}</span>
                                  </div>
                                  <div className="appointment-time">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <polyline points="12 6 12 12 16 14"></polyline>
                                    </svg>
                                    <span>{appointment.time}</span>
                                  </div>
                                  {appointment.suggestedDate && appointment.suggestedTime && (
                                    <div className="appointment-suggestion-notice">
                                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 6 12 12 16 14"></polyline>
                                      </svg>
                                      <span className="suggestion-label">New Time Suggested:</span>
                                      <span className="suggestion-value">
                                        {new Date(appointment.suggestedDate).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })} at {appointment.suggestedTime}
                                      </span>
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div className="appointment-purpose">
                                <span className="label">Service:</span> {appointment.purpose}
                              </div>
                              {appointment.services && appointment.services.length > 0 && (
                                <div className="appointment-services">
                                  <span className="label">Services:</span>
                                  <div className="appointment-services-list">
                                    {appointment.services.map((service, index) => (
                                      <span key={index} className="appointment-service-tag">{service}</span>
                                    ))}
                                  </div>
                                </div>
                              )}
                              {appointment.conversationPreference && (
                                <div className="appointment-conversation-preference">
                                  <span className="label">Conversation Preference:</span>
                                  <span className="preference-value">{formatConversationPreference(appointment.conversationPreference)}</span>
                                </div>
                              )}
                              {appointment.suggestedDate && appointment.suggestedTime && (
                                <div className="appointment-suggestion-actions">
                                  <button
                                    className="accept-suggestion-button"
                                    onClick={async (e) => {
                                      e.stopPropagation();
                                      if (!confirm('Are you sure you want to accept the new date/time suggested by the stylist?')) return;
                                      try {
                                        const response = await fetch(`${API_BASE_URL}/api/appointments/${appointment.id}/accept-suggestion`, {
                                          method: 'PUT',
                                          headers: getAuthHeaders()
                                        });
                                        const result = await response.json();
                                        if (result.success) {
                                          alert('Appointment date/time updated successfully!');
                                          // Refresh appointments
                                          const refreshResponse = await fetch(`${API_BASE_URL}/api/appointments?userId=${loggedInUser.id}`);
                                          const refreshResult = await refreshResponse.json();
                                          if (refreshResult.success && refreshResult.data) {
                                            setUserAppointments(refreshResult.data);
                                          }
                                        } else {
                                          alert(result.message || 'Failed to accept suggestion');
                                        }
                                      } catch (error) {
                                        console.error('Error accepting suggestion:', error);
                                        alert('Failed to accept suggestion. Please try again.');
                                      }
                                    }}
                                  >
                                    Accept New Date/Time
                                  </button>
                                  <button
                                    className="reject-suggestion-button"
                                    onClick={async (e) => {
                                      e.stopPropagation();
                                      if (!confirm('Are you sure you want to reject the suggested date/time? The original appointment time will remain.')) return;
                                      try {
                                        const response = await fetch(`${API_BASE_URL}/api/appointments/${appointment.id}/reject-suggestion`, {
                                          method: 'PUT',
                                          headers: getAuthHeaders()
                                        });
                                        const result = await response.json();
                                        if (result.success) {
                                          alert('Suggestion rejected. Original appointment time remains.');
                                          // Refresh appointments
                                          const refreshResponse = await fetch(`${API_BASE_URL}/api/appointments?userId=${loggedInUser.id}`);
                                          const refreshResult = await refreshResponse.json();
                                          if (refreshResult.success && refreshResult.data) {
                                            setUserAppointments(refreshResult.data);
                                          }
                                        } else {
                                          alert(result.message || 'Failed to reject suggestion');
                                        }
                                      } catch (error) {
                                        console.error('Error rejecting suggestion:', error);
                                        alert('Failed to reject suggestion. Please try again.');
                                      }
                                    }}
                                  >
                                    Reject Suggestion
                                  </button>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <p className="no-appointments">No appointments yet. Book your first appointment to see it here!</p>
                    )}
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
                            src={fixImageUrl(stylist.profilePicture)} 
                            alt={stylist.name}
                            className="favorite-stylist-picture"
                          />
                          <div className="favorite-stylist-info">
                            <h3 className="favorite-stylist-name">{stylist.name}</h3>
                            <p className="favorite-stylist-specialty">{stylist.specialty}</p>
                            <p className="favorite-stylist-rate">{formatRate(stylist.rate)}</p>
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
    
    const handleSaveProfile = async () => {
      try {
        if (!editedProfile) {
          alert('No changes to save. Please edit your profile first.');
          return;
        }
        
        if (!loggedInStylist || !loggedInStylist.id) {
          alert('Unable to identify stylist. Please log in again.');
          return;
        }
        
        // Validate that at least one day is selected
        const hasEnabledDay = Object.values(editWorkSchedule).some(schedule => schedule.enabled);
        if (!hasEnabledDay) {
          alert('Please select at least one working day and set your hours.');
          return;
        }
        
        // Validate phone number format if provided
        if (editedProfile.phone && editedProfile.phone.trim()) {
          const phoneRegex = /^[\d\s\-\(\)\.\+]+$/;
          if (!phoneRegex.test(editedProfile.phone.trim())) {
            alert('Phone number can only contain numbers and formatting characters (spaces, hyphens, parentheses, dots, or +). Letters are not allowed.');
            return;
          }
          
          // Check if phone has at least 7 digits
          const phoneDigits = editedProfile.phone.replace(/\D/g, '');
          if (phoneDigits.length < 7 || phoneDigits.length > 15) {
            alert('Phone number must be between 7 and 15 digits.');
            return;
          }
        }
        
        // Store hours as JSON for easy editing
        const hoursJson = JSON.stringify(editWorkSchedule);
        
        // Prepare updated stylist data - keep only the fields we want to send
        const updatedStylist = {
          name: editedProfile.name || '',
          email: editedProfile.email || '',
          phone: editedProfile.phone || '',
          address: editedProfile.address || '',
          profilePicture: editedProfile.profilePicture || '',
          specialty: editedProfile.specialty || '',
          hairTextureTypes: editedProfile.hairTextureTypes || '',
          yearsOfExperience: editedProfile.yearsOfExperience || '',
          rate: editedProfile.rate || '',
          hours: hoursJson,
          currentAvailability: editedProfile.currentAvailability || '',
          availableNow: editedProfile.availableNow !== undefined ? editedProfile.availableNow : false,
          willingToTravel: editedProfile.willingToTravel || '',
          accommodations: editedProfile.accommodations || '',
          lastMinuteBookingsAllowed: editedProfile.lastMinuteBookingsAllowed || '',
          streetParkingAvailable: editedProfile.streetParkingAvailable || '',
          cancellationPolicy: editedProfile.cancellationPolicy || '',
          acceptedPaymentTypes: editedProfile.acceptedPaymentTypes || '',
          services: editedProfile.editedServices || editedProfile.services || [],
          about: editedProfile.about || '',
          portfolio: editedProfile.editedPortfolio || editedProfile.portfolio || [],
          products: editedProfile.editedProducts || editedProfile.products || [],
          announcements: editedProfile.editedAnnouncements || editedProfile.announcements || []
        };
        
        // Log what we're sending
        console.log('Saving profile for stylist ID:', loggedInStylist.id);
        console.log('Updated stylist data:', updatedStylist);
        
        // Send update to backend API
        const response = await fetch(`${API_BASE_URL}/api/stylists/${loggedInStylist.id}`, {
          method: 'PUT',
          headers: getAuthHeaders(),
          body: JSON.stringify(updatedStylist)
        });
        
        console.log('Response status:', response.status);
        console.log('Response ok:', response.ok);
        
        // Check if response is ok before parsing JSON
        let result;
        try {
          const responseText = await response.text();
          console.log('Response text:', responseText);
          
          if (!response.ok) {
            // Try to parse as JSON, but handle if it's not
            try {
              result = JSON.parse(responseText);
              console.error('Error response:', result);
              throw new Error(result.message || `HTTP error! status: ${response.status}`);
            } catch (parseError) {
              throw new Error(`Server error: ${response.status} ${response.statusText}. Response: ${responseText.substring(0, 200)}`);
            }
          }
          
          // Parse the successful response
          result = JSON.parse(responseText);
          console.log('Response result:', result);
        } catch (parseError) {
          console.error('Error parsing response:', parseError);
          throw new Error(`Failed to parse server response: ${parseError.message}`);
        }
        
        if (result.success && result.data) {
          // Update local state with the response from backend
          setLoggedInStylist(result.data);
          
          // Also update the stylist in the main stylists list so changes appear everywhere
          setStylists(prevStylists => 
            prevStylists.map(s => s.id === loggedInStylist.id ? result.data : s)
          );
          
          setIsEditingProfile(false);
          setEditedProfile(null);
          alert('Profile updated successfully!');
        } else {
          alert(result.message || 'Failed to update profile. Please try again.');
        }
      } catch (error) {
        console.error('Error updating profile:', error);
        console.error('Error stack:', error.stack);
        const errorMessage = error.message || 'Unknown error occurred';
        alert(`Failed to update profile: ${errorMessage}. Please check your connection and try again.`);
      }
    };

    const handleCancelEdit = () => {
      setIsEditingProfile(false);
      setEditedProfile(null);
      // Reset edit schedule to default
      setEditWorkSchedule({
        Monday: { enabled: false, startTime: '09:00', endTime: '17:00' },
        Tuesday: { enabled: false, startTime: '09:00', endTime: '17:00' },
        Wednesday: { enabled: false, startTime: '09:00', endTime: '17:00' },
        Thursday: { enabled: false, startTime: '09:00', endTime: '17:00' },
        Friday: { enabled: false, startTime: '09:00', endTime: '17:00' },
        Saturday: { enabled: false, startTime: '09:00', endTime: '17:00' },
        Sunday: { enabled: false, startTime: '09:00', endTime: '17:00' }
      });
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
              onClick={() => {
                setEditedProfile({
                  ...loggedInStylist,
                  editedServices: loggedInStylist.services || [],
                  editedPortfolio: loggedInStylist.portfolio || [],
                  editedProducts: loggedInStylist.products || [],
                  editedAnnouncements: loggedInStylist.announcements || []
                });
                // Parse existing hours into schedule format and pre-fill the schedule builder
                const parsedSchedule = parseHoursString(loggedInStylist.hours || '');
                setEditWorkSchedule(parsedSchedule);
                setIsEditingProfile(true);
              }}
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
                      src={fixImageUrl(editedProfile?.profilePicture || currentStylist.profilePicture)} 
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
                    src={fixImageUrl(currentStylist.profilePicture)} 
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
                      <p><span className="label">Phone:</span> <a href={`tel:${currentStylist.phone}`}>{formatPhoneNumber(currentStylist.phone)}</a></p>
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
                      <p className="form-hint" style={{ marginTop: '4px', marginBottom: '12px', fontSize: '0.9rem', color: '#666666' }}>Select your working days and set your hours</p>
                      <div className="work-schedule-builder">
                        {Object.entries(editWorkSchedule).map(([day, schedule]) => (
                          <div key={day} className="schedule-day-row">
                            <div className="schedule-day-toggle">
                              <label className="day-toggle-label">
                                <input
                                  type="checkbox"
                                  checked={schedule.enabled}
                                  onChange={(e) => {
                                    setEditWorkSchedule({
                                      ...editWorkSchedule,
                                      [day]: { ...schedule, enabled: e.target.checked }
                                    });
                                  }}
                                />
                                <span className="day-name">{day.substring(0, 3)}</span>
                              </label>
                            </div>
                            {schedule.enabled && (
                              <div className="schedule-time-inputs">
                                <div className="time-input-group">
                                  <label>From</label>
                                  <input
                                    type="time"
                                    value={schedule.startTime}
                                    onChange={(e) => {
                                      setEditWorkSchedule({
                                        ...editWorkSchedule,
                                        [day]: { ...schedule, startTime: e.target.value }
                                      });
                                    }}
                                    className="time-input"
                                  />
                                </div>
                                <span className="time-separator">to</span>
                                <div className="time-input-group">
                                  <label>To</label>
                                  <input
                                    type="time"
                                    value={schedule.endTime}
                                    onChange={(e) => {
                                      setEditWorkSchedule({
                                        ...editWorkSchedule,
                                        [day]: { ...schedule, endTime: e.target.value }
                                      });
                                    }}
                                    className="time-input"
                                  />
                                </div>
                              </div>
                            )}
                            {!schedule.enabled && (
                              <span className="closed-label">Closed</span>
                            )}
                          </div>
                        ))}
                        <div className="schedule-quick-actions">
                          <button
                            type="button"
                            className="quick-action-button"
                            onClick={() => {
                              const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
                              const updatedSchedule = { ...editWorkSchedule };
                              weekdays.forEach(day => {
                                updatedSchedule[day] = { ...updatedSchedule[day], enabled: true };
                              });
                              setEditWorkSchedule(updatedSchedule);
                            }}
                          >
                            Set Weekdays
                          </button>
                          <button
                            type="button"
                            className="quick-action-button"
                            onClick={() => {
                              const updatedSchedule = { ...editWorkSchedule };
                              Object.keys(updatedSchedule).forEach(day => {
                                updatedSchedule[day] = { ...updatedSchedule[day], enabled: true };
                              });
                              setEditWorkSchedule(updatedSchedule);
                            }}
                          >
                            Set All Days
                          </button>
                          <button
                            type="button"
                            className="quick-action-button"
                            onClick={() => {
                              const updatedSchedule = { ...editWorkSchedule };
                              Object.keys(updatedSchedule).forEach(day => {
                                updatedSchedule[day] = { ...updatedSchedule[day], enabled: false };
                              });
                              setEditWorkSchedule(updatedSchedule);
                            }}
                          >
                            Clear All
                          </button>
                        </div>
                      </div>
                      <label><span className="label">Current Availability:</span></label>
                      <input 
                        type="text" 
                        value={editedProfile?.currentAvailability || ''} 
                        onChange={(e) => setEditedProfile({...editedProfile, currentAvailability: e.target.value})}
                        className="edit-input"
                        placeholder="e.g., Available this week"
                      />
                      <label className="toggle-label">
                        <span className="label">Available Now:</span>
                        <div className="toggle-switch">
                          <input
                            type="checkbox"
                            checked={editedProfile?.availableNow === true}
                            onChange={(e) => setEditedProfile({...editedProfile, availableNow: e.target.checked})}
                            className="toggle-input"
                            id="available-now-toggle"
                          />
                          <label htmlFor="available-now-toggle" className="toggle-slider"></label>
                          <span className="toggle-text">{editedProfile?.availableNow ? 'Available Now' : 'Not Available'}</span>
                        </div>
                      </label>
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
                        <p><span className="label">Rate:</span> {formatRate(currentStylist.rate)}</p>
                        <p><span className="label">Hours:</span> {formatScheduleForDisplay(currentStylist.hours)}</p>
                        <p><span className="label">Current Availability:</span> {currentStylist.currentAvailability}</p>
                        {currentStylist.availableNow && (
                          <p><span className="label">Available Now:</span> <span className="available-now-status">Yes</span></p>
                        )}
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
                      <p><span className="label">Years of Experience:</span> {formatYearsOfExperience(currentStylist.yearsOfExperience)}</p>
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
                            {service.name}{service.price ? ` (${formatServicePrice(service.price)})` : ''}
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
                        src={fixImageUrl(imageUrl)} 
                        alt={`Previous work ${index + 1}`}
                        className="portfolio-preview-small"
                        loading="lazy"
                      />
                      <label className="portfolio-image-upload-label">
                        <input 
                          type="file" 
                          accept="image/*"
                          className="portfolio-image-file-input"
                          onChange={(e) => {
                            const file = e.target.files[0];
                            if (file) {
                              const reader = new FileReader();
                              reader.onloadend = () => {
                                const updatedPortfolio = [...(editedProfile?.editedPortfolio || editedProfile?.portfolio || [])];
                                updatedPortfolio[index] = reader.result;
                                setEditedProfile({...editedProfile, editedPortfolio: updatedPortfolio});
                              };
                              reader.readAsDataURL(file);
                            }
                          }}
                        />
                        <span className="portfolio-image-upload-button">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="17 8 12 3 7 8"></polyline>
                            <line x1="12" y1="3" x2="12" y2="15"></line>
                          </svg>
                          Upload Image
                        </span>
                      </label>
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
                          src={fixImageUrl(imageUrl)} 
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
            
            <div className="products-section">
              <h2 className="detail-section-title portfolio-title">Products</h2>
              {isEditingProfile ? (
                <div className="edit-products-container">
                  {(editedProfile?.editedProducts || editedProfile?.products || []).map((product, index) => (
                    <div key={index} className="edit-product-item">
                      <img 
                        src={fixImageUrl(product.image) || 'https://via.placeholder.com/200'} 
                        alt={product.title || 'Product'}
                        className="product-preview-small"
                        loading="lazy"
                      />
                      <div className="edit-product-inputs">
                        <input 
                          type="text" 
                          value={product.title || ''} 
                          onChange={(e) => {
                            const updatedProducts = [...(editedProfile?.editedProducts || editedProfile?.products || [])];
                            updatedProducts[index] = { ...updatedProducts[index], title: e.target.value };
                            setEditedProfile({...editedProfile, editedProducts: updatedProducts});
                          }}
                          className="edit-product-input"
                          placeholder="Product Title"
                        />
                        <input 
                          type="text" 
                          value={product.price || ''} 
                          onChange={(e) => {
                            const updatedProducts = [...(editedProfile?.editedProducts || editedProfile?.products || [])];
                            updatedProducts[index] = { ...updatedProducts[index], price: e.target.value };
                            setEditedProfile({...editedProfile, editedProducts: updatedProducts});
                          }}
                          className="edit-product-input"
                          placeholder="Price (e.g., $25)"
                        />
                        <label className="product-image-upload-label">
                          <input 
                            type="file" 
                            accept="image/*"
                            className="product-image-file-input"
                            onChange={(e) => {
                              const file = e.target.files[0];
                              if (file) {
                                const reader = new FileReader();
                                reader.onloadend = () => {
                                  const updatedProducts = [...(editedProfile?.editedProducts || editedProfile?.products || [])];
                                  updatedProducts[index] = { ...updatedProducts[index], image: reader.result };
                                  setEditedProfile({...editedProfile, editedProducts: updatedProducts});
                                };
                                reader.readAsDataURL(file);
                              }
                            }}
                          />
                          <span className="product-image-upload-button">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                              <polyline points="17 8 12 3 7 8"></polyline>
                              <line x1="12" y1="3" x2="12" y2="15"></line>
                            </svg>
                            Upload Image
                          </span>
                        </label>
                      </div>
                      <button 
                        type="button"
                        className="remove-product-button"
                        onClick={() => {
                          const updatedProducts = (editedProfile?.editedProducts || editedProfile?.products || []).filter((_, i) => i !== index);
                          setEditedProfile({...editedProfile, editedProducts: updatedProducts});
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
                    className="add-product-button"
                    onClick={() => {
                      const updatedProducts = [...(editedProfile?.editedProducts || editedProfile?.products || []), { title: '', price: '', image: '' }];
                      setEditedProfile({...editedProfile, editedProducts: updatedProducts});
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    Add Product
                  </button>
                </div>
              ) : (
                currentStylist.products && currentStylist.products.length > 0 ? (
                  <div className="products-carousel">
                    {currentStylist.products.map((product, index) => (
                      <div key={index} className="product-item">
                        <img 
                          src={fixImageUrl(product.image) || 'https://via.placeholder.com/200'} 
                          alt={product.title || 'Product'}
                          className="product-image"
                          loading="lazy"
                        />
                        <div className="product-info">
                          <h3 className="product-title">{product.title}</h3>
                          <p className="product-price">{product.price && product.price.startsWith('$') ? product.price : `$${product.price}`}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="no-products-message">No products added yet.</p>
                )
              )}
            </div>
            
            {/* Announcements Section */}
            <div className="form-section">
              <h2 className="form-section-title">Announcements</h2>
              {isEditingProfile ? (
                <div className="edit-announcements-container">
                  {(editedProfile?.editedAnnouncements || editedProfile?.announcements || []).map((announcement, index) => (
                    <div key={index} className="edit-announcement-item">
                      <textarea
                        value={announcement.text || ''}
                        onChange={(e) => {
                          const updatedAnnouncements = [...(editedProfile?.editedAnnouncements || editedProfile?.announcements || [])];
                          updatedAnnouncements[index] = { ...updatedAnnouncements[index], text: e.target.value };
                          setEditedProfile({...editedProfile, editedAnnouncements: updatedAnnouncements});
                        }}
                        className="edit-announcement-input"
                        placeholder="Enter your announcement..."
                        rows="3"
                      />
                      <button 
                        type="button"
                        className="remove-announcement-button"
                        onClick={() => {
                          const updatedAnnouncements = (editedProfile?.editedAnnouncements || editedProfile?.announcements || []).filter((_, i) => i !== index);
                          setEditedProfile({...editedProfile, editedAnnouncements: updatedAnnouncements});
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
                    className="add-announcement-button"
                    onClick={() => {
                      const updatedAnnouncements = [...(editedProfile?.editedAnnouncements || editedProfile?.announcements || []), { text: '', date: new Date().toISOString() }];
                      setEditedProfile({...editedProfile, editedAnnouncements: updatedAnnouncements});
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    Add Announcement
                  </button>
                </div>
              ) : (
                currentStylist.announcements && currentStylist.announcements.length > 0 ? (
                  <div className="announcements-list">
                    {currentStylist.announcements.map((announcement, index) => (
                      <div key={index} className="announcement-item">
                        <div className="announcement-content">
                          <p className="announcement-text">{announcement.text}</p>
                          {announcement.date && (
                            <span className="announcement-date">
                              {new Date(announcement.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="no-announcements-message">No announcements yet.</p>
                )
              )}
            </div>
          </div>
          
          {!isEditingProfile && (
            <div className="detail-info-card">
              <h2 className="detail-section-title">Appointments</h2>
              {stylistAppointmentsLoading ? (
                <p>Loading appointments...</p>
              ) : stylistAppointments.length > 0 ? (
                <div className="stylist-appointments-list">
                  {stylistAppointments.map((appointment) => {
                    const appointmentDate = new Date(appointment.date);
                    const isPast = appointmentDate < new Date();
                    const isPending = appointment.status === 'pending';
                    
                    return (
                      <div 
                        key={appointment.id} 
                        className={`stylist-appointment-item ${isPast ? 'past' : ''} ${appointment.status}`}
                      >
                        <div className="stylist-appointment-header">
                          <div className="stylist-appointment-customer">
                            <div className="stylist-appointment-customer-info">
                              <h3 className="stylist-appointment-customer-name">
                                {appointment.customerName || 'Guest Customer'}
                              </h3>
                              {appointment.customerEmail && (
                                <p className="stylist-appointment-customer-email">
                                  <a href={`mailto:${appointment.customerEmail}`}>{appointment.customerEmail}</a>
                                </p>
                              )}
                              {appointment.customerPhone && (
                                <p className="stylist-appointment-customer-phone">
                                  <a href={`tel:${appointment.customerPhone}`}>{appointment.customerPhone}</a>
                                </p>
                              )}
                              <div className="stylist-appointment-conversation-preference-inline">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
                                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                </svg>
                                <span className="preference-label-inline">Conversation:</span>
                                <span className="preference-value-inline">{formatConversationPreference(appointment.conversationPreference || 'no-preference')}</span>
                              </div>
                            </div>
                          </div>
                          <div className="stylist-appointment-date-time">
                            <div className="stylist-appointment-date">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                              </svg>
                              <span>{appointmentDate.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}</span>
                            </div>
                            <div className="stylist-appointment-time">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                              </svg>
                              <span>{appointment.time}</span>
                            </div>
                            {appointment.suggestedDate && appointment.suggestedTime && (
                              <div className="stylist-appointment-suggested">
                                <span className="suggested-label">Suggested:</span>
                                <span>{new Date(appointment.suggestedDate).toLocaleDateString()} at {appointment.suggestedTime}</span>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <div className="stylist-appointment-purpose">
                          <span className="label">Service:</span> {appointment.purpose}
                        </div>
                        
                        {appointment.services && appointment.services.length > 0 && (
                          <div className="stylist-appointment-services">
                            <span className="label">Services:</span>
                            <div className="stylist-appointment-services-list">
                              {appointment.services.map((service, index) => (
                                <span key={index} className="stylist-appointment-service-tag">{service}</span>
                              ))}
                            </div>
                          </div>
                        )}
                        <div className="stylist-appointment-status">
                          <span className={`status-badge ${appointment.status}`}>
                            {appointment.status}
                          </span>
                        </div>
                        
                        {isPending && !isPast && (
                          <div className="stylist-appointment-actions">
                            {appointment.suggestedDate && appointment.suggestedTime ? (
                              <div className="waiting-for-response-message">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                                <span>Waiting for customer to respond to your date/time suggestion...</span>
                              </div>
                            ) : suggestingDateTime === appointment.id ? (
                              <div className="suggest-datetime-form">
                                <div className="form-row">
                                  <div className="form-group-inline">
                                    <label>Suggested Date:</label>
                                    <input
                                      type="date"
                                      value={suggestedDate}
                                      onChange={(e) => setSuggestedDate(e.target.value)}
                                      min={new Date().toISOString().split('T')[0]}
                                      className="form-input-small"
                                    />
                                  </div>
                                  <div className="form-group-inline">
                                    <label>Suggested Time:</label>
                                    <input
                                      type="time"
                                      value={suggestedTime}
                                      onChange={(e) => setSuggestedTime(e.target.value)}
                                      className="form-input-small"
                                    />
                                  </div>
                                </div>
                                <div className="form-actions-inline">
                                  <button
                                    type="button"
                                    className="submit-suggestion-button"
                                    onClick={async () => {
                                      if (!suggestedDate || !suggestedTime) {
                                        alert('Please enter both date and time');
                                        return;
                                      }
                                      try {
                                        const response = await fetch(`${API_BASE_URL}/api/appointments/${appointment.id}/suggest`, {
                                          method: 'PUT',
                                          headers: getAuthHeaders(),
                                          body: JSON.stringify({
                                            suggestedDate,
                                            suggestedTime
                                          })
                                        });
                                        const result = await response.json();
                                        if (result.success) {
                                          alert('Date/time suggestion sent to customer');
                                          // Refresh appointments
                                          const refreshResponse = await fetch(`${API_BASE_URL}/api/appointments?stylistId=${loggedInStylist.id}`, {
                                            headers: getAuthHeaders()
                                          });
                                          const refreshResult = await refreshResponse.json();
                                          if (refreshResult.success && refreshResult.data) {
                                            setStylistAppointments(refreshResult.data);
                                          }
                                          setSuggestingDateTime(null);
                                          setSuggestedDate('');
                                          setSuggestedTime('');
                                        } else {
                                          alert(result.message || 'Failed to suggest date/time');
                                        }
                                      } catch (error) {
                                        console.error('Error suggesting date/time:', error);
                                        alert('Failed to suggest date/time. Please try again.');
                                      }
                                    }}
                                  >
                                    Send Suggestion
                                  </button>
                                  <button
                                    type="button"
                                    className="cancel-suggestion-button"
                                    onClick={() => {
                                      setSuggestingDateTime(null);
                                      setSuggestedDate('');
                                      setSuggestedTime('');
                                    }}
                                  >
                                    Cancel
                                  </button>
                                </div>
                              </div>
                            ) : (
                              <>
                                <button
                                  className="accept-appointment-button"
                                  onClick={async () => {
                                    try {
                                      const response = await fetch(`${API_BASE_URL}/api/appointments/${appointment.id}/accept`, {
                                        method: 'PUT',
                                        headers: getAuthHeaders()
                                      });
                                      const result = await response.json();
                                      if (result.success) {
                                        alert('Appointment accepted!');
                                        // Refresh appointments
                                        const refreshResponse = await fetch(`${API_BASE_URL}/api/appointments?stylistId=${loggedInStylist.id}`, {
                                          headers: getAuthHeaders()
                                        });
                                        const refreshResult = await refreshResponse.json();
                                        if (refreshResult.success && refreshResult.data) {
                                          setStylistAppointments(refreshResult.data);
                                        }
                                      } else {
                                        alert(result.message || 'Failed to accept appointment');
                                      }
                                    } catch (error) {
                                      console.error('Error accepting appointment:', error);
                                      alert('Failed to accept appointment. Please try again.');
                                    }
                                  }}
                                >
                                  Accept
                                </button>
                                <button
                                  className="reject-appointment-button"
                                  onClick={async () => {
                                    if (!confirm('Are you sure you want to reject this appointment?')) return;
                                    try {
                                      const response = await fetch(`${API_BASE_URL}/api/appointments/${appointment.id}/reject`, {
                                        method: 'PUT',
                                        headers: getAuthHeaders()
                                      });
                                      const result = await response.json();
                                      if (result.success) {
                                        alert('Appointment rejected');
                                        // Refresh appointments
                                        const refreshResponse = await fetch(`${API_BASE_URL}/api/appointments?stylistId=${loggedInStylist.id}`, {
                                          headers: getAuthHeaders()
                                        });
                                        const refreshResult = await refreshResponse.json();
                                        if (refreshResult.success && refreshResult.data) {
                                          setStylistAppointments(refreshResult.data);
                                        }
                                      } else {
                                        alert(result.message || 'Failed to reject appointment');
                                      }
                                    } catch (error) {
                                      console.error('Error rejecting appointment:', error);
                                      alert('Failed to reject appointment. Please try again.');
                                    }
                                  }}
                                >
                                  Reject
                                </button>
                                <button
                                  className="suggest-datetime-button"
                                  onClick={() => {
                                    setSuggestingDateTime(appointment.id);
                                    setSuggestedDate('');
                                    setSuggestedTime('');
                                  }}
                                >
                                  Suggest New Date/Time
                                </button>
                              </>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className="no-appointments">No appointments yet.</p>
              )}
            </div>
          )}
          
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
                      src={fixImageUrl(similarStylist.profilePicture)} 
                      alt={similarStylist.name}
                      className="similar-item-picture"
                    />
                    <div className="similar-item-info">
                      <h3 className="similar-item-name">{similarStylist.name}</h3>
                      <p className="similar-item-specialty">{similarStylist.specialty}</p>
                      <p className="similar-item-rate">{formatRate(similarStylist.rate)}</p>
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
            <form className="registration-form" onSubmit={async (e) => {
              e.preventDefault();
              
              // Clear previous errors
              setUserRegistrationErrors({});
              
              try {
                const formData = new FormData(e.target);
                const email = formData.get('email');
                const password = formData.get('password');
                const confirmPassword = formData.get('confirmPassword');
                const name = formData.get('name');
                const phone = formData.get('phone');
                const address = formData.get('address');
                
                const errors = {};
                let hasErrors = false;
                const missingFields = [];
                
                // Check for missing required fields
                if (!name || !name.trim()) {
                  missingFields.push('Full Name');
                  errors.name = 'Full name is required.';
                  hasErrors = true;
                }
                
                if (!email || !email.trim()) {
                  missingFields.push('Email');
                  errors.email = 'Email is required.';
                  hasErrors = true;
                }
                
                if (!password || !password.trim()) {
                  missingFields.push('Password');
                  errors.password = 'Password is required.';
                  hasErrors = true;
                }
                
                if (!confirmPassword || !confirmPassword.trim()) {
                  missingFields.push('Confirm Password');
                  errors.confirmPassword = 'Please confirm your password.';
                  hasErrors = true;
                }
                
                if (!phone || !phone.trim()) {
                  missingFields.push('Phone Number');
                  errors.phone = 'Phone number is required.';
                  hasErrors = true;
                }
                
                // If there are missing required fields, show a general message
                if (missingFields.length > 0) {
                  errors.general = `Please fill in all required fields: ${missingFields.join(', ')}`;
                  setUserRegistrationErrors(errors);
                  return;
                }
                
                // Validate email format
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!email || !emailRegex.test(email.trim())) {
                  errors.email = 'Please enter a valid email address (e.g., example@domain.com)';
                  hasErrors = true;
                }
                
                // Validate phone number format
                const phoneRegex = /^[\d\s\-\(\)\.\+]+$/;
                if (!phone || !phoneRegex.test(phone.trim())) {
                  errors.phone = 'Phone number can only contain numbers and formatting characters (spaces, hyphens, parentheses, dots, or +). Letters are not allowed.';
                  hasErrors = true;
                } else {
                  // Check if phone has at least 7 digits
                  const phoneDigits = phone.replace(/\D/g, '');
                  if (phoneDigits.length < 7 || phoneDigits.length > 15) {
                    errors.phone = 'Phone number must be between 7 and 15 digits.';
                    hasErrors = true;
                  }
                }
                
                // Validate password
                if (!password || password.length < 6) {
                  errors.password = 'Password must be at least 6 characters long.';
                  hasErrors = true;
                }
                
                // Validate password match
                if (password !== confirmPassword) {
                  errors.confirmPassword = 'Passwords do not match. Please try again.';
                  hasErrors = true;
                }
                
                // Validate name
                if (!name || !name.trim()) {
                  errors.name = 'Full name is required.';
                  hasErrors = true;
                }
                
                if (hasErrors) {
                  setUserRegistrationErrors(errors);
                  return;
                }
                
                // Prepare user data
                const userData = {
                  name: name.trim(),
                  email: email.trim(),
                  password: password,
                  phone: phone.trim(),
                  address: address ? address.trim() : '',
                  preferences: selectedHairStyles.length > 0 
                    ? selectedHairStyles.join(', ') 
                    : ''
                };
                
                // Submit to backend API
                const response = await fetch(`${API_BASE_URL}/api/users`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(userData)
                });
                
                const result = await response.json();
                
                if (!response.ok || !result.success) {
                  // Parse backend errors
                  const backendErrors = {};
                  const errorMessage = result.message || 'Registration failed. Please try again.';
                  
                  // Check if there's a specific field mentioned in the error
                  if (result.field) {
                    backendErrors[result.field] = errorMessage;
                  } else if (result.missingFields && Array.isArray(result.missingFields)) {
                    // Handle missing fields array
                    backendErrors.general = errorMessage;
                    result.missingFields.forEach(field => {
                      const fieldKey = field.toLowerCase().replace(/\s+/g, '');
                      if (fieldKey.includes('name')) backendErrors.name = `${field} is required.`;
                      else if (fieldKey.includes('email')) backendErrors.email = `${field} is required.`;
                      else if (fieldKey.includes('password')) backendErrors.password = `${field} is required.`;
                      else if (fieldKey.includes('phone')) backendErrors.phone = `${field} is required.`;
                    });
                  } else {
                    // Try to identify which field the error relates to
                    const errorLower = errorMessage.toLowerCase();
                    if (errorLower.includes('email') || errorLower.includes('already registered')) {
                      backendErrors.email = errorMessage;
                    } else if (errorLower.includes('phone')) {
                      backendErrors.phone = errorMessage;
                    } else if (errorLower.includes('password')) {
                      backendErrors.password = errorMessage;
                    } else if (errorLower.includes('name')) {
                      backendErrors.name = errorMessage;
                    } else {
                      // If we can't identify the field, show general error
                      backendErrors.general = errorMessage;
                    }
                  }
                  
                  // Also check for validation errors array from express-validator
                  if (result.errors && Array.isArray(result.errors)) {
                    result.errors.forEach(err => {
                      if (err.field) {
                        backendErrors[err.field] = err.message;
                      }
                    });
                  }
                  
                  // Check for fieldErrors object from improved validation handler
                  if (result.fieldErrors && typeof result.fieldErrors === 'object') {
                    Object.assign(backendErrors, result.fieldErrors);
                  }
                  
                  setUserRegistrationErrors(backendErrors);
                  return;
                }
                
                if (result.success && result.data) {
                  alert('Registration successful! You can now log in.');
                  setShowUserRegistration(false);
                  setUserRegistrationErrors({});
                  // Reset form state
                  setSelectedHairStyles([]);
                  setHairStyleSearchQuery('');
                  setCustomHairStyleInput('');
                  e.target.reset();
                }
              } catch (error) {
                console.error('Error registering user:', error);
                setUserRegistrationErrors({ general: `Registration failed: ${error.message}. Please try again.` });
              }
            }}>
              {userRegistrationErrors.general && (
                <div className="form-error-message general-error">
                  {userRegistrationErrors.general}
                </div>
              )}
              
              <div className="form-section">
                <h2 className="form-section-title">Account Information</h2>
                <div className="form-group">
                  <label htmlFor="user-email">Email *</label>
                  <input 
                    ref={userRegistrationFieldRefs.email}
                    type="email" 
                    id="user-email" 
                    name="email" 
                    required 
                    className={userRegistrationErrors.email ? 'input-error' : ''}
                    onChange={() => {
                      if (userRegistrationErrors.email) {
                        setUserRegistrationErrors(prev => {
                          const newErrors = { ...prev };
                          delete newErrors.email;
                          return newErrors;
                        });
                      }
                    }}
                  />
                  {userRegistrationErrors.email && (
                    <span className="field-error-message">{userRegistrationErrors.email}</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="user-password">Password *</label>
                  <input 
                    ref={userRegistrationFieldRefs.password}
                    type="password" 
                    id="user-password" 
                    name="password" 
                    required 
                    minLength="6"
                    className={userRegistrationErrors.password ? 'input-error' : ''}
                    onChange={() => {
                      if (userRegistrationErrors.password) {
                        setUserRegistrationErrors(prev => {
                          const newErrors = { ...prev };
                          delete newErrors.password;
                          return newErrors;
                        });
                      }
                    }}
                  />
                  {userRegistrationErrors.password && (
                    <span className="field-error-message">{userRegistrationErrors.password}</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="user-confirm-password">Confirm Password *</label>
                  <input 
                    ref={userRegistrationFieldRefs.confirmPassword}
                    type="password" 
                    id="user-confirm-password" 
                    name="confirmPassword" 
                    required 
                    minLength="6"
                    className={userRegistrationErrors.confirmPassword ? 'input-error' : ''}
                    onChange={() => {
                      if (userRegistrationErrors.confirmPassword) {
                        setUserRegistrationErrors(prev => {
                          const newErrors = { ...prev };
                          delete newErrors.confirmPassword;
                          return newErrors;
                        });
                      }
                    }}
                  />
                  {userRegistrationErrors.confirmPassword && (
                    <span className="field-error-message">{userRegistrationErrors.confirmPassword}</span>
                  )}
                </div>
              </div>

              <div className="form-section">
                <h2 className="form-section-title">Personal Information</h2>
                <div className="form-group">
                  <label htmlFor="user-name">Full Name *</label>
                  <input 
                    ref={userRegistrationFieldRefs.name}
                    type="text" 
                    id="user-name" 
                    name="name" 
                    required 
                    className={userRegistrationErrors.name ? 'input-error' : ''}
                    onChange={() => {
                      if (userRegistrationErrors.name) {
                        setUserRegistrationErrors(prev => {
                          const newErrors = { ...prev };
                          delete newErrors.name;
                          return newErrors;
                        });
                      }
                    }}
                  />
                  {userRegistrationErrors.name && (
                    <span className="field-error-message">{userRegistrationErrors.name}</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="user-phone">Phone Number *</label>
                  <input 
                    ref={userRegistrationFieldRefs.phone}
                    type="tel" 
                    id="user-phone" 
                    name="phone" 
                    required 
                    className={userRegistrationErrors.phone ? 'input-error' : ''}
                    onChange={() => {
                      if (userRegistrationErrors.phone) {
                        setUserRegistrationErrors(prev => {
                          const newErrors = { ...prev };
                          delete newErrors.phone;
                          return newErrors;
                        });
                      }
                    }}
                  />
                  {userRegistrationErrors.phone && (
                    <span className="field-error-message">{userRegistrationErrors.phone}</span>
                  )}
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
            <form className="registration-form" onSubmit={async (e) => {
              e.preventDefault();
              
              // Clear previous errors
              setStylistRegistrationErrors({});
              
              const errors = {};
              let hasErrors = false;
              
              // Validate that at least one day is selected
              const hasEnabledDay = Object.values(workSchedule).some(schedule => schedule.enabled);
              if (!hasEnabledDay) {
                errors.workSchedule = 'Please select at least one working day and set your hours.';
                hasErrors = true;
              }
              
              try {
                const formData = new FormData(e.target);
                
                // Validate email format
                const email = formData.get('email');
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!email || !emailRegex.test(email.trim())) {
                  errors.email = 'Please enter a valid email address (e.g., example@domain.com)';
                  hasErrors = true;
                }
                
                // Validate phone number format
                const phone = formData.get('phone');
                const phoneRegex = /^[\d\s\-\(\)\.\+]+$/;
                if (!phone || !phoneRegex.test(phone.trim())) {
                  errors.phone = 'Phone number can only contain numbers and formatting characters (spaces, hyphens, parentheses, dots, or +). Letters are not allowed.';
                  hasErrors = true;
                } else {
                  // Check if phone has at least 7 digits
                  const phoneDigits = phone.replace(/\D/g, '');
                  if (phoneDigits.length < 7 || phoneDigits.length > 15) {
                    errors.phone = 'Phone number must be between 7 and 15 digits.';
                    hasErrors = true;
                  }
                }
                
                // Validate password
                const password = formData.get('password');
                if (!password || password.length < 6) {
                  errors.password = 'Password must be at least 6 characters long.';
                  hasErrors = true;
                }
                
                // Validate name
                const name = formData.get('name');
                if (!name || !name.trim()) {
                  errors.name = 'Full name is required.';
                  hasErrors = true;
                }
                
                // Validate required fields
                const specialty = formData.get('specialty');
                if (!specialty || !specialty.trim()) {
                  errors.specialty = 'Specialty is required.';
                  hasErrors = true;
                }
                
                if (hasErrors) {
                  setStylistRegistrationErrors(errors);
                  return;
                }
                
                // Add profile picture file if selected
                if (profilePhoto) {
                  formData.append('profilePicture', profilePhoto);
                }
                
                // Add portfolio pictures files if any selected
                portfolioPhotos.forEach((photo) => {
                  formData.append('portfolioPictures', photo);
                });
                
                // Add services as JSON string (FormData doesn't handle arrays well)
                const validServices = registrationServices.filter(s => s.name && s.name.trim());
                if (validServices.length > 0) {
                  formData.append('services', JSON.stringify(validServices));
                }
                
                // Add hair texture types (already handled by checkboxes, but ensure it's set)
                if (selectedHairTextureTypes.length > 0) {
                  formData.set('hairTextureTypes', selectedHairTextureTypes.join(', '));
                }
                
                // Add accepted payment types
                if (selectedPaymentTypes.length > 0) {
                  formData.set('acceptedPaymentTypes', selectedPaymentTypes.join(', '));
                }
                
                // Submit to backend API with FormData (includes files)
                const response = await fetch(`${API_BASE_URL}/api/stylists`, {
                  method: 'POST',
                  // Don't set Content-Type header - let browser set it with boundary for multipart/form-data
                  body: formData
                });
                
                // Try to parse JSON response
                let result;
                try {
                  const text = await response.text();
                  result = text ? JSON.parse(text) : {};
                } catch (parseError) {
                  console.error('Failed to parse response:', parseError);
                  setStylistRegistrationErrors({ 
                    general: `Server error (${response.status}): ${response.statusText}. Please try again.` 
                  });
                  return;
                }
                
                console.log('Stylist registration response:', {
                  status: response.status,
                  statusText: response.statusText,
                  ok: response.ok,
                  result: result
                });
                
                if (!response.ok || !result.success) {
                  // Parse backend errors
                  const backendErrors = {};
                  const errorMessage = result.message || 'Registration failed. Please try again.';
                  
                  // Check if there's a specific field mentioned in the error
                  if (result.field) {
                    backendErrors[result.field] = errorMessage;
                  } else if (result.missingFields && Array.isArray(result.missingFields)) {
                    // Handle missing fields array
                    backendErrors.general = errorMessage;
                    result.missingFields.forEach(field => {
                      const fieldKey = field.toLowerCase().replace(/\s+/g, '');
                      if (fieldKey.includes('name')) backendErrors.name = `${field} is required.`;
                      else if (fieldKey.includes('email')) backendErrors.email = `${field} is required.`;
                      else if (fieldKey.includes('password')) backendErrors.password = `${field} is required.`;
                      else if (fieldKey.includes('phone')) backendErrors.phone = `${field} is required.`;
                      else if (fieldKey.includes('address')) backendErrors.address = `${field} is required.`;
                      else if (fieldKey.includes('specialty')) backendErrors.specialty = `${field} is required.`;
                    });
                  } else {
                    // Try to identify which field the error relates to
                    const errorLower = errorMessage.toLowerCase();
                    if (errorLower.includes('email') || errorLower.includes('already registered')) {
                      backendErrors.email = errorMessage;
                    } else if (errorLower.includes('phone')) {
                      backendErrors.phone = errorMessage;
                    } else if (errorLower.includes('password')) {
                      backendErrors.password = errorMessage;
                    } else if (errorLower.includes('name') && (errorLower.includes('letter') || errorLower.includes('pattern'))) {
                      backendErrors.name = errorMessage;
                    } else if (errorLower.includes('address')) {
                      backendErrors.address = errorMessage;
                    } else if (errorLower.includes('specialty')) {
                      backendErrors.specialty = errorMessage;
                    } else {
                      // If we can't identify the field, show general error
                      backendErrors.general = errorMessage;
                    }
                  }
                  
                  // Also check for validation errors array from express-validator
                  if (result.errors && Array.isArray(result.errors)) {
                    result.errors.forEach(err => {
                      const field = err.field || err.path || err.param;
                      if (field) {
                        backendErrors[field] = err.message || err.msg || errorMessage;
                      }
                    });
                  }
                  
                  // Check for fieldErrors object from improved validation handler
                  if (result.fieldErrors && typeof result.fieldErrors === 'object') {
                    Object.assign(backendErrors, result.fieldErrors);
                  }
                  
                  // If we have field-specific errors, don't show general error
                  const hasFieldErrors = Object.keys(backendErrors).some(key => key !== 'general');
                  if (hasFieldErrors && !backendErrors.general) {
                    // Set general error to guide user
                    backendErrors.general = 'Please fix the errors in the form fields below.';
                  } else if (!hasFieldErrors) {
                    backendErrors.general = errorMessage;
                  }
                  
                  console.error('Stylist registration error details:', {
                    status: response.status,
                    statusText: response.statusText,
                    result: result,
                    backendErrors: backendErrors
                  });
                  
                  setStylistRegistrationErrors(backendErrors);
                  return;
                }
                
                if (result.success) {
                  // Refetch stylists to get the updated list
                  const stylistsResponse = await fetch(`${API_BASE_URL}/api/stylists`);
                  const stylistsResult = await stylistsResponse.json();
                  if (stylistsResult.success && stylistsResult.data) {
                    setStylists(stylistsResult.data);
                  }
                  
                  alert('Registration successful! Your profile has been added.');
                  setShowRegistration(false);
                  setStylistRegistrationErrors({});
                  // Reset form state
                  setProfilePhoto(null);
                  setPortfolioPhotos([]);
                  setRegistrationServices([{ name: '', duration: '', price: '' }]);
                  setSelectedPaymentTypes([]);
                  setSelectedHairTextureTypes([]);
                  // Reset work schedule
                  setWorkSchedule({
                    Monday: { enabled: false, startTime: '09:00', endTime: '17:00' },
                    Tuesday: { enabled: false, startTime: '09:00', endTime: '17:00' },
                    Wednesday: { enabled: false, startTime: '09:00', endTime: '17:00' },
                    Thursday: { enabled: false, startTime: '09:00', endTime: '17:00' },
                    Friday: { enabled: false, startTime: '09:00', endTime: '17:00' },
                    Saturday: { enabled: false, startTime: '09:00', endTime: '17:00' },
                    Sunday: { enabled: false, startTime: '09:00', endTime: '17:00' }
                  });
                  e.target.reset();
                }
              } catch (error) {
                console.error('Error registering stylist:', error);
                setStylistRegistrationErrors({ 
                  general: `Registration failed: ${error.message}. Please check your connection and try again.` 
                });
              }
            }}>
              {stylistRegistrationErrors.general && (
                <div className="form-error-message general-error">
                  {stylistRegistrationErrors.general}
                </div>
              )}
              
              <div className="form-section">
                <h2 className="form-section-title">Account Information</h2>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input 
                    ref={stylistRegistrationFieldRefs.email}
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    className={stylistRegistrationErrors.email ? 'input-error' : ''}
                    onChange={() => {
                      if (stylistRegistrationErrors.email) {
                        setStylistRegistrationErrors(prev => {
                          const newErrors = { ...prev };
                          delete newErrors.email;
                          return newErrors;
                        });
                      }
                    }}
                  />
                  {stylistRegistrationErrors.email && (
                    <span className="field-error-message">{stylistRegistrationErrors.email}</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password *</label>
                  <input 
                    ref={stylistRegistrationFieldRefs.password}
                    type="password" 
                    id="password" 
                    name="password" 
                    required 
                    minLength="6"
                    className={stylistRegistrationErrors.password ? 'input-error' : ''}
                    onChange={() => {
                      if (stylistRegistrationErrors.password) {
                        setStylistRegistrationErrors(prev => {
                          const newErrors = { ...prev };
                          delete newErrors.password;
                          return newErrors;
                        });
                      }
                    }}
                  />
                  {stylistRegistrationErrors.password && (
                    <span className="field-error-message">{stylistRegistrationErrors.password}</span>
                  )}
                </div>
              </div>

              <div className="form-section">
                <h2 className="form-section-title">Personal Information</h2>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input 
                    ref={stylistRegistrationFieldRefs.name}
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    className={stylistRegistrationErrors.name ? 'input-error' : ''}
                    onChange={() => {
                      if (stylistRegistrationErrors.name) {
                        setStylistRegistrationErrors(prev => {
                          const newErrors = { ...prev };
                          delete newErrors.name;
                          return newErrors;
                        });
                      }
                    }}
                  />
                  {stylistRegistrationErrors.name && (
                    <span className="field-error-message">{stylistRegistrationErrors.name}</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="profilePicture">Profile Picture *</label>
                  <div className="file-upload-container">
                    <input 
                      type="file" 
                      id="profilePicture" 
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
                  <input 
                    ref={stylistRegistrationFieldRefs.address}
                    type="text" 
                    id="address" 
                    name="address" 
                    required 
                    className={stylistRegistrationErrors.address ? 'input-error' : ''}
                    onChange={() => {
                      if (stylistRegistrationErrors.address) {
                        setStylistRegistrationErrors(prev => {
                          const newErrors = { ...prev };
                          delete newErrors.address;
                          return newErrors;
                        });
                      }
                    }}
                  />
                  {stylistRegistrationErrors.address && (
                    <span className="field-error-message">{stylistRegistrationErrors.address}</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input 
                    ref={stylistRegistrationFieldRefs.phone}
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required 
                    className={stylistRegistrationErrors.phone ? 'input-error' : ''}
                    onChange={() => {
                      if (stylistRegistrationErrors.phone) {
                        setStylistRegistrationErrors(prev => {
                          const newErrors = { ...prev };
                          delete newErrors.phone;
                          return newErrors;
                        });
                      }
                    }}
                  />
                  {stylistRegistrationErrors.phone && (
                    <span className="field-error-message">{stylistRegistrationErrors.phone}</span>
                  )}
                </div>
              </div>

              <div className="form-section">
                <h2 className="form-section-title">Professional Details</h2>
                <div className="form-group">
                  <label htmlFor="specialty">Specialty *</label>
                  <input 
                    ref={stylistRegistrationFieldRefs.specialty}
                    type="text" 
                    id="specialty" 
                    name="specialty" 
                    required 
                    placeholder="e.g., Modern cuts and color techniques"
                    className={stylistRegistrationErrors.specialty ? 'input-error' : ''}
                    onChange={() => {
                      if (stylistRegistrationErrors.specialty) {
                        setStylistRegistrationErrors(prev => {
                          const newErrors = { ...prev };
                          delete newErrors.specialty;
                          return newErrors;
                        });
                      }
                    }}
                  />
                  {stylistRegistrationErrors.specialty && (
                    <span className="field-error-message">{stylistRegistrationErrors.specialty}</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="hairTextureTypes">Hair Texture Types *</label>
                  <p className="form-hint">Select all hair texture types you work with</p>
                  {stylistRegistrationErrors.hairTextureTypes && (
                    <span className="field-error-message" style={{ display: 'block', marginBottom: '10px' }}>
                      {stylistRegistrationErrors.hairTextureTypes}
                    </span>
                  )}
                  <div className={`hair-texture-types-grid ${stylistRegistrationErrors.hairTextureTypes ? 'has-error' : ''}`}>
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
                  <label htmlFor="yearsOfExperience" className="label-with-help">
                    Years of Experience *
                    <span className="help-tooltip-container">
                      <svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className="help-icon"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                      </svg>
                      <span className="help-tooltip">
                        Enter only the number (e.g., "5" not "5 years"). The system will format it automatically.
                      </span>
                    </span>
                  </label>
                  <input type="text" id="yearsOfExperience" name="yearsOfExperience" required placeholder="e.g., 5" />
                </div>
                <div className="form-group">
                  <label htmlFor="rate" className="label-with-help">
                    Rate per Hour *
                    <span className="help-tooltip-container">
                      <svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className="help-icon"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                      </svg>
                      <span className="help-tooltip">
                        Enter only the number (e.g., "75" not "$75/hour"). The system will format it automatically.
                      </span>
                    </span>
                  </label>
                  <input type="text" id="rate" name="rate" required placeholder="e.g., 75" />
                </div>
                <div className="form-group">
                  <label htmlFor="hours">Business Hours *</label>
                  <p className="form-hint">Select your working days and set your hours</p>
                  <div className="work-schedule-builder">
                    {Object.entries(workSchedule).map(([day, schedule]) => (
                      <div key={day} className="schedule-day-row">
                        <div className="schedule-day-toggle">
                          <label className="day-toggle-label">
                            <input
                              type="checkbox"
                              checked={schedule.enabled}
                              onChange={(e) => {
                                setWorkSchedule({
                                  ...workSchedule,
                                  [day]: { ...schedule, enabled: e.target.checked }
                                });
                              }}
                            />
                            <span className="day-name">{day.substring(0, 3)}</span>
                          </label>
                        </div>
                        {schedule.enabled && (
                          <div className="schedule-time-inputs">
                            <div className="time-input-group">
                              <label>From</label>
                              <input
                                type="time"
                                value={schedule.startTime}
                                onChange={(e) => {
                                  setWorkSchedule({
                                    ...workSchedule,
                                    [day]: { ...schedule, startTime: e.target.value }
                                  });
                                }}
                                className="time-input"
                              />
                            </div>
                            <span className="time-separator">to</span>
                            <div className="time-input-group">
                              <label>To</label>
                              <input
                                type="time"
                                value={schedule.endTime}
                                onChange={(e) => {
                                  setWorkSchedule({
                                    ...workSchedule,
                                    [day]: { ...schedule, endTime: e.target.value }
                                  });
                                }}
                                className="time-input"
                              />
                            </div>
                          </div>
                        )}
                        {!schedule.enabled && (
                          <span className="closed-label">Closed</span>
                        )}
                      </div>
                    ))}
                    <div className="schedule-quick-actions">
                      <button
                        type="button"
                        className="quick-action-button"
                        onClick={() => {
                          const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
                          const updatedSchedule = { ...workSchedule };
                          weekdays.forEach(day => {
                            updatedSchedule[day] = { ...updatedSchedule[day], enabled: true };
                          });
                          setWorkSchedule(updatedSchedule);
                        }}
                      >
                        Set Weekdays
                      </button>
                      <button
                        type="button"
                        className="quick-action-button"
                        onClick={() => {
                          const updatedSchedule = { ...workSchedule };
                          Object.keys(updatedSchedule).forEach(day => {
                            updatedSchedule[day] = { ...updatedSchedule[day], enabled: true };
                          });
                          setWorkSchedule(updatedSchedule);
                        }}
                      >
                        Set All Days
                      </button>
                      <button
                        type="button"
                        className="quick-action-button"
                        onClick={() => {
                          const updatedSchedule = { ...workSchedule };
                          Object.keys(updatedSchedule).forEach(day => {
                            updatedSchedule[day] = { ...updatedSchedule[day], enabled: false };
                          });
                          setWorkSchedule(updatedSchedule);
                        }}
                      >
                        Clear All
                      </button>
                    </div>
                  </div>
                  {/* Hidden input for form submission - store as JSON for easy editing */}
                  <input
                    type="hidden"
                    id="hours"
                    name="hours"
                    value={JSON.stringify(workSchedule)}
                  />
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
                    <div className="service-input-header">
                      <div className="service-header-item">
                        <span className="service-header-label">Service Name</span>
                      </div>
                      <div className="service-header-item">
                        <span className="service-header-label label-with-help">
                          Duration
                          <span className="help-tooltip-container">
                            <svg 
                              width="14" 
                              height="14" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              stroke="currentColor" 
                              strokeWidth="2" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                              className="help-icon"
                            >
                              <circle cx="12" cy="12" r="10"></circle>
                              <line x1="12" y1="16" x2="12" y2="12"></line>
                              <line x1="12" y1="8" x2="12.01" y2="8"></line>
                            </svg>
                            <span className="help-tooltip">
                              Enter only the number (e.g., "45" not "45 minutes"). The system will format it automatically.
                            </span>
                          </span>
                        </span>
                      </div>
                      <div className="service-header-item">
                        <span className="service-header-label label-with-help">
                          Price (optional)
                          <span className="help-tooltip-container">
                            <svg 
                              width="14" 
                              height="14" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              stroke="currentColor" 
                              strokeWidth="2" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                              className="help-icon"
                            >
                              <circle cx="12" cy="12" r="10"></circle>
                              <line x1="12" y1="16" x2="12" y2="12"></line>
                              <line x1="12" y1="8" x2="12.01" y2="8"></line>
                            </svg>
                            <span className="help-tooltip">
                              Enter only the number (e.g., "30" not "$30"). The system will format it automatically.
                            </span>
                          </span>
                        </span>
                      </div>
                      <div className="service-header-item"></div>
                    </div>
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
                          placeholder="e.g., 45" 
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
                          placeholder="e.g., 30" 
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
                  handleLogout();
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
                  handleLogout();
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
        <div className="view-toggle-container">
          <button
            className={`view-toggle-button ${viewMode === 'stylists' ? 'active' : ''}`}
            onClick={() => setViewMode('stylists')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            Stylists
          </button>
          <button
            className={`view-toggle-button ${viewMode === 'products' ? 'active' : ''}`}
            onClick={() => setViewMode('products')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            Products
          </button>
          {loggedInUser && (
            <button
              className={`view-toggle-button ${viewMode === 'bookings' ? 'active' : ''}`}
              onClick={() => setViewMode('bookings')}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
                <path d="M8 14h.01"></path>
                <path d="M12 14h.01"></path>
                <path d="M16 14h.01"></path>
                <path d="M8 18h.01"></path>
                <path d="M12 18h.01"></path>
                <path d="M16 18h.01"></path>
              </svg>
              Bookings
            </button>
          )}
        </div>
        <h1>
          {viewMode === 'stylists' ? 'Grwmglow' : 
           viewMode === 'products' ? 'Products' : 
           'My Bookings'}
        </h1>
        <p className="subtitle">
          {viewMode === 'stylists' ? 'Find your perfect stylist' : 
           viewMode === 'products' ? 'Browse products from all stylists' : 
           'View and manage your appointments'}
        </p>
        <button
          className="mission-statement-link"
          onClick={() => setShowMissionStatementPage(true)}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          Our Mission
        </button>
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

        {/* Mobile-only filter toggle button */}
        {(() => {
          const activeFiltersCount = [
            selectedSpecialty !== 'all',
            selectedRate !== 'all',
            selectedTravel !== 'all',
            selectedHairTextureType !== 'all',
            selectedAvailableNow !== 'all',
            !!selectedDate,
            !!selectedTime,
            !!appliedDate,
            !!appliedTime
          ].filter(Boolean).length;

          return (
            <button
              className="filters-toggle-button"
              onClick={() => setFiltersExpanded(!filtersExpanded)}
              aria-expanded={filtersExpanded}
            >
              <span>
                Filters
                {activeFiltersCount > 0 && (
                  <span className="filters-count-badge">{activeFiltersCount}</span>
                )}
              </span>
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                style={{ 
                  transform: filtersExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease'
                }}
              >
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>
          );
        })()}

        <div className={`filters-container ${filtersExpanded ? 'filters-expanded' : 'filters-collapsed'}`}>
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
            <label htmlFor="available-now-filter" className="filter-label">Available Now</label>
            <select
              id="available-now-filter"
              className="filter-select"
              value={selectedAvailableNow}
              onChange={(e) => setSelectedAvailableNow(e.target.value)}
            >
              <option value="all">All</option>
              <option value="yes">Available Now</option>
              <option value="no">Not Available Now</option>
            </select>
          </div>

          <div className="filter-row date-time-filter-row">
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
          </div>

          {(selectedSpecialty !== 'all' || selectedRate !== 'all' || selectedTravel !== 'all' || selectedHairTextureType !== 'all' || selectedAvailableNow !== 'all' || selectedDate || selectedTime || appliedDate || appliedTime) && (
            <button
              className="clear-filters-button"
              onClick={() => {
                setSelectedSpecialty('all');
                setSelectedRate('all');
                setSelectedTravel('all');
                setSelectedHairTextureType('all');
                setSelectedAvailableNow('all');
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
        
        {viewMode === 'bookings' ? (
          <div className="bookings-container">
            {userAppointmentsLoading ? (
              <div className="loading-container">
                <div className="loading-spinner"></div>
                <p>Loading your bookings...</p>
              </div>
            ) : userAppointments.length === 0 ? (
              <div className="no-results">
                <div className="no-results-icon">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <h3 className="no-results-title">No bookings yet</h3>
                <p className="no-results-message">Start browsing stylists to book your first appointment</p>
                <button
                  className="primary-button"
                  onClick={() => setViewMode('stylists')}
                  style={{ marginTop: '20px' }}
                >
                  Browse Stylists
                </button>
              </div>
            ) : (
              <div className="appointments-list">
                {userAppointments.map((appointment) => {
                  const stylist = stylists.find(s => s.id === appointment.stylistId);
                  const appointmentDate = new Date(appointment.date);
                  const isPast = appointmentDate < new Date();
                  
                  return (
                    <div 
                      key={appointment.id} 
                      className={`appointment-item ${isPast ? 'past' : 'upcoming'}`}
                      onClick={() => {
                        if (stylist) {
                          setSelectedStylistId(stylist.id);
                        }
                      }}
                    >
                      <div className="appointment-header">
                        <div className="appointment-stylist-info">
                          {stylist && (
                            <img 
                              src={fixImageUrl(stylist.profilePicture)} 
                              alt={stylist.name}
                              className="appointment-stylist-photo"
                            />
                          )}
                          <div className="appointment-stylist-details">
                            <h3 className="appointment-stylist-name">
                              {stylist ? stylist.name : 'Unknown Stylist'}
                            </h3>
                            <p className="appointment-status">
                              <span className={`status-badge ${appointment.status}`}>
                                {appointment.status}
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="appointment-date-time">
                          <div className="appointment-date">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                              <line x1="16" y1="2" x2="16" y2="6"></line>
                              <line x1="8" y1="2" x2="8" y2="6"></line>
                              <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                            <span>{appointmentDate.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}</span>
                          </div>
                          <div className="appointment-time">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="12" r="10"></circle>
                              <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            <span>{appointment.time}</span>
                          </div>
                          {appointment.suggestedDate && appointment.suggestedTime && (
                            <div className="appointment-suggestion-notice">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                              </svg>
                              <span className="suggestion-label">New Time Suggested:</span>
                              <span className="suggestion-value">
                                {new Date(appointment.suggestedDate).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })} at {appointment.suggestedTime}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="appointment-purpose">
                        <span className="label">Service:</span> {appointment.purpose}
                      </div>
                      {appointment.services && appointment.services.length > 0 && (
                        <div className="appointment-services">
                          <span className="label">Services:</span>
                          <div className="appointment-services-list">
                            {appointment.services.map((service, index) => (
                              <span key={index} className="appointment-service-tag">{service}</span>
                            ))}
                          </div>
                        </div>
                      )}
                      {appointment.conversationPreference && (
                        <div className="appointment-conversation-preference">
                          <span className="label">Conversation Preference:</span>
                          <span className="preference-value">{formatConversationPreference(appointment.conversationPreference)}</span>
                        </div>
                      )}
                      {appointment.suggestedDate && appointment.suggestedTime && (
                        <div className="appointment-suggestion-actions">
                          <button
                            className="accept-suggestion-button"
                            onClick={async (e) => {
                              e.stopPropagation();
                              if (!confirm('Are you sure you want to accept the new date/time suggested by the stylist?')) return;
                              try {
                                const response = await fetch(`${API_BASE_URL}/api/appointments/${appointment.id}/accept-suggestion`, {
                                  method: 'PUT',
                                  headers: {
                                    'Content-Type': 'application/json',
                                  }
                                });
                                if (!response.ok) {
                                  throw new Error('Failed to accept suggestion');
                                }
                                const result = await response.json();
                                if (result.success) {
                                  // Refresh appointments
                                  const refreshResponse = await fetch(`${API_BASE_URL}/api/appointments?userId=${loggedInUser.id}`);
                                  if (refreshResponse.ok) {
                                    const refreshResult = await refreshResponse.json();
                                    if (refreshResult.success && refreshResult.data) {
                                      setUserAppointments(refreshResult.data);
                                    }
                                  }
                                  alert('Suggestion accepted! Your appointment has been updated.');
                                }
                              } catch (error) {
                                console.error('Error accepting suggestion:', error);
                                alert('Failed to accept suggestion. Please try again.');
                              }
                            }}
                          >
                            Accept New Time
                          </button>
                          <button
                            className="reject-suggestion-button"
                            onClick={async (e) => {
                              e.stopPropagation();
                              if (!confirm('Are you sure you want to reject the new date/time suggested by the stylist?')) return;
                              try {
                                const response = await fetch(`${API_BASE_URL}/api/appointments/${appointment.id}/reject-suggestion`, {
                                  method: 'PUT',
                                  headers: {
                                    'Content-Type': 'application/json',
                                  }
                                });
                                if (!response.ok) {
                                  throw new Error('Failed to reject suggestion');
                                }
                                const result = await response.json();
                                if (result.success) {
                                  // Refresh appointments
                                  const refreshResponse = await fetch(`${API_BASE_URL}/api/appointments?userId=${loggedInUser.id}`);
                                  if (refreshResponse.ok) {
                                    const refreshResult = await refreshResponse.json();
                                    if (refreshResult.success && refreshResult.data) {
                                      setUserAppointments(refreshResult.data);
                                    }
                                  }
                                  alert('Suggestion rejected. Your original appointment time remains.');
                                }
                              } catch (error) {
                                console.error('Error rejecting suggestion:', error);
                                alert('Failed to reject suggestion. Please try again.');
                              }
                            }}
                          >
                            Reject New Time
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ) : viewMode === 'products' ? (
          <div className="products-container">
            {(() => {
              // Aggregate all products from all stylists
              const allProducts = [];
              stylists.forEach(stylist => {
                if (stylist.products && stylist.products.length > 0) {
                  stylist.products.forEach(product => {
                    allProducts.push({
                      ...product,
                      stylistId: stylist.id,
                      stylistName: stylist.name,
                      stylistProfilePicture: fixImageUrl(stylist.profilePicture)
                    });
                  });
                }
              });

              // Filter products by search query
              const filteredProducts = allProducts.filter(product => {
                if (!searchQuery) return true;
                const query = searchQuery.toLowerCase();
                return (
                  product.title?.toLowerCase().includes(query) ||
                  product.price?.toLowerCase().includes(query) ||
                  product.stylistName?.toLowerCase().includes(query)
                );
              });

              return filteredProducts.length === 0 ? (
                <div className="no-results">
                  <div className="no-results-icon">
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                      <line x1="3" y1="6" x2="21" y2="6"></line>
                      <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                  </div>
                  <h3 className="no-results-title">No products found</h3>
                  <p className="no-results-message">Try adjusting your search terms or browse all stylists</p>
                </div>
              ) : (
                <div className="products-grid">
                  {filteredProducts.map((product, index) => {
                    const stylist = stylists.find(s => s.id === product.stylistId);
                    return (
                      <div
                        key={`${product.stylistId}-${index}`}
                        className="product-card"
                        onClick={() => {
                          if (stylist) {
                            setScrollToProducts(true);
                            setProductsSectionExpanded(true);
                            setSelectedStylistId(stylist.id);
                          }
                        }}
                      >
                        <div className="product-card-image-container">
                          <img
                              src={fixImageUrl(product.image) || 'https://via.placeholder.com/300'}
                            alt={product.title || 'Product'}
                            className="product-card-image"
                            loading="lazy"
                          />
                          <div className="product-card-stylist-info">
                            <img
                              src={fixImageUrl(product.stylistProfilePicture) || 'https://i.pravatar.cc/50'}
                              alt={product.stylistName}
                              className="product-card-stylist-avatar"
                            />
                            <span className="product-card-stylist-name">{product.stylistName}</span>
                          </div>
                        </div>
                        <div className="product-card-content">
                          <h3 className="product-card-title">{product.title || 'Untitled Product'}</h3>
                          <p className="product-card-price">
                            {product.price && product.price.startsWith('$') ? product.price : `$${product.price || '0'}`}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })()}
          </div>
        ) : (
          <div>
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
              paginatedStylists.map((stylist) => {
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
                className={`stylist-card ${!isAvailableAtDateTime ? 'not-available' : ''} ${stylist.availableNow ? 'available-now-card' : ''}`}
                onClick={() => setSelectedStylistId(stylist.id)}
              >
                <div className="stylist-header">
                  <img 
                    src={fixImageUrl(stylist.profilePicture)} 
                    alt={stylist.name}
                    className="stylist-profile-picture"
                  />
                  <div className="stylist-name-container">
                    <h2 className="stylist-name">{stylist.name}</h2>
                    <div className="stylist-badges">
                      {stylist.availableNow && (
                        <span className="available-now-badge" title="Available Now">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                          </svg>
                          Available Now
                        </span>
                      )}
                      {stylist.products && stylist.products.length > 0 && (
                        <div className="products-indicator" title={`${stylist.products.length} product${stylist.products.length === 1 ? '' : 's'} available`}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <path d="M16 10a4 4 0 0 1-8 0"></path>
                          </svg>
                          <span className="products-count">{stylist.products.length}</span>
                        </div>
                      )}
                    </div>
                  </div>
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
                      <span className="contact-label">Phone:</span> <a href={`tel:${stylist.phone}`} onClick={(e) => e.stopPropagation()}>{formatPhoneNumber(stylist.phone)}</a>
                    </p>
                  </div>
                </div>
                <p className="stylist-rate">
                  <span className="label">Rate:</span> {formatRate(stylist.rate)}
                </p>
                <p className="stylist-hours">
                  <span className="label">Hours:</span> {formatScheduleForDisplay(stylist.hours)}
                </p>
                <p className="stylist-availability">
                  <span className="label">Current Availability:</span> {stylist.currentAvailability}
                </p>
                <p className="stylist-travel">
                  <span className="label">Willing to travel to customer:</span> {stylist.willingToTravel}
                </p>
                <p className="stylist-experience">
                  <span className="label">Years of Experience:</span> {formatYearsOfExperience(stylist.yearsOfExperience)}
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
                          {service.name}{service.price ? ` (${formatServicePrice(service.price)})` : ''}
                        </span>
                        <span className="service-duration">{formatServiceDuration(service.duration)}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="stylist-about">
                  <span className="label">About:</span>
                  <p className="about-text">{stylist.about}</p>
                </div>
              </div>
              {loggedInUser ? (
                <button
                  className="book-appointment-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setBookingStylistId(stylist.id);
                    setShowBookingPage(true);
                  }}
                >
                  Book Appointment
                </button>
              ) : (
                <button
                  className="book-appointment-button register-login-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowRegisterOrLogin(true);
                  }}
                >
                  Register / Login to Book
                </button>
              )}
            </div>
            );
            })
            )}
          </div>
          
          {/* Pagination Controls */}
          {filteredStylists.length > 0 && totalPages > 1 && (
            <div className="pagination-container">
              <div className="pagination-info">
                Showing {startIndex + 1}-{Math.min(endIndex, filteredStylists.length)} of {filteredStylists.length} stylists
              </div>
              <div className="pagination-controls">
                <button
                  className="pagination-button"
                  onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  aria-label="Previous page"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                  Previous
                </button>
                
                <div className="pagination-pages">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                    // Show first page, last page, current page, and pages around current
                    if (
                      page === 1 ||
                      page === totalPages ||
                      (page >= currentPage - 1 && page <= currentPage + 1)
                    ) {
                      return (
                        <button
                          key={page}
                          className={`pagination-page-button ${currentPage === page ? 'active' : ''}`}
                          onClick={() => setCurrentPage(page)}
                          aria-label={`Go to page ${page}`}
                        >
                          {page}
                        </button>
                      );
                    } else if (
                      page === currentPage - 2 ||
                      page === currentPage + 2
                    ) {
                      return (
                        <span key={page} className="pagination-ellipsis">
                          ...
                        </span>
                      );
                    }
                    return null;
                  })}
                </div>
                
                <button
                  className="pagination-button"
                  onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  aria-label="Next page"
                >
                  Next
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          )}
          </div>
        )}

        {/* Get in Touch Footer */}
        <footer className="get-in-touch-footer">
          <div className="footer-content">
            <div className="footer-text">
              <h2 className="footer-title">Get in Touch</h2>
              <p className="footer-subtitle">Stay updated with the latest stylists and exclusive offers</p>
            </div>
            <div className="footer-form-container">
              {emailSubmitted ? (
                <div className="footer-success-message">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Thank you! We'll be in touch soon.</span>
                </div>
              ) : (
                <form 
                  className="footer-email-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (footerEmail && emailRegex.test(footerEmail.trim())) {
                      setEmailSubmitted(true);
                      setFooterEmail('');
                      setTimeout(() => setEmailSubmitted(false), 5000);
                    } else {
                      alert('Please enter a valid email address (e.g., example@domain.com)');
                    }
                  }}
                >
                  <div className="footer-input-wrapper">
                    <svg className="footer-email-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <input
                      type="email"
                      className="footer-email-input"
                      placeholder="Enter your email address"
                      value={footerEmail}
                      onChange={(e) => setFooterEmail(e.target.value)}
                      required
                    />
                    <button type="submit" className="footer-submit-button">
                      Subscribe
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </footer>

        {/* Mission Statement Modal for First-Time Users */}
        {showMissionStatement && (
          <div className="mission-statement-overlay" onClick={() => {
            localStorage.setItem('hasSeenMissionStatement', 'true');
            setShowMissionStatement(false);
          }}>
            <div className="mission-statement-modal" onClick={(e) => e.stopPropagation()}>
              <button
                className="mission-statement-close"
                onClick={() => {
                  localStorage.setItem('hasSeenMissionStatement', 'true');
                  setShowMissionStatement(false);
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <div className="mission-statement-content">
                <div className="mission-statement-icon">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </div>
                <h2 className="mission-statement-title">Our Mission</h2>
                <div className="mission-statement-text">
                  <p>At <strong>Grwmglow</strong>, our mission is to do one thing and one thing well. To make the search for a hair stylist as easy and pain-free as possible. To eliminate the need for platforms like Instagram or Google Maps. To be the Uber of beauty services.</p>
                </div>
                <form 
                  className="mission-statement-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (communityEmail && communityEmail.includes('@')) {
                      // Here you can add API call to save the email
                      console.log('Community email submitted:', communityEmail);
                      alert('Thank you for joining our community!');
                      setCommunityEmail('');
                      localStorage.setItem('hasSeenMissionStatement', 'true');
                      setShowMissionStatement(false);
                    } else {
                      alert('Please enter a valid email address.');
                    }
                  }}
                >
                  <div className="mission-statement-email-group">
                    <label htmlFor="community-email" className="mission-statement-email-label">Join our community</label>
                    <div className="mission-statement-input-wrapper">
                      <svg className="mission-statement-email-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                      <input
                        type="email"
                        id="community-email"
                        className="mission-statement-email-input"
                        placeholder="Enter your email"
                        value={communityEmail}
                        onChange={(e) => setCommunityEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <button type="submit" className="mission-statement-submit-button">
                    Join
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
