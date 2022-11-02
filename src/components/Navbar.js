import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

function Navbar(props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawerItems = navItems.map((item) => (
		<ListItem
			key={item}
			disablePadding
			onClick={() => {
				if (item === "About") {
					console.log("clicked about");
				} else if (item === "Home") {
					console.log("clicked home");
				} else if (item === "Contact") {
					console.log("clicked contact");
				}
			}}
		>
			<ListItemButton sx={{ textAlign: "center" }}>
				<ListItemText primary={item} />
			</ListItemButton>
		</ListItem>
	));

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
			<Typography variant="h6" sx={{ my: 2 }}>
				X-WORKS
			</Typography>
			<Divider />
			<List>{drawerItems}</List>
		</Box>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box
		>
			<AppBar component="nav" sx={{
  color: '#fdf0d5',
  background: 'rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(8px)',
}}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: {xs:'auto', md:3}, display: { md: "none" } }}
					>
						<MenuIcon />
					</IconButton>
					<Box sx={{ display: "flex", alignItems: "center" }}>
						<Box sx={{ mr: 3 }}>
							<img height="20rem" alt='orange x-shaped logo' src="../../icon.png" />
						</Box>
						<Box>
							<Typography sx={{ mr: 3, fontFamily: "migra" }}>
								xavierMELINAND
							</Typography>
						</Box>
					</Box>
					<Typography sx={{ mr:'auto', display: { xs: "none", md: "flex" } }}>
						FULL STACK // REACT DEVELOPER // REACT NATIVE DEVELOPER
					</Typography>
					<Box sx={{ display: { xs: "none", md: "block" } }}>
						{navItems.map((item) => (
							<Button key={item} sx={{ color: "#fff" }}>
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
					sx={{
						display: { xs: "block", md: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
			</Box>
		</Box>
	);
}

export default Navbar;
