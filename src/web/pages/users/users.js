import React, { useEffect, useState } from "react";
import { Table, Button } from "antd";
import { Grid } from "@mui/material";

import "./style.css";
import { Link } from "react-router-dom";
import Loader from "../../utils/loader/Loader";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import axios from "axios";
import ErrorHandler from "../../utils/ErrorHandler";
import Notification from "../../utils/Notification";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [showActionList, setShowActionList] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const openActionList = (id) => {
    if (showActionList === id) {
      setShowActionList("");
    } else {
      setShowActionList(id);
    }
  };

  const deleteRecord = (id) => {
    setIsLoading(true);
    return axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        Notification.success("Record Deleted!");
        setIsLoading(false);
        setShowActionList("");
      })
      .catch((error) => {
        ErrorHandler(error);
        setIsLoading(false);
        setShowActionList("");
      });
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Action",
      key: "action",
      render: (record) => {
        return (
          <div className="action">
            <MoreVertIcon
              className="icon"
              onClick={() => openActionList(record.id)}
            />
            <div
              className={`popover-menu ${
                showActionList === record.id ? "show" : ""
              }`}
            >
              <div className="popover-item">
                <Link
                  to={`/edit/user/${record.id}`}
                  state={{ editRecord: record }}
                >
                  <EditIcon className="EditIcon icons" />
                  Edit
                </Link>
              </div>
              <div
                className="popover-item"
                onClick={() => deleteRecord(record.id)}
              >
                <DeleteIcon
                  className="deleteIcon icons"
                  style={{ cursor: "pointer" }}
                />
                Delete
              </div>
            </div>
          </div>
        );
      },
    },
  ];

  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .then(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    // <Grid container className="users-main">
    <Grid container className="users-main">
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <h2 className="heading">Users</h2>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        xl={6}
        style={{
          display: "flex",
          justifyContent: "right",
          alignItems: "center",
        }}
      >
        <div className="btnGroup">
          <Button className="submit-btn" type="primary">
            <Link to="/add/user">Add User</Link>
          </Button>
        </div>
      </Grid>

      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className="table-elements-wrapper"
      >
        {/* {isLoading ? (
          <Loader />
        ) : ( */}
        <Table
          loading={{ indicator: <Loader />, spinning: isLoading }}
          columns={columns}
          dataSource={users || []}
          className="table"
          pagination={{
            position: ["bottomCenter"],
            defaultCurrent: 1,
            total: users?.length,
            showTotal: (total) => `Total : ${total}`,
          }}
        />
        {/* )} */}
      </Grid>
    </Grid>
    // </Grid>
    // <></>
  );
};

export default Users;
