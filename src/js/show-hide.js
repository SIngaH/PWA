document.addEventListener("DOMContentLoaded", ()=>{
    //--------------------------------------------------------kun en åben ad gangen
    let sectionTheCompanions = document.querySelector(".section__the-companions");

    sectionTheCompanions.addEventListener("click", (e) =>{
        let detailsElements = document.querySelectorAll(".the-companions_details");

        detailsElements.forEach((companionDetail) =>{
            if(e.target.tagName === "SUMMARY"){
                if(companionDetail !== e.target.parentElement){
                    companionDetail.removeAttribute("open");
                    companionDetail.querySelector("SUMMARY").classList.remove("the-companions_summary_active")
                }
                e.target.classList.toggle("the-companions_summary_active");
            }
        })
    });
    
    //-----------------------------------------skift billede da man trykker på et persons navn 
    let companionArray = ["Rose_Tyler", "Captain_Jack_Harkness", "donna_noble", 
    "martha_jones", "amy-pond", "rory_williams", "river_song", "clara_oswald", 
    "nardole", "bill_potts", "graham_obrien", "ryan_sinclair", "Yasmin_Khan"];

    let companionLi = document.querySelectorAll(".the-companions_summary");
    let companionLiArray = Array.from(companionLi);
    let i;

    for(i = 0; i < companionLiArray.length; i++){
        companionLiArray[i].addEventListener("click", skiftBillede);
    }
    
    function skiftBillede(e){
        let nytBillede = "assets/images/companions/" + companionArray[companionLiArray.indexOf(e.target)] + ".jpg";
        document.querySelector(".the_companions-img").setAttribute("src", nytBillede);
        let nytBilledeAlt = ["Rose Tyler", "Captain Jack Harkness", "Donna Noble", 
        "Martha Jones", "Amy Pond", "Rory Williams", "River Song", "Clara Oswald", 
        "Nardole", "Bill Potts", "Graham Obrien", "Ryan Sinclair", "Yasmin Khan"]
        
        document.querySelector(".the_companions-img").setAttribute("alt", nytBilledeAlt[companionLiArray.indexOf(e.target)]); 
    }    
});   