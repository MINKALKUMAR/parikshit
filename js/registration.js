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
document.getElementById('propertyRegistrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Collect form data
    const formData = new FormData(this);
    
    // Basic required field validation
    const ownerName = formData.get('ownerName');
    const phoneNumber = formData.get('phoneNumber');
    const propertyType = formData.get('propertyType');
    const location = formData.get('location');
    const detailedLocation = formData.get('detailedLocation');
    const monthlyRent = formData.get('monthlyRent');
    const negotiable = formData.get('negotiable');
    const allowedFor = formData.get('allowedFor');
    
    if (!ownerName || !phoneNumber || !propertyType || !location || !detailedLocation || !monthlyRent || !negotiable || !allowedFor) {
        alert('Please fill all required fields marked with *');
        return;
    }
    
    // Validate owner name
    if (ownerName.trim().length < 2) {
        alert('Please enter a valid full name');
        return;
    }
    
    // Validate phone number
    if (!/^[0-9]{10}$/.test(phoneNumber)) {
        alert('Please enter a valid 10-digit phone number');
        return;
    }
    
    // Collect checkbox values
    const roomDetails = [];
    const amenities = [];
    
    // Get room details
    const roomDetailsCheckboxes = document.querySelectorAll('input[name="roomDetails"]:checked');
    roomDetailsCheckboxes.forEach(checkbox => {
        roomDetails.push(checkbox.value);
    });
    
    // Get amenities
    const amenitiesCheckboxes = document.querySelectorAll('input[name="amenities"]:checked');
    amenitiesCheckboxes.forEach(checkbox => {
        amenities.push(checkbox.value);
    });
    
    // Create WhatsApp message
    let message = `🏠 *Property Registration Details*\n\n`;
    message += `📱 *Owner Details:*\n`;
    message += `Name: ${ownerName}\n`;
    message += `Phone: ${phoneNumber}\n`;
    if (formData.get('email')) {
        message += `Email: ${formData.get('email')}\n`;
    }
    message += `\n🏘️ *Property Details:*\n`;
    message += `Type: ${propertyType}\n`;
    message += `Location: ${location}\n`;
    message += `Detailed Location: ${detailedLocation}\n`;
    message += `Monthly Rent: ₹${monthlyRent}\n`;
    message += `Negotiable: ${negotiable}\n`;
    message += `Allowed for: ${allowedFor}\n`;
    
    if (roomDetails.length > 0) {
        message += `\n🛏️ *Room Details:*\n`;
        roomDetails.forEach(detail => {
            message += `• ${detail}\n`;
        });
    }
    
    if (amenities.length > 0) {
        message += `\n⭐ *Amenities:*\n`;
        amenities.forEach(amenity => {
            message += `• ${amenity}\n`;
        });
    }
    
    // Add additional information if provided
    const additionalInfo = formData.get('additionalInfo');
    if (additionalInfo && additionalInfo.trim()) {
        message += `\n📝 *Additional Information:*\n`;
        message += `${additionalInfo.trim()}\n`;
    }
    
    message += `\n*Thank you for registering your property with RentMyProperty! We'll contact you soon to help you find the right tenants.*`;
    
    // Encode message and redirect to WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = '+917830063882';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    alert('Form submitted successfully! You will be redirected to WhatsApp.');
    
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

document.getElementById('monthlyRent').addEventListener('input', function(e) {
    // Ensure minimum rent
    if (this.value && parseInt(this.value) < 1000) {
        this.setCustomValidity('Minimum rent should be ₹1000');
    } else {
        this.setCustomValidity('');
    }
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