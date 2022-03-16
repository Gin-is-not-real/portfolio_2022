# portfolio 2022
- php
- javascript front/back
- json


## dernières modifications
- 12/03/22: navigation et ancres
- 14/03/22: structure dossier, clean code et fix front fx
- 15/03/22: optimisation de la recuperation des données json (js fetch le fichier json directement)
- 16/03/22: fix et améliorations style et effets (header scroll effect, "show" plus clair)

## projets à mettre
[ ] annonces php:
    [ ] fix:
        [ ] header au chargement
        [ ] empecher surcharge de la bdd (suppression user au bout d'un delai)
    [ ] github ok
    [ ] en ligne

[ ] modulars:
    [ ] github
    [ ] en ligne

[ ] gin2021_database_manager:
    [ ] github
    [ ] en ligne

[ ] (??) json_tests:
    [ ] github
    [ ] en ligne

## todo
[ ] portfolio:
    [ ] lister les projets à mettre
    [ ] verifier les repositories et la version
    [ ] voir pour mettre en ligne

[ ] _projets:
    [ ] show: ajouter bouton close 
    [ ] show: (?) ne pas afficher le lien du site si il n'existe pas 
    [ ] systeme pour la description: courte sur la carte et longue sur show  

[ ] partie contacts:
    [X] provisoirement dans le footer
    [ ] formulaire
    [ ] envoi de mail

[ ] back office pour les projets
    [ ] front
    [ ] data: mettre les données en base SQL, mais garder AJAX pour certaines opérations
        [ ] creer la bdd
        [ ] systeme de stockage temporaire des données en json

[ ] optimisation
    [ ] fetch json -> je récupere un objet, voir si ce pas mieux de recuperer directement la reponse html ?? 


## fonctionnement 
### ajax

**javascript:**
``` 
// requête du fichier json
fetch(jsonFilePath)

// formatage du contenu de la reponse en objet
.then(response => response.json())

.then(obj => {
    // appelle de la fonction de traitement, soit display...(obj)
})
```


### fonctionnalitées (à revoir)
- Lister les projets:
    - declenchement:                chargement du site
    - parametres:                   
    - recuperation de la donnée:    PHP: _list.php decode le contenu du fichier data
    - donnée:                       objet projects
    - exploitation:                 PHP: _list.php boucle sur l'objet et require _card.php pour chaque projet


- Afficher un projet:
    - declenchement:                clic sur une carte
    - parametres:                   id de la carte
    - recuperation de la donnée:    JS: fetch le fichier data, et passe l'objet dont l'id correspond à la fonction de callback
    - donnée:                       obj project 
    - exploitation:                 JS: rempli le html et retire la classe hidden 


BACK OFFICE
- Lister les projets:
    - declenchement:    chargement de la page
    - parametres:       
    - recuperation de la donnée:    PHP: _list.php decode le contenu du fichier data
    - donnée:                       objet projects 
    - exploitation:                 PHP: _list.php boucle sur l'objet et require _card.php pour chaque projet


- Afficher un projet:
    - declenchement:    clic sur une carte
    - parametres:       id du projet
    - recuperation de la donnée:    JS: fetch script php en passant l'id, PHP: decode le fichier data
    - donnée:                       string projects 
    - exploitation:                 JS: transforme la reponse en texte, parse la reponse en objet, rempli le html et retire la classe hidden


- Ajouter projet (formulaire)
    - declenchement:                submit
    - parametres:                   inputs
    - recuperation de la donnée:    PHP: recupere les donnée du formulaire
    - donnée:                       POST projet 
    - exploitation:                 


- Modifier projet (formulaire)
    - declenchement:                submit  
    - parametres:                   inputs
    - recuperation de la donnée:    PHP: recupere les donnée du formulaire
    - donnée:                       POST projet 
    - exploitation:                 


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
