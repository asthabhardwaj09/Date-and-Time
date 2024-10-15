// date is a object

// let currentDate = new Date();
// console.log(currentDate);
// console.log(currentDate.toString());
// console.log(currentDate.toDateString());
// console.log(currentDate.toTimeString());
// console.log(currentDate.toLocaleString());

// let created_date =new Date(2024,0,23)  // month start from 0
// let created_date =new Date(2024,0,23,3,5)
// let created_date =new Date("2024-01-14")
// console.log(created_date);
// console.log(created_date.toLocaleString());

// let my_time_stamp= Date.now()
// console.log(my_time_stamp);
// console.log(created_date.getTime());
// console.log(Math.floor(Date.now()/1000));  // converting from milisecond to second

// let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1);

// date manipulatation (padhna hai)

let newDate = new Date(); // Ensure the Date object is initialized

let formattedDate = newDate.toLocaleString('default', {
    weekday: "long",
});

console.log(formattedDate); // This will print the full weekday name, like "Monday"
