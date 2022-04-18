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
<html lang='en'>

    <head>
        <meta charset='UTF-8'>
        <title>Shut The Box</title>
        
        <script src = 'username.js?v=4' defer></script>
        <script src = 'welcome.js?v=4' defer></script>
        
    </head>


    <body>
        <header>
            <h1>Welcome! Ready to play "Shut The Box"?</h1>
        </header>


        <main>
            <section>
                <h2>Choose a username</h2>

                <p>
                    So that we can post your score(s), please choose a username.
                </p>

                <fieldset>
                    <label for = 'tb'>Username: </label>
                    <input id = 'tb' type = 'text'>
                    <input type = "button" value = "Submit">

                </fieldset>
            </section>
        </main>


        <footer>
            <hr>
            <small>
                &copy; Weixin Ye, 2022
            </small>
        </footer>
    </body>
</html>