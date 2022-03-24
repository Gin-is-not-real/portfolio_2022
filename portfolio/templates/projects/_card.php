<?php
// POST[prj] transmit from _list.php when loop on projects
$project = $_POST['prj'];


// list tags from array
$tags_str = "";
if(property_exists($project, "tags")) {
    foreach($project->tags as $key => $value) {
        $tags_str .= $value . ", ";
    }
    // remove ", " from the end of the string
    $tags_str = substr($tags_str, 0, -2);
}


// 230 chars max
$max_chars = 200; 
$description = $project->description;
if(strlen($description) > $max_chars) {
    $description = substr($description, 0, $max_chars);
    $description .= " ...";
}
?>


<div class="project_card shaded" id="<?=$project->id; ?>">
    <div class="card-content">
        <header>
            <h3><?= $project->title; ?></h3>
            <h4><?= $tags_str; ?></h4>
        </header>

        <div>
            <p><?= $description; ?></p>
        </div>
    </div>

    <div>
        <input type="button" class="card-button shaded" value="VOIR PLUS">
    </div>
</div>