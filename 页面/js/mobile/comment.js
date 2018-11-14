//自适应布局JS
(function(win, doc) {
    function change() {
        console.log(1111);
        doc.documentElement.style.fontSize = doc.documentElement.clientWidth / 320 * 20 + 'px';
    }

    change();
    win.addEventListener('resize', change, false);
})(window, document);