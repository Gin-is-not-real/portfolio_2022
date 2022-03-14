////////////////////////////////////////////////////////////
// VARS
let header = document.querySelector('#general-header');
let headerElements = [
    header.querySelector('figure'),
    header.querySelector('#nav-social'),
    header.querySelector('#main-navigation')
];
let mainNavigationLinks = header.querySelectorAll('#main-navigation a');
let anchors = document.querySelectorAll('.anchor');

// limit to define if an element is visible 
let activeElementThreshold = screen.height/2;
let isHoverHeader = false;


////////////////////////////////////////////////////////////
// FUNCTIONS
/*
when scroll on page, 
    - identifies the active section and adds a class to the corresponding navigation link to style them  
    - makes the header appear, and disappear after a delay
*/
function pageScrollHandler() {
    let active = getIndexOfActiveElement(anchors, activeElementThreshold);
    updateActiveNavigationLinks(mainNavigationLinks, active);

    showHeader();
    hideHeader();
}


/**
 * 
 */
 function hideHeader() {
    if( (window.scrollY !== 0) && (!isHoverHeader)) {
        headerElements.forEach(elt => {
            elt.style.transition = "opacity 4s 2s ";
            elt.style.opacity = "0";
        })
        header.style.transition = "opacity 4s 1.5s";
        header.style.opacity = "0";
    }
}
function showHeader() {
    headerElements.forEach(elt => {
        elt.style.transition = "opacity 0.2s";
        elt.style.opacity = "100";
    })
    header.style.transition = "opacity 0.5s";
    header.style.opacity = "100";
}


/**
 * Loop on an array of elements and return the index of them is most present on screen, by ckecking if the element passes over an horizontal the limit.
 * @param {array} elements - array of DOM elements
 * @param {integer} limit - y-coordinate in pixels of the boundary
 * @returns {integer} index of the active section
 */
 function getIndexOfActiveElement(elements, limit) {
    //loop on anchors and check if it's visible
    for(let i = 0; i < elements.length; i++) {
        let elt = elements[i];
        let y = elt.getBoundingClientRect().y || elt.getBoundingClientRect().top;

        // if element is visible on screen but not above limit, the active section is the previous section
        if(y > 0 && y < screen.height) {
            if(y < limit) {
                return i;
            }
            else {
                return i-1;
            }
        } 
    }
}


/**
 * Add class active-link for the link whose index corresponds to the index passed in parameter, and removes it for others
 * @param {array} links corresponding
 * @param {integer} index 
 */
function updateActiveNavigationLinks(links, index) {
    for(let i = 0; i < links.length; i++) {
        if(i === index) {
            links[i].classList.add('active-navlink');
        }
        else {
            links[i].classList.remove('active-navlink');
        }
    }
}



//////////////////////////////////////////////////////////////
// EVENTS LISTENERS
document.addEventListener('scroll', function(e) {
    pageScrollHandler();
});
header.addEventListener('mouseover', function() {
    isHoverHeader = true;
    showHeader();
})
header.addEventListener('mouseleave', function() {
    isHoverHeader = false;
    hideHeader();
})