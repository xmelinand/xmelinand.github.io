import { React, useState } from "react";
import { styled } from "@mui/material/styles";
import {
	Box,
	Card,
	CardHeader,
	CardContent,
	CardActions,
	Collapse,
	IconButton,
	Typography,
	Chip,
	Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CustomCards = ({
	title,
    subtitle,
	tech,
	languages,
	preview,
	description,
	repository,
}) => {
	const [expanded, setExpanded] = useState(false);

	function handleExpandClick() {
		setExpanded(!expanded);
	}
	const ExpandMore = styled((props) => {
		const { expand, ...other } = props;
		return <IconButton {...other} />;
	})(({ theme, expand }) => ({
		transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
		marginLeft: "auto",
		transition: theme.transitions.create("transform", {
			duration: theme.transitions.duration.shortest,
		}),
	}));

	return (
			<Card>
				<CardHeader
					// action={
					// 	<IconButton aria-label="settings">
					// 		<MoreVertIcon />
					// 	</IconButton>
					// }
					title={title}
					subheader={subtitle}
				/>
				<Box>{preview}</Box>
				<CardActions disableSpacing>
					<Button className="App-link" onClick={handleExpandClick}>
						Details
					</Button>
					<Button href={repository} className="App-link">
						View Code
					</Button>
					<ExpandMore
						expand={expanded}
						onClick={handleExpandClick}
						aria-expanded={expanded}
						aria-label="show more"
					>
						<ExpandMoreIcon />
					</ExpandMore>
				</CardActions>
				<Collapse in={expanded} timeout="auto" unmountOnExit>
					<CardContent>
						{tech.map(function (tech, i) {
							return <Chip key={i} sx={{ m: 0.5 }} label={tech} />;
						})}
						{languages.map(function (language, i) {
							return (
								<Chip
									key={i}
									sx={{ m: 0.5, backgroundColor: "red", color: "white" }}
									label={language}
								/>
							);
						})}
						<Typography paragraph>{description}</Typography>
					</CardContent>
				</Collapse>
			</Card>
	);
};

export default CustomCards;