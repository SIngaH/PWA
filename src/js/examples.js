document.addEventListener("DOMContentLoaded", ()=>{
    //-----------------------------arrow fetch
    let index = 1;
    fetching(index);
    document.querySelector(".right-arrow").addEventListener("click", ()=>{
        if(index === 12){
            index = 1;
        }else{
            index ++;
        }
        fetching(index);
    });
    document.querySelector(".left-arrow").addEventListener("click", ()=>{
        if(index === 1){
            index = 12;
        }else{
            index --;
        }
        fetching(index);
    });   
    
    //-----------------------------galleri
    function fetching(index){
        fetch("https://singas.herokuapp.com/products/?sku=" + index, {
            "method": "GET"
        })
        .then (function(response){
            return response.json();
        })
        .then (function(result){
            result.forEach(doc => {
                if(doc.sku == index){
                    document.querySelector(".cheese-name").innerHTML = doc.name;
                    document.querySelector(".cheese-price").innerHTML = doc.price + "kr";
                    document.querySelector(".cheese-weight").innerHTML = doc.weight + "gr";
                    document.querySelector(".description").innerHTML = doc.description;
                    document.querySelector(".cheese-category").innerHTML = doc.categoryDK;
                }
            })
            
        })
        .catch(err => console.error(err));
    }
});