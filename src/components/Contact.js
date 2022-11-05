import { React } from "react";
import {
	Grid,
	Box,
	Typography,
	IconButton,
	Chip,
} from "@mui/material";
import {
	CallRounded,
	EmailRounded,
	LinkedIn,
	GitHub,
} from "@mui/icons-material";


export default function Contact() {
    const interests = [
        "New Projects",
		"Frontend Development",
		"Backend development",
		"UI/UX design",
		"Job Opportunities",
		"New techs",
		"Pizza",
        "Music"
	];

	return (
		<Grid item xs={12} sx={{ pt: 2.5 }}>
			<Typography sx={styles.subtitle}>CONTACT</Typography>
			<Grid container xs={12} style={styles.backdrop}>
				<Grid xs={12} md={4} sx={{ color: "orange", pt: 4 }}>
					<Typography sx={styles.catch}>
						Let's <br />
						Connect
					</Typography>
				</Grid>
				<Grid xs={12} md={8} sx={{ color: "#fdf0d5", pt: 4 }}>
					<Typography
						sx={{
							flex: 1,
							ml: 1,
							fontFamily: "NeueMontreal-Regular",
							fontSize: "3rem",
						}}
					>
						I'M ALWAYS INTERESTED IN
					</Typography>
					{interests.map(function (topic, i) {
						return <Chip key={i} label={topic} sx={styles.interests} />;
					})}
					<Box sx={styles.contact}>
						<IconButton href="mailto:x.melinand@gmail.com" sx={styles.buttons}>
							<EmailRounded fontSize="large" />
						</IconButton>
						<IconButton href="tel:5793664153" sx={styles.buttons}>
							<CallRounded fontSize="large" />
						</IconButton>
						<IconButton
							href="https://www.linkedin.com/in/xavier-melinand-169306238/"
							sx={styles.buttons}
						>
							<LinkedIn fontSize="large" />
						</IconButton>
						<IconButton href="https://github.com/xmelinand" sx={styles.buttons}>
							<GitHub fontSize="large"/>
						</IconButton>
					</Box>
				</Grid>
			</Grid>
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
		borderBottom: "1px solid rgba(253, 240, 213, 0.5)",
	},
	backdrop: {
		backgroundImage: "url(../backdrop.svg)",
		backgroundPositionX: "center",
		backgroundColor: "transparent",
		backgroundSize: "50%",
		backgroundRepeat: "no-repeat",
	},
	contact: {
		mt: 6,
		display: "flex",
		justifyContent: "space-between",
		"& > :not(style)": { m: 0.5 },
	},
	catch: {
		fontFamily: "TuskerGrotesk-2600Semibold",
		textTransform: "uppercase",
		fontSize: "28vh",
		lineHeight: "32vh",
	},
	interests: {
		color: "#fdf0d5",
		fontSize: "2rem",
		textTransform: "uppercase",
		m: 1,
		p: 2,
		border: "1px solid #fdf0d5",
		backgroundColor: "rgba(40, 44, 52, 0.8)",
		"&:hover": { backgroundColor: "#fdf0d5", color: "#282c34" },
	},
	buttons: {
		color: "orange",
		backgroundColor: "rgba(40, 44, 52, 0.8)",
		border: "1px solid orange",
        width:'6rem',
        height:'6rem',
		"&:hover": { backgroundColor: "orange", color: "#282c34" },
	},
};
