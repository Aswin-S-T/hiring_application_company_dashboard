import React from "react";
import "./Dashboard.css";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

function Dashboard() {
  return (
    <div className="container-fluid screen">
      <h4 className="dashboard-text">Dashboard</h4>
      <br />
      <br />
      <div className="cards">
        <div className="card">
          <div>
            <h5>07</h5>
            <p>Posted Jobs</p>
          </div>
          <div className="color-circle">
            <WorkOutlineIcon style={{ color: "#136339", fontWeight: 600 }} />
          </div>
        </div>
        <div className="card">
          <div>
            <h5>500</h5>
            <p>Candidates</p>
          </div>
          <div className="color-circle">
            <GroupAddIcon style={{ color: "#136339", fontWeight: 600 }} />
          </div>
        </div>
        <div className="card">
          <div>
            <h5>5k</h5>
            <p>Applications</p>
          </div>
          <div className="color-circle">
            <VisibilityIcon style={{ color: "#136339", fontWeight: 600 }} />
          </div>
        </div>
        <div className="card">
          <div>
            <h5>500</h5>
            <p>Available Credits</p>
          </div>
          <div className="color-circle">
            <CurrencyRupeeIcon style={{ color: "#136339", fontWeight: 600 }} />
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6">
          <div>
            <img
              src="https://images.squarespace-cdn.com/content/v1/55b6a6dce4b089e11621d3ed/1585087896250-R3GZ6OFWYQRZUJRCJU3D/produce_monthly.png"
              className="w-100"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div>
            <div className="card-2 p-4">
              <h4>Posted Jobs</h4>
              <hr />
              <div>
                <h6>No jobs posted yet</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
