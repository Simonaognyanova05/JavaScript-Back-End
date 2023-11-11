module.exports = (req, res) => {
    res.render('home', {
        title: 'Home page', 
        heading: 'Начало',
        image: '<div class="image"><img src="/content/images/image2.png" alt="The beginning of site" class="firstImage"> </div>',
        href: '/'
    });
}