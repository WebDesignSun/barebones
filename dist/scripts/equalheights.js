!function (a) {
    a.fn.equalHeights = function () {
        let b = 0, c = a(this);
        return c.each(function () {
            let c = a(this).innerHeight();
            c > b && (b = c)
        }), c.css("height", b)
    }, a("[data-equal]").each(function () {
        let b = a(this), c = b.data("equal");
        b.find(c).equalHeights()
    })
}(jQuery);