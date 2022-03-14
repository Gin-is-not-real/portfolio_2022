////////////////////////////////////////////////////////////
// VARS
let cards = document.querySelectorAll('.project_card');
let show = document.querySelector('.project_show');

let cardHeight = parseFloat(window.getComputedStyle(cards[0]).height.replace('px', ''));


////////////////////////////////////////////////////////////
// FUNCTIONS
/**
 * Fetch json project data by calling a php script, and display the project show template after having completed 
 */

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
    // displays the project in large format
    card.button.addEventListener('click', function() {
        showProject(card.id);
    });
});

// hide
show.addEventListener('click', function() {
    show.classList.add("hidden");
});




