
document.getElementById("subscribe").addEventListener("click", function() {

    document.getElementsByClassName("subscription__window")
    [0].classList.add("active");

})

document.getElementById("dissmiss__popout__btn").addEventListener("click", function() {

    document.getElementsByClassName("subscription__window")
    [0].classList.remove("active");
    
})

