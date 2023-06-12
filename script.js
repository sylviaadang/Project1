let images = ['photos/jamppong.jpg', 'photos/pho.webp','photos/food2.jpeg', 'photos/sushi.jpeg'];

// let index = 0;
const imgElement = document.getElementById('#mainPhoto');

setInterval(function(){
    let random = Math.floor(Math.random() * 4);
    mainPhoto.src = images[random];
}, 2500);

// function change() {
//     imgElement.src = images[index];
//     index > 1 ? index = 0 : index++;
// }

// window.onload = function () {
//     setInterval(change, 1500)
// }

    let reviewContainers = [...document.querySelectorAll('.review-container')];
    let nextBtn = [...document.querySelectorAll('.next-btn')];
    let prevBtn = [...document.querySelectorAll('.prev-btn')];

    reviewContainers.forEach((item, i) => {
        let containerDimensions = item.getBoundingClientRect();
        let containerWidth = containerDimensions.width;

        nextBtn[i].addEventListener('click', () => {
            item.scrollLeft += containerWidth;
        })

        prevBtn[i].addEventListener('click', () => {
            item.scrollLeft -= containerWidth;
        })
    })
