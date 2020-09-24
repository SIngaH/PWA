document.querySelector("#copy-icon").addEventListener("click", ()=>{
    let faCopy = document.querySelector("#copy-icon");
    let alert = document.querySelector(".alert");
    let copyThis = document.querySelector("#copy-this");
      
   faCopy.classList.add("link-copied");

    setTimeout(() => {
      faCopy.classList.remove("link-copied")
      alert.setAttribute("id", "alert");
    }, 2000);

    setTimeout(() => {
      alert.removeAttribute("id");
    }, 5000);
    
    // Create an auxiliary hidden input
    var aux = document.createElement("input");
    // Get the text from the element passed into the input
    aux.setAttribute("value", copyThis.innerHTML);

    // Append the aux input to the body
    document.body.appendChild(aux);

    // Highlight the content
    aux.select();

    // Execute the copy command
    document.execCommand("copy");

    // Remove the input from the body
    document.body.removeChild(aux);
})