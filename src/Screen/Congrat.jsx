import React from "react";
import Navbar from "../ComponentsFolder/Navbar";
import celebrate from "../Images/work-hard-man-and-woman-in-good-mood-celebrating-a-holiday 1.png";
import Footer from "../ComponentsFolder/Footer";

const Congrat = () => {
  return (
    <div>
      <Navbar />
      <div className="congrat">
        <h3>
          Congratulations 🎉👏🎊 You have successfully applied for the Cohort-4
          DSP 300 program.
        </h3>
        <img src={celebrate} alt="Congratulations" />
        <p>
          Keep an eye on your email, selected candidates would receive an email.
        </p>
        <p>
          Orientation starts on the 18th of January 2026 and training begins on
          27th of January, 2026
        </p>
        <a
          href="https://www.facebook.com/HarvoxxOfficial?mibextid=ZbWKwL"
          target="_blank"
        >
          <button type="button">Get More Updates</button>
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default Congrat;
