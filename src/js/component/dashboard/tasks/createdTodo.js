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
import Grid from "@material-ui/core/Grid";
//imports for date
import DayPickerInput from "react-day-picker/DayPickerInput";
import { DateUtils } from "react-day-picker";
import dateFnsFormat from "date-fns/format";
import dateFnsParse from "date-fns/parse";
import "react-day-picker/lib/style.css";
//component that adds task to tasklist(modal)
function parseDate(str, format, locale) {
	const parsed = dateFnsParse(str, format, new Date(), { locale });
	if (DateUtils.isDate(parsed)) {
		return parsed;
	}
	return undefined;
}

function formatDate(date, format, locale) {
	return dateFnsFormat(date, format, { locale });
}

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

	const FORMAT = "MM/dd/yyyy";

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
					<Grid spacing={3}>
						<Grid>
							<h1>Add Task</h1>
						</Grid>
						<Grid>
							<form onSubmit={createNewTodo} className="mb-5">
								<input className="form-control" type="text" ref={newTodo} />
							</form>
						</Grid>
						<Grid container spacing={3}>
							<Grid xs={6}>
								<FormControl className={classes.formControl}>
									<InputLabel id="demo-simple-select-label">User</InputLabel>
									<Select
										labelId="demo-simple-select-label"
										id="demo-simple-select"
										value={store.list.user}>
										<MenuItem value={10}>Lucas</MenuItem>
										<MenuItem value={20}>Joe</MenuItem>
										<MenuItem value={30}>Eddy</MenuItem>
									</Select>
								</FormControl>
							</Grid>
							<Grid xs={6} mt={2}>
								<DayPickerInput
									formatDate={formatDate}
									format={FORMAT}
									parseDate={parseDate}
									placeholder={`${dateFnsFormat(new Date(), FORMAT)}`}
								/>
							</Grid>
						</Grid>
						<Grid container spacing={3}>
							<Grid xs={6} mt={3}>
								<Button
									type="button"
									variant="contained"
									color="primary"
									className="mr-3"
									onClick={createNewTodo}>
									Add Task
								</Button>
							</Grid>
							<Grid xs={6}>
								<Button type="button" variant="contained" onClick={toggleModal}>
									Close
								</Button>
							</Grid>
						</Grid>
					</Grid>
				</div>
			</Modal>
		</div>
	);
};
