import React, { useState } from "react";
import "./join.css";
import "antd/dist/antd.css";
import { Form, Button, Modal } from "antd";
import emailjs from "@emailjs/browser";
import Rocket from "../../assets/img-2.0/rocket.png";
import { NotificationManager } from "react-notifications";

function Accessbtn({ title }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [mailId, setMailId] = useState("");

  //join early btn
  const showModal = () => {
    setIsModalVisible(true);
  };

  //Get access btn
  const joinEarly = async () => {
    // User details goes here
    var templateParams = {
      from_name: name,
      email: mailId,
    };
    try {
      if (name.trim() === "" || mailId.trim() === "") {
        return;
      }
      let response = await emailjs
        .send(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          templateParams,
          process.env.REACT_APP_PUBLIC_KEY
        );

      if (response.status === 200) {
        setIsModalVisible(false);
        Modal.success({
          title: 'Awesome',
          content: "Check you email for more details, we'll see you soon!",
        });

      }
    } catch (err) {
      NotificationManager.warning(
        "Unable to register, Please try again later!",
        "Warning",
        3000
      );
      console.error("Error on Get Early Access: EMAILJS.");
    }
  };

  // cross icon
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div >
      <button
        type="primary"
        className="join-cta"
        onClick={() => {
          showModal();
        }}
      >
    Join Early Access   
      </button>
      <Modal
      centered
        visible={isModalVisible}
        onOk={joinEarly}
        okText="Get Access"
        onCancel={handleCancel}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        footer={null}
      >
        <img className="Rocket-img" src={Rocket} alt="Rocket" />
        <Form>
          <Form.Item
            label="Name"
            name="Name"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <input
              placeholder="enter name"
              type="text"
              className="access-input"
              style={{ marginBottom: "20px" }}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Item>

          <Form.Item
            label="Email"
            name="Email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <input
              placeholder="enter email"
              type="email"
              className="access-input"
              style={{ marginBottom: "20px" }}
              onChange={(e) => setMailId(e.target.value)}
              required
            />
          </Form.Item>
          <Form.Item style={{ textAlign: "center" }}>
            <button   className="join-cta" type="primary" htmlType="submit" onClick={joinEarly}>
              Get Access
            </button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default Accessbtn;