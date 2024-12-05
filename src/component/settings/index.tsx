import React from "react";
import { Typography } from "@mui/material";
import Layout from "../layout";

const Settings: React.FC = () => {
  return (
    <Layout>
      <Typography variant="h1">Settings Page</Typography>
      <Typography variant="body1">
        This is where you can customize your settings.
      </Typography>
    </Layout>
  );
};

export default Settings;
