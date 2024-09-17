import React from "react";

function Team() {
	return (
		<div className="container">
			<div className="row p-5 mb-5 border-top mt-5">
				<h1 className=" text-center  ">People</h1>
			</div>
			<div
				className="row text-muted fs-6"
				style={{ lineHeight: "1.8", fontSize: "1.2em" }}
			>
				<div className="col-6 mt-5 p-5 text-center">
					<img
						src="media/images/nithinKamath.jpg"
						alt="#"
						style={{ borderRadius: "100%", width: "60%" }}
					/>
					<h4 className="mt-5">Nithin Kamath</h4>
					<h6 className="mt-3">Founder, CEO</h6>
				</div>
				<div className="col-6 mt-5 p-5">
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
						iusto aspernatur ipsam, necessitatibus at expedita? Vitae quia in
						eius, quae eaque quaerat iste harum ex delectus officiis, nostrum
						doloremque. Rerum?
					</p>
					<br />
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
						iusto aspernatur ipsam, necessitatibus at expedita? Vitae quia in
						eius, quae eaque quaerat iste harum ex delectus officiis, nostrum
						doloremque. Rerum?
					</p>
					<br />
					<p>
						Connect on <a href="#">homepage</a> / <a href="#">TradingQ&A</a> /
						<a href="#">Twitter</a>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Team;
