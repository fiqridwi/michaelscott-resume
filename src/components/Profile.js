import React, { Component } from "react";
import profileImage from "../images/profile-image.png";
import iconGeolocalize from "../icon/basic_geolocalize-05.svg";
import iconTablet from "../icon/basic_tablet.svg";
import iconMail from "../icon/basic_mail.svg";
import iconPaperplane from "../icon/basic_paperplane.svg";

export default class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
        <div className="profile-image">
          <img src={profileImage} alt="" />
        </div>
        <div className="profile-name">
          <p>Michael G. Scott</p>
        </div>
        <div className="profile-detail">
          <div className="profile-detail--address profile-item">
            <img src={iconGeolocalize} alt="address" className="profile-icon" />
            <p>Scranton, PA</p>
          </div>
          <div className="profile-detail--phone profile-item">
            <img src={iconTablet} alt="phone" className="profile-icon" />
            <p>570-555-1212 </p>
          </div>
          <div className="profile-detail--email profile-item">
            <img src={iconMail} alt="mail" className="profile-icon" />
            <p>michael@dmifflin.com</p>
          </div>
          <div className="profile-detail--social profile-item">
            <img src={iconPaperplane} alt="social" className="profile-icon" />
            <p>@michael_scott</p>
          </div>
        </div>
      </div>
    );
  }
}
