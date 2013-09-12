
function log(outputString)
{
	if(window.console && window.console.log) console.log(outputString);
}

/**
 * Returns a custom date string.
 * Accepts the following:
 * 
 * D# - day of month (no leading zero)
 * D#0 - day of month (two digit)
 * D - day name short
 * DD - day name long
 * M# - month of year (no leading zero)
 * M#0 - month of year (two digit)
 * M - month name short
 * MM - month name long
 * Y - year (two digit)
 * YY - year (four digit)
 * HOU - hour
 * MIN - minute
 * SEC - second 
 */
function formatDate(format, date)
{
	var formattedDate = format;

	var day = date.getDate();
	var dayName = getDayName(date.getDay());
	var month = date.getMonth()+1;
	var monthName = getMonthName(month);
	var year = date.getFullYear();
	var hour = date.getHours();
	var minute = date.getMinutes();
	var second = date.getSeconds();

	// Time
	formattedDate = formattedDate.replace('HOU', (hour < 10) ? '0' + hour : hour);
	formattedDate = formattedDate.replace('MIN', (minute < 10) ? '0' + minute : minute);
	formattedDate = formattedDate.replace('SEC', (second < 10) ? '0' + second : second);

	// Day
	formattedDate = formattedDate.replace('D#0', (day < 10) ? '0' + day : day);
	formattedDate = formattedDate.replace('D#', day);
	formattedDate = formattedDate.replace('DD', dayName);
	formattedDate = formattedDate.replace('D', dayName.slice(0,3));
	
	// Month
	formattedDate = formattedDate.replace('M#0', (month < 10) ? '0' + month : month);
	formattedDate = formattedDate.replace('M#', month);
	formattedDate = formattedDate.replace('MM', monthName);
	formattedDate = formattedDate.replace('M', monthName.slice(0,3));
	
	// Year
	formattedDate = formattedDate.replace('YY', year);
	formattedDate = formattedDate.replace('Y', new String(year.toString().slice(2,4)));
	
	return formattedDate;
}

function getDayName(dayNo, shortName)
{
	var dayName = "";

	switch(dayNo)
	{
		case 1:
			dayName = "Monday";
			break;
		case 2:
			dayName = "Tuesday";
			break;
		case 3:
			dayName = "Wednesday";
			break;
		case 4:
			dayName = "Thursday";
			break;
		case 5:
			dayName = "Friday";
			break;
		case 6:
			dayName = "Saturday";
			break;
		case 7:
			dayName = "Sunday";
			break;
		default:
			log("utils.getDayName: invalid day number passed '" + dayNo + "'")
			return undefined;
	}
	
	if(shortName) return dayName.slice(0, 3);
	
	return dayName;
}

function getMonthName(monthNo, shortName)
{
	var monthName = "";

	switch(monthNo)
	{
		case 1:
			monthName = "January";
			break;
		case 2:
			monthName = "February";
			break;
		case 3:
			monthName = "March";
			break;
		case 4:
			monthName = "April";
			break;
		case 5:
			monthName = "May";
			break;
		case 6:
			monthName = "June";
			break;
		case 7:
			monthName = "July";
			break;
		case 8:
			monthName = "August";
			break;
		case 9:
			monthName = "September";
			break;
		case 10:
			monthName = "October";
			break;
		case 11:
			monthName = "November";
			break;
		case 12:
			monthName = "December";
			break;
		default:
			log("utils.getMonthName: invalid month number passed '" + monthNo + "'")
			return undefined;
	}
	
	if(shortName) return monthName.slice(0, 3);
	
	return monthName;
}