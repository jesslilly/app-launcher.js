(function (document, window) {

    console.log("site.js loaded.");

    // To prevent CORS issues: Use relative URL, protocol agnostic (beginning with //), 
    // or "direct" url without redirects.

    function createAppLauncher(columnNumber) {
        var uri = "/Home/AppList";
        document.appLauncher.scrapeTable(uri, columnNumber, function (appList) {
            var container = document.querySelector("#apps");
            document.appLauncher.init(container, appList);
        });
    }
    var select = document.querySelector("#environment-select");
    select.addEventListener("change", function (event) {
        var columnNumber = parseInt(this.value, 10);
        console.log("createAppLauncher for column " + columnNumber);
        createAppLauncher(columnNumber);
    });
    createAppLauncher(3);

})(document, window);