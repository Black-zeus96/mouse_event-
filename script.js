document.querySelector('body').addEventListener('mousemove', function (dets) {
    function movemouse (){
        document.querySelector("#bat").style.top = `${dets.clientY}px`;
        document.querySelector("#bat").style.left = `${dets.clientX}px`;
    }
    window.requestAnimationFrame(movemouse);
});

document.querySelector('.wrapper').addEventListener('mousemove', function(e) {
    var wrapper = document.querySelector('.wrapper');
    var rect = wrapper.getBoundingClientRect();
    wrapper.style.setProperty('--x', (e.clientX - rect.left) + 'px');
    wrapper.style.setProperty('--y', (e.clientY - rect.top) + 'px');
});