// from data.js
var tableData = data;

var tbody = d3.select("tbody");
let table = d3.select("table");

// inserting table into the the page
tableData.forEach(item => {
    console.log(item)
    let row = tbody.append("tr");
    let date = row.append("td");
    let city = row.append("td");
    let state = row.append("td");
    let country = row.append("td");
    let shape = row.append("td");
    let duration = row.append("td");
    let comments = row.append("td");
    date.text(item.datetime);
    city.text(item.city);
    state.text(item.state);
    country.text(item.country);
    shape.text(item.shape);
    duration.text(item.durationMinutes);
    comments.text(item.comments);
})


// select the button and form
var button = d3.select("#filter-btn");
var form = d3.select("form");

// creating an event handlers
button.on("click",runEnter);
form.on("submit",runEnter);

// complete the even handler function for the form
function runEnter() {
    
}
