// GENERAL HEADER
let header = document.querySelector('#general-header');
let headerElements = [
    header.querySelector('figure'),
    header.querySelector('#nav-social'),
    header.querySelector('#main-navigation')
];
// getComputedStyles(headerElements);


// PROJECTS
let cards = document.querySelectorAll('.project_card');
let show = document.querySelector('.project_show');

let cardHeight = parseFloat(window.getComputedStyle(cards[0]).height.replace('px', ''));
console.log(cardHeight);


// MAIN NAVIGATION
let mainNavLinks = header.querySelectorAll('#main-navigation a');
console.log(mainNavLinks);


/*
    TESTS SCROLL
*/
let anchors = document.querySelectorAll('.anchor');
console.log(anchors);

// define the limit to define if an element is visible 
let apparitionLimit = screen.height/2;

function checkForActiveSection() {
    //loop on anchors and check if it's visible
    for(let i = 0; i < anchors.length; i++) {
        let anchor = anchors[i];
        let y = getViewportY(anchor);

        if(y > 0 && y < screen.height) {

            if(y < apparitionLimit) {
                return i;

            }
            else {
                return i-1;

            }
        } 
    }
}


function getViewportY(elt) {
    let positions = elt.getBoundingClientRect();
    let viewportY = (positions.y || positions.top);
    return viewportY;
}

function activeSection(index) {
    for(let i = 0; i < mainNavLinks.length; i++) {
        if(i === index) {
            mainNavLinks[i].classList.add('active-navlink');
        }
        else {
            mainNavLinks[i].classList.remove('active-navlink');
        }
    }
}



/*
    FUNCTIONS
*/


function getComputedStyles(array) {
    console.log(elt)
    array.forEach(elt => {
        // if(typeof elt === 'object') {
            window.getComputedStyle(elt);
        // }
    })
}


// header
function hideElements(elements) {
    elements.forEach(elt => {
        elt.style.transition = "opacity 0.5s";
        elt.style.opacity = "0";
    })
    header.style.transition = "opacity 1s";
    header.style.opacity = "0";
}
function showElements(elements) {
    elements.forEach(elt => {
        elt.style.transition = "opacity 0.5s";
        elt.style.opacity = "100";
    })
    header.style.transition = "opacity 1s";
    header.style.opacity = "100";
}


// project show
function showProject(id) {
    let phpScriptUrl = new URL(document.location.href + 'src/get_data.php');
    phpScriptUrl.searchParams.append('id', id);

    fetch(phpScriptUrl)
    .then(response => response.text())
    // .then(response => response)
    .then(json => {
        let prj = JSON.parse(json).projects[id];
        console.log(prj);

        show.querySelector('h3').textContent = prj.title;
        show.querySelector('h4').textContent = "";

        if(prj.tags !== undefined) {
            prj.tags.forEach(tag => {
                show.querySelector('h4').textContent += tag + ', ';
            });
        }


        show.querySelector('p').textContent = prj.description;
        show.querySelector('.show-nav .github-link').href = prj.githubLink;
        show.querySelector('.show-nav .web-link').href = prj.webLink;

        show.classList.remove("hidden");
    })

}



/*
    EVENTS LISTENERS
*/

// header
header.addEventListener('mouseover', function() {
    showElements(headerElements);
})
header.addEventListener('mouseleave', function() {
    hideElements(headerElements);
})


// header and nav when scroll
document.addEventListener('scroll', function(e) {
    // lastKnownScrollPosition = window.scrollY;

    let active = checkForActiveSection();
    activeSection(active);

    showElements(headerElements);

    window.setTimeout(function() {
        hideElements(headerElements);
    }, 2000);
});

// cards
cards.forEach(card => {
    card.content = card.querySelector(".card-content");
    card.button = card.querySelector(".card-button");

    card.addEventListener('mouseover', function() {
        card.content.style.transition = "height 0.5s";
        card.content.style.height = "0px";
    });

    card.addEventListener('mouseleave', function() {
        card.content.style.transition = "height 0.5s";
        card.content.style.height = cardHeight + "px";
    });

    card.button.addEventListener('click', function() {
        // show.classList.toggle("hidden");
        showProject(card.id);
    });
});


// show
show.addEventListener('click', function() {
    show.classList.add("hidden");
});




