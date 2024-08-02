class listBinging {
    constructor(element){
        this.ListElement= element;
        this.myList = [];
    }

    static createList(text, index){
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.textContent = "Delete";
        li.textContent = text;
        li.classList = "list-group-item";
        li.appendChild(btn);

        btn.addEventListener("click", () => {
            list1.delete(index);
        });

        return li;
    }


    update (){
        /*** Remove All List item ***/
        while(this.ListElement.firstChild){
            this.ListElement.removeChild(this.ListElement.firstChild);
        }

        /**** Add  list item****/
        this.myList.forEach((text, index) => {
            this.ListElement.appendChild(listBinging.createList(text, index));
        });
    }

    add(text){
        this.myList.push(text);
        this.update();
    }
    
    delete(index) {
        this.myList.splice(index, 1);
        this.update();
    }
}


const myList = document.querySelector("ul");
let list1 = new listBinging(myList);

document.querySelector(".addRow").onclick = function () {
    const listVal = document.querySelector(".input").value;
    list1.add(listVal);
    document.querySelector(".input").value = "";
};