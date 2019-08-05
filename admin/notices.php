<html>
    <head>
        <?php
            //include_once "./components/basic.php";
            include_once "./components/head.php";
        ?>
        <link rel="stylesheet" href="./css/notices.css">
        <script src="./js/notices.js"></script>
    </head>
    <body>
        <?php include_once "./components/nav.php"?>
        <section>
            <div class="contents">
                <div class="contents">
                    <h1>공지사항 관리</h1>
                    <br/><br/>
                    
                    <h3>등록된 공지사항</h3>
                    <p class="description" id="notices_status"></p>

                    <div class="polaroid-box" id="notices">
                    </div>

                    <br/>
                    
                    <div class="cleanser"></div>
                    <span class="btn btn-good" onclick="openCreateNoticeDialog()">신규 등록</span>
                    <span class="btn btn-alert" onclick="openRemoveAllNoticeDialog()">공지사항 전체삭제</span>
                </div>
            </div>
        </section>
    </body>
</html>