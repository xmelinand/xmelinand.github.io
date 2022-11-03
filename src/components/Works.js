import { React } from "react";
import {
	Grid,
} from "@mui/material";
import projects from "../data/projects";
import CustomCards from "./CustomCards";




export default function Projects() {
	const works = projects.map(function (project, i) {
		return (
            <Grid item xs={12} md={6} lg={4}>
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
		<Grid container spacing={3} sx={styles.container}>
			{works}
		</Grid>
	);
}

const styles = {
	container: {
		display: "flex",
		marginTop: 3,
	},
};
