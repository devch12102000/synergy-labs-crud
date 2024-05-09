import { Grid } from "@mui/material";
import user from '../../../../src/asset/user.jpg'
import './style.css'
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

    return(
        <Grid container className="dashboard-main">
            <Grid item xs={24} sm={24} md={12} lg={12} xl={12} className="dashboard-container">
                <Grid className="users-tab" onClick={() => navigate('/users')}>
                    <div className="top-container">USERS</div> 
                    <div className="bottom-container-users"></div>    
                </Grid>  
                <Grid className="users-tab" onClick={() => navigate('/services')}>
                    <div className="top-container">SERVICES</div> 
                    <div className="bottom-container-services"></div>    

                </Grid>                               
            </Grid>
        </Grid>
    )

}

export default Dashboard;