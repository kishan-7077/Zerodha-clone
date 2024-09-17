import React from "react";

function Universe() {
	return (
		<div className="contaienr">
			<div className="row text-center mt-5">
				<h1>The Zerodha Universe</h1>
				<p>
					Extend your trading and investment experience even further with our
					partner platforms
				</p>
				<div className="col-4 p-3 mt-5">
					<img src="media/images/smallcaseLogo.png" alt="#" width={"50%"} />
					<p className="text-small text-muted mt-2">
						Thematic investment platform
					</p>
				</div>
				<div className="col-4 p-3 mt-5">
					<img src="media/images/streakLogo.png" alt="#" width={"50%"} />
					<p className="text-small text-muted mt-2">
						Thematic investment platform
					</p>
				</div>
				<div className="col-4 p-4 mt-5">
					<img src="media/images/sensibullLogo.svg" alt="#" width={"60%"} />
					<p className="text-small text-muted mt-2">
						Thematic investment platform
					</p>
				</div>
				<div className="col-4 p-3 mt-5">
					<img src="media/images/smallcaseLogo.png" alt="#" />
					<p className="text-small text-muted mt-2">
						Thematic investment platform
					</p>
				</div>
				<div className="col-4 p-3 mt-5">
					<img src="media/images/smallcaseLogo.png" alt="#" />
					<p className="text-small text-muted mt-2">
						Thematic investment platform
					</p>
				</div>
				<div className="col-4 p-3 mt-5">
					<img src="media/images/smallcaseLogo.png" alt="#" />
					<p className="text-small text-muted mt-2">
						Thematic investment platform
					</p>
				</div>
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

export default Universe;
