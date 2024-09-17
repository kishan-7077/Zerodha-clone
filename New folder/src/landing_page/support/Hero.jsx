import React from "react";

function Hero() {
	return (
		<div className="container-fluid" id="support-hero">
			<div className="p-5  " id="supportWrapper">
				<h4>Support Portal</h4>
				<a href="#">Track Tickets</a>
			</div>
			<div className=" row p-5 mx-5 ">
				<div className="col-6 p-5 ">
					<h1>Search for an answer or browse help topics to create a ticket</h1>

					<input placeholder="Eg. how do i activate F&O,why is my order getting rejected." />
					<br />
					<a href="#">Track account opening</a>

					<a href="#">Track segment activation</a>

					<a href="#">Intraday margins</a>

					<a href="#">Kite user manual</a>
				</div>
				<div className="col-6 p-5 mt-5 mb-5">
					<h1>Featured</h1>
					<ol>
						<li className="mb-2">
							<a href="#">Current Takeovers and Delisting - January 2024</a>
						</li>
						<li>
							<a href="#">Latest Intraday leverages - MIS & Co</a>
						</li>
					</ol>
				</div>
			</div>
		</div>
	);
}

export default Hero;
