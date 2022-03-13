<?php
$file_path = "../data/projects.json";
// $projects = json_decode(file_get_contents($file_path))->projects;


if(isset($_GET['id'])) {
    $prj = json_decode(file_get_contents($file_path))->projects;

    $prj = file_get_contents($file_path);
    echo $prj;
    // die(var_dump($prj[$_GET['id']]));

    // echo var_dump($prj[$_GET['id']]);
    // return json_encode($prj($_GET['id']));
}
