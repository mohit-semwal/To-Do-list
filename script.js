let input = document.querySelector("#text-input");
let addBtn = document.querySelector("#btn");
let Clearall = document.querySelector("#Clearall");
let mainDiv = document.querySelector("#main-div");
let count = document.querySelector("#counter");



addBtn.addEventListener("click", () => {

    if (input.value != "") {
        let myList = document.createElement("div")
        myList.classList.add("mylist")

        let para = document.createElement("p");
        let DeleteBtn = document.createElement("button");
        let updateBtn = document.createElement("button");
        mainDiv.appendChild(myList)
        myList.appendChild(para);
        myList.appendChild(DeleteBtn);
        myList.appendChild(updateBtn);
        // let counter=document.querySelectorAll(".mylist")

        DeleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
        updateBtn.innerHTML = 'Edit';
        para.style.fontSize = "1.2rem"
        myList.style.display = "flex"

        myList.style.position = "relative"
        DeleteBtn.style.position = "Absolute"
        DeleteBtn.style.right = "0"
        DeleteBtn.style.top = "0"
        DeleteBtn.style.color = "White"
        DeleteBtn.style.backgroundColor = "red"
        DeleteBtn.style.height = "100%"
        DeleteBtn.style.width = "17%"
        DeleteBtn.style.border = "none"

        updateBtn.style.position = "Absolute"
        updateBtn.style.right = "17%"
        updateBtn.style.top = "0"
        updateBtn.style.color = "orange   "
        updateBtn.style.backgroundColor = " blue"
        updateBtn.style.height = "100%"
        updateBtn.style.width = "17%"
        updateBtn.style.border = "none"

        myList.style.backgroundColor = "#33edea"
        myList.style.padding = "0.5rem"
        myList.style.width = "51.4vh"
        myList.style.marginBottom = "0.5rem"
        para.textContent = input.value;
        input.value = "";

        DeleteBtn.addEventListener("click", () => {
            myList.remove()
         counting()
        })

        updateBtn.addEventListener("click", () => {

            if (para.isContentEditable) {
                para.contentEditable = "false";

                updateBtn.innerHTML = "Edit";

            } else {

                para.contentEditable = "true";
                para.focus()

                updateBtn.innerHTML = "Save";
             }
        })


        Clearall.addEventListener("click", () => {
            myList.remove()
            counting()
            
        })
        
        function counting(){

            let list= document.querySelectorAll(".mylist")
            count.textContent=list.length
        }
      counting()
    }
    
    // count.textContent = myList.length

})


