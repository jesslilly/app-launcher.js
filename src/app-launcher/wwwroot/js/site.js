(function (document, window) {

    console.log("site.js loaded.");

    var uri = "/Home/AppList";
    document.appLauncher.scrapeTable(uri, function(appList) {
        var container = document.querySelector("#apps");
        document.appLauncher.init(container, appList);
    });

})(document, window);