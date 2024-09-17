import React from "react";

function Hero() {
	return (
		<div className="container">
			<div className="row p-5 mt-5 border-bottom text-center">
				<h1 className="mt-5">Pricing</h1>
				<h3 className="mt-3 text-muted fs-5">
					Free equity investments and flat &#8377;20 traday and F&O trades
				</h3>
			</div>
			<div className="row p-4 mt-5 text-center">
				<div className="col-4">
					<img src="media/images/pricingEquity.svg" alt="#" />
					<h1 className="fs-3">Free equity delivery</h1>
					<p className="text-muted">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
						labore ullam quam perspiciatis enim mollitia.
					</p>
				</div>
				<div className="col-4">
					<img src="media/images/intradayTrades.svg" alt="#" />
					<h1 className="fs-3">Intraday and F&O trades</h1>
					<p className="text-muted">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
						labore ullam quam perspiciatis enim mollitia.
					</p>
				</div>
				<div className="col-4">
					<img src="media/images/pricingEquity.svg" alt="#" />
					<h1 className="fs-3">Free direct MF</h1>
					<p className="text-muted">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
						labore ullam quam perspiciatis enim mollitia.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Hero;
