export function makeCall() {
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