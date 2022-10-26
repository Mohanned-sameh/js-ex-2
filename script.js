const popup = document.getElementById('addBook')
const showDiv = document.getElementById('formDiv')
const getValue = document.getElementById('reset')
const cancelBtn = document.getElementById('cancel')



popup.addEventListener('click' , function () {
    showDiv.classList.toggle('shownDiv')
    if (showDiv.hasAttribute('id','formDiv')) {
        showDiv.removeAttribute('id','formDiv')
    }else {
        showDiv.id = 'formDiv'
    }
})
cancelBtn.addEventListener('click' ,function () {
    showDiv.classList.toggle('shownDiv')
    showDiv.setAttribute('id' , 'formDiv')
})



function Book(title,author,numOfPages,readstatus) {
    this.title = title
    this.author = author
    this.numOfPages = numOfPages
    this.readstatus = readstatus
    this.sayData = function () {
        const bookTitle = document.getElementById('bookTitles')
        bookTitle.innerHTML = `The book name is "${title}", made by "${author}",It have "${numOfPages}" pages and you have ${readstatus} read it.`
    }
}
getValue.addEventListener('click',function () {
    const valueTitle = document.getElementById('title').value
    const  valueAuthor = document.getElementById('author').value
    const valueNum = document.getElementById('numOfPages').value
    const valueCheck = document.querySelector('input[name="status"]:checked').value
    let mylibrary = new Book(valueTitle,valueAuthor,valueNum,valueCheck)
    mylibrary.sayData();
    showDiv.classList.toggle('shownDiv')
    showDiv.setAttribute('id' , 'formDiv')
})
getValue.addEventListener('click', function () {
    const valueTitle = document.getElementById('title').value = ''
    const valueAuthor = document.getElementById('author').value = ''
    const valueNum = document.getElementById('numOfPages').value = ''
})