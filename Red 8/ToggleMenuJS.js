// <!-- ----------------------------JS for Toggle Menu----------------------- -->
    
        let menu = document.getElementById("menuNav");
        menu.style.maxHeight = "0px";
        function menutoggle() {
            if (menu.style.maxHeight == "0px") {
                menu.style.maxHeight = "250px";
                menu.style.padding = "20px";
            } else {
                menu.style.maxHeight = "0px";
                menu.style.padding = "0px";

            }
        }

   