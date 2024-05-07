import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./VerticalTabs.css";
import Dashboard from "../Dashboard/Dashboard";
import Profile from "../Profile/Profile";
import Jobs from "../Jobs/Jobs";
import Messages from "../Messages/Messages";
import Candiadates from "../Candidates/Candiadates";
import Settings from "../Settings/Settings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import WorkIcon from "@mui/icons-material/Work";
import ChatIcon from "@mui/icons-material/Chat";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsIcon from "@mui/icons-material/Notifications";

const VerticalTabs = () => {
  return (
    <Tabs>
      <div className="row">
        <div className="col-md-2 col-2">
          <TabList className="vertical-tab-list">
            <div>
              <h2 className="text-center mt-3 brand">Jobify</h2>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIh4IEgxDsN5D4a92W4f9pEpM7oxl0vM_row&s"
                className="circle-image text-center"
              />
            </div>
            <div>
              <h4 className="text-center profile_name">Ashish Aby</h4>
            </div>
            <Tab>
              <DashboardIcon />
              <span className="dash_item">Dashboard</span>
            </Tab>
            <Tab>
              {" "}
              <AccountCircleIcon />
              <span className="dash_item"> My Profile</span>
            </Tab>
            <Tab>
              {" "}
              <WorkIcon />
              <span className="dash_item">My Jobs</span>
            </Tab>
            <Tab>
              {" "}
              <ChatIcon />
              <span className="dash_item">Messages</span>
            </Tab>
            <Tab>
              {" "}
              <PeopleAltIcon />
              <span className="dash_item">See Candidates</span>
            </Tab>
            <Tab>
              <SettingsIcon />
              <span className="dash_item">Settings</span>
            </Tab>
            <Tab>
              <LogoutIcon />
              <span className="dash_item">Logout</span>
            </Tab>
          </TabList>
        </div>
        <div className="col-md-10 col-10">
          <div className="container-fluid">
            <div style={{ float: "right" }} className="row">
              <span className="bell-icon">
                <NotificationsIcon />
              </span>
              <button className="post-bob-btn">Post a Job</button>
            </div>
          </div>
          <TabPanel>
            <Dashboard />
          </TabPanel>
          <TabPanel>
            <Profile />
          </TabPanel>
          <TabPanel>
            <Jobs />
          </TabPanel>
          <TabPanel>
            <Messages />
          </TabPanel>
          <TabPanel>
            <Candiadates />
          </TabPanel>
          <TabPanel>
            <Settings />
          </TabPanel>
        </div>
      </div>
    </Tabs>
  );
};

export default VerticalTabs;
