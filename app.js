const ADD_BUTTON = document.getElementById("dodoaj");
const ADD_FIRST = document.getElementById("first_number");
const ADD_SECOND = document.getElementById("second_number");
const ADD_RESULT = document.getElementById("wynik");
const RADIO_BUTTONS = document.getElementsByName("cal");

ADD_BUTTON.addEventListener("click", (event) => {
  let cal;
  RADIO_BUTTONS.forEach((element) => {
    if (element.checked) {
      cal = element;
    }
  });


  if (cal.id === "dodawanie") {
    let first_number = ADD_FIRST.value;
    let second_number = ADD_SECOND.value;
    ADD_RESULT.value = parseInt(first_number) + parseInt(second_number);
  } else if (cal.id === "odejmowanie") {
    let first_number = ADD_FIRST.value;
    let second_number = ADD_SECOND.value;
    ADD_RESULT.value = parseInt(first_number) - parseInt(second_number);
  } else if (cal.id === "mnozenie") {
    let first_number = ADD_FIRST.value;
    let second_number = ADD_SECOND.value;
    ADD_RESULT.value = parseInt(first_number) * parseInt(second_number);
  } else if (cal.id === "dzielenie") {
    let first_number = ADD_FIRST.value;
    let second_number = ADD_SECOND.value;
    ADD_RESULT.value = parseInt(first_number) / parseInt(second_number);
  }
});
