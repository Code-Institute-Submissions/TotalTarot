function darkMode(mode){

    let modeButton = document.getElementById("mode-button");
    let navModeButton = document.getElementById("mode-collapse-button");
    
     if(mode === "light-mode"){

         let lightElements = document.getElementsByClassName("light-mode");
         console.log(lightElements);

        for (element of lightElements){
            element.classList.add("dark-mode");
            element.classList.remove("light-mode");
        };
            modeButton.outerHTML = `<div id="mode-button" onclick="darkMode('dark-mode')" class="nav-item light-mode d-none d-sm-inline-block"></div>`;
            navModeButton.outerHTML = `<li id="mode-collapse-button" onclick="darkMode('dark-mode')" class="nav-item d-sm-none"><a class="nav-link">Light Mode</a></li>`;
    } else {

        let darkElements = document.getElementsByClassName("dark-mode");

        for (element of darkElements){
            element.classList.add("light-mode");
            element.classList.remove("dark-mode");
        }     
        
        modeButton.outerHTML = `<div id="mode-button" onclick="darkMode('light-mode')" class="nav-item light-mode d-none d-sm-inline-block"></div>`;
        navModeButton.outerHTML = `<li id="mode-collapse-button" onclick="darkMode('light-mode')" class="nav-item d-sm-none"><a class="nav-link">Dark Mode</a></li>`;
    }
}