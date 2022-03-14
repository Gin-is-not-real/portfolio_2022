# portfolio 2022
- php
- javascript
- json


## todo
[ ] back office pour les projets

[ ] partie contacts
    [X] provisoirement dans le footer

[X] navigation et ancres

[ ] system du header
    [ ] allonger le temp de disparition



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
        - script.js

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
