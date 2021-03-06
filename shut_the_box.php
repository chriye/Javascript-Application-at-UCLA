#!/usr/local/bin/php
<?php
    session_save_path(__DIR__ . '/sessions/');
    session_name('login_w_password');
    session_start();
    
    if(!$_SESSION['loggedin']){
        header('Location: login.php');
    }
    else{
        if(!isset($_COOKIE['username'])){
            header('Location: welcome.php');
        }
        
    }
?>

<!DOCTYPE html>
<html lang='en'>

    <head>
        <meta charset = 'UTF-8'>
        <title>Shut The Box</title>
        <script src = "username.js?v=4" defer> </script>
        <script src = "shut_the_box.js?v=4" defer> </script>
    </head>

    <body>
        <header>
            <h1> Shut The Box</h1>
        </header>
        

        <main>
            <section>
                <h2> The Rules</h2>
                <ol type='i'>
                    <li> 
                        Each turn, you roll the dice(or die) and select 1 
                        or more boxes which sum to the value of your roll.
                    </li>
                    <li> 
                        You will not be allowed to be pick the boxes which 
                        you choose on subsequent turns.
                    </li>
                    <li>
                        When the sum of the boxes which are left is less than or 
                        equal to 6, you will only roll a single die.
                    </li>
                    <li>
                        When you cannot make a move or you give up, the sum of 
                        the boxes which are left gives your score.
                    </li>
                    <li>
                        Lower scires are better and a score of 0 is called "shutting
                        the box".
                    </li>
                </ol>
            </section>


            <section>
                <h2> Dice roll</h2>
                <fieldset>
                    <input type = 'button' value = "Roll dice">
                    Result: <span></span>
                </fieldset>
            </section>


            <section>
                <h2> Box selection</h2>
                <table>
                    <thead> 
                        <tr>
                            <?php
                                for($i = 1; $i < 10; ++$i){
                                    echo "<td>", $i, "</td>";
                                }
                            ?>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <?php
                                for($i = 1; $i < 10; ++$i){
                                    echo '<td><input type = "checkbox"></td>';
                                }
                            ?>
                        </tr>
                    </tbody>
                </table>

                <fieldset>
                    <input id = "submit" type = "button" value = "Submit box selection">
                    <input id = "quit" type = "button" value = "I give up /I can't make a valid move">
                </fieldset>

                <p>Here is the testing</p>
                <p></p>
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