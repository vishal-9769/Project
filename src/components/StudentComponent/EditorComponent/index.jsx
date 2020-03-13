import React, { Component } from 'react'
//import NavBar from '../NavbarComponent'
import {
    EuiPage,
    EuiPageBody,
    EuiPageSideBar,
  } from '@elastic/eui'
//   import {makeCall} from '../../../compiler'
//import TreeView from './TreeView'
//import FacultyDashboard from './FacultyDashboard'
function makeCall() {
    var code = document.getElementById("code").value;
    var input = document.getElementById("input").value;
    var inputRadio = document.getElementById("input").value;
    var lang = document.getElementsByClassName("select").item.value;

    if(code.length>0){
        fetch('http://localhost:8080/compilecode', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          code:code,
          input:input,
          inputRadio:inputRadio,
          lang:lang
      })
      }).then(res => res.json())
      .then(
        (result) => {
            console.log(result);
        },
      )
    }
}
export class Editorcomponet extends Component {
    
    


    render() {
        return (
            <div>
                  <EuiPage>
                    {/* <EuiPageSideBar><StudentSidebar/></EuiPageSideBar> */}
                    <EuiPageBody>
                       <div>
                       {/* <EuiFormRow label="" display="columnCompressed"> */}
                       <h1>Compilex Demo</h1>
                            <form id="myform" name="myform" method="post" action="">
                            <h3>Code</h3>
                            <textarea rows="13" cols="100" id="code" name="code" ></textarea> 
                            <br/>
                            <h3>Input</h3>
                            <textarea rows="10" cols="100" id="input" name="input" ></textarea> 
                            <br/>
                            Language : <select name="lang">
                            <option value="C">C</option>
                            <option value="C++">C++</option>
                            <option value="Java">Java</option>  
                            <option value="Python">Python</option> 
                            <option value="CS">C#</option>  
                            <option value="VB">VB</option>  
                            </select>
                            Compile With Input : 
                            <input type="radio" name="inputRadio" id="inputRadio" value="true"/>yes
                            <input type="radio" name="inputRadio" id="inputRadio" value="false"/>No
                            <br />
                            <input type="submit" value="submit"  name="submit" onClick={makeCall}/>
                            </form>
                      </div>
                    </EuiPageBody>
                </EuiPage>
            </div>
        )
    }
    
}

export default Editorcomponet;