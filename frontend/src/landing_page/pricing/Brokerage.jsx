import React from "react";

function Brokerage() {
	return (
		<div className="container">
			<div className="row p-4 mt-5 text-center border-top">
				<div className="col-8">
					<a href="#" style={{ textDecoration: "none" }}>
						<h3 className="fs-5">Brokerage calculator</h3>
					</a>
					<ul
						style={{ textAlign: "left", lineHeight: "2.5" }}
						className="text-muted fs-6"
					>
						<li>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
							rerum unde quia sapiente
						</li>
						<li>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
							rerum unde quia sapiente e{" "}
						</li>
						<li>Lorem ipsum dolor, sit amet</li>
						<li>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
							rerum unde{" "}
						</li>
						<li>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
							rerum unde quia sapiente{" "}
						</li>
						<li>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit{" "}
						</li>
					</ul>
				</div>
				<div className="col-4">
					<a href="#" style={{ textDecoration: "none" }}>
						<h3 className="fs-5">List of charges</h3>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Brokerage;
