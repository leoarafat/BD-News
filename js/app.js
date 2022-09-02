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
    categoryId.forEach(id =>{
        console.log(id)
    })
}
