import { make, id, img, checkFileExists } from './aspirascript.mjs'

// make("h1").from("greet").injectTo("body").content("Hello World!").create()



function constructor(){
    nav_bar()
    content()
}

function nav_bar(){
    make("div").from("nav_bar").injectTo("body").content("").create()
        make("div").from("brand").injectTo("#nav_bar").content("").create()
            img("assets/logo/simple.png").id("logo").alt("web logo").to("#brand")
            make("h2").from("logo_name").injectTo("#brand").content("Glam Trend").create()

        make("div").from("menus").injectTo("#nav_bar").content("").create()
            // Search Icon
            make("span").from("search_icon").injectTo("#menus").content("search").create()
            id("search_icon").AddClass("material-symbols-outlined")  

            // Cart
            make("span").from("carts").injectTo("#menus").content("shopping_cart").create()
            id("carts").AddClass("material-symbols-outlined")

            // Account
            make("span").from("account_menu").injectTo("#menus").content("account_circle").create()
            id("account_menu").AddClass("material-symbols-outlined")
}

function content(){
    make("div").from("content").injectTo("body").content("").create()
        // banner
        make("div").from("banner").injectTo("#content").content("").create()
            make("h1").from("greetings").injectTo("#banner").content("Get ready to shop anytime, anywhere").create()
            make("h2").from("greetings_2").injectTo("#banner").content("our online store is now open!").create()
            make("button").from("shop_now").injectTo("#banner").content("Shop Now!").create()
        // categories
        let categories = ["Ring", "Necklace", "Pendant", "Bag", "Earings", "Bracelets", "Keychain"];
        make("ul").from("categories").injectTo("#content").content("").create()
        for(let i = 0; i<categories.length; i++){
            make("li").from("item_" + categories[i]).injectTo("#categories").content(categories[i]).create()
        }
        // Products
        make("div").from("products").injectTo("#content").content("").create()
            // New Product
            make("h1").from("greet_prod").injectTo("#products").content("New Products").create()

        make("div").from("box").injectTo("#content").content("").create()
        // --> Inject the Products here; must be random 20     
        products()         
}

function products(){
    fetch('/../products/data.pl')
    .then(response => response.text())
    .then(text => {
      const lines = text.split('\n');
      all_inject(lines)
    })
    .catch(error => console.error(error));
}

function all_inject(temp){
    for(let i = 0; i < temp.length; i++){
        let datax = temp[i].trim()
        let j = 0;
        let bool = true
        let dir = "/../products/pdl/" + datax + "/" + j + ".jpg"


        
        //fetch("./../products/pdl/" + datax + "/" + j + ".jpg").then(console.log("exist")).catch(() => false)


    }
}

constructor()