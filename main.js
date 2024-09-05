let uinfo = document.querySelector("#userinfo");
let close = document.querySelector("#close");
let sidebar = document.getElementById("sidebar");
let user = document.getElementById("user");
let username = document.getElementById("username");
let oneuser = JSON.parse(localStorage.getItem("oneUser"));
let details = document.getElementById("details");
let maleCont = document.getElementById("maleCont");
let female = document.getElementById("femaleCont");
let kidsS = document.getElementById("kids");
let Electronics = document.getElementById("Electronics");

let uip = document.getElementById("uip");
let search = document.getElementById("sbtn");
let searchcont = document.getElementById("searchcont");
let mainsection = document.querySelector("main");

let dataFromStore= JSON.parse(localStorage.getItem("data"));

let cartStore = [];
let count = document.getElementById("count");
if(oneuser){
    if(oneuser.userCart){
        cartStore=oneuser.userCart;
        count.innerHTML=cartStore.length;
    }
}



//sidebar
uinfo.addEventListener("click", (e) => {
    sidebar.style.right = 0;
});
close.addEventListener("click", (e) => {
    sidebar.style.right = "-100%";
});
//details
if (oneuser) {
    
    user.innerHTML = oneuser.first;
    username.innerHTML = oneuser.first;
    details.innerHTML = `
    <h3 style="color: aliceblue; margin-top: 1rem; background-color: gray;">${oneuser.first}</h3>
    <h3 style="color: aliceblue; margin-top: 1rem; background-color: gray;">${oneuser.mail}</h3>
    <a href="">Your cart</a>
    <a href="./main.html" id="logout"><button>logout</button></a>
    `
    let logout = document.getElementById("logout");
    logout.addEventListener("click", () => {
        localStorage.removeItem("oneUser");
    })
}
//main
async function mainfunc() {
    let dataFromServer = await fetch("https://www.shoppersstack.com/shopping/products/alpha");
    let data = await dataFromServer.json();
    let allData = data.data;
    //men
    let menData = allData.filter((e) => {
        if (e.category == "men") {
            return e;
        }
    })

    menData.map((e) => {
        maleCont.innerHTML += `
                <div id="${e.productId}">
                    <img src=${e.productImageURLs[0]} alt="">
                    <h5>Name: ${e.name} </h5>
                    <h4>Price: ${e.price}</h4>
                    <h5>Rating: ${e.rating}</h5>
                    <button>Add To Cart</button>
                </div>
        `
    })
    //women
    let womenData = allData.filter((e) => {
        if (e.category == "women") {
            return e;
        }
    })

    womenData.map((e) => {
        female.innerHTML += `
                <div id="${e.productId}">
                    <img src=${e.productImageURLs[0]} alt="">
                    <h5>Name: ${e.name} </h5>
                    <h4>Price: ${e.price}</h4>
                    <h5>Rating: ${e.rating}</h5>
                    <button>Add To Cart</button>
                </div>
        `
    })
    // electronics
    let electronics = allData.filter((e) => {
        if (e.category == "electronics") {
            return e;
        }
    })

    electronics.map((e) => {
        Electronics.innerHTML += `
                <div id="${e.productId}">
                    <img src=${e.productImageURLs[0]} alt="">
                    <h5>Name: ${e.name} </h5>
                    <h4>Price: ${e.price}</h4>
                    <h5>Rating: ${e.rating}</h5>
                    <button>Add To Cart</button>
                </div>
        `
    })
    // kids
    let kids = allData.filter((e) => {
        if (e.category == "kids") {
            return e;
        }
    })

    kids.map((e) => {
        kidsS.innerHTML += `
                <div id="${e.productId}">
                    <img src=${e.productImageURLs[0]} alt="">
                    <h5>Name: ${e.name} </h5>
                    <h4>Price: ${e.price}</h4>
                    <h5>Rating: ${e.rating}</h5>
                    <button>Add To Cart</button>
                </div>
        `
    })
    // console.log(allData);
    // console.log(menData);
    // console.log(womenData);
    // console.log(electronics);
    // console.log(kids);

    search.addEventListener("click", (e) => {
        searchcont.innerHTML = "";
        if (uip.value) {
            let searchProduct = allData.filter((e) => {
                if (e.name.toLowerCase().includes(uip.value.toLowerCase())) {
                    return e;
                }
            })

            searchProduct.map((e) => {
                searchcont.innerHTML += `
                <div id="${e.productId}">
                <img src=${e.productImageURLs[0]} alt="">
                <h5>Name: ${e.name} </h5>
                <h4>Price: ${e.price}</h4>
                <h5>Rating: ${e.rating}</h5>
                <button>Add To Cart</button>
                </div>
                  `
            })
        } else {
            searchcont.innerHTML = "result not found";
        }
    })

    //cart items
    let mainBtn = document.querySelector("main");
    let allBtn = mainBtn.querySelectorAll("button");
    console.log(allBtn);
    allBtn.forEach((btn) => {
        btn.addEventListener("click", () => {


            if (oneuser) {
                // remove dupliactes

                cartStore = cartStore.filter((e) => {
                    if (e.productId != btn.parentElement.id) {
                        return e;
                    }
                })
                

                //list selected product

                let oneProduct = allData.find((e) => {
                    if (e.productId == btn.parentElement.id) {
                        return e;
                    }
                })
                cartStore.push(oneProduct);

                //product count
                count.innerHTML = cartStore.length;
                oneuser.userCart=cartStore;
                //onuser updation
                localStorage.setItem("oneUser",JSON.stringify(oneuser));
                //signup data updation
                dataFromStore=dataFromStore.filter((e)=>{
                    if (e.mail!=oneuser.mail) {
                        return e;   
                    }
                })
                dataFromStore.push(oneuser);
                localStorage.setItem("data",JSON.stringify(dataFromStore));
            } else {
                alert("login first.");
                window.open("./login.html");
            }
            console.log(oneuser);
        });
    });
}
mainfunc();