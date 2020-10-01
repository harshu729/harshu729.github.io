
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Un-bored</title>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="shortcut icon" href="img/favicon.png">
    <link href="https://fonts.googleapis.com/css2?family=Baloo+Da+2:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <script>
        var username = prompt("What's your name?");
        var ideas = [
            'Code',
            'Play Minecraft',
        ];

        var randomNumber = Math.floor(Math.random()*ideas.length);
        var youridea = ideas[randomNumber];
            document.write("<h1>Hello " + username + "," + " here's an idea: " + youridea + ".</h1>");
    </script>

</head>

<body>

<a href="index.html">Another one</a> <a href="../index.html">Home</a>

</body>

</html>
