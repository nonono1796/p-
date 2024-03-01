const backbtn = document.getElementById('back-btn');

window.addEventListener('scroll',()=>{
    const scrollValue = document.scrollingElement.scrollTop;

    if(scrollValue>=300){
        backbtn.style.display='inline';
    }
    else{
        backbtn.style.display='none';
    }
});