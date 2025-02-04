// "use client";
// import React from 'react';
// import { Box, Button, Container, Typography } from '@mui/material';
// import Link from 'next/link';
// import Banner from '../banner/Banner';

// const Guided = () => {
//     return (
//         <>
//         <Box sx={{ position: "relative" }}>
//         <Banner
//           title="Choose your Destination"
//           imageUrl="/images/scenes/mckayla-crump.jpg"
//         />
//         <Box
//            sx={{
//             position: "absolute",
//             top: "1rem", // Adjust as needed
//             left: "1rem", // Adjust as needed
//             zIndex: 30, // Ensure the button is above the banner
//           }}
//           >
//             <Link href="/" passHref>
//               <Button variant="contained" sx={{ mb: 2 }} aria-label="Back to Kayaking">
//                 ← Back to Home
//               </Button>
//             </Link>
//           </Box>
//           </Box>
//         <Container>
             
//           <main>
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               justifyContent: "center",
//               minHeight: "60vh",
//             }}
//           >
    
//             <Typography
//               variant="h3"
//               sx={{
//                 fontWeight: "bold",
//                 color: "primary.main",
//                 mb: 4,
//                 fontSize: { xs: "1.75rem", md: "2.5rem" }, // Responsive font size
//               }}
//             >
//               Guided Events
//             </Typography>
//             <Typography variant="h5" sx={{ fontWeight: "bold", color: "text.secondary", mb: 3 }}>
//             Paddle at Your Own Pace!</Typography>
// <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
// Explore various scenic locations with our self-guided kayaking tours. Enjoy the freedom to paddle at your own speed while we provide the equipment and maps.
// </Typography>
// <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
// Flexible & Independent: Choose your route and explore different water spots.
// </Typography>
// <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
// All Gear Included: Kayak, paddle, life jacket, and map provided for your adventure.
// </Typography>
// <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
// Support When Needed: We're just a call away if you need assistance.
// </Typography>
// <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
// Neck Road Boat Ramp – Mountain Island Lake
// </Typography>
// <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
// The Neck Road Boat Ramp offers easy access to Mountain Island Lake, making it an ideal location to launch your rented kayak. Enjoy peaceful waters, scenic views, and opportunities to spot local wildlife as you paddle. While it's a popular launch point, especially on weekends, the ramp provides a calm starting point for your adventure.
// </Typography>
// <Typography variant="h5" sx={{ color: "text.secondary", mb: 3 }}>
// Book your kayak rental today and explore the beauty of Mountain Island Lake!{" "}
//             </Typography>
//             <Link href="/events" passHref>
//               <Button variant="contained" color="primary">
//                 See Events
//               </Button>
//             </Link>
//           </Box>
//           </main>
//         </Container>
//         </>
//       );
// }
// export default Guided;