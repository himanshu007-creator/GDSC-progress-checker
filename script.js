var input = document.getElementById("inp");
var submit = document.getElementById("sbmt");
submit.addEventListener("click", () => {
  var mail = input.value.toLowerCase().trim();
  // console.log(mail);
  getJSON(mail);
});
function pwa() {
  if ("serviceWorker" in navigator) {
    // register service worker
    navigator.serviceWorker.register("service-worker.js");
  }
}
pwa();
function getJSON(email) {
  var found = false;
  $.getJSON("team.json", function (data) {
    //   var items = [];
    // console.log(data);
    $.each(data, function () {
      if (this["Student Email"] == email) {
        // console.log(this);
        found = true;
        var name = document.getElementById("name");
        var status = document.getElementById("status");
        var t1 = document.getElementById("t1");
        var t2 = document.getElementById("t2");
        var card = document.getElementById("card");
        var st =
          `${this["Enrolment Status"]}` == "All Good"
            ? "Registered Successfully"
            : "Not registered successfully";
        name.innerText = `${this["Student Name"]}`;
        status.innerText = st;
        t1.innerText = `Track 1:-     ${this["# of Skill Badges Completed in Track 1"]} / 6 labs completed`;
        t2.innerText = `Track 2:-     ${this["# of Skill Badges Completed in Track 2"]} / 6 labs completed`;
        card.style.visibility = "visible";
      }
    });
  });
  if (found) {
    card.style.visibility = "visible";
  } else {
    var name = document.getElementById("name");
    var status = document.getElementById("status");
    var t1 = document.getElementById("t1");
    var t2 = document.getElementById("t2");
    var card = document.getElementById("card");
    name.innerText = "NOT FOUND";
    status.innerText = "NA";
    t1.innerText = "NA";
    t2.innerText = "NA";
    card.style.visibility = "visible";
  }
}
