// Mobile menu functionality
document.getElementById('mobileMenuBtn').addEventListener('click', function() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
});

// Function to handle WhatsApp button click for general inquiries
function openWhatsApp() {
    const phoneNumber = '+917830063882';
    const message = 'Hello RentMyProperty team,\n\nI came across your website and would like to get more information about your properties and services.\n\nCould you please provide me with more details?\n\nThank you!';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

// Form submission handler
document.getElementById('tenantInformationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Collect form data
    const formData = new FormData(this);
    
    // Basic required field validation
    const fullName = formData.get('fullName');
    const age = formData.get('age');
    const phoneNumber = formData.get('phoneNumber');
    const email = formData.get('email');
    const occupation = formData.get('occupation');
    const nativePlace = formData.get('nativePlace');
    const occupancyType = formData.get('occupancyType');
    const propertyType = formData.get('propertyType');
    const budget = formData.get('budget');
    const moveInTime = formData.get('moveInTime');
    
    if (!fullName || !age || !phoneNumber || !email || !occupation || !nativePlace || 
        !occupancyType || !propertyType || !budget || !moveInTime) {
        alert('Please fill all required fields marked with *');
        return;
    }
    
    // Validate age
    if (age < 18 || age > 100) {
        alert('Please enter a valid age between 18 and 100');
        return;
    }
    
    // Validate phone number
    if (!/^[0-9]{10}$/.test(phoneNumber)) {
        alert('Please enter a valid 10-digit phone number');
        return;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Check if at least one preferred location is selected
    const preferredLocations = [];
    const locationCheckboxes = document.querySelectorAll('input[name="preferredLocation"]:checked');
    locationCheckboxes.forEach(checkbox => {
        preferredLocations.push(checkbox.value);
    });
    
    if (preferredLocations.length === 0) {
        alert('Please select at least one preferred location');
        return;
    }
    
    // Collect checkbox values
    const furnishing = [];
    const amenities = [];
    
    // Get furnishing preferences
    const furnishingCheckboxes = document.querySelectorAll('input[name="furnishing"]:checked');
    furnishingCheckboxes.forEach(checkbox => {
        furnishing.push(checkbox.value);
    });
    
    // Get amenities
    const amenitiesCheckboxes = document.querySelectorAll('input[name="amenities"]:checked');
    amenitiesCheckboxes.forEach(checkbox => {
        amenities.push(checkbox.value);
    });
    
    // Create WhatsApp message
    let message = `🏠 *TENANT INFORMATION FORM*\n\n`;
    message += `👤 *PERSONAL INFORMATION:*\n`;
    message += `Name: ${fullName}\n`;
    message += `Age: ${age} years\n`;
    message += `Phone: ${phoneNumber}\n`;
    message += `Email: ${email}\n`;
    message += `Occupation: ${occupation}\n`;
    message += `Native Place: ${nativePlace}\n`;
    
    const currentAddress = formData.get('currentAddress');
    if (currentAddress && currentAddress.trim()) {
        message += `Current Address: ${currentAddress.trim()}\n`;
    }
    
    message += `\n🏘️ *PROPERTY PREFERENCES:*\n`;
    message += `Preferred Locations: ${preferredLocations.join(', ')}\n`;
    
    const specificAreas = formData.get('specificAreas');
    if (specificAreas && specificAreas.trim()) {
        message += `Specific Areas: ${specificAreas.trim()}\n`;
    }
    
    message += `Occupancy Type: ${occupancyType}\n`;
    message += `Property Type: ${propertyType}\n`;
    message += `Budget: ₹${budget}/month\n`;
    
    const budgetFlexibility = formData.get('budgetFlexibility');
    if (budgetFlexibility) {
        message += `Budget Flexibility: ${budgetFlexibility}\n`;
    }
    
    message += `Move-in Timeline: ${moveInTime}\n`;
    
    const stayDuration = formData.get('stayDuration');
    if (stayDuration) {
        message += `Expected Stay Duration: ${stayDuration}\n`;
    }
    
    if (furnishing.length > 0) {
        message += `\n🛋️ *FURNISHING PREFERENCE:*\n`;
        furnishing.forEach(item => {
            message += `• ${item}\n`;
        });
    }
    
    if (amenities.length > 0) {
        message += `\n⭐ *ESSENTIAL AMENITIES:*\n`;
        amenities.forEach(amenity => {
            message += `• ${amenity}\n`;
        });
    }
    
    // Family/Roommate Information
    const familySize = formData.get('familySize');
    const pets = formData.get('pets');
    if (familySize || pets) {
        message += `\n👥 *FAMILY/ROOMMATE INFO:*\n`;
        if (familySize) {
            message += `Number of People: ${familySize}\n`;
        }
        if (pets) {
            message += `Pets: ${pets}\n`;
            const petDetails = formData.get('petDetails');
            if (pets === 'Yes' && petDetails && petDetails.trim()) {
                message += `Pet Details: ${petDetails.trim()}\n`;
            }
        }
    }
    
    // Employment Information
    const companyName = formData.get('companyName');
    const monthlyIncome = formData.get('monthlyIncome');
    const employmentType = formData.get('employmentType');
    if (companyName || monthlyIncome || employmentType) {
        message += `\n💼 *EMPLOYMENT INFO:*\n`;
        if (companyName && companyName.trim()) {
            message += `Company: ${companyName.trim()}\n`;
        }
        if (monthlyIncome) {
            message += `Monthly Income: ₹${monthlyIncome}\n`;
        }
        if (employmentType) {
            message += `Employment Type: ${employmentType}\n`;
        }
    }
    
    // Additional Information
    const specialRequirements = formData.get('specialRequirements');
    if (specialRequirements && specialRequirements.trim()) {
        message += `\n📝 *SPECIAL REQUIREMENTS:*\n`;
        message += `${specialRequirements.trim()}\n`;
    }
    
    const previousRental = formData.get('previousRental');
    if (previousRental && previousRental.trim()) {
        message += `\n🏠 *PREVIOUS RENTAL EXPERIENCE:*\n`;
        message += `${previousRental.trim()}\n`;
    }
    
    const referralSource = formData.get('referralSource');
    if (referralSource) {
        message += `\n📢 *HOW DID YOU HEAR ABOUT US:*\n`;
        message += `${referralSource}\n`;
    }
    
    message += `\n*Thank you for providing this detailed information. We will help you find the perfect property that matches your requirements!*`;
    
    // Encode message and redirect to WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = '+917830063882';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    alert('Form submitted successfully! You will be redirected to WhatsApp to send your information.');
    
    // Optional: Reset form after submission
    // this.reset();
});

// Form validation helpers
document.getElementById('phoneNumber').addEventListener('input', function(e) {
    // Remove non-numeric characters
    this.value = this.value.replace(/[^0-9]/g, '');
    
    // Limit to 10 digits
    if (this.value.length > 10) {
        this.value = this.value.slice(0, 10);
    }
});

document.getElementById('age').addEventListener('input', function(e) {
    // Ensure age is within valid range
    if (this.value && (parseInt(this.value) < 18 || parseInt(this.value) > 100)) {
        this.setCustomValidity('Age must be between 18 and 100');
    } else {
        this.setCustomValidity('');
    }
});

document.getElementById('budget').addEventListener('input', function(e) {
    // Ensure minimum budget
    if (this.value && parseInt(this.value) < 1000) {
        this.setCustomValidity('Minimum budget should be ₹1000');
    } else {
        this.setCustomValidity('');
    }
});

// Show/hide pet details based on pet selection
document.querySelectorAll('input[name="pets"]').forEach(radio => {
    radio.addEventListener('change', function() {
        const petDetailsField = document.getElementById('petDetails');
        const petDetailsGroup = petDetailsField.closest('.form-group');
        
        if (this.value === 'Yes') {
            petDetailsGroup.style.display = 'block';
            petDetailsField.setAttribute('placeholder', 'Please specify type and number of pets');
        } else {
            petDetailsGroup.style.display = 'none';
            petDetailsField.value = '';
        }
    });
});

// Add visual feedback for form sections
document.querySelectorAll('input, select, textarea').forEach(input => {
    input.addEventListener('focus', function() {
        this.closest('.form-section').classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
        this.closest('.form-section').classList.remove('focused');
    });
});

// Initialize pet details visibility on page load
document.addEventListener('DOMContentLoaded', function() {
    const petDetailsGroup = document.getElementById('petDetails').closest('.form-group');
    petDetailsGroup.style.display = 'none';
});