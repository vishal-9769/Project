import React, { Component } from "react";
import DataTableComponent from '../dataTableComponent'
const csvToJSON = require('csv-file-to-json');

class StudentTableComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: {},
      large: true,
    };
  }

  onChange = files => {
    var file = files.target.files[0];
  
     console.log(files.target.value);
    
   

  var reader = new FileReader();
  reader.onload = function(e) {
    
   
    let obj = e.target.result;
    let dataJSON = csvToJSON({data:obj});
    dataJSON=dataJSON.slice(1);

console.log(JSON.stringify(dataJSON));

 
  };

  reader.readAsText(file);


   
  };

 


  render() {
    
    return (
      <div>
    
         <input type="file" onChange={this.onChange} accept=".csv"></input> 
        {/* <Dropzone name="a" onDrop={this.onDrop} />  */}
        <br/>
        <div className="studentTable">

        <DataTableComponent />
      </div>
      </div>
    );
  }
}

export default StudentTableComponent;
