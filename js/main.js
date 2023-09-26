let elList = document.querySelector('.list')
fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => mapper(data))
function mapper(data) {
    data.forEach((item) => {
        var newLi = document.createElement('li')
        newLi.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/726b2d20509971.562ec74e76577.jpg" class="card-img-top" alt="...">
        <h5 class="card-title a1">${item.id}</h5>
        <p class="card-text a2">${item.username}</p>
        <p class="card-text a3">${item.email}</p>
        <p class="card-text a4">${item.city}</p>
        <p class="card-text a5">${item.phone}</p>
        
      </div>
    </div>`
        elList.appendChild(newLi)


    })
}