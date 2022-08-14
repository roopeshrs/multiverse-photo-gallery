const gallery = document.querySelectorAll('.gallery .gallery-item');
const popup = document.querySelector('.popup-container');
const popupBox = document.querySelector('.popup-box');
const popupImage = document.querySelector('.popup-box img.popup-image');
const popupTitle = document.querySelector('.popup-box .popup-details h2');
const popupDescription = document.querySelector('.popup-box .popup-details p');
const popupClose = document.querySelector('.popup-close');
const prevBtn = document.querySelector('.prev-slide');
const nextBtn = document.querySelector('.next-slide');
const spinner = document.querySelector('.spinner-wrapper');

window.onload = () => {
    for(let i=0; i< gallery.length; i++){
        let newIndex = i;
        gallery[i].onclick = () => {
            prevBtn.style.opacity = "0";
            nextBtn.style.opacity = "0";
            popupClose.style.opacity = "0";
            const popupContent = () => {
                spinner.classList.add("show-spinner");
                setTimeout(()=>{
                    spinner.classList.remove("show-spinner");
                    prevBtn.style.opacity = "1";
                    nextBtn.style.opacity = "1";
                    popupClose.style.opacity = "1";
                    popupImage.src = gallery[newIndex].querySelector('img').src;
                    popupTitle.textContent = gallery[newIndex].querySelector('h2').textContent;
                    popupDescription.textContent = gallery[newIndex].querySelector('p').textContent;
                }, 1000)
            }
            popupContent();
            popup.classList.add("show-popup");

            popupClose.onclick = () => {
                popup.classList.remove("show-popup");
                popupImage.src = "";
                popupTitle.textContent = "";
                popupDescription.textContent = "";
            }

            prevBtn.onclick = () => {
                if(newIndex == 0){
                    newIndex = gallery.length-1;
                    popupContent();
                }else{
                    newIndex--;
                    popupContent();
                }
            }

            nextBtn.onclick = () => {
                console.log(newIndex);
                if(newIndex == gallery.length-1){
                    newIndex=0;
                    popupContent();
                }else{
                    newIndex++;
                    popupContent();
                }
            }
        }
    }
}
