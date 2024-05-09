import { Route, Routes } from "react-router-dom";
import Users from "../pages/users/users";
import Dashboard from "../pages/dashboard/dashboard";
import EditUser from "../pages/users/editUser/EditUser";
const RouterFlow = () => {
    return(
        <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/dashboard" element={<Dashboard/>} />

            <Route path="/users" element={<Users/>} />
            <Route path="/edit/user/:id" element={<EditUser/>} />
            <Route path="/add/user" element={<EditUser/>} />





            <Route path="*" element={<>Not found</>} />

        </Routes>
    )

}

export default RouterFlow;