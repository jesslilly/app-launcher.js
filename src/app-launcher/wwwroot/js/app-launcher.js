document.appLauncher = (function (document, window) {

    console.log("app-launcher loaded.");

    function init(containerElement, apps) {

        var table = document.createElement("table");
        table.className = "app-launcher-apps";
        var tr = document.createElement("tr");
        table.appendChild(tr);

        var columns = 4; // todo option.

        apps.forEach(function(app, index) {

            if (index % columns === 0) {
                tr = document.createElement("tr");
                table.appendChild(tr);
            }

            var td = document.createElement("td");
            tr.appendChild(td);

            var a = document.createElement("a");
            a.href = app.href;
            var img = document.createElement("img");
            img.src = "http://placehold.it/100x100";
            a.appendChild(img);
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