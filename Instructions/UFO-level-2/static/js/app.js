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

    // prevent the page from refreshing 
    d3.event.preventDefault();

    // select the input element
    let inputElement =d3.select("#datetime")

    // Get the value property of the input element
    let inputValue = inputElement.property("value")

    // empty out the table body
    tbody.html("")

    // filter out the Data based on the input
    let newData = tableData.filter(item => item.datetime === inputValue)
    tbody.selectAll("tr").data(newData).enter().append().text(item =>{
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
}

// complete the even handler function for the form
function runEnter() {

    // prevent the page from refreshing 
    d3.event.preventDefault();

    // select the input element
    let inputElement =d3.select("#city")

    // Get the value property of the input element
    let inputValue = inputElement.property("value")

    // empty out the table body
    tbody.html("")

    // filter out the Data based on the input
    let newData = tableData.filter(item => item.city === inputValue)
    tbody.selectAll("tr").data(newData).enter().append().text(item =>{
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
}


// // from data.js
// var tableData = data;
// // get table references
// var tbody = d3.select("tbody");
// function buildTable(data) {
//   // First, clear out any existing data
//   tbody.html("");
//   // Next, loop through each object in the data
//   // and append a row and cells for each value in the row
//   data.forEach((dataRow) => {
//     // Append a row to the table body
//     var row = tbody.append("tr");
//     // Loop through each field in the dataRow and add
//     // each value as a table cell (td)
//     Object.values(dataRow).forEach((val) => {
//       var cell = row.append("td");
//       cell.text(val);
//     });
//   });
// }
// // Keep Track of all filters
// var filters = {};
// function updateFilters() {
//   // Save the element, value, and id of the filter that was changed
//   var changedElement = d3.select(this).select("input");
//   var elementValue = changedElement.property("value");
//   var filterId = changedElement.attr("id");
//   // If a filter value was entered then add that filterId and value
//   // to the filters list. Otherwise, clear that filter from the filters object
//   if (elementValue) {
//     filters[filterId] = elementValue;
//   }
//   else {
//     delete filters[filterId];
//   }
//   // Call function to apply all filters and rebuild the table
//   filterTable();
// }
// function filterTable() {
//   // Set the filteredData to the tableData
//   let filteredData = tableData;
//   // Loop through all of the filters and keep any data that
//   // matches the filter values
//   Object.entries(filters).forEach(([key, value]) => {
//     filteredData = filteredData.filter(row => row[key] === value);
//   });
//   // Finally, rebuild the table using the filtered Data
//   buildTable(filteredData);
// }
// // Attach an event to listen for changes to each filter
// d3.selectAll(".filter").on("change", updateFilters);
// // Build the table when the page loads
// buildTable(tableData);