import React from "react";
import Navbar from "../Navbar";
import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAccount from "../OpenAccount";
import Footer from "../Footer";

export default function HomePage() {
	return (
		<>
			<Hero />
			<Awards />
			<Stats />
			<Pricing />
			<Education />
			<OpenAccount />
		</>
	);
}
