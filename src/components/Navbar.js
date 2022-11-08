import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { connect } from "react-redux";
import {
	AppBar,
	Box,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemText,
	ListItemButton,
	Toolbar,
	Typography,
	Button,
} from "@mui/material";

const navItems = ["ABOUT", "WORKS", "CONTACT"];

function Navbar(props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawerItems = navItems.map((item) => (
		<ListItem
			sx={styles.listItems}
			key={item}
			disablePadding
			onClick={() => props.clicked(item)}
		>
			<ListItemButton sx={{ textAlign: "center" }}>
				<ListItemText primary={item} />
			</ListItemButton>
		</ListItem>
	));

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
			<Typography variant="h6" sx={{ my: 2, color: "orange" }}>
				X-WORKS
			</Typography>
			<Divider />
			<List>{drawerItems}</List>
		</Box>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box>
			<AppBar component="nav" sx={styles.appBar}>
				<Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 3, display: { md: "none" } }}
					>
						<MenuIcon />
					</IconButton>
					<Box sx={{ mr: { xs: 0, md: 3 }, ml: { xs: 6, md: 0 } }}>
						<img
							height="20rem"
							alt="orange x-shaped logo"
							src="../../icon.png"
						/>
					</Box>
					<Box>
						<Typography sx={{ fontFamily: "migra", pt: "2px©" }}>
							xavierMELINAND
						</Typography>
					</Box>
					<Typography
						sx={{ ml: 3, mr: "auto", display: { xs: "none", md: "flex" } }}
					>
						FULL STACK // REACT DEVELOPER & REACT NATIVE DEVELOPER
					</Typography>
					<Box sx={{ display: { xs: "none", md: "block" } }}>
						{navItems.map((item) => (
							<Button
								onClick={() => props.clicked(item)}
								key={item}
								sx={styles.navItems}
							>
								{item}
							</Button>
						))}
					</Box>
				</Toolbar>
			</AppBar>
			<Box component="nav">
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={styles.drawerSx}
				>
					{drawer}
				</Drawer>
			</Box>
		</Box>
	);
}

const styles = {
	appBar: {
		color: "#fdf0d5",
		background: "rgba(0, 0, 0, 0.1)",
		backdropFilter: "blur(8px)",
	},
	listItems: {
		backgroundColor: "transparent",
		color: "#fff",
		"&:hover": {
			backgroundColor: "#1c1f25",
			transition: "1s",
		},
	},
	navItems: {
		color: "white",
		position: "relative",

		"&:before": {
			content: "''",
			position: "absolute",
			width: "0",
			height: "2px",
			bottom: "0px",
			left: "50%",
			transform: "translate(-50%,0%)",
			backgroundColor: "red",
			visibility: "hidden",
			transition: "all 0.2s ease-in-out",
		},
		"&:hover:before": {
			visibility: "visible",
			width: "100%",
		},
	},
	drawerSx: {
		display: { xs: "block", md: "none" },
		"& .MuiDrawer-paper": {
			boxSizing: "border-box",
			width: { xs: 250, md: 400 },
			backgroundColor: "#282c34",
		},
	},
};

function mapDispatchToProps(dispatch) {
	return {
		clicked: function (item) {
			dispatch({ type: "clicked", clicked: item });
		},
	};
}

export default connect(null, mapDispatchToProps)(Navbar);
