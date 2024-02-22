import React, { Component } from "react";

class Footer extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var networks = this.props.sharedBasicInfo.social.map(function (network) {
        return (
          <span key={network.name} className="m-4">
            <a href={network.url} target="_blank" rel="noopener noreferrer">
              <i className={network.class}></i>
            </a>
          </span>
        );
      });
      var phonenumber = this.props.sharedBasicInfo.contactdetails.map(function (phonenumber) {
        return (
          // <span key={phonenumber.name} className="m-4">
          //   <a href={phonenumber.url} target="_blank" rel="noopener noreferrer">
          //     <i className={phonenumber.class}></i>
          //   </a>
          // </span>
          <span className="m-4">
            <a href={phonenumber.phonelink} target="_blank" rel="noopener noreferrer">
            <div className="d-flex align-items-cente justify-content-center">
              <i style={{fontSize:20}} className="fa fa-phone mr-3"></i>
              <h3 className="mb-0">{phonenumber.phone}</h3>
              </div>
            </a>
          </span>
        );
      });
      var emailaddress = this.props.sharedBasicInfo.contactdetails.map(function (emailaddress) {
        return (
          // <span key={emailaddress.name} className="m-4">
          //   <a href={emailaddress.url} target="_blank" rel="noopener noreferrer">
          //     <i className={emailaddress.class}></i>
          //   </a>
          // </span>
          <span className="m-4">
            <a href={emailaddress.emaillink} target="_blank" rel="noopener noreferrer">
            <div className="d-flex align-items-cente justify-content-center">
              <i style={{fontSize:20}} className="fa fa-envelope mr-3"></i>
              <h3 className="mb-0">{emailaddress.email}</h3>
              </div>
            </a>
          </span>
        );
      });
      var cityname = this.props.sharedBasicInfo.contactdetails.map(function (cityname) {
        return (
          // <span key={cityname.name} className="m-4">
          //   <a href={cityname.url} target="_blank" rel="noopener noreferrer">
          //     <i className={cityname.class}></i>
          //   </a>
          // </span>
          <span className="m-4">
            <a href={cityname.citylink} target="_blank" rel="noopener noreferrer">
              <div className="d-flex align-items-cente justify-content-center">
              <i style={{fontSize:20}} className="fas fa-city mr-3"></i>
              <h3 className="mb-0">{cityname.city}</h3>
              </div>
            </a>
          </span>
        );
      });
    }

    return (
      <footer>
        <div className="col-md-12">
          <div className="row">
          <div className="col-md-3 col-sm-6 text-center">
            <div>{phonenumber}</div>
            </div>
          <div className="col-md-3 col-sm-6 text-center">
            <div>{emailaddress}</div>
            </div>
            <div className="col-md-3 col-sm-6 text-center">
            <div>{cityname}</div>
            </div>
            <div className="col-md-3 col-sm-6 text-center">
            <div className="social-links d-flex align-items-cente justify-content-center">{networks}</div>
            </div>
          </div>

          <div className="copyright py-4 text-center">
            <div className="container">
              <small>
                Copyright &copy;{" "}
                {this.props.sharedBasicInfo
                  ? this.props.sharedBasicInfo.name
                  : "???"}
              </small>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
