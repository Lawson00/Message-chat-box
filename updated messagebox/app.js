let showBox = document.querySelector(".show_box");
let sendBtn = document.getElementById("send_btn");
let inputField = document.getElementById("input_field");

const words = [];
// showBox.innerHTML = words.toString();

function show() {
  if (inputField.value == "") {
    alert("Enter a message");
  } else {
    let newP = document.createElement("p");
    newP.innerHTML = inputField.value;
    document.querySelector(".msg_frame").appendChild(newP);

    inputField.value = "";
    inputField.focus();
  }
}

sendBtn.addEventListener("click", (event) => {
  show();
});

inputField.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    show();
  }
});
