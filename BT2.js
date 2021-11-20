function addItem(){
    const add = document.getElementsByName("add")[0];
    const listSb = document.getElementById("sidebar");

    const newItem = document.createElement('a');
    newItem.href = "#";
    newItem.classList = "list-group-item list-group-item-action";
    newItem.innerText = add.value;
    listSb.appendChild(newItem);
} 