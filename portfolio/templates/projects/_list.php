<?php
$file_path = "data/projects.json";
$projects = json_decode(file_get_contents($file_path))->projects;


foreach ($projects as $key => $project) {
    // stocke le projet en POST pour qu'il soit récupéré par _card.php
    $_POST['prj'] = $project;
    
    echo "<li>";
    require '_card.php';
    echo "</li>";
}


?>

