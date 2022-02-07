import React, { Component } from "react";

export default class Experience extends Component {
  render() {
    return (
      <div className="section">
        <h1>Experience</h1>
        <h3>Regional Manager</h3>
        <p> Dunder Mifflin Sabre (formerly Dunder Mifflin) —2001-2011</p>

        <p className="experience-marbot p-justify">
          {" "}
          Maintained superior sales and operational performance during corporate
          downsizing period. Absorbed 6 staff members and all customer accounts
          from Stamford region after branch closure. Led transitional activities
          during mergers with both Michael Scott Paper Company and Sabre, Inc.
          Unified policies, procedures,and operations, as well as trained staff
          on new products and tactics for penetrating customer accounts (that’s
          what she said).
        </p>
        <h3>Founder</h3>
        <p>Michael Scott Paper Company —2009-2009</p>
        <p className="experience-marbot p-justify">
          Successfully undersold Dunder Mifflin through unfair competition and
          at-loss pricing strategies. Negotiated sale company to Dunder Mifflin
          for a five-figure profit.
        </p>
        <h3>Sales Representative</h3>
        <p>Dunder Mifflin Paper Company —1992-2001</p>

        <p className="experience-marbot">
          Scranton's top salesman in six consecutive years.
        </p>
        <h3>Telemarketer</h3>
        <p>Unknown Company —2007-2007</p>

        <p className="experience-marbot-extra">Made no sales</p>
      </div>
    );
  }
}
