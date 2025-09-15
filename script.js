let imgBox = document.getElementById("imgBox");
let QRImg = document.getElementById("QRImg");
let QRText = document.getElementById("QRText");
let container = document.querySelector(".container");
let button = document.createElement("button");
button.innerText = "Download";

function generateQr() {
  if (QRText.value.length > 0) {
    QRImg.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      QRText.value;

    imgBox.classList.add("showImg");
  } else {
    QRText.classList.add("error");
    setTimeout(() => {
      QRText.classList.remove("error");
    }, 1000);
  }
  container.appendChild(button);
}

button.addEventListener("click", function () {
  let link = document.createElement("a");
  link.href =QRImg.src;
  link.download = `QR code`;
  
  link.click();
 
});
// count = 8
// character ='#';
// rows = [];

//  for(let i =0; i<count;  i++){
// (rows.push(character.repeat(i+1))); 
// }

// let result = '';
// for (const row of rows){
//     result = result + row + "\n"
// }
// console.log(result)
