import React, { useState } from "react";
import { Navbar } from "./components";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { categories, categories1 } from "./constants";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Rating,
  Typography,
  useTheme,
  Link,
} from "@mui/material";

const App = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const theme = useTheme();

  const handleDrawerToggle = (open) => () => {
    setIsDrawerOpen(open);
  };

  const drawerList = (
    <Box role="presentation" onKeyDown={handleDrawerToggle(false)}>
      <Box
        sx={{
          padding: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          color="success"
          sx={{ borderRadius: "40px", padding: "12px 28px" }}
        >
          Open Demat Account
        </Button>
      </Box>
      <List>
        {Object.keys(categories).map((categoryKey) => (
          <Accordion key={categoryKey} disableGutters>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{ paddingY: "5px" }}
            >
              <Typography>{categoryKey}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ p: 0, backgroundColor: "gray" }}>
              {categories[categoryKey].map((item) => (
                <Accordion key={item} disableGutters>
                  <AccordionSummary
                    expandIcon={categories1[item] ? <ExpandMoreIcon /> : null}
                    sx={{ backgroundColor: "#f5f5f8" }}
                  >
                    <Typography>{item}</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ p: 0 }}>
                    {categories1[item] &&
                      categories1[item].map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.url}
                          underline="none"
                        >
                          <Typography sx={{ padding: 1 }}>
                            {subItem.name}
                          </Typography>
                        </Link>
                      ))}
                  </AccordionDetails>
                </Accordion>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </List>
      <div className="flex w-full p-3 items-start">
        <div className="flex flex-col items-start bg-gray-100 rounded-lg p-3 w-full space-y-3">
          <div className="flex flex-row space-x-2 items-center">
            <p className="text-sm font-semibold">DOWNLOAD APP</p>
            <p className="text-sm text-green-600">1 Crore + Downloads</p>
          </div>
          <div className="flex flex-row space-x-2 items-center">
            <img
              src="/apple_round_logo.avif"
              alt="Apple"
              className="w-10 h-10"
            />
            <p className="text-sm">4.7</p>
            <Rating
              name="half-rating"
              defaultValue={4.5}
              precision={0.5}
              sx={{ fontSize: "medium" }}
              readOnly
            />
            <img
              src="/playstore_round_logo.avif"
              alt="Play Store"
              className="w-10 h-10"
            />
            <p className="text-sm">4.7</p>
            <Rating
              name="half-rating"
              defaultValue={4.5}
              precision={0.5}
              sx={{ fontSize: "medium" }}
              readOnly
            />
          </div>
        </div>
      </div>
    </Box>
  );

  return (
    <div className="relative min-h-screen bg-[#1a1c1f]">
      <Navbar
        handleDrawerToggle={handleDrawerToggle}
        isDrawerOpen={isDrawerOpen}
      />
      <SwipeableDrawer
        anchor="right"
        open={isDrawerOpen}
        onClose={handleDrawerToggle(false)}
        onOpen={handleDrawerToggle(true)}
        ModalProps={{
          keepMounted: true,
          BackdropProps: { invisible: true },
        }}
        PaperProps={{
          style: {
            top: "80px",
            [theme.breakpoints.down("md")]: {
              width: "100%",
              left: 0,
              right: 0,
            },
            [theme.breakpoints.up("lg")]: { width: 400 },
          },
        }}
      >
        {drawerList}
      </SwipeableDrawer>
    </div>
  );
};

export default App;
