const $pop = document.querySelector('#addBook')
const $show = document.querySelector('#formDiv')
const $submit = document.querySelector('#submit')
const $cancel = document.querySelector('#cancel')
const $vTitle = document.querySelector('#title')
const $vAuthor = document.querySelector('#author')
const $vNum = document.querySelector('#numOfPages')
const $radio = document.querySelector('input[name="status"]:checked')
const $books = document.querySelector('#bookTitles')

const $titleInput = document.querySelector('#title')
const $authorInput = document.querySelector('#author')
const $numberInput = document.querySelector('#numOfPages')
const error1 = document.querySelector('#title + span.error')
const error2 = document.querySelector('#author + span.error')
const error3 = document.querySelector('#numOfPages + span.error')

$pop.addEventListener('click' ,submit2)
$cancel.addEventListener('click' ,cancel)
$submit.addEventListener('click',submit)

$titleInput.addEventListener("input", (e) => {
    if($titleInput.validity.valid){
        error1.textContent = ""
        error1.className = "error"    
    }else{
        showError()
    }
})
$submit.addEventListener("submit",(e) => {
    if(!$titleInput.validity.valid){
        showError()
        e.preventDefault()
    }
})
function showError() {
    if ($titleInput.validity.valueMissing){
        error1.textContent = "Your Off The Limits"
    }else if($titleInput.validity.typeMisMatch){
        error.textContent = "That's about right"
    }else if($titleInput.validity.tooShort){
        error1.textContent = `The Title should be ${$titleInput.minLength}`
    }else if ($titleInput.validity.tooLong){
        error1.textContent = `The Title is On Its limit`
    }
    error1.className = "error active";
}

class Book {
    constructor(title,author,numOfPages,readStatus){
        this.title = title
        this.author = author
        this.numOfPages = numOfPages
        this.readStatus = readStatus
    }
    bookInfo() {
        // return $books.innerHTML = `<p>The book name is ${this.title} and is made by ${this.author} number of pages ${this.numOfPages} and you have ${this.readStatus} read it.</p>`
        let bookInformation = $books.innerHTML = `
        <table class="books"><tr><th>Title</th><th>Author</th><th>Number Of Pages</th></tr>
        <tr>
            <td>${this.title}</td>
            <td>${this.author}</td>
            <td>${this.numOfPages}</td>
        </tr>
            </table>`
    }
    populateItems() {
        localStorage.title = this.title
        localStorage.author = this.author
        localStorage.number = this.numOfPages
        // localStorage.setItem('Title',this.title)
        // localStorage.setItem('Author',this.numOfPages)
        // localStorage.setItem('Number Of Pages',this.title)
        // localStorage.setItem('Checked', this.readStatus)
    }
    setTitle(title){
        this.title = title;
    }
    setAuthor(author){
        this.author = author
    }
    setPagesCount(numOfPages){
        this.numOfPages = numOfPages
    }
    setRead(readStatus){
        this.readStatus = readStatus
    }
}
function submit(){
    Book = new Book(
        $vTitle.value
        ,$vAuthor.value
        ,$vNum.value,
        $radio.value
    )
    Book.bookInfo();
    Book.populateItems();
    submit2()
}
function submit2() {
    $show.classList.toggle('shownDiv')
    if ($show.hasAttribute('id','formDiv')) {
    $show.removeAttribute('id','formDiv')
    }else {
    $show.id = 'formDiv'
    }
    $vTitle.value = ''
    $vAuthor.value = ''
    $vNum.value = ''
}
function cancel() {
$show.classList.toggle('shownDiv')
$show.setAttribute('id' , 'formDiv')
}