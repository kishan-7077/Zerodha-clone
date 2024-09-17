import React from "react";

function Stats() {
	return (
		<div className="container p-3">
			<div className="row p-5">
				<div className="col-6 p-5">
					<h1 className="fs-2 mb-5">Trust With Confidence</h1>
					<h2 className="fs-4">Customer-first always</h2>
					<p className="text-muted">
						That,s why 1.3+ crore customers trust Zerodha with 3.5+ lakh crores
						worth of equity investments.
					</p>
					<h2 className="fs-4">No Spam or gimmicks</h2>
					<p className="text-muted">
						That,s why 1.3+ crore customers trust Zerodha with 3.5+ lakh crores
						worth of equity investments.
					</p>
					<h2 className="fs-4">The Zerodha universe</h2>
					<p className="text-muted">
						That,s why 1.3+ crore customers trust Zerodha with 3.5+ lakh crores
						worth of equity investments.
					</p>
					<h2 className="fs-4">Do better with money</h2>
					<p className="text-muted">
						That,s why 1.3+ crore customers trust Zerodha with 3.5+ lakh crores
						worth of equity investments.
					</p>
				</div>
				<div className="col-6">
					<img
						src="media/images/ecosystem.png"
						alt="#"
						style={{ width: "90%" }}
					/>
					<div className="text-center p-5">
						<a href="#" className="mx-5" style={{ textDecoration: "none" }}>
							Explore our products &nbsp;
							<i class="fa-solid fa-arrow-right"></i>
						</a>
						<a href="#" className="col-6" style={{ textDecoration: "none" }}>
							Try Kite demo &nbsp;
							<i class="fa-solid fa-arrow-right"></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Stats;
