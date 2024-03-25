function opennav(){
    let list = document.getElementsByClassName('sidenavbar')[0]
    list.style.display = 'flex'
}
function closenav(){
    let list = document.getElementsByClassName('sidenavbar')[0]
    list.style.display = 'none'
}
const navLinks = document.querySelectorAll('a');
const sections = document.querySelectorAll('section');
window.onscroll = () =>{
    sections.forEach((elem)=>{
        let top = window.scrollY;
        let offset = elem.offsetTop;
        let id = elem.getAttribute('id')
        if(top>=offset-280){
            navLinks.forEach((navi)=>{
                navi.classList.remove('active');
                let ahref = navi.getAttribute('href');
                ahref = ahref.replace('#','')
                if(ahref == id){
                    navi.classList.add('active');
                }
            })
        }
    })
}