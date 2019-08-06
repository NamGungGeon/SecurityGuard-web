<html>
    <head>
        <?php
            //include_once "./components/basic.php";
            include_once "./components/head.php";
        ?>
        <script src="./js/report.js"></script>
    </head>
    <body>
        <?php include_once "./components/nav.php"?>
        <section>
            <div class="contents">
                <h1>불편/건의사항 문의</h1>
                <p class="description">문의내용은 전량 운영진이 정성껏 검토합니다</p>
                <br/><br/>
                
                <span class="input-label">답변받을 이메일</span>
                <input type="text" id="report_email" placeholder="답변이 필요하지 않은 문의일 경우 생략"><br/>
                <span class="input-label">제목</span>
                <input type="text" id="report_title" placeholder="문의 내용의 제목을 입력해주세요"><br/>
                <span class="input-label">내용</span>
                <textarea id="report_content" placeholder="문의 내용을 자세히 입력해주세요" style="height: 180px"></textarea>
                <br/>

                <br/>
                <span class="btn btn-good" onclick="submitReport()">제출</span>
            </div>
        </section>
    </body>
</html>