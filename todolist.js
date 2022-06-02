var inputText = document.getElementsByClassName("form-control")[1];
        let addButton = document.getElementById("button-addon2");
        addButton.addEventListener('click', addfunction);
        let elementToAdd = document.getElementsByClassName("jumbotron my-4")[0];

        function addfunction() {

            let elementToAdd = document.getElementsByClassName("jumbotron my-4")[0];
            if (elementToAdd.lastElementChild.className == "emptyMsg") {

                elementToAdd.lastElementChild.remove();
            }
            let InputValue = inputText.value;
            let createdElement = document.createElement("div");
            createdElement.className = "container d-flex border border-secondary rounded-lg  d-flex justify-content-between align-items-center mb-2";

            createdElement.innerHTML = `<h4  class=" flex-grow-1 my-2">${InputValue}</h4>
            <button id="remove" class="remove btn btn-danger my-2 mx-5" onclick=" removeChapter(this) ">Remove</button>
            <button id="edit" class="edit btn btn-warning my-2" onclick="editChapter(this)">Edit</button>`

            elementToAdd.appendChild(createdElement);

        }



        function removeChapter(e) {
            let arr = e.parentElement.parentElement;
            e.parentElement.remove();
            if (arr.children.length <= 2) {
                let addEmptyMsg = document.createElement("h3");
                addEmptyMsg.classList.add("emptyMsg");
                addEmptyMsg.textContent = "List is empty. please add some chapter name.";
                elementToAdd.appendChild(addEmptyMsg);
            }

        }

        function editChapter(e) {
           
            if (e.innerHTML == "Edit") {
                e.innerHTML = "Done";
                let createdElement = document.createElement("input");
                createdElement.className = "form-control"
                createdElement.setAttribute("type", "text");
                createdElement.value = e.parentElement.children[0].textContent;
                e.parentElement.replaceChild(createdElement,e.parentElement.children[0]);
                
            }

            else{
                e.innerHTML="Edit";
                let createdElement = document.createElement("h4");
                createdElement.className="flex-grow-1 my-2";
                createdElement.innerText=e.parentElement.children[0].value;

                e.parentElement.replaceChild(createdElement,e.parentElement.children[0]);
              
            }





        }
