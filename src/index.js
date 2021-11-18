import "./styles.css";

const onClickadd = () => {
  //テキストボックス
  const inputtext = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  li.innerText = inputtext;

  const completebutton = document.createElement("button");
  completebutton.innerText = "完了";
  completebutton.addEventListener("click", () => {
    deletefromtargetlist(completebutton.parentNode);
    const addtarget = completebutton.parentNode;
    //todoの内容を取得
    const text = addtarget.firstElementChild.innerText;
    addtarget.textContent = null;

    const li = document.createElement("li");
    li.innerText = text;

    const backbutton = document.createElement("button");
    backbutton.innerText = "戻す";
    backbutton.addEventListener("click", () => {
      const deletetarget = backbutton.parentNode;
      document.getElementById("complete-list").removeChild(deletetarget);
    });
    addtarget.appendChild(li);
    addtarget.appendChild(backbutton);

    document.getElementById("complete-list").appendChild(addtarget);
  });

  const deletebutton = document.createElement("button");
  deletebutton.innerText = "削除";
  deletebutton.addEventListener("click", () => {
    deletefromtargetlist(deletebutton.parentNode);
  });

  div.appendChild(li);
  div.appendChild(completebutton);
  div.appendChild(deletebutton);
  document.getElementById("incomplete-list").appendChild(div);
};

const deletefromtargetlist = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickadd());
