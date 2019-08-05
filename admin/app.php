<html>
    <head>
        <?php
            //include_once "./components/basic.php";
            include_once "./components/head.php";
        ?>
        <link rel="stylesheet" href="./css/app.css">
        <script src="./js/app.js"></script>
    </head>
    <body>
        <?php include_once "./components/nav.php"?>
        <section>
            <div class="contents">
                <h1>앱 버전 관리</h1>
                <br/><br/>
                
                <h3>실행 가능한 최소 버전</h3>
                <br/>
                <h5>
                    <span id="app-stable-version">
                        
                    </span>
                    &nbsp;&nbsp;&nbsp;
                </h5>

                <br/><br/>

                <h3>최신 버전</h3>
                <br/>
                <h5>
                    <span id="app-latest-version">
                        
                    </span>
                    &nbsp;&nbsp;&nbsp;
                </h5>
                <br/><br/>
                
                <span class="btn btn-good" onclick="openVersionUpdateDialog()">변경</span>
            </div>
        </section>
    </body>
</html>