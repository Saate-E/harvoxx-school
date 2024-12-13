import React, { useState } from "react";
import logo from "../Images/logo.png";
import { Supabase } from "../config/supabase-config";
import Modal from "react-modal";
import { Link } from "react-router-dom";

const Status = () => {
  const [email, setEmail] = React.useState("");
  const [Data, setData] = React.useState(null);

  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const emailCheck = (e) => {
    setEmail(e.target.value);
  };

  const CheckStatus = () => {
    Supabase.from("harvoxx-school-users")
      .select("*")
      .eq("email", email)

      .then((response) => {
        console.log(response);
        if (response.error) {
          // show error message
          alert(response.error.message);
        } else {
          if (response.data.length < 1) {
            alert("User not found");
          } else {
            setData(response.data[0]);
            setIsOpen(true);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="status">
      <header>
        <nav>
          <Link to='/'><img src={logo} alt="" /></Link>
        </nav>
      </header>

      <section>
        <div>
          <h2>
            DSP<span>-300</span> Cohort 3
          </h2>
          <p>
          DSP-300 Is a well-structured training on modern and in-demand Tech Skills for 300 youths in Rivers State. The training is completely free.
          </p>
        </div>

        <div className="form-c">
          <div className="status-form">
            <input
              type="email"
              value={email}
              name=""
              id=""
              placeholder="Email"
              onChange={emailCheck}
            />
            <button onClick={CheckStatus}>Check Status</button>
          </div>
        </div>
      </section>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="Example Modal"
        className="two"
        style={{
          overlay: {
            position: "fixed",
            top: "0px",
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 12,
            // backgroundColor: "hsl(0, 0%, 0%, .5)",
            backgroundColor: "hsl(0, 0%, 0%, .6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      >
        <div className="confirm confirms">
          <h4>Congratulations, your Harvoxx School account have been activated successfully. Use the following details to access your account.</h4>
          
          <h3  style={{ color: "black" }}>Admission No. <span style={{ color: "green" }}>{Data && Data.admision_no}</span></h3>
          <h3 style={{ color: "black" }}>password: <span style={{ color: "green" }}>{Data && Data.password}</span></h3>
        </div>
      </Modal>
    </div>
  );
};

export default Status;
