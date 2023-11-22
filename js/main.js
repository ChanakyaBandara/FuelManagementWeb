$("form#fileForm").on("submit", function (e) {
    console.log(e)
    e.preventDefault();
    var formData = new FormData(this);
    console.log(formData)
    Spinner();
    Spinner.show();
    $.ajax({
        url: "PHP/backend.php",
        type: 'POST',
        data: formData,
        dataType: 'json',
        contentType: false,
        cache: false,
        processData: false,
    }).done(function (result) {
        Spinner.hide();
        console.log(result);
        alert("Record Saved !");
        $('form#fileForm')[0].reset();
    })
});

function loadDocs() {
    $.ajax({
        url: "PHP/backend.php",
        method: "post",
        data: "load_docs=" + 5,
    }).done(function (result) {
        result = JSON.parse(result);
        console.log(result);
        $("#tbl_docs").empty();
        $("#tbl_docs").append(
            "<thead><th>ID</th><th>System Name</th><th>File Name</th><th>Description</th><th>Timestamp</th></thead><tbody>"
        );
        result.forEach(function (result) {
            $("#tbl_docs").append(
                "<tr onclick=\"window.location.href = 'doc_details.html?ID=" + result.DID + "';\"><td>" +
                result.DID +
                "</td><td>" +
                result.system_name +
                "</td><td>" +
                result.file_name +
                "</td><td>" +
                result.discription +
                "</td><td>" +
                result.timestamp +
                "</td></tr>"
            );
        });
        $("#tbl_docs").append("</tbody>");
    });
}