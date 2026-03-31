import React, { useState } from "react";
import { Box } from "@mui/material";
import { styled, useMediaQuery } from "@mui/system";
import { Outlet } from "react-router-dom";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import { useGetUserQuery } from "state/api";
import { useSelector } from "react-redux";

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 380px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const userId = useSelector((state) => state.global.userId);
  const { data } = useGetUserQuery(userId);
  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <Sidebar
        user={data || {}}
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box
        flex="1"
        sx={{
          // marginLeft: isNonMobile  ? "250px" : "0px",
          transition: "margin-left 0.3s ease",
        }}
      >
        <Navbar
          user={data || {}}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
        {/* your main page content */}
      </Box>
    </Box>
  );
};

export default Layout;
