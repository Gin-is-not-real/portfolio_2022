<?php
$project = $_POST['prj'];

$tags_str = "";

if(property_exists($project, "tags")) {
    foreach($project->tags as $key => $value) {
        $tags_str .= $value . ", ";
    }
}

?>

<div class="project_card shaded" id="<?=$project->id; ?>">
    <div class="card-content">
        <header>
            <h3><?= $project->title; ?></h3>
            <h4><?= $tags_str; ?></h4>
        </header>

        <div>
            <p><?= $project->description; ?></p>
        </div>
    </div>

    <div>
        <input type="button" class="card-button shaded" value="VOIR PLUS">
    </div>
</div>