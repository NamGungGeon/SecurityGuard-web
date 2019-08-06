<html>
    <head>
        <?php
            //include_once "./components/basic.php";
            include_once "./components/head.php";
        ?>
        <link rel="stylesheet" href="./css/ads.css">
        <script src="./js/ads.js"></script>
    </head>
    <body>
        <?php include_once "./components/nav.php"?>
        <section>
            <div class="contents">
                <h1>광고 관리</h1>
                <p class="description">
                    해당 페이지가 정상적으로 표시되지 않을 경우 애드블럭을 종료하세요
                </p>
                <br/><br/>
                
                <h3>등록된 광고</h3>
                <p class="description" id="ads_status"></p>

                <div class="polaroid-box" id="ads">
                </div>

                <br/>
                
                <div class="cleanser"></div>
                <span class="btn btn-good" onclick="openCreateAdDialog()">신규 등록</span>
                <span class="btn btn-alert" onclick="openRemoveAllAdDialog()">광고 전체삭제</span>
            </div>
        </section>
    </body>
</html>