import { useState } from "react";
import classes from "./Contact.module.css";

function Contact() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");

  const [showPopup, setShowPopup] = useState(false);

  const packages = ["Package One", "Package Two", "Package Three", "Package Four"];

  // ✅ WHATSAPP SUBMISSION
  const handleSubmit = () => {
    if (!fullName || !phone || !selectedPackage) {
      alert("Please fill all required fields.");
      return;
    }

    // 👉 YOUR WHATSAPP NUMBER HERE
    const whatsappNumber = "919637323661";  // <--- replace with your number

    const message = `
*New Booking Enquiry*
------------------------
*Full Name:* ${fullName}
*Phone:* ${phone}
*Notes:* ${notes || "No notes"}
*Package:* ${selectedPackage}
    `;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <div className={classes.parentContactUsBlock}>

      <div className={classes.conactUsDetails}>
        <div className={classes.title}>This is the Fucking title of the leafy green</div>

        <div className={classes.description}>
          Everything starts with NON-GMO seeds and grains carefully selected to ensure the healthiest alternative ingredients...
        </div>
      </div>

      <div className={classes.fromBlock}>

        <h2>Booking Form</h2>

        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className={classes.input}
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={classes.input}
        />

        <textarea
          placeholder="Notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className={classes.textarea}
        ></textarea>

        {/* PACKAGE BUTTON */}
        <button className={classes.button} onClick={() => setShowPopup(true)}>
          {selectedPackage || "Choose Package"}
        </button>

        {/* POPUP */}
        {showPopup && (
          <div className={classes.popupOverlay}>
            <div className={classes.popupBox}>
              <h3>Select a Package</h3>

              {packages.map((pkg, index) => (
                <button
                  key={index}
                  className={classes.optionButton}
                  onClick={() => {
                    setSelectedPackage(pkg);
                    setShowPopup(false);
                  }}
                >
                  {pkg}
                </button>
              ))}

              <button className={classes.closeBtn} onClick={() => setShowPopup(false)}>
                Close
              </button>
            </div>
          </div>
        )}

        <button className={classes.submitButton} onClick={handleSubmit}>
          Submit
        </button>

      </div>
    </div>
  );
}

export default Contact;
