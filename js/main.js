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
        title: "Room with Kitchen in Sector 88, Mohali",
        location: "Sector 88,Mohali",
        type: "Room with Kitchen",
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
    {
            id: 16,
            pid: "M126A859",
            title: "2 BHK in Sector 126, Mohali",
            location: "Sector 126,Mohali",
            type: "2 BHK",
            gender: "for-all",
            price: "₹14,000",
            features: ["Fully Furnished", "Independent"],
            description: "Spacious 2BHK apartment with modern amenities in Sector 126.",
            media: [
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/31.M126A859/P1.jpeg?updatedAt=1754852607925" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/31.M126A859/P2.jpeg?updatedAt=1754852607925" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/31.M126A859/P3.jpeg?updatedAt=1754852607925" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/31.M126A859/P4.jpeg?updatedAt=1754852607925" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/31.M126A859/P5.jpeg?updatedAt=1754852607925" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/31.M126A859/P6.jpeg?updatedAt=1754852607925" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/31.M126A859/P7.jpeg?updatedAt=1754852607925" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/31.M126A859/P8.jpeg?updatedAt=1754852607925" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/31.M126A859/P9.jpeg?updatedAt=1754852607925" },
            ]
        },
        {
            id: 17,
            pid: "C20AR959",
            title: "Room with Kitchen in Sector 20A, Chandigarh",
            location: "Sector 20A,Chandigarh",
            type: "Room with Kitchen",
            gender: "girls",
            price: "₹16,000",
            features: ["Fully Furnished", "Independent"],
            description: "Private 1RK unit designed for female occupants.",
            media: [
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/32.C20AR959/A1.jpeg?updatedAt=1754852662182" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/32.C20AR959/A2.jpeg?updatedAt=1754852662182" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/32.C20AR959/A3.jpeg?updatedAt=1754852662182" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/32.C20AR959/A4.jpeg?updatedAt=1754852662182" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/32.C20AR959/A5.jpeg?updatedAt=1754852662182" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/32.C20AR959/A6.jpeg?updatedAt=1754852662182" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/32.C20AR959/A7.jpeg?updatedAt=1754852662182" },
            ]
        },
        {
            id: 18,
            pid: "M82J956",
            title: "Room with Kitchen in Sector 82, Mohali",
            location: "Sector 82,Mohali",
            type: "Room with Kitchen",
            gender: "for-all",
            price: "₹5,000",
            features: ["Fully Furnished", "Independent"],
            description: "Compact 1RK suitable for all occupants.",
            media: [
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/33.M82J956/H1.jpeg?updatedAt=1754852669456" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/33.M82J956/H2.jpeg?updatedAt=1754852669456" },  
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/33.M82J956/H3.jpeg?updatedAt=1754852669456" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/33.M82J956/H4.jpeg?updatedAt=1754852669456" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/33.M82J956/H5.jpeg?updatedAt=1754852669456" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/33.M82J956/H6.jpeg?updatedAt=1754852669456" },
            ]
        },
        {
            id: 19,
            pid: "M60K911",
            title: "Room with Kitchen in Sector 60, Mohali",
            location: "Sector 60,Mohali",
            type: "Room with Kitchen",
            gender: "girls",
            price: "₹8,000",
            features: ["Fully Furnished", "Independent"],
            description: "Shared kitchen and washroom facility with family.",
            media: [
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/34.M60K911/A1.jpeg?updatedAt=1754852693364" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/34.M60K911/A2.jpeg?updatedAt=1754852693364" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/34.M60K911/A3.jpeg?updatedAt=1754852693364" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/34.M60K911/A4.jpeg?updatedAt=1754852693364" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/34.M60K911/A5.jpeg?updatedAt=1754852693364" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/34.M60K911/A6.jpeg?updatedAt=1754852693364" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/34.M60K911/A7.jpeg?updatedAt=1754852693364" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/34.M60K911/A8.jpeg?updatedAt=1754852693364" },
            ]
        },
        {
            id: 20,
            pid: "C33CH980",
            title: "Room in Sector 33C, Chandigarh",
            location: "Sector 33C,Chandigarh",
            type: "Room",
            gender: "for-all",
            price: "₹16,000",
            features: ["Fully Furnished", "Independent", "AC", "Fridge"],
            description: "Comfortable room with premium amenities.",
            media: [
                { type: "video", src: "https://ik.imagekit.io/minkal/assets/35.C33CH980/A1.mp4?updatedAt=1754852533891" },
            ]
        },
        {
            id: 21,
            pid: "C15DV798",
            title: "1 BHK in Sector 15D, Chandigarh",
            location: "Sector 15D,Chandigarh",
            type: "1 BHK",
            gender: "for-all",
            price: "₹13,000",
            features: ["Fully Furnished", "Independent", "AC", "RO", "Fridge"],
            description: "Well-equipped 1BHK unit in prime location.",
            media: [
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/36.C15DV798/A1.jpeg?updatedAt=1754852322909" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/36.C15DV798/A2.jpeg?updatedAt=1754852322909" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/36.C15DV798/A3.jpeg?updatedAt=1754852322909" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/36.C15DV798/A4.jpeg?updatedAt=1754852322909" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/36.C15DV798/A5.jpeg?updatedAt=1754852322909" },
            ]
        },
        {
            id: 22,
            pid: "M126W981",
            title: "2 BHK in Sector 126, Mohali",
            location: "Sector 126,Mohali",
            type: "2 BHK",
            gender: "for-all",
            price: "₹16,000",
            features: ["Fully Furnished", "Independent"],
            description: "Includes almirahs, fans, kitchen appliances and complete furnishings.",
            media: [
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/37.M126W981/A1.jpg?updatedAt=1754852323249" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/37.M126W981/A2.jpg?updatedAt=1754852323249" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/37.M126W981/A3.jpg?updatedAt=1754852323249" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/37.M126W981/A4.jpg?updatedAt=1754852323249" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/37.M126W981/A5.jpg?updatedAt=1754852323249" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/37.M126W981/A6.jpg?updatedAt=1754852323249" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/37.M126W981/A7.jpg?updatedAt=1754852323249" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/37.M126W981/A8.jpg?updatedAt=1754852323249" },
            ]
        },
        {
            id: 23,
            pid: "C16AC941",
            title: "1 BHK in Sector 16A, Chandigarh",
            location: "Sector 16A,Chandigarh",
            type: "1 BHK",
            gender: "for-all",
            price: "₹20,000",
            features: ["Fully Furnished", "Independent", "AC", "RO", "Fridge"],
            description: "Premium 1BHK with high-end appliances.",
            media: [
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/38.C16AC941/A1.jpeg?updatedAt=1754852338466" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/38.C16AC941/A2.jpeg?updatedAt=1754852338466" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/38.C16AC941/A3.jpeg?updatedAt=1754852338466" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/38.C16AC941/A4.jpeg?updatedAt=1754852338466" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/38.C16AC941/A5.jpeg?updatedAt=1754852338466" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/38.C16AC941/A6.jpeg?updatedAt=1754852338466" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/38.C16AC941/A7.jpeg?updatedAt=1754852338466" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/38.C16AC941/A8.jpeg?updatedAt=1754852338466" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/38.C16AC941/A9.jpeg?updatedAt=1754852338466" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/38.C16AC941/A10.jpeg?updatedAt=1754852338466" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/38.C16AC941/A11.jpeg?updatedAt=1754852338466" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/38.C16AC941/A12.jpeg?updatedAt=1754852338466" },
            ]
        },
        {
            id: 24,
            pid: "C27DS790",
            title: "1 BHK in Sector 27D, Chandigarh",
            location: "Sector 27D,Chandigarh",
            type: "1 BHK",
            gender: "boys",
            price: "₹7,000",
            features: ["Fully Furnished", "Independent"],
            description: "Shared accommodation for non-smoking/sober male occupants.",
            media: [
                {type :"image",src : "https://ik.imagekit.io/minkal/assets/39.C27DS790/A1.jpeg?updatedAt=1754852385539"},
                {type :"image",src : "https://ik.imagekit.io/minkal/assets/39.C27DS790/A2.jpeg?updatedAt=1754852385539"},
                {type :"image",src : "https://ik.imagekit.io/minkal/assets/39.C27DS790/A3.jpeg?updatedAt=1754852385539"},
            ]
        },
        {
            id: 25,
            pid: "C22CA991",
            title: "2 BHK in Sector 22C, Chandigarh",
            location: "Sector 22C,Chandigarh",
            type: "2 BHK",
            gender: "for-all",
            price: "₹26,000",
            features: ["Fully Furnished"],
            description: "Premium property near JW Marriott with gender-specific restrictions.",
            media: [
                {type :"image",src : "https://ik.imagekit.io/minkal/assets/40.C22CA991/A1.jpeg?updatedAt=1754852369085"},
                {type :"image",src : "https://ik.imagekit.io/minkal/assets/40.C22CA991/A2.jpeg?updatedAt=1754852369085"},
                {type :"image",src : "https://ik.imagekit.io/minkal/assets/40.C22CA991/A3.jpeg?updatedAt=1754852369085"},
                {type :"image",src : "https://ik.imagekit.io/minkal/assets/40.C22CA991/A4.jpeg?updatedAt=1754852369085"},
                {type :"image",src : "https://ik.imagekit.io/minkal/assets/40.C22CA991/A5.jpeg?updatedAt=1754852369085"},
            ]
        },
        {
            id: 26,
            pid: "M66L887",
            title: "1 BHK in Sector 66, Mohali",
            location: "Sector 66,Mohali",
            type: "1 BHK",
            gender: "for-all",
            price: "₹26,000",
            features: ["Fully Furnished", "Independent", "AC", "RO", "Fridge"],
            description: "Luxury 1BHK with premium amenities.",
            media: [
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/41.M66L887/A1.jpeg?updatedAt=1754852387929"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/41.M66L887/A2.jpeg?updatedAt=1754852387929"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/41.M66L887/A3.jpeg?updatedAt=1754852387929"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/41.M66L887/A4.jpeg?updatedAt=1754852387929"},
            ]
        },
        {
            id: 27,
            pid: "M59V902",
            title: "2 BHK in Sector 59, Mohali",
            location: "Sector 59,Mohali",
            type: "2 BHK",
            gender: "boys",
            price: "₹7,000",
            features: ["Fully Furnished", "Independent"],
            description: "Shared accommodation for male occupants.",
            media: [
                {type :"video",src : "https://ik.imagekit.io/minkal/assets/42.M59V902/A1.mp4?updatedAt=1754852552152"}
            ]
        },
        {
            id: 28,
            pid: "MP1A964",
            title: "2 BHK in Phase 1, Mohali",
            location: "Phase 1,Mohali",
            type: "2 BHK",
            gender: "for-all",
            price: "₹20,000",
            features: ["Fully Furnished", "Independent"],
            description: "Independent 2BHK in Phase 1 locality.",
            media: [
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/43.MP1A964/F1.jpeg?updatedAt=1754852391006"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/43.MP1A964/F2.jpeg?updatedAt=1754852391006"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/43.MP1A964/F3.jpeg?updatedAt=1754852391006"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/43.MP1A964/F4.jpeg?updatedAt=1754852391006"},
            ]
        },
        {
            id: 29,
            pid: "M62M981",
            title: "Room with Kitchen in Sector 62, Mohali",
            location: "Sector 62,Mohali",
            type: "Room with Kitchen",
            gender: "girls",
            price: "₹9,000",
            features: ["Fully Furnished", "Fridge", "Gas Stove"],
            description: "Compact unit with kitchen essentials.",
            media: [
                {type : "video",src : "https://ik.imagekit.io/minkal/assets/44.M62M981/A2.mp4?updatedAt=1754852511622"},
            ]
        },
        {
            id: 30,
            pid: "C41DS628",
            title: "Room with Kitchen in Sector 41D, Chandigarh",
            location: "Sector 41D,Chandigarh",
            type: "Room with Kitchen",
            gender: "boys",
            price: "₹8,000",
            features: ["Independent", "Fully Furnished", "AC", "Newly Built"],
            description: "New construction with modern amenities.",
            media: [
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/45.C41DS628/T1.jpeg?updatedAt=1754852409441"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/45.C41DS628/T2.jpeg?updatedAt=1754852409441"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/45.C41DS628/T3.jpeg?updatedAt=1754852409441"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/45.C41DS628/T4.jpeg?updatedAt=1754852409441"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/45.C41DS628/T5.jpeg?updatedAt=1754852409441"},
            ]
        },
        {
            id: 31,
            pid: "MBR836",
            title: "Room with Kitchen in Balongi, Mohali",
            location: "Balongi,Mohali",
            type: "Room with Kitchen",
            gender: "boys",
            price: "₹4,500",
            features: ["Independent", "Fully Furnished"],
            description: "Economical 1RK for male occupants.",
            media: [
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/46.MBR836/U1.jpeg?updatedAt=1754852414458"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/46.MBR836/U2.jpeg?updatedAt=1754852414458"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/46.MBR836/U3.jpeg?updatedAt=1754852414458"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/46.MBR836/U4.jpeg?updatedAt=1754852414458"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/46.MBR836/U5.jpeg?updatedAt=1754852414458"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/46.MBR836/U6.jpeg?updatedAt=1754852414458"},
            ]
        },
        {
            id: 32,
            pid: "M61A987",
            title: "2 BHK in Sector 61, Mohali",
            location: "Sector 61,Mohali",
            type: "2 BHK",
            gender: "for-all",
            price: "₹22,000",
            features: ["Independent", "Fully Furnished", "Fridge", "RO"],
            description: "Independent 2BHK unit with appliances.",
            media: [
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/47.M61A987/A1.jpeg?updatedAt=1754852509396"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/47.M61A987/A2.jpeg?updatedAt=1754852509396"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/47.M61A987/A3.jpeg?updatedAt=1754852509396"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/47.M61A987/A4.jpeg?updatedAt=1754852509396"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/47.M61A987/A5.jpeg?updatedAt=1754852509396"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/47.M61A987/A6.jpeg?updatedAt=1754852509396"},
            ]
        },
        {
            id: 33,
            pid: "M55K814",
            title: "Room with Kitchen in Sector 55, Mohali",
            location: "Sector 55,Mohali",
            type: "Room with Kitchen",
            gender: "girls",
            price: "₹5,000",
            features: ["Independent", "Fully Furnished"],
            description: "Shared accommodation for female occupants.",
            media: [
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/48.M55K814/A1%20(1).jpeg?updatedAt=1754852438668"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/48.M55K814/A1%20(2).jpeg?updatedAt=1754852438668"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/48.M55K814/A1%20(3).jpeg?updatedAt=1754852438668"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/48.M55K814/A1%20(4).jpeg?updatedAt=1754852438668"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/48.M55K814/A1%20(5).jpeg?updatedAt=1754852438668"},
            ]
        },
        {
            id: 34,
            pid: "MARJ798",
            title: "3 BHK in Airport Road, Mohali",
            location: "Airport Road,Mohali",
            type: "3 BHK",
            gender: "for-all",
            price: "₹29,000",
            features: ["Fully Furnished", "AC", "Fridge", "Independent"],
            description: "Spacious 3BHK near airport location.",
            media: [
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/49.MARJ798/A1%20(1).jpeg?updatedAt=1754852476479"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/49.MARJ798/A1%20(2).jpeg?updatedAt=1754852476479"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/49.MARJ798/A1%20(3).jpeg?updatedAt=1754852476479"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/49.MARJ798/A1%20(4).jpeg?updatedAt=1754852476479"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/49.MARJ798/A1%20(5).jpeg?updatedAt=1754852476479"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/49.MARJ798/A1%20(6).jpeg?updatedAt=1754852476479"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/49.MARJ798/A1%20(7).jpeg?updatedAt=1754852476479"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/49.MARJ798/A1%20(8).jpeg?updatedAt=1754852476479"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/49.MARJ798/A1%20(9).jpeg?updatedAt=1754852476479"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/49.MARJ798/A1%20(10).jpeg?updatedAt=1754852476479"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/49.MARJ798/A1%20(11).jpeg?updatedAt=1754852476479"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/49.MARJ798/A1%20(12).jpeg?updatedAt=1754852476479"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/49.MARJ798/A1%20(13).jpeg?updatedAt=1754852476479"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/49.MARJ798/A1%20(14).jpeg?updatedAt=1754852476479"},
            ]
        },
        {
            id: 35,
            pid: "C37CM700",
            title: "2 BHK in Sector 37C, Chandigarh",
            location: "Sector 37C,Chandigarh",
            type: "2 BHK",
            gender: "girls",
            price: "₹22,000",
            features: ["Fully Furnished", "AC", "Fridge"],
            description: "Exclusive property for female occupants.",
            media: [
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/50.C37CM700/T1%20(1).jpeg?updatedAt=1754852547292"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/50.C37CM700/T1%20(2).jpeg?updatedAt=1754852547292"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/50.C37CM700/T1%20(3).jpeg?updatedAt=1754852547292"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/50.C37CM700/T1%20(4).jpeg?updatedAt=1754852547292"},
            ]
        },
        {
            id: 36,
            pid: "MARS880",
            title: "3 BHK in Airport Road, Mohali",
            location: "Airport Road,Mohali",
            type: "3 BHK",
            gender: "for-all",
            price: "₹36,000",
            features: ["Independent", "Fully Furnished", "AC", "Newly Built"],
            description: "Newly constructed premium 3BHK.",
            media: [
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/51.MARS880/Z1%20(1).jpeg?updatedAt=1754852552664"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/51.MARS880/Z1%20(2).jpeg?updatedAt=1754852552664"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/51.MARS880/Z1%20(3).jpeg?updatedAt=1754852552664"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/51.MARS880/Z1%20(4).jpeg?updatedAt=1754852552664"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/51.MARS880/Z1%20(5).jpeg?updatedAt=1754852552664"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/51.MARS880/Z1%20(6).jpeg?updatedAt=1754852552664"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/51.MARS880/Z1%20(7).jpeg?updatedAt=1754852552664"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/51.MARS880/Z1%20(8).jpeg?updatedAt=1754852552664"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/51.MARS880/Z1%20(9).jpeg?updatedAt=1754852552664"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/51.MARS880/Z1%20(10).jpeg?updatedAt=1754852552664"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/51.MARS880/Z1%20(11).jpeg?updatedAt=1754852552664"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/51.MARS880/Z1%20(12).jpeg?updatedAt=1754852552664"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/51.MARS880/Z1%20(13).jpeg?updatedAt=1754852552664"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/51.MARS880/Z1%20(14).jpeg?updatedAt=1754852552664"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/51.MARS880/Z1%20(15).jpeg?updatedAt=1754852552664"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/51.MARS880/Z1%20(16).jpeg?updatedAt=1754852552664"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/51.MARS880/Z1%20(17).jpeg?updatedAt=1754852552664"},
            ]
        },
        {
            id: 37,
            pid: "M91U998",
            title: "Room in Sector 91, Mohali",
            location: "Sector 91,Mohali",
            type: "Room",
            gender: "boys",
            price: "₹9,500",
            features: ["Independent", "Fully Furnished"],
            description: "Private room for male occupants.",
            media: [
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/52.M91U998/R1%20(1).jpeg?updatedAt=1754852561385"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/52.M91U998/R1%20(2).jpeg?updatedAt=1754852561385"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/52.M91U998/R1%20(3).jpeg?updatedAt=1754852561385"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/52.M91U998/R1%20(4).jpeg?updatedAt=1754852561385"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/52.M91U998/R1%20(5).jpeg?updatedAt=1754852561385"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/52.M91U998/R1%20(6).jpeg?updatedAt=1754852561385"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/52.M91U998/R1%20(7).jpeg?updatedAt=1754852561385"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/52.M91U998/R1%20(8).jpeg?updatedAt=1754852561385"},
            ]
        },
        {
            id: 38,
            pid: "M66BS987",
            title: "2 BHK in Sector 66B, Mohali",
            location: "Sector 66B,Mohali",
            type: "2 BHK",
            gender: "for-all",
            price: "₹23,000",
            features: ["Independent", "Ownerfree", "Fully Furnished", "AC"],
            description: "Independent 2BHK with no owner restrictions.",
            media: [
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/53.M66BS987/X1%20(1).jpeg?updatedAt=1754852564971"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/53.M66BS987/X1%20(2).jpeg?updatedAt=1754852564971"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/53.M66BS987/X1%20(3).jpeg?updatedAt=1754852564971"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/53.M66BS987/X1%20(4).jpeg?updatedAt=1754852564971"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/53.M66BS987/X1%20(5).jpeg?updatedAt=1754852564971"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/53.M66BS987/X1%20(6).jpeg?updatedAt=1754852564971"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/53.M66BS987/X1%20(7).jpeg?updatedAt=1754852564971"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/53.M66BS987/X1%20(8).jpeg?updatedAt=1754852564971"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/53.M66BS987/X1%20(9).jpeg?updatedAt=1754852564971"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/53.M66BS987/X1%20(10).jpeg?updatedAt=1754852564971"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/53.M66BS987/X1%20(11).jpeg?updatedAt=1754852564971"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/53.M66BS987/X1%20(12).jpeg?updatedAt=1754852564971"},
            ]
        },
        {
            id: 39,
            pid: "M88R981",
            title: "Room in Sector 88, Mohali",
            location: "Sector 88,Mohali",
            type: "Room",
            gender: "for-all",
            price: "₹10,500",
            features: ["Independent", "Ownerfree", "Fully Furnished"],
            description: "Private room with full independence.",
            media: [
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/54.M88R981/A1%20(1).jpg?updatedAt=1754852578059"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/54.M88R981/A1%20(2).jpg?updatedAt=1754852578059"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/54.M88R981/A1%20(3).jpg?updatedAt=1754852578059"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/54.M88R981/A1%20(4).jpg?updatedAt=1754852578059"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/54.M88R981/A1%20(5).jpg?updatedAt=1754852578059"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/54.M88R981/A1%20(6).jpg?updatedAt=1754852578059"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/54.M88R981/A1%20(7).jpg?updatedAt=1754852578059"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/54.M88R981/A1%20(8).jpg?updatedAt=1754852578059"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/54.M88R981/A1%20(9).jpg?updatedAt=1754852578059"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/54.M88R981/A1%20(10).jpg?updatedAt=1754852578059"},
            ]
        },
        {
            id: 40,
            pid: "M117H920",
            title: "3 BHK in Sector 117, Mohali",
            location: "Sector 117,Mohali",
            type: "3 BHK",
            gender: "for-all",
            price: "₹25,000",
            features: ["Independent", "Ownerfree", "Fully Furnished"],
            description: "Spacious 3BHK with no owner restrictions.",
            media: [
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/55.M117H920/R1%20(1).jpeg?updatedAt=1754852587374"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/55.M117H920/R1%20(2).jpeg?updatedAt=1754852587374"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/55.M117H920/R1%20(3).jpeg?updatedAt=1754852587374"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/55.M117H920/R1%20(4).jpeg?updatedAt=1754852587374"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/55.M117H920/R1%20(5).jpeg?updatedAt=1754852587374"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/55.M117H920/R1%20(6).jpeg?updatedAt=1754852587374"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/55.M117H920/R1%20(7).jpeg?updatedAt=1754852587374"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/55.M117H920/R1%20(8).jpeg?updatedAt=1754852587374"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/55.M117H920/R1%20(9).jpeg?updatedAt=1754852587374"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/55.M117H920/R1%20(10).jpeg?updatedAt=1754852587374"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/55.M117H920/R1%20(11).jpeg?updatedAt=1754852587374"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/55.M117H920/R1%20(12).jpeg?updatedAt=1754852587374"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/55.M117H920/R1%20(13).jpeg?updatedAt=1754852587374"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/55.M117H920/R1%20(14).jpeg?updatedAt=1754852587374"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/55.M117H920/R1%20(15).jpeg?updatedAt=1754852587374"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/55.M117H920/R1%20(16).jpeg?updatedAt=1754852587374"},
                {type : "image",src : "https://ik.imagekit.io/minkal/assets/55.M117H920/R1%20(17).jpeg?updatedAt=1754852587374"},
            ]
        },
        {
            id: 41,
            pid: "MLP858",
            title: "Room with Kitchen in Landran, Mohali",
            location: "Landran,Mohali",
            type: "Room with Kitchen",
            gender: "for-all",
            price: "₹7,500",
            features: ["Independent", "Ownerfree", "Fully Furnished"],
            description: "Private room in 2BHK unit suitable for couples.",
            media: [
                {type : "video",src : "https://ik.imagekit.io/minkal/assets/56.MLP858/S1.mp4?updatedAt=1754852678400"},
            ]
        },
         {
            id: 42,
            pid: "M61-765",
            title: "Room with Kitchen in Sector 61, Mohali",
            location: "Sector 61,Mohali",
            type: "Room with Kitchen",
            gender: "for-all",
            price: "₹12,000",
            features: ["Fridge", "Fully Furnished"],
            description: "This Room with Kitchen property is located in Sector 61, Mohali.",
            media: [
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/57.M61-765/A%20(1).jpeg?updatedAt=1754929764327" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/57.M61-765/A%20(2).jpeg?updatedAt=1754929764327" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/57.M61-765/A%20(3).jpeg?updatedAt=1754929764327" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/57.M61-765/A%20(4).jpeg?updatedAt=1754929764327" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/57.M61-765/A%20(5).jpeg?updatedAt=1754929764327" },
            ]
        },
        {
            id: 43,
            pid: "M126-998",
            title: "2 BHK in Sector 126, Mohali",
            location: "Sector 126,Mohali",
            type: "2 BHK",
            gender: "for-all",
            price: "₹12,000",
            features: ["Independent", "Ownerfree", "Fully Furnished"],
            description: "This 2 BHK property is located in Sector 126, Mohali.",
            media: [
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/58.M126-998/A%20(1).jpeg?updatedAt=1754929770040" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/58.M126-998/A%20(2).jpeg?updatedAt=1754929770040" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/58.M126-998/A%20(3).jpeg?updatedAt=1754929770040" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/58.M126-998/A%20(4).jpeg?updatedAt=1754929770040" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/58.M126-998/A%20(5).jpeg?updatedAt=1754929770040" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/58.M126-998/A%20(6).jpeg?updatedAt=1754929770040" },
            ]
        },
        {
            id: 44,
            pid: "M79T828",
            title: "3 BHK in Sector 79, Mohali",
            location: "Sector 79,Mohali",
            type: "3 BHK",
            gender: "family",
            price: "₹27,000",
            features: ["Fully Furnished", "AC", "Fridge"],
            description: "This 3 BHK property is located in Sector 79, Mohali.",
            media: [
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/59.M79T828/A%20(1).jpeg?updatedAt=1754929776410" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/59.M79T828/A%20(2).jpeg?updatedAt=1754929776410" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/59.M79T828/A%20(3).jpeg?updatedAt=1754929776410" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/59.M79T828/A%20(4).jpeg?updatedAt=1754929776410" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/59.M79T828/A%20(5).jpeg?updatedAt=1754929776410" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/59.M79T828/A%20(6).jpeg?updatedAt=1754929776410" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/59.M79T828/A%20(7).jpeg?updatedAt=1754929776410" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/59.M79T828/A%20(8).jpeg?updatedAt=1754929776410" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/59.M79T828/A%20(9).jpeg?updatedAt=1754929776410" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/59.M79T828/A%20(10).jpeg?updatedAt=1754929776410" }
            ]
        },
        {
            id: 45,
            pid: "M79T2828",
            title: "2 BHK in Sector 79, Mohali",
            location: "Sector 79,Mohali",
            type: "2 BHK",
            gender: "family",
            price: "₹14,000",
            features: ["Fully Furnished", "Independent", "AC", "RO", "Fridge"],
            description: "This 2 BHK property is located in Sector 79, Mohali.",
            media: [
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/60.M79T2828/A%20(1).jpeg?updatedAt=1754929783308" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/60.M79T2828/A%20(2).jpeg?updatedAt=1754929783308" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/60.M79T2828/A%20(3).jpeg?updatedAt=1754929783308" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/60.M79T2828/A%20(4).jpeg?updatedAt=1754929783308" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/60.M79T2828/A%20(5).jpeg?updatedAt=1754929783308" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/60.M79T2828/A%20(6).jpeg?updatedAt=1754929783308" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/60.M79T2828/A%20(7).jpeg?updatedAt=1754929783308" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/60.M79T2828/A%20(8).jpeg?updatedAt=1754929783308" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/60.M79T2828/A%20(9).jpeg?updatedAt=1754929783308" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/60.M79T2828/A%20(10).jpeg?updatedAt=1754929783308" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/60.M79T2828/A%20(11).jpeg?updatedAt=1754929783308" },
            ]
        },
        {
            id: 46,
            pid: "C43P826",
            title: "Room in Sector 43, Chandigarh",
            location: "Sector 43,Chandigarh",
            type: "Room",
            gender: "for-all",
            price: "₹10,500",
            features: ["Fully Furnished", "Independent"],
            description: "This Room property is located in Sector 43, Chandigarh.",
            media: [
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/61.C43P826/A%20(1).jpeg?updatedAt=1754929790725" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/61.C43P826/A%20(2).jpeg?updatedAt=1754929790725" }
            ]
        },
        {
            id: 47,
            pid: "M94S987",
            title: "2 BHK in Sector 94, Mohali",
            location: "Sector 94,Mohali",
            type: "2 BHK",
            gender: "family",
            price: "₹27,000",
            features: ["Fully Furnished", "Independent", "AC", "Fridge"],
            description: "This 2 BHK property is located in Sector 94, Mohali.",
            media: [
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/62.M94S987/A%20(1).jpeg?updatedAt=1754929806086" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/62.M94S987/A%20(2).jpeg?updatedAt=1754929806086" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/62.M94S987/A%20(3).jpeg?updatedAt=1754929806086" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/62.M94S987/A%20(4).jpeg?updatedAt=1754929806086" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/62.M94S987/A%20(5).jpeg?updatedAt=1754929806086" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/62.M94S987/A%20(6).jpeg?updatedAt=1754929806086" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/62.M94S987/A%20(7).jpeg?updatedAt=1754929806086" },
            ]
        },
        {
            id: 48,
            pid: "M60B790",
            title: "2 BHK in Sector 60, Mohali",
            location: "Sector 60,Mohali",
            type: "2 BHK",
            gender: "for-all",
            price: "₹24,000",
            features: ["Independent", "Fully Furnished", "AC"],
            description: "This 2 BHK property is located in Sector 60, Mohali.",
            media: [
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/63.M60B790/A%20(1).jpeg?updatedAt=1754929803609" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/63.M60B790/A%20(2).jpeg?updatedAt=1754929803609" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/63.M60B790/A%20(3).jpeg?updatedAt=1754929803609" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/63.M60B790/A%20(4).jpeg?updatedAt=1754929803609" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/63.M60B790/A%20(5).jpeg?updatedAt=1754929803609" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/63.M60B790/A%20(6).jpeg?updatedAt=1754929803609" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/63.M60B790/A%20(7).jpeg?updatedAt=1754929803609" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/63.M60B790/A%20(8).jpeg?updatedAt=1754929803609" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/63.M60B790/A%20(9).jpeg?updatedAt=1754929803609" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/63.M60B790/A%20(10).jpeg?updatedAt=1754929803609" },
            ]
        },
        {
            id: 49,
            pid: "M126J998",
            title: "2 BHK in Sector 126, Mohali",
            location: "Sector 126,Mohali",
            type: "2 BHK",
            gender: "for-all",
            price: "₹16,000",
            features: ["Fully Furnished", "AC", "Fridge"],
            description: "This 2 BHK property is located in Sector 126, Mohali.",
            media: [
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/64.M126J998/A%20(1).jpeg?updatedAt=1754929817345" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/64.M126J998/A%20(2).jpeg?updatedAt=1754929817345" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/64.M126J998/A%20(3).jpeg?updatedAt=1754929817345" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/64.M126J998/A%20(4).jpeg?updatedAt=1754929817345" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/64.M126J998/A%20(5).jpeg?updatedAt=1754929817345" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/64.M126J998/A%20(6).jpeg?updatedAt=1754929817345" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/64.M126J998/A%20(7).jpeg?updatedAt=1754929817345" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/64.M126J998/A%20(8).jpeg?updatedAt=1754929817345" },
            ]
        },
        {
            id: 50,
            pid: "M52M987",
            title: "2 RK in Sector 52, Mohali",
            location: "Sector 52,Mohali",
            type: "2 RK",
            gender: "for-all",
            price: "₹15,000",
            features: ["Independent", "Ownerfree", "Fully Furnished"],
            description: "This 2 RK property is located in Sector 52, Mohali.",
            media: [
                { type: "video", src: "https://ik.imagekit.io/minkal/assets/65.M52M987/A.mp4?updatedAt=1754929839469" }
            ]
        },
        {
            id: 51,
            pid: "M61J946",
            title: "1 BHK in Sector 61, Mohali",
            location: "Sector 61,Mohali",
            type: "1 BHK",
            gender: "for-all",
            price: "₹16,500",
            features: ["Fridge", "Fully Furnished"],
            description: "This 1 BHK property is located in Sector 61, Mohali.",
            media: [
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/66.M61J946/A%20(1).jpeg?updatedAt=1754929825083" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/66.M61J946/A%20(2).jpeg?updatedAt=1754929825083" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/66.M61J946/A%20(3).jpeg?updatedAt=1754929825083" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/66.M61J946/A%20(4).jpeg?updatedAt=1754929825083" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/66.M61J946/A%20(5).jpeg?updatedAt=1754929825083" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/66.M61J946/A%20(6).jpeg?updatedAt=1754929825083" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/66.M61J946/A%20(7).jpeg?updatedAt=1754929825083" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/66.M61J946/A%20(8).jpeg?updatedAt=1754929825083" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/66.M61J946/A%20(9).jpeg?updatedAt=1754929825083" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/66.M61J946/A%20(10).jpeg?updatedAt=1754929825083" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/66.M61J946/A%20(11).jpeg?updatedAt=1754929825083" },
            ]
        },
        {
            id: 52,
            pid: "M126B987",
            title: "2 BHK in Sector 126, Mohali",
            location: "Sector 126,Mohali",
            type: "2 BHK",
            gender: "for-all",
            price: "₹14,800",
            features: ["Fully Furnished", "Independent"],
            description: "This 2 BHK property is located in Sector 126, Mohali.",
            media: [
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/67.M126B987/A%20(1).jpeg?updatedAt=1754929833053" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/67.M126B987/A%20(2).jpeg?updatedAt=1754929833053" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/67.M126B987/A%20(3).jpeg?updatedAt=1754929833053" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/67.M126B987/A%20(4).jpeg?updatedAt=1754929833053" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/67.M126B987/A%20(5).jpeg?updatedAt=1754929833053" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/67.M126B987/A%20(6).jpeg?updatedAt=1754929833053" },
            ]
        },
        {
            id: 53,
            pid: "M59-921",
            title: "PG in Sector 59, Mohali",
            location: "Sector 59,Mohali",
            type: "PG",
            gender: "girls",
            price: "₹6,500",
            features: ["Fully Furnished"],
            description: "This PG property is located in Sector 59, Mohali.",
            media: [
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/68.M59-921/A%20(1).jpeg?updatedAt=1754929839459" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/68.M59-921/A%20(2).jpeg?updatedAt=1754929839459" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/68.M59-921/A%20(3).jpeg?updatedAt=1754929839459" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/68.M59-921/A%20(4).jpeg?updatedAt=1754929839459" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/68.M59-921/A%20(5).jpeg?updatedAt=1754929839459" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/68.M59-921/A%20(6).jpeg?updatedAt=1754929839459" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/68.M59-921/A%20(7).jpeg?updatedAt=1754929839459" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/68.M59-921/A%20(8).jpeg?updatedAt=1754929839459" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/68.M59-921/A%20(9).jpeg?updatedAt=1754929839459" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/68.M59-921/A%20(10).jpeg?updatedAt=1754929839459" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/68.M59-921/A%20(11).jpeg?updatedAt=1754929839459" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/68.M59-921/A%20(12).jpeg?updatedAt=1754929839459" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/68.M59-921/A%20(13).jpeg?updatedAt=1754929839459" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/68.M59-921/A%20(14).jpeg?updatedAt=1754929839459" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/68.M59-921/A%20(15).jpeg?updatedAt=1754929839459" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/68.M59-921/A%20(16).jpeg?updatedAt=1754929839459" },
                 
            ]
        },
        {
            id: 54,
            pid: "MIBS828",
            title: "3 BHK in I Block Aerocity, Mohali",
            location: "I Block Aerocity,Mohali",
            type: "3 BHK",
            gender: "for-all",
            price: "₹25,000",
            features: ["Fully Furnished", "Owner Free"],
            description: "This 3 BHK property is located in I Block Aerocity, Mohali.",
            media: [
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/69.MIBS828/A%20(1).jpeg?updatedAt=1754929845097" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/69.MIBS828/A%20(2).jpeg?updatedAt=1754929845097" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/69.MIBS828/A%20(3).jpeg?updatedAt=1754929845097" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/69.MIBS828/A%20(4).jpeg?updatedAt=1754929845097" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/69.MIBS828/A%20(5).jpeg?updatedAt=1754929845097" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/69.MIBS828/A%20(6).jpeg?updatedAt=1754929845097" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/69.MIBS828/A%20(7).jpeg?updatedAt=1754929845097" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/69.MIBS828/A%20(8).jpeg?updatedAt=1754929845097" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/69.MIBS828/A%20(9).jpeg?updatedAt=1754929845097" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/69.MIBS828/A%20(10).jpeg?updatedAt=1754929845097" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/69.MIBS828/A%20(11).jpeg?updatedAt=1754929845097" },
            ]
        },
        {
            id: 55,
            pid: "M59A969",
            title: "Room with Kitchen in Sector 59, Mohali",
            location: "Sector 59,Mohali",
            type: "Room with Kitchen",
            gender: "girls",
            price: "₹5,000",
            features: ["Fully Furnished"],
            description: "This Room with Kitchen property is located in Sector 59, Mohali.",
            media: [
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/70.M59A969/A1.jpeg?updatedAt=1754929849384" },
                { type: "video", src: "https://ik.imagekit.io/minkal/assets/70.M59A969/A2.mp4?updatedAt=1754929860758" },
            ]
        },
        {
            id: 56,
            pid: "MCBV842",
            title: "2 BHK in C Block Aerocity, Mohali",
            location: "C Block Aerocity,Mohali",
            type: "2 BHK",
            gender: "family",
            price: "₹21,000",
            features: ["Unfurnished", "Independent"],
            description: "This 2 BHK property is located in C Block Aerocity, Mohali.",
            media: [
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/71.MCBV842/A%20(1).jpeg?updatedAt=1754929852619" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/71.MCBV842/A%20(2).jpeg?updatedAt=1754929852619" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/71.MCBV842/A%20(3).jpeg?updatedAt=1754929852619" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/71.MCBV842/A%20(4).jpeg?updatedAt=1754929852619" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/71.MCBV842/A%20(5).jpeg?updatedAt=1754929852619" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/71.MCBV842/A%20(6).jpeg?updatedAt=1754929852619" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/71.MCBV842/A%20(7).jpeg?updatedAt=1754929852619" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/71.MCBV842/A%20(8).jpeg?updatedAt=1754929852619" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/71.MCBV842/A%20(9).jpeg?updatedAt=1754929852619" },
            ]
        },
        {
            id: 57,
            pid: "M118-781",
            title: "Room with Kitchen in Sector 118, Mohali",
            location: "Sector 118,Mohali",
            type: "Room with Kitchen",
            gender: "for-all",
            price: "₹10,000",
            features: ["Fully Furnished", "Independent", "Owner free"],
            description: "This Room with Kitchen property is located in Sector 118, Mohali.",
            media: [
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/placeholder.jpg" }
            ]
        },
        {
            id: 58,
            pid: "C37DR987",
            title: "Room with Kitchen in Sector 37D, Chandigarh",
            location: "Sector 37D,Chandigarh",
            type: "Room with Kitchen",
            gender: "girls",
            price: "₹8,000",
            features: ["Fully Furnished", "Independent"],
            description: "This Room with Kitchen property is located in Sector 37D, Chandigarh.",
            media: [
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/73.C37DR987/A%20(1).jpeg?updatedAt=1754929731774" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/73.C37DR987/A%20(2).jpeg?updatedAt=1754929731774" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/73.C37DR987/A%20(3).jpeg?updatedAt=1754929731774" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/73.C37DR987/A%20(4).jpeg?updatedAt=1754929731774" },
            ]
        },
        {
            id: 59,
            pid: "C23DS904",
            title: "Room with Kitchen in Sector 23D, Chandigarh",
            location: "Sector 23D,Chandigarh",
            type: "Room with Kitchen",
            gender: "for-all",
            price: "₹13,000",
            features: ["Fully Furnished", "Independent"],
            description: "This Room with Kitchen property is located in Sector 23D, Chandigarh.",
            media: [
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/74.C23DS904/A%20(1).jpeg?updatedAt=1754929744536" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/74.C23DS904/A%20(2).jpeg?updatedAt=1754929744536" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/74.C23DS904/A%20(3).jpeg?updatedAt=1754929744536" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/74.C23DS904/A%20(4).jpeg?updatedAt=1754929744536" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/74.C23DS904/A%20(5).jpeg?updatedAt=1754929744536" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/74.C23DS904/A%20(6).jpeg?updatedAt=1754929744536" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/74.C23DS904/A%20(7).jpeg?updatedAt=1754929744536" },
            ]
        },
        {
            id: 60,
            pid: "M70R991",
            title: "Room with Kitchen in Sector 70, Mohali",
            location: "Sector 70,Mohali",
            type: "Room with Kitchen",
            gender: "for-all",
            price: "₹6,000",
            features: ["Furnished", "Independent"],
            description: "This Room with Kitchen property is located in Sector 70, Mohali.",
            media: [
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/75.M70R991/A%20(1).jpeg?updatedAt=1754929738916" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/75.M70R991/A%20(2).jpeg?updatedAt=1754929738916" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/75.M70R991/A%20(3).jpeg?updatedAt=1754929738916" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/75.M70R991/A%20(4).jpeg?updatedAt=1754929738916" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/75.M70R991/A%20(5).jpeg?updatedAt=1754929738916" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/75.M70R991/A%20(6).jpeg?updatedAt=1754929738916" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/75.M70R991/A%20(7).jpeg?updatedAt=1754929738916" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/75.M70R991/A%20(8).jpeg?updatedAt=1754929738916" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/75.M70R991/A%20(9).jpeg?updatedAt=1754929738916" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/75.M70R991/A%20(10).jpeg?updatedAt=1754929738916" },
            ]
        },
        {
            id: 61,
            pid: "M117S931",
            title: "Room with Kitchen in Sector 117, Mohali",
            location: "Sector 117,Mohali",
            type: "Room with Kitchen",
            gender: "for-all",
            price: "₹11,000",
            features: ["Furnished", "Independent"],
            description: "This Room with Kitchen property is located in Sector 117, Mohali.",
            media: [
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/76.M117S931/A%20(1).jpeg?updatedAt=1754929753231" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/76.M117S931/A%20(2).jpeg?updatedAt=1754929753231" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/76.M117S931/A%20(3).jpeg?updatedAt=1754929753231" },
                { type: "video", src: "https://ik.imagekit.io/minkal/assets/76.M117S931/A%20(4).mp4?updatedAt=1754929784472" },
            ]
        },
        {
            id: 62,
            pid: "C44CV980",
            title: "1 BHK in Sector 44C, Chandigarh",
            location: "Sector 44C,Chandigarh",
            type: "1 BHK",
            gender: "for-all",
            price: "₹22,500",
            features: ["Furnished", "Independent"],
            description: "This 1 BHK property is located in Sector 44C, Chandigarh.",
            media: [
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/77.C44CV980/A%20(1).jpeg?updatedAt=1754929752219" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/77.C44CV980/A%20(2).jpeg?updatedAt=1754929752219" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/77.C44CV980/A%20(3).jpeg?updatedAt=1754929752219" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/77.C44CV980/A%20(4).jpeg?updatedAt=1754929752219" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/77.C44CV980/A%20(5).jpeg?updatedAt=1754929752219" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/77.C44CV980/A%20(6).jpeg?updatedAt=1754929752219" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/77.C44CV980/A%20(7).jpeg?updatedAt=1754929752219" },
            ]
        },
        {
            id: 62,
            pid: "C45AH814",
            title: "1 BHK in Sector 45A, Chandigarh",
            location: "Sector 45A,Chandigarh",
            type: "1 BHK",
            gender: "for-all",
            price: "₹20,000",
            features: ["Furnished", "Independent"],
            description: "This 1 BHK property is located in Sector 45A, Chandigarh.",
            media: [
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/78.C45AH814/A%20(1).jpeg?updatedAt=1754929758212" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/78.C45AH814/A%20(2).jpeg?updatedAt=1754929758212" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/78.C45AH814/A%20(3).jpeg?updatedAt=1754929758212" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/78.C45AH814/A%20(4).jpeg?updatedAt=1754929758212" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/78.C45AH814/A%20(5).jpeg?updatedAt=1754929758212" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/78.C45AH814/A%20(6).jpeg?updatedAt=1754929758212" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/78.C45AH814/A%20(7).jpeg?updatedAt=1754929758212" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/78.C45AH814/A%20(8).jpeg?updatedAt=1754929758212" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/78.C45AH814/A%20(9).jpeg?updatedAt=1754929758212" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/78.C45AH814/A%20(10).jpeg?updatedAt=1754929758212" },
                { type: "image", src: "https://ik.imagekit.io/minkal/assets/78.C45AH814/A%20(11).jpeg?updatedAt=1754929758212" },
            ]
        },
];

// Pagination variables
let currentlyDisplayed = 0;
const roomsPerPage = 12;
let filteredRooms = [];

// Initialize filteredRooms with a copy of roomData
document.addEventListener('DOMContentLoaded', () => {
    // Sort roomData in descending order by ID to show newest properties first
    roomData.sort((a, b) => b.id - a.id);
    filteredRooms = [...roomData];
    generateCards(filteredRooms);
});

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
                // Add loading="lazy" and use data-src for lazy loading
                sliderHTML += `<img data-src="${mediaItem.src}" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" class="lazy-load" alt="${room.title}" loading="lazy">`;
            } else if (mediaItem.type === 'video') {
                // Videos don't support lazy loading in the same way, but we can defer loading
                sliderHTML += `<video src="${mediaItem.src}" controls muted playsinline loading="lazy"></video>`;
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
    
    // Initialize lazy loading after cards are generated
    lazyLoadImages();
    
    // Also run lazy loading after any filter or pagination changes
    document.getElementById('cardsContainer').addEventListener('DOMNodeInserted', lazyLoadImages);
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
    const SLIDE_INTERVAL = 6000; // 3 seconds between slides for images

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

// Filter functionality - UPDATED with new logic for FOR ALL option and PID search
function filterRooms() {
    const location = document.getElementById('location').value;
    const type = document.getElementById('bhk').value;
    const gender = document.getElementById('gender').value;
    const price = document.getElementById('price').value;
    const pidSearch = document.getElementById('pidSearch').value.trim().toUpperCase();

    // Reset pagination when filters change
    currentlyDisplayed = 0;
    
    filteredRooms = roomData.filter(room => {
        // Location filter
        if (location !== 'all') {
            const normalizedLocation = location.replace(/-/g, ' ');
            const normalizedRoomLocation = room.location.toLowerCase().replace(/-/g, ' ');
            if (!normalizedRoomLocation.includes(normalizedLocation)) {
                return false;
            }
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
        
        // PID search filter
        if (pidSearch && !room.pid.includes(pidSearch)) {
            return false;
        }

        return true;
    });

    // Generate new cards with the filtered results
    generateCards(filteredRooms);
    
    // Ensure lazy loading works for the new content
    lazyLoadImages();
}

// Reset filters
function resetFilters() {
    // Reset all filter dropdowns to 'all' and clear search
    document.getElementById('location').value = 'all';
    document.getElementById('bhk').value = 'all';
    document.getElementById('gender').value = 'all';
    document.getElementById('price').value = 'all';
    document.getElementById('pidSearch').value = '';
    
    // Reset pagination
    currentlyDisplayed = 0;
    
    // Reset filtered rooms to show all
    filteredRooms = [...roomData];
    
    // Regenerate cards with all properties
    generateCards(filteredRooms);
    
    // Ensure lazy loading works for the new content
    lazyLoadImages();
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

// Function to lazy load images
function lazyLoadImages() {
    const lazyImages = document.querySelectorAll('img.lazy-load');
    
    // Only create a new observer if one doesn't exist
    if (!window.imageObserver) {
        window.imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    // Only load if data-src exists
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        // Remove the data-src to prevent duplicate loading
                        img.removeAttribute('data-src');
                        img.classList.remove('lazy-load');
                        observer.unobserve(img);
                    }
                }
            });
        }, {
            rootMargin: '200px', // Start loading images 200px before they enter the viewport
            threshold: 0.01
        });
    }

    // Observe all lazy images
    lazyImages.forEach(img => {
        // Only observe if it has data-src and isn't already being observed
        if (img.dataset.src && !img.classList.contains('lazy-loading')) {
            img.classList.add('lazy-loading');
            window.imageObserver.observe(img);
        }
    });
}

// Add event listener for PID search input to trigger filtering
function setupPidSearch() {
    const pidSearch = document.getElementById('pidSearch');
    let searchTimeout;
    
    pidSearch.addEventListener('input', () => {
        // Clear previous timeout to avoid rapid firing
        clearTimeout(searchTimeout);
        
        // Set a new timeout to trigger filtering after user stops typing (500ms delay)
        searchTimeout = setTimeout(() => {
            filterRooms();
        }, 500);
    });
    
    // Also trigger search on pressing Enter
    pidSearch.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            clearTimeout(searchTimeout);
            filterRooms();
        }
    });
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Sort roomData in descending order by ID to show newest properties first
    roomData.sort((a, b) => b.id - a.id);
    
    // Set up PID search functionality
    setupPidSearch();
    
    // Initialize filteredRooms with a copy of the sorted roomData
    filteredRooms = [...roomData];
    
    // Generate initial cards
    generateCards(filteredRooms);
    
    // Initialize lazy loading
    lazyLoadImages();
    
    // Add event listeners
    document.getElementById('resetFilters').addEventListener('click', resetFilters);
    document.getElementById('moreRoomsBtn').addEventListener('click', loadMoreRooms);
    
    // Get all filter elements
    const locationFilter = document.getElementById('location');
    const bhkFilter = document.getElementById('bhk');
    const genderFilter = document.getElementById('gender');
    const priceFilter = document.getElementById('price');
    
    // Add change event listeners to all filters
    [locationFilter, bhkFilter, genderFilter, priceFilter].forEach(filter => {
        if (filter) {
            filter.addEventListener('change', () => {
                // Add a small delay to ensure all filters are updated
                setTimeout(filterRooms, 50);
            });
        }
    });
    
    // Add mutation observer for lazy loading dynamically added content
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.addedNodes.length) {
                lazyLoadImages();
            }
        });
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
});
