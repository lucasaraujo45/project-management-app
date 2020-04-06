import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import ListRoundedIcon from "@material-ui/icons/ListRounded";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
	parag: {
		textAlign: "left",
		color: "black"
	},
	userIcon: {
		fontSize: "100px",
		float: "right"
	},
	button: {
		margin: theme.spacing(1)
	},
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	},
	papermodal: {
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #000",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3)
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary
	}
}));

export const Users = props => {
	const classes = useStyles();
	const { store, actions } = useContext(Context);
	const [open, setOpen] = React.useState(false);
	const [selectedUser, setSelectedUser] = React.useState(0);
	// handle modal open and close functions
	const handleOpen = index => {
		setSelectedUser(index);
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	return (
		<div className="w-100">
			{store.users.length > 0 ? (
				<Grid container direction="column" justify="center" alignItems="center">
					{store.users.map((user, index) => (
						<Grid item xs={12} key={index} className="w-100 my-2">
							<Paper className={classes.paper}>
								<div className={classes.userIcon}>
									<i className="fas fa-user pl-4" />
									<Box display="flex" alignItems="flex-end" justifyContent="flex-end">
										<Button
											variant="contained"
											color="primary"
											onClick={e => handleOpen(index)}
											className={classes.button}
											startIcon={<ListRoundedIcon />}>
											{user.name} tasks
										</Button>
									</Box>
								</div>
								<p className={classes.parag}>
									<b>Name:</b>{" "}
									<i>
										{user.name} {user.last}
									</i>
								</p>
								<p className={classes.parag}>
									<b>Company_ID:</b> <i>{user.id}</i>{" "}
								</p>
								<p className={classes.parag}>
									<b>email:</b> <i>{user.email}</i>{" "}
								</p>
								<p className={classes.parag}>
									<b>Phone:</b> <i>{user.phone}</i>{" "}
								</p>
							</Paper>
						</Grid>
					))}
					<Modal
						aria-labelledby="transition-modal-title"
						aria-describedby="transition-modal-description"
						className={classes.modal}
						open={open}
						onClose={handleClose}
						closeAfterTransition
						BackdropComponent={Backdrop}
						BackdropProps={{
							timeout: 500
						}}>
						<Fade in={open}>
							<div className={classes.papermodal}>
								<h2 id="transition-modal-title">Tasks list</h2>
								<p className={classes.parag} id="transition-modal-description">
									{store.users[selectedUser].todos.map((task, i) => (
										<p key={i} className={classes.parag}>
											# {task.id}: <b>{task.text}</b> <i>Created:</i> {task.createdDate} -{" "}
											<i>Due:</i> {task.dueDate}
										</p>
									))}
								</p>
							</div>
						</Fade>
					</Modal>
				</Grid>
			) : (
				<p className={classes.parag}>No Users</p>
			)}
		</div>
	);
};
Users.propTypes = {
	data: PropTypes.object
};
