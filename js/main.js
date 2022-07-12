var count = 0;
/**
 * Khối 1:
 * count
 * 
 * Khối 2:
 * while(count < 10)
 *      newDivNode = document.createElement("div");
 *      newDivNode.classList.add("myStyle");
 *      Nếu(count%2 == 0)
 *          newTextNode = document.createTextNode("Div chẵn: " + count);
 *          newDivNode.style.backgroundColor = "red";
 *      Ngược lại
 *          newTextNode = document.createTextNode("Div lẻ: " + count);
 *          newDivNode.style.backgroundColor = "blue";
 *      newDivNode.appendChild(newTextNode);
 *      document.getElementById("resultId").appendChild(newDivNode);
 *      count++;
 * 
 * Khối 3:
 * 10 khối div chẵn lẻ
 */
function createDiv() {
    var newDivNode;
    var newTextNode;
    while (count < 10) {
        newDivNode = document.createElement("div");
        newDivNode.classList.add("myStyle");
        if (count % 2 == 0) {
            newTextNode = document.createTextNode("Div chẵn: " + count);
            newDivNode.style.backgroundColor = "red";
        } else {
            newTextNode = document.createTextNode("Div lẻ: " + count);
            newDivNode.style.backgroundColor = "blue";
        }
        newDivNode.appendChild(newTextNode);
        document.getElementById("resultId").appendChild(newDivNode);
        count++;
    }
}
document.getElementById("btnCreateDiv").onclick = createDiv;
