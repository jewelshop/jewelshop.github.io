export function make(elementType) {
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
    };
  }
  
  export function id(name) {
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
    };
  }
  
  export function img(src) {
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
    };
  }