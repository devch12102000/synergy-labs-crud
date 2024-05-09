import {notification} from "antd";

const Notification={
    success:(msg)=>{
        notification.open({
            style: {
                top: 60,
              },
            duration: 10,
              type: "success",
              message: "Success",
              description: msg
            })
    },
    error:(msg)=>{
        notification.open({
            style: {
                top: 60,
              },
            duration: 10,
              type: "error",
              message: "Error",
              description: msg
            })
    },
    info:(msg)=>{
        notification.open({
            style: {
                top: 60,
              },
            duration: 10,
              type: "info",
              message: "Info",
              description: msg
            })
    },
    warning:(msg)=>{
        notification.open({
            style: {
                top: 60,
              },
            duration: 10,
              type: "warning",
              message: "Warning",
              description: msg
            })
    },
}

export default Notification;