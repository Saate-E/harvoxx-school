import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Supabase } from "../config/supabase-config";
import { validCodes } from "../utils/Data";
import logo from "../Images/logo.png";

const ApplicationForm = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "auto";
  }, [pathname]);

  const initialValues = {
    fullname: "",
    gender: "",
    age: "",
    email: "",
    address: "",
    course: "",
    phone: "",
  };

  const [formData, setFormData] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => setInputValue(e.target.value);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.fullname) {
      errors.fullname = "Full name is required";
    } else if (!values.phone) {
      errors.phone = "Phone number is required";
    } else if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email";
    } else if (!values.gender) {
      errors.gender = "Select your gender";
    } else if (!values.age) {
      errors.age = "Age range is required";
    } else if (!values.course) {
      errors.course = "Select preferred course";
    } else if (!values.address) {
      errors.address = "Fill in your address";
    }

    if (inputValue.trim() !== "" && !validCodes.includes(inputValue)) {
      errors.code = `${inputValue} is an invalid code`;
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate(formData);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setLoading(true); // Start loading
      try {
        // Check if email already exists
        const { data: existingEmail } = await Supabase.from("dsp300-c4")
          .select("email")
          .eq("email", formData.email);

        if (existingEmail.length > 0) {
          setFormErrors({ email: "This email is already registered." });
          return;
        }

        // Check if recommendation code is already used
        if (inputValue.trim() !== "") {
          const { data: existingCode } = await Supabase.from("dsp300-c4")
            .select("code")
            .eq("code", inputValue);

          if (existingCode.length > 0) {
            setFormErrors({
              code: `The code "${inputValue}" has already been used.`,
            });
            return;
          }
        }

        // Proceed to submit if validations pass
        await Supabase.from("dsp300-c4").upsert([
          {
            name: formData.fullname,
            email: formData.email,
            metadata: formData,
            code: inputValue || null,
          },
        ]);
        navigate("/Congrat");
      } catch (error) {
        console.error("Error submitting form:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    }
  };

  return (
    <div className="application">
      <div className="form-text">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <h2>
          "Embrace the power of learning tech skills; for with each new skill
          you acquire, you unlock the door to innovation and shape a brighter
          future for yourself and the world."
        </h2>
      </div>

      <div className="formHolder">
        <h4>Application for DSP-300 C4</h4>
        <p>Fill in your Details</p>
        <form onSubmit={handleSubmit} className="form">
          <label>
            <p>Full Name</p>
            <input
              type="text"
              placeholder="Enter Full Name"
              value={formData.fullname}
              onChange={(e) =>
                setFormData({ ...formData, fullname: e.target.value })
              }
            />
            <p style={{ color: "red" }}>{formErrors.fullname}</p>
          </label>

          <label>
            <p>Phone Number</p>
            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
            <p style={{ color: "red" }}>{formErrors.phone}</p>
          </label>

          <label>
            <p>Email Address</p>
            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <p style={{ color: "red" }}>{formErrors.email}</p>
          </label>

          <label>
            <p>Gender</p>
            <select
              value={formData.gender}
              onChange={(e) =>
                setFormData({ ...formData, gender: e.target.value })
              }
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <p style={{ color: "red" }}>{formErrors.gender}</p>
          </label>

          <label>
            <p>Age Range</p>
            <select
              value={formData.age}
              onChange={(e) =>
                setFormData({ ...formData, age: e.target.value })
              }
            >
              <option value="">Select Age Range</option>
              <option value="18-25">18-25</option>
              <option value="26-30">26-30</option>
              <option value="31-35">31-35</option>
            </select>
            <p style={{ color: "red" }}>{formErrors.age}</p>
          </label>

          <label>
            <p>Course</p>
            <select
              value={formData.course}
              onChange={(e) =>
                setFormData({ ...formData, course: e.target.value })
              }
            >
              <option value="">Select Course</option>
              <option value="Product Design">Product Design</option>
              <option value="Product Management">Cyber Security</option>
              <option value="Data Analytics">Data Analytics</option>
              <option value="Frontend Development">
                Web Development(Frontend)
              </option>
              <option value="Digital Marketing">Digital Marketing</option>
            </select>
            <p style={{ color: "red" }}>{formErrors.course}</p>
          </label>

          <label>
            <p>Residential Address</p>
            <input
              type="text"
              placeholder="Enter Address"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
            />
            <p style={{ color: "red" }}>{formErrors.address}</p>
          </label>

          <label>
            <p>Recommendation Code (Optional)</p>
            <input
              type="text"
              placeholder="Optional"
              value={inputValue}
              onChange={handleInputChange}
            />
            <p style={{ color: "red" }}>{formErrors.code}</p>
          </label>

          <div className="submit">
            <button type="submit" disabled={loading}>
              {loading ? "Enrolling..." : "Enroll"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
