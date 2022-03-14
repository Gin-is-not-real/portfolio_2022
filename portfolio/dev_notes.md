# portfolio 2022
- php
- javascript front/back
- json



## derniéres modifications
- 12/03/22: navigation et ancres



## todo
[ ] back office pour les projets

[ ] partie contacts
    [X] provisoirement dans le footer
    [ ] formulaire
    [ ] envoi de mail

[X] system du header
    [ ] allonger le temp de disparition

[ ] optimisation
    [ ] fetch json -> je récupere un objet, voir si ce pas mieux de recuperer directement la reponse html ??



## structure (14/03/22)
- data/:
    - projects.json:    
        - les projects sont sauvegardés en JSON sous la forme `{projects: [{id, title, tags, description, description, githubLink, webLink}, ...]}`

- public/:
    - images/:   
        - les images du front

    - style/:
        - fonts.css:        
            - import et gestion de la police
            - tailles de police en fonction des elements
        - general.css:
            - variables
            - elements generaux: html, body, general header et footer 
        - sections.css:     
            - style des sections
        - main.css:
            - imports des autres fichiers css
            - elements et classes
            - fx et animations

- src/:
    - les scripts php et js:
        - get_data.php
        - header.js:
            - effects front du header et mise à jour du lien de navigation actif
        - projects.js:
            - effects front des cards de la partie projet
            - récuperation et affichage des données json des projets

- templates/:
    - projects/:
        - _card.php
        - _list.php
        - _show.php
    - base.php
    - footerphp
    - header.php
    - home.php

- index.php
