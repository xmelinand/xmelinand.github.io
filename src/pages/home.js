import "bootstrap/dist/css/bootstrap.min.css";
import { React } from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import Projects from "../components/Works";
import Contact from "../components/Contact";
import About from "../components/About";

function Home() {
	const date = new Date().toUTCString().split(" ");
	const today = date[1];
	const month = date[2];

	return (
		<Grid container={true} sx={styles.container}>
			<video autoPlay muted loop src="../Vid.mp4" style={styles.video} />
			{/* //* left content */}
			<Grid xs={12} md={6} sx={{ paddingTop: "2rem" }}>
				<Typography sx={styles.title} className="roll-out">
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
				</Typography>
			</Grid>
			{/* //* Date + Bio */}
			<Grid xs={12} md={6}>
				<Box sx={styles.dateContainer} className="roll-out">
					<p className="day maelstrom">{today}</p>
					<div className="month">
						<p id="work" className="migra month1">
							{month}
						</p>
						<p>Available for work</p>
					</div>
				</Box>
				<Box sx={styles.presentation} className="neueMontreal roll-out intro">
					<Typography sx={{ marginBottom: "0px", fontSize: "1.1rem" }}>
						I am a full-stack developer with a designer background based in
						Montréal, Canada. <br />I may be at the start of this career but I
						put the work in and learning everyday fuels the passion of
						programming I discovered myself undergoing a vocational retraining recently.
						<br />I keep challenging myself and can't wait to be challenged by
						you!
					</Typography>
					<Button size='large' sx={styles.button} >CONTACT ME </Button>
				</Box>
			</Grid>
			<Grid xs={12}>
				<About />
				<Projects />
				<Contact />
			</Grid>
		</Grid>
	);
}

export default Home;

const styles = {
	container: {
		objectFit: "fill",
		padding: { xs: 3, lg: 0 },
	},
	video: {
		objectFit: "fill",
		height: "100%",
		width: "100%",
		overflow: "hidden",
		zIndex: "-1",
		position: "absolute",
		top: "0px",
		left: "0px",
	},
	title: {
		fontFamily: "TuskerGrotesk-2600Semibold",
		color: "#fdf0d5",
		fontSize: "12rem",
		lineHeight: "8rem",
		textAlign: "start",
		mt: { md: 14 },
	},
	dateContainer: {
		mt: { xs: 0, md: 12.5 },
		mr: "2rem",
		display: { xs: "none", md: "flex" },
		justifyContent: "flex-end",
		alignItems: "center",
	},
	headerElements: {
		marginLeft: "1.7rem",
	},
	presentation: {
		backgroundColor: "#282c34",
		marginTop: 5,
	},
	button: {
		color: "#fdf0d5",
		mt:2, 
		padding:1.3,
		fontSize: "1rem",
		borderRadius: "35px",
		border: "1px solid #fdf0d5",
		"&:hover": { backgroundColor: "#fdf0d5", color: "#282c34" },
	},
};
