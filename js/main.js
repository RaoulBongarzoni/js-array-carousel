/* const btn_up= document.querySelector("#up");
const btn_down= document.querySelector("#down");
 */
let percorsi = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp"
];






for (let i = 0 ; i < percorsi.length ; i++){

    if(i == 0){

        let immagine = `<img class="slide active" src=${percorsi[i]} alt="">`;
        document.getElementById("posizione").innerHTML += immagine;
    }
    else{

        let immagine = `<img class="slide" src=${percorsi[i]} alt="">`;
        document.getElementById("posizione").innerHTML += immagine;
    }
        

}





const immagini = document.getElementsByClassName("slide");
let actual = 0;






document.getElementById("up").addEventListener("click", function(){

    immagini[actual].classList.remove("active");

    if(actual==percorsi.length-1){
        actual=0;
        immagini[actual].classList.add("active")
    }else{

        actual ++;
        immagini[actual].classList.add("active")
    }

})
document.getElementById("down").addEventListener("click", function(){

    immagini[actual].classList.remove("active");

    if(actual==0){
        actual=percorsi.length-1;
        immagini[actual].classList.add("active")
    }else{

        actual --;
        immagini[actual].classList.add("active")
    }

})

