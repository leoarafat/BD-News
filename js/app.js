const loadAllData = async() =>{
    const url = ` https://openapi.programming-hero.com/api/news/categories`
    try{
      const res = await fetch(url)
      const data = await res.json()
      displayAllData(data.data.news_category)
    }
    catch (error){
      alert('Something Went Wrong')
    }
   
}
loadAllData()

const displayAllData = allNews =>{
  
   const place = document.getElementById('navbar-news')
    allNews.forEach(news =>{
     
       const div = document.createElement('div')
       div.innerHTML = `
       <a id="show-all-news-length" onclick="showDetails('${news.category_id}')" class="nav-link" href="#">${news.category_name}</a>
       `   
       place.appendChild(div)
    })
    
}
 
// show details 
const showDetails = async(id) =>{
  loadSpinner(true)
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`
    try{
      const res = await fetch(url)
      const data = await res.json()
      displayDetails(data.data)
    }
    catch (error){
      alert('Something wrong')
    }
   }
// display show detail
const displayDetails = categoryId =>{
  const showNews = document.getElementById('show-all-news').innerText = categoryId.length? categoryId.length : 'No news'
    const placeCard = document.getElementById('card-container')
    placeCard.innerHTML = '';
    categoryId.forEach(id =>{
        // console.log(id)
        const cardDiv = document.createElement('div')
        cardDiv.classList.add('col')
        cardDiv.innerHTML = `
        <div class="card mb-3 onclick="detailModal('${id._id}')" data-bs-toggle="modal"data-bs-target="#exampleModal"" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${id.thumbnail_url}" class="img-fluid rounded-start" alt="">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${id.title}</h5>
        <p class="card-text cards">${id.details}</p>
        <div class="d-flex justify-content-around align-items-center">
       <div> <img class="img-fluid img" src="${id.author.img}" alt="">  ${id.author.name ? id.author.name : "No found name"}</div>
       <div class=""> 
      <p>  <p/>
      <p> <i class="fa-solid fa-eye"></i> ${id.total_view ? id.total_view : 'No data available'}</p>
       </div>
       <a onclick="detailModal('${id._id}')" data-bs-toggle="modal"data-bs-target="#exampleModal">  <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
    </div>
  </div>
</div>
        `
        placeCard.appendChild(cardDiv)
    })
    loadSpinner(false)
}

const detailModal = async (dataId) =>{
    const url = `https://openapi.programming-hero.com/api/news/${dataId}`
    try{
      const res = await fetch(url)
      const data = await res.json()
      displayModal(data.data)
    }
    catch (error){
      alert('Something went wrong')
    }
    
    
}
const displayModal = id =>{
   
    id.forEach(newsId =>{
      console.log(newsId)
      const modalTitle = document.getElementById('exampleModalLabel')
      modalTitle.innerText = newsId.title;
      const modalBody = document.getElementById('modal-body')
      modalBody.innerHTML = ` 
      <img class="img" src="${newsId.author.img}" alt="">
      <P>${newsId.author.name ? newsId.author.name : 'No found name'} </br> ${newsId.author.published_date}
      <hr>
      <p><i class="fa-solid fa-eye"></i> ${newsId.total_view ? newsId.total_view : 'No data available'} </p>
      <p>${newsId.title}</p>
      <img class="img-fluid" src="${newsId.thumbnail_url}" alt="">
      `
    })  
}

//loading spinner
const loadSpinner = isLoading =>{
  const loader = document.getElementById('loader')
  if(isLoading){
    loader.classList.remove('d-none')
  }
  else{
    loader.classList.add('d-none')
  }
}
