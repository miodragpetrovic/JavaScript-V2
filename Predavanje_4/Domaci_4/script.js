let dayOfTheWeek = "Saturday";

switch (dayOfTheWeek) {
	case "Monday":
	case "Tuesday":
	case "Wednesday":
	case "Thursday":
		console.log("Work work...");
		break;

	case "Friday":
		console.log("Weekend is coming!!!");
		break;

	case "Saturday":
	case "Sunday":
		console.log("Weekend");
		break;
	default:
		console.log("Not set");
}
