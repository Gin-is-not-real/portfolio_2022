/**
 * set sources for images according to the screen size
 */

/**
 * file informations
 */
 let srcPrefix = "public/images/";
 let srcSufix = ".png";

/**
 * objects image
 */
let imageHome = {
    fileName: "kbd_1260x840", 
    baseWidth: 1260, 
    domElement: document.querySelector("#home .img-bg")
};
let imageProjects = {
    fileName: "book_1216x806", 
    baseWidth: 1216,
    domElement: document.querySelector("#projects .img-bg")
};

let imageObjs = [imageHome, imageProjects];


// test
// let testScreenWidth = 800;
// setMostAdaptedImages(imageObjs, defineMultiplicator(testScreenWidth));


/**
 *  Define a multiplicator for setting most adapted images sizes, according to the screen width
 * @param {float} screenWidth 
 * @returns {float} multiplicator 
 */
function defineMultiplicator(screenWidth) {
    let mult = 1;

    if(screenWidth >= 1600) {
        mult = 1.5;
    } 
    else if(screenWidth <= 800) {
        mult = 0.75;
    }

    console.log("screenWidth: ", screenWidth, ", mult: ", mult);
    return mult;
}


/**
 * Set the most adapted image file for each img, by concatenate multiplicator if needed, and update the img src attribute
 * @param {array} images array of objects image ({filename, domElement})
 * @param {float} multiplicator multiplicator 
 */
function setMostAdaptedImages(images, multiplicator) {
    images.forEach(img => {
        let fileName = srcPrefix + img.fileName;

        if(multiplicator !== 1) {
            fileName += "@" + multiplicator + "x";
        }
        fileName += ".png";

        console.log("filename: ", fileName);
        img.domElement.src = fileName;
    });
}


