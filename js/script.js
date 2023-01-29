//Lazy Script
function make(elementType) {
    return {
      from: function(id) {
        this.id = id;
        return this;
      },
      injectTo: function(parentElement) {
        this.parentElement = parentElement;
        return this;
      },
      content: function(content) {
        this.content = content;
        return this;
      },
      create: function() {
        let newElement = document.createElement(elementType);
        newElement.id = this.id;
        newElement.innerHTML = this.content;
        let parent = document.querySelector(this.parentElement);
        if (!parent) {
            console.log("Parent element not found!");
            return;
        }
        parent.appendChild(newElement);
      }
    }
}
function id(name) {
    let element = document.getElementById(name);
    return {
      AddClass: function(className) {
        element.classList.add(className);
      },
      RemoveClass: function(className) {
        element.classList.remove(className);
      },
      ToggleClass: function(className) {
        element.classList.toggle(className);
      }
    }
}
function img(src) {
    return {
        id: function(id) {
            this.id = id;
            return this;
        },
        alt: function(alt) {
            this.alt = alt;
            return this;
        },
        to: function(parentElement) {
            let newImg = document.createElement("img");
            newImg.src = src;
            newImg.id = this.id;
            newImg.alt = this.alt;
            let parent = document.querySelector(parentElement);
            if (!parent) {
                console.log("Parent element not found!");
                return;
            }
            parent.appendChild(newImg);
        }
    }
}

class uni_vars{
    shopname = "Shop Name"
    pages = ["Home", "Carts", "Account"]
    book = this.pages.length
    title = document.title
}
let value = new uni_vars()
constructor()
function constructor(){
    interface()
    navBar()
    navFunction()
    notch()
    notchFunction()
}



function interface(){    
    make("section").from("header").injectTo("body").content("").create()

    //Layer A000
    make("div").from("layerA000").injectTo("#header").content("").create()
    img("assets/img/logo.png").alt("Nothing").id("logo").to("#layerA000")
    make("h3").from("headText").injectTo("#layerA000").content(value.shopname).create()

    //Layer Nav
    make("div").from("Nav").injectTo("#header").content("").create()

    make("h3").from("alpha").injectTo("body").content("Under Development!").create()
}

function navBar(){   
    make("ul").from("navlist").injectTo("#Nav").content("").create()
    for(i = 0; i < value.book; i++){
        make("li").from(value.pages[i]).injectTo("#navlist").content(value.pages[i]).create()
        id(value.pages[i]).AddClass("navItem")
        if (value.pages[i] == value.title) {
            id(value.pages[i]).AddClass("pageLight")
        }
    }
}

function navFunction(){
    for(i = 0; i < value.book; i++){
        let ring = document.getElementById(value.pages[i])    
        if (ring) {
            (function(i) {
                ring.addEventListener('click', () =>{
                    document.title = value.pages[i]
                    for(b = 0; b < value.book; b++){
                        if (value.pages[b] == value.pages[i]) {
                            id(value.pages[b]).ToggleClass("pageLight")    
                        }
                        else{
                            id(value.pages[b]).RemoveClass("pageLight")    
                        }
                        const nav = document.getElementById("navlist");
                        if (nav.style.right === "0px") {
                            nav.style.right = "-1000px";
                            
                          } else {
                            nav.style.right = "0px";                        
                          } 
                          id("touch").ToggleClass("change")   
                        
                    }                    
                });
            })(i);
        }
    }
    
}

function notch(){
    make("div").from("touch").injectTo("#Nav").content("").create()
    id("touch").AddClass("container")
    for(a = 0; a < 3; a++){
        make("div").from("bar" + a).injectTo("#touch").content("").create()
        id("bar" + a).AddClass("bar" + (a+1))        
    }
    
}

function notchFunction(){
    let notch = document.getElementById("touch")
    if (notch) {
        notch.addEventListener('click', ()=>{
            id("touch").ToggleClass("change")   
            const nav = document.getElementById("navlist");
            if (nav.style.right === "0px") {
                nav.style.right = "-1000px";
                
              } else {
                nav.style.right = "0px";                        
              } 
        })
         
    }
    
}