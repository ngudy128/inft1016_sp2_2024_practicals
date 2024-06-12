function change_image_1() {
    var img = document.getElementById("image");
    var texteElement = document.getElementById("text");
    img.src = "https://www.shutterstock.com/shutterstock/photos/1226807464/display_1500/stock-photo-dices-with-teamwork-idea-business-1226807464.jpg";
    texteElement.innerHTML = "Dices with Teamwork Ideas Business. A great picture to show how our ideas are generated through many deeep thoughts";
    
    var dices_link = document.getElementById("dices_link");
    dices_link.href = "https://www.shutterstock.com/image-photo/dices-teamwork-idea-business-1226807464";
}

function change_image_2() {
    var img = document.getElementById("image");
    var texteElement = document.getElementById("text");
    img.src = "https://www.shutterstock.com/shutterstock/photos/2286643233/display_1500/stock-photo--goals-of-business-or-life-wooden-cubes-with-and-goal-icon-on-smart-background-starting-2286643233.jpg";
    texteElement.innerHTML = "2024 goals of business or life";
    
    var dices_link = document.getElementById("dices_link");
    dices_link.href = "https://www.shutterstock.com/image-photo/2024-goals-business-life-wooden-cubes-2286643233";
}

function change_color() {
    if (document.documentElement.getAttribute("data-theme") == ":root") {
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", ":root");
    }
}