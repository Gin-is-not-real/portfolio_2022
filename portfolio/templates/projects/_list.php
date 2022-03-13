<?php
$file_path = "data/projects.json";
$projects = json_decode(file_get_contents($file_path))->projects;


foreach ($projects as $key => $project) {
    $_POST['prj'] = $project;
    
    echo "<li>";
    require '_card.php';
    echo "</li>";
}


?>

