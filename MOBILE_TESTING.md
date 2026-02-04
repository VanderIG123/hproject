# Mobile Testing Setup Guide

This guide explains how to test the Grwmglow app on your mobile device.

## Prerequisites

1. **Both devices on the same network**: Your computer and mobile device must be on the same Wi-Fi network
2. **Backend server running**: Make sure the backend is running on your computer
3. **Frontend dev server running**: Make sure the frontend is running on your computer

## Step 1: Find Your Computer's IP Address

### On Mac/Linux:
```bash
ifconfig | grep "inet " | grep -v 127.0.0.1
```

Or use:
```bash
ipconfig getifaddr en0
```

### On Windows:
```bash
ipconfig
```
Look for "IPv4 Address" under your active network adapter.

**Example IP:** `192.168.1.76`

## Step 2: Update Frontend Configuration (Optional)

The frontend will automatically detect your computer's IP from the URL you use to access it. However, if you need to set a fallback IP:

1. Open `/Users/admin/Desktop/HProject/src/config.js`
2. Update the `LOCAL_IP` constant with your computer's IP address (only needed as fallback):
   ```javascript
   const LOCAL_IP = '192.168.1.76'; // Replace with your IP
   ```

**Note:** The config automatically uses the same IP address you use to access the frontend, so this step is usually not necessary.

## Step 3: Start the Backend Server

The backend is already configured to accept connections from your local network.

```bash
cd /Users/admin/Desktop/stylists-api
npm run dev
```

The server will listen on `0.0.0.0:3001`, making it accessible from any device on your network.

## Step 4: Start the Frontend Dev Server

```bash
cd /Users/admin/Desktop/HProject
npm run dev
```

Note the URL where Vite is running (usually `http://localhost:5173`).

## Step 5: Access from Mobile Device

### Option A: Using Vite's Network URL

Vite automatically shows a network URL when you start the dev server. Look for something like:
```
➜  Local:   http://localhost:5173/
➜  Network: http://192.168.1.76:5173/
```

Use the **Network** URL on your mobile device's browser.

### Option B: Manual Access

1. On your mobile device, open a web browser
2. Navigate to: `http://YOUR_COMPUTER_IP:5173`
   - Example: `http://192.168.1.76:5173`

## Step 6: Verify Backend Connection

The frontend will automatically detect if you're accessing from a mobile device and use your computer's IP address for API calls.

You can verify this by:
1. Opening browser developer tools (if available on mobile)
2. Checking the console for: `API Base URL: http://192.168.1.76:3001`

## Troubleshooting

### Can't connect from mobile device

1. **Check firewall**: Make sure your computer's firewall allows connections on ports 3001 and 5173
2. **Check network**: Ensure both devices are on the same Wi-Fi network
3. **Check IP address**: Verify your computer's IP hasn't changed (it may change when you reconnect to Wi-Fi)
4. **Try ping**: From mobile, try to ping your computer's IP (if possible)

### CORS errors

The backend is configured to allow requests from local network IPs in development mode. If you see CORS errors:
1. Check that `NODE_ENV=development` in your backend `.env` file
2. Restart the backend server

### API calls failing

1. Verify the backend is running: `http://YOUR_IP:3001/health`
2. Check the `config.js` file has the correct IP address
3. Check browser console for error messages

## Security Note

⚠️ **Important**: This setup is for **development/testing only**. The backend allows connections from any device on your local network. 

For production:
- Use proper domain names
- Configure CORS to only allow your production frontend domain
- Use HTTPS
- Set up proper authentication

## Quick Reference

- **Backend URL**: `http://YOUR_IP:3001`
- **Frontend URL**: `http://YOUR_IP:5173`
- **Health Check**: `http://YOUR_IP:3001/health`
- **Config File**: `/Users/admin/Desktop/HProject/src/config.js`
