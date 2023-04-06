import { make, id, img } from './aspirascript.mjs'

fetch('/../products/data.pl')
  .then(response => response.text())
  .then(text => {
    const lines = text.split('\n');
    constructor(lines)
  })
  .catch(error => console.error(error));

function constructor(lines){
    nav_bar()
    make("h1").from("").injectTo("body").content("Product List").create()
    list_box(lines)
    bottom_box()

    back_sys()
    edit_prod(lines)

    box_troy()
}

function nav_bar(){
    make("div").from("nav_bar").injectTo("body").content("").create()
        //make("input").from("search").injectTo("#nav_bar").content("").create()
        make("button").from("addProd").injectTo("#nav_bar").content("Add new Product").create()
}

// The List Box
function list_box(lines){
    make("ul").from("listbox").injectTo("body").content("").create()
    for(let i =  0; i < lines.length; i++){
        let j = lines[i].replace(/ /g, '_');
        make("li").from("listem" + j).injectTo("#listbox").content(j).create()
        make("button").from("addProd" + j).injectTo("#listem" + j).content("Edit").create()
    }
}

function bottom_box(){
    make("div").from("bottom_box").injectTo("body").content("").create()
        make("button").from("deploy").injectTo("#bottom_box").content("Upload Products").create()
}

function back_sys(){
    const addProd = document.getElementById("addProd")
    const deploy = document.getElementById("deploy")

    if(addProd){
        addProd.addEventListener('click', ()=>{
            alert("Add a new Product")
        })
    }

    if(deploy){
        deploy.addEventListener('click', ()=>{
            alert("Deploy the Product")
        })
    }
}

function edit_prod(lines){
    for(let i = 0; i<lines.length; i++){
        let j = lines[i].replace(/ /g, '_');
        const whichL = document.getElementById("addProd" + j)
        if(whichL){
            whichL.addEventListener('click', ()=>{
                console.log(j)
            })
        }        
    }
}

function box_troy(){
    make("div").from("boxtent").injectTo("body").content("").create()
        make("span").from("close").injectTo("#boxtent").content("close").create()
        id("close").AddClass("material-symbols-outlined")
}