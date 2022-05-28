 //accept input
    // fetch data
    // append data

    let id
    let movies_div = document.getElementById("movies");

    async function searchMovies(q){
        // prepare url

        let url = `https://www.omdbapi.com/?s=${q}&apikey=9513ca31&`

        try{
            let res = await fetch(url);

            let data = await res.json();

            // console.log(data); 

            return data.Search;
        }
        catch(err){
            console.log(err);
        }

    }

    async function main(){
        let query = document.querySelector("#query").value;
        // console.log(query);

       let response =  searchMovies(query);  // who is returning promise

        // searchMovies is returning a promise,async 
                   //    function no matter returns a promise


        let data = await response;

        

        // console.log(data);
        appendMovies(data)
    }



function appendMovies(movies){

    movies_div.innerHTML = null;
    if(movies===undefined){
        return false;
    }

    movies.forEach(function(el,i){

        // console.log(movies);

       
        let p = document.createElement("p");
        p.setAttribute("class","title")
        p.innerText = el.Title;

        p.addEventListener("click",function(){
            addMovie(el,i);
        })

        movies_div.append(p);

      

    
    })
}

function addMovie(el,i){

    let container = document.querySelector("#container");

    container.innerHTML = null;

    let box = document.createElement("div");
    box.setAttribute("id","box")


    let img = document.createElement("img");
    img.src = `${el.Poster}`;

    box.append(img)

    let h3 = document.createElement("h3");
    h3.innerText = `Title: ${el.Title}`;

    let p1  = document.createElement("p");
    p1.innerText = `Type: ${el.Type}`

    let p2 = document.createElement("p");
    p2.innerText = `Year: ${el.Year}`

    let div = document.createElement("div");
    div.setAttribute("id","div");

    div.append(h3,p1,p2);

    container.append(box,div);

}





function debounceFunction(func,delay){

    if(id){
        clearTimeout(id);
    }


   id =  setTimeout(function(){


        func();

    },delay)

    
}
