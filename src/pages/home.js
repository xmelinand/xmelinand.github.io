import "bootstrap/dist/css/bootstrap.min.css";
import { React, useEffect, useRef } from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import Projects from "../components/Works";
import Contact from "../components/Contact";
import About from "../components/About";
import { connect } from "react-redux";

function Home(props) {
	const date = new Date().toUTCString().split(" ");
	const today = date[1];
	const month = date[2];

	const about = useRef(true);
	const works = useRef(null);
	const contact = useRef(null);

	const handleScroll = (ref) => {
		ref.current.scrollIntoView(true);
	}

	//* Scroll links handling
	useEffect(
		() => {
			if ( props.clickedItem === 'ABOUT') {
				handleScroll(about);
			} else if ( props.clickedItem === 'WORKS' ){
				handleScroll(works);
			} else if ( props.clickedItem === 'CONTACT'){
				handleScroll(contact);
			}
		},
		[props.clickedItem] 
	)

	return (
		<Grid container={true} sx={styles.container}>
			<video autoPlay muted loop src="../Vid.mp4" width="100vw" style={styles.video} />
			{/* //* left content */}
			<Grid item xs={12} md={6} sx={{ paddingTop: "2rem" }}>
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
			<Grid item xs={12} md={6}>
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
					<Button size='large' sx={styles.button} onClick={() => handleScroll(contact)}>CONTACT ME </Button>
				</Box>
			</Grid>
			<Grid item xs={12}>
				<Grid ref={about}>
				<About />
					</Grid> 
					<Grid ref={works}>

				<Projects />
				</Grid>
				<Grid ref={contact}>
				<Contact />
				</Grid>
			</Grid>
		</Grid>
	);
}

//STATE-PROPS
function mapStateToProps(state) {
	return { clickedItem: state.links };
  }
  
  export default connect(mapStateToProps, null)(Home);
const styles = {
	container: {
		objectFit: "fill",
		padding: { xs: 3, lg: 0 },
	},
	video: {
		objectFit: "cover",
		height: "100vh",
		minWidth: "100%",
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
