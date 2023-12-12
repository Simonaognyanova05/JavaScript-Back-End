function deletePage(req, res) {
    res.send(`
        <script>
            var confirmation = confirm("Are you sure?");
            if (confirmation) {
                // Изпращане на DELETE заявка от клиента
                var xhr = new XMLHttpRequest();
                xhr.open('DELETE', '/delete/${req.params.carId}', true);
                xhr.onload = function () {
                    if (xhr.status === 200) {
                        // Презареждане на страницата (връщане към началната страница)
                        window.location.href = '/';
                    } else {
                        window.location.href = '/';

                    }
                };
                xhr.send();
            } else {
                alert("Действието е отказано.");
            }
        </script>
    `);
}

module.exports = { deletePage };