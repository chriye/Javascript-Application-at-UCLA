#!/usr/local/bin/php
<?php
    session_save_path(__DIR__ . '/sessions/');
    session_name('login_w_password');
    session_start();

    $welcome =  isset($_SESSION['loggedin']) && $_SESSION['loggedin'];
    if(!$welcome){
        header('Location: login.php');
    }
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Shut The Box</title>
        
    </head>

    <body>
        <header>
            <h2>Shut The Box</h2>
        </header>

        <main>
            <section>
                <h2>Scores</h2>
                <p>Well done! Here are the scores so far...</p>
                <p></p>
            </section>

            <fieldset>
                <input type="button" value="PLAY AGAIN!!!">
            </fieldset>

            <fieldset>
                <input type="button" value="Force update / start upadating">
                <input type="button" value="Stop updating">
            </fieldset>
        </main>

        <footer>
            <hr>
            <small>
                &copy; Weixin Ye
            </small>
        </footer>


        <script src = 'scores.js?v=4' defer></script>
    </body>
    
</html>