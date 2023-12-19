function changeImage(fileName){
    let img=document.querySelector('#image1');
    img.setAttribute("src",fileName);
}
function changeImage1(fileName){
    let img=document.querySelector('#image2');
    img.setAttribute("src",fileName);
}
function changeImage2(fileName){
    let img=document.querySelector('#image3');
    img.setAttribute("src",fileName);
}
function changeImage3(fileName){
    let img=document.querySelector('#image4');
    img.setAttribute("src",fileName);
}
let isOpen = false;
function togglesidebae()
{
 const sidebar = document.getElementById('sidebar');
 if(isOpen)
 {
     sidebar.classList.add('sidebar-closed');
     isOpen = false;
 }
 else
 {
     sidebar.classList.remove('sidebar-closed');
     isOpen = true;
 }
}