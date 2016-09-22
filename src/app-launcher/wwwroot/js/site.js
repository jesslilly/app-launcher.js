(function (document, window) {

    console.log("site.js loaded.");

    // To prevent CORS issues: Use relative URL, protocol agnostic (beginning with //), 
    // or "direct" url without redirects.
    var uri = "/Home/AppList";

    document.appLauncher.scrapeTable(uri, 2, function(appList) {
        var container = document.querySelector("#apps");
        document.appLauncher.init(container, appList);
    });

})(document, window);