module.exports = (req, res) => {
    res.render('moreInfo', {
        title: 'More info page',
        pageTit: 'Още информация',
        something: `
       
        <div class="more-info">
            <center>
                <h1>Необходими умения</h1>
            </center>
            <ul>
                <li>Managment</li>
                <li>Лидерски качества</li>
                <li>Изследователски умения</li>
                <li>Познания в здравната информатика</li>
                <li>Анализ на данни</li>
                <li>Умения за разработка на проект</li>
                <li>Продажби</li>
                <li>Стратегическо планиране</li>
                <li>Подобряване на процеси</li>
            </ul>

        </div>
        <div class="skills">
            <img src="/content/images/skills.png" alt="skills">
        </div>
        `
    });
}