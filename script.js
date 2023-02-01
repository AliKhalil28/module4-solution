var helloSpeaker = {
  speak: function (name) {
    console.log("Hello " + name);
  },
};

var byeSpeaker = {
  speak: function (name) {
    console.log("Goodbye " + name);
  },
};

(function () {
  var names = [
    "Ali",
    "Jenifer",
    "Jaffar",
    "Javed",
    "Haris",
    "Fahad",
    "Zain",
    "Safdar",
    "Raffay",
    "Javad",
  ];
  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter === "j") {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})();
