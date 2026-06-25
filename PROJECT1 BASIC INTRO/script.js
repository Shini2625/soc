
let b1 = document.getElementById("b1");
let b2 = document.getElementById("ele");
let p1 = document.getElementById("p1");
let q = document.getElementById("q");
  b1.addEventListener("click", function () {
    b1.style.backgroundColor = "#fff";
    b1.style.color = "#111";
  });

  b1.addEventListener("mouseleave", function () {
    b1.style.backgroundColor = "#4f2a03";
    b1.style.color = "#fff";
  });
 q.addEventListener("click", function () {
    if (b2.innerHTML === "swipe down") {
        b2.innerHTML = "swipe right";
        p1.src = "2048_files/2048-2.png";
    }
    else if (b2.innerHTML === "swipe right") {
        b2.innerHTML = "have fun playing!";
        p1.src = "2048_files/2048-3.png";
    }
    else {
        b2.innerHTML = "swipe down";
        p1.src = "2048_files/2048-1.png";
    }
 });