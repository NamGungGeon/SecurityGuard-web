
<style>
    nav{
        position: fixed;
        width: 200px;
        height: 100%;
        z-index: 10;
        background-color: rgb(26, 188, 156);
        padding: 18px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
    }
    nav *{
        color: white;
    }

    nav> .top{
        
    }
    nav> .bottom{
        position: absolute;
        bottom: 50px;
    }
    nav .menus .menu{
        cursor: pointer;
        margin: 16px 0;
        padding-left: 0;
        transition-duration: 0.5s;
        transition-property: padding;
    }
    nav .menus .menu:hover{
        padding-left: 16px;
    }
</style>
<nav>
    <div class="top">
        <h2>시큐리티 가드</h2>
        <br/>
        <h4>관리자 페이지</h4>
    </div>

    <div class="bottom">
        <div class="menus">
            <div class="menu" onclick="window.location='./ads.php'">광고</div>
            <div class="menu" onclick="window.location='./notices.php'">공지사항</div>
            <div class="menu" onclick="window.location='./app.php'">앱 관리</div>
            <div class="menu" onclick="window.location='./locations.php'">위치 관리</div>
            <div class="menu" onclick="window.location='./users.php'">유저 관리</div>
            <div class="menu" onclick="window.location='./reports.php'">문의 목록</div>
            <div class="menu" onclick="window.location='./statistics.php'">통계</div>
        </div>
    </div>
</nav>
