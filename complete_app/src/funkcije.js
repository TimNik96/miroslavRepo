const monthNameToNumbers = (value) => {
  let broj;
  switch (value) {
    case "januar":
    case "january":
      broj = "01";
      break;
    case "februar":
    case "february":
      broj = "02";
      break;
    case "mart":
    case "march":
      broj = "03";
      break;
    case "april":
      broj = "04";
      break;
    case "maj":
    case "may":
      broj = "05";
      break;
    case "jun":
    case "june":
      broj = "06";
      break;
    case "jul":
    case "july":
      broj = "07";
      break;
    case "avgust":
    case "august":
      broj = "08";
      break;
    case "septembar":
    case "september":
      broj = "09";
      break;
    case "octobar":
    case "october":
      broj = "10";
      break;
    case "novembar":
    case "november":
      broj = "11";
      break;
    case "decembar":
    case "december":
      broj = "12";
      break;

    default:
      break;
  }
  return broj;
};
const convertToMonth = (str) => {
  let month = str.substring(0, 7).slice(-2);
  return month;
};
const convertToDate = (str) => {
  let Launchdate = str.substring(0, 10);
  return Launchdate;
};
const Funkcije = {
  monthNameToNumbers,
  convertToMonth,
  convertToDate,
};
export default Funkcije;
