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
