<?php
// POST[prj] transmit from _list.php when loop on projects
$project = $_POST['prj'];


// list tags from array
$tags_str = "";
if(property_exists($project, "tags")) {

    foreach($project->tags as $key => $value) {
        $tags_str .= $value . ", ";
    }
    // preg_replace('([^abc][ \s])$', '', $tags_str);
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