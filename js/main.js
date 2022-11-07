const STATION = "STATION"
const VEHICLE = "VEHICLE"
const CUSTOMER = "CUSTOMER"

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
                "<tr onclick=\"window.location.href = '"+getReDirectURL(result.sid,STATION)+"';\"><td>" +
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
                "<tr onclick=\"window.location.href = '"+getReDirectURL(result.cid,CUSTOMER)+"';\"><td>" +
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
                "<tr onclick=\"window.location.href = '"+getReDirectURL(result.vid,VEHICLE)+"';\"><td>" +
                result.reg_no +
                "</td><td>" +
                result.type +
                "</td><td>" +
                result.brand +
                "</td><td>" +
                result.model +
                "</td><td>" +
                result.fuel +
                "</td><td><a href='"+getReDirectURL(result.cid,CUSTOMER)+"'>" +
                result.name +
                "</a></td></tr>"
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
                "</td><td><a href='"+getReDirectURL(result.vid,VEHICLE)+"'>" +
                result.reg_no +
                "</a></td><td>" +
                result.type +
                "</td><td>" +
                result.fuel +
                "</td><td><a href='"+getReDirectURL(result.cid,CUSTOMER)+"'>" +
                result.name +
                "</a></td><td>" +
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
                "</td><td><a href='"+getReDirectURL(result.cid,CUSTOMER)+"'>" +
                result.name +
                "</a></td><td>" +
                result.purpose +
                "</td><td>" +
                result.amount +
                "</td></tr>"
            );
        });
        $("#tblSPQR").append("</tbody>");
    });
}

function viewstationdetails(ID){

    $.ajax({
        url: "PHP/admin.php",
        method: "post",
        data: "loadStationById=" + ID,
    }).done(function (result) {
        result = JSON.parse(result);
        console.log(result);
        //`sid`, `name`, `email`, `reg_no`, `city`, `address`, `phone`, `lat`, `lon`, `lid` FROM `station`
        $("#tblStationsdetails").empty();
        $("#tblStationsdetails").append(
            "<thead><th>Station ID</th><th>Name</th><th>Reg No</th><th>Location</th><th>Phone</th><th>Email</th></thead><tbody>"
        );
        result.forEach(function (result) {
            $("#tblStationsdetails").append(
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
                "</td><td>" +
                result.email +
                "</td></tr>"
            );
        });
        $("#tblStationsdetails").append("</tbody>");
    });
}

function viewcustomerdetails(ID){

    $.ajax({
        url: "PHP/admin.php",
        method: "post",
        data: "loadCustomerdetails=" + ID,
    }).done(function (result) {
        result = JSON.parse(result);
        console.log(result);
        $("#tblCustomersdetails").empty();
        $("#tblCustomersdetails").append(
            "<thead><th>ID</th><th>Name</th><th>NIC</th><th>Location</th><th>Phone</th></thead><tbody>"
        );
        result.forEach(function (result) {
            $("#tblCustomersdetails").append(
                "<tr><td>" +
                result.cid +
                "</td><td> " +
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
        $("#tblCustomersdetails").append("</tbody>");
    });
}
function viewvehicaldetails(ID){
    $.ajax({
        url: "PHP/admin.php",
        method: "post",
        data: "loadVehicledetails=" + ID,
    }).done(function (result) {
        result = JSON.parse(result);
        console.log(result);
        $("#tblVehiclesdetails").empty();
        $("#tblVehiclesdetails").append(
            "<thead><th>Reg No</th><th>Type</th><th>Brand</th><th>Model</th><th>Fuel Type</th><th>Owner</th></thead><tbody>"
        );
        result.forEach(function (result) {
            $("#tblVehiclesdetails").append(
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
        $("#tblVehiclesdetails").append("</tbody>");
    });
}

function viewfulequota(){
    $.ajax({
        url: "PHP/admin.php",
        method: "post",
        data: "loadfulequota=" + 5,
    }).done(function (result) {
        result = JSON.parse(result);
        console.log(result);
        $("#quotawidget").empty();
        result.forEach(function (result) {
            $("#quotawidget").append(
                "<div class='col-md-3 stretch-card grid-margin'><div class='card bg-gradient-danger card-img-holder text-white'><div class='card-body'><img src='images/dashboard/circle.svg' class='card-img-absolute' alt='circle-image' /> <h4 class='font-weight-normal mb-3'>"+
                result.type+
                "<i class='mdi mdi-chart-line mdi-24px float-right'></i></h4><h2 class='mb-5' id='packFr'>"+
                result.allowed_quota
                +"</h2><h6 class='card-text'>"+
                result.description
                +"</h6></div></div></div>"

            );
        });
        $("#quotaform").empty();
        result.forEach(function (result) {
            $("#quotaform").append(
                "<div class='row'><div class='col-md-8'><div class='form-group row'><label class='col-sm-4 col-form-label' style='color: #ffffff;'>"+
                result.type+
                "</label><div class='col-sm-8'><input type='number' name="+
                result.vtid+
                " class='form-control' placeholder='Enter new price here' value="+
                result.allowed_quota+
                " /></div></div></div></div>"

            );
        });
    });
}

function getReDirectURL(Id,type){
    switch(type) {
      case STATION:
        return "view_station_details.html?ID="+Id;
      case CUSTOMER:
        return "view_customer_details.html?ID="+Id;
      case VEHICLE:
        return "view_vehicles_details.html?ID="+Id;
      default:
        return "/";
    }
  }


