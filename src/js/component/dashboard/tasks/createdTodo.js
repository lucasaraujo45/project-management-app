import React, { useContext } from "react";
import { Context } from "../../../store/appContext";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";

//component that adds task to tasklist(modal)

const useStyles = makeStyles(theme => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120
	},
	selectEmpty: {
		marginTop: theme.spacing(2)
	}
}));

export const CreateTodo = () => {
	const classes = useStyles();
	const { store, actions } = useContext(Context);
	const newTodo = React.createRef();

	const createNewTodo = e => {
		e.preventDefault();
		actions.addTodo(newTodo.current.value);
		newTodo.current.value = "";
		toggleModal();
	};

	//////////////material ui modal open and close////////////
	const [open, setOpen] = React.useState(false);

	const toggleModal = () => {
		setOpen(!open);
	};
	//////////////material ui modal open and close////////////
	return (
		<div>
			<div className="taskButton">
				{" "}
				<Button type="button" variant="contained" color="primary" onClick={toggleModal}>
					Add Task
				</Button>
			</div>
			<Modal
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
				open={open}
				onClose={toggleModal}
				className="mt-5">
				<div className="taskModal">
					<h1>Add Task</h1>
					<form onSubmit={createNewTodo} className="mb-5">
						<input className="form-control" type="text" ref={newTodo} />
					</form>
					<FormControl className={classes.formControl}>
						<InputLabel id="demo-simple-select-label">Age</InputLabel>
						<Select labelId="demo-simple-select-label" id="demo-simple-select" value={store.list.user}>
							<MenuItem value={10}>Lucas</MenuItem>
							<MenuItem value={20}>Joe</MenuItem>
							<MenuItem value={30}>Eddy</MenuItem>
						</Select>
					</FormControl>
					<Button type="button" variant="contained" color="primary" className="mr-3" onClick={createNewTodo}>
						Add Task
					</Button>
					<Button type="button" variant="contained" onClick={toggleModal}>
						Close
					</Button>
				</div>
			</Modal>
		</div>
	);
};
