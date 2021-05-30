var client = document.getElementById("client")
var product = document.getElementById("product")
var cart = document.getElementById("cart")

// var steak = {name: "Tenderloin Steak", price: 70, id: "tenderloin"}
// var milk = {name: "Milk", price: 10, id: "milk"}
// var yogurt = {name: "Yogurt" , price:5, id:"yogurt"}
// var porkChop = {name:"Pork Chop" , price:30 , id: "porkChop"}
// var egg = {name: "Egg", price: 4, id: "egg"}
// var peanut = {name: "Peanuts", price:6 , id: "peanut"}
// var cashew = {name:"Cashews" , price:8 , id: "cashew"}
// var bread = {name:"Bread" , price: 7 , id: "bread"}
// var cereal = {name: "Cereal", price:11 , id: "cereal"}

function navClient(){
    location.href = "./index.html"
}
function navProduct(){
    location.href = "./product.html"
}
function navCart(){
    location.href = "./cart.html"
}



function cInfoIsChecked(){
   var savedArray = JSON.parse(window.localStorage.getItem("info"))
   if (savedArray !== []){
    for(var i = 0; i<savedArray.length;i++){
        var cur = document.getElementById(savedArray[i])
        cur.checked = "true"
    }
   }
   
}

function cInfoSelect(){
    var cInfoSelection = []
    var types = document.getElementsByClassName("cInfo")
    for (var i = 0; i<types.length; i++){
        if (types[i].checked){
            cInfoSelection.push(types[i].value)
        }
    }
    //console.log(cInfoSelection)
    window.localStorage.setItem("info", JSON.stringify(cInfoSelection))
    navProduct()
    
}
function productLoad(){
    var savedArray = JSON.parse(window.localStorage.getItem("info"))
    //console.log(savedArray)
    if (savedArray !== []){
        for(var i = 0; i<savedArray.length;i++){
         var cur = document.getElementById(savedArray[i])
         cur.style.display = "none"
        }
    }
    // var p = document.getElementById(savedArray[0])
    // p.style.display = "none";
    //console.log()
}

function saveProduct(){
    var productSelection = []
    var products = document.getElementsByClassName("product")
    for (var i = 0; i<products.length; i++){
        if (products[i].checked){
            productSelection.push(products[i].value)
        }
    }
    //console.log(productSelection)
    window.localStorage.setItem("product", JSON.stringify(productSelection))
    //console.log(JSON.parse(window.localStorage.getItem("product")))
    navCart()
}

function cartLoad(){
    var savedArray = JSON.parse(window.localStorage.getItem("product"))
    var productDiv = document.getElementById("productsListed")
    var totalPrice = document.getElementById("totalPrice")
    var cur
    var price
    var totPrice = 0
    
    savedArray.forEach((item)=>{
        
        
        if (item == "milk"){
            cur = "Milk"
            price = 8
        }
        else if (item == "yogurt"){
            cur = "Yogurt"
            price = 6
        }
        else if (item == "porkChop"){
            cur = "Pork Chop"
            price = 20
        }
        else if (item == "tenderloin"){
            cur = "Tenderloin Steak"
            price = 40
        }
        else if (item == "egg"){
            cur = "Egg"
            price = 5
        }
        else if (item == "peanut"){
            cur = "Peanuts"
            price = 13
        }
        else if (item == "cashew"){
            cur = "Cashews"
            price = 14
        }
        else if (item == "bread"){
            cur = "Bread"
            price = 10
        }
        else if (item == "cereal"){
            cur = "Cereal"
            price = 8
        }
        totPrice = totPrice + price
        let li = document.createElement("li")
        li.innerText = cur
        productDiv.appendChild(li)
        
        
    })
    totalPrice.innerHTML = "Total Price: $"+ totPrice 
    // console.log(productDiv)
    // console.log(savedArray)
}
