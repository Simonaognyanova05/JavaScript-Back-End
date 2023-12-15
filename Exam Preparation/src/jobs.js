module.exports = (req, res) => {
    res.render('jobs', {
        title: 'Jobs page',
        pageTit: 'Работни длъжности',
        something: `
        <div class="image">
            <img src="/content/images/healthIT.jpg" alt="The beginning of site" class="firstImage">
        </div>
        `
    });
}