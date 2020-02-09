import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";
import grey from "@material-ui/core/colors/grey";

export const ProfileMenu = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className="ml-auto">
			<Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
				<AccountCircleRoundedIcon style={{ color: grey[50] }} fontSize="large" />
			</Button>
			<Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
				<MenuItem onClick={handleClose}>Profile</MenuItem>
				<MenuItem onClick={handleClose}>My account</MenuItem>
				<Divider />
				<MenuItem onClick={handleClose}>
					<Link href="/">Logout</Link>
				</MenuItem>
			</Menu>
		</div>
	);
};
