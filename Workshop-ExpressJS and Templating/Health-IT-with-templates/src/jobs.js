module.exports = (req, res) => {
    res.render('jobs', {
        title: 'Професии',
        href: '/jobs',
        heading: 'Работни длъжности',
        image: `
        <div class="image">
            <img src="/content/images/healthIT.jpg" alt="The beginning of site" class="firstImage">
        </div>
        `,
    })
}