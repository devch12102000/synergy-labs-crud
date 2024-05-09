import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Grid } from "@mui/material";
import { Form, Input, Button } from "antd";
import axios from "axios";
import "./style.css";
import Notification from "../../../utils/Notification";
import ErrorHandler from "../../../utils/ErrorHandler";

const EditUser = () => {
  var formData = new FormData();
  const navigate = useNavigate();
  const url = window.location.pathname;
  const modeEdit = url.includes("edit") ? true : false;
  const location = useLocation();
  let editRecord = location.state && location.state.editRecord;

  const updateRecord = (id, data) => {
    return axios
      .put(`https://jsonplaceholder.typicode.com/users/${id}`, data)
      .then((res) => {
        Notification.success("Record Updated!");
      })
      .catch((error) => {
        ErrorHandler(error);
      });
  };

  const saveRecord = (data) => {
    return axios
      .post(`https://jsonplaceholder.typicode.com/users`, data)
      .then((res) => {
        Notification.success("Record Created!");
      })
      .catch((error) => {
        ErrorHandler(error);
      });
  };

  const onFinish = (values) => {
    const data = { ...editRecord, ...values };
    modeEdit ? updateRecord(editRecord.id, data) : saveRecord(data);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="edit-user-main">
      <Grid container className="align-item-center headingSection">
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <div className="heading">
            <h6>{modeEdit ? "Update User" : "Add User"}</h6>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}></Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className="form-elements-wrapper">
            <Form
              name="basic"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={() => console.log("values")}
              autoComplete="off"
            >
              <Grid container spacing={2}>
                <Grid item xs={6} sm={6} md={4} lg={4} xl={4}>
                  <Form.Item
                    label="Name"
                    name="name"
                    initialValue={(editRecord && editRecord.name) || ""}
                    rules={[{ required: true, message: "Please input name!" }]}
                  >
                    <Input placeholder="Name" />
                  </Form.Item>
                </Grid>
                <Grid item xs={6} sm={6} md={4} lg={4} xl={4}>
                  <Form.Item
                    label="Username"
                    name="username"
                    initialValue={(editRecord && editRecord.username) || ""}
                    rules={[
                      { required: true, message: "Please input username!" },
                    ]}
                  >
                    <Input placeholder="Username" />
                  </Form.Item>
                </Grid>
                <Grid item xs={6} sm={6} md={4} lg={4} xl={4}>
                  <Form.Item
                    label="Email"
                    name="email"
                    initialValue={(editRecord && editRecord.email) || ""}
                    rules={[{ required: true, message: "Please input email!" }]}
                  >
                    <Input placeholder="Email" />
                  </Form.Item>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Form.Item>
                    {modeEdit ? (
                      <Button
                        className="submit-btn"
                        type="primary"
                        htmlType="submit"
                      >
                        Update
                      </Button>
                    ) : (
                      <Button
                        className="submit-btn"
                        type="primary"
                        htmlType="submit"
                      >
                        Create
                      </Button>
                    )}
                    <Button
                      className="submit-btn"
                      type="danger"
                      onClick={() => navigate(-1)}
                    >
                      Cancel
                    </Button>
                  </Form.Item>
                </Grid>
              </Grid>
            </Form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default EditUser;
