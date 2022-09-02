const loadAllData = () =>{
    const url = ` https://openapi.programming-hero.com/api/news/categories`
    fetch(url)
    .then(res => res.json())
    .then(data => displayAllData(data.data.news_category))
}
loadAllData()

const displayAllData = allNews =>{
   const place = document.getElementById('navbar-news')
    allNews.forEach(news =>{
        // console.log(news)
       const div = document.createElement('div')
       div.innerHTML = `
       <a onclick="showDetails('${news.category_id}')" class="nav-link" href="#">${news.category_name}</a>
       `   
       place.appendChild(div)
    })
    
}
 
// show details 
const showDetails = (id) =>{
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayDetails(data.data))
}
// display show detail
const displayDetails = categoryId =>{
    const placeCard = document.getElementById('card-container')
    placeCard.innerHTML = '';
    categoryId.forEach(id =>{
        console.log(id)
        const cardDiv = document.createElement('div')
        cardDiv.classList.add('col')
        cardDiv.innerHTML = `
        <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${id.thumbnail_url}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${id.title}</h5>
        <p class="card-text cards">${id.details}</p>
        <p class="card-text">
        <img class="img-fluid img" src="${id.author.img}" alt="">
        ${id.author.name ? id.author.name : "No found name"}
        
        </p>
      </div>
    </div>
  </div>
</div>
        `
        placeCard.appendChild(cardDiv)
    })
}
