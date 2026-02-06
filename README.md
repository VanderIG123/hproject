# Grwmglow

A React application for finding and booking hair stylists, browsing products, and managing appointments.

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Testing on Mobile Devices

You can test the Grwmglow app on your mobile device while developing. Both your computer and mobile device must be connected to the same Wi-Fi network.

### Step 1: Find Your Computer's IP Address

#### On macOS:
Open Terminal and run:
```bash
ifconfig | grep "inet " | grep -v 127.0.0.1
```

Or use:
```bash
ipconfig getifaddr en0
```

Look for an address like `192.168.1.76` or `10.0.0.5`.

#### On Windows:
Open Command Prompt and run:
```bash
ipconfig
```

Look for "IPv4 Address" under your active network adapter (usually Wi-Fi or Ethernet).

**Example IP:** `192.168.1.76`

### Step 2: Start the Backend Server

Make sure the backend server is running and accessible from your network:

```bash
cd /path/to/stylists-api
npm run dev
```

The backend should be configured to listen on `0.0.0.0:3001` (all network interfaces) to accept connections from mobile devices.

### Step 3: Start the Frontend Development Server

In a separate terminal:

```bash
cd /path/to/HProject
npm run dev
```

Vite will display both a local and network URL:
```
➜  Local:   http://localhost:5173/
➜  Network: http://192.168.1.76:5173/
```

### Step 4: Access from Mobile Device

1. On your mobile device, open a web browser (Chrome, Safari, etc.)
2. Navigate to the **Network URL** shown by Vite:
   ```
   http://YOUR_COMPUTER_IP:5173
   ```
   Example: `http://192.168.1.76:5173`

3. The frontend will automatically detect that you're accessing from a mobile device and use your computer's IP address for API calls to the backend.

### Automatic IP Detection

The frontend automatically detects the correct API URL:
- If you access from `localhost`, it uses `http://localhost:3001`
- If you access from an IP address (mobile), it uses `http://YOUR_IP:3001`

No manual configuration is needed in most cases!

### Troubleshooting

#### Can't connect from mobile device:
1. **Check firewall**: Ensure your computer's firewall allows connections on ports `3001` (backend) and `5173` (frontend)
2. **Check network**: Verify both devices are on the same Wi-Fi network
3. **Check IP address**: Your computer's IP may change when you reconnect to Wi-Fi - find it again if needed
4. **Backend not accessible**: Make sure the backend is listening on `0.0.0.0` (all interfaces), not just `localhost`

#### CORS errors:
- The backend should be configured to allow requests from local network IPs in development mode
- Check that `NODE_ENV=development` in your backend `.env` file
- Restart the backend server if you changed CORS settings

#### API calls failing:
1. Verify the backend is running: `http://YOUR_IP:3001/health` (if health endpoint exists)
2. Check browser console for error messages
3. Verify the frontend is using the correct API URL (check console logs)

#### Images not loading on mobile:
- Profile pictures and portfolio images should automatically use the correct IP address
- If images still don't load, check that the backend is serving files correctly from the uploads directory

### Security Note

⚠️ **Important**: This setup is for **development/testing only**. 

For production:
- Use proper domain names
- Configure CORS to only allow your production frontend domain
- Use HTTPS
- Set up proper authentication and security measures

## Features

- Browse and search hair stylists
- Book appointments with stylists
- View stylist portfolios and services
- Manage appointments (accept, reject, suggest new times)
- Browse products from stylists
- User and stylist authentication
- Recently viewed stylists
- Mobile-responsive design
- Real-time appointment management
