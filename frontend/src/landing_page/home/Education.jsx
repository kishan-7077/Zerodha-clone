import React from "react";

function Education() {
	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col-6">
					<img
						src="media/images/education.svg"
						alt="#"
						style={{ width: "70%" }}
					/>
				</div>
				<div className="col-6">
					<h1 className="mb-3 fs-2 ">Free and open market education</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex dolorem
						reprehenderit, itaque corporis voluptas.
					</p>
					<a href="#" style={{ textDecoration: "none" }}>
						Verify <i class="fa-solid fa-arrow-right"></i>
					</a>
					<p className="mt-5">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex dolorem
						reprehenderit, itaque corporis voluptas.
					</p>
					<a href="#" style={{ textDecoration: "none" }}>
						TradingQ&A <i class="fa-solid fa-arrow-right"></i>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Education;
