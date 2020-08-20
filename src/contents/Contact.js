import React from 'react'

export default class Contact extends React.Component {
	render() {
		return (
      <>
			<div className="container my-5">
          <h2 className="h1-responsive font-weight-bold text-center">Contact Me</h2>
          <p className="text-center w-responsive mx-auto">
          If you have any questions please contact me</p>

          <div className="row">

            <div className="col-lg-12">

              <div id="map-container" className="rounded z-depth-1-half map-container" style={{height: "400px"}}>
                <iframe title="myMaps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1470434583757!2d106.81427831437065!3d-6.244344662881189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTQnMzkuNyJTIDEwNsKwNDgnNTkuMyJF!5e0!3m2!1sen!2sid!4v1595423562055!5m2!1sen!2sid" width="100%" height="400" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
              </div>
              <br />

              <div className="row text-center">

                <div className="col-md-4">
                  <span className="btn btn-floating blue accent-1 white-text" >
                    <i className="fa fa-map-marker fa-2x"></i>
                  </span>
                  <p className="mt-3">India, Hyderabad</p>
                </div>
              
                <div className="col-md-4">
                  <a className="btn btn-floating blue accent-1 white-text" href="tel:+91 9999876542">
                    <i className="fa fa-phone fa-2x"></i>
                  </a>
                  <p className="mt-3">+91 9999876542</p>
                </div>
              
                <div className="col-md-4">
                  <a className="btn btn-floating blue accent-1 white-text" href="mailto:sofyan.agif@outlook.com">
                    <i className="fa fa-envelope fa-2x"></i>
                  </a>
                  <p className="mt-3">sandy@outlook.com</p>
                </div>
              
              </div>
            
            </div>

          </div>

        </div>
        </>
		)
	}
}