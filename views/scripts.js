function POST() {
    const data = {
        name: document.getElementById("name").value,
        type: document.getElementById("type").value,
        avaliables: document.getElementById("avaliables").value,
        price: document.getElementById("price").value
    };
 
  const options = { 
      method: 'POST', 
      headers: { 
          'Content-Type': 'application/json'
    }, 
    body: JSON.stringify(data)
    };
  fetch('https://3000-b3a1ddd3-2e27-49b1-ae0c-3f2c64391be4.ws-eu01.gitpod.io/tickets', options)
   .then(res => res.json())
    .then(res => { 
        ticketlist = res;
       location.reload(true);
    });
                    }

                    function UPDATE() {
    console.log("here");
    const data = {
        _id:  document.getElementById("id").value,  
        name: document.getElementById("name").value,
        type: document.getElementById("type").value,
        avaliables: document.getElementById("avaliables").value,
        price: document.getElementById("price").value
    };
    console.log(data);
  const options = { 
      method: 'PUT', 
      headers: { 
          'Content-Type': 'application/json'
    }, 
    body: JSON.stringify(data)
    };
    var id = data._id;
  fetch('https://3000-b3a1ddd3-2e27-49b1-ae0c-3f2c64391be4.ws-eu01.gitpod.io/tickets/' + id, options)
   .then(res => res.json())
    .then(res => { 
        ticketlist = res;
         alert("Your table was update sucessfully");
       location.reload(true);
       
    });
}

function DELETE() {
    console.log("here");
    const data = {
        _id:  document.getElementById("id").value,  
    };
    console.log(data);
  const options = { 
      method: 'DELETE', 
      headers: { 
          'Content-Type': 'application/json'
    }, 
    body: JSON.stringify(data)
    };
    var id = data._id;
  fetch('https://3000-b3a1ddd3-2e27-49b1-ae0c-3f2c64391be4.ws-eu01.gitpod.io/tickets/' + id, options)
   .then(res => res.json())
    .then(res => { 
        ticketlist = res;
       alert("The selected item was deleted sucessfully");
        location.reload(true);
       
    });
}

let ticketslist = [];
 const getAll = () => {
    console.log("caling get all")
    fetch('https://3000-b3a1ddd3-2e27-49b1-ae0c-3f2c64391be4.ws-eu01.gitpod.io/tickets')
           
    .then(res => res.json())
    .then(res => { 
        ticketlist = res;
        console.log(ticketlist);
    showTickets();
    });
 }
    const showTickets = () => {  
    let tableRef = document.getElementById('tableOfTickets').getElementsByTagName('tbody')[0];
    
   for (var i = 0; i < ticketlist.length; i++){
    var newRow = tableRef.insertRow(tableRef.rows.length);
    var newCell_0  = newRow.insertCell(0);
    var newCell_1  = newRow.insertCell(1);
    var newCell_2  = newRow.insertCell(2);
    var newCell_3  = newRow.insertCell(3);
    var newCell_4  = newRow.insertCell(4);
    var newText_0  = document.createTextNode(ticketlist[i]._id)
    newCell_0.appendChild(newText_0);
    var newText_1  = document.createTextNode(`${ticketlist[i].name}`)
    newCell_1.appendChild(newText_1);
    var newText_2  = document.createTextNode(ticketlist[i].type)
    newCell_2.appendChild(newText_2);
    var newText_3  = document.createTextNode(ticketlist[i].avaliables)
    newCell_3.appendChild(newText_3);
    var newText_4  = document.createTextNode(ticketlist[i].price)
    newCell_4.appendChild(newText_4);
     }
}

getAll();