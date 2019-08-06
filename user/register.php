<html>
    <head>
        <?php
            //include_once "./components/basic.php";
            include_once "./components/head.php";
        ?>
        <script src="./js/register.js"></script>
    </head>
    <body>
        <?php include_once "./components/nav.php"?>
        <section>
            <div class="contents">
                <h1>회원가입</h1>
                <p class="description">1분도 채 걸리지 않습니다!</p>
                <br/><br/>
                
                <span class="input-label">실명</span>
                <input type="text" id="user_name" placeholder="이름"><br/>
                <span class="input-label">아이디</span>
                <input type="text" id="user_id" placeholder="ID"><br/>
                <span class="input-label">패스워드</span>
                <input type="password" id="user_pw" placeholder="PASSWORD"><br/>
                <span class="input-label">패스워드 확인</span>
                <input type="password" id="user_rpw" placeholder="PASSWORD CHECK"><br/>

                <br/>
                <span class="btn btn-good" onclick="register()">완료!</span>
            </div>
        </section>
    </body>
</html>