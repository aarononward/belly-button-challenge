//Fetch JSON data
let url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json';

//Create the table creator function
function chartbuilder(cow){
    
    //Pull the json file
    d3.json(url).then(function(data) {
    
    //Save the samples section of the json data   
    let samples = data.samples;
    
    //Match the chosen id to the sample id
    let sample = samples.filter(cat => cat.id == cow)[0];
    
    //Save the sample_values list of each sample to a variable
    let sample_values = sample.sample_values;
    
    //Same the otu_ids list of each sample to a variable
    let otu_ids = sample.otu_ids

    //Save the otu_labels list of sample to a variable
    let otu_labels = sample.otu_labels;
    
    //Create the bar chart
    let bar = [{

        //Use otu_ids as the x values for the bar chart.
        x: sample_values.slice(0,10).reverse(),   
        
        //Use sample_values as the y values for the bar chart.
        y: otu_ids.slice(0,10).map(otu_ids => `OTU ${otu_ids}`).reverse(),
        
        //Use otu_labels as the hovertext for the chart.
        text : otu_labels,  
        
        //set the type of chart to bar chart
        orientation : 'h',

        type : 'bar'
        

        }]
    
    
    //Add the plot to the page
    Plotly.newPlot("bar",bar);  
      
    //Create the bubble chart
    let bubble = [{

        //Use otu_ids for the x values.
        x : otu_ids.slice(0,10),

        //Use sample_values for the y values.
        y: sample_values.slice(0,10),
        
        //Set the x labels
        labels : "OTU ID",

        //Set the mode as markers
        mode: 'markers',

        //Set the marker parameters
        marker: {
            
            //Use sample_values for the marker size.
            size : sample_values.slice(0,10),
            
            //Use otu_ids for the marker colors.
            color : otu_ids.slice(0,10)
        },
    
        //Use otu_labels for the text values.
        text: otu_labels.slice(0,10),

    }];

    //Create layout parameters
    let layout = {
        
        //Set the title for the x axis
        xaxis:
            {title:
                {text: "OTU IDs"}}
    }
    
    //Add the plot to the page
    Plotly.newPlot("bubble",bubble,layout);
    
    });
};

//Create a function to clear the Dempgraphic table
function clearDemoTable(){
    
    //Connect to the table container 
    let panel_body = document.getElementById('sample-metadata');
    
    //Clear the table container
    panel_body.innerHTML = '';

};

//Create a function to fill the Demographic table
function demobuilder(goat){    
    
    //Grab the json data
    d3.json(url).then(function(data) {
        
        //Save the Metadata array to a variable
        let metadata = data.metadata;
        
        //Match the chosen id to the sample id
        let metasample = metadata.filter(sheep => sheep.id == goat)[0];
        
        //Put a table section into the HTML
        let table = document.createElement('table');
        
        //Create the tbody element to fill with the demo data
        let tbody = table.createTBody();
       
        //Create a function to populate the table with the demo data
        for (let key in metasample){ 

            //Check for the keys in the metasample dictionary
            if (metasample.hasOwnProperty(key)) {
                
                //Grab each value in the dictionary
                let value = metasample[key];

                //Create a row for the table
                let row = tbody.insertRow();

                //Connect to the first table cell
                let cell1 = row.insertCell(0);
                
                //Connect to the second table cell
                let cell2 = row.insertCell(1);
                
                //Connect to the third table cell
                let cell3 = row.insertCell(2)
                
                //Fill the first cell with a key
                cell1.textContent = key;
                
                //Fill the second cell with a semicolon
                cell2.textContent = " : "
                
                //Fill the third cell with the corresponding value
                cell3.textContent = value
            }
        //Connect to the table container  
        let panel_body = document.getElementById('sample-metadata');
        
        //Add the table to the container
        panel_body.appendChild(table);
        };
           
        
    });
        
        
};

//Create a function to call the other functions if the chosen id is changed
function optionChanged(pig){
    
    //Clear the demo table
    clearDemoTable(pig);

    //Fill charts
    chartbuilder(pig);
    
    //Fill the demographics table
    demobuilder(pig);
    
};

//Fill the page once it's open
function init(){
    
    //Connect to the dropdown menu
    let dropdownMenu = d3.select("#selDataset");

    //Grab the json data   
    d3.json(url).then(function(data) {

            //Grabs the is from the Names array
            let names = data.names;
            
            //Loop through the names array
            for (let i=0; i<names.length;i++){
                
                //Add an option to the table
                dropdownMenu.append('option')
                
                //Add the id as an option
                .text(names[i]).property("value",names[i]);
            }
            
            //Build the charts
            chartbuilder(names[0]);
            
            //Fill the Demographic table
            demobuilder(names[0]);
        }      
    )};


init()


