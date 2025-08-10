// Room data - Extended with more rooms
const roomData = [
    {
        id: 1,
        pid: "M127G",
        title: "Modern Apartment in Sector 127",
        location: "Sector 127,Mohali",
        type: "1 BHK",
        gender: "for-all",
        price: "₹14,500",
        features: ["Fully Furnished", "Independent", "Owner Free"],
        description: "Beautiful 1BHK with modern amenities near shopping center.",
        media: [
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/1.M127G/A7.jpg?updatedAt=1754802913167" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/1.M127G/A6.jpg?updatedAt=1754683721878" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/1.M127G/A5.jpg?updatedAt=1754683721878" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/1.M127G/A4.jpg?updatedAt=1754683721878" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/1.M127G/A3.jpg?updatedAt=1754683721878" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/1.M127G/A2.jpg?updatedAt=1754683721878" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/1.M127G/A1.jpg?updatedAt=1754683721878" }
        ]
    },
    {
        id: 2,
        pid: "M114K921",
        title: "Room with Kitchen in Sector 114,Mohali",
        location: "Sector 114,Mohali",
        type: "Room with Kitchen",
        gender: "boys",
        price: "₹6,000",
        features: ["Semi-Furnished", "Independent"],
        description: "Spacious 2BHK with balcony and great ventilation.",
        media: [
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/2.M114K921/B1.jpg?updatedAt=1754802913145" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/2.M114K921/B2.jpg?updatedAt=1754802913145" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/2.M114K921/B3.jpg?updatedAt=1754802913145" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/2.M114K921/B4.jpg?updatedAt=1754802913145" }
        ]
    },
    {
        id: 3,
        pid: "C19CB814",
        title: "Spacious Room with Kitchen in Sector 19C,Chandigarh",
        location: "Sector 19C,Chandigarh",
        type: "Room with Kitchen",
        gender: "girls",
        price: "₹11,000",
        features: ["Fully Furnished", "AC" , "RO"],
        description: "Luxury studio apartment with premium amenities.",
        media: [
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/3.C19CB814/C1.jpg?updatedAt=1754802915880" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/3.C19CB814/C2.jpg?updatedAt=1754802915880" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/3.C19CB814/C3.jpg?updatedAt=1754802915880" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/3.C19CB814/C4.jpg?updatedAt=1754802915880" }
        ]
    },
    {
        id: 4,
        pid: "C23DJ2977",
        title: "1 BHK in Sector 23D, Chandigarh",
        location: "Sector 23D,Chandigarh",
        type: "1 BHK",
        gender: "for-all",
        price: "₹13,500",
        features: ["Fully Furnished", "Independent", "Owner Free"],
        description: "Perfect for families with children near schools and parks.",
        media: [
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/4.C23DJ2977/D1.jpg?updatedAt=1754802918027" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/4.C23DJ2977/D2.jpg?updatedAt=1754802918027" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/4.C23DJ2977/D3.jpg?updatedAt=1754802918027" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/4.C23DJ2977/D4.jpg?updatedAt=1754802918027" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/4.C23DJ2977/D5.jpg?updatedAt=1754802918027" },
            { type: "video", src: "https://ik.imagekit.io/minkal/assets/4.C23DJ2977/D6.mp4?updatedAt=1754802918027" }
           
        ]
    },
    {
        id: 5,
        pid: "M126Sk701",
        title: "1 BHK in Sector 126, Mohali",
        location: "Sector 126,Mohali",
        type: "1 BHK",
        gender: "for-all",
        price: "₹12,000",
        features: ["2nd Floor", "Newly built", "RO"],
        description: "Comfortable shared accommodation for working professionals.",
        media: [
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/5.M126Sk701/D1.jpg?updatedAt=1754802920966" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/5.M126Sk701/D2.jpg?updatedAt=1754802920966" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/5.M126Sk701/D3.jpg?updatedAt=1754802920966" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/5.M126Sk701/D4.jpg?updatedAt=1754802920966" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/5.M126Sk701/D5.jpg?updatedAt=1754802920966" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/5.M126Sk701/D6.jpg?updatedAt=1754802920966" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/5.M126Sk701/D7.jpg?updatedAt=1754802920966" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/5.M126Sk701/D8.jpg?updatedAt=1754802920966" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/5.M126Sk701/D9.jpg?updatedAt=1754802920966" },

        ]
    },
    {
        id: 6,
        pid: "M126Sk2701",
        title: "2 BHK in Sector 126, Mohali",
        location: "Sector 126,Mohali",
        type: "2 BHK",
        gender: "for-all",
        price: "₹18,000",
        features: ["Un furnished", "Balcony", "Newly built"],
        description: "Newly constructed premium 1BHK with modern fittings.",
        media: [
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/6.M126Sk2701/A1.jpg?updatedAt=1754802864012" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/6.M126Sk2701/A2.jpg?updatedAt=1754802864012" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/6.M126Sk2701/A3.jpg?updatedAt=1754802864012" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/6.M126Sk2701/A4.jpg?updatedAt=1754802864012" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/6.M126Sk2701/A5.jpg?updatedAt=1754802864012" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/6.M126Sk2701/A6.jpg?updatedAt=1754802864012" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/6.M126Sk2701/A7.jpg?updatedAt=1754802864012" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/6.M126Sk2701/A8.jpg?updatedAt=1754802864012" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/6.M126Sk2701/A9.jpg?updatedAt=1754802864012" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/6.M126Sk2701/A10.jpg?updatedAt=1754802864012" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/6.M126Sk2701/A11.jpg?updatedAt=1754802864012" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/6.M126Sk2701/A12.jpg?updatedAt=1754802864012" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/6.M126Sk2701/A13.jpg?updatedAt=1754802864012" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/6.M126Sk2701/A14.jpg?updatedAt=1754802864012" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/6.M126Sk2701/A15.jpg?updatedAt=1754802864012" },

        ]
    },
    {
        id: 7,
        pid: "C20AJ734",
        title: "PG in Sector 20A, Chandigarh",
        location: "Sector 20A,Chandigarh",
        type: "PG",
        gender: "girls",
        price: "₹5,500",
        features: ["Fully Furnished", "Without food", "refrigerator"],
        description: "Well-maintained PG with modern kitchen and bathrooms.",
        media: [
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/7.C20AJ734/B1.jpg?updatedAt=1754802870187" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/7.C20AJ734/B2.jpg?updatedAt=1754802870187" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/7.C20AJ734/B3.jpg?updatedAt=1754802870187" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/7.C20AJ734/B4.jpg?updatedAt=1754802870187" }
    
        ]
    },
    {
        id: 8,
        pid: "M70D998",
        title: "2 BHK in Sector 70, Mohali",
        location: "Sector 70,Mohali",
        type: "2 BHK",
        gender: "for-all",
        price: "₹21,000",
        features: ["Fully Furnished", "Independent"],
        description: "Beautiful 2BHK with modern amenities and great view.",
        media: [
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/8.M70D998/F1.jpeg?updatedAt=1754802870255" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/8.M70D998/F2.jpeg?updatedAt=1754802870255" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/8.M70D998/F3.jpeg?updatedAt=1754802870255" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/8.M70D998/F4.jpeg?updatedAt=1754802870255" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/8.M70D998/F5.jpeg?updatedAt=1754802870255" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/8.M70D998/F6.jpeg?updatedAt=1754802870255" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/8.M70D998/F7.jpeg?updatedAt=1754802870255" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/8.M70D998/F8.jpeg?updatedAt=1754802870255" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/8.M70D998/F9.jpeg?updatedAt=1754802870255" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/8.M70D998/F10.jpeg?updatedAt=1754802870255" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/8.M70D998/F11.jpeg?updatedAt=1754802870255" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/8.M70D998/F12.jpeg?updatedAt=1754802870255" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/8.M70D998/F13.jpeg?updatedAt=1754802870255" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/8.M70D998/F14.jpeg?updatedAt=1754802870255" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/8.M70D998/F15.jpeg?updatedAt=1754802870255" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/8.M70D998/F16.jpeg?updatedAt=1754802870255" }
        ]
    },
    {
        id: 9,
        pid: "M116K819",
        title: "2 BHK in Sector 116, Mohali",
        location: "Sector 116,Mohali",
        type: "2 BHK",
        gender: "family",
        price: "₹25,000",
        features: ["Fully Furnished", "Independent", "AC", "RO", "Fridge"],
        description: "Safe and comfortable 2BHK for family.",
        media: [
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/9.M116K819/G1.jpeg?updatedAt=1754802879311" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/9.M116K819/G2.jpeg?updatedAt=1754802879311" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/9.M116K819/G3.jpeg?updatedAt=1754802879311" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/9.M116K819/G4.jpeg?updatedAt=1754802879311" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/9.M116K819/G5.jpeg?updatedAt=1754802879311" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/9.M116K819/G6.jpeg?updatedAt=1754802879311" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/9.M116K819/G7.jpeg?updatedAt=1754802879311" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/9.M116K819/G8.jpeg?updatedAt=1754802879311" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/9.M116K819/G9.jpeg?updatedAt=1754802879311" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/9.M116K819/G10.jpeg?updatedAt=1754802879311" }
        ]
    },
    // Additional rooms for pagination
    {
        id: 10,
        pid: "M63G946",
        title: "1 BHK in Sector 63, Mohali",
        location: "Sector 63,Mohali",
        type: "1 BHK",
        gender: "for-all",
        price: "₹20,000",
        features: ["Independent", "Fully Furnished", "AC", "Fridge"],
        description: "Spacious and fully furnished 1BHK with all essential amenities.",
        media: [
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/10.M63G946/A1.jpeg?updatedAt=1754802884096" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/10.M63G946/A2.jpeg?updatedAt=1754802884096" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/10.M63G946/A3.jpeg?updatedAt=1754802884096" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/10.M63G946/A4.jpeg?updatedAt=1754802884096" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/10.M63G946/A5.jpeg?updatedAt=1754802884096" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/10.M63G946/A6.jpeg?updatedAt=1754802884096" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/10.M63G946/A7.jpeg?updatedAt=1754802884096" }
        ]
    },
    {
        id: 11,
        pid: "M114-956",
        title: "2 BHK in Sector 114, Mohali",
        location: "Sector 114,Mohali",
        type: "2 BHK",
        gender: "family",
        price: "₹16,000",
        features: ["Semi-Furnished", "Independent"],
        description: "Comfortable 2BHK ideal for families, located in a peaceful area.",
        media: [
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/11.M114-956/Z1.jpeg?updatedAt=1754802887932" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/11.M114-956/Z2.jpeg?updatedAt=1754802887932" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/11.M114-956/Z3.jpeg?updatedAt=1754802887932" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/11.M114-956/Z4.jpeg?updatedAt=1754802887932" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/11.M114-956/Z5.jpeg?updatedAt=1754802887932" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/11.M114-956/Z6.jpeg?updatedAt=1754802887932" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/11.M114-956/Z7.jpeg?updatedAt=1754802887932" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/11.M114-956/Z8.jpeg?updatedAt=1754802887932" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/11.M114-956/Z9.jpeg?updatedAt=1754802887932" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/11.M114-956/Z10.jpeg?updatedAt=1754802887932" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/11.M114-956/Z11.jpeg?updatedAt=1754802887932" }
        ]
    },
    {
        id: 12,
        pid: "M67S869",
        title: "1 BHK in Sector 67, Mohali",
        location: "Sector 67,Mohali",
        type: "1 BHK",
        gender: "girls",
        price: "₹15,000",
        features: ["Fully Furnished", "Washing Machine", "AC", "Fridge"],
        description: "Premium 1BHK for girls with modern facilities and appliances.",
        media: [
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/12.M67S869/A1.jpeg?updatedAt=1754802898192" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/12.M67S869/A2.jpeg?updatedAt=1754802898192" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/12.M67S869/A3.jpeg?updatedAt=1754802898192" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/12.M67S869/A4.jpeg?updatedAt=1754802898192" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/12.M67S869/A5.jpeg?updatedAt=1754802898192" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/12.M67S869/A6.jpeg?updatedAt=1754802898192" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/12.M67S869/A7.jpeg?updatedAt=1754802898192" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/12.M67S869/A8.jpeg?updatedAt=1754802898192" }
        ]
    },
    {
        id: 13,
        pid: "M68K987",
        title: "3 BHK in Sector 68, Mohali",
        location: "Sector 68,Mohali",
        type: "3 BHK",
        gender: "for-all",
        price: "₹27,000",
        features: ["Semi-Furnished", "Independent"],
        description: "Spacious 3BHK suitable for all, with semi-furnished setup.",
        media: [
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/13.M68K987/T1.jpeg?updatedAt=1754802897807" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/13.M68K987/T2.jpeg?updatedAt=1754802897807" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/13.M68K987/T3.jpeg?updatedAt=1754802897807" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/13.M68K987/T4.jpeg?updatedAt=1754802897807" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/13.M68K987/T5.jpeg?updatedAt=1754802897807" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/13.M68K987/T6.jpeg?updatedAt=1754802897807" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/13.M68K987/T7.jpeg?updatedAt=1754802897807" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/13.M68K987/T8.jpeg?updatedAt=1754802897807" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/13.M68K987/T9.jpeg?updatedAt=1754802897807" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/13.M68K987/T10.jpeg?updatedAt=1754802897807" }
        ]
    },
    {
        id: 14,
        pid: "M89N946",
        title: "3 BHK in Sector 89, Mohali",
        location: "Sector 89,Mohali",
        type: "3 BHK",
        gender: "family",
        price: "₹22,000",
        features: ["Unfurnished"],
        description: "Large unfurnished 3BHK perfect for families and girls.",
        media: [
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/14.M89N946/B1.jpeg?updatedAt=1754802904577" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/14.M89N946/B2.jpeg?updatedAt=1754802904577" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/14.M89N946/B3.jpeg?updatedAt=1754802904577" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/14.M89N946/B4.jpeg?updatedAt=1754802904577" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/14.M89N946/B5.jpeg?updatedAt=1754802904577" }
        ]
    },
    {
        id: 15,
        pid: "M88M814",
        title: "1 RK in Sector 88, Mohali",
        location: "Sector 88,Mohali",
        type: "1 RK",
        gender: "girls",
        price: "₹12,000",
        features: ["Independent", "Owner Free", "Fully Furnished", "AC"],
        description: "Fully furnished 1RK for girls with independence and comfort.",
        media: [
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/15.M88M814/P1.jpeg?updatedAt=1754802907325" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/15.M88M814/P2.jpeg?updatedAt=1754802907325" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/15.M88M814/P3.jpeg?updatedAt=1754802907325" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/15.M88M814/P4.jpeg?updatedAt=1754802907325" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/15.M88M814/P5.jpeg?updatedAt=1754802907325" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/15.M88M814/P6.jpeg?updatedAt=1754802907325" },
            { type: "image", src: "https://ik.imagekit.io/minkal/assets/15.M88M814/P7.jpeg?updatedAt=1754802907325" }
        ]
    },
    
];

// Pagination variables
let currentlyDisplayed = 0;
const roomsPerPage = 12;
let filteredRooms = [...roomData];

// Mobile menu functionality
document.getElementById('mobileMenuBtn').addEventListener('click', function() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
});

// Function to generate cards with pagination
function generateCards(rooms, append = false) {
    const container = document.getElementById('cardsContainer');

    if (!append) {
        container.innerHTML = '';
        currentlyDisplayed = 0;
    }

    if (rooms.length === 0) {
        container.innerHTML = '<div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 50px; color: white; font-size: 1.5rem; background: rgba(0,0,0,0.2); border-radius: 15px; margin-top: 20px;">No rooms found matching your criteria</div>';
        updatePaginationUI(0, 0);
        return;
    }

    const startIndex = append ? currentlyDisplayed : 0;
    const endIndex = Math.min(startIndex + roomsPerPage, rooms.length);
    const roomsToShow = rooms.slice(startIndex, endIndex);

    roomsToShow.forEach(room => {
        const cardEl = document.createElement('div');
        cardEl.className = 'card';
        cardEl.dataset.location = room.location.toLowerCase().replace(' ', '-');
        cardEl.dataset.type = room.type.toLowerCase().replace(' ', '-');
        cardEl.dataset.gender = room.gender;

        // Generate slider HTML
        let sliderHTML = '';
        room.media.forEach((mediaItem, index) => {
            if (mediaItem.type === 'image') {
                sliderHTML += `<img src="${mediaItem.src}" alt="${room.title}">`;
            } else if (mediaItem.type === 'video') {
                // Removed 'loop' attribute here
                sliderHTML += `<video src="${mediaItem.src}" controls muted playsinline></video>`;
            }
        });

        // Generate dots for slider navigation
        let dotsHTML = '';
        for (let i = 0; i < room.media.length; i++) {
            dotsHTML += `<div class="slider-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></div>`;
        }

        // Generate features HTML
        let featuresHTML = '';
        room.features.forEach(feature => {
            featuresHTML += `<div class="feature"><i class="fas fa-check-circle"></i> ${feature}</div>`;
        });

        // Function to get gender display text
        function getGenderDisplayText(gender) {
            switch(gender) {
                case 'girls': return 'For Girls';
                case 'boys': return 'For Boys';
                case 'family': return 'For Family';
                case 'for-all': return 'FOR ALL';
                default: return 'For All';
            }
        }

        cardEl.innerHTML = `
            <div class="slider-container">
                <div class="slider">${sliderHTML}</div>
                <button class="prev-btn"><i class="fas fa-chevron-left"></i></button>
                <button class="next-btn"><i class="fas fa-chevron-right"></i></button>
                <div class="slider-controls">${dotsHTML}</div>
            </div>
            <div class="card-content">
                <div class="card-header">
                    <div>
                        <div class="room-header">
                            <h2>${room.title}</h2>
                            <span class="room-id">PID: ${room.pid || 'N/A'}</span>
                        </div>
                        <div class="location">
                            <i class="fas fa-map-marker-alt"></i> ${room.location}
                        </div>
                        <div class="room-type">
                            <i class="fas fa-home"></i> ${room.type}
                        </div>
                    </div>
                    <div class="gender-tag">${getGenderDisplayText(room.gender)}</div>
                </div>
                <div class="features">
                    ${featuresHTML}
                </div>
                <div class="card-footer">
                    <div class="price">${room.price} <span>/Rent per month</span></div>
                    <button class="contact-btn">Contact</button>
                </div>
            </div>
        `;

        container.appendChild(cardEl);

        // Find the contact button within the newly created card element
        const contactBtn = cardEl.querySelector('.contact-btn');
        contactBtn.addEventListener('click', () => {
            const phoneNumber = '+917830063882'; // Your WhatsApp number
            const message = `Hello Sir/Mam,\nI found your property with PID: ${room.pid} on the RentMyProperty platform,\nand I am interested in visiting it.\nPlease let me know the suitable time.\nThank you!`;
            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
            window.open(whatsappUrl, '_blank');
        });

        // Initialize slider for this card
        initSlider(cardEl.querySelector('.slider-container'));
    });

    currentlyDisplayed = endIndex;
    updatePaginationUI(currentlyDisplayed, rooms.length);
}

// Update pagination UI
function updatePaginationUI(displayed, total) {
    const moreBtn = document.getElementById('moreRoomsBtn');
    const currentCount = document.getElementById('currentCount');
    const totalCount = document.getElementById('totalCount');

    currentCount.textContent = displayed;
    totalCount.textContent = total;

    if (displayed >= total) {
        moreBtn.style.display = 'none';
    } else {
        moreBtn.style.display = 'inline-flex';
    }
}

// Initialize slider functionality
function initSlider(sliderContainer) {
    const slider = sliderContainer.querySelector('.slider');
    const mediaElements = slider.querySelectorAll('img, video'); // Select both img and video
    const prevBtn = sliderContainer.querySelector('.prev-btn');
    const nextBtn = sliderContainer.querySelector('.next-btn');
    const dots = sliderContainer.querySelectorAll('.slider-dot');

    let currentIndex = 0;
    const totalMedia = mediaElements.length;
    let autoSlideInterval;
    const SLIDE_INTERVAL = 3000; // 3 seconds between slides for images

    let currentVideoElement = null; // To keep track of the currently playing video

    // Function to handle video ended event
    function handleVideoEnded() {
        if (currentVideoElement) {
            currentVideoElement.removeEventListener('ended', handleVideoEnded);
            currentVideoElement = null;
        }
        goToNextSlide(); // Move to the next slide
    }

    // Function to show slide
    function showSlide(index) {
        // Pause any currently playing video and remove its ended listener
        mediaElements.forEach(el => {
            el.classList.remove('active');
            if (el.tagName === 'VIDEO') {
                el.pause();
                // Always remove the ended listener from any video that was previously active
                el.removeEventListener('ended', handleVideoEnded);
            }
        });
        dots.forEach(dot => dot.classList.remove('active'));

        mediaElements[index].classList.add('active');
        dots[index].classList.add('active');
        slider.style.transform = `translateX(-${index * 100}%)`;

        currentIndex = index; // Update currentIndex

        // Manage auto-slide and video playback based on the new active element
        if (mediaElements[index].tagName === 'VIDEO') {
            mediaElements[index].play();
            stopAutoSlide(); // Stop image auto-slide
            currentVideoElement = mediaElements[index];
            currentVideoElement.addEventListener('ended', handleVideoEnded); // Add ended listener for the current video
        } else { // This means it's an image
            startAutoSlide(); // Start image auto-slide
        }
    }

    // Set initial active state
    if (totalMedia > 0) {
        showSlide(currentIndex);
    }

    // Function to go to next slide
    function goToNextSlide() {
        let nextIndex = (currentIndex + 1) % totalMedia;
        showSlide(nextIndex);
    }

    // Function to start auto sliding
    function startAutoSlide() {
        stopAutoSlide(); // Clear any existing interval
        // Only start auto-slide if the current element is an image and there's more than one media item
        if (totalMedia > 1 && mediaElements[currentIndex] && mediaElements[currentIndex].tagName === 'IMG') {
            autoSlideInterval = setInterval(goToNextSlide, SLIDE_INTERVAL);
        }
    }

    // Function to stop auto sliding
    function stopAutoSlide() {
        if (autoSlideInterval) {
            clearInterval(autoSlideInterval);
            autoSlideInterval = null;
        }
    }

    // Next slide (manual navigation)
    nextBtn.addEventListener('click', () => {
        goToNextSlide();
        // showSlide will handle starting/stopping auto-slide based on media type
    });

    // Previous slide (manual navigation)
    prevBtn.addEventListener('click', () => {
        let prevIndex = (currentIndex - 1 + totalMedia) % totalMedia;
        showSlide(prevIndex);
        // showSlide will handle starting/stopping auto-slide based on media type
    });

    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            // showSlide will handle starting/stopping auto-slide based on media type
        });
    });

    // Pause auto slide on hover
    sliderContainer.addEventListener('mouseenter', stopAutoSlide);
    sliderContainer.addEventListener('mouseleave', () => {
        // Only restart auto-slide on mouse leave if the current slide is an image
        if (mediaElements[currentIndex] && mediaElements[currentIndex].tagName === 'IMG') {
            startAutoSlide();
        }
    });
}

// Filter functionality - UPDATED with new logic for FOR ALL option
function filterRooms() {
    const location = document.getElementById('location').value;
    const type = document.getElementById('bhk').value;
    const gender = document.getElementById('gender').value;
    const price = document.getElementById('price').value;

    filteredRooms = roomData.filter(room => {
        // Location filter
        if (location !== 'all' &&
            !room.location.toLowerCase().includes(location.replace('-', ' '))) {
            return false;
        }

        // Type filter - FIXED: Now uses exact matching
        if (type !== 'all' && room.type !== type) {
            return false;
        }

        // Gender filter - UPDATED: New logic for FOR ALL functionality
        if (gender !== 'all') {
            if (gender === 'for-all') {
                // If "FOR ALL" is selected, show only properties marked as "for-all"
                if (room.gender !== 'for-all') {
                    return false;
                }
            } else {
                // If a specific gender is selected (boys, girls, family), show both that gender AND "for-all" properties
                if (room.gender !== gender && room.gender !== 'for-all') {
                    return false;
                }
            }
        }

        // Price filter
        if (price !== 'all') {
            const roomPrice = parseInt(room.price.replace(/[^0-9]/g, ''));
            if (price === '<=10000' && roomPrice > 10000) return false;
            if (price === '<=20000' && roomPrice > 20000) return false;
            if (price === '<=30000' && roomPrice > 30000) return false;
            if (price === '>=30000' && roomPrice < 30000) return false;
        }

        return true;
    });

    generateCards(filteredRooms);
}

// Reset filters
function resetFilters() {
    document.getElementById('location').value = 'all';
    document.getElementById('bhk').value = 'all';
    document.getElementById('gender').value = 'all';
    document.getElementById('price').value = 'all';
    filteredRooms = [...roomData];
    generateCards(filteredRooms);
}

// Load more rooms
function loadMoreRooms() {
    generateCards(filteredRooms, true);
}

// Function to handle WhatsApp button click for general inquiries
function openWhatsApp() {
    const phoneNumber = '+917830063882';
    const message = 'Hello RentMyProperty team,\n\nI came across your website and would like to get more information about your properties and services.\n\nCould you please provide me with more details?\n\nThank you!';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    generateCards(roomData);

    // Event listeners
    document.getElementById('applyFilters').addEventListener('click', filterRooms);
    document.getElementById('resetFilters').addEventListener('click', resetFilters);
    document.getElementById('moreRoomsBtn').addEventListener('click', loadMoreRooms);
});
