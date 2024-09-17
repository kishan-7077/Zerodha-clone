import React from "react";

function Hero() {
	return (
		<div className="container">
			<div className="row text-center mt-5 mb-5 p-3">
				<h1 className="mb-4">Technology</h1>
				<h3 className="mb-4 fs-4 text-muted">
					Sleek, modern and intutive trading platforms
				</h3>
				<p>
					Check out our{" "}
					<a href="#" style={{ textDecoration: "none" }}>
						investment offerings <i class="fa-solid fa-long-arrow-right"></i>
					</a>{" "}
				</p>
			</div>
		</div>
	);
}

export default Hero;
