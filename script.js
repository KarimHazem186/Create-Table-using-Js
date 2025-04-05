let rowsInput = document.getElementById('rows');
let colsInput = document.getElementById('cols');
let btn = document.querySelector('button');

btn.addEventListener('click',createTable);

function createTable() {
    let body = document.body;
    let table = document.createElement('table');

    for (var i = 0; i < Number(rowsInput.value);i++){

        let tr = document.createElement('tr'); // <tr></tr>
        table.appendChild(tr);
        for(var j = 0 ;j <Number(colsInput.value);j++){
            let td = document.createElement('td') // <td><td>
            let text = document.createTextNode('item text'); // 'item text'
            td.appendChild(text);
            /*ORRRRRRRRR*/
            // td.innerHTML = "item text";

            tr.appendChild(td);
        }

    }
    body.appendChild(table);
    
    table.style.marginTop = '300px';
    table.style.left = '50%',top='50%',right='0';
    table.style.transform = 'translate(-50%, -50%)';
    table.style.position = 'absolute';
}

// createTable();

/*
To Convert String to Number Use
    - + 
    - .parseInt()
    - Number(string)

*/