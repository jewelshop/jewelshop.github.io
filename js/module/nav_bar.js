import { make, id, img} from "../aspirascript.mjs"

export function nav_module(){
    nav_bar()
}

function nav_bar(){
    make("div").from("nav_bar").injectTo("body").content("").create()
        make("div").from("nav_bar_mini").injectTo("#nav_bar").content("").create()
        make("div").from("brand").injectTo("#nav_bar_mini").content("").create()
            img("assets/logo/simple.png").id("logo").alt("web logo").to("#brand")
            make("h2").from("logo_name").injectTo("#brand").content("lam Trend").create()

        make("div").from("menus").injectTo("#nav_bar_mini").content("").create()
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