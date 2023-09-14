//Fetch JSON data
let url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json'
d3.json(url).then(function(data) {
    
    //use .filter and multiple functions for developing plots and creating ids and labels
    //
    let metadata = data.metadata
    function(choice) {
        result = metadata.filter(sample => sample.id == choice)
        result.otu_ids        
    }
    

    for (let i=0; i<metadata.length;i++){
        let sample_metadata = metadata[i]
        // console.log(sample_metadata)
    }
    for (let i=0; i<samples.length; i++){
        let sample = samples[i]
        let sample_values = sample.sample_values
        let otu_ids = sample.otu_ids
        let otu_labels = sample.otu_labels
        let sample_id = sample.id
    
    
    
    function init(){
        let samples = data.samples
        let bar = [{
            //Use sample_values as the values for the bar chart.
             x: samples[0].sample_values,
            //Use otu_ids as the labels for the bar chart.
             y: samples[0].otu_ids,
            //Use otu_labels as the hovertext for the chart.
            text : [samples[0].otu_labels],
            
            type: "bar"
        }]
        Plotly.newPLot("bar",bar)  
        
        let bubble = [{
             //Use otu_ids for the x values.
             x : samples[0].otu_ids,
             //Use sample_values for the y values.
             y: samples[0].sample_values,
             mode: 'markers',
             marker: {
                 //Use sample_values for the marker size.
                 size : samples[0].sample_values,
                 //Use otu_ids for the marker colors.
                 color : samples[0].otu_ids,
             },
             //Use otu_labels for the text values.
             text: [samples[0].otu_labels] 
        }]
        Plotly.newPLot("bubble",bubble)
    }

    d3.selectAll("#selDataset").on("change",optionChanged);

    function optionChanged(){
        let dropdownMenu = d3.select("#selDataset")
        let dataset = dropdownMenu.property("value")
        
        if(dataset === sample_id){
            let row = document.createElement('tr');
            let id
            let bar = sample
            let bubble = sample}
        

        

  
                
            //Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
            let trace1 = {
                //Use sample_values as the values for the bar chart.
                x: sample_values,
                //Use otu_ids as the labels for the bar chart.
                y: otu_ids,
                //Use otu_labels as the hovertext for the chart.
                text : [otu_labels],
                type: "bar",
            }    

            // let bar = [trace1]
            Plotly.restyle("bar","x",[x])
            Plotly.restyle("bar","y",[y])

            //Create a bubble chart that displays each sample.
            let trace2  = {
                //Use otu_ids for the x values.
                x : otu_ids,
                //Use sample_values for the y values.
                y: sample_values,
                mode: 'markers',
                marker: {
                    //Use sample_values for the marker size.
                    size : sample_values,
                    //Use otu_ids for the marker colors.
                    color : otu_ids,
                },
                //Use otu_labels for the text values.
                text: [otu_labels] 
            }
            // let bubble = [trace2]

            Plotly.restyle("bubble", "x",[x])
            Plotly.restyle("bubble","y",[y])

            }       
        }
    }
})

init()
//Display the sample metadata, i.e., an individual's demographic information.

//Display each key-value pair from the metadata JSON object somewhere on the page.

//Update all the plots when a new sample is selected. 

//Additionally, you are welcome to create any layout that you would like for your dashboard

