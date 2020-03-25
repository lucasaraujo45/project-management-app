export const data = {
	labels: ["1 Apr", "2 Apr", "3 Apr", "4 Apr", "5 Apr", "6 Apr", "7 Apr"],
	datasets: [
		{
			label: "This month",
			backgroundColor: "blue",
			data: [18, 5, 19, 27, 29, 19, 20]
		},
		{
			label: "Last month",
			backgroundColor: "grey",
			data: [11, 20, 12, 29, 30, 25, 13]
		}
	]
};

export const options = {
	responsive: true,
	maintainAspectRatio: false,
	animation: false,
	legend: { display: false },
	cornerRadius: 20,
	tooltips: {
		enabled: true,
		mode: "index",
		intersect: false,
		borderWidth: 1,
		borderColor: "black",
		backgroundColor: "white",
		titleFontColor: "green",
		bodyFontColor: "blue",
		footerFontColor: "blue"
	},
	layout: { padding: 0 },
	scales: {
		xAxes: [
			{
				barThickness: 12,
				maxBarThickness: 10,
				barPercentage: 0.5,
				categoryPercentage: 0.5,
				ticks: {
					fontColor: "blue"
				},
				gridLines: {
					display: false,
					drawBorder: false
				}
			}
		],
		yAxes: [
			{
				ticks: {
					fontColor: "blue",
					beginAtZero: true,
					min: 0
				},
				gridLines: {
					borderDash: [2],
					borderDashOffset: [2],
					color: "black",
					drawBorder: false,
					zeroLineBorderDash: [2],
					zeroLineBorderDashOffset: [2],
					zeroLineColor: "black"
				}
			}
		]
	}
};
