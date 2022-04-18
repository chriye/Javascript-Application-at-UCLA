#!/usr/local/bin/php
<?php 
    session_save_path(__DIR__ . '/sessions/');
    session_name('login_w_password');
    session_start();

    $incorr_pw = false;

    if(isset($_POST['pw'])){
        validate($_POST['pw'], $incorr_pw);
    }

    function validate($submiss, &$incorr_pw){
        $file = fopen('h_password.txt', 'r');
        $hashed_pw = fgets($file);
        $hashed_pw = trim($hashed_pw);
        fclose($file);

        $hashed_sub_pw = hash('md2', $submiss);
        if($hashed_pw !== $hashed_sub_pw){
            $_SESSION['loggedin'] = false;
            $incorr_pw = true;
        }
        else{
            $_SESSION['loggedin'] = true;
            header('Location: welcome.php');
            exit;
        }
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
        <h1>Welcome! Ready to play "Shut The Box"?</h1>
    </header>

    <main>
        <section>
            <h2>Login</h2>
            <p>In order to play you need the password.</p>
            <p>If you know it, please enter it below and login.</p>
            <fieldset>
                <form method="POST">
                    <label for="password">Password: </label>
                    <input id="password" type="password" name="pw">
                    <input type="submit" value="Login">
                </form>
            </fieldset>
        </section>

        <?php 
            if($incorr_pw){
                echo "Invalid password!", '<br>';
            }
        ?>
    </main>

    <footer>
        <hr>
        <small>
            &copy; Weixin Ye
        </small>
    </footer>


</body>

</html>