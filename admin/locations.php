<html>
    <head>
        <?php
            //include_once "./components/basic.php";
            include_once "./components/head.php";
        ?>
        <link rel="stylesheet" href="./css/locations.css">
        <script src="./js/locations.js"></script>
    </head>
    <body>
        <?php include_once "./components/nav.php"?>
        <section>
            <div class="contents">
                <h1>위치 관리</h1>
                <br/><br/>
                
                <h3>위치 목록</h3>
                <p class="description" id="locations_status"></p>

                <br/>
                <div id="locations"></div>
                <br/><br/><br/>
                <span class="btn btn-good" onclick="openCreateLocationDialog()">장소 추가</span>
                
            </div>
        </section>
    </body>
</html>