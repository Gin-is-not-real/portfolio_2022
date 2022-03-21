<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous">
    <link rel="stylesheet" href="public/style/main.css">
    <title>Nina P.</title>
</head>

<body>

    <?php include 'header.php'; ?>

    <main>
        <?php
            include 'projects/_show.php';

            include 'home.php';
            include 'projects/projects.php';
        ?>
    </main>

    <h1 id="contacts"></h1>
    <?php include 'footer.php'; ?>


</body>
<script src="src/accessData.js"></script>

<script src="src/header.js"></script>
<script src="src/projects.js"></script>
<script src="src/images.js"></script>

</html>