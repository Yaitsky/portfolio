(function(){

    var data = {
        "0" : {
            "text":"Сайт школы <br> обучения йоге",
            "image":"url('assets/img/works_yoga.jpg')"
        },
        "1" : {
            "text":"Сайт школы онлайн <br> образования",
            "image":"url('assets/img/works_loftblog.png')"
        },
        "2" : {
            "text":"Сайт студии <br> дизайна интерьера",
            "image":"url('assets/img/works_trialog.jpg')"
        },
        "3" : {
            "text":"Сайт онлайн-курсов <br> Loftblog",
            "image":"url('assets/img/work-2.png')"
        }
    };

    var arrData = [];
    for(var i in data) {
        arrData[i] = data[i];
    }

    var count = arrData.length;
    var current = 0;
    var next = current + 1;
    var prev = count - 1;

    var setUp = function() {
        var buttonNext = document.querySelector(".works-slider__next");
        var buttonPrev = document.querySelector(".works-slider__prev");
        buttonNext.addEventListener("click", showNextSlide);
        buttonPrev.addEventListener("click", showPrevSlide);
        setSlides();
    };

    var descreaseValue = function(value){
        value = value - 1;
        if (value < 0) {
            value = count - 1;
        }
        return value;
    };

    var increaseValue = function(value){
        value = value + 1;
        if (value >= count) {
            value = 0;
        }
        return value;
    };

    var showNextSlide = function() {
        current = increaseValue(current);
        prev = descreaseValue(current);
        next = increaseValue(current);
        setSlides();
    };

    var showPrevSlide = function() {
        current = descreaseValue(current);
        prev = increaseValue(current);
        next = descreaseValue(current);
        setSlides();
    };

    var setSlides = function() {
        setSlideToPos(1, arrData[current]);
        setSlideToPos(2, arrData[next]);
        setSlideToPos(3, arrData[prev]);
    };

    var setSlideToPos = function(pos, slidedata){
        var text = document.querySelector(".works-slider__title");
        var imgMain = document.querySelector(".works-slider__logo");
        var imgNext = document.querySelector(".works-slider__next-image");
        var imgPrev = document.querySelector(".works-slider__prev-image");

        switch(pos) {
            case 1:
                text.innerHTML = slidedata.text;
                imgMain.style.backgroundImage = slidedata.image;
                break;
            case 2:
                imgNext.style.backgroundImage = slidedata.image;
                break;
            case 3:
                imgPrev.style.backgroundImage = slidedata.image;
                break;
        }
    };
    setUp();

})();