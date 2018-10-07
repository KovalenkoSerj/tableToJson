
function addRow() {
  var tbody = document.getElementById('tbody'),
    row = document.createElement("tr");
  var btnDelete = document.createElement("button");
  btnDelete.innerHTML = 'X';
  btnDelete.className = 'btn';
  btnDelete.addEventListener('click', function () {
    var buttonElement = this;
    element = buttonElement.closest('tr');
    element.parentElement.removeChild(element);
  })

  var tdItem = document.createElement("td");
  tdItem.setAttribute('contenteditable', true);
  var tdValue = document.createElement("td");
  tdValue.setAttribute('contenteditable', true);

  row.appendChild(tdItem);
  row.appendChild(tdValue);
  row.appendChild(btnDelete);
  tbody.appendChild(row);

}

function tableTdsToJSON(table) {
  var name, key = [], arrForObj = [], col = table.rows[0].cells.length,
    row = table.rows.length;
  arrForObj.push("[");
  for (var i = 0; i < col; i++) {
    name = 'name';
    keyValue = 'value';
    key.push(name);
    key.push(keyValue);
  }
  for (var i = 1; i < row; i++) {
    arrForObj.push("{\n");
    for (var j = 0; j < col; j++) {

      var inputValue = table.rows[i].cells[j].innerText;
      arrForObj.push("\"" + key[j] + "\":" + "\"" + inputValue + "\"");
      console.log(key)
      if (j < (col - 1)) {
        arrForObj.push(",\n");
      }
    }
    if (i < (row - 1)) {
      arrForObj.push("\n},\n");
    }
    else {
      arrForObj.push("\n}");
    }
  }
  arrForObj.push("]");
  return arrForObj.join("");
}

$("#toTextArea").on("click", function (e) {
  e.preventDefault();
  var table = $("#myTable")[0];
  $("#textArea").val(tableTdsToJSON(table));
});


