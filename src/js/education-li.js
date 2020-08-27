document.addEventListener("DOMContentLoaded", ()=>{
//-------------Index site, arrows tell what i can do
    const MoreInfoArray = [
        "Jeg har arbejdet med html hver dag fra januar 2019 til oktober 2020.", 
        "Jeg har arbejdet med css hver dag fra januar 2019 til oktober 2020. Jeg er blevet god til grids og flexbox.", 
        "Ejs har vi lært om siden vi startede på gulp. ejs er meget nyttigt sammen med gullp, fordi med gulp kan man ændre ejs filer til html. Det er godt fordi man kan lave componenter med ejs. Så man kan lave en ejs fil og bruge den mange steder uden at skrive koden igen.",
        "Scss lærte vi også sammen med gulp. Med scss kan man neste ting inden i hinanden som gør ting nemmere. Scss kan man også ændre til css med gulp.", 
        "Jeg har arbejdet med javascript siden februar 2019. Jeg har lavet en masse ting med Javascipt, alt fra et billede galleri til at styre et Philips hue lys.",
        "Gulp er en meget nyttig task manager. Jeg har mest brugt det til at ændre ejs til html, scss til css, javascript es6 til es5 og til at minimere billeder til web. Det kan man gøre med utoligt lidt kode og gulp går i gang da du gemmer filen eller tilføjer et billede.",
        "Jeg har arbejdet med APIer siden cs januar 2020. Jeg har lavet midt eget API som jeg bruger på eksempler siden. Jeg har også arbejdet med APIer fra The new york times, spotify, pokemon, star wars o.s.v.",
        "Json har jeg ikke arbejdet med men jeg kender det godt og syns de er nemt at gøre.",
        "font awesome kommer med i de fleste projekter, de er nemme at styre.",
        "animationer har jeg brugt meget fordi jeg syns det er sjovt at lege med.",
        "Jeg lærte også at manipulere SVGer, det syns jeg også er sjovt at leget med.",
        "Github har jeg brugt constant fra august 2019 til oktiber 2020. Jeg syns det er et genielt værktøj, men har en gang i mellem problemmer med. Men det er altid godt at vide at hvis noget går galt har man alt sin kode et sted.",
        "I skolen havde vi en wordpress uge og det var nok til at jeg kan sikkert lave en side og en tema uden problemer. Jeg har lavet en tema for mig selv men har ikke udgivet den.",
        "React har jeg arbejdet med i nogle projekter, jeg har stadigvæk lidt problemer med det, men jeg kunne godt få det til at virke med lidt hjælp.",
        "I skolen brugte vi kun to dage på at lære SEO, så det mangler at blive genfrisket.",
        "Lazy loading lært jeg sammen med animationer. Jeg kan godt gøre det men vil mangle at kigge på en gammel kode for at huske alting. Alle billeder på eksempler siden er lavet med lazy loading.",
        "Tailwind var meget nem at lære og bruge. Så selvom jeg har ikke brugt det meget så kunne jeg godt gøre det.",
        "Bootstrap var også nem at bruge men jeg har ikke brugt det meget. Jeg kunne stadigvæk godt bruge det.",
        "I skolen var der 2 uger hvor vi skulle programmere en philips hue lysepære. Jeg lavede et programm hvor lyset tændte sig selv da skolen startede, farven på lyset skiftede i pauserne. Lyset var også slukket da skoledagen var færdig(ikke samme tid hver dag) og lyset slukkede også i weekenderne.",
        "Jeg lærte også lidt om headless cms, det programm jeg arbejdede med var Gatsby sammen med contentful. Det syns jeg var svært og der var mange problemer der følgte Gasby.",
        "Jeg lærte lidt om php fordi vi lærte wordpress. Jeg kan ikke rigtig gøre meget med det, men det så ud til at være ret nemt at lære.",
        "Jeg lærte lidt om SQL, men jeg brugte det ikke meget, men da vi lærte det så var jeg overasked over hvor god jeg var til det."
    ];

    let educationGrid = document.querySelector("#education-grid");
    let muchExplainer =  document.querySelector(".much-explainer");
    let moderateExplainer = document.querySelector(".moderate-explainer");
    let littleExplainer = document.querySelector(".little-explainer");
    
    let Lier = document.querySelectorAll("#about-my-education li");
    let LiArray = Array.from(Lier);

    for(let i=0; i< LiArray.length; i++){
        LiArray[i];
    }

    let Imgs = document.querySelectorAll(".li-arrow");
    let ImgArray = Array.from(Imgs);

    for(let i=0; i< ImgArray.length; i++){
        ImgArray[i].addEventListener("click", arrow);
    }

    function arrow(e){
        ImgArray.forEach(Img => {
            Img.classList.remove("move-arrow");
            Img.style.width="10%";
            // educationGrid.style.gridTemplateRows ="0.4fr 1.5fr 0.4fr 1fr 0.4fr 0.4fr";
        });
        educationGrid.style.gridTemplateRows ="0.2fr 0.1fr 0.2fr 1fr 0.4fr 0.2fr";
        e.target.classList.add("move-arrow");
        ChangeText(e);

    }

    function ChangeText(e){     
        let Index = ImgArray.indexOf(e.target);
        if(Index < 13){
            muchExplainer.innerHTML = `<p>` + MoreInfoArray[Index] + `</p>`;
            moderateExplainer.innerHTML = "";
            littleExplainer.innerHTML = "";
        }else if(Index > 12 && Index < 19){
            moderateExplainer.innerHTML = `<p>` + MoreInfoArray[Index] + `</p>`;
            muchExplainer.innerHTML = "";
            littleExplainer.innerHTML = "";
        }else if(Index > 18){
            littleExplainer.innerHTML = `<p>` + MoreInfoArray[Index] + `</p>`;
            muchExplainer.innerHTML = "";
            moderateExplainer.innerHTML = "";
        }
    }
});