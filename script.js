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
    
    //targetItemNode.parentNode.removeChild(targetItemNode);
    favoriteMedia = favoriteMedia.filter(item => item !== targetItem);
    //Regenerate the visuals
    createListOfMedia();
}

function addItemToList(event, targetId){
    event.preventDefault();
    //console.log(event);
    console.log("we are trying to add an item to the list");
    let inputField = document.getElementById(targetId);
    //console.log(realInputField.value);
    let newItemName = inputField.value;
    if (newItemName){
        favoriteMedia.push(newItemName);
        createListOfMedia();
    } else {
        console.warn("Attempted to add an item to the list");
        console.error("Attempted to add an item to the list");
        alert("Please introduce a value");
    }
   

}

let realFormSubmitButton = document.getElementById("real-formsubmit");
// console.log(realFormSubmitButton);
// realFormSubmitButton.addEventListener("click", (event)=> {addItemToList(event, "real-nameinput")});

// helper text id: real-texthint
function inputHelperOnFocus(targetId){
    let helperElement = document.getElementById(targetId);
    console.log("showing text hint now");
    helperElement.style.display = "inherit";
}

function inputHelperOnBlur(targetId){
    let helperElement = document.getElementById(targetId);
    console.log("hiding text hint now");
    helperElement.style.display = "none";
}

let realFormTextInput = document.getElementById("real-nameinput");
realFormTextInput.addEventListener("focusin", () => {inputHelperOnFocus("real-texthint")});
realFormTextInput.addEventListener("focusout",() => {inputHelperOnBlur("real-texthint")});
inputHelperOnBlur("real-texthint");

let pseudoFormTextInput = document.getElementById("pseudo-nameinput");
pseudoFormTextInput.addEventListener("focusin", () => {inputHelperOnFocus("pseudo-texthint")});
pseudoFormTextInput.addEventListener("focusout",() => {inputHelperOnBlur("pseudo-texthint")});
inputHelperOnBlur("pseudo-texthint");

let pseudoFormSubmitButton = document.getElementById("pseudo-formsubmit");
pseudoFormSubmitButton.addEventListener("click", (event)=> {addItemToList(event, "pseudo-nameinput")});