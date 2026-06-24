import PageHeader from "../components/ui/PageHeader";
import FormField from "../components/ui/FormField";
import MapPinIcon from "../assets/icons/map-pin.svg?react";
import PhoneIcon from "../assets/icons/phone.svg?react";
import MailIcon from "../assets/icons/mail.svg?react";
import RightArrowIcon from '../assets/icons/right-arrow.svg?react'

import "./ContactUsPage.css";

export default function ContactUsPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Fill out the form below and we will contact you within 24 hours."
      />
      <div className="form-contact-container">
        <form action="">
          <FormField
            label="Full Name"
            name="fullName"
            placeholder="Dr. Jane Smith"
          />
          <FormField
            label="Work Email"
            name="workEmail"
            placeholder="jane@clinic.org"
          />
          <FormField
            label="Phone (optional)"
            name="phone"
            placeholder="jane@clinic.org"
          />
          <FormField
            label="Your message"
            name="message"
            placeholder="e.g. deviation reporting, risk assessment etc."
            isMessage={true}
          />
          <button type="submit">Send Inquiry {<RightArrowIcon/>}</button>
        </form>

        <div className="right-side">
          <div className="contact-details">
            <h4>Contact Details</h4>
            <div className="contact-detail">
              <div className="icon-container">
                <MailIcon />
              </div>
              <div className="contact-detail-text">
                <h5>Email</h5>
                <p>hello@sevaxa.se</p>
              </div>
            </div>
            <div className="contact-detail">
              <div className="icon-container">
                <PhoneIcon />
              </div>
              <div className="contact-detail-text">
                <h5>Phone</h5>
                <p>073 533 57 45</p>
              </div>
            </div>
            <div className="contact-detail">
              <div className="icon-container">
                <MapPinIcon />
              </div>
              <div className="contact-detail-text">
                <h5>Adress</h5>
                <p>Lorem ipsum 1293, Stockholm</p>
              </div>
            </div>
          </div>
          <hr />
          <p>We normally respond within one business day. Demo meetings take place digitally via Teams or Zoom.</p>
        </div>
      </div>
    </>
  );
}
