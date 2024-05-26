// slider.js
document.addEventListener("DOMContentLoaded", function () {
    var slider = document.getElementById('slider');

    //add image URLs
    var images = [
//Here are some placeholder images for the slides in our presentation:
        'https://via.placeholder.com/800x400?text=Slide+1',
        'https://via.placeholder.com/800x400?text=Slide+2',
        'https://via.placeholder.com/800x400?text=Slide+3',
        'https://via.placeholder.com/800x400?text=Slide+4'
    ];

    var inner = slider.querySelector('.carousel-inner');
    images.forEach(function (image, index) {
        var item = document.createElement('div');
        item.classList.add('carousel-item');
        if (index === 0) {
            item.classList.add('active');
        }
        var img = document.createElement('img');
        img.src = image;
        img.classList.add('d-block', 'w-100');
        item.appendChild(img);
        inner.appendChild(item);
    });
});