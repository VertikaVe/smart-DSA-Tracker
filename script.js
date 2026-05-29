function addProblem(){

  let problemName =
    document.getElementById("problemInput").value;

  let difficulty =
    document.getElementById("difficulty").value;

  let list =
    document.getElementById("problemList");

  let li = document.createElement("li");

  li.textContent =
    problemName + " - " + difficulty;

  list.appendChild(li);

}
/*function addProblem() {
  alert("Button clicked!");
}*/