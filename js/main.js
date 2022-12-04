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
                "<tr onclick=\"window.location.href = '" + getReDirectURL(result.sid, STATION) + "';\"><td>" +
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
                "<tr onclick=\"window.location.href = '" + getReDirectURL(result.cid, CUSTOMER) + "';\"><td>" +
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
                "<tr onclick=\"window.location.href = '" + getReDirectURL(result.vid, VEHICLE) + "';\"><td>" +
                result.reg_no +
                "</td><td>" +
                result.type +
                "</td><td>" +
                result.brand +
                "</td><td>" +
                result.model +
                "</td><td>" +
                result.fuel +
                "</td><td><a href='" + getReDirectURL(result.cid, CUSTOMER) + "'>" +
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
            "<thead><th>ID</th><th>Reg No</th><th>Vehicle Type</th><th>Fuel Type</th><th>Owner</th><th>Amount</th><th>Status</th></thead><tbody>"
        );
        result.forEach(function (result) {
            const badge = extendBadge(result.approval, result.eid);
            $("#tblExtends").append(
                "<tr><td>" +
                result.eid +
                "</td><td><a href='" + getReDirectURL(result.vid, VEHICLE) + "'>" +
                result.reg_no +
                "</a></td><td>" +
                result.type +
                "</td><td>" +
                result.fuel +
                "</td><td><a href='" + getReDirectURL(result.cid, CUSTOMER) + "'>" +
                result.name +
                "</a></td><td>" +
                result.amount +
                "</td><td>" +
                badge +
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
            "<thead><th>ID</th><th>Ref No</th><th>Name</th><th>Purpose</th><th>Amount</th><th>Status</th></thead><tbody>"
        );
        result.forEach(function (result) {
            const badge = specialQRBadge(result.approval, result.sqr_id);
            $("#tblSPQR").append(
                "<tr><td>" +
                result.sqr_id +
                "</td><td>" +
                result.ref +
                "</td><td><a href='" + getReDirectURL(result.cid, CUSTOMER) + "'>" +
                result.name +
                "</a></td><td>" +
                result.purpose +
                "</td><td>" +
                result.amount +
                "</td><td>" +
                badge +
                "</td></tr>"
            );
        });
        $("#tblSPQR").append("</tbody>");
    });
}

function viewstationdetails(ID) {

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

function viewcustomerdetails(ID) {

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

function viewvehicaldetails(ID) {
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

function viewfulequota() {
    $.ajax({
        url: "PHP/admin.php",
        method: "post",
        data: "loadfulequota=" + 5,
    }).done(function (result) {
        result = JSON.parse(result);
        quotaResult = result;
        console.log(result);
        $("#quotawidget").empty();
        result.forEach(function (result) {
            $("#quotawidget").append(
                "<div class='col-md-3 stretch-card grid-margin'><div class='card bg-gradient-danger card-img-holder text-white'><div class='card-body'><img src='images/dashboard/circle.svg' class='card-img-absolute' alt='circle-image' /> <h4 class='font-weight-normal mb-3'>" +
                result.type +
                "<i class='mdi mdi-chart-line mdi-24px float-right'></i></h4><h2 class='mb-5' id='packFr'>" +
                result.allowed_quota +
                " liters</h2><h6 class='card-text'>" +
                result.description +
                "</h6></div></div></div>"

            );
        });
        $("#quotaform").empty();
        result.forEach(function (result) {
            $("#quotaform").append(
                "<div class='row'><div class='col-md-8'><div class='form-group row'><label class='col-sm-4 col-form-label' style='color: #ffffff;'>" +
                result.type +
                "</label><div class='col-sm-8'><input type='number' name=vtid_" +
                result.vtid + " id=vtid_" + result.vtid +
                " class='form-control' placeholder='Enter new price here' value=" +
                result.allowed_quota +
                " /></div></div></div></div>"
            );
        });
        $("#quotaform").append('<button type="button" onclick="updateQuota()" class="btn btn-success btn-icon-text float-right"> Update <i class="mdi mdi-check-all btn-icon-append"></i></button>')
    });
}

function loadBowserArrivals() {
    $.ajax({
        url: "PHP/admin.php",
        method: "post",
        data: "loadBowserArrivals=" + 5,
    }).done(function (result) {
        console.log(result);
        result = JSON.parse(result);
        console.log(result);
        $("#tblBowserArrivals").empty();
        $("#tblBowserArrivals").append(
            "<thead><th>Date</th><th>Station</th><th>Fuel Type</th><th>Amount</th><th>Status</th></thead><tbody>"
        );
        result.forEach(function (result) {
            $("#tblBowserArrivals").append(
                "<tr><td>" +
                result.timestamp +
                "</td><td>" +
                result.name +
                "</td><td>" +
                result.fuel +
                "</td><td>" +
                result.amount +
                "</td><td>" +
                bowserBadge(result.fa_id, result.status) +
                "</td></tr>"
            );
        });
        $("#tblBowserArrivals").append("</tbody>");
    });
}

function loadComplaints() {
    $.ajax({
        url: "PHP/admin.php",
        method: "post",
        data: "loadComplaints=" + 5,
    }).done(function (result) {
        result = JSON.parse(result);
        console.log(result);
        $("#tblComplaints").empty();
        $("#tblComplaints").append(
            "<thead><th>Compaint ID</th><th>Date Time</th><th>Customer</th><th>Description</th></thead><tbody>"
        );
        result.forEach(function (result) {
            $("#tblComplaints").append(
                "<tr><td>" +
                result.COID +
                "</td><td>" +
                result.timestamp +
                "</td><td>" +
                result.name +
                "</td><td>" +
                result.note +
                "</td></tr>"
            );
        });
        $("#tblComplaints").append("</tbody>");
    });
}

function loadCancelRecords() {
    $.ajax({
        url: "PHP/admin.php",
        method: "post",
        data: "loadCancelRecords=" + 5,
    }).done(function (result) {
        result = JSON.parse(result);
        console.log(result);
        $("#tblRecordCancel").empty();
        $("#tblRecordCancel").append(
            "<thead><th>Cancellation ID</th><th>Date Time</th><th>Vehicle Reg</th><th>Fuel Station</th><th>Fuel Type</th><th>Amount</th><th>Status</th></thead><tbody>"
        );
        result.forEach(function (result) {
            const badge = cancellationBadge(result.status, result.rid);
            $("#tblRecordCancel").append(
                "<tr><td>" +
                result.rid +
                "</td><td>" +
                result.timestamp +
                "</td><td>" +
                result.reg_no +
                "</td><td>" +
                result.name +
                "</td><td>" +
                result.fuel +
                "</td><td>" +
                result.amount +
                "</td><td>" +
                badge +
                "</td></tr>"
            );
        });
        $("#tblRecordCancel").append("</tbody>");
    });
}

function getReDirectURL(Id, type) {
    switch (type) {
        case STATION:
            return "view_station_details.html?ID=" + Id;
        case CUSTOMER:
            return "view_customer_details.html?ID=" + Id;
        case VEHICLE:
            return "view_vehicles_details.html?ID=" + Id;
        default:
            return "/";
    }
}

function extendBadge(sts, vlv) {
    var bg;
    if (sts == 0) {
        bg = "<button onclick='extendAccept(this.value)' class='btn btn-sm bg-warning' value=" + vlv + ">Activate</button>";
    } else if (sts == 1) {
        bg = "<span class='badge badge-sm badge-success'>Active</span>";
    }
    return bg;
}

function cancellationBadge(sts, vlv) {
    var bg;
    if (sts == 1) {
        bg = "<button onclick='cancelRecord(this.value)' class='btn btn-sm bg-danger' value=" + vlv + ">Cancel</button>";
    } else if (sts == 2) {
        bg = "<span class='badge badge-sm badge-warning'>Cancelled</span>";
    }
    return bg;
}

function specialQRBadge(sts, vlv) {
    var bg;
    if (sts == 0) {
        bg = "<button onclick='specialQRAccept(this.value)' class='btn btn-sm bg-warning' value=" + vlv + ">Activate</button>";
    } else if (sts == 1) {
        bg = "<span class='badge badge-sm badge-success'>Active</span>";
    }
    return bg;
}

function bowserBadge(ID, sts) {
    var op0 = "";
    var op1 = "";
    var op2 = "";
    var op3 = "";
    if (sts == 0) {
        op0 = "selected";
    } else if (sts == 1) {
        op1 = "selected";
    } else if (sts == 2) {
        op2 = "selected";
    } else if (sts == 3) {
        op3 = "selected";
    }
    var item = "<select onchange='bowserAccept(" + ID + ",this)'><option value=0 " + op0 + ">Pending</option><option value=1 " + op1 + ">On Route</option><option value=2 " + op2 + ">Arrived</option><option value=3 " + op3 + ">Will be delay</option></select>";
    return item;
}

function extendAccept(value) {
    $.ajax({
        url: "PHP/admin.php",
        method: "post",
        data: "updateExtend=" + value,
    }).done(function (result) {
        console.log(result);
        result = JSON.parse(result);
        if (result.Status = "1") {
            loadExtends();
        }
    });
}

function cancelRecord(value) {
    $.ajax({
        url: "PHP/admin.php",
        method: "post",
        data: "cancelRecord=" + value,
    }).done(function (result) {
        console.log(result);
        result = JSON.parse(result);
        if (result.Status = "1") {
            loadCancelRecords();
        }
    });
}

function specialQRAccept(value) {
    $.ajax({
        url: "PHP/admin.php",
        method: "post",
        data: "updatespecialQR=" + value,
    }).done(function (result) {
        console.log(result);
        result = JSON.parse(result);
        if (result.Status = "1") {
            loadSPQR();
        }
    });
}

function bowserAccept(id, selectObject) {
    var value = selectObject.value;
    $.ajax({
        url: "PHP/admin.php",
        method: "post",
        data: "updateBowserArrivals=" + id + "&status=" + value,
    }).done(function (result) {
        console.log(result);
        result = JSON.parse(result);
        if (result.Status = "1") {
            loadBowserArrivals();
        }
    });
}

function updateQuota() {
    $.ajax({
        url: "PHP/admin.php",
        method: "post",
        data: $('form').serialize(),
    }).done(function (result) {
        console.log(result);
        result = JSON.parse(result);
        if (result.Status = "1") {
            viewfulequota();
        }
    });
}

function drawchart(statData) {


    google.charts.load('current', {
        'packages': ['bar']
    });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

        tempArr = [['Week', 'Petrol', 'Super Petrol', 'Diesel', 'SuperDiesel']];
        statData.forEach(function (result) {
            tempArr.push(result);
        });
        console.log(tempArr);
        var data = google.visualization.arrayToDataTable(tempArr);

        var options = {
            chart: {
                title: 'Fuel Distribution',
            }
        };

        var chart = new google.charts.Bar(document.getElementById('curve_chart'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
    }
}

function getReportData(){
    $.ajax({
        url: "PHP/admin.php",
        method: "post",
        data: "getReportStat=" + 5,
    }).done(function (result) {
        console.log(result);
        result = JSON.parse(result);
        result.sort( compare );
        console.log(result);
        statData = [];
        result.forEach(function (result) {
            row = [result.week,result.petrol?Number(result.petrol):0,result.superPetrol?Number(result.superPetrol):0,result.diesel?Number(result.diesel):0,result.superDiesel?Number(result.superDiesel):0];
            statData.push(row);
        });
        console.log(statData);
        drawchart(statData);
    });
}

function compare( a, b ) {
    if ( a.week < b.week ){
      return -1;
    }
    if ( a.week > b.week ){
      return 1;
    }
    return 0;
  }