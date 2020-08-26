document.addEventListener("DOMContentLoaded", ()=>{

    let index = 0;

    let imgArray = [
        "assets/images/gallery/doctor_ce.jpg", 
        "assets/images/gallery/doctor_dt.jpg", 
        "assets/images/gallery/doctor_ms.jpg", 
        "assets/images/gallery/doctor_pc.jpg", 
        "assets/images/gallery/doctor_jw.jpg"
    ];

    let nameArray = [
        "Christopher Eccleston", 
        "David Tennant", 
        "Matt Smith", 
        "Peter Capaldi", 
        "Jodie Whittaker"
    ];
    
    let textArray = [
        "Ninth Doctor: Christopher Eccleston (2005). The sole survivor of the Last Great Time War, scarred by the terrible things he’d seen and done, the Ninth Doctor was an intense and emotional incarnation.",
        "Tenth Doctor: David Tennant (2005–2010). Waking on Christmas Day in his new form, the tenth Doctor fought the Sycorax high above London.", 
        "Eleventh Doctor: Matt Smith (2010–2013). Born, ´still cooking´, into a crashing TARDIS, the Eleventh Doctor hurtled into the life of Amy Pond.", 
        "Twelfth Doctor: Peter Capaldi (2013-2017). Peter first appeared as the Doctor briefly in the 50th anniversary special episode, but played minor characters in previous series.",     
        "Thirteenth Doctor: Jodie Whittaker (2017-present). She's the first female to play the role and the first words she said when she realised she'd regenerated as a woman were 'Aw, Brilliant!'", 
    ]; 
    
    let textArray2 = [
        "He took Rose Tyler to see the end of the world, inspired Charles Dickens and showed that for once, everybody could live.",
        "Travelling with Rose and Mickey he battled Cybermen, werewolves and possibly even the Devil itself. David was voted the nation's favourite Doctor.", 
        "The Doctor and Amy battled new paradigm Daleks in World War Two, Weeping Angels by the thousand and the depression in Vincent van Gogh’s mind.", 
        "Peter's Doctor fought Daleks and Davros, Cybermen, Zygons, the Veil and the Time Lords.", 
        "When the new Doctor’s hood slowly dropped and Whittaker was revealed as the Time Lord on July 16, 2017, the world of sci-fi stood still for a moment, and fandom went a bit berserk.", 
    ];

    let rightArrow = document.querySelector(".right_arrow");
    let leftArrow = document.querySelector(".left_arrow");
    
    let pChange = document.querySelector(".gallery_p_change");
    let p2Change = document.querySelector(".gallery_p2_change");
    let imgChange = document.querySelector(".gallery_img_change");
    let h1Change = document.querySelector(".gallery_h1_change");

    rightArrow.addEventListener("click", ()=>{
        index ++;
        if(index > imgArray.length-1){
            index = 0;
        }
        changeDoctor();
    });

    leftArrow.addEventListener("click", ()=>{
        index --;
        if(index < 0){
            index = imgArray.length-1;
        }
        changeDoctor();
    });

    function changeDoctor(e){
        pChange.innerHTML = textArray[index];
        p2Change.innerHTML = textArray2[index];
        h1Change.innerHTML = nameArray[index];
        imgChange.setAttribute("src", imgArray[index]);   
        imgChange.setAttribute("alt", nameArray[index]);    
    }
});