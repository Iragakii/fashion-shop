const chatlieu = document.querySelector(".chatlieu")
const chitiet = document.querySelector(".chitiet")
if(chatlieu){
    chatlieu.addEventListener("click",function(){
        document.querySelector(".product-content-right-bottom-content-chitiet").style.display = "none"
        document.querySelector(".product-content-right-bottom-content-chatlieu").style.display = "block"
    })
}
if(chitiet){
    chatlieu.addEventListener("click",function(){
        document.querySelector(".product-content-right-bottom-content-chitiet").style.display = "block"
        document.querySelector(".product-content-right-bottom-content-chatlieu").style.display = "none"
    })
}