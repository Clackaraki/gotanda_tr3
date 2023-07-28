const pics_src = ["pics/1.jpg", "pics/2.jpg","pics/3.jpg"]; //cotoスライドショー
const pics2_src = ["pics2/1.jpg", "pics2/2.jpg","pics2/3.jpg"];  //梟スライドショー
let num = -1 ;


function slideshow_timer(){
    if (num === 2){
        num = 0 ;
    }
    else{
        num ++;
    }
    document.getElementById("mypic").src = pics_src[num];
    document.getElementById("mypic2").src = pics2_src[num];
}

setInterval(slideshow_timer, 4000);

