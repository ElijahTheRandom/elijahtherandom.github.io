function doggy(){
    let aitems = document.getElementsByClassName("aimg");
    for (let i=0; i < aitems.length; i++) {
      aitems[i].src = "images\krustydog.png";}

      let bitems = document.getElementsByClassName("bimg");
    for (let i=0; i < bitems.length; i++) {
      bitems[i].src = "images\krustydog.png";}

    let fitems = document.getElementsByClassName("footerphotos");
    for (let i=0; i < fitems.length; i++) {
      fitems[i].src = "images\krustydog.png";
      fitems[i].style.height = "70px"}

    let citems = document.getElementsByClassName("title");
    for (let i=0; i < citems.length; i++){
        citems[i].textContent = "Buy a Krusty Dog TODAY!"; }
    
    let ditems = document.getElementsByClassName("poop")
    for (let i=0; i < ditems.length; i++){
        ditems[i].textContent = "PEOPLE ORDER OUR WIENERS!"; }

    let eitems = document.getElementsByClassName("sale")
    for (let i=0; i < eitems.length; i++){
        eitems[i].textContent = "GET YOUR OWN KRUSTY DOG FOR ONLY $99.99!"; }

    const iframe = document.querySelector('iframe')
    iframe.src = "https://www.youtube.com/embed/-iV1pbpKyxA"
    
    document.getElementById("bio").textContent = "BUY THE MOST VELUMPTIOUS, JUICE, SCRUMPTIOUS, GELATINOUS, KRABBY WIENER TODAY! KRUSTY DOGS MAKE FOR GREAT FOOD, SNACKS, WEDDING GIFTS, AND BIOHAZARD EXAMPLES!";
    }
