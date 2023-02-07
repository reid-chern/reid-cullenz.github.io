const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/test-image.jpg") {
        myImage.setAttribute("src", "images/test-image2.jpg");
    } else {
        myImage.setAttribute("src", "images/test-image.jpg");
    }
};

const myButton = document.querySelector("button");
const myHeader = document.querySelector("h1");

if (!localStorage.getItem("name")){
    setUsername();
}else{
    const username = localStorage.getItem("name");
    myHeader.textContent =  `welcome, ${username}!`;
}

function setUsername(){
    const username = prompt("pls input your name");
    if (!username) {
        setUsername();
    }else{
        localStorage.setItem("name", username);
        myHeader.textContent = `welcome, ${username}!`;
    }
}

myButton.onclick = ()=>{
    setUsername();
}