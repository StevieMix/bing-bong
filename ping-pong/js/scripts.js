//Front
$(document).ready(function() {
    $("form").submit(function(event) {
        var inputNUmber = Math.ceil($("input#number").val());
        var reuslt = []

        if(isNaN(inputNumber) || inputNumber <3) {
            alert("stay positive number")
        } else {
            result = pongs(Number(inputNumber));

            result = result.map(function(number, i) {
                return "<li>" + getImage(number) + "</li>";
            });
            $("ul#numberList").html(result.join(""));
           
        }
        event.preventDefault();
    });
});

//Back
var pongs = function(inputNumber) {
  var numList = [getPush(inputNumber)];
  for (i=inputNumber;i>1;i-=1) {
    inputNumber = inputNumber - 1;
    numList.push(getPush(inputNumber));
  };
  return numList;
};
var getPush = function(inputNumber) {
  if (inputNumber % 15 === 0) {
    return "ping-pong";
  } else if (inputNumber % 3 === 0) {
    return "ping";
  } else if (inputNumber % 5 === 0) {
    return "pong";
  } else {
    return inputNumber;
  }
}
var getImage = function(number) {
  if (number === "ping-pong") {
    return "<li>" + number + "<img src='img/pingpong.jpeg'></li>";
  } else if (number === "pong") {
    return "<li>" + number + "<img src='img/pong.jpeg'></li>"
  } else if (number === "ping") {
    return "<li>" + number + " <img src='img/ping.jpeg'></li>"
  } else {
    return number;
  }
}

// var newSound = function(number) {
//     if (number === "bing-bong") {
//         retrun "<li>" + number + "new sound("sounds/bing-bong.mp3")</li>";
//     } else if (number === "bong"){
//         return "<li>" + number + "<sounds/bong.mp3></li>";
//     } else if (number === "bing") {
//         return "<li>" + number + "<sounds/bing.mp3></li>"
//     } else {
//         return number;
//     }


