function deletePage(req, res) {
    res.send(`
        <script>
            var confirmation = confirm("Are you sure?");
            if (confirmation) {
                // Изпращане на DELETE заявка от клиента
                var xhr = new XMLHttpRequest();
                xhr.open('DELETE', '/admin/delete/${req.params.carId}', true);
                xhr.onload = function () {
                    if (xhr.status === 200) {
                        // Презареждане на страницата (връщане към началната страница)
                        window.location.href = '/admin/catalog';
                    } else {
                        window.location.href = '/admin/catalog';

                    }
                };
                xhr.send();
            } else {
                alert("Canceled.");
            }
        </script>
    `);
}

module.exports = { deletePage };