import { React, forwardRef } from "react";
import {
	Grid, Typography,
} from "@mui/material";
import projects from "../data/projects";
import CustomCards from "./CustomCards";




const Projects = forwardRef((props, ref) => {
	const works = projects.map(function (project, i) {
		return (
            <Grid ref={ref} item xs={12} md={6} lg={4}>
			<CustomCards
				title={project.name}
                subtitle={project.subtitle}
				tech={project.tech}
				languages={project.languages}
				preview={project.preview}
				description={project.description}
				repository={project.repo}
			/>
            </Grid>
		);
	});
	return (
        				<Grid item xs={12} >
				<img style={styles.backitem} src='../backitem.png' alt="red stripes" />
				<Typography sx={styles.subtitle}>MY WORKS</Typography>
		<Grid container spacing={3} sx={styles.container}>
			{works}
		</Grid>
        </Grid>
	);
})

export default Projects;

const styles = {
	container: {
		display: "flex",
		marginTop: 3,
	},
    backitem:{
		width: "100%",
		overflow:'hidden',
		zIndex: "-1",
		position: "absolute",
		left: "0px",
	},
    subtitle: {
        paddingTop: "50px",
		fontFamily: "TuskerGrotesk-2600Semibold",
		fontSize: "7rem",
		color: "#fdf0d5",
		position: "relative",
		borderBottom: "0.5px solid rgba(253, 240, 213, 0.5)",
	},
};
