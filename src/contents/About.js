import React from 'react'

export default class About extends React.Component {
	render() {
		return (
			<>
			<div className="parallax">
	          <section>
	            <div className="image-about" data-type="background" data-speed="2"></div>
	              <div className="stuff" data-type="content">
	      	    	<h1>Become a developer </h1>
	      	    	<h2>Learn programming languages </h2>
	      	    </div>
	          </section>
	        </div>

	        <section className="text-center">
	          <div className="jumbotron text-center m-0">

	            <h2 className="card-title h2">Frontend</h2>

	            <div className="row d-flex justify-content-center animated fadeInRightBig">

	              <div className="col-xl-7 pb-2">

	                <p className="card-text">I was a Frontend. Using CSS, Jquery, SASS, was common at that time. But I am weak in using graphic design applications such as Photoshop or Collerdraw. Even though the application is actually required by Web Design, not frontend. But now I'm getting interested again since the existence of React. I think React Js is interesting with its DOM technology. Who used to write Javascript scripts in HTML, now feels like writing HTML in Javascript.</p>

	              </div>

	            </div>

	            <hr className="my-4" />

	            <div className="pt-2 animated fadeInLeftBig">
	              <h4 className="card-title h4">Framework Frontend</h4>
	              <p className="card-text">
				  In the past, the frontend framework was Bootstrap, Bulma, Materialize, Material Design Lite, MDB, and other CSS or SASS based. But now the so-called frontend framework is Reactjs, Angular, Vue and their friends who are more inclined towards javascript. How come now everything is based on JS, I don't know what the jokes among JS developers "Everything will be javascript in time" will actually come true.
	              </p>
	            </div>
	          </div>
	        </section>

	        <div className="parallax">
	          <section>
	            <div className="image-about" data-type="background" data-speed="7"></div>
	            <div className="stuff" data-type="content">
		    	      <h2>All Will Be Javascript In Time</h2>
		    	      <p> Vanilla, JQuery, Node, React, Electron, IoT.js</p>
		            </div>
	          </section>
	        </div>

	        <section className="text-center">
	          <div className="jumbotron text-center m-0">

	            <h2 className="card-title h2">Backend</h2>

	            <div className="row d-flex justify-content-center animated fadeInRightBig">

	              <div className="col-xl-7 pb-2">

	                <p className="card-text">I was a Backend. Actually, I can say that I have just become a Backend Developer, only recently experienced using Node. At that time, my company used Node for server side before switching to Lumen (Laravel's Micro Framework). I studied quite a lot there. Starting from handling web servers, creating flow databases, complex queries, creating flow systems, error handling and validation to security, using cached Redis to optimize pre load content. Now there is also the Go language from google which when I compare it to PHP is much faster. The language writing is unique.</p>

	              </div>

	            </div>

	            <hr className="my-4" />

	            <div className="pt-2 animated fadeInLeftBig">
	              <h4 className="card-title h4">Framework Backend</h4>
	              <p className="card-text">
	              There are many different backend frameworks. One of them is Node which is again from Javascript. Nodes are fairly stable and flexible to use for the server side. Besides that, there is Lumen which is also used in my former workplace. There is Gin which is the framework for Golang. However, some say that using golang natively without a framework is even better for its performance.
	              </p>
	            </div>
	          </div>
	        </section>

	        <div className="parallax">
	          <section>
	            <div className="image-about" data-type="background" data-speed="7"></div>
	            <div className="stuff" data-type="content">
		    	      <h2>"What you see is what you get"</h2>
		    	      <p>Gill Bates, WINDOWS</p>
		            </div>
	          </section>
	        </div>

	        <section className="text-center">
	          <div className="jumbotron text-center m-0">

	            <h2 className="card-title h2">Fullstack</h2>
	            	<p className="blue-text my-4 font-weight-bold"></p>

	            <div className="row d-flex justify-content-center animated fadeInRightBig">

	              <div className="col-xl-7 pb-2">

	                <p className="card-text"><i></i></p>

	              </div>

	            </div>
	          </div>
	        </section>
	        </>
		)
	}
}