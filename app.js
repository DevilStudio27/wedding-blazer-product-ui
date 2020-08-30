window.onload = function () {
    const color_ele = document.querySelectorAll('.color-container .color');
    const image_ele = document.querySelector('.img-wrapper .pic');

    for (let i = 0; i < color_ele.length; i++) {
        let color_btn = color_ele[i];

        color_btn.addEventListener('click', function () {
            document.querySelector('.color-container .color.active').classList.remove('active');
            this.classList.add('active');

            image_ele.src = "images/" + this.dataset.color + ".png";
        });

    }
}