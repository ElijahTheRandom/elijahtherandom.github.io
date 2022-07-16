function chicken() {
    let x = document.getElementById("chicken").value;
    if (x == "bawk") {
        alert("BAWK BAWK IM A CHICKEN HAHA");
        let aitems = document.getElementsByClassName("aimg");
        for (let i=0; i < aitems.length; i++) {
            aitems[i].src = "https://cdn.britannica.com/18/137318-050-29F7072E/rooster-Rhode-Island-Red-roosters-chicken-domestication.jpg?w=400&h=300&c=crop";}
        document.getElementById("title").innerHTML = "Elijah's Chicken Yard!";
    }
  }