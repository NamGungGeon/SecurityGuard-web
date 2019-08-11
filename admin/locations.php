<html>
    <head>
        <?php
            //include_once "./components/basic.php";
            include_once "./components/head.php";
        ?>
        <link rel="stylesheet" href="./css/locations.css">
        <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=a87a5f176391f8d0aed86f60921f9dbc"></script>
        <script src="./js/locations.js"></script>
    </head>
    <body>
        <?php include_once "./components/nav.php"?>
        <section>
            <div class="contents">
                <h1 style="position: fixed">위치 관리</h1>
                <br/><br/>
                <div class="map_wrapper">
                    <div id="map"></div>
                </div>
                <div class="layout_rights">
                    <h3>위치 목록</h3>
                    <p class="description" id="locations_status"></p>

                    <br/>
                    <div id="locations"></div>
                    <br/><br/><br/>
                    <span class="btn btn-good" onclick="openCreateLocationDialog()">장소 추가</span>
                    
                </div>
            </div>
        </section>
    </body>
</html>