import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  useTheme, // Import useTheme hook
} from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PersonIcon from "@mui/icons-material/Person";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import BusinessIcon from "@mui/icons-material/Business";
import StoreIcon from "@mui/icons-material/Store";
import CampaignIcon from "@mui/icons-material/Campaign";
import RateReviewIcon from "@mui/icons-material/RateReview";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import "../i18next";
import { useAuth } from "../context/auth/auth-context";
import palette from "../theme/palette";
const drawerWidth = 270;

interface SidebarTab {
  label: string;
  route: string;
  icon: React.ReactNode;
}

const ActiveStyle: React.FC<{ active: boolean; children: React.ReactNode }> = ({
  active,
  children,
}) => {
  const styles = {
    Card: {
      backgroundColor: active ? "#b8dbe1" : "transparent",
      borderRadius: "26px",
      width: "100%",
    },
  };

  return <div style={styles.Card}>{children}</div>;
};

const Sidebar: React.FC = () => {
  const location = useLocation();
  const { logout } = useAuth();

  const { t } = useTranslation();

  const sidebarTabs: SidebarTab[] = [
    { label: t("homeTitle"), route: "/dashboard", icon: <HomeOutlinedIcon /> },
    {
      label: t("activityTitle"),
      route: "/activity-management",
      icon: <AccountBalanceIcon />,
    },
    {
      label: t("customerTitle"),
      route: "/customer-insight",
      icon: <PersonIcon />,
    },
    {
      label: t("signInOutTitle"),
      route: "/sign-in-out",
      icon: <ExitToAppIcon />,
    },
    { label: t("couponsTitle"), route: "/coupons", icon: <LocalOfferIcon /> },
    {
      label: t("businessTitle"),
      route: "/business-profile",
      icon: <BusinessIcon />,
    },
    { label: t("shopTitle"), route: "/shop", icon: <StoreIcon /> },
    { label: t("campaignTitle"), route: "/campaign", icon: <CampaignIcon /> },
    { label: t("reviewsTitle"), route: "/reviews", icon: <RateReviewIcon /> },
    { label: t("reportsTitle"), route: "/reports", icon: <AssessmentIcon /> },
    { label: t("settingsTitle"), route: "/settings", icon: <SettingsIcon /> },
    { label: t("signOutTitle"), route: "/sign-out", icon: <ExitToAppIcon /> },
  ];
  const theme = useTheme(); // Use useTheme hook to access the current theme
  return (
    <Box>
      <Drawer
        anchor="left"
        open={true}
        variant="permanent"
        sx={{
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            top: ["56px", "64px"],
            px: 1.5,
            height: ["calc(100% - 56px)", "calc(100% - 64px)"],
            scrollbarWidth: "thin",
          },
        }}
      >
        <List>
          {sidebarTabs.slice(0, -2).map((tab, index) => (
            <ListItem key={tab.route} disablePadding>
              {" "}
              {/* Assign key to ListItem */}
              <ActiveStyle active={location.pathname === tab.route}>
                <ListItemButton
                  sx={{ borderRadius: "26px" }}
                  component={Link}
                  to={tab.route}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 32,
                      pr: 0.5,
                      color:
                        theme.palette.mode === "light" ? palette.light.text.primary : palette.light.background.default,
                    }}
                  >
                    {tab.icon}
                  </ListItemIcon>
                  <ListItemText
                    sx={{
                      color:
                        theme.palette.mode === "light" ? palette.light.text.primary : palette.light.background.default,
                    }}
                    primary={tab.label}
                  />
                </ListItemButton>
              </ActiveStyle>
            </ListItem>
          ))}
          <Divider sx={{ my: 2 }} />
          {sidebarTabs.slice(-2).map((tab) => (
            <ListItem key={tab.route} disablePadding>
              {" "}
              {/* Assign key to ListItem */}
              <ActiveStyle active={location.pathname === tab.route}>
                <ListItemButton
                  component={Link}
                  to={tab.route}
                  onClick={() => tab.route === "/sign-out" && logout()}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 32,
                      pr: 0.5,
                      color:
                        theme.palette.mode === "light" ? palette.light.text.primary : palette.light.background.default,
                    }}
                  >
                    {tab.icon}
                  </ListItemIcon>
                  <ListItemText
                    sx={{
                      color:
                        theme.palette.mode === "light" ? palette.light.text.primary : palette.light.background.default,
                    }}
                    primary={tab.label}
                  />
                </ListItemButton>
              </ActiveStyle>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
