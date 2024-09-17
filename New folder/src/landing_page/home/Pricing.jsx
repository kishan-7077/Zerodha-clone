import React from "react";

function Pricing() {
	return (
		<div className="container mb-5">
			<div className="row">
				<div className="col-4">
					<h1 className="mb-3 fs-2">Unbeatable Pricing</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex dolorem
						reprehenderit, itaque corporis voluptas.
					</p>
					<a href="#" style={{ textDecoration: "none" }}>
						See pricing <i class="fa-solid fa-arrow-right"></i>
					</a>
				</div>
				<div className="col-2"></div>
				<div className="col-6 mb-5">
					<div className="row text-center">
						<div className="col p-3 border">
							<h1 className="mb-3">
								<i class="fa-solid fa-indian-rupee-sign"></i>0
							</h1>
							<p>
								Free equity delivery and <br /> direct mutual funds
							</p>
						</div>
						<div className="col p-3 border">
							<h1 className="mb-3">
								<i class="fa-solid fa-indian-rupee-sign"></i>20
							</h1>
							<p>Intraday and F&O</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Pricing;
