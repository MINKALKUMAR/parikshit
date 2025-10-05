// Room data - Extended with more rooms
// const roomData = [
//     {
//         id: 1,
//         pid: "M127G",
//         title: "Modern Apartment in Sector 127",
//         location: "Sector 127,Mohali",
//         type: "1 BHK",
//         gender: "for-all",
//         price: "₹14,500",
//         features: ["Fully Furnished", "Independent", "Owner Free"],
//         description: "Beautiful 1BHK with modern amenities near shopping center.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/1.M127G/A7.jpg?updatedAt=1754802913167" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/1.M127G/A6.jpg?updatedAt=1754683721878" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/1.M127G/A5.jpg?updatedAt=1754683721878" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/1.M127G/A4.jpg?updatedAt=1754683721878" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/1.M127G/A3.jpg?updatedAt=1754683721878" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/1.M127G/A2.jpg?updatedAt=1754683721878" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/1.M127G/A1.jpg?updatedAt=1754683721878" }
//         ]
//     },
//     {
//         id: 2,
//         pid: "M114K921",
//         title: "1 RK in Sector 114,Mohali",
//         location: "Sector 114,Mohali",
//         type: "1 RK",
//         gender: "boys",
//         price: "₹6,000",
//         features: ["Semi-Furnished", "Independent"],
//         description: "Spacious 2BHK with balcony and great ventilation.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/2.M114K921/B1.jpg?updatedAt=1754802913145" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/2.M114K921/B2.jpg?updatedAt=1754802913145" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/2.M114K921/B3.jpg?updatedAt=1754802913145" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/2.M114K921/B4.jpg?updatedAt=1754802913145" }
//         ]
//     },
//     {
//         id: 3,
//         pid: "C19CB814",
//         title: "Spacious 1 RK in Sector 19C,Chandigarh",
//         location: "Sector 19C,Chandigarh",
//         type: "1 RK",
//         gender: "girls",
//         price: "₹11,000",
//         features: ["Fully Furnished", "AC", "RO"],
//         description: "Luxury studio apartment with premium amenities.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/3.C19CB814/C1.jpg?updatedAt=1754802915880" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/3.C19CB814/C2.jpg?updatedAt=1754802915880" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/3.C19CB814/C3.jpg?updatedAt=1754802915880" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/3.C19CB814/C4.jpg?updatedAt=1754802915880" }
//         ]
//     },
//     {
//         id: 4,
//         pid: "C23DJ2977",
//         title: "1 BHK in Sector 23D, Chandigarh",
//         location: "Sector 23D,Chandigarh",
//         type: "1 BHK",
//         gender: "for-all",
//         price: "₹13,500",
//         features: ["Fully Furnished", "Independent", "Owner Free"],
//         description: "Perfect for families with children near schools and parks.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/4.C23DJ2977/D1.jpg?updatedAt=1754802918027" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/4.C23DJ2977/D2.jpg?updatedAt=1754802918027" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/4.C23DJ2977/D3.jpg?updatedAt=1754802918027" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/4.C23DJ2977/D4.jpg?updatedAt=1754802918027" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/4.C23DJ2977/D5.jpg?updatedAt=1754802918027" },
//             { type: "video", src: "https://ik.imagekit.io/minkal/assets/4.C23DJ2977/D6.mp4?updatedAt=1754802918027" }

//         ]
//     },
//     {
//         id: 5,
//         pid: "M126Sk701",
//         title: "1 BHK in Sector 126, Mohali",
//         location: "Sector 126,Mohali",
//         type: "1 BHK",
//         gender: "for-all",
//         price: "₹12,000",
//         features: ["2nd Floor", "Newly built", "RO"],
//         description: "Comfortable shared accommodation for working professionals.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/5.M126Sk701/D1.jpg?updatedAt=1754802920966" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/5.M126Sk701/D2.jpg?updatedAt=1754802920966" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/5.M126Sk701/D3.jpg?updatedAt=1754802920966" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/5.M126Sk701/D4.jpg?updatedAt=1754802920966" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/5.M126Sk701/D5.jpg?updatedAt=1754802920966" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/5.M126Sk701/D6.jpg?updatedAt=1754802920966" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/5.M126Sk701/D7.jpg?updatedAt=1754802920966" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/5.M126Sk701/D8.jpg?updatedAt=1754802920966" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/5.M126Sk701/D9.jpg?updatedAt=1754802920966" },

//         ]
//     },
//     {
//         id: 6,
//         pid: "M126Sk2701",
//         title: "2 BHK in Sector 126, Mohali",
//         location: "Sector 126,Mohali",
//         type: "2 BHK",
//         gender: "for-all",
//         price: "₹18,000",
//         features: ["Un furnished", "Balcony", "Newly built"],
//         description: "Newly constructed premium 1BHK with modern fittings.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/6.M126Sk2701/A1.jpg?updatedAt=1754802864012" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/6.M126Sk2701/A2.jpg?updatedAt=1754802864012" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/6.M126Sk2701/A3.jpg?updatedAt=1754802864012" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/6.M126Sk2701/A4.jpg?updatedAt=1754802864012" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/6.M126Sk2701/A5.jpg?updatedAt=1754802864012" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/6.M126Sk2701/A6.jpg?updatedAt=1754802864012" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/6.M126Sk2701/A7.jpg?updatedAt=1754802864012" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/6.M126Sk2701/A8.jpg?updatedAt=1754802864012" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/6.M126Sk2701/A9.jpg?updatedAt=1754802864012" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/6.M126Sk2701/A10.jpg?updatedAt=1754802864012" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/6.M126Sk2701/A11.jpg?updatedAt=1754802864012" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/6.M126Sk2701/A12.jpg?updatedAt=1754802864012" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/6.M126Sk2701/A13.jpg?updatedAt=1754802864012" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/6.M126Sk2701/A14.jpg?updatedAt=1754802864012" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/6.M126Sk2701/A15.jpg?updatedAt=1754802864012" },

//         ]
//     },
//     {
//         id: 7,
//         pid: "C20AJ734",
//         title: "PG in Sector 20A, Chandigarh",
//         location: "Sector 20A,Chandigarh",
//         type: "PG",
//         gender: "girls",
//         price: "₹5,500",
//         features: ["Fully Furnished", "Without food", "refrigerator"],
//         description: "Well-maintained PG with modern kitchen and bathrooms.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/7.C20AJ734/B1.jpg?updatedAt=1754802870187" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/7.C20AJ734/B2.jpg?updatedAt=1754802870187" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/7.C20AJ734/B3.jpg?updatedAt=1754802870187" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/7.C20AJ734/B4.jpg?updatedAt=1754802870187" }

//         ]
//     },
//     {
//         id: 8,
//         pid: "M70D998",
//         title: "2 BHK in Sector 70, Mohali",
//         location: "Sector 70,Mohali",
//         type: "2 BHK",
//         gender: "for-all",
//         price: "₹21,000",
//         features: ["Fully Furnished", "Independent"],
//         description: "Beautiful 2BHK with modern amenities and great view.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/8.M70D998/F1.jpeg?updatedAt=1754802870255" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/8.M70D998/F2.jpeg?updatedAt=1754802870255" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/8.M70D998/F3.jpeg?updatedAt=1754802870255" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/8.M70D998/F4.jpeg?updatedAt=1754802870255" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/8.M70D998/F5.jpeg?updatedAt=1754802870255" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/8.M70D998/F6.jpeg?updatedAt=1754802870255" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/8.M70D998/F7.jpeg?updatedAt=1754802870255" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/8.M70D998/F8.jpeg?updatedAt=1754802870255" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/8.M70D998/F9.jpeg?updatedAt=1754802870255" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/8.M70D998/F10.jpeg?updatedAt=1754802870255" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/8.M70D998/F11.jpeg?updatedAt=1754802870255" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/8.M70D998/F12.jpeg?updatedAt=1754802870255" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/8.M70D998/F13.jpeg?updatedAt=1754802870255" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/8.M70D998/F14.jpeg?updatedAt=1754802870255" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/8.M70D998/F15.jpeg?updatedAt=1754802870255" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/8.M70D998/F16.jpeg?updatedAt=1754802870255" }
//         ]
//     },
//     {
//         id: 9,
//         pid: "M116K819",
//         title: "2 BHK in Sector 116, Mohali",
//         location: "Sector 116,Mohali",
//         type: "2 BHK",
//         gender: "family",
//         price: "₹25,000",
//         features: ["Fully Furnished", "Independent", "AC", "RO", "Fridge"],
//         description: "Safe and comfortable 2BHK for family.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/9.M116K819/G1.jpeg?updatedAt=1754802879311" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/9.M116K819/G2.jpeg?updatedAt=1754802879311" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/9.M116K819/G3.jpeg?updatedAt=1754802879311" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/9.M116K819/G4.jpeg?updatedAt=1754802879311" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/9.M116K819/G5.jpeg?updatedAt=1754802879311" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/9.M116K819/G6.jpeg?updatedAt=1754802879311" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/9.M116K819/G7.jpeg?updatedAt=1754802879311" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/9.M116K819/G8.jpeg?updatedAt=1754802879311" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/9.M116K819/G9.jpeg?updatedAt=1754802879311" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/9.M116K819/G10.jpeg?updatedAt=1754802879311" }
//         ]
//     },
//     // Additional rooms for pagination
//     {
//         id: 10,
//         pid: "M63G946",
//         title: "1 BHK in Sector 63, Mohali",
//         location: "Sector 63,Mohali",
//         type: "1 BHK",
//         gender: "for-all",
//         price: "₹20,000",
//         features: ["Independent", "Fully Furnished", "AC", "Fridge"],
//         description: "Spacious and fully furnished 1BHK with all essential amenities.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/10.M63G946/A1.jpeg?updatedAt=1754802884096" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/10.M63G946/A2.jpeg?updatedAt=1754802884096" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/10.M63G946/A3.jpeg?updatedAt=1754802884096" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/10.M63G946/A4.jpeg?updatedAt=1754802884096" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/10.M63G946/A5.jpeg?updatedAt=1754802884096" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/10.M63G946/A6.jpeg?updatedAt=1754802884096" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/10.M63G946/A7.jpeg?updatedAt=1754802884096" }
//         ]
//     },
//     {
//         id: 11,
//         pid: "M114-956",
//         title: "2 BHK in Sector 114, Mohali",
//         location: "Sector 114,Mohali",
//         type: "2 BHK",
//         gender: "family",
//         price: "₹16,000",
//         features: ["Semi-Furnished", "Independent"],
//         description: "Comfortable 2BHK ideal for families, located in a peaceful area.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/11.M114-956/Z1.jpeg?updatedAt=1754802887932" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/11.M114-956/Z2.jpeg?updatedAt=1754802887932" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/11.M114-956/Z3.jpeg?updatedAt=1754802887932" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/11.M114-956/Z4.jpeg?updatedAt=1754802887932" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/11.M114-956/Z5.jpeg?updatedAt=1754802887932" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/11.M114-956/Z6.jpeg?updatedAt=1754802887932" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/11.M114-956/Z7.jpeg?updatedAt=1754802887932" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/11.M114-956/Z8.jpeg?updatedAt=1754802887932" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/11.M114-956/Z9.jpeg?updatedAt=1754802887932" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/11.M114-956/Z10.jpeg?updatedAt=1754802887932" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/11.M114-956/Z11.jpeg?updatedAt=1754802887932" }
//         ]
//     },
//     {
//         id: 12,
//         pid: "M67S869",
//         title: "1 BHK in Sector 67, Mohali",
//         location: "Sector 67,Mohali",
//         type: "1 BHK",
//         gender: "girls",
//         price: "₹15,000",
//         features: ["Fully Furnished", "Washing Machine", "AC", "Fridge"],
//         description: "Premium 1BHK for girls with modern facilities and appliances.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/12.M67S869/A1.jpeg?updatedAt=1754802898192" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/12.M67S869/A2.jpeg?updatedAt=1754802898192" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/12.M67S869/A3.jpeg?updatedAt=1754802898192" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/12.M67S869/A4.jpeg?updatedAt=1754802898192" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/12.M67S869/A5.jpeg?updatedAt=1754802898192" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/12.M67S869/A6.jpeg?updatedAt=1754802898192" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/12.M67S869/A7.jpeg?updatedAt=1754802898192" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/12.M67S869/A8.jpeg?updatedAt=1754802898192" }
//         ]
//     },
//     {
//         id: 13,
//         pid: "M68K987",
//         title: "3 BHK in Sector 68, Mohali",
//         location: "Sector 68,Mohali",
//         type: "3 BHK",
//         gender: "for-all",
//         price: "₹27,000",
//         features: ["Semi-Furnished", "Independent"],
//         description: "Spacious 3BHK suitable for all, with semi-furnished setup.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/13.M68K987/T1.jpeg?updatedAt=1754802897807" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/13.M68K987/T2.jpeg?updatedAt=1754802897807" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/13.M68K987/T3.jpeg?updatedAt=1754802897807" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/13.M68K987/T4.jpeg?updatedAt=1754802897807" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/13.M68K987/T5.jpeg?updatedAt=1754802897807" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/13.M68K987/T6.jpeg?updatedAt=1754802897807" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/13.M68K987/T7.jpeg?updatedAt=1754802897807" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/13.M68K987/T8.jpeg?updatedAt=1754802897807" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/13.M68K987/T9.jpeg?updatedAt=1754802897807" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/13.M68K987/T10.jpeg?updatedAt=1754802897807" }
//         ]
//     },
//     {
//         id: 14,
//         pid: "M89N946",
//         title: "3 BHK in Sector 89, Mohali",
//         location: "Sector 89,Mohali",
//         type: "3 BHK",
//         gender: "family",
//         price: "₹22,000",
//         features: ["Unfurnished"],
//         description: "Large unfurnished 3BHK perfect for families and girls.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/14.M89N946/B1.jpeg?updatedAt=1754802904577" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/14.M89N946/B2.jpeg?updatedAt=1754802904577" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/14.M89N946/B3.jpeg?updatedAt=1754802904577" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/14.M89N946/B4.jpeg?updatedAt=1754802904577" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/14.M89N946/B5.jpeg?updatedAt=1754802904577" }
//         ]
//     },
//     {
//         id: 15,
//         pid: "M88M814",
//         title: "1 RK in Sector 88, Mohali",
//         location: "Sector 88,Mohali",
//         type: "1 RK",
//         gender: "girls",
//         price: "₹12,000",
//         features: ["Independent", "Owner Free", "Fully Furnished", "AC"],
//         description: "Fully furnished 1RK for girls with independence and comfort.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/15.M88M814/P1.jpeg?updatedAt=1754802907325" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/15.M88M814/P2.jpeg?updatedAt=1754802907325" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/15.M88M814/P3.jpeg?updatedAt=1754802907325" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/15.M88M814/P4.jpeg?updatedAt=1754802907325" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/15.M88M814/P5.jpeg?updatedAt=1754802907325" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/15.M88M814/P6.jpeg?updatedAt=1754802907325" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/15.M88M814/P7.jpeg?updatedAt=1754802907325" }
//         ]
//     },
//     {
//         id: 16,
//         pid: "M126A859",
//         title: "2 BHK in Sector 126, Mohali",
//         location: "Sector 126,Mohali",
//         type: "2 BHK",
//         gender: "for-all",
//         price: "₹14,000",
//         features: ["Fully Furnished", "Independent"],
//         description: "Spacious 2BHK apartment with modern amenities in Sector 126.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/31.M126A859/P1.jpeg?updatedAt=1754852607925" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/31.M126A859/P2.jpeg?updatedAt=1754852607925" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/31.M126A859/P3.jpeg?updatedAt=1754852607925" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/31.M126A859/P4.jpeg?updatedAt=1754852607925" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/31.M126A859/P5.jpeg?updatedAt=1754852607925" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/31.M126A859/P6.jpeg?updatedAt=1754852607925" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/31.M126A859/P7.jpeg?updatedAt=1754852607925" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/31.M126A859/P8.jpeg?updatedAt=1754852607925" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/31.M126A859/P9.jpeg?updatedAt=1754852607925" },
//         ]
//     },
//     {
//         id: 17,
//         pid: "C20AR959",
//         title: "1 RK in Sector 20A, Chandigarh",
//         location: "Sector 20A,Chandigarh",
//         type: "1 RK",
//         gender: "girls",
//         price: "₹16,000",
//         features: ["Fully Furnished", "Independent"],
//         description: "Private 1RK unit designed for female occupants.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/32.C20AR959/A1.jpeg?updatedAt=1754852662182" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/32.C20AR959/A2.jpeg?updatedAt=1754852662182" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/32.C20AR959/A3.jpeg?updatedAt=1754852662182" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/32.C20AR959/A4.jpeg?updatedAt=1754852662182" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/32.C20AR959/A5.jpeg?updatedAt=1754852662182" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/32.C20AR959/A6.jpeg?updatedAt=1754852662182" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/32.C20AR959/A7.jpeg?updatedAt=1754852662182" },
//         ]
//     },
//     {
//         id: 18,
//         pid: "M82J956",
//         title: "1 RK in Sector 82, Mohali",
//         location: "Sector 82,Mohali",
//         type: "1 RK",
//         gender: "for-all",
//         price: "₹5,000",
//         features: ["Fully Furnished", "Independent"],
//         description: "Compact 1RK suitable for all occupants.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/33.M82J956/H1.jpeg?updatedAt=1754852669456" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/33.M82J956/H2.jpeg?updatedAt=1754852669456" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/33.M82J956/H3.jpeg?updatedAt=1754852669456" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/33.M82J956/H4.jpeg?updatedAt=1754852669456" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/33.M82J956/H5.jpeg?updatedAt=1754852669456" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/33.M82J956/H6.jpeg?updatedAt=1754852669456" },
//         ]
//     },
//     {
//         id: 19,
//         pid: "M60K911",
//         title: "1 RK in Sector 60, Mohali",
//         location: "Sector 60,Mohali",
//         type: "1 RK",
//         gender: "girls",
//         price: "₹8,000",
//         features: ["Fully Furnished", "Independent"],
//         description: "Shared kitchen and washroom facility with family.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/34.M60K911/A1.jpeg?updatedAt=1754852693364" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/34.M60K911/A2.jpeg?updatedAt=1754852693364" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/34.M60K911/A3.jpeg?updatedAt=1754852693364" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/34.M60K911/A4.jpeg?updatedAt=1754852693364" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/34.M60K911/A5.jpeg?updatedAt=1754852693364" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/34.M60K911/A6.jpeg?updatedAt=1754852693364" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/34.M60K911/A7.jpeg?updatedAt=1754852693364" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/34.M60K911/A8.jpeg?updatedAt=1754852693364" },
//         ]
//     },
//     {
//         id: 20,
//         pid: "C33CH980",
//         title: "Room in Sector 33C, Chandigarh",
//         location: "Sector 33C,Chandigarh",
//         type: "Room",
//         gender: "for-all",
//         price: "₹16,000",
//         features: ["Fully Furnished", "Independent", "AC", "Fridge"],
//         description: "Comfortable room with premium amenities.",
//         media: [
//             { type: "text", content: "contect for photos" }
//         ]
//     },
//     {
//         id: 21,
//         pid: "C15DV798",
//         title: "1 BHK in Sector 15D, Chandigarh",
//         location: "Sector 15D,Chandigarh",
//         type: "1 BHK",
//         gender: "for-all",
//         price: "₹13,000",
//         features: ["Fully Furnished", "Independent", "AC", "RO", "Fridge"],
//         description: "Well-equipped 1BHK unit in prime location.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/36.C15DV798/A1.jpeg?updatedAt=1754852322909" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/36.C15DV798/A2.jpeg?updatedAt=1754852322909" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/36.C15DV798/A3.jpeg?updatedAt=1754852322909" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/36.C15DV798/A4.jpeg?updatedAt=1754852322909" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/36.C15DV798/A5.jpeg?updatedAt=1754852322909" },
//         ]
//     },
//     {
//         id: 22,
//         pid: "M126W981",
//         title: "2 BHK in Sector 126, Mohali",
//         location: "Sector 126,Mohali",
//         type: "2 BHK",
//         gender: "for-all",
//         price: "₹16,000",
//         features: ["Fully Furnished", "Independent"],
//         description: "Includes almirahs, fans, kitchen appliances and complete furnishings.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/37.M126W981/A1.jpg?updatedAt=1754852323249" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/37.M126W981/A2.jpg?updatedAt=1754852323249" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/37.M126W981/A3.jpg?updatedAt=1754852323249" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/37.M126W981/A4.jpg?updatedAt=1754852323249" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/37.M126W981/A5.jpg?updatedAt=1754852323249" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/37.M126W981/A6.jpg?updatedAt=1754852323249" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/37.M126W981/A7.jpg?updatedAt=1754852323249" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/37.M126W981/A8.jpg?updatedAt=1754852323249" },
//         ]
//     },
//     {
//         id: 23,
//         pid: "C16AC941",
//         title: "1 BHK in Sector 16A, Chandigarh",
//         location: "Sector 16A,Chandigarh",
//         type: "1 BHK",
//         gender: "for-all",
//         price: "₹20,000",
//         features: ["Fully Furnished", "Independent", "AC", "RO", "Fridge"],
//         description: "Premium 1BHK with high-end appliances.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/38.C16AC941/A1.jpeg?updatedAt=1754852338466" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/38.C16AC941/A2.jpeg?updatedAt=1754852338466" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/38.C16AC941/A3.jpeg?updatedAt=1754852338466" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/38.C16AC941/A4.jpeg?updatedAt=1754852338466" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/38.C16AC941/A5.jpeg?updatedAt=1754852338466" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/38.C16AC941/A6.jpeg?updatedAt=1754852338466" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/38.C16AC941/A7.jpeg?updatedAt=1754852338466" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/38.C16AC941/A8.jpeg?updatedAt=1754852338466" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/38.C16AC941/A9.jpeg?updatedAt=1754852338466" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/38.C16AC941/A10.jpeg?updatedAt=1754852338466" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/38.C16AC941/A11.jpeg?updatedAt=1754852338466" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/38.C16AC941/A12.jpeg?updatedAt=1754852338466" },
//         ]
//     },
//     {
//         id: 24,
//         pid: "C27DS790",
//         title: "1 BHK in Sector 27D, Chandigarh",
//         location: "Sector 27D,Chandigarh",
//         type: "1 BHK",
//         gender: "boys",
//         price: "₹7,000",
//         features: ["Fully Furnished", "Independent"],
//         description: "Shared accommodation for non-smoking/sober male occupants.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/39.C27DS790/A1.jpeg?updatedAt=1754852385539" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/39.C27DS790/A2.jpeg?updatedAt=1754852385539" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/39.C27DS790/A3.jpeg?updatedAt=1754852385539" },
//         ]
//     },
//     {
//         id: 25,
//         pid: "C22CA991",
//         title: "2 BHK in Sector 22C, Chandigarh",
//         location: "Sector 22C,Chandigarh",
//         type: "2 BHK",
//         gender: "for-all",
//         price: "₹26,000",
//         features: ["Fully Furnished"],
//         description: "Premium property near JW Marriott with gender-specific restrictions.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/40.C22CA991/A1.jpeg?updatedAt=1754852369085" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/40.C22CA991/A2.jpeg?updatedAt=1754852369085" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/40.C22CA991/A3.jpeg?updatedAt=1754852369085" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/40.C22CA991/A4.jpeg?updatedAt=1754852369085" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/40.C22CA991/A5.jpeg?updatedAt=1754852369085" },
//         ]
//     },
//     {
//         id: 26,
//         pid: "M66L887",
//         title: "1 BHK in Sector 66, Mohali",
//         location: "Sector 66,Mohali",
//         type: "1 BHK",
//         gender: "for-all",
//         price: "₹26,000",
//         features: ["Fully Furnished", "Independent", "AC", "RO", "Fridge"],
//         description: "Luxury 1BHK with premium amenities.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/41.M66L887/A1.jpeg?updatedAt=1754852387929" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/41.M66L887/A2.jpeg?updatedAt=1754852387929" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/41.M66L887/A3.jpeg?updatedAt=1754852387929" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/41.M66L887/A4.jpeg?updatedAt=1754852387929" },
//         ]
//     },
//     {
//         id: 27,
//         pid: "M59V902",
//         title: "2 BHK in Sector 59, Mohali",
//         location: "Sector 59,Mohali",
//         type: "2 BHK",
//         gender: "boys",
//         price: "₹7,000",
//         features: ["Fully Furnished", "Independent"],
//         description: "Shared accommodation for male occupants.",
//         media: [
//             { type: "video", src: "https://ik.imagekit.io/minkal/assets/42.M59V902/A1.mp4?updatedAt=1754852552152" }
//         ]
//     },
//     {
//         id: 28,
//         pid: "MP1A964",
//         title: "2 BHK in Phase 1, Mohali",
//         location: "Phase 1,Mohali",
//         type: "2 BHK",
//         gender: "for-all",
//         price: "₹20,000",
//         features: ["Fully Furnished", "Independent"],
//         description: "Independent 2BHK in Phase 1 locality.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/43.MP1A964/F1.jpeg?updatedAt=1754852391006" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/43.MP1A964/F2.jpeg?updatedAt=1754852391006" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/43.MP1A964/F3.jpeg?updatedAt=1754852391006" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/43.MP1A964/F4.jpeg?updatedAt=1754852391006" },
//         ]
//     },
//     {
//         id: 29,
//         pid: "M62M981",
//         title: "1 RK in Sector 62, Mohali",
//         location: "Sector 62,Mohali",
//         type: "1 RK",
//         gender: "girls",
//         price: "₹9,000",
//         features: ["Fully Furnished", "Fridge", "Gas Stove"],
//         description: "Compact unit with kitchen essentials.",
//         media: [
//             { type: "video", src: "https://ik.imagekit.io/minkal/assets/44.M62M981/A2.mp4?updatedAt=1754852511622" },
//         ]
//     },
//     {
//         id: 30,
//         pid: "C41DS628",
//         title: "1 RK in Sector 41D, Chandigarh",
//         location: "Sector 41D,Chandigarh",
//         type: "1 RK",
//         gender: "boys",
//         price: "₹8,000",
//         features: ["Independent", "Fully Furnished", "AC", "Newly Built"],
//         description: "New construction with modern amenities.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/45.C41DS628/T1.jpeg?updatedAt=1754852409441" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/45.C41DS628/T2.jpeg?updatedAt=1754852409441" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/45.C41DS628/T3.jpeg?updatedAt=1754852409441" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/45.C41DS628/T4.jpeg?updatedAt=1754852409441" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/45.C41DS628/T5.jpeg?updatedAt=1754852409441" },
//         ]
//     },
//     {
//         id: 31,
//         pid: "MBR836",
//         title: "1 RK in Balongi, Mohali",
//         location: "Balongi,Mohali",
//         type: "1 RK",
//         gender: "boys",
//         price: "₹4,500",
//         features: ["Independent", "Fully Furnished"],
//         description: "Economical 1RK for male occupants.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/46.MBR836/U1.jpeg?updatedAt=1754852414458" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/46.MBR836/U2.jpeg?updatedAt=1754852414458" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/46.MBR836/U3.jpeg?updatedAt=1754852414458" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/46.MBR836/U4.jpeg?updatedAt=1754852414458" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/46.MBR836/U5.jpeg?updatedAt=1754852414458" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/46.MBR836/U6.jpeg?updatedAt=1754852414458" },
//         ]
//     },
//     {
//         id: 32,
//         pid: "M61A987",
//         title: "2 BHK in Sector 61, Mohali",
//         location: "Sector 61,Mohali",
//         type: "2 BHK",
//         gender: "for-all",
//         price: "₹22,000",
//         features: ["Independent", "Fully Furnished", "Fridge", "RO"],
//         description: "Independent 2BHK unit with appliances.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/47.M61A987/A1.jpeg?updatedAt=1754852509396" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/47.M61A987/A2.jpeg?updatedAt=1754852509396" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/47.M61A987/A3.jpeg?updatedAt=1754852509396" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/47.M61A987/A4.jpeg?updatedAt=1754852509396" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/47.M61A987/A5.jpeg?updatedAt=1754852509396" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/47.M61A987/A6.jpeg?updatedAt=1754852509396" },
//         ]
//     },
//     {
//         id: 33,
//         pid: "M55K814",
//         title: "1 RK in Sector 55, Mohali",
//         location: "Sector 55,Mohali",
//         type: "1 RK",
//         gender: "girls",
//         price: "₹5,000",
//         features: ["Independent", "Fully Furnished"],
//         description: "Shared accommodation for female occupants.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/48.M55K814/A1%20(1).jpeg?updatedAt=1754852438668" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/48.M55K814/A1%20(2).jpeg?updatedAt=1754852438668" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/48.M55K814/A1%20(3).jpeg?updatedAt=1754852438668" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/48.M55K814/A1%20(4).jpeg?updatedAt=1754852438668" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/48.M55K814/A1%20(5).jpeg?updatedAt=1754852438668" },
//         ]
//     },
//     {
//         id: 34,
//         pid: "MARJ798",
//         title: "3 BHK in Airport Road, Mohali",
//         location: "Airport Road,Mohali",
//         type: "3 BHK",
//         gender: "for-all",
//         price: "₹29,000",
//         features: ["Fully Furnished", "AC", "Fridge", "Independent"],
//         description: "Spacious 3BHK near airport location.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/49.MARJ798/A1%20(1).jpeg?updatedAt=1754852476479" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/49.MARJ798/A1%20(2).jpeg?updatedAt=1754852476479" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/49.MARJ798/A1%20(3).jpeg?updatedAt=1754852476479" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/49.MARJ798/A1%20(4).jpeg?updatedAt=1754852476479" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/49.MARJ798/A1%20(5).jpeg?updatedAt=1754852476479" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/49.MARJ798/A1%20(6).jpeg?updatedAt=1754852476479" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/49.MARJ798/A1%20(7).jpeg?updatedAt=1754852476479" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/49.MARJ798/A1%20(8).jpeg?updatedAt=1754852476479" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/49.MARJ798/A1%20(9).jpeg?updatedAt=1754852476479" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/49.MARJ798/A1%20(10).jpeg?updatedAt=1754852476479" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/49.MARJ798/A1%20(11).jpeg?updatedAt=1754852476479" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/49.MARJ798/A1%20(12).jpeg?updatedAt=1754852476479" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/49.MARJ798/A1%20(13).jpeg?updatedAt=1754852476479" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/49.MARJ798/A1%20(14).jpeg?updatedAt=1754852476479" },
//         ]
//     },
//     {
//         id: 35,
//         pid: "C37CM700",
//         title: "2 BHK in Sector 37C, Chandigarh",
//         location: "Sector 37C,Chandigarh",
//         type: "2 BHK",
//         gender: "girls",
//         price: "₹22,000",
//         features: ["Fully Furnished", "AC", "Fridge"],
//         description: "Exclusive property for female occupants.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/50.C37CM700/T1%20(1).jpeg?updatedAt=1754852547292" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/50.C37CM700/T1%20(2).jpeg?updatedAt=1754852547292" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/50.C37CM700/T1%20(3).jpeg?updatedAt=1754852547292" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/50.C37CM700/T1%20(4).jpeg?updatedAt=1754852547292" },
//         ]
//     },
//     {
//         id: 36,
//         pid: "MARS880",
//         title: "3 BHK in Airport Road, Mohali",
//         location: "Airport Road,Mohali",
//         type: "3 BHK",
//         gender: "for-all",
//         price: "₹36,000",
//         features: ["Independent", "Fully Furnished", "AC", "Newly Built"],
//         description: "Newly constructed premium 3BHK.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/51.MARS880/Z1%20(1).jpeg?updatedAt=1754852552664" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/51.MARS880/Z1%20(2).jpeg?updatedAt=1754852552664" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/51.MARS880/Z1%20(3).jpeg?updatedAt=1754852552664" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/51.MARS880/Z1%20(4).jpeg?updatedAt=1754852552664" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/51.MARS880/Z1%20(5).jpeg?updatedAt=1754852552664" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/51.MARS880/Z1%20(6).jpeg?updatedAt=1754852552664" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/51.MARS880/Z1%20(7).jpeg?updatedAt=1754852552664" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/51.MARS880/Z1%20(8).jpeg?updatedAt=1754852552664" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/51.MARS880/Z1%20(9).jpeg?updatedAt=1754852552664" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/51.MARS880/Z1%20(10).jpeg?updatedAt=1754852552664" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/51.MARS880/Z1%20(11).jpeg?updatedAt=1754852552664" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/51.MARS880/Z1%20(12).jpeg?updatedAt=1754852552664" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/51.MARS880/Z1%20(13).jpeg?updatedAt=1754852552664" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/51.MARS880/Z1%20(14).jpeg?updatedAt=1754852552664" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/51.MARS880/Z1%20(15).jpeg?updatedAt=1754852552664" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/51.MARS880/Z1%20(16).jpeg?updatedAt=1754852552664" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/51.MARS880/Z1%20(17).jpeg?updatedAt=1754852552664" },
//         ]
//     },
//     {
//         id: 37,
//         pid: "M91U998",
//         title: "Room in Sector 91, Mohali",
//         location: "Sector 91,Mohali",
//         type: "Room",
//         gender: "boys",
//         price: "₹9,500",
//         features: ["Independent", "Fully Furnished"],
//         description: "Private room for male occupants.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/52.M91U998/R1%20(1).jpeg?updatedAt=1754852561385" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/52.M91U998/R1%20(2).jpeg?updatedAt=1754852561385" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/52.M91U998/R1%20(3).jpeg?updatedAt=1754852561385" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/52.M91U998/R1%20(4).jpeg?updatedAt=1754852561385" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/52.M91U998/R1%20(5).jpeg?updatedAt=1754852561385" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/52.M91U998/R1%20(6).jpeg?updatedAt=1754852561385" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/52.M91U998/R1%20(7).jpeg?updatedAt=1754852561385" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/52.M91U998/R1%20(8).jpeg?updatedAt=1754852561385" },
//         ]
//     },
//     {
//         id: 38,
//         pid: "M66BS987",
//         title: "2 BHK in Sector 66B, Mohali",
//         location: "Sector 66B,Mohali",
//         type: "2 BHK",
//         gender: "for-all",
//         price: "₹23,000",
//         features: ["Independent", "Ownerfree", "Fully Furnished", "AC"],
//         description: "Independent 2BHK with no owner restrictions.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/53.M66BS987/X1%20(1).jpeg?updatedAt=1754852564971" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/53.M66BS987/X1%20(2).jpeg?updatedAt=1754852564971" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/53.M66BS987/X1%20(3).jpeg?updatedAt=1754852564971" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/53.M66BS987/X1%20(4).jpeg?updatedAt=1754852564971" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/53.M66BS987/X1%20(5).jpeg?updatedAt=1754852564971" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/53.M66BS987/X1%20(6).jpeg?updatedAt=1754852564971" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/53.M66BS987/X1%20(7).jpeg?updatedAt=1754852564971" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/53.M66BS987/X1%20(8).jpeg?updatedAt=1754852564971" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/53.M66BS987/X1%20(9).jpeg?updatedAt=1754852564971" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/53.M66BS987/X1%20(10).jpeg?updatedAt=1754852564971" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/53.M66BS987/X1%20(11).jpeg?updatedAt=1754852564971" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/53.M66BS987/X1%20(12).jpeg?updatedAt=1754852564971" },
//         ]
//     },
//     {
//         id: 39,
//         pid: "M88R981",
//         title: "Room in Sector 88, Mohali",
//         location: "Sector 88,Mohali",
//         type: "Room",
//         gender: "for-all",
//         price: "₹10,500",
//         features: ["Independent", "Ownerfree", "Fully Furnished"],
//         description: "Private room with full independence.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/54.M88R981/A1%20(1).jpg?updatedAt=1754852578059" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/54.M88R981/A1%20(2).jpg?updatedAt=1754852578059" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/54.M88R981/A1%20(3).jpg?updatedAt=1754852578059" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/54.M88R981/A1%20(4).jpg?updatedAt=1754852578059" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/54.M88R981/A1%20(5).jpg?updatedAt=1754852578059" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/54.M88R981/A1%20(6).jpg?updatedAt=1754852578059" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/54.M88R981/A1%20(7).jpg?updatedAt=1754852578059" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/54.M88R981/A1%20(8).jpg?updatedAt=1754852578059" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/54.M88R981/A1%20(9).jpg?updatedAt=1754852578059" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/54.M88R981/A1%20(10).jpg?updatedAt=1754852578059" },
//         ]
//     },
//     {
//         id: 40,
//         pid: "M117H920",
//         title: "3 BHK in Sector 117, Mohali",
//         location: "Sector 117,Mohali",
//         type: "3 BHK",
//         gender: "for-all",
//         price: "₹25,000",
//         features: ["Independent", "Ownerfree", "Fully Furnished"],
//         description: "Spacious 3BHK with no owner restrictions.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/55.M117H920/R1%20(1).jpeg?updatedAt=1754852587374" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/55.M117H920/R1%20(2).jpeg?updatedAt=1754852587374" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/55.M117H920/R1%20(3).jpeg?updatedAt=1754852587374" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/55.M117H920/R1%20(4).jpeg?updatedAt=1754852587374" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/55.M117H920/R1%20(5).jpeg?updatedAt=1754852587374" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/55.M117H920/R1%20(6).jpeg?updatedAt=1754852587374" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/55.M117H920/R1%20(7).jpeg?updatedAt=1754852587374" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/55.M117H920/R1%20(8).jpeg?updatedAt=1754852587374" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/55.M117H920/R1%20(9).jpeg?updatedAt=1754852587374" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/55.M117H920/R1%20(10).jpeg?updatedAt=1754852587374" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/55.M117H920/R1%20(11).jpeg?updatedAt=1754852587374" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/55.M117H920/R1%20(12).jpeg?updatedAt=1754852587374" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/55.M117H920/R1%20(13).jpeg?updatedAt=1754852587374" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/55.M117H920/R1%20(14).jpeg?updatedAt=1754852587374" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/55.M117H920/R1%20(15).jpeg?updatedAt=1754852587374" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/55.M117H920/R1%20(16).jpeg?updatedAt=1754852587374" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/55.M117H920/R1%20(17).jpeg?updatedAt=1754852587374" },
//         ]
//     },
//     {
//         id: 41,
//         pid: "MLP858",
//         title: "1 RK in Landran, Mohali",
//         location: "Landran,Mohali",
//         type: "1 RK",
//         gender: "for-all",
//         price: "₹7,500",
//         features: ["Independent", "Ownerfree", "Fully Furnished"],
//         description: "Private room in 2BHK unit suitable for couples.",
//         media: [
//             { type: "text", content: "contect for photos" }
//         ]
//     },
//     {
//         id: 42,
//         pid: "M61-765",
//         title: "1 RK in Sector 61, Mohali",
//         location: "Sector 61,Mohali",
//         type: "1 RK",
//         gender: "for-all",
//         price: "₹12,000",
//         features: ["Fridge", "Fully Furnished"],
//         description: "This 1 RK property is located in Sector 61, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/57.M61-765/A%20(1).jpeg?updatedAt=1754929764327" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/57.M61-765/A%20(2).jpeg?updatedAt=1754929764327" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/57.M61-765/A%20(3).jpeg?updatedAt=1754929764327" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/57.M61-765/A%20(4).jpeg?updatedAt=1754929764327" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/57.M61-765/A%20(5).jpeg?updatedAt=1754929764327" },
//         ]
//     },
//     {
//         id: 43,
//         pid: "M126-998",
//         title: "2 BHK in Sector 126, Mohali",
//         location: "Sector 126,Mohali",
//         type: "2 BHK",
//         gender: "for-all",
//         price: "₹12,000",
//         features: ["Independent", "Ownerfree", "Fully Furnished"],
//         description: "This 2 BHK property is located in Sector 126, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/58.M126-998/A%20(1).jpeg?updatedAt=1754929770040" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/58.M126-998/A%20(2).jpeg?updatedAt=1754929770040" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/58.M126-998/A%20(3).jpeg?updatedAt=1754929770040" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/58.M126-998/A%20(4).jpeg?updatedAt=1754929770040" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/58.M126-998/A%20(5).jpeg?updatedAt=1754929770040" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/58.M126-998/A%20(6).jpeg?updatedAt=1754929770040" },
//         ]
//     },
//     {
//         id: 44,
//         pid: "M79T828",
//         title: "3 BHK in Sector 79, Mohali",
//         location: "Sector 79,Mohali",
//         type: "3 BHK",
//         gender: "family",
//         price: "₹27,000",
//         features: ["Fully Furnished", "AC", "Fridge"],
//         description: "This 3 BHK property is located in Sector 79, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/59.M79T828/A%20(1).jpeg?updatedAt=1754929776410" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/59.M79T828/A%20(2).jpeg?updatedAt=1754929776410" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/59.M79T828/A%20(3).jpeg?updatedAt=1754929776410" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/59.M79T828/A%20(4).jpeg?updatedAt=1754929776410" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/59.M79T828/A%20(5).jpeg?updatedAt=1754929776410" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/59.M79T828/A%20(6).jpeg?updatedAt=1754929776410" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/59.M79T828/A%20(7).jpeg?updatedAt=1754929776410" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/59.M79T828/A%20(8).jpeg?updatedAt=1754929776410" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/59.M79T828/A%20(9).jpeg?updatedAt=1754929776410" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/59.M79T828/A%20(10).jpeg?updatedAt=1754929776410" }
//         ]
//     },
//     {
//         id: 45,
//         pid: "M79T2828",
//         title: "2 BHK in Sector 79, Mohali",
//         location: "Sector 79,Mohali",
//         type: "2 BHK",
//         gender: "family",
//         price: "₹14,000",
//         features: ["Fully Furnished", "Independent", "AC", "RO", "Fridge"],
//         description: "This 2 BHK property is located in Sector 79, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/60.M79T2828/A%20(1).jpeg?updatedAt=1754929783308" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/60.M79T2828/A%20(2).jpeg?updatedAt=1754929783308" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/60.M79T2828/A%20(3).jpeg?updatedAt=1754929783308" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/60.M79T2828/A%20(4).jpeg?updatedAt=1754929783308" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/60.M79T2828/A%20(5).jpeg?updatedAt=1754929783308" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/60.M79T2828/A%20(6).jpeg?updatedAt=1754929783308" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/60.M79T2828/A%20(7).jpeg?updatedAt=1754929783308" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/60.M79T2828/A%20(8).jpeg?updatedAt=1754929783308" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/60.M79T2828/A%20(9).jpeg?updatedAt=1754929783308" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/60.M79T2828/A%20(10).jpeg?updatedAt=1754929783308" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/60.M79T2828/A%20(11).jpeg?updatedAt=1754929783308" },
//         ]
//     },
//     {
//         id: 46,
//         pid: "C43P826",
//         title: "Room in Sector 43, Chandigarh",
//         location: "Sector 43,Chandigarh",
//         type: "Room",
//         gender: "for-all",
//         price: "₹10,500",
//         features: ["Fully Furnished", "Independent"],
//         description: "This Room property is located in Sector 43, Chandigarh.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/61.C43P826/A%20(1).jpeg?updatedAt=1754929790725" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/61.C43P826/A%20(2).jpeg?updatedAt=1754929790725" }
//         ]
//     },
//     {
//         id: 47,
//         pid: "M94S987",
//         title: "2 BHK in Sector 94, Mohali",
//         location: "Sector 94,Mohali",
//         type: "2 BHK",
//         gender: "family",
//         price: "₹27,000",
//         features: ["Fully Furnished", "Independent", "AC", "Fridge"],
//         description: "This 2 BHK property is located in Sector 94, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/62.M94S987/A%20(1).jpeg?updatedAt=1754929806086" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/62.M94S987/A%20(2).jpeg?updatedAt=1754929806086" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/62.M94S987/A%20(3).jpeg?updatedAt=1754929806086" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/62.M94S987/A%20(4).jpeg?updatedAt=1754929806086" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/62.M94S987/A%20(5).jpeg?updatedAt=1754929806086" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/62.M94S987/A%20(6).jpeg?updatedAt=1754929806086" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/62.M94S987/A%20(7).jpeg?updatedAt=1754929806086" },
//         ]
//     },
//     {
//         id: 48,
//         pid: "M60B790",
//         title: "2 BHK in Sector 60, Mohali",
//         location: "Sector 60,Mohali",
//         type: "2 BHK",
//         gender: "for-all",
//         price: "₹24,000",
//         features: ["Independent", "Fully Furnished", "AC"],
//         description: "This 2 BHK property is located in Sector 60, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/63.M60B790/A%20(1).jpeg?updatedAt=1754929803609" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/63.M60B790/A%20(2).jpeg?updatedAt=1754929803609" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/63.M60B790/A%20(3).jpeg?updatedAt=1754929803609" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/63.M60B790/A%20(4).jpeg?updatedAt=1754929803609" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/63.M60B790/A%20(5).jpeg?updatedAt=1754929803609" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/63.M60B790/A%20(6).jpeg?updatedAt=1754929803609" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/63.M60B790/A%20(7).jpeg?updatedAt=1754929803609" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/63.M60B790/A%20(8).jpeg?updatedAt=1754929803609" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/63.M60B790/A%20(9).jpeg?updatedAt=1754929803609" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/63.M60B790/A%20(10).jpeg?updatedAt=1754929803609" },
//         ]
//     },
//     {
//         id: 49,
//         pid: "M126J998",
//         title: "2 BHK in Sector 126, Mohali",
//         location: "Sector 126,Mohali",
//         type: "2 BHK",
//         gender: "for-all",
//         price: "₹16,000",
//         features: ["Fully Furnished", "AC", "Fridge"],
//         description: "This 2 BHK property is located in Sector 126, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/64.M126J998/A%20(1).jpeg?updatedAt=1754929817345" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/64.M126J998/A%20(2).jpeg?updatedAt=1754929817345" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/64.M126J998/A%20(3).jpeg?updatedAt=1754929817345" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/64.M126J998/A%20(4).jpeg?updatedAt=1754929817345" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/64.M126J998/A%20(5).jpeg?updatedAt=1754929817345" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/64.M126J998/A%20(6).jpeg?updatedAt=1754929817345" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/64.M126J998/A%20(7).jpeg?updatedAt=1754929817345" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/64.M126J998/A%20(8).jpeg?updatedAt=1754929817345" },
//         ]
//     },
//     {
//         id: 50,
//         pid: "M52M987",
//         title: "2 RK in Sector 52, Mohali",
//         location: "Sector 52,Mohali",
//         type: "2 RK",
//         gender: "for-all",
//         price: "₹15,000",
//         features: ["Independent", "Ownerfree", "Fully Furnished"],
//         description: "This 2 RK property is located in Sector 52, Mohali.",
//         media: [
//             { type: "text", content: "contect for photos" }
//         ]
//     },
//     {
//         id: 51,
//         pid: "M61J946",
//         title: "1 BHK in Sector 61, Mohali",
//         location: "Sector 61,Mohali",
//         type: "1 BHK",
//         gender: "for-all",
//         price: "₹16,500",
//         features: ["Fridge", "Fully Furnished"],
//         description: "This 1 BHK property is located in Sector 61, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/66.M61J946/A%20(1).jpeg?updatedAt=1754929825083" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/66.M61J946/A%20(2).jpeg?updatedAt=1754929825083" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/66.M61J946/A%20(3).jpeg?updatedAt=1754929825083" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/66.M61J946/A%20(4).jpeg?updatedAt=1754929825083" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/66.M61J946/A%20(5).jpeg?updatedAt=1754929825083" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/66.M61J946/A%20(6).jpeg?updatedAt=1754929825083" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/66.M61J946/A%20(7).jpeg?updatedAt=1754929825083" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/66.M61J946/A%20(8).jpeg?updatedAt=1754929825083" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/66.M61J946/A%20(9).jpeg?updatedAt=1754929825083" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/66.M61J946/A%20(10).jpeg?updatedAt=1754929825083" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/66.M61J946/A%20(11).jpeg?updatedAt=1754929825083" },
//         ]
//     },
//     {
//         id: 52,
//         pid: "M126B987",
//         title: "2 BHK in Sector 126, Mohali",
//         location: "Sector 126,Mohali",
//         type: "2 BHK",
//         gender: "for-all",
//         price: "₹14,800",
//         features: ["Fully Furnished", "Independent"],
//         description: "This 2 BHK property is located in Sector 126, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/67.M126B987/A%20(1).jpeg?updatedAt=1754929833053" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/67.M126B987/A%20(2).jpeg?updatedAt=1754929833053" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/67.M126B987/A%20(3).jpeg?updatedAt=1754929833053" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/67.M126B987/A%20(4).jpeg?updatedAt=1754929833053" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/67.M126B987/A%20(5).jpeg?updatedAt=1754929833053" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/67.M126B987/A%20(6).jpeg?updatedAt=1754929833053" },
//         ]
//     },
//     {
//         id: 53,
//         pid: "M59-921",
//         title: "PG in Sector 59, Mohali",
//         location: "Sector 59,Mohali",
//         type: "PG",
//         gender: "girls",
//         price: "₹6,500",
//         features: ["Fully Furnished"],
//         description: "This PG property is located in Sector 59, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/68.M59-921/A%20(1).jpeg?updatedAt=1754929839459" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/68.M59-921/A%20(2).jpeg?updatedAt=1754929839459" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/68.M59-921/A%20(3).jpeg?updatedAt=1754929839459" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/68.M59-921/A%20(4).jpeg?updatedAt=1754929839459" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/68.M59-921/A%20(5).jpeg?updatedAt=1754929839459" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/68.M59-921/A%20(6).jpeg?updatedAt=1754929839459" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/68.M59-921/A%20(7).jpeg?updatedAt=1754929839459" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/68.M59-921/A%20(8).jpeg?updatedAt=1754929839459" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/68.M59-921/A%20(9).jpeg?updatedAt=1754929839459" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/68.M59-921/A%20(10).jpeg?updatedAt=1754929839459" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/68.M59-921/A%20(11).jpeg?updatedAt=1754929839459" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/68.M59-921/A%20(12).jpeg?updatedAt=1754929839459" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/68.M59-921/A%20(13).jpeg?updatedAt=1754929839459" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/68.M59-921/A%20(14).jpeg?updatedAt=1754929839459" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/68.M59-921/A%20(15).jpeg?updatedAt=1754929839459" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/68.M59-921/A%20(16).jpeg?updatedAt=1754929839459" },

//         ]
//     },
//     {
//         id: 54,
//         pid: "MIBS828",
//         title: "3 BHK in I Block Aerocity, Mohali",
//         location: "I Block Aerocity,Mohali",
//         type: "3 BHK",
//         gender: "for-all",
//         price: "₹25,000",
//         features: ["Fully Furnished", "Owner Free"],
//         description: "This 3 BHK property is located in I Block Aerocity, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/69.MIBS828/A%20(1).jpeg?updatedAt=1754929845097" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/69.MIBS828/A%20(2).jpeg?updatedAt=1754929845097" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/69.MIBS828/A%20(3).jpeg?updatedAt=1754929845097" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/69.MIBS828/A%20(4).jpeg?updatedAt=1754929845097" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/69.MIBS828/A%20(5).jpeg?updatedAt=1754929845097" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/69.MIBS828/A%20(6).jpeg?updatedAt=1754929845097" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/69.MIBS828/A%20(7).jpeg?updatedAt=1754929845097" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/69.MIBS828/A%20(8).jpeg?updatedAt=1754929845097" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/69.MIBS828/A%20(9).jpeg?updatedAt=1754929845097" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/69.MIBS828/A%20(10).jpeg?updatedAt=1754929845097" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/69.MIBS828/A%20(11).jpeg?updatedAt=1754929845097" },
//         ]
//     },
//     {
//         id: 55,
//         pid: "M59A969",
//         title: "1 RK in Sector 59, Mohali",
//         location: "Sector 59,Mohali",
//         type: "1 RK",
//         gender: "girls",
//         price: "₹5,000",
//         features: ["Fully Furnished"],
//         description: "This 1 RK property is located in Sector 59, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/70.M59A969/A1.jpeg?updatedAt=1754929849384" },
//             { type: "video", src: "https://ik.imagekit.io/minkal/assets/70.M59A969/A2.mp4?updatedAt=1754929860758" },
//         ]
//     },
//     {
//         id: 56,
//         pid: "MCBV842",
//         title: "2 BHK in C Block Aerocity, Mohali",
//         location: "C Block Aerocity,Mohali",
//         type: "2 BHK",
//         gender: "family",
//         price: "₹21,000",
//         features: ["Unfurnished", "Independent"],
//         description: "This 2 BHK property is located in C Block Aerocity, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/71.MCBV842/A%20(1).jpeg?updatedAt=1754929852619" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/71.MCBV842/A%20(2).jpeg?updatedAt=1754929852619" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/71.MCBV842/A%20(3).jpeg?updatedAt=1754929852619" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/71.MCBV842/A%20(4).jpeg?updatedAt=1754929852619" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/71.MCBV842/A%20(5).jpeg?updatedAt=1754929852619" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/71.MCBV842/A%20(6).jpeg?updatedAt=1754929852619" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/71.MCBV842/A%20(7).jpeg?updatedAt=1754929852619" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/71.MCBV842/A%20(8).jpeg?updatedAt=1754929852619" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/71.MCBV842/A%20(9).jpeg?updatedAt=1754929852619" },
//         ]
//     },
//     {
//         id: 57,
//         pid: "M118-781",
//         title: "1 RK in Sector 118, Mohali",
//         location: "Sector 118,Mohali",
//         type: "1 RK",
//         gender: "for-all",
//         price: "₹10,000",
//         features: ["Fully Furnished", "Independent", "Owner free"],
//         description: "This 1 RK property is located in Sector 118, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/72.M118-781/A%20(1).jpg?updatedAt=1754985145799" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/72.M118-781/A%20(2).jpg?updatedAt=1754985145799" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/72.M118-781/A%20(3).jpg?updatedAt=1754985145799" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/72.M118-781/A%20(4).jpg?updatedAt=1754985145799" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/72.M118-781/A%20(5).jpg?updatedAt=1754985145799" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/72.M118-781/A%20(6).jpg?updatedAt=1754985145799" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/72.M118-781/A%20(7).jpg?updatedAt=1754985145799" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/72.M118-781/A%20(8).jpg?updatedAt=1754985145799" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/72.M118-781/A%20(9).jpg?updatedAt=1754985145799" },
//         ]
//     },
//     {
//         id: 58,
//         pid: "C37DR987",
//         title: "1 RK in Sector 37D, Chandigarh",
//         location: "Sector 37D,Chandigarh",
//         type: "1 RK",
//         gender: "girls",
//         price: "₹8,000",
//         features: ["Fully Furnished", "Independent"],
//         description: "This 1 RK property is located in Sector 37D, Chandigarh.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/73.C37DR987/A%20(1).jpeg?updatedAt=1754929731774" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/73.C37DR987/A%20(2).jpeg?updatedAt=1754929731774" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/73.C37DR987/A%20(3).jpeg?updatedAt=1754929731774" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/73.C37DR987/A%20(4).jpeg?updatedAt=1754929731774" },
//         ]
//     },
//     {
//         id: 59,
//         pid: "C23DS904",
//         title: "1 RK in Sector 23D, Chandigarh",
//         location: "Sector 23D,Chandigarh",
//         type: "1 RK",
//         gender: "for-all",
//         price: "₹13,000",
//         features: ["Fully Furnished", "Independent"],
//         description: "This 1 RK property is located in Sector 23D, Chandigarh.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/74.C23DS904/A%20(1).jpeg?updatedAt=1754929744536" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/74.C23DS904/A%20(2).jpeg?updatedAt=1754929744536" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/74.C23DS904/A%20(3).jpeg?updatedAt=1754929744536" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/74.C23DS904/A%20(4).jpeg?updatedAt=1754929744536" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/74.C23DS904/A%20(5).jpeg?updatedAt=1754929744536" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/74.C23DS904/A%20(6).jpeg?updatedAt=1754929744536" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/74.C23DS904/A%20(7).jpeg?updatedAt=1754929744536" },
//         ]
//     },
//     {
//         id: 60,
//         pid: "M70R991",
//         title: "1 RK in Sector 70, Mohali",
//         location: "Sector 70,Mohali",
//         type: "1 RK",
//         gender: "for-all",
//         price: "₹6,000",
//         features: ["Furnished", "Independent"],
//         description: "This 1 RK property is located in Sector 70, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/75.M70R991/A%20(1).jpeg?updatedAt=1754929738916" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/75.M70R991/A%20(2).jpeg?updatedAt=1754929738916" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/75.M70R991/A%20(3).jpeg?updatedAt=1754929738916" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/75.M70R991/A%20(4).jpeg?updatedAt=1754929738916" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/75.M70R991/A%20(5).jpeg?updatedAt=1754929738916" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/75.M70R991/A%20(6).jpeg?updatedAt=1754929738916" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/75.M70R991/A%20(7).jpeg?updatedAt=1754929738916" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/75.M70R991/A%20(8).jpeg?updatedAt=1754929738916" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/75.M70R991/A%20(9).jpeg?updatedAt=1754929738916" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/75.M70R991/A%20(10).jpeg?updatedAt=1754929738916" },
//         ]
//     },
//     {
//         id: 61,
//         pid: "M117S931",
//         title: "1 RK in Sector 117, Mohali",
//         location: "Sector 117,Mohali",
//         type: "1 RK",
//         gender: "for-all",
//         price: "₹11,000",
//         features: ["Furnished", "Independent"],
//         description: "This 1 RK property is located in Sector 117, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/76.M117S931/A%20(1).jpeg?updatedAt=1754929753231" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/76.M117S931/A%20(2).jpeg?updatedAt=1754929753231" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/76.M117S931/A%20(3).jpeg?updatedAt=1754929753231" },
//             { type: "video", src: "https://ik.imagekit.io/minkal/assets/76.M117S931/A%20(4).mp4?updatedAt=1754929784472" },
//         ]
//     },
//     {
//         id: 62,
//         pid: "C44CV980",
//         title: "1 BHK in Sector 44C, Chandigarh",
//         location: "Sector 44C,Chandigarh",
//         type: "1 BHK",
//         gender: "for-all",
//         price: "₹22,500",
//         features: ["Furnished", "Independent"],
//         description: "This 1 BHK property is located in Sector 44C, Chandigarh.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/77.C44CV980/A%20(1).jpeg?updatedAt=1754929752219" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/77.C44CV980/A%20(2).jpeg?updatedAt=1754929752219" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/77.C44CV980/A%20(3).jpeg?updatedAt=1754929752219" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/77.C44CV980/A%20(4).jpeg?updatedAt=1754929752219" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/77.C44CV980/A%20(5).jpeg?updatedAt=1754929752219" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/77.C44CV980/A%20(6).jpeg?updatedAt=1754929752219" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/77.C44CV980/A%20(7).jpeg?updatedAt=1754929752219" },
//         ]
//     },
//     {
//         id: 63,
//         pid: "C45AH814",
//         title: "1 BHK in Sector 45A, Chandigarh",
//         location: "Sector 45A,Chandigarh",
//         type: "1 BHK",
//         gender: "for-all",
//         price: "₹20,000",
//         features: ["Furnished", "Independent"],
//         description: "This 1 BHK property is located in Sector 45A, Chandigarh.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/78.C45AH814/A%20(1).jpeg?updatedAt=1754929758212" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/78.C45AH814/A%20(2).jpeg?updatedAt=1754929758212" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/78.C45AH814/A%20(3).jpeg?updatedAt=1754929758212" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/78.C45AH814/A%20(4).jpeg?updatedAt=1754929758212" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/78.C45AH814/A%20(5).jpeg?updatedAt=1754929758212" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/78.C45AH814/A%20(6).jpeg?updatedAt=1754929758212" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/78.C45AH814/A%20(7).jpeg?updatedAt=1754929758212" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/78.C45AH814/A%20(8).jpeg?updatedAt=1754929758212" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/78.C45AH814/A%20(9).jpeg?updatedAt=1754929758212" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/78.C45AH814/A%20(10).jpeg?updatedAt=1754929758212" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/78.C45AH814/A%20(11).jpeg?updatedAt=1754929758212" },
//         ]
//     },
//     {
//         id: 64,
//         pid: "C41BR805",
//         title: "2 RK in Sector 41B, Chandigarh",
//         location: "Sector 41B,Chandigarh",
//         type: "2 RK",
//         gender: "for-all",
//         price: "₹22,000",
//         features: ["Furnished", "Independent", "AC"],
//         description: "This 2 RK property is located in Sector 41B, Chandigarh.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/79.C41BR805/A%20(1).jpeg?updatedAt=1754985204122" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/79.C41BR805/A%20(2).jpeg?updatedAt=1754985204122" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/79.C41BR805/A%20(3).jpeg?updatedAt=1754985204122" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/79.C41BR805/A%20(4).jpeg?updatedAt=1754985204122" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/79.C41BR805/A%20(5).jpeg?updatedAt=1754985204122" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/79.C41BR805/A%20(6).jpeg?updatedAt=1754985204122" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/79.C41BR805/A%20(7).jpeg?updatedAt=1754985204122" },
//         ]
//     },
//     {
//         id: 65,
//         pid: "M63J985",
//         title: "2 RK in Sector 63, Mohali",
//         location: "Sector 63,Mohali",
//         type: "2 RK",
//         gender: "girls",
//         price: "₹12,000",
//         features: ["Furnished", "Independent"],
//         description: "This 2 RK property is located in Sector 63, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/80.M63J985/A%20(1).jpeg?updatedAt=1755032241447" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/80.M63J985/A%20(2).jpeg?updatedAt=1755032241447" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/80.M63J985/A%20(3).jpeg?updatedAt=1755032241447" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/80.M63J985/A%20(4).jpeg?updatedAt=1755032241447" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/80.M63J985/A%20(5).jpeg?updatedAt=1755032241447" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/80.M63J985/A%20(6).jpeg?updatedAt=1755032241447" },
//         ]
//     },
//     {
//         id: 66,
//         pid: "M126S965",
//         title: "2 BHK in Sector 126, Mohali",
//         location: "Sector 126,Mohali",
//         type: "2 BHK",
//         gender: "for-all",
//         price: "₹18,000",
//         features: ["Furnished", "Independent", "AC"],
//         description: "This 2 BHK property is located in Sector 126, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/81.M126S965/A%20(1).jpeg?updatedAt=1754985199282" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/81.M126S965/A%20(2).jpeg?updatedAt=1754985199282" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/81.M126S965/A%20(3).jpeg?updatedAt=1754985199282" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/81.M126S965/A%20(4).jpeg?updatedAt=1754985199282" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/81.M126S965/A%20(5).jpeg?updatedAt=1754985199282" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/81.M126S965/A%20(6).jpeg?updatedAt=1754985199282" },
//         ]
//     },
//     {
//         id: 67,
//         pid: "M126S2965",
//         title: "1 RK in Sector 126, Mohali",
//         location: "Sector 126,Mohali",
//         type: "1 RK",
//         gender: "for-all",
//         price: "₹11,000",
//         features: ["Furnished", "Independent", "AC"],
//         description: "This 1 RK property is located in Sector 126, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/82.M126S2965/A%20(1).jpeg?updatedAt=1754985199879" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/82.M126S2965/A%20(2).jpeg?updatedAt=1754985199879" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/82.M126S2965/A%20(3).jpeg?updatedAt=1754985199879" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/82.M126S2965/A%20(4).jpeg?updatedAt=1754985199879" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/82.M126S2965/A%20(5).jpeg?updatedAt=1754985199879" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/82.M126S2965/A%20(6).jpeg?updatedAt=1754985199879" },
//         ]
//     },
//     {
//         id: 68,
//         pid: "M117H998",
//         title: "2 BHK in Sector 117, Mohali",
//         location: "Sector 117,Mohali",
//         type: "2 BHK",
//         gender: "for-all",
//         price: "₹22,000",
//         features: ["Furnished", "Independent", "AC", "Newly Built"],
//         description: "This 2 BHK property is located in Sector 117, Mohali.",
//         media: [
//             { type: "text", content: "contect for photos" }
//         ]
//     },
//     {
//         id: 69,
//         pid: "M126H991",
//         title: "1 RK in Sector 126, Mohali",
//         location: "Sector 126,Mohali",
//         type: "1 RK",
//         gender: "for-all",
//         price: "₹12,000",
//         features: ["Fully Furnished", "Independent", "Owner free", "AC"],
//         description: "This 1 RK property is located in Sector 126, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/84.M126H991/A%20(1).jpg?updatedAt=1755032100247" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/84.M126H991/A%20(2).jpg?updatedAt=1755032100247" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/84.M126H991/A%20(3).jpg?updatedAt=1755032100247" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/84.M126H991/A%20(4).jpg?updatedAt=1755032100247" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/84.M126H991/A%20(5).jpg?updatedAt=1755032100247" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/84.M126H991/A%20(6).jpg?updatedAt=1755032100247" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/84.M126H991/A%20(7).jpg?updatedAt=1755032100247" },
//         ]
//     },
//     {
//         id: 70,
//         pid: "C33B-799",
//         title: "PG in Sector 33B, Chandigarh",
//         location: "Sector 33B,Chandigarh",
//         type: "PG",
//         gender: "boys",
//         price: "₹15,000",
//         features: ["With Food", "AC", "Newly Built"],
//         description: "This PG property is located in Sector 33B, Chandigarh.",
//         media: [
//             { type: "text", content: "contect for photos" }
//         ]
//     },
//     {
//         id: 71,
//         pid: "M126A988",
//         title: "Room in Sector 126, Mohali",
//         location: "Sector 126,Mohali",
//         type: "Room",
//         gender: "for-all",
//         price: "₹7,500",
//         features: ["Furnished", "AC"],
//         description: "This Room property is located in Sector 126, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/86.M126A988/A%20(1).jpeg?updatedAt=1755032102232" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/86.M126A988/A%20(2).jpeg?updatedAt=1755032102232" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/86.M126A988/A%20(3).jpeg?updatedAt=1755032102232" },
//         ]
//     },
//     {
//         id: 72,
//         pid: "M64K896",
//         title: "PG in Sector 64, Mohali",
//         location: "Sector 64,Mohali",
//         type: "PG",
//         gender: "girls",
//         price: "₹6,000",
//         features: ["Furnished", "AC", "Kitchen"],
//         description: "This PG property is located in Sector 64, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/87.M64K896/A%20(1).jpeg?updatedAt=1755032107709" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/87.M64K896/A%20(2).jpeg?updatedAt=1755032107709" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/87.M64K896/A%20(3).jpeg?updatedAt=1755032107709" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/87.M64K896/A%20(4).jpeg?updatedAt=1755032107709" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/87.M64K896/A%20(5).jpeg?updatedAt=1755032107709" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/87.M64K896/A%20(6).jpeg?updatedAt=1755032107709" },
//         ]
//     },
//     {
//         id: 73,
//         pid: "MAB1S628",
//         title: "1 BHK in Aerocity Block I, Mohali",
//         location: "Aerocity Block I,Mohali",
//         type: "1 BHK",
//         gender: "for-all",
//         price: "₹14,000",
//         features: ["Semi-Furnished", "Independent"],
//         description: "This 1 BHK property is located in Aerocity Block I, Mohali.",
//         media: [
//             { type: "text", content: "contect for photos" }
//         ]
//     },
//     {
//         id: 74,
//         pid: "M114K959",
//         title: "2 BHK in Sector 114, Mohali",
//         location: "Sector 114,Mohali",
//         type: "2 BHK",
//         gender: "for-all",
//         price: "₹25,000",
//         features: ["Furnished", "Independent"],
//         description: "This 2 BHK property is located in Sector 114, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/89.M114K959/A%20(1).jpeg?updatedAt=1755032111214" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/89.M114K959/A%20(2).jpeg?updatedAt=1755032111214" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/89.M114K959/A%20(3).jpeg?updatedAt=1755032111214" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/89.M114K959/A%20(4).jpeg?updatedAt=1755032111214" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/89.M114K959/A%20(5).jpeg?updatedAt=1755032111214" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/89.M114K959/A%20(6).jpeg?updatedAt=1755032111214" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/89.M114K959/A%20(7).jpeg?updatedAt=1755032111214" },
//         ]
//     },
//     {
//         id: 75,
//         pid: "M126K628",
//         title: "1 RK in Sector 126, Mohali",
//         location: "Sector 126,Mohali",
//         type: "1 RK",
//         gender: "boys",
//         price: "₹8,500",
//         features: ["Furnished", "Independent", "Fridge"],
//         description: "This 1 RK property is located in Sector 126, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/90.M126K628/A%20(1).jpeg?updatedAt=1755032078161" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/90.M126K628/A%20(2).jpeg?updatedAt=1755032078161" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/90.M126K628/A%20(3).jpeg?updatedAt=1755032078161" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/90.M126K628/A%20(4).jpeg?updatedAt=1755032078161" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/90.M126K628/A%20(5).jpeg?updatedAt=1755032078161" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/90.M126K628/A%20(6).jpeg?updatedAt=1755032078161" },
//         ]
//     },
//     {
//         id: 76,
//         pid: "C1K977",
//         title: "1 RK in Sector 1, Chandigarh",
//         location: "Sector 1,Chandigarh",
//         type: "1 RK",
//         gender: "for-all",
//         price: "₹12,000",
//         features: ["Furnished", "Independent", "AC", "Newly Built"],
//         description: "This 1 RK property is located in Sector 1, Chandigarh.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/91.C1K977/A%20(1).jpg?updatedAt=1755032077885" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/91.C1K977/A%20(2).jpg?updatedAt=1755032077885" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/91.C1K977/A%20(3).jpg?updatedAt=1755032077885" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/91.C1K977/A%20(4).jpg?updatedAt=1755032077885" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/91.C1K977/A%20(5).jpg?updatedAt=1755032077885" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/91.C1K977/A%20(6).jpg?updatedAt=1755032077885" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/91.C1K977/A%20(7).jpg?updatedAt=1755032077885" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/91.C1K977/A%20(8).jpg?updatedAt=1755032077885" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/91.C1K977/A%20(9).jpg?updatedAt=1755032077885" },
//         ]
//     },
//     {
//         id: 77,
//         pid: "M89R987",
//         title: "2 BHK in Sector 89, Mohali",
//         location: "Sector 89,Mohali",
//         type: "2 BHK",
//         gender: "for-all",
//         price: "₹23,000",
//         features: ["Furnished", "Independent", "AC", "Newly Built"],
//         description: "This 2 BHK property is located in Sector 89, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/92.M89R987/A%20(1).jpeg?updatedAt=1755032083522" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/92.M89R987/A%20(2).jpeg?updatedAt=1755032083522" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/92.M89R987/A%20(3).jpeg?updatedAt=1755032083522" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/92.M89R987/A%20(4).jpeg?updatedAt=1755032083522" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/92.M89R987/A%20(5).jpeg?updatedAt=1755032083522" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/92.M89R987/A%20(6).jpeg?updatedAt=1755032083522" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/92.M89R987/A%20(7).jpeg?updatedAt=1755032083522" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/92.M89R987/A%20(8).jpeg?updatedAt=1755032083522" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/92.M89R987/A%20(9).jpeg?updatedAt=1755032083522" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/92.M89R987/A%20(10).jpeg?updatedAt=1755032083522" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/92.M89R987/A%20(11).jpeg?updatedAt=1755032083522" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/92.M89R987/A%20(12).jpeg?updatedAt=1755032083522" },
//         ]
//     },
//     {
//         id: 78,
//         pid: "M63J988",
//         title: "2 RK in Sector 63, Mohali",
//         location: "Sector 63,Mohali",
//         type: "2 RK",
//         gender: "girls",
//         price: "₹20,000",
//         features: ["Fully Furnished"],
//         description: "This 2 RK property is located in Sector 63, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/93.M63J988/A%20(1).jpeg?updatedAt=1755032087800" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/93.M63J988/A%20(2).jpeg?updatedAt=1755032087800" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/93.M63J988/A%20(3).jpeg?updatedAt=1755032087800" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/93.M63J988/A%20(4).jpeg?updatedAt=1755032087800" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/93.M63J988/A%20(5).jpeg?updatedAt=1755032087800" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/93.M63J988/A%20(6).jpeg?updatedAt=1755032087800" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/93.M63J988/A%20(7).jpeg?updatedAt=1755032087800" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/93.M63J988/A%20(8).jpeg?updatedAt=1755032087800" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/93.M63J988/A%20(9).jpeg?updatedAt=1755032087800" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/93.M63J988/A%20(10).jpeg?updatedAt=1755032087800" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/93.M63J988/A%20(11).jpeg?updatedAt=1755032087800" },
//         ]
//     },
//     {
//         id: 79,
//         pid: "C45AP843",
//         title: "2 BHK in Sector 45A, Chandigarh",
//         location: "Sector 45A,Chandigarh",
//         type: "2 BHK",
//         gender: "for-all",
//         price: "₹20,000",
//         features: ["Unfurnished", "Independent"],
//         description: "This 2 BHK property is located in Sector 45A, Chandigarh.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/94.C45AP843/A%20(1).jpg?updatedAt=1755032092759" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/94.C45AP843/A%20(2).jpg?updatedAt=1755032092759" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/94.C45AP843/A%20(3).jpg?updatedAt=1755032092759" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/94.C45AP843/A%20(4).jpg?updatedAt=1755032092759" },
//         ]
//     },
//     {
//         id: 80,
//         pid: "C20AV988",
//         title: "2 Room in Sector 20A, Chandigarh",
//         location: "Sector 20A,Chandigarh",
//         type: "2 Room",
//         gender: "for-all",
//         price: "₹13,000",
//         features: ["Furnished"],
//         description: "This 2 Room property is located in Sector 20A, Chandigarh.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/95.C20AV988/A%20(1).jpg?updatedAt=1755032095596" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/95.C20AV988/A%20(2).jpg?updatedAt=1755032095596" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/95.C20AV988/A%20(3).jpg?updatedAt=1755032095596" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/95.C20AV988/A%20(4).jpg?updatedAt=1755032095596" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/95.C20AV988/A%20(5).jpg?updatedAt=1755032095596" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/95.C20AV988/A%20(6).jpg?updatedAt=1755032095596" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/95.C20AV988/A%20(7).jpg?updatedAt=1755032095596" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/95.C20AV988/A%20(8).jpg?updatedAt=1755032095596" },

//         ]
//     },
//     {
//         id:81,
//         pid: "M126A971",
//         title: "2 BHK in Sector 126, Mohali",
//         location: "Sector 126,Mohali",
//         type: "2 BHK",
//         gender: "for-all",
//         price: "₹17,500",
//         features: ["Owner Free", "Independent", "AC", "Fully Furnished"],
//         description: "This 2 BHK property is located in Sector 126, Mohali.",
//         media: [
//             { type: "text", content: "contact for photos" },
//              ]
//     },
//     {
//         id: 82,
//         pid: "M63J842",
//         title: "Room in Sector 63, Mohali",
//         location: "Sector 63,Mohali",
//         type: "Room",
//         gender: "for-all",
//         price: "₹7,800",
//         features: ["Independent", "Livin Couple Allowed"],
//         description: "This Room property is located in Sector 63, Mohali.",
//         media: [
//             { type: "text", content: "contact for photos" },
//         ]
//     },
//     {
//         id: 83,
//         pid: "M111G978",
//         title: "1 RK in Sector 111, Mohali",
//         location: "Sector 111,Mohali",
//         type: "1 RK",
//         gender: "for-all",
//         price: "₹7,000",
//         features: ["Fully Furnished"],
//         description: "This 1 RK property is located in Sector 111, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/96.M111G978/A%20(1).jpg?updatedAt=1757826654260" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/96.M111G978/A%20(2).jpg?updatedAt=1757826654260" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/96.M111G978/A%20(3).jpg?updatedAt=1757826654260" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/96.M111G978/A%20(4).jpg?updatedAt=1757826654260" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/96.M111G978/A%20(5).jpg?updatedAt=1757826654260" }
//         ]
//     },
//     {
//         id: 84,
//         pid: "",
//         title: "1 RK in Sector 60, Mohali",
//         location: "Sector 60,Mohali",
//         type: "1 RK",
//         gender: "girls",
//         price: "₹4,500",
//         features: ["Sharing"],
//         description: "This 1 RK property is located in Sector 60, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/81.99/A%20(1).jpeg?updatedAt=1754985199282" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/81.99/A%20(2).jpeg?updatedAt=1754985199282" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/81.99/A%20(3).jpeg?updatedAt=1754985199282" }
//         ]
//     },
//     {
//         id: 85,
//         pid: "M89M798",
//         title: "1 RK in Sector 89, Mohali",
//         location: "Sector 89,Mohali",
//         type: "1 RK",
//         gender: "boys",
//         price: "₹9,000",
//         features: ["Independent", "RO", "Geyser", "Fully Furnished"],
//         description: "This 1 RK property is located in Sector 89, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/97.M89M798/A%20(1).jpg?updatedAt=1757826655138" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/97.M89M798/A%20(2).jpg?updatedAt=1757826655138" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/97.M89M798/A%20(3).jpg?updatedAt=1757826655138" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/97.M89M798/A%20(4).jpg?updatedAt=1757826655138" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/97.M89M798/A%20(5).jpg?updatedAt=1757826655138" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/97.M89M798/A%20(6).jpg?updatedAt=1757826655138" },
      
//         ]
//     },
//     {
//         id: 86,
//         pid: "M118N798",
//         title: "1 RK in Sector 118, Mohali",
//         location: "Sector 118,Mohali",
//         type: "1 RK",
//         gender: "for-all",
//         price: "₹8,400",
//         features: ["Independent", "RO", "AC", "Fridge", "Fully Furnished"],
//         description: "This 1 RK property is located in Sector 118, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/98.M118N798/A%20(1).jpg?updatedAt=1757826659825" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/98.M118N798/A%20(2).jpg?updatedAt=1757826659825" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/98.M118N798/A%20(3).jpg?updatedAt=1757826659825" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/98.M118N798/A%20(4).jpg?updatedAt=1757826659825" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/98.M118N798/A%20(5).jpg?updatedAt=1757826659825" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/98.M118N798/A%20(6).jpg?updatedAt=1757826659825" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/98.M118N798/A%20(7).jpg?updatedAt=1757826659825" },
    
//         ]
//     },
//     {
//         id: 87,
//         pid: "C44O998",
//         title: "2 BHK in Sector 44B, Chandigarh",
//         location: "Sector 44B,Chandigarh",
//         type: "2 BHK",
//         gender: "for-all",
//         price: "₹32,000",
//         features: ["Independent", "Fridge", "Fully Furnished"],
//         description: "This 2 BHK property is located in Sector 44B, Chandigarh.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/99.C44O998/A%20(1).jpg?updatedAt=1757826662005" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/99.C44O998/A%20(2).jpg?updatedAt=1757826662005" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/99.C44O998/A%20(3).jpg?updatedAt=1757826662005" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/99.C44O998/A%20(4).jpg?updatedAt=1757826662005" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/99.C44O998/A%20(5).jpg?updatedAt=1757826662005" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/99.C44O998/A%20(6).jpg?updatedAt=1757826662005" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/99.C44O998/A%20(7).jpg?updatedAt=1757826662005" },

//         ]
//     },
//     {
//         id: 88,
//         pid: "",
//         title: "3 BHK in Balongi, Mohali",
//         location: "Balongi,Mohali",
//         type: "3 BHK",
//         gender: "for-all",
//         price: "₹20,000",
//         features: [],
//         description: "This 3 BHK property is located in Balongi, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/85.M_BG_9878/A%20(1).jpeg?updatedAt=1754985199282" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/85.M_BG_9878/A%20(2).jpeg?updatedAt=1754985199282" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/85.M_BG_9878/A%20(3).jpeg?updatedAt=1754985199282" }
//         ]
//     },
//     {
//         id: 89,
//         pid: "",
//         title: "2 RK in Sector 11A, Chandigarh",
//         location: "Sector 11A,Chandigarh",
//         type: "2 RK",
//         gender: "for-all",
//         price: "₹16,000",
//         features: [],
//         description: "This 2 RK property is located in Sector 11A, Chandigarh.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/86.C11A_8054/A%20(1).jpeg?updatedAt=1754985199282" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/86.C11A_8054/A%20(2).jpeg?updatedAt=1754985199282" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/86.C11A_8054/A%20(3).jpeg?updatedAt=1754985199282" }
//         ]
//     },
//     {
//         id: 90,
//         pid: "",
//         title: "1 RK in Sector 119, Mohali",
//         location: "Sector 119,Mohali",
//         type: "1 RK",
//         gender: "for-all",
//         price: "₹5,500",
//         features: [],
//         description: "This 1 RK property is located in Sector 119, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/87.M119_8872/A%20(1).jpeg?updatedAt=1754985199282" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/87.M119_8872/A%20(2).jpeg?updatedAt=1754985199282" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/87.M119_8872/A%20(3).jpeg?updatedAt=1754985199282" }
//         ]
//     },
//     {
//         id: 91,
//         pid: "",
//         title: "1 RK in Sector 52, Mohali",
//         location: "Sector 52,Mohali",
//         type: "1 RK",
//         gender: "boys",
//         price: "₹6,000",
//         features: ["Sharing"],
//         description: "This 1 RK property is located in Sector 52, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/88.M52_8284/A%20(1).jpeg?updatedAt=1754985199282" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/88.M52_8284/A%20(2).jpeg?updatedAt=1754985199282" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/88.M52_8284/A%20(3).jpeg?updatedAt=1754985199282" }
//         ]
//     },
//     {
//         id: 92,
//         pid: "M126M842",
//         title: "1 RK in Sector 126, Mohali",
//         location: "Sector 126,Mohali",
//         type: "1 RK",
//         gender: "for-all",
//         price: "₹7,500",
//         features: ["Independent", "RO", "AC", "Fridge", "Fully Furnished"],
//         description: "This 1 RK property is located in Sector 126, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/100.M126M842/A%20(1).jpg?updatedAt=1757826665826" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/100.M126M842/A%20(2).jpg?updatedAt=1757826665826" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/100.M126M842/A%20(3).jpg?updatedAt=1757826665826" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/100.M126M842/A%20(4).jpg?updatedAt=1757826665826" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/100.M126M842/A%20(5).jpg?updatedAt=1757826665826" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/100.M126M842/A%20(6).jpg?updatedAt=1757826665826" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/100.M126M842/A%20(7).jpg?updatedAt=1757826665826" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/100.M126M842/A%20(8).jpg?updatedAt=1757826665826" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/100.M126M842/A%20(9).jpg?updatedAt=1757826665826" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/100.M126M842/A%20(10).jpg?updatedAt=1757826665826" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/100.M126M842/A%20(11).jpg?updatedAt=1757826665826" },
//         ]
//     },
//     {
//         id: 93,
//         pid: "M116S931",
//         title: "2 BHK in Sector 116, Mohali",
//         location: "Sector 116,Mohali",
//         type: "2 BHK",
//         gender: "family",
//         price: "₹16,000",
//         features: ["Ground Floor", "Semi-furnished"],
//         description: "This 2 BHK property is located in Sector 116, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/101.M116S931/A%20(1).jpg?updatedAt=1757826673736" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/101.M116S931/A%20(2).jpg?updatedAt=1757826673736" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/101.M116S931/A%20(3).jpg?updatedAt=1757826673736" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/101.M116S931/A%20(4).jpg?updatedAt=1757826673736" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/101.M116S931/A%20(5).jpg?updatedAt=1757826673736" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/101.M116S931/A%20(6).jpg?updatedAt=1757826673736" },

//         ]
//     },
//     {
//         id: 94,
//         pid: "M61R991",
//         title: "1 RK in Sector 61, Mohali",
//         location: "Sector 61,Mohali",
//         type: "1 RK",
//         gender: "girls",
//         price: "₹11,000",
//         features: ["Ground Floor", "Fully Furnished"],
//         description: "This 1 RK property is located in Sector 61, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/102.M61R991/A%20(1).jpg?updatedAt=1757826675931" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/102.M61R991/A%20(2).jpg?updatedAt=1757826675931" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/102.M61R991/A%20(3).jpg?updatedAt=1757826675931" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/102.M61R991/A%20(4).jpg?updatedAt=1757826675931" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/102.M61R991/A%20(5).jpg?updatedAt=1757826675931" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/102.M61R991/A%20(6).jpg?updatedAt=1757826675931" },
//         ]
//     },
//     {
//         id: 95,
//         pid: "C45A734",
//         title: "2 BHK in Sector 45A, Chandigarh",
//         location: "Sector 45A,Chandigarh",
//         type: "2 BHK",
//         gender: "for-all",
//         price: "₹30,000",
//         features: ["First Floor", "Independent", "Semi-Furnished"],
//         description: "This 2 BHK property is located in Sector 45A, Chandigarh.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/103.C45A734/A%20(1).jpg?updatedAt=1757826641515" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/103.C45A734/A%20(2).jpg?updatedAt=1757826641515" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/103.C45A734/A%20(3).jpg?updatedAt=1757826641515" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/103.C45A734/A%20(4).jpg?updatedAt=1757826641515" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/103.C45A734/A%20(5).jpg?updatedAt=1757826641515" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/103.C45A734/A%20(6).jpg?updatedAt=1757826641515" },

//         ]
//     },
//     {
//         id: 96,
//         pid: "C44N870",
//         title: "2 BHK in Sector 44D, Chandigarh",
//         location: "Sector 44D,Chandigarh",
//         type: "2 BHK",
//         gender: "for-all",
//         price: "₹25,000",
//         features: ["AC", "Fully Furnished", "Fridge"],
//         description: "This 2 BHK property is located in Sector 44D, Chandigarh.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/104.C44N870/A%20(1).jpg?updatedAt=1757826641866" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/104.C44N870/A%20(2).jpg?updatedAt=1757826641866" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/104.C44N870/A%20(3).jpg?updatedAt=1757826641866" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/104.C44N870/A%20(4).jpg?updatedAt=1757826641866" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/104.C44N870/A%20(5).jpg?updatedAt=1757826641866" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/104.C44N870/A%20(6).jpg?updatedAt=1757826641866" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/104.C44N870/A%20(7).jpg?updatedAt=1757826641866" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/104.C44N870/A%20(8).jpg?updatedAt=1757826641866" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/104.C44N870/A%20(9).jpg?updatedAt=1757826641866" },
//         ]
//     },
//     {
//         id: 97,
//         pid: "C15D628",
//         title: "1 RK in Sector 15A, Chandigarh",
//         location: "Sector 15A,Chandigarh",
//         type: "1 RK",
//         gender: "for-all",
//         price: "₹14,000",
//         features: ["AC", "Fully Furnished", "Independent"],
//         description: "This 1 RK property is located in Sector 15A, Chandigarh.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/105.C15D628/A%20(1).jpg?updatedAt=1757826648152" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/105.C15D628/A%20(2).jpg?updatedAt=1757826648152" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/105.C15D628/A%20(3).jpg?updatedAt=1757826648152" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/105.C15D628/A%20(4).jpg?updatedAt=1757826648152" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/105.C15D628/A%20(5).jpg?updatedAt=1757826648152" },
//         ]
//     },
//     {
//         id: 98,
//         pid: "",
//         title: "1 RK in Sector 55, Chandigarh",
//         location: "Sector 55,Chandigarh",
//         type: "1 RK",
//         gender: "boys",
//         price: "₹5,500",
//         features: ["Sharing"],
//         description: "This 1 RK property is located in Sector 55, Chandigarh.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/95.C55_9501/A%20(1).jpeg?updatedAt=1754985199282" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/95.C55_9501/A%20(2).jpeg?updatedAt=1754985199282" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/95.C55_9501/A%20(3).jpeg?updatedAt=1754985199282" }
//         ]
//     },
//     {
//         id: 99,
//         pid: "",
//         title: "2 BHK in Sector 20A,Chandigarh",
//         location: "Sector 20A, Chandigarh",
//         type: "2 BHK",
//         gender: "family",
//         price: "₹21,000",
//         features: ["Ground floor", "Unfurnished"],
//         description: "This 2 BHK property is located in Sector 20A, Chandigarh.",
//         media: []
//     },
//     {
//         id: 100,
//         pid: "C50S950",
//         title: "1 RK in Sector 50, Chandigarh",
//         location: "Sector 50,Chandigarh",
//         type: "1 RK",
//         gender: "for-all",
//         price: "₹12,500",
//         features: ["Fully Furnished", "Independent", "AC", "Fridge"],
//         description: "This 1 RK property is located in Sector 50, Chandigarh.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/106.C50S950/A%20(1).jpg?updatedAt=1757826727265" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/106.C50S950/A%20(2).jpg?updatedAt=1757826727265" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/106.C50S950/A%20(3).jpg?updatedAt=1757826727265" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/106.C50S950/A%20(4).jpg?updatedAt=1757826727265" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/106.C50S950/A%20(5).jpg?updatedAt=1757826727265" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/106.C50S950/A%20(6).jpg?updatedAt=1757826727265" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/106.C50S950/A%20(7).jpg?updatedAt=1757826727265" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/106.C50S950/A%20(8).jpg?updatedAt=1757826727265" },
//         ]
//     },
//     {
//         id: 101,
//         pid: "M61O998",
//         title: "2 BHK in Sector 61, Mohali",
//         location: "Sector 61,Mohali",
//         type: "2 BHK",
//         gender: "for-all",
//         price: "₹23,000",
//         features: ["Fully Furnished", "Independent", "AC", "Geyser"],
//         description: "This 2 BHK property is located in Sector 61, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/107.M61O998/A%20(1).jpg?updatedAt=1757826731802" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/107.M61O998/A%20(2).jpg?updatedAt=1757826731802" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/107.M61O998/A%20(3).jpg?updatedAt=1757826731802" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/107.M61O998/A%20(4).jpg?updatedAt=1757826731802" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/107.M61O998/A%20(5).jpg?updatedAt=1757826731802" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/107.M61O998/A%20(6).jpg?updatedAt=1757826731802" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/107.M61O998/A%20(7).jpg?updatedAt=1757826731802" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/107.M61O998/A%20(8).jpg?updatedAt=1757826731802" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/107.M61O998/A%20(9).jpg?updatedAt=1757826731802" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/107.M61O998/A%20(10).jpg?updatedAt=1757826731802" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/107.M61O998/A%20(11).jpg?updatedAt=1757826731802" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/107.M61O998/A%20(12).jpg?updatedAt=1757826731802" },
   
//         ]
//     },
//     {
//         id: 102,
//         pid: "",
//         title: "Room in Sector 21D, Chandigarh",
//         location: "Sector 21D,Chandigarh",
//         type: "Room",
//         gender: "boys",
//         price: "₹9,000",
//         features: [],
//         description: "This Room property is located in Sector 21D, Chandigarh.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/99.C21D_8360/A%20(1).jpeg?updatedAt=1754985199282" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/99.C21D_8360/A%20(2).jpeg?updatedAt=1754985199282" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/99.C21D_8360/A%20(3).jpeg?updatedAt=1754985199282" }
//         ]
//     },
//     {
//         id: 103,
//         pid: "",
//         title: "1 RK in Sector 115, Mohali",
//         location: "Sector 115,Mohali",
//         type: "1 RK",
//         gender: "for-all",
//         price: "₹10,000",
//         features: [],
//         description: "This 1 RK property is located in Sector 115, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/100.M115_6239/A%20(1).jpeg?updatedAt=1754985199282" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/100.M115_6239/A%20(2).jpeg?updatedAt=1754985199282" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/100.M115_6239/A%20(3).jpeg?updatedAt=1754985199282" }
//         ]
//     },
//     {
//         id: 104,
//         pid: "M126S987",
//         title: "2 BHK in Sector 126, Mohali",
//         location: "Sector 126,Mohali",
//         type: "2 BHK",
//         gender: "for-all",
//         price: "₹20,000",
//         features: ["Fully Furnished", "Independent", "AC", "Fridge", "Geyser"],
//         description: "This 2 BHK property is located in Sector 126, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/108.M126S987/A%20(1).jpg?updatedAt=1757826737594" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/108.M126S987/A%20(2).jpg?updatedAt=1757826737594" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/108.M126S987/A%20(3).jpg?updatedAt=1757826737594" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/108.M126S987/A%20(4).jpg?updatedAt=1757826737594" },

//         ]
//     },
//     {
//         id: 105,
//         pid: "",
//         title: "3 BHK in Sector 114, Mohali",
//         location: "Sector 114,Mohali",
//         type: "3 BHK",
//         gender: "for-all",
//         price: "₹20,000",
//         features: ["Semi-Furnished", "Independent", "First Floor"],
//         description: "This 3 BHK property is located in Sector 114, Mohali.",
//         media: []
//     },
//     {
//         id: 106,
//         pid: "C35H988",
//         title: "PG in Sector 35A, Chandigarh",
//         location: "Sector 35A,Chandigarh",
//         type: "PG",
//         gender: "for-all",
//         price: "₹12,000",
//         features: [],
//         description: "This PG property is located in Sector 35A, Chandigarh.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/109.C35H988/A%20(1).jpg?updatedAt=1757826738834" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/109.C35H988/A%20(2).jpg?updatedAt=1757826738834" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/109.C35H988/A%20(3).jpg?updatedAt=1757826738834" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/109.C35H988/A%20(4).jpg?updatedAt=1757826738834" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/109.C35H988/A%20(5).jpg?updatedAt=1757826738834" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/109.C35H988/A%20(6).jpg?updatedAt=1757826738834" },

//         ]
//     },
//     {
//         id: 107,
//         pid: "M115R600",
//         title: "3 BHK in Sector 115, Mohali",
//         location: "Sector 115,Mohali",
//         type: "3 BHK",
//         gender: "for-all",
//         price: "₹23,000",
//         features: [],
//         description: "This 3 BHK property is located in Sector 115, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/110.M115R600/A%20(1).jpg?updatedAt=1757826743740" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/110.M115R600/A%20(2).jpg?updatedAt=1757826743740" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/110.M115R600/A%20(3).jpg?updatedAt=1757826743740" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/110.M115R600/A%20(4).jpg?updatedAt=1757826743740" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/110.M115R600/A%20(5).jpg?updatedAt=1757826743740" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/110.M115R600/A%20(6).jpg?updatedAt=1757826743740" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/110.M115R600/A%20(7).jpg?updatedAt=1757826743740" },

//         ]
//     },
//     {
//         id: 108,
//         pid: "",
//         title: "1 RK in Sector 118, Mohali",
//         location: "Sector 118,Mohali",
//         type: "1 RK",
//         gender: "for-all",
//         price: "₹11,000",
//         features: [],
//         description: "This 1 RK property is located in Sector 118, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/105.M118_7814/A%20(1).jpeg?updatedAt=1754985199282" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/105.M118_7814/A%20(2).jpeg?updatedAt=1754985199282" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/105.M118_7814/A%20(3).jpeg?updatedAt=1754985199282" }
//         ]
//     },
//     {
//         id: 109,
//         pid: "",
//         title: "Room in Sector 57, Mohali",
//         location: "Sector 57,Mohali",
//         type: "Room",
//         gender: "boys",
//         price: "₹12,000",
//         features: [],
//         description: "This Room property is located in Sector 57, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/106.M57_9877/A%20(1).jpeg?updatedAt=1754985199282" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/106.M57_9877/A%20(2).jpeg?updatedAt=1754985199282" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/106.M57_9877/A%20(3).jpeg?updatedAt=1754985199282" }
//         ]
//     },
//     {
//         id: 110,
//         pid: "M126A987",
//         title: "1 RK in Sector 126, Mohali",
//         location: "Sector 126,Mohali",
//         type: "1 RK",
//         gender: "for-all",
//         price: "₹14,000",
//         features: [],
//         description: "This 1 RK property is located in Sector 126, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/111.M126A987/A%20(1).jpg?updatedAt=1757826744789" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/111.M126A987/A%20(2).jpg?updatedAt=1757826744789" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/111.M126A987/A%20(3).jpg?updatedAt=1757826744789" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/111.M126A987/A%20(4).jpg?updatedAt=1757826744789" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/111.M126A987/A%20(5).jpg?updatedAt=1757826744789" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/111.M126A987/A%20(6).jpg?updatedAt=1757826744789" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/111.M126A987/A%20(7).jpg?updatedAt=1757826744789" },

//         ]
//     },
//     {
//         id: 111,
//         pid: "M126S9872",
//         title: "1 BHK in Sector 126, Mohali",
//         location: "Sector 126,Mohali",
//         type: "1 BHK",
//         gender: "for-all",
//         price: "₹17,000",
//         features: [],
//         description: "This 1 BHK property is located in Sector 126, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/112.M126S9872/A%20(1).jpg?updatedAt=1757826749737" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/112.M126S9872/A%20(2).jpg?updatedAt=1757826749737" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/112.M126S9872/A%20(3).jpg?updatedAt=1757826749737" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/112.M126S9872/A%20(4).jpg?updatedAt=1757826749737" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/112.M126S9872/A%20(5).jpg?updatedAt=1757826749737" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/112.M126S9872/A%20(6).jpg?updatedAt=1757826749737" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/112.M126S9872/A%20(7).jpg?updatedAt=1757826749737" },
//         ]
 
//     },
//     {
//         id: 112,
//         pid: "M126A798",
//         title: "1 RK in Sector 126, Mohali",
//         location: "Sector 126,Mohali",
//         type: "1 RK",
//         gender: "for-all",
//         price: "₹8,000",
//         features: [],
//         description: "This 1 RK property is located in Sector 126, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/113.M126A798/A%20(1).jpg?updatedAt=1757826754295" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/113.M126A798/A%20(2).jpg?updatedAt=1757826754295" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/113.M126A798/A%20(3).jpg?updatedAt=1757826754295" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/113.M126A798/A%20(4).jpg?updatedAt=1757826754295" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/113.M126A798/A%20(5).jpg?updatedAt=1757826754295" },
//         ]
//     },
//     {
//         id: 113,
//         pid: "M117V987",
//         title: "2 BHK in Sector 117, Mohali",
//         location: "Sector 117,Mohali",
//         type: "2 BHK",
//         gender: "family",
//         price: "₹19,000",
//         features: [],
//         description: "This 2 BHK property is located in Sector 117, Mohali.",
//         media: [
//             { type: "text", content: "contact for photos" },
//         ]
//     },
//     {
//         id: 114,
//         pid: "",
//         title: "2 BHK in Sector 117, Mohali",
//         location: "Sector 126,Mohali",
//         type: "2 BHK",
//         gender: "for-all",
//         price: "₹13,000",
//         features: [],
//         description: "This 2 BHK property is located in Sector 126, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/110.M117V987/A%20(1).jpeg?updatedAt=1754985199282" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/110.M117V987/A%20(2).jpeg?updatedAt=1754985199282" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/110.M117V987/A%20(3).jpeg?updatedAt=1754985199282" }
//         ]
//     },
//     {
//         id: 115,
//         pid: "M117A915",
//         title: "2 BHK in Sector 117, Mohali",
//         location: "Sector 117,Mohali",
//         type: "2 BHK",
//         gender: "for-all",
//         price: "₹26,000",
//         features: [],
//         description: "This 2 BHK property is located in Sector 117, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/115.M117A915/A%20(1).jpg?updatedAt=1757826726321" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/115.M117A915/A%20(2).jpg?updatedAt=1757826726321" },
  
//         ]
//     },
//     {
//         id: 116,
//         pid: "M126O987",
//         title: "1 BHK in Sector 126, Mohali",
//         location: "Sector 126,Mohali",
//         type: "1 BHK",
//         gender: "for-all",
//         price: "₹13,000",
//         features: [],
//         description: "This 1 BHK property is located in Sector 126, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/116.M126O987/A%20(1).jpg?updatedAt=1757826780871" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/116.M126O987/A%20(2).jpg?updatedAt=1757826780871" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/116.M126O987/A%20(3).jpg?updatedAt=1757826780871" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/116.M126O987/A%20(4).jpg?updatedAt=1757826780871" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/116.M126O987/A%20(5).jpg?updatedAt=1757826780871" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/116.M126O987/A%20(6).jpg?updatedAt=1757826780871" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/116.M126O987/A%20(7).jpg?updatedAt=1757826780871" },

//         ]
//     },
//     {
//         id: 117,
//         pid: "M61A628",
//         title: "1 Room in 3 RK in Sector 61, Mohali",
//         location: "Sector 61,Mohali",
//         type: "Room",
//         gender: "girls",
//         price: "₹6,600",
//         features: [],
//         description: "This Room property is located in Sector 61, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/117.M61A628/A%20(1).jpg?updatedAt=1757826785818" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/117.M61A628/A%20(2).jpg?updatedAt=1757826785818" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/117.M61A628/A%20(3).jpg?updatedAt=1757826785818" }
//         ]
//     },
//     {
//         id: 118,
//         pid: "M59O836",
//         title: "2 BHK in Sector 59, Mohali",
//         location: "Sector 59,Mohali",
//         type: "2 BHK",
//         gender: "girls",
//         price: "₹28,000",
//         features: [],
//         description: "This 2 BHK property is located in Sector 59, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/118.M59O836/A%20(1).jpg?updatedAt=1757826788138" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/118.M59O836/A%20(2).jpg?updatedAt=1757826788138" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/118.M59O836/A%20(3).jpg?updatedAt=1757826788138" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/118.M59O836/A%20(4).jpg?updatedAt=1757826788138" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/118.M59O836/A%20(5).jpg?updatedAt=1757826788138" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/118.M59O836/A%20(6).jpg?updatedAt=1757826788138" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/118.M59O836/A%20(7).jpg?updatedAt=1757826788138" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/118.M59O836/A%20(8).jpg?updatedAt=1757826788138" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/118.M59O836/A%20(9).jpg?updatedAt=1757826788138" },
//         ]
//     },
//     {
//         id: 119,
//         pid: "",
//         title: "1 RK in Sector 56, Mohali",
//         location: "Sector 56,Mohali",
//         type: "1 RK",
//         gender: "for-all",
//         price: "₹7,000",
//         features: [],
//         description: "This 1 RK property is located in Sector 56, Mohali.",
//         media: []
//     },
//     {
//         id: 120,
//         pid: "M116R964",
//         title: "2 BHK in Sector 116, Mohali",
//         location: "Sector 116,Mohali",
//         type: "2 BHK",
//         gender: "for-all",
//         price: "₹22,000",
//         features: [],
//         description: "This 2 BHK property is located in Sector 116, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/119.M116R964/A%20(1).jpg?updatedAt=1757826791887" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/119.M116R964/A%20(2).jpg?updatedAt=1757826791887" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/119.M116R964/A%20(3).jpg?updatedAt=1757826791887" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/119.M116R964/A%20(4).jpg?updatedAt=1757826791887" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/119.M116R964/A%20(5).jpg?updatedAt=1757826791887" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/119.M116R964/A%20(6).jpg?updatedAt=1757826791887" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/119.M116R964/A%20(7).jpg?updatedAt=1757826791887" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/119.M116R964/A%20(8).jpg?updatedAt=1757826791887" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/119.M116R964/A%20(9).jpg?updatedAt=1757826791887" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/119.M116R964/A%20(10).jpg?updatedAt=1757826791887" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/119.M116R964/A%20(11).jpg?updatedAt=1757826791887" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/119.M116R964/A%20(12).jpg?updatedAt=1757826791887" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/119.M116R964/A%20(13).jpg?updatedAt=1757826791887" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/119.M116R964/A%20(14).jpg?updatedAt=1757826791887" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/119.M116R964/A%20(15).jpg?updatedAt=1757826791887" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/119.M116R964/A%20(16).jpg?updatedAt=1757826791887" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/119.M116R964/A%20(17).jpg?updatedAt=1757826791887" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/119.M116R964/A%20(18).jpg?updatedAt=1757826791887" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/119.M116R964/A%20(19).jpg?updatedAt=1757826791887" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/119.M116R964/A%20(20).jpg?updatedAt=1757826791887" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/119.M116R964/A%20(21).jpg?updatedAt=1757826791887" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/119.M116R964/A%20(22).jpg?updatedAt=1757826791887" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/119.M116R964/A%20(23).jpg?updatedAt=1757826791887" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/119.M116R964/A%20(24).jpg?updatedAt=1757826791887" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/119.M116R964/A%20(25).jpg?updatedAt=1757826791887" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/119.M116R964/A%20(26).jpg?updatedAt=1757826791887" },

//         ]
//     },
//     {
//         id: 121,
//         pid: "",
//         title: "1 RK in Sector 61, Mohali",
//         location: "Sector 61,Mohali",
//         type: "1 RK",
//         gender: "for-all",
//         price: "₹8,500",
//         features: [],
//         description: "This 1 RK property is located in Sector 61, Mohali.",
//         media: []
//     },
//     {
//         id: 122,
//         pid: "M111C788",
//         title: "1 RK in Sector 111, Mohali",
//         location: "Sector 111,Mohali",
//         type: "1 RK",
//         gender: "boys",
//         price: "₹8,000",
//         features: [],
//         description: "This 1 RK property is located in Sector 111, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/120.M111C788/A%20(1).jpg?updatedAt=1757826804407" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/120.M111C788/A%20(2).jpg?updatedAt=1757826804407" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/120.M111C788/A%20(3).jpg?updatedAt=1757826804407" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/120.M111C788/A%20(4).jpg?updatedAt=1757826804407" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/120.M111C788/A%20(5).jpg?updatedAt=1757826804407" },
//         ]
//     },
//     {
//         id: 123,
//         pid: "M69O814",
//         title: "3 BHK in Sector 69, Mohali",
//         location: "Sector 69,Mohali",
//         type: "3 BHK",
//         gender: "for-all",
//         price: "₹30,000",
//         features: [],
//         description: "This 3 BHK property is located in Sector 69, Mohali.",
//         media: [
//             { type: "text", content: "contact for photos" },
//             ]
//     },
//     {
//         id: 124,
//         pid: "",
//         title: "2 BHK in Sector 126, Mohali",
//         location: "Sector 126,Mohali",
//         type: "2 BHK",
//         gender: "for-all",
//         price: "₹19,000",
//         features: [],
//         description: "This 2 BHK property is located in Sector 126, Mohali.",
//         media: []
//     },
//     {
//         id: 125,
//         pid: "M77G981",
//         title: "2 BHK in Sector 77, Mohali",
//         location: "Sector 77,Mohali",
//         type: "2 BHK",
//         gender: "for-all",
//         price: "₹23,000",
//         features: [],
//         description: "This 2 BHK property is located in Sector 77, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/122.M77G981/A%20(1).jpg?updatedAt=1757826807978" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/122.M77G981/A%20(2).jpg?updatedAt=1757826807978" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/122.M77G981/A%20(3).jpg?updatedAt=1757826807978" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/122.M77G981/A%20(4).jpg?updatedAt=1757826807978" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/122.M77G981/A%20(5).jpg?updatedAt=1757826807978" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/122.M77G981/A%20(6).jpg?updatedAt=1757826807978" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/122.M77G981/A%20(7).jpg?updatedAt=1757826807978" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/122.M77G981/A%20(8).jpg?updatedAt=1757826807978" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/122.M77G981/A%20(9).jpg?updatedAt=1757826807978" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/122.M77G981/A%20(10).jpg?updatedAt=1757826807978" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/122.M77G981/A%20(11).jpg?updatedAt=1757826807978" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/122.M77G981/A%20(12).jpg?updatedAt=1757826807978" },

//         ]
//     },
//     {
//         id: 126,
//         pid: "M60B2790",
//         title: "2 BHK in Sector 60, Mohali",
//         location: "Sector 60,Mohali",
//         type: "2 BHK",
//         gender: "for-all",
//         price: "₹24,000",
//         features: [],
//         description: "This 2 BHK property is located in Sector 60, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/123.M60B2790/A%20(1).jpg?updatedAt=1757835395003" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/123.M60B2790/A%20(2).jpg?updatedAt=1757835395003" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/123.M60B2790/A%20(3).jpg?updatedAt=1757835395003" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/123.M60B2790/A%20(4).jpg?updatedAt=1757835395003" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/123.M60B2790/A%20(5).jpg?updatedAt=1757835395003" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/123.M60B2790/A%20(6).jpg?updatedAt=1757835395003" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/123.M60B2790/A%20(7).jpg?updatedAt=1757835395003" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/123.M60B2790/A%20(8).jpg?updatedAt=1757835395003" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/123.M60B2790/A%20(9).jpg?updatedAt=1757835395003" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/123.M60B2790/A%20(10).jpg?updatedAt=1757835395003" },
          
//         ]
//     },
//     {
//         id: 127,
//         pid: "C41S628",
//         title: "1 RK in Sector 41A, Chandigarh",
//         location: "Sector 41A,Chandigarh",
//         type: "1 RK",
//         gender: "for-all",
//         price: "₹12,500",
//         features: [],
//         description: "This 1 RK property is located in Sector 41A, Chandigarh.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/124.C41S628/A%20(1).jpg?updatedAt=1757826819878" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/124.C41S628/A%20(2).jpg?updatedAt=1757826819878" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/124.C41S628/A%20(3).jpg?updatedAt=1757826819878" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/124.C41S628/A%20(4).jpg?updatedAt=1757826819878" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/124.C41S628/A%20(5).jpg?updatedAt=1757826819878" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/124.C41S628/A%20(6).jpg?updatedAt=1757826819878" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/124.C41S628/A%20(7).jpg?updatedAt=1757826819878" },
          
//         ]
//     },
//     {
//         id: 128,
//         pid: "M92A869",
//         title: "1 RK in Sector 92, Mohali",
//         location: "Sector 92,Mohali",
//         type: "1 RK",
//         gender: "for-all",
//         price: "₹10,000",
//         features: [],
//         description: "This 1 RK property is located in Sector 92, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/125.M92A869/A%20(1).jpg?updatedAt=1757826780787" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/125.M92A869/A%20(2).jpg?updatedAt=1757826780787" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/125.M92A869/A%20(3).jpg?updatedAt=1757826780787" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/125.M92A869/A%20(4).jpg?updatedAt=1757826780787" },
//         ]
//     },
//     {
//         id: 129,
//         pid: "",
//         title: "1 RK in Sector 126, Mohali",
//         location: "Sector 126,Mohali",
//         type: "1 RK",
//         gender: "for-all",
//         price: "₹9,500",
//         features: [],
//         description: "This 1 RK property is located in Sector 126, Mohali.",
//         media: []
//     },
//     {
//         id: 130,
//         pid: "",
//         title: "1 RK in Sector 70, Mohali",
//         location: "Sector 70,Mohali",
//         type: "1 RK",
//         gender: "boys",
//         price: "₹12,000",
//         features: [],
//         description: "This 1 RK property is located in Sector 70, Mohali.",
//         media: []
//     },
//     {
//         id: 131,
//         pid: "C40A700",
//         title: "Room in Sector 40D, Chandigarh",
//         location: "Sector 40D,Chandigarh",
//         type: "Room",
//         gender: "for-all",
//         price: "₹13,000",
//         features: [],
//         description: "This Room property is located in Sector 40D, Chandigarh.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/126.C40A700/A%20(1).jpg?updatedAt=1757826857190" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/126.C40A700/A%20(2).jpg?updatedAt=1757826857190" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/126.C40A700/A%20(3).jpg?updatedAt=1757826857190" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/126.C40A700/A%20(4).jpg?updatedAt=1757826857190" },

//         ]
//     },
//     {
//         id: 132,
//         pid: "M89J981",
//         title: "2 BHK in Sector 89, Mohali",
//         location: "Sector 89,Mohali",
//         type: "2 BHK",
//         gender: "for-all",
//         price: "₹26,000",
//         features: [],
//         description: "This 2 BHK property is located in Sector 89, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/127.M89J981/A%20(1).jpg?updatedAt=1757826844792" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/127.M89J981/A%20(2).jpg?updatedAt=1757826844792" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/127.M89J981/A%20(3).jpg?updatedAt=1757826844792" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/127.M89J981/A%20(4).jpg?updatedAt=1757826844792" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/127.M89J981/A%20(5).jpg?updatedAt=1757826844792" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/127.M89J981/A%20(6).jpg?updatedAt=1757826844792" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/127.M89J981/A%20(7).jpg?updatedAt=1757826844792" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/127.M89J981/A%20(8).jpg?updatedAt=1757826844792" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/127.M89J981/A%20(9).jpg?updatedAt=1757826844792" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/127.M89J981/A%20(10).jpg?updatedAt=1757826844792" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/127.M89J981/A%20(11).jpg?updatedAt=1757826844792" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/127.M89J981/A%20(12).jpg?updatedAt=1757826844792" },

//         ]
//     },
//     {
//         id: 133,
//         pid: "M66S981",
//         title: "1 RK in Sector 66, Mohali",
//         location: "Sector 66,Mohali",
//         type: "1 RK",
//         gender: "for-all",
//         price: "₹11,500",
//         features: [],
//         description: "This 1 RK property is located in Sector 66, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/128.M66S981/A%20(1).jpg?updatedAt=1757826851146" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/128.M66S981/A%20(2).jpg?updatedAt=1757826851146" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/128.M66S981/A%20(3).jpg?updatedAt=1757826851146" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/128.M66S981/A%20(4).jpg?updatedAt=1757826851146" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/128.M66S981/A%20(5).jpg?updatedAt=1757826851146" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/128.M66S981/A%20(6).jpg?updatedAt=1757826851146" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/128.M66S981/A%20(7).jpg?updatedAt=1757826851146" },
//         ]
//     },
//     {
//         id: 134,
//         pid: "",
//         title: "2 BHK in Sector 66, Mohali",
//         location: "Sector 66,Mohali",
//         type: "2 BHK",
//         gender: "for-all",
//         price: "₹16,000",
//         features: [],
//         description: "This 2 BHK property is located in Sector 66, Mohali.",
//         media: []
//     },
//     {
//         id: 135,
//         pid: "M117P977",
//         title: "2 BHK in Sector 117, Mohali",
//         location: "Sector 117,Mohali",
//         type: "2 BHK",
//         gender: "for-all",
//         price: "₹21,000",
//         features: [],
//         description: "This 2 BHK property is located in Sector 117, Mohali.",
//         media: [
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/129.M117P977/A%20(1).jpg?updatedAt=1757826851983" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/129.M117P977/A%20(2).jpg?updatedAt=1757826851983" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/129.M117P977/A%20(3).jpg?updatedAt=1757826851983" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/129.M117P977/A%20(4).jpg?updatedAt=1757826851983" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/129.M117P977/A%20(5).jpg?updatedAt=1757826851983" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/129.M117P977/A%20(6).jpg?updatedAt=1757826851983" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/129.M117P977/A%20(7).jpg?updatedAt=1757826851983" },
//             { type: "image", src: "https://ik.imagekit.io/minkal/assets/129.M117P977/A%20(8).jpg?updatedAt=1757826851983" },

//         ]
//     },
// ];

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
document.getElementById('mobileMenuBtn').addEventListener('click', function () {
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
        let hasImages = room.media.some(item => item.type === 'image');

        if (!hasImages && room.media.length > 0) {
            // If no images but has other media (like text), show the first text item
            const textItem = room.media.find(item => item.type === 'text');
            if (textItem) {
                sliderHTML = `<div class="no-photos-message">${textItem.content}</div>`;
            }
        } else {
            // Show images or videos if available
            room.media.forEach((mediaItem, index) => {
                if (mediaItem.type === 'image') {
                    // Add loading="lazy" and use data-src for lazy loading
                    sliderHTML += `<img data-src="${mediaItem.src}" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" class="lazy-load" alt="${room.title}" loading="lazy">`;
                } else if (mediaItem.type === 'video') {
                    // Videos don't support lazy loading in the same way, but we can defer loading
                    sliderHTML += `<video src="${mediaItem.src}" controls muted playsinline loading="lazy"></video>`;
                }
            });
        }

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
            switch (gender) {
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

        // Add click event to open zoom modal
        const sliderImages = cardEl.querySelectorAll('.slider img');
        sliderImages.forEach((img, index) => {
            img.addEventListener('click', (e) => {
                e.stopPropagation();
                openZoomModal(room.media, index);
            });
        });
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

// Filter functionality - UPDATED with new logic for multi-select location filter
function filterRooms() {
    const bhkFilter = document.getElementById('bhk').value.toLowerCase();
    const genderFilter = document.getElementById('gender').value.toLowerCase();
    const priceFilter = document.getElementById('price').value;
    const pidSearch = document.getElementById('pidSearch')?.value.trim().toLowerCase() || '';

    // Get selected locations from the multi-select
    const selectedLocations = Array.from(document.querySelectorAll('.option.selected')).map(opt => opt.textContent.trim());

    // Reset current page when filters change
    currentlyDisplayed = 0;

    // Filter rooms based on selected filters
    let filteredRooms = roomData.filter(room => {
        // PID search takes highest priority
        if (pidSearch && !room.pid.toLowerCase().includes(pidSearch)) {
            return false;
        }

        // Location filter - check if room's location matches any selected location
        if (selectedLocations.length > 0) {
            const roomLocation = room.location.toLowerCase();
            if (!selectedLocations.some(loc => roomLocation.includes(loc.toLowerCase()))) {
                return false;
            }
        }

        // BHK filter
        if (bhkFilter !== 'all' && room.type.toLowerCase() !== bhkFilter) {
            return false;
        }

        // Gender filter - special handling for 'for-all' option
        if (genderFilter !== 'all') {
            if (genderFilter === 'for-all') {
                // Show rooms that are for all or don't have gender restriction
                if (room.gender !== 'for-all' && room.gender !== '') {
                    return false;
                }
            } else if (room.gender !== genderFilter) {
                return false;
            }
        }

        // Price filter
        if (priceFilter !== 'all') {
            const price = parseInt(room.price.replace(/[^0-9]/g, '')) || 0;
            if (priceFilter.startsWith('<=')) {
                const maxPrice = parseInt(priceFilter.replace(/[^0-9]/g, ''));
                if (price > maxPrice) return false;
            } else if (priceFilter.startsWith('>=')) {
                const minPrice = parseInt(priceFilter.replace(/[^0-9]/g, ''));
                if (price < minPrice) return false;
            }
        }

        return true;
    });

    // Clear and regenerate cards
    const cardsContainer = document.getElementById('cardsContainer');
    cardsContainer.innerHTML = '';

    // Show message if no rooms match the filters
    if (filteredRooms.length === 0) {
        cardsContainer.innerHTML = `
            <div class="no-rooms-message">
                <i class="fas fa-search"></i>
                <h3>No properties found matching your criteria</h3>
                <p>Try adjusting your filters or search term</p>
                <button onclick="resetFilters()" class="reset-filters-btn">Reset All Filters</button>
            </div>
        `;
        return;
    }

    // Generate cards for filtered rooms
    generateCards(filteredRooms);

    // Ensure lazy loading works for the new content
    lazyLoadImages();
}

// Reset filters
function resetFilters() {
    // Reset location filter
    selectedLocations = [];
    document.querySelectorAll('.option.selected').forEach(option => {
        option.classList.remove('selected');
    });
    updateSelectedLocations();

    // Reset other filters
    document.getElementById('bhk').value = 'all';
    document.getElementById('gender').value = 'all';
    document.getElementById('price').value = 'all';

    // Clear PID search if it exists
    const pidSearch = document.getElementById('pidSearch');
    if (pidSearch) {
        pidSearch.value = '';
    }

    // Reset the currently displayed counter
    currentlyDisplayed = 0;

    // Regenerate cards with all rooms
    generateCards(roomData);
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

// Image Zoom Functionality
let currentZoomedImageIndex = 0;
let currentRoomMedia = [];
let isZoomed = false;

function openZoomModal(mediaArray, index) {
    const modal = document.getElementById('zoomModal');
    const modalContent = modal.querySelector('.zoom-modal-content');
    const zoomButton = modal.querySelector('.zoom-zoom');

    currentRoomMedia = mediaArray;
    currentZoomedImageIndex = index;

    // Update modal content with current media
    updateZoomModalContent();

    // Show modal with animation
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('show'), 10);

    // Update zoom button text
    updateZoomButtonText();

    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

function closeZoomModal() {
    const modal = document.getElementById('zoomModal');
    modal.classList.remove('show');

    // Allow body scroll when modal is closed
    document.body.style.overflow = 'auto';

    // Reset zoom state
    isZoomed = false;
    const modalContent = modal.querySelector('.zoom-modal-content');
    modalContent.classList.remove('zoomed');

    // Hide modal after animation
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

function updateZoomModalContent() {
    const modal = document.getElementById('zoomModal');
    const modalContent = modal.querySelector('.zoom-modal-content');
    const currentMedia = currentRoomMedia[currentZoomedImageIndex];

    // Clear previous content
    modalContent.innerHTML = '';

    // Create and append media element
    if (currentMedia.type === 'image') {
        const img = document.createElement('img');
        img.src = currentMedia.src;
        img.alt = 'Property image';
        img.loading = 'eager';
        modalContent.appendChild(img);
    } else if (currentMedia.type === 'video') {
        const video = document.createElement('video');
        video.src = currentMedia.src;
        video.controls = true;
        video.autoplay = true;
        modalContent.appendChild(video);
    }

    // Reset zoom state when changing images
    isZoomed = false;
    modalContent.classList.remove('zoomed');
    updateZoomButtonText();
}

function updateZoomButtonText() {
    const zoomButton = document.querySelector('.zoom-zoom');
    if (zoomButton) {
        const icon = zoomButton.querySelector('i');
        if (isZoomed) {
            icon.className = 'fas fa-search-minus';
            zoomButton.innerHTML = '<i class="fas fa-search-minus"></i> Click to Zoom Out';
        } else {
            icon.className = 'fas fa-search-plus';
            zoomButton.innerHTML = '<i class="fas fa-search-plus"></i> Click to Zoom In';
        }
    }
}

function navigateZoom(direction) {
    if (direction === 'prev') {
        currentZoomedImageIndex = (currentZoomedImageIndex - 1 + currentRoomMedia.length) % currentRoomMedia.length;
    } else {
        currentZoomedImageIndex = (currentZoomedImageIndex + 1) % currentRoomMedia.length;
    }
    updateZoomModalContent();
}

function toggleZoom() {
    const modalContent = document.querySelector('.zoom-modal-content');
    isZoomed = !isZoomed;

    if (isZoomed) {
        modalContent.classList.add('zoomed');
    } else {
        modalContent.classList.remove('zoomed');
    }

    updateZoomButtonText();
}

// Multi-select dropdown functionality
let selectedLocations = [];

function toggleDropdown(type) {
    const container = document.getElementById(`${type}-options`);
    const selectBox = document.querySelector(`#${type}-options`).closest('.multiselect').querySelector('.select-box');

    if (container.classList.contains('show')) {
        container.classList.remove('show');
        selectBox.classList.remove('open');
    } else {
        // Close all other dropdowns
        document.querySelectorAll('.options-container').forEach(dropdown => {
            if (dropdown !== container) {
                dropdown.classList.remove('show');
                dropdown.closest('.multiselect').querySelector('.select-box').classList.remove('open');
            }
        });

        container.classList.add('show');
        selectBox.classList.add('open');
    }
}

function updateSelectedLocations() {
    const selectedText = document.getElementById('location-selected-text');
    const tagsContainer = document.getElementById('location-tags');
    const hiddenInput = document.querySelector('input[name="location"]');

    // Get the display text of selected locations
    const selectedLocationTexts = Array.from(document.querySelectorAll('.option.selected')).map(opt => opt.textContent.trim());

    if (selectedLocationTexts.length === 0) {
        selectedText.textContent = 'Select Locations';
    } else if (selectedLocationTexts.length === 1) {
        selectedText.textContent = selectedLocationTexts[0];
    } else {
        selectedText.textContent = `${selectedLocationTexts.length} locations selected`;
    }

    // Update tags
    tagsContainer.innerHTML = '';
    selectedLocationTexts.forEach(location => {
        const tag = document.createElement('div');
        tag.className = 'tag';
        tag.innerHTML = `
            ${location}
            <span class="tag-remove" onclick="removeLocation('${location}')">&times;</span>
        `;
        tagsContainer.appendChild(tag);
    });

    // Update hidden input value with display text instead of values
    hiddenInput.value = selectedLocationTexts.join(',');

    // Trigger filter update
    filterRooms();
}

function toggleLocation(option) {
    option.classList.toggle('selected');
    updateSelectedLocations();
}

function removeLocation(location) {
    // Find and remove the matching option by text content
    const options = document.querySelectorAll('.option');
    for (const option of options) {
        if (option.textContent.trim() === location) {
            option.classList.remove('selected');
            break;
        }
    }

    // Update the display
    updateSelectedLocations();
}

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.multiselect')) {
        document.querySelectorAll('.options-container').forEach(dropdown => {
            dropdown.classList.remove('show');
            dropdown.closest('.multiselect').querySelector('.select-box').classList.remove('open');
        });
    }
});

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize multi-select dropdown
    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleLocation(option);
        });
    });

    // Close dropdown when clicking on an option
    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', () => {
            const container = option.closest('.options-container');
            const selectBox = container.closest('.multiselect').querySelector('.select-box');
            container.classList.remove('show');
            selectBox.classList.remove('open');
        });
    });

    // Prevent dropdown from closing when clicking inside it
    document.querySelectorAll('.options-container').forEach(container => {
        container.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    });
    // Zoom Modal Event Listeners
    const zoomModal = document.getElementById('zoomModal');
    const zoomClose = document.querySelector('.zoom-close');
    const zoomPrev = document.querySelector('.zoom-prev');
    const zoomNext = document.querySelector('.zoom-next');
    const zoomButton = document.querySelector('.zoom-zoom');

    // Close modal when clicking the close button or outside the content
    zoomClose.addEventListener('click', closeZoomModal);
    zoomModal.addEventListener('click', (e) => {
        if (e.target === zoomModal) {
            closeZoomModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && zoomModal.classList.contains('show')) {
            closeZoomModal();
        }
    });

    // Navigation buttons
    zoomPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        navigateZoom('prev');
    });

    zoomNext.addEventListener('click', (e) => {
        e.stopPropagation();
        navigateZoom('next');
    });

    // Toggle zoom
    zoomButton.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleZoom();
    });

    // Handle keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!zoomModal.classList.contains('show')) return;

        switch (e.key) {
            case 'ArrowLeft':
                navigateZoom('prev');
                break;
            case 'ArrowRight':
                navigateZoom('next');
                break;
            case ' ':
            case 'Enter':
                e.preventDefault();
                toggleZoom();
                break;
        }
    });

    // Handle touch events for mobile zoom
    let touchStartX = 0;
    let touchEndX = 0;

    zoomModal.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, false);

    zoomModal.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);

    function handleSwipe() {
        const swipeThreshold = 50; // Minimum distance to consider it a swipe

        if (touchStartX - touchEndX > swipeThreshold) {
            // Swipe left - go to next
            navigateZoom('next');
        } else if (touchEndX - touchStartX > swipeThreshold) {
            // Swipe right - go to previous
            navigateZoom('prev');
        }
    }
        // Update rooms with empty pid to include 'contact for photos' media
    roomData.forEach(room => {
        if (!room.pid || room.pid.trim() === '') {
            room.media = [{ type: "text", content: "contact for photos" }];
        }
    });

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
