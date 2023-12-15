module.exports = (req, res) => {
    res.render('outlook', {
        title: 'Outlook page',
        pageTit: 'Преспективи',
        something: `
        <div class="card">
            <p>Огромният растеж в областта на кариерата в здравната информатика беше стимулиран до голяма степен от
                ускоряването на приемането на електронни здравни досиета (EHR), предизвикано от насърчителната програма
                за „смислена употреба“ на Центровете за Medicare и Medicaid Services.</p>
        </div>



        <div class="card">
            <p>Тъй като доставчиците започнаха бързо да възприемат ЕЗД, които са предназначени да съхраняват и споделят
                информация от всички доставчици, участващи в грижите за пациента, специалистите по здравна информатика
                ще продължат да помагат на здравните заведения да внедряват нови системи, да надграждат съществуващите
                бази данни и да работят за разработването на напълно оперативно съвместима здравна система.</p>
        </div>
        <div class="card">
            <p>Според Бюрото по трудова статистика се предвижда заетостта на специалисти по здравна информация и техници
                да нарасне с 8% от 2019 г. до 2029 г., което е двойно повече от средния темп на растеж за всички
                професии в САЩ.</p>
        </div>
    </div>

    <div class="info-image">
        <a href="https://www.usfhealthonline.com/resources/health-informatics/what-is-health-informatics/"><img
                src="/content/images/screenshot.png" alt="info"></a>
        <a href="https://www.usfhealthonline.com/resources/health-informatics/what-is-health-informatics/"><img
                src="/content/images/screenshot2.png" alt="info"></a>

    </div>

        `
    });
}