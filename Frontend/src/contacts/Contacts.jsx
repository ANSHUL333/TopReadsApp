import React from "react";
import Navbar from "../components/Navbar";
import Course from "../components/Contact";
import Footer from "../components/Footer";
function Contacts() {
	return (
		<>
			<Navbar />
			<div className=" min-h-screen">
				<Course />
			</div>
			<Footer />
		</>
	);
}

export default Contacts;