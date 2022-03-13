let main = document.querySelector('main');
let cards = document.querySelectorAll('.project_card');
let show = document.querySelector('.project_show');

let cardHeight = window.getComputedStyle(cards[0]).height;
cardHeight = parseFloat(cardHeight.replace("px", ""));
console.log(cardHeight);

let header = document.querySelector('#general-header');
let logo = header.querySelector('figure');
let nav = header.querySelector('nav');
let headerElements = [logo, nav];
// header.style.zIndex = "-20";
// header.style.visibility = "hidden";

headerElements.forEach(elt => {
    window.getComputedStyle(elt);
    console.log(elt)
    elt.style.visibility = "hidden";
})

header.addEventListener('mouseover', function() {
    headerElements.forEach(elt => {
        elt.style.visibility = "visible";
    })
})
header.addEventListener('mouseleave', function() {
    headerElements.forEach(elt => {
        elt.style.visibility = "hidden";
    })
})


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

show.addEventListener('click', function() {
    show.classList.add("hidden");
});


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

