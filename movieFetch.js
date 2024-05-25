// let searchText = prompt("Please enter Movie name");

let api = async () => {
    var searchText=document.getElementById("search").value;
    let imdbAPi = `http://www.omdbapi.com/?s=${searchText}&apikey=f056e2f7`;
    try {
        let res = await fetch(imdbAPi);
        let data = await res.json();
        console.log(data.Search);
        const html=data.Search.map(user=>{
            return (`<div id="pad"><div class="card" style="width: 12rem;">
            <img src="${user.Poster} class="card-img-top" alt="movie poster" "width="80"height="190" >
            <div class="card-body">
            <p class="card-title">${user.Title} </p>
            <p class="card-text">${user.Year}</p>
            <a href="${user.imdbId}" class="btn btn-secondary">Movie Details</a>
            </div>
            </div>
            </div>`)
        }) .join("")
         console.log(html);  
         document.getElementById("titleData").innerHTML=html
        
    }
    catch (err) {
        console.log(err.message);
    }
   
}


