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
    // select the input element
    let inputElement =d3.select("#datetime")

    // Get the value property of the input element
    let inputValue = inputElement.property("value")

    // empty out the table body
    tbody.html("")
    let newData = tableData.filter(item => item.datetime === inputValue)
    tbody.selectAll("tr").data(newData).enter().append("tr").text(item =>{
        return `${item.datetime}
        ${item.city}
        ${item.state}
        ${item.country}
        ${item.shape}
        ${item.durationMinutes}
        ${item.comments}`
        
    })
   
   
}
