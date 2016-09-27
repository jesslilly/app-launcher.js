(function (document, window) {

    console.log("site.js loaded.");

    function setPageTitle(selectedOption) {
        if (selectedOption) {
            var environment = selectedOption.getAttribute("data-page-title");
            document.querySelector("#page-title").innerText = environment;
        }
    }

    // To prevent CORS issues: Use relative URL, protocol agnostic (beginning with //), 
    // or "direct" url without redirects.

    function createAppLauncher(columnNumber) {
        console.log("createAppLauncher for column " + columnNumber);
        var uri = "/Home/AppList";
        document.appLauncher.scrapeTable(uri, columnNumber, function (appList) {
            var container = document.querySelector("#apps");
            document.appLauncher.init(container, appList);

            // Customize background based on environment.
            if (columnNumber == 3) {
                container.classList.add("live-environment");
                container.classList.remove("test-environment");
                container.classList.remove("demo-environment");
            } else if (columnNumber == 2) {
                container.classList.remove("live-environment");
                container.classList.add("test-environment");
                container.classList.remove("demo-environment");
            } else {
                container.classList.remove("live-environment");
                container.classList.remove("test-environment");
                container.classList.add("demo-environment");
            }
        });
    }

    function setSelectedEnvironment(columnNumber) {
        // Set selected option
        var envSelect = document.querySelector("#environment-select");
        var selectedOption = null;
        for (var index = 0; index < envSelect.options.length; index++) {
            if (envSelect.options[index].value == columnNumber) {
                envSelect.selectedIndex = index;
                selectedOption = envSelect.options[index];
            }
        }

        setPageTitle(selectedOption);
    }

    var select = document.querySelector("#environment-select");
    select.addEventListener("change", function (event) {
        var columnNumber = parseInt(this.value, 10);

        setPageTitle(this.selectedOptions[0]);

        // Save column number
        localStorage.setItem('app-launcher-column-number', columnNumber);

        createAppLauncher(columnNumber);
    });

    var savedColumnNumber = parseInt(localStorage.getItem('app-launcher-column-number'),10);
    setSelectedEnvironment(savedColumnNumber || 3);
    createAppLauncher(savedColumnNumber || 3);

})(document, window);