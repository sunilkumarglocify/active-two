import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Layout from "../layout";
import ActivityManagementCard from "./activity-management-card";
import AddNewActivity from "./add-new-activity";

const ActivityManagement: React.FC = () => {
  const activityManagementArray = [
    { title: 'Art Camp', image: 'https://assets.api.uizard.io/api/cdn/stream/b9160cf5-42e9-495b-9af2-d9fd8474a41e.png', published: '10', goLive: '5' },
    { title: 'Kids Saturday Art', image: 'https://assets.api.uizard.io/api/cdn/stream/4546a14a-1448-4b05-b8f3-ca3cb19dd8ac.png', published: '10', goLive: '5' },
    { title: 'Teen& Adult Art Workshop', image: 'https://assets.api.uizard.io/api/cdn/stream/7a7090eb-3e45-4ddc-ad5a-b5f6f632184e.png', published: '10', goLive: '5' },
    { title: 'Adult Art Workshops', image: 'https://assets.api.uizard.io/api/cdn/stream/a92eb56b-9c0a-42b2-bfbc-197c9284b3c0.png', published: '10', goLive: '5' },
    { title: 'Art Camp', image: 'https://assets.api.uizard.io/api/cdn/stream/f02c6d12-ea7e-420a-a190-8a3f2057394c.png', published: '10', goLive: '5' },
  ]

  return (
    <Layout>
      <Typography variant="h5" mb={4}>
      Activity Management
      </Typography>
      <Grid container spacing={5}>
        <AddNewActivity />
        {
          activityManagementArray?.map((activity) => (
            <ActivityManagementCard title={activity.title} image={activity.image}
              published={activity.published} goLive={activity.goLive} />
          ))
        }
      </Grid>
    </Layout>
  );
};

export default ActivityManagement;
