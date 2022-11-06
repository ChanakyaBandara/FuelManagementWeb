function loadStation() {
    $.ajax({
        url: "PHP/admin.php",
        method: "post",
        data: "loadStation=" + 5,
    }).done(function (result) {
        result = JSON.parse(result);
        console.log(result);
        //`sid`, `name`, `email`, `reg_no`, `city`, `address`, `phone`, `lat`, `lon`, `lid` FROM `station`
        $("#tblStations").empty();
        $("#tblStations").append(
            "<thead><th>Station ID</th><th>Name</th><th>Reg No</th><th>Location</th><th>Phone</th></thead><tbody>"
        );
        result.forEach(function (result) {
            $("#tblStations").append(
                "<tr><td>" +
                result.sid +
                "</td><td>" +
                result.name +
                "</td><td>" +
                result.reg_no +
                "</td><td>" +
                result.address +
                "</td><td>" +
                result.phone +
                "</td></tr>"
            );
        });
        $("#tblStations").append("</tbody>");
    });
}

function loadCustomer() {
    $.ajax({
        url: "PHP/admin.php",
        method: "post",
        data: "loadCustomer=" + 5,
    }).done(function (result) {
        result = JSON.parse(result);
        console.log(result);
        $("#tblCustomers").empty();
        $("#tblCustomers").append(
            "<thead><th>ID</th><th>Name</th><th>NIC</th><th>Location</th><th>Phone</th></thead><tbody>"
        );
        result.forEach(function (result) {
            $("#tblCustomers").append(
                "<tr><td>" +
                result.cid +
                "</td><td>" +
                result.name +
                "</td><td>" +
                result.nic +
                "</td><td>" +
                result.address +
                "</td><td>" +
                result.phone +
                "</td></tr>"
            );
        });
        $("#tblCustomers").append("</tbody>");
    });
}

function loadVehicle() {
    $.ajax({
        url: "PHP/admin.php",
        method: "post",
        data: "loadVehicle=" + 5,
    }).done(function (result) {
        result = JSON.parse(result);
        console.log(result);
        $("#tblVehicles").empty();
        $("#tblVehicles").append(
            "<thead><th>Reg No</th><th>Type</th><th>Brand</th><th>Model</th><th>Fuel Type</th><th>Owner</th></thead><tbody>"
        );
        result.forEach(function (result) {
            $("#tblVehicles").append(
                "<tr><td>" +
                result.reg_no +
                "</td><td>" +
                result.type +
                "</td><td>" +
                result.brand +
                "</td><td>" +
                result.model +
                "</td><td>" +
                result.fuel +
                "</td><td>" +
                result.name +
                "</td></tr>"
            );
        });
        $("#tblVehicles").append("</tbody>");
    });
}

function loadExtends() {
    $.ajax({
        url: "PHP/admin.php",
        method: "post",
        data: "loadExtends=" + 5,
    }).done(function (result) {
        result = JSON.parse(result);
        console.log(result);
        $("#tblExtends").empty();
        $("#tblExtends").append(
            "<thead><th>ID</th><th>Reg No</th><th>Vehicle Type</th><th>Fuel Type</th><th>Owner</th><th>Week</th><th>Amount</th></thead><tbody>"
        );
        result.forEach(function (result) {
            $("#tblExtends").append(
                "<tr><td>" +
                result.eid +
                "</td><td>" +
                result.reg_no +
                "</td><td>" +
                result.type +
                "</td><td>" +
                result.fuel +
                "</td><td>" +
                result.name +
                "</td><td>" +
                result.week +
                "</td><td>" +
                result.amount +
                "</td></tr>"
            );
        });
        $("#tblExtends").append("</tbody>");
    });
}

function loadSPQR() {
    $.ajax({
        url: "PHP/admin.php",
        method: "post",
        data: "loadSPQR=" + 5,
    }).done(function (result) {
        result = JSON.parse(result);
        console.log(result);
        $("#tblSPQR").empty();
        $("#tblSPQR").append(
            "<thead><th>ID</th><th>Ref No</th><th>Name</th><th>Purpose</th><th>Amount</th></thead><tbody>"
        );
        result.forEach(function (result) {
            $("#tblSPQR").append(
                "<tr><td>" +
                result.sqr_id +
                "</td><td>" +
                result.ref +
                "</td><td>" +
                result.name +
                "</td><td>" +
                result.purpose +
                "</td><td>" +
                result.amount +
                "</td></tr>"
            );
        });
        $("#tblSPQR").append("</tbody>");
    });
}