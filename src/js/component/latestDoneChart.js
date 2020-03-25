import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Bar } from "react-chartjs-2";
import { makeStyles } from "@material-ui/styles";
import { Card, CardHeader, CardContent, CardActions, Divider, Button } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

import { data, options } from "./chartData";

const useStyles = makeStyles(() => ({
	root: {},
	chartContainer: {
		height: 290,
		position: "relative"
	},
	actions: {
		justifyContent: "flex-end"
	}
}));

export const LatestTasksDone = props => {
	const { className, ...rest } = props;

	const classes = useStyles();

	return (
		<div className="w-100">
			<Card {...rest} className={clsx(classes.root, className)}>
				<CardHeader
					action={
						<Button size="small" variant="text">
							Last 7 days <ArrowDropDownIcon />
						</Button>
					}
					title="Latest Completed Tasks"
				/>
				<Divider />
				<CardContent>
					<div className={classes.chartContainer}>
						<Bar data={data} options={options} />
					</div>
				</CardContent>
				<Divider />
				<CardActions className={classes.actions}>
					<Button className="py-2" color="primary" size="small" variant="text">
						Overview <ArrowRightIcon />
					</Button>
				</CardActions>
			</Card>
		</div>
	);
};

LatestTasksDone.propTypes = {
	className: PropTypes.string
};
