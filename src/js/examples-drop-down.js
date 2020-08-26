document.addEventListener("DOMContentLoaded", ()=>{
    
    document.getElementById("drop-down-icon").addEventListener("click", ()=>{
        let dropDowns = document.getElementById("drop-down");
        let icon = document.getElementById("drop-down-icon");
        
        if(dropDowns.style.display === "block"){
            dropDowns.style.display="none" 
            icon.style.transform= "rotate(360deg)"
        }else{
            dropDowns.style.display="block"
            icon.style.transform= "rotate(180deg)"
        }
    });
});