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

const useStyles = makeStyles(theme => ({
	parag: {
		color: "black"
	},
	userIcon: {
		fontSize: "120px",
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
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #000",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3)
	}
}));

export const Users = props => {
	const classes = useStyles();
	const { store, actions } = useContext(Context);
	const [open, setOpen] = React.useState(false);
	const [selectedUser, setSelectedUser] = React.useState(0);

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
				<ul className="mx-auto list-unstyled">
					{store.users.map((user, index) => (
						<li key={index}>
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
								Name: {user.name} {user.last}
							</p>
							<p className={classes.parag}>Company_ID: {user.id} </p>
							<p className={classes.parag}>email: {user.email} </p>
							<p className={classes.parag}>Phone: {user.phone}</p>
						</li>
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
							<div className={classes.paper}>
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
				</ul>
			) : (
				<p className={classes.parag}>No Users</p>
			)}
		</div>
	);
};
Users.propTypes = {
	data: PropTypes.object
};
