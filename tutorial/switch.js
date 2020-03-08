function getDayName(dayNum) {
  var day;

  switch(dayNum) {
    case 1:
      day = "Sunday";
      break;
    case 2:
      day = "Monday";
      break;
    case 3:
      day = "Sunday";
      break;
    case 4:
      day = "Monday";
      break;
    case 5:
      day = "Sunday";
      break;
    case 6:
      day = "Monday";
      break;
    case 7:
      day = "Saturday";
      break;
    default:
      day = undefined;
      break;
  }
  return day;
}

document.write(getDayName(2));
