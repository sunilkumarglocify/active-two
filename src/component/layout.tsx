// Layout.tsx

import React, { ReactNode } from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import { Box } from "@mui/material";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box>
      <Header/>
      <Box sx={{display: 'grid', gridTemplateColumns: '270px 1fr'}}>
      <Sidebar />
      <Box sx={{pt: 11, pb: 3, px: 3 }}>{children}</Box>
      </Box>
    </Box>
  );
};

export default Layout;
