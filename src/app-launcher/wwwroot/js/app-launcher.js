document.appLauncher = (function (document, window) {

    console.log("app-launcher loaded.");

    function init(containerElement, apps) {

        var table = document.createElement("table");
        table.className = "app-launcher-apps";
        var tr = document.createElement("tr");
        table.appendChild(tr);

        var columns = 5; // todo option.

        apps.forEach(function(app, index) {

            if (index % columns === 0) {
                tr = document.createElement("tr");
                table.appendChild(tr);
            }

            var td = document.createElement("td");
            tr.appendChild(td);

            var a = document.createElement("a");
            a.href = app.href;
            a.title = app.name; // Added because of the ellipses.

            // todo: support images in the future.
            //var img = document.createElement("img");
            //img.src = "http://placehold.it/100x100";
            //a.appendChild(img);

            var div = document.createElement("div");
            var iconLetter = (app.name) ? app.name.substring(0, 1).toLowerCase() : "z";
            div.className = "app-launcher-icon-" + iconLetter;
            var iconText = document.createTextNode(iconLetter);
            div.appendChild(iconText);
            a.appendChild(div);

            var linkText = document.createTextNode(app.name);
            a.appendChild(linkText);
            td.appendChild(a);

        });

        containerElement.appendChild(table);
    }

    return {
        "init": init
    };

})(document, window);