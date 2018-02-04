angular
    .module("hrmAPP")
    .service('service_jquery', function () {
        this.adminHome = () => {
            $("#box1").hover(() => {
                $("#box1")
                    .find('img')
                    .stop()
                    .fadeOut(300);
                $("#box1")
                    .find('h5')
                    .stop()
                    .animate({
                        color: "#FFFFFF"
                    }, 300);
            }, () => {
                $("#box1")
                    .find('img')
                    .stop()
                    .fadeIn();
                $("#box1")
                    .find('h5')
                    .stop()
                    .animate({
                        color: "#00a79d"
                    }, 300);
            });

            $("#box2").hover(() => {
                $("#box2")
                    .find('img')
                    .stop()
                    .fadeOut(300);
                $("#box2")
                    .find('h5')
                    .stop()
                    .animate({
                        color: "#FFFFFF"
                    }, 300);
            }, () => {
                $("#box2")
                    .find('img')
                    .stop()
                    .fadeIn();
                $("#box2")
                    .find('h5')
                    .stop()
                    .animate({
                        color: "#00a79d"
                    }, 300);
            });

            $("#box3").hover(() => {
                $("#box3")
                    .find('img')
                    .stop()
                    .fadeOut(300);
                $("#box3")
                    .find('h5')
                    .stop()
                    .animate({
                        color: "#FFFFFF"
                    }, 300);
            }, () => {
                $("#box3")
                    .find('img')
                    .stop()
                    .fadeIn();
                $("#box3")
                    .find('h5')
                    .stop()
                    .animate({
                        color: "#00a79d"
                    }, 300);
            });

            $("#box4").hover(() => {
                $("#box4")
                    .find('img')
                    .stop()
                    .fadeOut(300);
                $("#box4")
                    .find('h5')
                    .stop()
                    .animate({
                        color: "#FFFFFF"
                    }, 300);
            }, () => {
                $("#box4")
                    .find('img')
                    .stop()
                    .fadeIn();
                $("#box4")
                    .find('h5')
                    .stop()
                    .animate({
                        color: "#00a79d"
                    }, 300);
            });
        }
    });