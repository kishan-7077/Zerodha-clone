import React from "react";

function Hero() {
	return (
		<div className="container p-5 mb-5">
			<div className="row text-center">
				<img src="media/images/homeHero.png" alt="Hero" className="mb-5" />
				<h1 className="mt-5">Invest in Everything</h1>
				<p>
					Online Platform to invest in stocks, derivatives, mutual funds, and
					more
				</p>
				<button
					type="button"
					className="btn btn-primary col-4 mb-5"
					style={{ margin: "0 auto" }}
				>
					SignUp Now
				</button>
			</div>
		</div>
	);
}

export default Hero;
