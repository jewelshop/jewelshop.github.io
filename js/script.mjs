import { make, id, img} from './aspirascript.mjs'
import { nav_module } from './module/nav_bar.js'

function constructor(){
    nav_module()
    content()
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
      // all_inject(lines)
      inject_some(lines)
    })
    .catch(error => console.error(error));
}

//--> For Preview
function inject_some(temp){
    for(let i = 0; i < temp.length; i++){
        let datax = temp[i].trim();
        let dir = "/../products/pdl/" + datax + "/count.pl";
        let ls = "/../products/pdl/" + datax  + "/0.jpg";
    
        fetch(dir)
        .then(response => response.text())
        .then(text => {
            let lines = text.trim();
            make("div").from("item" + i).injectTo("#box").content("").create()
            id("item" + i).AddClass("item")
            img(ls).id("").alt("product").to("#item" + i)

            // Name of the Product
            make("h2").from("").injectTo("#item" + i).content("Name of the Product").create()
            // Ratings
            make("span").from("star" + i).injectTo("#item" + i).content("star").create()
            id("star" + i).AddClass("material-symbols-outlined")
            make("span").from("rate" + i).injectTo("#item" + i).content("5.0 Ratings").create()
            // Price
            make("h3").from("price" + i).injectTo("#item" + i).content("$ 1,000.00").create()
        })
        .catch(error => console.error(error));        
    }
}

function all_inject(temp){
    for(let i = 0; i < temp.length; i++){
        let datax = temp[i].trim();
        let dir = "/../products/pdl/" + datax + "/count.pl";
        let ls = "/../products/pdl/" + datax;
    
        fetch(dir)
        .then(response => response.text())
        .then(text => {
            let lines = text.trim();
            
            for(let j = 0; j < parseInt(lines); j++){
                
                
                
                //console.log(ls + "/" + j + ".jpg");
                make("div").from("item" + j).injectTo("#box").content("").create()
                id("item" + j).AddClass("item")
                img(ls + "/" + j + ".jpg").id("").alt("product").to("#item" + j)
                

            }
        })
        .catch(error => console.error(error));        
    }
    
}

constructor()