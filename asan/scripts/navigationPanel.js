let asideBar = document.getElementById("aside_bar");
let arrowButton = document.getElementById("arrow_button");



function getModeLocalStorageNavigationPanel() {
    let modeNavigationPanel = localStorage.getItem("mode_navigation_panel", 0);

    if (modeNavigationPanel == null) {
        setModeLocalStorageNavigationPanel(0);
        modeNavigationPanel = 0;
    }

    return modeNavigationPanel;
}

function setModeLocalStorageNavigationPanel(mode) {
    localStorage.setItem("mode_navigation_panel", mode);
}


arrowButton.addEventListener("click", () => {
    asideBar.classList.toggle("hide");
    let modeNavigationPanel = parseInt(getModeLocalStorageNavigationPanel()) === 0 ? 1 : 0;
    setModeLocalStorageNavigationPanel(modeNavigationPanel);
});




function initial() {
    let modeNavigationPanel = getModeLocalStorageNavigationPanel();
    if (parseInt(modeNavigationPanel) === 0) {
        asideBar.classList.add("hide");
    }
}

initial();