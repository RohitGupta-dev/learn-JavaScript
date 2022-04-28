var arr = [];
var disabledVar = [];
var maleVar = [];
var femaleVAr = [];
function data(ele) {
  var setNumber = ele.value;
  console.log(setNumber);
  arr.push(setNumber);
  console.log(arr);
}
function disable() {
  if (arr.length != 0) {
    for (let i = 0; i < arr.length; i++) {
      disabledVar.push(arr[i]);
    }
    for (let index = 0; index < disabledVar.length; index++) {
      // alert("this");
      var colorChange = disabledVar[index];
      console.log("colorChange" + colorChange);

      var buttonVar = document.getElementById(colorChange);
      console.log(buttonVar);
      buttonVar.style.backgroundColor="green";
      buttonVar.disabled = true;
    }
    arr = [];

    display();
  }
}
function male() {
    if (arr.length != 0) {
        for (let i = 0; i < arr.length; i++) {
          maleVar.push(arr[i]);
        }
        for (let index = 0; index < maleVar.length; index++) {
          // alert("this");
          var colorChange = maleVar[index];
          console.log("colorChange" + colorChange);
    
          var buttonVar = document.getElementById(colorChange);
          console.log(buttonVar);
          buttonVar.style.backgroundColor="red";
          buttonVar.disabled = true;
        }
        arr = [];
    
        display();
      }

}
function female() {
    if (arr.length != 0) {
        for (let i = 0; i < arr.length; i++) {
          femaleVAr.push(arr[i]);
        }
        for (let index = 0; index < femaleVAr.length; index++) {
          // alert("this");
          var colorChange = femaleVAr[index];
          console.log("colorChange" + colorChange);
    
          var buttonVar = document.getElementById(colorChange);
          console.log(buttonVar);
          buttonVar.style.backgroundColor="blue";
          buttonVar.disabled = true;
        }
        arr = [];
    
        display();
      }
 
}
function display() {
    var total=20;
    var occuupied=disabledVar.length+maleVar.length+femaleVAr.length;
    var empty=total-occuupied;
    document.getElementById("disable").value=disabledVar.length;
    document.getElementById("male").value=maleVar.length;
    document.getElementById("female").value=femaleVAr.length;
    document.getElementById("empty").value=empty;
  console.log("disabledVar Array");
  console.log(disabledVar);
  console.log("male array");
  console.log(maleVar);
  console.log("female Array");
  console.log(femaleVAr);
}

// .form-check-input:checked {
//     background-color: #0d6efd;
//     border-color: #0d6efd;
// }
