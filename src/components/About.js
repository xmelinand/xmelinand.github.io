import { React } from "react";
import { Grid, Box, Typography } from "@mui/material";

export default function About() {
	return (
		<Grid item xs={12} sx={{mt:4}}>
			<Box>
				<Typography sx={styles.subtitle}>ABOUT ME</Typography>
			</Box>
			<Grid
				item
				xs={12}
				md={8}
				sx={styles.presentation}
				className="neueMontreal roll-out presentation"
			>
				<Typography style={{ marginBottom: "0px" }}>
					<Typography
						sx={{ fontFamily: "TuskerGrotesk-2600Semibold", fontSize: "4rem", letterSpacing:1, lineHeight:1 }}
					>
						<span style={styles.highlight} className="tusk">
							Hello there
						</span>
						, my name is Xavier.
					</Typography>
					<Typography
						sx={{
							textTransform: "none",
							fontFamily: "Migra-Semibold",
                            fontSize: "1.3rem",
						}}
					>
						Xavier Melinand
					</Typography>
					<br />
					<Typography sx={{fontSize:"1.3rem"}}> I’m passionate about digital works and currently looking for
					a job as a web developer in a company, preferably in JavaScript
					frameworks.
					<br /> Still, I keep myself open to other languages.
					<br />
					<br />{" "}
					<span style={styles.highlight}>
						I have a particular set of skills
					</span>{" "}
					due to my former work experiences and would be happy to make the best
					of it in my new career in tech.
					<br /> I'm a people person and i work well teams, have been doing it for the last 1O years.
					<br />
					<br /> I love expressionism, minimalist design,
					<span style={styles.highlight}> cinema</span>, metal and pizza.
                    </Typography>
				</Typography>
			</Grid>
			<Grid
				item
				xs={12}
				md={6}
				className="neueMontreal roll-out presentation"
			></Grid>
		</Grid>
	);
}

const styles = {
	subtitle: {
        paddingTop: "50px",
		fontFamily: "TuskerGrotesk-2600Semibold",
		fontSize: "7rem",
		color: "#fdf0d5",
		position: "relative",
		borderBottom: "0.5px solid rgba(253, 240, 213, 0.5)",
	},
	highlight: {
		color: "orange",
	},
};
