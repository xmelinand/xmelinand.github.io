import "bootstrap/dist/css/bootstrap.min.css";
import { React } from "react";
import { Grid, Box, Typography } from "@mui/material";
import Projects from "../components/Works";

function Home() {
	const date = new Date().toUTCString().split(" ");
	const today = date[1];
	const month = date[2];

	return (
		<Grid container={true} sx={styles.container}>
			<video autoPlay muted loop src="../Vid.mp4" style={styles.video} />
			{/* <img style={styles.backitem} src='../backitem.png' alt="red stripes" /> */}
			{/* //* left content */}
			<Grid xs={12} md={6} sx={{ paddingTop:"2rem" }}>
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
				<Box
					sx={styles.presentation}
					className="neueMontreal roll-out presentation"
				>
					<p style={{ marginBottom: "0px" }}>
					<span style={styles.highlight}>Hello there</span>, my name is{" "}
						<span style={{color:'red'}}>Xavier</span>.
						<br />
						<br /> I am a web developer with a designer background based in
						Canada. I’m passionate about digital works and currently looking for
						my first job as a web developer in a company, preferably in
						JavaScript frameworks.
						<br />
						<br /> Still, I keep myself open to other languages like Java, C++
						or C#.
						<br />
						<br /> <span style={styles.highlight}>I have a particular set of skills</span> due to my former work
						experiences and would be happy to make the best of it in my new
						career in tech. I love expressionism, minimalist design,<span style={styles.highlight}>cinema</span> metal and
						pizza.
					</p>
				</Box>
			</Grid>
			<Grid xs={12}>
				<Grid item xs={12} sx={{ pt: 5, height: "100vh" }}>
					<Box>
						<Typography sx={styles.subtitle}>ABOUT ME</Typography>
					</Box>
				</Grid>
				<Grid item xs={12} >
				<img style={styles.backitem2} src='../backitem.png' alt="red stripes" />

				<Typography sx={styles.subtitle}>MY WORKS</Typography>
					<Projects />
				</Grid>
				<Grid item xs={12} sx={{ pt: 2.5 }}>
				<Typography sx={styles.subtitle}>CONTACT ME</Typography>
				</Grid>
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
		overflow:'hidden',
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
		mt: {md:14},
	},
	dateContainer: {
		mt: {xs:0, md:12.5},
		mr:'2rem',
		display: { xs: "none", md: "flex" },
		justifyContent: "flex-end",
		alignItems: "center",
	},
	headerElements: {
		marginLeft: "1.7rem",
	},
	subtitle:{
		fontFamily: "TuskerGrotesk-2600Semibold",
		fontSize: '7rem',
		color: '#fdf0d5',
		borderBottom: '0.5px solid rgba(253, 240, 213, 0.5)', 
	},
	presentation: {
		backgroundColor: "#282c34",
		marginBottom: "2rem",
		marginTop:'2rem',
	},
	highlight:{
		color:'orange',
		fontWeight: 'bold',
	},
	// backitem:{
	// 	width: "100%",
	// 	overflow:'hidden',
	// 	zIndex: "-1",
	// 	position: "absolute",
	// 	top: "110rem",
	// 	left: "0px",
	// },
	backitem2:{
		width: "100%",
		overflow:'hidden',
		zIndex: "-1",
		position: "absolute",
		left: "0px",
	}
};
