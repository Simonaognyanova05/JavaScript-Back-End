module.exports = (req, res) => {
    res.render('healthIT', {
        title: 'Health IT page',
        pageTit: 'Същност',
        something: `
        <div class="image">
        <div class="information">
          <h1>Какво е здравна информатика?</h1>
          <p>
            Здравна информатика е термин, който описва придобиването, съхранението, извличането и използването на здравна
            информация за насърчаване на по-добро сътрудничество между различните доставчици на здравни услуги на
            пациента. Здравната информатика играе решаваща роля в натиска към реформа в здравеопазването.
          </p>
  
          <p>
            Здравната информатика е развиваща се специализация, която свързва информационните технологии, комуникациите и
            здравеопазването, за да подобри качеството и безопасността на грижите за пациентите.
          </p>
        </div>
      </div>
        `
    });
}