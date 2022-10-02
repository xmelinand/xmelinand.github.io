import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { React } from "react";
import { Col, Row, Button } from "reactstrap";
//import { Link } from "react-router-dom";

function Home() {
	const date = new Date().toUTCString().split(" ");
	const today = date[1];
	const month = date[2];

	return (
		<div style={styles.container}>
			<video
				autoPlay
				muted
				loop
				style={styles.video}
				src="/Vid.mp4"
				type="video/mp4"
			></video>
			<Row className="rowHeader">
				<Col>
					<div className="header">
						<div>
							<h5 className="headerText migra" style={{ marginLeft: "1.7rem" }}>
								Xavier Melinand
							</h5>
						</div>
						<div>
							<h5 className="headerText neueMontreal">
								FULL STACK DEVELOPER / REACT / REACT NATIVE
							</h5>
						</div>
							<div style={{ display: "flex", margin: "0.3rem" }}>
								<p className="headerText neueMontreal">works</p>
								<p className="headerText">|</p>
								<p className="headerText neueMontreal">about</p>
								<p className="headerText">|</p>
								<p className="headerText neueMontreal">contact</p>
								{/* <p className="headerText">//</p>
								<p className="headerText neueMontreal">Français</p>
								<p className="headerText">|</p>
								<p className="headerText neueMontreal">English</p> */}
							</div>
					</div>
				</Col>
			</Row>
			<Row xs="2" style={{ padding: "2rem" }}>
				{/* left content */}
				<Col>
					<div className="d-flex">
						<p className="tuskerGrotesk title">
							<span className="migra" style={{ fontSize: "2rem" }}>
								Really cool
							</span>
							<br />
							WEB
							<span className="migra" style={{ fontSize: "2rem" }}>
								&
							</span>
							MOBILE
							<br />
							DEVELOPER
						</p>
					</div>
				</Col>
				{/* right content */}
				<Col>
					<div style={styles.dateContainer} className='roll-out'>
						<p className="day maelstrom">{today}</p>
						<div className="month">
							<p id="work" className="migra month1">
								{month}
							</p>
							<p>Available for work</p>
						</div>
					</div>
					<div
						style={styles.presentation}
						className="neueMontreal grad1 presentation"
					>
						<p style={{marginBottom:"0px"}}>
							Hello there, my name is{" "}
							<span style={{ fontWeight: "bold" }}>Xavier</span>.
							<br />
							<br /> I am a web developer with a designer background based in
							Canada. I’m passionate about digital works and currently looking
							for my first job as a web developer in a company, preferably in
							JavaScript frameworks.
							<br />
							<br /> Still, I keep myself open to other languages like Java, C++
							or C#.
							<br />
							<br /> I have a particular set of skills due to my former work
							experiences and would be happy to make the best of it in my new
							career in tech. I love expressionism, minimalist design, metal and
							pizza.
						</p>
					</div>
				</Col>
			</Row>{" "}
			<Row xs="2" style={{ padding: "2rem" }}>
				{/* left content */}
				<Col>
					<div className="d-flex roll-out">
						<p className="tuskerGrotesk title">
							<span className="migra" style={{ fontSize: "2rem" }}>
								Really cool
							</span>
							<br />
							WEB
							<span className="migra" style={{ fontSize: "2rem" }}>
								&
							</span>
							MOBILE
							<br />
							DEVELOPER
						</p>
					</div>
				</Col>
				{/* right content */}
				<Col>
					<div style={styles.dateContainer}>
						<p className="day maelstrom">{today}</p>
						<div className="month">
							<p id="work" className="migra month1">
								{month}
							</p>
							<p>Available for work</p>
						</div>
					</div>
					<div
						style={styles.presentation}
						className="neueMontreal grad1 presentation"
					>
						<p>
							Hello there, my name is{" "}
							<span style={{ fontWeight: "bold" }}>Xavier</span>.
							<br />
							<br /> I am a web developer with a designer background based in
							Canada. I’m passionate about digital works and currently looking
							for my first job as a web developer in a company, preferably in
							JavaScript frameworks.
							<br />
							<br /> Still, I keep myself open to other languages like Java, C++
							or C#.
							<br />
							<br /> I have a particular set of skills due to my former work
							experiences and would be happy to make the best of it in my new
							career in tech. I love expressionism, dogs, cinema, metal and
							pizza.
						</p>
					</div>
				</Col>
			</Row>
		</div>
	);
}

export default Home;

const styles = {
	container: {
		flex: 1,
		flexWrap: 1,
		marginLeft: "0px",
		marginRight: "0px",
	},
	video: {
		objectFit: "fill",
		height: "100%",
		width: "100%",
		zIndex: "-1",
		position: "absolute",
		top: "0px",
	},
	dateContainer: {
		display: "flex",
		justifyContent: "flex-end",
		alignItems: "center",
		paddingRight: "2rem",
	},
};
