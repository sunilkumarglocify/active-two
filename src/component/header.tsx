import React, { ReactNode, useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Box,
  FormControl,
  Select,
  useTheme // Import useTheme hook
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuth } from "../context/auth/auth-context";
import { useTranslation } from "react-i18next";
import "../i18next";
import palette from "../theme/palette";
import shadows from "../theme/shadows";

interface HeaderProps {
  children?: ReactNode;
}

const Header: React.FC<HeaderProps> = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { logout } = useAuth();
  const { t, i18n } = useTranslation();
  const theme = useTheme(); // Use useTheme hook to access the current theme

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleProfileMenuClose();
  };

  const [selectedLanguage, setSelectedLanguage] = useState<string>(() => {
    const savedLanguage = localStorage.getItem("language");
    return savedLanguage || "en";
  });

  useEffect(() => {
    localStorage.setItem("language", selectedLanguage);
  }, [selectedLanguage]);

  const changeLanguage = (lng: string) => {
    setSelectedLanguage(lng);
    console.log("selectedLanguage: " + selectedLanguage);

    i18n.changeLanguage(lng);
    handleProfileMenuClose();
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: theme.palette.mode === 'light' ? palette.light.background.default : palette.dark.background.default,
        boxShadow: shadows.light[1],
        zIndex: 9999
      }}
    >

      <Toolbar>
        <Box
          sx={{ display: "flex", alignItems: "center", gap: 3, flexGrow: 1 }}
        >
          <Avatar
            alt="Remy Sharp"
            src="https://assets.api.uizard.io/api/cdn/stream/810ed1c9-326d-4c5c-9657-dba88c7d64d4.png"
          />
          <Typography variant="h6" sx={{ color: theme.palette.mode === 'light' ? palette.dark.background.default : palette.light.background.default }}>
            Organization
          </Typography>
        </Box>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <Select
            sx={{ height: '30px' }}
            value={selectedLanguage}
            onChange={(e) => changeLanguage(e.target.value as string)}
            displayEmpty
          >
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="cn">Cantonese</MenuItem>
          </Select>
        </FormControl>

        <IconButton onClick={handleProfileMenuOpen}>
          <Avatar
            alt="Remy Sharp"
            src="https://assets.api.uizard.io/api/cdn/stream/90b8acee-9b2f-4f4f-942d-5e828c7f5f6e.png"
            sx={{ width: 32, height: 32 }}
          />
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleProfileMenuClose}
        >
          <MenuItem onClick={handleLogout}>
            <LogoutIcon sx={{ mr: 1 }} />
            {t("Logout")}
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
