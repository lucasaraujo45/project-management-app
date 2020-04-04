import React, { useContext, useState, forwardRef } from "react";
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
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
//imports for date
import DayPickerInput from "react-day-picker/DayPickerInput";
import { DateUtils } from "react-day-picker";
import dateFnsFormat from "date-fns/format";
import dateFnsParse from "date-fns/parse";
import "react-day-picker/lib/style.css";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { format } from "date-fns";
import { startOfToday } from "date-fns";
import "./tasks.scss";

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
	},
	popover: {
		pointerEvents: "none"
	},
	paper: {
		padding: theme.spacing(1)
	},
	parag: {
		color: "black"
	}
}));

export const CreateTodo = () => {
	const classes = useStyles();
	const { store, actions } = useContext(Context);
	const newTodo = React.createRef();
	const [test, setTest] = useState();
	let todayDate = startOfToday();

	//useState for Form values
	const [formValues, setFormValues] = useState({
		text: "",
		user: "",
		createdDate: format(todayDate, "MM/dd/yyyy"),
		dueDate: ""
	});

	// function to handle change in the form
	const handleInputChange = e => {
		let key = e.target.name;
		let value = "";

		if (key === "user") {
			value = e.target.value.id;
		} else {
			value = e.target.value;
		}

		setFormValues({
			...formValues,
			[key]: value
		});
	};

	const [anchorEl, setAnchorEl] = React.useState(null);

	//handles modal open and close
	const handlePopoverOpen = event => {
		setAnchorEl(event.currentTarget);
	};

	const handlePopoverClose = () => {
		setAnchorEl(null);
	};

	const openPop = Boolean(anchorEl);

	const FORMAT = "MM/dd/yyyy";

	const createNewTodo = e => {
		e.preventDefault();

		// actions.addTodo(formValues);
		// console.log('user is ',formValues.user)
		actions.sendTasktoDB(formValues);
		toggleModal();
	};

	//////////////material ui modal open and close////////////
	const [open, setOpen] = React.useState(false);

	const toggleModal = () => {
		setOpen(!open);
	};

	const handleDayChange = day => {
		// day will be a dateTime object, needs to be converted to string
		let formatedDate = dateFnsFormat(day, FORMAT);
		setFormValues({
			...formValues,
			dueDate: formatedDate
		});
	};

	//////////////material ui modal open and close////////////
	return (
		<div>
			<div className="taskButton">
				{" "}
				<AddCircleIcon
					type="button"
					variant="contained"
					fontSize="large"
					color="primary"
					onClick={toggleModal}
					aria-owns={openPop ? "mouse-over-popover" : undefined}
					aria-haspopup="true"
					onMouseEnter={handlePopoverOpen}
					onMouseLeave={handlePopoverClose}>
					Add Task
				</AddCircleIcon>
				<Popover
					id="mouse-over-popover"
					className={classes.popover}
					classes={{
						paper: classes.paper
					}}
					open={openPop}
					anchorEl={anchorEl}
					anchorOrigin={{
						vertical: "center",
						horizontal: "left"
					}}
					transformOrigin={{
						vertical: "top",
						horizontal: "right"
					}}
					onClose={handlePopoverClose}
					disableRestoreFocus>
					<Typography className={classes.parag}>Click to Add Task</Typography>
				</Popover>
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
								<input
									className="form-control"
									type="text"
									name="text"
									placeholder="Add Task"
									onChange={e => handleInputChange(e)}
									ref={newTodo}
								/>
							</form>
						</Grid>
						<Grid container spacing={3} className="ml-3">
							<Grid xs={5}>
								<FormControl className={classes.formControl}>
									<InputLabel id="demo-simple-select-label">User</InputLabel>
									<Select
										name="user"
										labelId="demo-simple-select-label"
										id="user"
										onChange={e => handleInputChange(e)}>
										{store.users.map((user, index) => (
											//maps users in database and ads them to MenuItems in select dropdown
											<MenuItem key={index} value={user} onClick={() => setTest(user)}>
												{user.name}
											</MenuItem>
										))}
									</Select>
								</FormControl>
							</Grid>
							<Grid xs={7} className="mt-4">
								<p className={classes.parag}>
									Due Date{" "}
									<DayPickerInput
										onDayChange={day => handleDayChange(day)}
										name="dueDate"
										type="dueDate"
										formatDate={formatDate}
										format={FORMAT}
										parseDate={parseDate}
										placeholder={`${dateFnsFormat(new Date(), FORMAT)}`}
									/>
								</p>
							</Grid>
						</Grid>
						<Grid container spacing={3} className="mt-5 ml-5">
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
