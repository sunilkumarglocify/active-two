import React from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs } from "@mui/material";

interface TabInfo {
  label: string;
  route: string;
}

export const tabsInfo: TabInfo[] = [
  { label: "Home", route: "/dashboard" },
  { label: "Activity Management", route: "/tab1" },
  { label: "Customer Insight", route: "/tab2" },
  { label: "Sign-in/Out", route: "/tab2" },
  { label: "Coupons", route: "/tab2" },
  { label: "Business Profile", route: "/tab2" },
  { label: "Shop", route: "/tab2" },
  { label: "Campaign", route: "/tab2" },
  { label: "Reviews", route: "/tab2" },
  { label: "Reports", route: "/tab2" },
];

const Sidebar: React.FC = () => {
  return (
    <Tabs orientation="vertical" variant="scrollable">
      {tabsInfo.map((tab, index) => (
        <Tab key={index} label={tab.label} component={Link} to={tab.route} />
      ))}
    </Tabs>
  );
};

export default Sidebar;
