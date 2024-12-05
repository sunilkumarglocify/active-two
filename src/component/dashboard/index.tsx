import React from "react";
import {
  Avatar,
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import Layout from "../layout";
import palette from "../../theme/palette";

const weekNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const date = [1, 2, 3, 4, 5, 6, 7];

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <Typography variant="h5">Welcome, Amit!</Typography>
          <Box
            sx={{
              border: "1px solid #b2b2b2",
              mt: 7,
              borderRadius: "10px 10px 0px 0px",
              overflowX: "hidden",
            }}
          >
            <Stack
              flexDirection={"row"}
              gap={2}
              p={2}
              flexWrap="wrap"
              borderBottom="1px solid #b2b2b2"
              sx={{ bgcolor: "#b8dbe1" }}
            >
              <Stack gap={2} flex={1} textAlign="center">
                <Typography
                  sx={{ color: "#c17c3f", fontWeight: 700 }}
                  variant="h6"
                >
                  7
                </Typography>
                <Typography sx={{ color: "#323232" }} variant="body2">
                  Health Conditions
                </Typography>
              </Stack>
              <Stack gap={2} flex={1} textAlign="center">
                <Typography
                  sx={{ color: palette.light.text.primary, fontWeight: 700 }}
                  variant="h6"
                >
                  32
                </Typography>
                <Typography variant="body2" sx={{ color: "#323232" }}>
                  No Info or Conditions
                </Typography>
              </Stack>
              <Stack gap={2} flex={1} textAlign="center">
                <Typography
                  sx={{ color: palette.light.text.primary, fontWeight: 700 }}
                  variant="h6"
                >
                  39
                </Typography>
                <Typography sx={{ color: "#323232" }} variant="body2">
                  Total participants
                </Typography>
              </Stack>
            </Stack>
            <Box
              py={1}
              px={2}
              position="relative"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 2,
              }}
            >
              <Typography sx={{ textAlign: "center" }} variant="body1">
                Daily Briefing (24 hours)
              </Typography>
              <Button
                variant="text"
                sx={{
                  color: "#475058",
                  position: ["inherit", "inherit", "absolute"],
                  p: "0px",
                  right: ["0px", "0px", "24px"],
                  top: "50%",
                  transform: "translateY(-50%)",
                  textTransform: "capitalize",
                }}
              >
                Refresh
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              border: "1px solid #b2b2b2",
              mt: 4,
              borderRadius: "10px 10px 0px 0px",
              overflowX: "hidden",
            }}
          >
            <Stack
              flexDirection={"row"}
              gap={2}
              p={2}
              flexWrap="wrap"
              borderBottom="1px solid #b2b2b2"
              sx={{ bgcolor: "#b8dbe1" }}
            >
              <Stack gap={2} flex={1} textAlign="center">
                <Typography
                  sx={{ color: "#c17c3f", fontWeight: 700 }}
                  variant="h6"
                >
                  3
                </Typography>
                <Typography sx={{ color: "#323232" }} variant="body2">
                  Booking
                </Typography>
              </Stack>
              <Stack gap={2} flex={1} textAlign="center">
                <Typography
                  sx={{ color: palette.light.text.primary, fontWeight: 700 }}
                  variant="h6"
                >
                  4
                </Typography>
                <Typography variant="body2" sx={{ color: "#323232" }}>
                  User Visit
                </Typography>
              </Stack>
              <Stack gap={2} flex={1} textAlign="center">
                <Typography
                  sx={{ color: palette.light.text.primary, fontWeight: 700 }}
                  variant="h6"
                >
                  1
                </Typography>
                <Typography sx={{ color: "#323232" }} variant="body2">
                  Pending Cart
                </Typography>
              </Stack>
            </Stack>
            <Box py={1} px={2}>
              <Typography sx={{ textAlign: "center" }} variant="body1">
                User Activity (24 hours)
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography sx={{ fontWeight: 700 }} variant="h6">
            July 2024
          </Typography>

          <Stack direction="row" flexWrap={"wrap"} mt={3} spacing={2}>
            {weekNames.map((day, index) => (
              <Stack flex={1} key={day} gap={1} alignItems="center">
                <Typography variant="body2" color={"#5d5d5b"}>
                  {day}
                </Typography>
                <Typography variant="body1" color="#080a0b">
                  {date[index]}
                </Typography>
              </Stack>
            ))}
          </Stack>

          <Typography sx={{ fontWeight: 700, mt: 4 }} variant="body1">
            Upcoming activities on calender
          </Typography>
          <List sx={{ width: "100%", pt: 1 }}>
            <ListItem>
              <ListItemAvatar>
                <Avatar
                  sx={{
                    backgroundColor: "#f0f0f0",
                    color: palette.light.text.primary,
                    fontSize: "16px",
                  }}
                >
                  2
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Art Camp" secondary="Mrs. Wilson" />
              <Typography sx={{ color: "#5d5d5b" }} variant="caption">
                8:00 AM
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar
                  sx={{
                    backgroundColor: "#f0f0f0",
                    color: palette.light.text.primary,
                    fontSize: "16px",
                  }}
                >
                  3
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Art Camp" secondary="Mrs. Wilson" />
              <Typography sx={{ color: "#5d5d5b" }} variant="caption">
                8:00 AM
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar
                  sx={{
                    backgroundColor: "#f0f0f0",
                    color: palette.light.text.primary,
                    fontSize: "16px",
                  }}
                >
                  4
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Art Camp" secondary="Ms. Becky" />
              <Typography sx={{ color: "#5d5d5b" }} variant="caption">
                8:00 AM
              </Typography>
            </ListItem>

            <ListItem>
              <ListItemAvatar>
                <Avatar
                  sx={{
                    backgroundColor: "#f0f0f0",
                    color: palette.light.text.primary,
                    fontSize: "16px",
                  }}
                >
                  5
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Art Camp" secondary="Ms. Becky" />
              <Typography sx={{ color: "#5d5d5b" }} variant="caption">
                8:00 AM
              </Typography>
            </ListItem>

            <ListItem>
              <ListItemAvatar>
                <Avatar
                  sx={{
                    backgroundColor: "#f0f0f0",
                    color: palette.light.text.primary,
                    fontSize: "16px",
                  }}
                >
                  6
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Art Camp" secondary="Ms. Becky" />
              <Typography sx={{ color: "#5d5d5b" }} variant="caption">
                8:00 AM
              </Typography>
            </ListItem>

            <ListItem>
              <ListItemAvatar>
                <Avatar
                  sx={{
                    backgroundColor: "#f0f0f0",
                    color: palette.light.text.primary,
                    fontSize: "16px",
                  }}
                >
                  7
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Weekend Art Class" secondary="Ms. Becky" />
              <Typography sx={{ color: "#5d5d5b" }} variant="caption">
                8:00 AM
              </Typography>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Dashboard;
