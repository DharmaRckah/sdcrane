// import React, { useState, useEffect } from "react";
// import { Menu, Sidebar, Segment, Icon } from "semantic-ui-react";
// import { Link } from "react-router-dom";

// function Sidebarr({ children }) {
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
//   const [visible, setVisible] = useState(false); // Sidebar hidden by default in mobile

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//       if (window.innerWidth > 768) {
//         setVisible(true); // Always show sidebar on larger screens
//       } else {
//         setVisible(false); // Hide sidebar on mobile by default
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleToggle = () => {
//     setVisible(!visible); // Toggle sidebar visibility on mobile
//   };

//   return (
//     <div style={{ display: "flex", height: "100vh", position: "relative" }}>
//       {/* Sidebar component */}
//       <Sidebar
//         as={Menu}
//         animation={isMobile ? "overlay" : null} // Overlay on mobile, static on larger screens
//         icon="labeled"
//         inverted
//         vertical
//         visible={visible} // Controlled visibility based on screen size and toggle
//         width="thin"
//         style={{
//           backgroundColor: "#2185d0",
//           height: "100vh",
//           position: isMobile ? "fixed" : "relative", // Fixed in mobile, relative in desktop
//           zIndex: isMobile ? 999 : "auto", // High z-index for mobile
//           width: "150px", // Fixed width
//           transition: "all 0.3s ease",
//         }}
//       >
//         <Menu.Item as={Link} to="/admin">
//           <Icon name="home" />
//           Products
//         </Menu.Item>
//         <Menu.Item as={Link} to="/admin/contact">
//           <Icon name="address book" />
//           Contact
//         </Menu.Item>
//         <Menu.Item as={Link} to="/admin/log-out">
//           <Icon name="logout" />
//           Log Out
//         </Menu.Item>
//       </Sidebar>

//       {/* Main content */}
//       <div
//         className="main-content"
//         style={{
//           flex: 1,
//           marginTop:"65px",
//           marginLeft: isMobile ? "0" : "0px", // Adjust margin for sidebar on large screens
//           padding: "0px",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "flex-start", // Align items from the top
//           alignItems: "center",
//           boxSizing: "border-box",
//           overflowY: "auto",
//         }}
//       >
//         {/* Toggle button for mobile */}
//         {isMobile && (
//           <Menu
//             secondary
//             style={{ position: "fixed", top: 0, right: 0, zIndex: 1000 }}
//           >
//             <Menu.Item onClick={handleToggle}>
//               <Icon name="sidebar" />
//               Menu
//             </Menu.Item>
//           </Menu>
//         )}

//         <Segment
//           basic
//           style={{
//             width: "100%",
//             maxWidth: "1200px",
//             margin: "0 auto",
//             paddingTop: isMobile ? "50px" : "0", // Adjust for the toggle button in mobile view
//           }}
//         >
//           {children}
//         </Segment>
//       </div>
//     </div>
//   );
// }

// export default Sidebarr;
import React, { useState, useEffect } from "react";
import { Menu, Sidebar, Segment, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Sidebarr({ children }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [visible, setVisible] = useState(true); // Sidebar hidden by default on mobile

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);

      // On larger screens, always show sidebar, hide menu icon
      if (window.innerWidth > 768) {
        setVisible(true); // Sidebar visible on larger screens
      } else {
        setVisible(false); // Hide sidebar by default on mobile
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = () => {
    setVisible(!visible); // Toggle sidebar visibility on mobile
  };

  return (
    <div style={{ display: "flex", height: "100vh", position: "relative" }}>
      {/* Sidebar component */}
      <Sidebar
        as={Menu}
        animation={isMobile ? "overlay" : "null"} // Overlay on mobile, static on larger screens
        icon="labeled"
        inverted
        vertical
        visible={visible} // Controlled visibility based on screen size and toggle
        width="thin"
        style={{
          backgroundColor: "#2185d0",
          height: "100vh",
          position: isMobile ? "fixed" : "relative", // Fixed in mobile, relative in desktop
          zIndex: isMobile ? 999 : "auto", // High z-index for mobile
          width: "150px", // Fixed width
          transition: "all 0.3s ease",
          paddingTop:"30px"
        }}
      >
        <Menu.Item as={Link} to="/">
          <Icon name="home" /> {/* Icon for products */}
          Home
        </Menu.Item>
        <Menu.Item as={Link} to="/admin">
          <Icon name="boxes" /> {/* Icon for products */}
          Products
        </Menu.Item>
        <Menu.Item as={Link} to="/admin/contact">
          <Icon name="address book" />
          Contact
        </Menu.Item>
        <Menu.Item as={Link} to="/admin/log-out">
          <Icon name="logout" />
          Log Out
        </Menu.Item>
      </Sidebar>

      {/* Main content */}
      <div
        className="main-content"
        style={{
          flex: 1,
          marginTop: "65px",
          marginLeft: isMobile ? "0" : "0px", // Ensure sidebar space on large screens
          padding: "0px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start", // Align items from the top
          alignItems: "center",
          boxSizing: "border-box",
          overflowY: "auto",
        }}
      >
        {/* Toggle button for mobile */}
        {isMobile && (
          <Menu
            secondary
            style={{ position: "fixed", top: 0, right: 0, zIndex: 1000 }}
          >
            <Menu.Item onClick={handleToggle}>
              <Icon name="sidebar" />
              Menu
            </Menu.Item>
          </Menu>
        )}

        <Segment
          basic
          style={{
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            paddingTop: isMobile ? "50px" : "0", // Adjust for the toggle button in mobile view
          }}
        >
          {children}
        </Segment>
      </div>
    </div>
  );
}

export default Sidebarr;
