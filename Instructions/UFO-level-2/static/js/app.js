// from data.js
var tableData = data;

var tbody = d3.select("tbody");
let table = d3.select("table");

// inserting table into the the page
function buildtable(data) {
  tbody.html("");

  data.forEach((item) => {
    // console.log(item)
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
  });
};

// Track of all filters
var filters = {};
function updateFilters() {

    var changedElement = d3.select(this).select("input");
    var elementValue = changedElement.property("value");
    var filterId = changedElement.attr("id");

/* if a filter value was entered then add that filterid and value
to the filters list. otherwise, clear that filter from the filter objects */
if (elementValue) {
    filters[filterId] = elementValue;
}
else { 
    delete filters[filterId];
}
//  Call function to apply all filters and rebuild the table
filterTable();
}

function filterTable () {
    // set the filtered data to the tableData
    let filteredData = tableData;
}







// select the button and form
var button = d3.select("#filter-btn");
var form = d3.select("form");

// creating an event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

// complete the even handler function for the form
function runEnter() {
  // prevent the page from refreshing
  d3.event.preventDefault();

  // select the input element
  let inputElement = d3.select("#datetime");

  // Get the value property of the input element
  let inputValue = inputElement.property("value");

  // empty out the table body
  tbody.html("");

  // filter out the Data based on the input
  let newData = tableData.filter((item) => item.datetime === inputValue);
  tbody
    .selectAll("tr")
    .data(newData)
    .enter()
    .append()
    .text((item) => {
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
    });
}

// complete the even handler function for the form
function runEnter() {
  // prevent the page from refreshing
  d3.event.preventDefault();

  // select the input element
  let inputElement = d3.select("#city");

  // Get the value property of the input element
  let inputValue = inputElement.property("value");

  // empty out the table body
  tbody.html("");

  // filter out the Data based on the input
  let newData = tableData.filter((item) => item.city === inputValue);
  tbody
    .selectAll("tr")
    .data(newData)
    .enter()
    .append()
    .text((item) => {
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
    });
}

buildtable(tableData);
