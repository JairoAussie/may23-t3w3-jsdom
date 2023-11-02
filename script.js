let favoriteMedia = [
    "Modern Family", 
    "Hells Kitchen",
    "Arcane",
    "WW2 Documentary",
    "Friends"
];

function exampleHello(){
    console.log("Hello World");
};

function createListOfMedia(){
    let rootUlNode = document.querySelector("ul");
    //clean the list to avoid duplication
    rootUlNode.innerHTML = "";
    //console.log(rootUlNode);
    favoriteMedia.forEach(mediaItem => {
        //console.log(mediaItem);
        //Create an element but do not display it yet
        let newListItem = document.createElement("li");
        let removeItemButton = document.createElement("button");

        // newListItem.innerHTML
        // newListItem.innerText
        //Assign some data to the element
        newListItem.textContent = mediaItem;
        newListItem.id = mediaItem;
        removeItemButton.textContent = "Remove item"
        removeItemButton.onclick = (() => removeItemFromList(mediaItem));
        
        //Add the element to the visible page
        newListItem.appendChild(removeItemButton);
        rootUlNode.appendChild(newListItem);
        

    })
}

function removeItemFromList(targetItem){
    let targetItemNode = document.getElementById(targetItem);
    
    targetItemNode.parentNode.removeChild(targetItemNode);
}

function addItemToList(event){
    event.preventDefault();
    //console.log(event);
    console.log("we are trying to add an item to the list");
    let realInputField = document.getElementById("real-nameinput");
    //console.log(realInputField.value);
    let newItemName = realInputField.value;
    favoriteMedia.push(newItemName);
    
    createListOfMedia();

}

let realFormSubmitButton = document.getElementById("real-formsubmit");
console.log(realFormSubmitButton);
realFormSubmitButton.addEventListener("click", addItemToList);