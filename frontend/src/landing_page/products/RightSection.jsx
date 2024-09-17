import React from "react";

function RightSection({
	imageUrl,
	productName,
	productDescription,

	learnMore,
}) {
	return (
		<div className="container">
			<div className="row border-top p-5">
				<div className="col-6 p-5 mt-5">
					<h1>{productName}</h1>
					<p>{productDescription}</p>
					<div>
						<a href={learnMore} style={{ textDecoration: "none" }}>
							Learn More <i class="fa-solid fa-long-arrow-right"></i>
						</a>
					</div>
				</div>
				<div className="col-6 p-5 mt-5">
					<img src={imageUrl} alt="#" />
				</div>
			</div>
		</div>
	);
}

export default RightSection;
