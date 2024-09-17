import React from "react";

function LeftSection({
	imageUrl,
	productName,
	productDescription,
	tryDemo,
	learnMore,
	googlePlay,
	appStore,
}) {
	return (
		<div className="container">
			<div className="row border-top p-5">
				<div className="col-6 p-5 mt-5">
					<img src={imageUrl} alt="#" />
				</div>
				<div className="col-6 p-5 mt-5">
					<h1>{productName}</h1>
					<p>{productDescription}</p>
					<div>
						<a
							href={tryDemo}
							style={{ textDecoration: "none", marginRight: "30px" }}
						>
							Try demo <i class="fa-solid fa-long-arrow-right"></i>
						</a>
						<a href={learnMore} style={{ textDecoration: "none" }}>
							Learn More <i class="fa-solid fa-long-arrow-right"></i>
						</a>
					</div>
					<div className="mt-3">
						<a href={googlePlay}>
							<img
								src="media/images/googlePlayBadge.svg"
								alt="#"
								style={{ marginRight: "20px" }}
							/>
						</a>
						<a href={appStore}>
							<img src="media/images/appStoreBadge.svg" alt="#" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LeftSection;
