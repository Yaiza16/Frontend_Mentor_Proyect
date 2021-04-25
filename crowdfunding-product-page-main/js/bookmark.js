export default function bookmarkButton(bookmarkContainer, bookmark){
    bookmarkContainer.addEventListener('click', () =>{
        if (bookmarkContainer.classList.contains('active')){
            bookmarkContainer.classList.remove('active');
            bookmark.innerHTML = "Bookmark";
        }else{
            bookmarkContainer.classList.add('active');
            bookmark.innerHTML = "Bookmarked"
        }
    })
}