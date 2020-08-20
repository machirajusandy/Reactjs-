import React from 'react'

export default class Home extends React.Component {
	render() {
		return (
			<>
			<div className="parallax">
	          <section>
	            <div className="image" data-type="background" data-speed="2"></div>
	              <div className="stuff" data-type="content">
	      	    	<h1>Welcome</h1>
	      	    	<h2>To this  website</h2>
	      	    </div>
	          </section>
	        </div>

	        <section className="text-center">
	          <div className="jumbotron text-center m-0">

	            <h2 className="card-title h2">Developer</h2>
	            <p className="blue-text my-4 font-weight-bold">
				It's about being a developer</p>

	            <div className="row d-flex justify-content-center animated fadeInRightBig">

	              <div className="col-xl-7 pb-2">

	                <p className="card-text">Technology, especially Information Technology, is broad, there are Programmers, Networking, IT Support, DBA (Data Base Administrator), and many more. Some of these categories are still broken down, for example programmers have web programmers, desktop programmers, Android, iOS, etc. Some are broken down based on their expertise, for example PHP programmers, JAVA programmers, Microtik, Oracle Developer, Wordpress Developer etc.</p>

	              </div>

	            </div>

	            <hr className="my-4" />

	            <div className="pt-2 animated fadeInLeftBig">
	              <p>To become a developer, you must master at least 1 or more programming languages, and know other "tools" or technology that can help your job. The more you master and the more knowledge you have, the better your qualification as a developer. But you still have to have 1 that is really good. Stay humble and keep learning to grow as the motto "Arch Linux". Simple and Stupid</p>
	            </div>
	          </div>
	        </section>

	        <div className="parallax">
	          <section>
	            <div className="image" data-type="background" data-speed="7"></div>
	            <div className="stuff" data-type="content">
		    	      <h2> Be hungry </h2>
		    	      <p>"keep learning"</p>
		            </div>
	          </section>
	        </div>
	        </>
		)
	}
}