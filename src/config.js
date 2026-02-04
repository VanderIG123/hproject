// API Configuration
// For mobile testing, replace 'localhost' with your computer's local IP address
// Find your IP: On Mac/Linux run: ifconfig | grep "inet " | grep -v 127.0.0.1
// On Windows run: ipconfig and look for IPv4 Address

// Your computer's local IP address (for mobile testing)
// UPDATE THIS with your computer's IP address
const LOCAL_IP = '192.168.1.76';

// Auto-detect API base URL
const getApiBaseUrl = () => {
  const hostname = window.location.hostname;
  const port = window.location.port;
  
  // If accessing from localhost, use localhost for API
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return 'http://localhost:3001';
  }
  
  // If accessing from IP address (mobile device), use the same IP for API
  // This assumes frontend and backend are on the same machine
  if (hostname.match(/^\d+\.\d+\.\d+\.\d+$/)) {
    // Use the same IP that the frontend is accessed from
    return `http://${hostname}:3001`;
  }
  
  // Fallback: use configured local IP
  return `http://${LOCAL_IP}:3001`;
};

export const API_BASE_URL = getApiBaseUrl();

// Log the API URL being used (for debugging)
console.log('API Base URL:', API_BASE_URL);
console.log('Frontend URL:', window.location.origin);
