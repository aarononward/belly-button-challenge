//Fetch JSON data
let url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json'
results = d3.json(url).then(function(data) {
    console.log(data)
})

d3.selectAll("#selDataset").on("change", updatePlotly)

function updatePlotly() {
    let dropdownMenu = d3.select("#selDataset");

    let dataset = dropdownMenu.property("value");


for (let i=0; i<results.metadata.length; i++) {

}
}
let sample_values = []
let otu_ids = []
let otu_labels = []

for (let i = 0; i < results.length; i++){
    sample_values.push(results.samples.sample_values);
    otu_ids.push(results.samples.otu_ids);
    otu_labels.push(results.samples.otu_labels)

let trace1 = {
    x: sample_values,
    y: otu_ids,
    text : [otu_labels],
    type: "bar",
}    

let bar = [trace1]
Plotly.newplot("bar",bar)


let trace2  = {
    x : otu_ids,
    y: sample_values,
    mode: 'markers',
    marker: {
        size : sample_values,
        color : otu_ids,
    },
    text: [otu_labels] 
}
let bubble = [trace2]

Plotly.newPlot("bubble", bubble)








//    let samples = data.samples
//     console.log(samples)
// }
//Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
// //let trace1 = {
//     //Use sample_values as the values for the bar chart.
 
//     x: "sample_values",
//     //Use otu_ids as the labels for the bar chart.
//     y: "otu_ids",
//     //Use otu_labels as the hovertext for the chart.
//     hoverinfo : "otu_labels",

//     type:"bar"
 }
//let data_plot = [trace1]
//Plotly.newplot("plot",data)


//Create a bubble chart that displays each sample.

    //Use otu_ids for the x values.

    //Use sample_values for the y values.

    //Use sample_values for the marker size.

    //Use otu_ids for the marker colors.

    //Use otu_labels for the text values.


//Display the sample metadata, i.e., an individual's demographic information.

//Display each key-value pair from the metadata JSON object somewhere on the page.

//Update all the plots when a new sample is selected. 
//Additionally, you are welcome to create any layout that you would like for your dashboard