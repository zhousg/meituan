var initNav = function () {
    /*背景*/
    const colors = ['#fd9d21', '#ff6767', '#8a90fa', '#fed030', '#4dc6ee', '#ff80c2'];
    var iconList = document.querySelectorAll('.iconfont');
    for (var i = 0; i < iconList.length; i++) {
        var obj = iconList[i];
        obj.style.background = colors[Math.floor(Math.random() * colors.length)];
    }
    /*滑动*/
    var wrapper = document.querySelector('.wrapper');
    var item = wrapper.querySelector('.item');
    var width = item.offsetWidth;
    var currentX = 0;
    var max = 0;
    var min = -width;

    var startX = 0;
    var distanceX = 0;
    wrapper.addEventListener('touchstart', function (e) {
        startX = e.touches[0].clientX;
    });
    wrapper.addEventListener('touchmove', function (e) {
        e.preventDefault();
        var moveX = e.touches[0].clientX;
        distanceX = moveX - startX;
        if ((currentX + distanceX) <= max && (currentX + distanceX) >= min) {
            wrapper.style.transition = 'none';
            wrapper.style.transform = 'webkitTranslateX(' + (currentX + distanceX) + 'px)';
            wrapper.style.transform = 'translateX(' + (currentX + distanceX) + 'px)';
        }
    });
    wrapper.addEventListener('touchend', function (e) {
        if ((currentX + distanceX) > max) {
            currentX = max;
        } else if ((currentX + distanceX) < min) {
            currentX = min;
        } else {
            document.querySelector('.indicator li.now').classList.remove('now');
            if(distanceX > 0){
                currentX = max;
                document.querySelectorAll('.indicator li')[0].classList.add('now');
            }else {
                currentX = min;
                document.querySelectorAll('.indicator li')[1].classList.add('now');
            }
            wrapper.style.transition = 'all 0.4s';
            wrapper.style.transform = 'webkitTranslateX(' + currentX + 'px)';
            wrapper.style.transform = 'translateX(' + currentX + 'px)';
        }
    });
}
initNav();