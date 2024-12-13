import React, { useState, useEffect } from "react";
import { Supabase } from "../config/supabase-config";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-modal";



const Contact = () => {


  const navigate = useNavigate();

  const congrat = () => {
    setIsOpen(false)
    // window.location.reload(false);
  };



  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };


  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialValues);

  const [inputValue, setInputValue] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const [isSubmit, setIsSubmit] = useState(false);


  const handleChange = (e) => {
    // const {fullname, value} = e.target;
    setFormData({ ...formData, name: e.target.value });
    console.log(formData);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    setFormErrors(validate(formData));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formData);
    }
  }, [formErrors]);

  


  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  
    
    if (!values.name) {
      errors.name = "Name is required";
    } else if (!values.email) {
      errors.email = "Email is required";
    } else if (!values.message) {
      errors.message= "Message is required";

    }else{
      Supabase.from("contact-public")
        .upsert([
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            
          },
        ])
        .then((response) => {
          console.log(response);
          setIsOpen(true);
        });
          }
    return errors;
  };

  


  return (
    
    <div className='contact' id="contact" >
        <h1>Contact Us</h1>
        <div className='contact-form'>
            <div className='inputs' >
            <label htmlFor="name">
                <input type="text" name="" id="" placeholder='Full Name' value={formData.name} 
                onChange={(e) => {
                setFormData({
                  ...formData,
                  name: e.target.value,
                });
              }} 
              />
               <p style={{ color: "red", fontSize: "14px" }}>{formErrors.name}</p>

              </label>

              <label htmlFor="email">
                <input type="email" name="" id="" placeholder='Email' value={formData.email} 
                 onChange={(e) => {
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  });
                }}
                 />
                  <p style={{ color: "red", fontSize: "14px" }}>{formErrors.email}</p>

                  </label>


              <label htmlFor="message">
                <textarea name="" id="" cols="30" rows="10" placeholder='Message' value={formData.message} onChange={(e) => {
                setFormData({
                  ...formData,
                  message: e.target.value,
                });
              }} ></textarea>
              <p style={{ color: "red", fontSize: "14px" }}>{formErrors.message}</p>


            </label>
                <input type="submit" value="Send"  className='sub' onClick={handleSubmit}/>
            </div>

            <div className='info'>
                <div>
                    <h1>Address</h1>
                    <p>Elzazi complex, Opposite WesHarm petrol station along gbalajam/Akpajo road, woji ( Odili Road, Port-Harcourt )</p>

                </div>

                <div className='link'>
                    <h1>Email Us</h1>
                    <p><a href="mailto:hi@harvoxx.com">Hi@harvoxx.com</a></p>
                    <p><a href="mailto:partners@harvoxx.com">Partners@harvoxx.com</a></p>
                    <p><a href="mailto:school@harvoxx.com">School@harvoxx.com</a></p>
                </div>

                <div className='link'>
                    <h1>Call Us</h1>
                    <p><a href="tel:+2349011684637">+2349011684637</a></p>
                    <p><a href="tel:+2349065308024">+2349065308024</a></p>
                    <p><a href="tel:+2349030643105">+2349030643105</a></p>
                </div>

            </div>
        </div>


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
        <div className="confirm">
          <h1>Thanks for Contacting Us</h1>
         
          <button type="button" onClick={congrat}>
            OK
          </button>
        </div>
      </Modal>

    </div>
  )
}

export default Contact