(function (document, window) {

    console.log("site.js loaded.");

    /**
     * Use XHR to get the dom of the app list page.
     * @param {} callback 
     * @returns {} 
     */
    function getAppListDom(callback) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            console.log(this.responseXML.title);
            callback(this.responseXML);
        }
        xhr.open("GET", "/Home/AppList");
        xhr.responseType = "document";
        xhr.send();
    }

    /**
     * Using a dom, find the app list table and convert into an object.
     */
    getAppListDom(function (dom) {
        console.log(dom.title);

        var rows = dom.querySelector("table").querySelectorAll("tr");
        var apps = [];

        // start at 1 since the first row is a header.
        for (var index = 1; index < rows.length; index++) {
            var name = rows[index].cells[0].innerText.trim();
            var href = rows[index].cells[1].querySelector("a").href;
            apps.push({ "name": name, "href": href });
        }
        console.log(JSON.stringify(apps));

        var container = document.querySelector("#apps");
        document.appLauncher.init(container, apps);
    });

})(document, window);