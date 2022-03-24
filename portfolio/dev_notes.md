# portfolio 2022
- php
- javascript front/back
- json


## dernières modifications
- 12/03/22: navigation et ancres
- 14/03/22: structure dossier, clean code et fix front fx
- 15/03/22: optimisation de la recuperation des données json (js fetch le fichier json directement)
- 16/03/22: fix et améliorations style et effets (header scroll effect, "show" plus clair)
- 17/03/22: Résumé de la description sur les cartes projets (255 char) 
    - correction le 24/03/22
- 21/03/22: les images de background sont chargées en fonction de la taille de l'écran (JS)


### images:
#### basic screen sizes
1920 x 1080    => 1.5 
1024 x 768     => 1
1080 x 810     => 1
800 x 600      => 0.75
812 x 375
667 x 375

#### mes images:
Home:
- kbd_1260x840 x1.5    = 1892 x 1260
- kbd_1260x840         = 1260 x 840
- kbd_1260x840 x0.75   = 945 x 630
- kbd_1260x840 x0.5    = 630 x 420

- books_1261x806 x1.5    = 1820 x 1200
- books_1261x806         = 1261 x 806
- books_1261x806 x0.75   = 912 x 604
- books_1261x806 x0.5    = 600 x 400

#### gestion:
Comme j'ai mis les images directement dans le html et pas comme background (css), je ne peux pas me servir des media queries, je vais utiliser JS:

    - choix image au chargement:    
        - recuperer la taille de l'écran
        - definir l'image à charger (taille) 

    - choix image event resize ?    => NON car c'est la taille de l'écran qui compte

    - resize:
        - Il y a un seuil ou l'image est deformée
        - Si je defini ce seuil via min-width dans le css, alors celui ci aussi doit étre defini en même temps que l'image et en fonction d'elle


- ajout class img-bg
- script js images.js:
    - le script modifie la src de l'element img en fonction de la taille d'écran

## todo
[ ] mobile:
    [ ] definir les media queries (card heigth 47vh par exemple)
    [ ] plusieures tailles d'images     
    [ ] regler l'image de background de la section home

[ ] portfolio:
    [ ] lister les projets à mettre
    [ ] verifier les repositories et la version
    [ ] voir pour mettre en ligne

[ ] _projets:
    [ ] show: ajouter bouton close 
    [ ] show: (?) ne pas afficher le lien du site si il n'existe pas 
    [X] systeme pour la description: courte sur la carte et longue sur show     *17 mars 22: ajout overflow hidden, et decoupage de la chaine dans _card.php*

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