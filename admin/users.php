<html>
    <head>
        <?php
            //include_once "./components/basic.php";
            include_once "./components/head.php";
        ?>
        <link rel="stylesheet" href="./css/users.css">
        <script src="./js/users.js"></script>
    </head>
    <body>
        <?php include_once "./components/nav.php"?>
        <section>
            <div class="contents">
                <h1>유저 관리</h1>
                <br/><br/>
                
                <h3>유저 목록</h3>
                <p class="description" id="users_status"></p>

                <br/>
                <div id="users"></div>
                <br/><br/><br/>
                <span class="btn btn-good" onclick="openCreateUserDialog()">유저 추가</span>
            </div>
        </section>
    </body>
</html>