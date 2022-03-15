/* ------- WORKS GALLERY ------*/

const grid = document.querySelector('.gallery_wrapper');
const gridItems = [...document.querySelectorAll('.grid-item')];
const gridRows = [...document.querySelectorAll('.row')];
const images = [...document.querySelectorAll('.img')];



images.forEach((img, idx) => {
    img.style.backgroundImage = `url(./img/${idx + 1}.jpg)`
    console.log("hey")
});

gridItems.forEach((item, idx) => {
    item.addEventListener('mouseover', (e) => {
        let isActive = e.target.classList.contains('active')
        console.log(e.target)
        for (let i = 0; i < gridItems.length; i++) {
            gridItems[i].classList.remove('active');
        }

        if (isActive) {
            gridRows[0].style.height = '100%';
            // gridRows[1].style.height = '50%';
            for (let i = 0; i < gridItems.length; i++) {
                gridItems[i].classList.remove('expand');

            }
            return;
        }


        gridItems[idx].classList.add('active');

        // if(window.innerWidth > 600){

        //     if(idx == 0 || idx == 2){
        //         setActive([0, 2]);
        //     }

        //     if(idx == 1 || idx == 3){
        //         setActive([1, 3]);
        //     }



        //     if(idx <=1){
        //         gridRows[0].style.height = '70%'
        //         gridRows[1].style.height = '30%'
        //     }else{
        //         gridRows[0].style.height = '30%'
        //         gridRows[1].style.height = '70%'
        //     }

        // }


    })
})

function setActive(idxArr) {
    for (let i = 0; i < gridItems.length; i++) {
        if (idxArr.includes(i)) {
            gridItems[i].classList.add('expand');
        } else {
            gridItems[i].classList.remove('expand');
        }
    }
};

// window.addEventListener('resize', () => {
//     for(let i = 0; i < gridItems.length; i++){
//         gridItems[i].classList.remove('active');
//         gridItems[i].classList.remove('expand');
//         gridRows[0].style.height = '50%'
//         gridRows[1].style.height = '50%'
//     }
// })

// setTimeout(() => {
//     heading.classList.add('show');
// }, 500);

// setTimeout(() => {
//     grid.style.opacity = 1
// }, 1000);



// TITLE ANIMATION ROTATION

// if (window.matchMedia("(min-width: 100px)").matches) {

//     document.addEventListener('scroll', reveal);
//     console.log(reveal);

//     var reveals = document.querySelectorAll('#work_title');
//     var revealtop = reveals[0].getBoundingClientRect().top;

//     console.log(revealtop, windowheight, revealtop);


//     function reveal() {

//         console.log(reveals);

//         for (var i = 0; i < reveals.length; i++) {

//             var windowheight = window.innerHeight;

//             var revealpoint = 200;


//             if (revealtop < windowheight - revealpoint) {

//                 reveals[i].classList.add('fall');
//                 reveals[i].classList.remove('straight');
//             } else {
//                 reveals[i].classList.remove('fall');
//                 // reveals[i].classList.add('straight');
//             }
//         }
//     }
// } else {
//     /* L'affichage est inférieur à 600px de large */
// }



// function myScript() {
//     var scrollX = window.pageXOffset || document.documentElement.scrollLeft;
//     var scrollY = window.pageYOffset || document.documentElement.scrollTop;

//     console.log('Scroll X:' + scrollX + ' Scroll Y:' + scrollY)
// }

// window.addEventListener("scroll", myScript);