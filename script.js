const listItem = [
    { id:1, name: 'Amin', family:'Saeedi Rad'},
    { id:2, name: 'Naser', family:'Shirazi'},
    { id:3, name: 'Ahmad', family:'Naseri'},
    { id:4, name: 'Yalda', family:'Mosavi'},
    { id:5, name: 'Saveh', family:'Kashani'},

    { id:6, name: 'Amir', family:'Keshvari'},
    { id:7, name: 'Mmd', family:'Abdollahzadeh'},
    { id:8, name: 'Qadir', family:'Sariyani'},
    { id:9, name: 'Babak', family:'Yazdi'},
    { id:10, name: 'Hasan', family:'Hosseini'},

    { id:11, name: 'Saeed', family:'Mohseni'},
    { id:12, name: 'Siamak', family:'Norozi'},
    { id:13, name: 'Mohsen', family:'Rezayi'},
    { id:14, name: 'Mehran', family:'Rezvani'},
    { id:15, name: 'Amir Hossein', family:'Gholami'},

    { id:16, name: 'Hossein', family:'Griban'},
    { id:17, name: 'Melika', family:'Mohamadi'},
    { id:18, name: 'Qasem', family:'Samiari'},
    { id:19, name: 'Fatemeh', family:'Talebi'},
    { id:20, name: 'Ehsan', family:'Tayebi'},

    { id:21, name: 'Zahra', family:'Torabi'},
    { id:22, name: 'Matin', family:'Salehi'},
]



let userListContainer = document.querySelector('.list')
let pageenumbersContainer = document.querySelector('.btns')
let chevronLeft = document.querySelector('.cl')
let chevronRight = document.querySelector('.cr')


let currentPage = 1
let rowsCount = 5
let pageCount = Math.ceil(listItem.length / rowsCount)
let betStartChevron = false

chevronRight.addEventListener('click',()=>{
    if(currentPage ==  pageCount){
        currentPage = 1
        displayUserList(listItem , userListContainer , rowsCount , currentPage)
        setupPagination(listItem , pageenumbersContainer , rowsCount)
    }else{
        currentPage++
        displayUserList(listItem , userListContainer , rowsCount , currentPage)
        setupPagination(listItem , pageenumbersContainer , rowsCount)
    } 
})

chevronLeft.addEventListener('click',()=>{
    if(currentPage < 2){
        currentPage = pageCount
        displayUserList(listItem , userListContainer , rowsCount , currentPage)
        setupPagination(listItem , pageenumbersContainer , rowsCount)
    }else{
        currentPage--
        displayUserList(listItem , userListContainer , rowsCount , currentPage)
        setupPagination(listItem , pageenumbersContainer , rowsCount)
    }
})

function displayUserList(allUsersArray, usersContainer, rowsCount, currentPage) {
    usersContainer.innerHTML = ''
    let endIndex = rowsCount * currentPage
    let startIndex = endIndex - rowsCount
    
    let paginatadUsers = allUsersArray.slice(startIndex, endIndex)
    
    paginatadUsers.forEach(user => {
        let userElem = document.createElement('li')
        userElem.innerHTML = user.name + ' ' + user.family
        userListContainer.append(userElem)
    })
}

function setupPagination(allUsersArray,pagesContainer,rowsCount) {
    pagesContainer.innerHTML = ''
    
    let pageCount = Math.ceil(allUsersArray.length / rowsCount)
    
    for (let i = 1; i < pageCount + 1; i++) {
        let btn = paginationButtonGenerator(i,allUsersArray)
        pagesContainer.append(btn)
    }
}

function paginationButtonGenerator (page,allUsersArray){
    let button = document.createElement('button')
    button.innerHTML = page
    if (page === currentPage) {
        button.classList.add('active')
    }
    
    button.addEventListener('click',()=>{
        currentPage = page
        displayUserList(allUsersArray , userListContainer , rowsCount , currentPage)
        
        let prevPage = document.querySelector('button.active')
        prevPage.classList.remove('active')
        
        button.classList.add('active')
    })
    return button
}

displayUserList(listItem , userListContainer , rowsCount , currentPage)
setupPagination(listItem , pageenumbersContainer , rowsCount)