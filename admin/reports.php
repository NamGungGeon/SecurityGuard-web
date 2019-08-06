<html>
    <head>
        <?php
            //include_once "./components/basic.php";
            include_once "./components/head.php";
        ?>
        <link rel="stylesheet" href="./css/reports.css">
        <script src="./js/reports.js"></script>
    </head>
    <body>
        <?php include_once "./components/nav.php"?>
        <section>
            <div class="contents">
                <h1>등록된 문의</h1>
                <br/><br/>
                
                <h3>미해결된 공지사항</h3>
                <p class="description" id="unresolved_status"></p>

                <div class="polaroid-box" id="unresolved">
                </div>

                <br/><br/>

                <h3>해결된 공지사항</h3>
                <p class="description" id="resolved_status"></p>

                <div class="polaroid-box" id="resolved">
                </div>
                
                <br/><br/>

                <span class="btn btn-alert" onclick="openDeleteReportsDialog()">해결된 답변 전부 삭제</span>
                
            </div>
        </section>
    </body>
</html>