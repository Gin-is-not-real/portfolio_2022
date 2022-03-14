<?php
$file_path = "../data/projects.json";
// $projects = json_decode(file_get_contents($file_path))->projects;


if(isset($_GET['id'])) {
    $prj = file_get_contents($file_path);
    echo $prj;

    // echo var_dump($prj[$_GET['id']]);
}
