const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", function(e) {
    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px";
    //make a bunch of circles
    // let newCircle = document.createElement("div");
    // newCircle.style.top = e.pageY + "px";
    // newCircle.style.left = e.pageX + "px";
    // newCircle.setAttribute("class", "new-circle");
    // document.querySelector("body").append(newCircle);
})

