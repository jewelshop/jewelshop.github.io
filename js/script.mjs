import { make, id, img } from './aspirascript.mjs'

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

        // categories

        // Products

    /**
     * Product Architecture:
     * Name of the Product
     * Thumbnail of the Product
     * Type of the Product
     * Ratings
     * Price
     */

    /*
    Type:
        Necklace
        Bag
        Bracelet
        Earings
        Rings    
     */

    /**
     * Preview:
     * Name of the product
     * Thumbnail of the Product
     * other thumbnails
     * type of the product
     * ratings
     * categories
     * price
     * 
     * buy
     * add to cart
     * add to favourite
     */
}

constructor()