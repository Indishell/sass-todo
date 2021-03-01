const addData = () => {

    var data = document.getElementById("todo-text").value;

    if (data.length > 1 && data.length < 28) {

        var ul = document.getElementById("result");
        var li = document.createElement("li");
        li.className = "rmvdata list-group-item";

        var node = document.createTextNode(data);
        li.appendChild(node);

        var btn = document.createElement("btn");
        var btn_val = document.createTextNode("Incomplete");
        btn.appendChild(btn_val);
        btn.id = "status-todo";
        btn.className = "btn btn-warning";

        btn.onclick = function (event) { toggleButton(event); }
        li.appendChild(btn);

        var btn_1 = document.createElement("btn");
        var btn_val_1 = document.createTextNode("Close");
        btn_1.id = "remove-todo";
        btn_1.className = "btn btn-danger";
        btn_1.onclick = function (ev) { removeData(ev); };
        btn_1.appendChild(btn_val_1);

        li.appendChild(btn_1);

        ul.append(li);
        document.getElementById("myForm").reset();
    }

}
const removeData = (event) => {
    event.target.parentNode.remove(event.target);
    ev.stopPropagation();
}

const toggleButton = (event) => {

    var temp = event.target;
    temp.innerHTML = "Completed";
    temp.className = "btn btn-success";
}