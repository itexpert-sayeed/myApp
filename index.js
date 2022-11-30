import dateFormat from "dateformat";

const now= new Date();

const format= dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");

console.log(format);