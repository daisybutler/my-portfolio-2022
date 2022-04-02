// Make a light appear behind .glass-card on mouse enter
function illuminate(light) {
    document.getElementById(light).classList.add('light-on');
}

// Make light disappear from behind .glass-card on mouse leave
function dim(light) {
    document.getElementById(light).classList.remove('light-on');

}

// When user mouse enters section, begin revolving styles text.
/*
function revolveStyle() {
    setTimeout(function() {
        let counter = 0;
        const values = ['zero', 'one', 'two', 'three'];
        while (counter < 4) {
            // setTimeout(function() {
                document.getElementById("revolving-styles").innerHTML = values[counter];
                counter += 1;
                console.log(counter);
            // }, 1000)
        }
       
    }, 2000)
    
}
*/

// Create new typewriter
const typewriter = new Typewriter('#typewriter', {
    loop: false,
});

// Start the typerwriter effect
typewriter.typeString()

// Display tech name when a user hovers over the logo
function  displayName(name) {

    typewriter.typeString(name)
        .pause(2000)
        .deleteAll()
        .start();
}

function clearName() {
    typewriter.typeString()
}


// Blur project card and display buttons

function viewProject(overlay, image) {
    document.getElementById(overlay).style.visibility = "visible";
    document.getElementById(image).style.filter = "blur(4px)";
    document.getElementById(overlay).style.backgroundColor = "rgba(63, 72, 76, 0.5)";

    // Apply background filter gently
    var timeImage = 800;
    document.getElementById(image).style.transition = "all "+timeImage+"ms";
}

function exitProject(overlay, image) {
    document.getElementById(overlay).style.visibility = "hidden";
    document.getElementById(image).style.filter = "none";

    // Remove background filter gently
    var timeImage = 800;
    document.getElementById(image).style.transition = "all "+timeImage+"ms";
}