import React from "react";

function Awards() {
	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col-6 p-5">
					<img src="media/images/largestBroker.svg" alt="#" />
				</div>
				<div className="col-6 p-5 mt-3">
					<h1>Largest stock broler in India</h1>
					<p className="mb-5">
						2+ million Zerodha clients contribute to over 15% of all retail
						order volumes in India daily by trading and investing in:
					</p>
					<div className="row">
						<ul className="col-6">
							<li>
								<p>Futures and Options</p>
							</li>
							<li>
								<p>Commodity derivatives</p>
							</li>
							<li>
								<p>Currency dericatives</p>
							</li>
						</ul>
						<ul className="col-6">
							<li>
								<p>Stocks & IPOs</p>
							</li>
							<li>
								<p>Direct mutual funds</p>
							</li>
							<li>
								<p>Bonds and Govt. Securites</p>
							</li>
						</ul>
					</div>
					<img
						src="media/images/pressLogos.png"
						alt="#"
						style={{ width: "90%" }}
					/>
				</div>
			</div>
		</div>
	);
}

export default Awards;
