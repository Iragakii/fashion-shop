const imgPosition = document.querySelectorAll(".aspect-ratio-169 img")
imgPosition.forEach(function(image,index){
    image.style.left = index*100 + "%"
})