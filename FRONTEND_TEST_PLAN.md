# Frontend Test Plan

## 🧪 Test Scenarios for Stylists Near Me Application

### 1. User Registration & Login

#### User Registration Tests
- [ ] **Valid Registration**
  - Fill all required fields with valid data
  - Submit form
  - Verify success message
  - Verify user is logged in automatically
  - Verify redirect to user profile

- [ ] **Missing Required Fields**
  - Try to submit with empty name field
  - Try to submit with empty email field
  - Try to submit with empty password field
  - Try to submit with empty phone field
  - Verify error messages appear for each missing field
  - Verify form cannot be submitted

- [ ] **Invalid Email Format**
  - Enter email without @ symbol
  - Enter email without domain
  - Enter email with spaces
  - Verify error message appears
  - Verify form cannot be submitted

- [ ] **Invalid Phone Number**
  - Enter phone with letters
  - Enter phone that's too short (< 7 digits)
  - Enter phone that's too long (> 15 digits)
  - Verify error message appears
  - Verify form cannot be submitted

- [ ] **Password Validation**
  - Enter password less than 6 characters
  - Enter password more than 128 characters
  - Verify error message appears
  - Verify form cannot be submitted

- [ ] **Duplicate Email**
  - Register with email that already exists
  - Verify error message: "Email already registered"
  - Verify form shows appropriate error

- [ ] **Name Validation**
  - Enter name with special characters (except hyphens/apostrophes)
  - Enter name that's too short (< 2 characters)
  - Enter name that's too long (> 100 characters)
  - Verify error messages appear

- [ ] **Hair Style Preferences**
  - Select multiple hair style preferences
  - Verify checkboxes work correctly
  - Verify selected preferences are saved
  - Verify preferences display correctly on profile

#### User Login Tests
- [ ] **Valid Login**
  - Enter correct email and password
  - Click login button
  - Verify success message
  - Verify user is logged in
  - Verify redirect to user profile

- [ ] **Invalid Email**
  - Enter non-existent email
  - Enter invalid email format
  - Verify error message appears

- [ ] **Invalid Password**
  - Enter wrong password for existing email
  - Verify error message: "Invalid email or password"
  - Verify password field is cleared or highlighted

- [ ] **Empty Fields**
  - Try to login with empty email
  - Try to login with empty password
  - Verify error messages appear
  - Verify form cannot be submitted

- [ ] **Case Sensitivity**
  - Test email case sensitivity (should be case-insensitive)
  - Verify login works with different email cases

---

### 2. Stylist Registration & Login

#### Stylist Registration Tests
- [ ] **Valid Registration with Profile Picture**
  - Fill all required fields
  - Upload valid profile picture (JPG, PNG, WEBP)
  - Verify image preview appears
  - Submit form
  - Verify success message
  - Verify stylist is logged in

- [ ] **Valid Registration with Portfolio Images**
  - Upload multiple portfolio images (up to 10)
  - Verify all images show previews
  - Verify images are uploaded correctly
  - Verify portfolio displays on stylist page

- [ ] **Invalid File Types**
  - Try to upload PDF as profile picture
  - Try to upload .exe file
  - Try to upload .txt file
  - Verify error message appears
  - Verify file is rejected

- [ ] **File Size Limits**
  - Try to upload image larger than 5MB for profile
  - Try to upload image larger than 10MB for portfolio
  - Verify error message appears
  - Verify file is rejected

- [ ] **Business Hours Input**
  - Enter business hours in various formats
  - Verify hours are saved correctly
  - Verify hours display correctly on stylist page

- [ ] **Services Input**
  - Add multiple services
  - Enter service name, duration, and price
  - Remove a service
  - Verify services are saved correctly
  - Verify services display on stylist page

- [ ] **Years of Experience Input**
  - Enter number with "Years" unit
  - Enter number with "Months" unit
  - Verify conversion from months to years works
  - Verify display format is correct (e.g., "5 years")

- [ ] **Hair Texture Types**
  - Select multiple hair texture types
  - Verify checkboxes work correctly
  - Verify selected types are saved

- [ ] **Payment Types**
  - Select multiple payment types
  - Verify checkboxes work correctly
  - Verify selected types are saved

- [ ] **Announcements**
  - Add announcement with text
  - Add multiple announcements
  - Remove an announcement
  - Verify announcements are saved
  - Verify announcements display on stylist page

#### Stylist Login Tests
- [ ] **Valid Login**
  - Enter correct email and password
  - Verify login success
  - Verify redirect to stylist profile

- [ ] **Invalid Credentials**
  - Test with wrong password
  - Test with non-existent email
  - Verify appropriate error messages

---

### 3. Stylist Profile & Display

#### Stylist Card Tests
- [ ] **Stylist Card Display**
  - Verify all stylist cards show name, rate, address
  - Verify profile picture displays correctly
  - Verify "Book Appointment" button appears for logged-in users
  - Verify "Register / Login to Book" button appears for non-logged-in users

- [ ] **Stylist Card Click**
  - Click on stylist card
  - Verify stylist detail page opens
  - Verify all information displays correctly

- [ ] **Stylist Detail Page**
  - Verify all sections display: About, Services, Portfolio, Reviews, etc.
  - Verify announcements section appears if stylist has announcements
  - Verify contact information displays correctly
  - Verify business hours display correctly

- [ ] **Portfolio Gallery**
  - Verify portfolio images display in gallery
  - Click on portfolio image
  - Verify image opens in modal/lightbox (if implemented)
  - Verify navigation between images works

- [ ] **Services Display**
  - Verify services show name, duration, and price
  - Verify price formatting (e.g., "$100" not "100")
  - Verify duration formatting (e.g., "45 minutes" not "45")

---

### 4. Booking/Appointment Flow

#### Booking Tests (Logged-in Users)
- [ ] **Book Appointment**
  - Click "Book Appointment" on stylist card
  - Fill in appointment form (purpose, date, time)
  - Select services (if applicable)
  - Submit booking
  - Verify booking confirmation page appears
  - Verify success message

- [ ] **Booking Confirmation Page**
  - Verify confirmation message displays
  - Click "Check the status of your booking here"
  - Verify redirects to user profile
  - Verify page scrolls to appointments section
  - Verify appointment appears in list

- [ ] **Invalid Date/Time**
  - Try to book with past date
  - Try to book with invalid date format
  - Try to book with invalid time format
  - Verify error messages appear

- [ ] **Required Fields**
  - Try to submit booking without purpose
  - Try to submit booking without date
  - Try to submit booking without time
  - Verify error messages appear

#### Booking Tests (Non-logged-in Users)
- [ ] **Register/Login to Book Button**
  - Click "Register / Login to Book" button
  - Verify redirects to register/login page
  - Verify page shows both registration and login options

- [ ] **Register/Login Page**
  - Click "New User?" card
  - Verify redirects to registration form
  - Click "Already have an account?" card
  - Verify redirects to login form

---

### 5. User Profile

#### User Profile Display
- [ ] **Profile Information**
  - Verify name, email, phone, address display correctly
  - Verify hair style preferences display correctly
  - Verify recently viewed stylists section appears (if applicable)

- [ ] **Appointments Section**
  - Verify appointments list displays
  - Verify appointment status shows correctly (pending, confirmed, cancelled)
  - Verify appointment details are correct
  - Verify "No appointments" message shows when list is empty

- [ ] **Favorite/Liked Stylists**
  - Verify liked stylists section appears
  - Click on liked stylist
  - Verify redirects to stylist detail page

#### User Profile Editing
- [ ] **Edit Profile**
  - Click "Edit Profile" button
  - Verify form pre-fills with current data
  - Modify name, phone, address, preferences
  - Save changes
  - Verify success message
  - Verify updated information displays

- [ ] **Cancel Edit**
  - Click "Edit Profile"
  - Make changes
  - Click "Cancel"
  - Verify changes are discarded
  - Verify original data still displays

---

### 6. Stylist Profile Editing

#### Stylist Profile Editing
- [ ] **Edit Profile**
  - Click "Edit Profile" button
  - Verify form pre-fills with current data
  - Verify business hours are pre-filled correctly
  - Verify selected days are checked
  - Verify announcements are pre-filled

- [ ] **Update Business Hours**
  - Modify business hours
  - Change selected days
  - Save changes
  - Verify hours update correctly on stylist page

- [ ] **Update Services**
  - Add new service
  - Edit existing service
  - Remove service
  - Save changes
  - Verify services update correctly

- [ ] **Update Portfolio**
  - Add new portfolio image
  - Remove portfolio image
  - Save changes
  - Verify portfolio updates correctly

- [ ] **Update Announcements**
  - Add new announcement
  - Edit existing announcement
  - Remove announcement
  - Save changes
  - Verify announcements update correctly

- [ ] **Update Profile Picture**
  - Upload new profile picture
  - Verify preview appears
  - Save changes
  - Verify new picture displays on profile

---

### 7. Data Formatting

#### Formatting Tests
- [ ] **Years of Experience**
  - Verify displays as "5 years" not "5"
  - Verify months convert to years correctly (e.g., "12 months" → "1 year")

- [ ] **Rate Display**
  - Verify displays as "$75/hr" not "75"
  - Verify currency symbol appears

- [ ] **Service Duration**
  - Verify displays as "45 minutes" not "45"
  - Verify "min" suffix appears

- [ ] **Service Price**
  - Verify displays as "$100" not "100"
  - Verify currency symbol appears

- [ ] **Phone Number**
  - Verify phone numbers are formatted (e.g., "(555) 123-4567")
  - Verify formatting is consistent

---

### 8. Mission Statement & First-Time User

#### Mission Statement Popup
- [ ] **First-Time User**
  - Open app for first time
  - Verify mission statement popup appears
  - Verify email input field appears
  - Enter email and click "Join"
  - Verify popup closes
  - Refresh page
  - Verify popup does NOT appear again

- [ ] **Close Popup**
  - Click close button on popup
  - Verify popup closes
  - Verify popup does not appear again on refresh

- [ ] **Mission Statement Page**
  - Click "Our Mission" button in header
  - Verify mission statement page opens
  - Verify "Our Story" section appears
  - Verify email form appears
  - Submit email
  - Verify success message (if implemented)

---

### 9. Navigation & UI/UX

#### Navigation Tests
- [ ] **Header Navigation**
  - Click "Home" button
  - Verify redirects to home page
  - Click "Our Mission" button
  - Verify redirects to mission statement page

- [ ] **Back Navigation**
  - Navigate to stylist detail page
  - Click browser back button
  - Verify returns to previous page
  - Verify state is preserved

- [ ] **Responsive Design**
  - Test on mobile viewport (< 768px)
  - Test on tablet viewport (768px - 1024px)
  - Test on desktop viewport (> 1024px)
  - Verify layout adapts correctly
  - Verify all buttons are clickable
  - Verify text is readable

- [ ] **Loading States**
  - Verify loading indicators appear during API calls
  - Verify buttons show loading state when submitting
  - Verify forms cannot be submitted multiple times

---

### 10. Error Handling

#### Error Display Tests
- [ ] **Network Errors**
  - Disconnect internet
  - Try to submit form
  - Verify error message appears
  - Verify message is user-friendly

- [ ] **Server Errors**
  - Simulate 500 error (if possible)
  - Verify error message appears
  - Verify message doesn't expose sensitive information

- [ ] **Validation Errors**
  - Submit invalid data
  - Verify validation errors appear inline
  - Verify errors are clear and actionable

- [ ] **404 Errors**
  - Navigate to non-existent stylist ID
  - Verify appropriate error message
  - Verify redirect or error page

---

### 11. Search & Filter (if implemented)

#### Search Tests
- [ ] **Search Functionality**
  - Enter search term
  - Verify results filter correctly
  - Verify "No results" message appears when no matches
  - Clear search
  - Verify all results return

- [ ] **Filter Tests**
  - Apply filters (if implemented)
  - Verify results update
  - Clear filters
  - Verify all results return

---

### 12. Edge Cases

#### Edge Case Tests
- [ ] **Very Long Text**
  - Enter very long name (but within limits)
  - Enter very long address
  - Verify text displays correctly
  - Verify no layout breaks

- [ ] **Special Characters**
  - Enter name with apostrophes (e.g., "O'Brien")
  - Enter name with hyphens (e.g., "Mary-Jane")
  - Verify special characters are handled correctly

- [ ] **Empty States**
  - View stylist with no portfolio images
  - View stylist with no services
  - View user with no appointments
  - Verify appropriate empty state messages

- [ ] **Rapid Clicks**
  - Rapidly click submit button
  - Verify form only submits once
  - Verify no duplicate entries created

- [ ] **Browser Refresh**
  - Fill form partially
  - Refresh browser
  - Verify form data is lost (expected behavior)
  - Verify user remains logged in (if applicable)

---

### 13. Accessibility Tests

#### Accessibility
- [ ] **Keyboard Navigation**
  - Navigate entire app using only keyboard
  - Verify all interactive elements are focusable
  - Verify focus indicators are visible
  - Verify tab order is logical

- [ ] **Screen Reader**
  - Test with screen reader (if available)
  - Verify all images have alt text
  - Verify form labels are associated correctly
  - Verify error messages are announced

- [ ] **Color Contrast**
  - Verify text has sufficient contrast
  - Verify buttons are clearly visible
  - Verify error messages are visible

---

### 14. Performance Tests

#### Performance
- [ ] **Page Load Time**
  - Measure initial page load time
  - Verify page loads within acceptable time (< 3 seconds)
  - Verify images load progressively

- [ ] **Large Data Sets**
  - Test with many stylists (50+)
  - Verify page remains responsive
  - Verify scrolling is smooth

- [ ] **Image Optimization**
  - Verify images are optimized
  - Verify large images don't slow down page
  - Verify lazy loading works (if implemented)

---

### 15. Integration Tests

#### End-to-End Flows
- [ ] **Complete User Journey**
  1. Register as new user
  2. Browse stylists
  3. View stylist detail
  4. Book appointment
  5. View appointment in profile
  6. Edit profile
  7. Logout

- [ ] **Complete Stylist Journey**
  1. Register as new stylist
  2. Upload profile picture and portfolio
  3. Add services and announcements
  4. View own profile
  5. Edit profile
  6. Logout

- [ ] **Booking Flow**
  1. User logs in
  2. Views stylist
  3. Books appointment
  4. Sees confirmation
  5. Checks appointment status
  6. Stylist accepts/rejects (if implemented)

---

## 🐛 Common Issues to Test

- [ ] Form data persists after errors
- [ ] Error messages clear when user starts typing
- [ ] Success messages disappear after appropriate time
- [ ] Modals can be closed with ESC key
- [ ] Forms reset after successful submission
- [ ] Images display correctly after upload
- [ ] Dates display in correct timezone
- [ ] Phone numbers format consistently
- [ ] Currency displays with correct symbol
- [ ] No console errors in browser

---

## 📝 Test Checklist Summary

### Critical Paths (Must Test Before Release)
1. ✅ User registration and login
2. ✅ Stylist registration and login
3. ✅ Booking appointment flow
4. ✅ Profile editing
5. ✅ Data formatting (rates, durations, prices)
6. ✅ Error handling and validation
7. ✅ File upload (profile picture, portfolio)

### Important Features (Should Test)
1. ✅ Mission statement popup
2. ✅ Announcements feature
3. ✅ Business hours editing
4. ✅ Services management
5. ✅ Responsive design

### Nice to Have (Can Test Later)
1. ✅ Accessibility features
2. ✅ Performance optimization
3. ✅ Edge cases
4. ✅ Advanced search/filter

---

## 🎯 Testing Tools Recommendations

- **Manual Testing**: Use browser DevTools for testing
- **Automated Testing**: Consider Jest + React Testing Library
- **E2E Testing**: Consider Cypress or Playwright
- **Accessibility**: Use axe DevTools or WAVE
- **Performance**: Use Lighthouse in Chrome DevTools
- **Cross-browser**: Test in Chrome, Firefox, Safari, Edge

---

## 📊 Test Results Template

For each test, document:
- **Test ID**: Unique identifier
- **Test Description**: What is being tested
- **Steps**: Step-by-step instructions
- **Expected Result**: What should happen
- **Actual Result**: What actually happened
- **Status**: Pass / Fail / Blocked
- **Notes**: Any additional observations

---

**Last Updated**: 2026-01-30
**Version**: 1.0
