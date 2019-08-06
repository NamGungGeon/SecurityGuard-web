<html>
    <head>
        <?php
            //include_once "./components/basic.php";
            include_once "./components/head.php";
        ?>
        <script src="./js/login.js"></script>
    </head>
    <body>
        <?php include_once "./components/nav.php"?>
        <section>
            <div class="contents">
                <h1>도움말</h1>
                <br/><br/>
                
                <span class="input-label">아이디</span>
                <input type="text" id="user_id" placeholder="ID"><br/>
                <span class="input-label">패스워드</span>
                <input type="password" id="user_pw" placeholder="PASSWORD"><br/>

                <br/>
                <span class="btn btn-good" onclick="login()">로그인</span>
                <span class="btn btn-normal" onclick="moveUrl('./register.php')">회원가입</span>

                <form method="POST" action="./ads.php" id="letsGo">
                    <input type="hidden" id="id" name="uid">
                    <input type="hidden" id="token" name="token">
                </form>
            </div>
        </section>
    </body>
</html>