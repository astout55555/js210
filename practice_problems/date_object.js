// #1

let today = new Date();

// LS wanted value of today, but it's not very readable
// let calendarDate = today.toDateString();
// let currentTime = today.toTimeString();
// let allDateStringInfo = [calendarDate, currentTime];

console.log(today);

// #2

console.log(`Today's day is ${today.getDay()}`);

// #3

let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

let day = daysOfWeek[today.getDay()];

console.log(`Today's day is ${day}`);

// #4

console.log(`Today's day is ${day}, the ${today.getDate()}`);

// #5

function dateSuffix(dayOfMonth) {
  let stringDate = dayOfMonth.toString();

  let secondToLastCharacter = stringDate[stringDate.length - 2];
  if (secondToLastCharacter === '1') {
    return stringDate + 'th';
  } 

  let lastCharacter = stringDate[stringDate.length - 1];
  let ending = '';
  switch (lastCharacter) {
    case '1':
      ending = 'st';
      break;
    case '2':
      ending = 'nd';
      break;
    case '3':
      ending = 'rd';
      break;
    default:
      ending = 'th';
      break;
  }

  return stringDate + ending;
}

let stringDayOfMonth = dateSuffix(today.getDate());

console.log(`Today's day is ${day}, the ${stringDayOfMonth}`);

// #6

console.log(`Today's day is ${day}, ${today.getMonth()} ${stringDayOfMonth}`);

// #7

let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let currentMonth = months[today.getMonth()];

console.log(`Today's day is ${day}, ${currentMonth} ${stringDayOfMonth}`);

// #8

function formattedMonth(month) {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[month];
}

function formattedDay(day) {
  let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return daysOfWeek[today.getDay()];
}

function formattedDate(today) {
  let day = formattedDay(today.getDay());
  let month = formattedMonth(today.getMonth());

  return `Today's day is ${day}, ${month} ${dateSuffix(today.getDate())}`;
}

console.log(formattedDate(today));

// #9

console.log(today.getFullYear());
console.log(today.getYear()); // deprecated!

// #10

console.log(today.getTime());

// #11

let tomorrow = new Date(today.getTime());
tomorrow.setDate(today.getDate() + 1);

console.log(formattedDate(tomorrow));

// #12

let nextWeek = new Date(today.getTime());

console.log(nextWeek === today); // false, different objects with same values

// #13

console.log(nextWeek.toDateString() === today.toDateString()); // true

nextWeek.setDate(today.getDate() + 7);

console.log(nextWeek.toDateString() === today.toDateString()); // false

// #14

function formatTime(dateObject) {
  let hours = dateObject.getHours().toString();
  let minutes = dateObject.getMinutes().toString();

  if (hours.length === 1) {
    hours = '0' + hours;
  }

  if (minutes.length === 1) {
    minutes = '0' + minutes;
  }

  return `${hours}:${minutes}`;
}

// LS solution is more DRY, using helper method:

function formatTime(date) {
  return addZero(date.getHours()) + ':' + addZero(date.getMinutes());
}

function addZero(value) {
  let timeComponent = String(value);
  return timeComponent.length < 2 ? '0' + timeComponent : timeComponent;
}

console.log(formatTime(today));
