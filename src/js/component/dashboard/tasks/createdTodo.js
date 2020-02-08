import React, { useContext } from "react";
import { Context } from "../../../store/appContext";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";

export const CreateTodo = () => {
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
