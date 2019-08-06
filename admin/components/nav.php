
<style>
    nav{
        position: fixed;
        width: 200px;
        height: 100%;
        z-index: 10;
        background-color: rgb(26, 188, 156);
        padding: 8px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
    }
    nav *{
        color: white;
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
            <div class="menu" onclick="window.location='./statistics.php'">통계</div>
        </div>
    </div>
</nav>