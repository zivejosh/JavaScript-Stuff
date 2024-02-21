const timeElement = document.getElementById("time");
const currentTime = new Date().toLocaleTimeString();
const currentDate = new Date().toLocaleDateString();
const dateArray = currentDate.split("/");
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", 
                "October", "November", "December"];

function findCentury(century) {
    const centuryValues = {17: 4, 18: 2, 19: 0, 20: 6};
    const keys = Object.keys(centuryValues);

    if (keys.includes(century.toString())) {
        return centuryValues[century.toString()]
    }
    return findCentury(century - 4);

}

function getDay(date_array) { 
    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    const ltd = date_array[2].slice(-2);
    const ltd_divided = Math.floor(ltd/4);
    const dom = date_array[1];
    const keyValues = [1, 4, 4, 0, 2, 5, 0, 3, 6, 1, 4, 6];
    const ftd = date_array[2].slice(0, 2);

    let total =
      parseInt(dom) +
      parseInt(ltd_divided) +
      keyValues[date_array[0] - 1] +
      findCentury(ftd) +
      parseInt(ltd);


    // Leap Year Check
    if (date_array[0] == 2 || date_array[0] == 1 && (date_array[2] % 4) == 0) { 
        total -= 1;
    }

    total -= 1;

    return days[(total%7)-1];

} 

const updatedDate = {
  Day: getDay(dateArray),
  Month: months[dateArray[0] - 1],
  Month_Day: dateArray[1],
  Year: dateArray[2],
};

timeElement.textContent = `The Date is: ${updatedDate["Day"]}, ${updatedDate["Month"]} ${updatedDate["Month_Day"]}, ${updatedDate["Year"]}`