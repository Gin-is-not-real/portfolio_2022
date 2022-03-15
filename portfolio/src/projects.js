////////////////////////////////////////////////////////////
// VARS
let cards = document.querySelectorAll('.project_card');
let show = document.querySelector('.project_show');

let cardHeight = parseFloat(window.getComputedStyle(cards[0]).height.replace('px', ''));

////////////////////////////////////////////////////////////
// FUNCTIONS
function fetchAndShowProject(id) {
    fetch('data/projects.json')
    .then(response => response.json())
    .then(json => {
        console.log(json)

        let prj = json.projects[id];
        console.log(prj)
        displayProject(prj);
    })
}

function displayProject(project) {
    show.querySelector('h3').textContent = project.title;
    show.querySelector('h4').textContent = "";

    if(project.tags !== undefined) {
        project.tags.forEach(tag => {
            show.querySelector('h4').textContent += tag + ', ';
        });
    }

    show.querySelector('p').textContent = project.description;
    show.querySelector('.show-nav .github-link').href = project.githubLink;
    show.querySelector('.show-nav .web-link').href = project.webLink;

    show.classList.remove("hidden");
}

//////////////////////////////////////////////////////////////
// EVENTS LISTENERS
cards.forEach(card => {
    card.content = card.querySelector(".card-content");
    card.button = card.querySelector(".card-button");

    // show button 'see more'
    card.addEventListener('mouseover', function() {
        card.content.style.transition = "height 0.5s";
        card.content.style.height = "0px";
    });
    // hide button
    card.addEventListener('mouseleave', function() {
        card.content.style.transition = "height 0.5s";
        card.content.style.height = cardHeight + "px";
    });

    card.button.addEventListener('click', function() {
        fetchAndShowProject(card.id);
    });
});

// hide
show.addEventListener('click', function() {
    show.classList.add("hidden");
});




