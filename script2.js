const $pop = document.getElementById('addBook')
const $show = document.getElementById('formDiv')
const $submit = document.getElementById('submit')
const $cancel = document.getElementById('cancel')
const $vTitle = document.getElementById('title')
const $vAuthor = document.getElementById('author')
const $vNum = document.getElementById('numOfPages')
const $radio = document.querySelector('input[name="status"]:checked')
const $books = document.getElementById('$bookss')

$pop.addEventListener('click' ,submit2)
$cancel.addEventListener('click' ,$cancel)
$submit.addEventListener('click',submit)

class Book {
    constructor(title,author,numOfPages,readStatus){
        this.title = title
        this.author = author
        this.numOfPages = numOfPages
        this.readStatus = readStatus
    }
    bookInfo() {
        return $books.innerHTML = `<p>The book name is ${this.title} and is made by ${this.author} number of pages ${this.numOfPages} and you have ${this.readStatus} read it.</p>`
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
        ,$vNum.value
        ,$radio.value
    )
    Book.bookInfo();
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
$radio cancel() {
$show.classList.toggle('shownDiv')
$show.setAttribute('id' , 'formDiv')
}