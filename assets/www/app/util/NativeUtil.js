NativeUtil = {

    touchSupported: function() {
        return "ontouchstart" in window;
    },

    isTablet: function() {

        var win = $(window);
        var w = win.width();
        var h = win.height();
        var _w = Math.min( w,h );
        var _h = Math.max( w,h );

        return (_w > 640 && _h > 960 );
    }
}