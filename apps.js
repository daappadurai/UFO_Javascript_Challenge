// import date from data.js
const tableData = data;
var tbody = d3.select("tbody");
function buildTable(data){
    tbody.html("");
    data.forEach((datarow) => {
        let row = tbody.append("tr");
        Object.values(datarow).forEach((val)=>{
            let cell = row.append("td");
                cell.text(val);

        });


    });

}
function updateFilters() {
    let date = d3.select("#datetime").property("value");
    let filteredData1 = tableData;
    if (date) {
        filteredData1 = filteredData1.filter(row => row.datetime === date);
    };
    let city = d3.select("#city").property("value");
    let filteredData2 = filteredData1;
    if (city) {
        filteredData2 = filteredData2.filter(row => row.city === city);
    };
    let state = d3.select("#state").property("value");
    let filteredData3 = filteredData2;
    if (state) {
        filteredData3 = filteredData3.filter(row => row.state === state);
    };
    let country = d3.select("#country").property("value");
    let filteredData4 = filteredData3;
    if (country) {
        filteredData4 = filteredData4.filter(row => row.country === country);
    };
    let shape = d3.select("#shape").property("value");
    let filteredData = filteredData4;
    if (shape) {
        filteredData = filteredData.filter(row => row.shape === shape);
    };

    buildTable(filteredData);

};
 d3.selectAll("#filter-btn").on("click", updateFilters);
 buildTable(tableData);
 

