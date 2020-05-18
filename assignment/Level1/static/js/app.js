// from data.js
var tableData = data;

// YOUR CODE HERE!
console.log(tableData);
var tbody = d3.select("tbody");

function tableBuild(d) {
    d.forEach(function(ufoReport) {
    // console.log(weatherReport);
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
    //   console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
  });
};
tableBuild(data);

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);


function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    var inputElement = d3.select("#datetime");
  
    var inputValue = inputElement.property("value");
  
    tbody.html("");
    
  
    var filteredData = data.filter(row => row.datetime === inputValue);
  
    // console.log(filteredData);
    console.log (inputValue)

    tableBuild(filteredData);
      
  };