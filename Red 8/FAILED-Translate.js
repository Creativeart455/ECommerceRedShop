
let pathName = window.location.pathname;
let whereToGo;

// console.log(document.URL)
// console.log(window.location.href)
// console.log(pathName)


const langTranslateDiv = document.getElementById("lang-translate");

langTranslateDiv.addEventListener('click',TranslatePage);

function TranslatePage() {
    let currentPage;
    if (pathName.search("index.htm") !== -1) {
        currentPage = 'index.htm'
    } else if (pathName.search("products.htm") !== -1) {
        currentPage = 'products.htm'
    } else if (pathName.search("SingleProduct.htm") !== -1) {
        currentPage = 'SingleProduct.htm'
    } else if (pathName.search("login.htm") !== -1) {
        currentPage = 'login.htm'
    } else if (pathName.search("Cart.html") !== -1) {
        currentPage = 'Cart.html'
    } 
    else if (pathName.search("خانه.html") !== -1) {
        currentPage = 'خانه.html'
    } else if (pathName.search("محصولات.htm") !== -1) {
        currentPage = 'محصولات.htm'
    } else if (pathName.search("تک محصول.htm") !== -1) {
        currentPage = 'تک محصول.htm'
    } else if (pathName.search("ورود.htm") !== -1) {
        currentPage = 'ورود.htm'
    } else if (pathName.search("سبد_خرید.html") !== -1) {
        currentPage = 'سبد_خرید.html'
    }

    if (currentPage) {

        switch (currentPage) {
            case "index.htm":
                whereToGo = "/Ecommerce/Red 7/خانه.html";
                break;
            case "products.htm":
                whereToGo = "/Ecommerce/Red 7/محصولات.htm";
                break;
            case "SingleProduct.htm":
                whereToGo = "/Ecommerce/Red 7/تک محصول.htm";
                break;
            case "login.htm":
                whereToGo = "/Ecommerce/Red 7/ورود.htm";
                break;
            case "Cart.html":
                whereToGo = "/Ecommerce/Red 7/سبد_خرید.html";
                break;
            case "خانه.html":
                whereToGo = "/Ecommerce/Red 8/index.htm";
                break;
            case "محصولات.htm":
                whereToGo = "/Ecommerce/Red 8/products.htm";
                break;
            case "تک محصول.htm":
                whereToGo = "/Ecommerce/Red 8/SingleProduct.htm";
                break;
            case "ورود.htm":
                whereToGo = "/Ecommerce/Red 8/login.htm";
                break;
            case "سبد_خرید.html":
                whereToGo = "/Ecommerce/Red 8/Cart.html";
                break;
        }

    }
    
    let url = "http://127.0.0.1:5500";

    let goTo = url +whereToGo;
    // console.log("whereToGo:::: "+goTo)

     window.location.href = goTo;
    
}
// function TranslatePage() {
//     let currentPage;
//     if (pathName += url.search("index.htm") !== -1) {
//         currentPage = 'index.htm'
//     } else if (pathName += url.search("products.htm") !== -1) {
//         currentPage = 'products.htm'
//     } else if (pathName += url.search("SingleProduct.htm") !== -1) {
//         currentPage = 'SingleProduct.htm'
//     } else if (pathName += url.search("login.htm") !== -1) {
//         currentPage = 'login.htm'
//     } else if (pathName += url.search("Cart.html") !== -1) {
//         currentPage = 'Cart.html'
//     } 
//     else if (pathName += url.search("خانه.html") !== -1) {
//         currentPage = 'خانه.html'
//     } else if (pathName += url.search("محصولات.htm") !== -1) {
//         currentPage = 'محصولات.htm'
//     } else if (pathName += url.search("تک محصول.htm") !== -1) {
//         currentPage = 'تک محصول.htm'
//     } else if (pathName += url.search("ورود.htm") !== -1) {
//         currentPage = 'ورود.htm'
//     } else if (pathName += url.search("سبد_خرید.html") !== -1) {
//         currentPage = 'سبد_خرید.html'
//     }

//     if (currentPage) {

//         switch (currentPage) {
//             case "index.htm":
//                 pathName += url = "/Ecommerce/Red 7/خانه.html";
//                 break;
//             case "products.htm":
//                 pathName += url = "/Ecommerce/Red 7/محصولات.htm";
//                 break;
//             case "SingleProduct.htm":
//                 pathName += url = "/Ecommerce/Red 7/تک محصول.htm";
//                 break;
//             case "login.htm":
//                 pathName += url = "/Ecommerce/Red 7/ورود.htm";
//                 break;
//             case "Cart.html":
//                 pathName += url = "/Ecommerce/Red 7/سبد_خرید.html";
//                 break;
//             case "خانه.html":
//                 pathName += url = "/Ecommerce/Red 8/index.htm";
//                 break;
//             case "محصولات.htm":
//                 pathName += url = "/Ecommerce/Red 8/products.htm";
//                 break;
//             case "تک محصول.htm":
//                 pathName += url = "/Ecommerce/Red 8/SingleProduct.htm";
//                 break;
//             case "ورود.htm":
//                 pathName += url = "/Ecommerce/Red 8/login.htm";
//                 break;
//             case "سبد_خرید.html":
//                 pathName += url = "/Ecommerce/Red 8/Cart.html";
//                 break;
//         }

//     }
    
//     let url = "http://";
//     pathName = url += pathName;
//      window.location.href = pathName;
//     window.location.replace(pathName += url);
//     // console.log("salam")
// }
