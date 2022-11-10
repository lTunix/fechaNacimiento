$(document).ready(function () {
  //Se llenan los campos iniciales
  for (i = 1; i <= 31; i++) {
    $("#day").append($("<option>", { value: i, text: i }));
  }

  for (i = 1; i <= 12; i++) {
    $("#month").append($("<option>", { value: i, text: i }));
  }

  for (i = 1950; i <= 2022; i++) {
    $("#year").append($("<option>", { value: i, text: i }));
  }
});

function anoBisiesto() {
  //DETECTA BISIESTO
  let getYear = parseInt($("#year").find(":selected").text());
  let getMonth = parseInt($("#month").find(":selected").text());
  let getDay = parseInt($("#day").find(":selected").text());
  if (es_bisiesto(getYear) && getMonth == 2) {
    console.log("Bisiesto en febrero");
    for (let i = 0; i < 2; i++) {
      $("#day option[value=" + (31 - i) + "]").hide();
      if (getDay >= 29) {
        $("#day").val("29");
      }
    }
    $("#day option[value=" + 29 + "]").show();
  } else if (es_bisiesto(getYear) == false) {
    if (getMonth == 2) {
      for (let i = 0; i < 3; i++) {
        $("#day option[value=" + (31 - i) + "]").hide();
        if (getDay >= 29) {
          $("#day").val("28");
        }
      }
    } else {
      for (let i = 0; i < 3; i++) {
        $("#day option[value=" + (31 - i) + "]").show();
      }
    }
  } else {
    for (let i = 0; i < 3; i++) {
      $("#day option[value=" + (31 - i) + "]").show();
    }
  }
  checkDias();
}

function checkDias() {
  let getMonth = parseInt($("#month").find(":selected").text());
  let getDay = parseInt($("#day").find(":selected").text());
  if (getMonth == 4 || getMonth == 6 || getMonth == 9 || getMonth == 11) {
    for (let i = 0; i < 1; i++) {
      $("#day option[value=" + (31 - i) + "]").hide();
      if (getDay > 30) {
        $("#day").val("30");
      }
    }
  } else if (getMonth != 2) {
    for (let i = 0; i < 1; i++) {
      $("#day option[value=" + (31 - i) + "]").show();
    }
  }
}

function es_bisiesto(year) {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}
