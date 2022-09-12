
const tbodylist = document.getElementById('tblEXPRO');

const database = firebase.database();

Spinner();
Spinner.show();
database.ref('/Payments').on('value', snapshot => {
    
    console.log(Object.keys(snapshot.val()));
    tbodylist.innerHTML = "";
    var str = "";
    var i =0;
    var temp = Object.keys(snapshot.val());
    temp.forEach(function (result1) {
        i++;
        result2 = snapshot.val();
        results = result2[result1]
        str = str + '<tr><td>' + i + '</td><td id="'+results['UID']+'">' + loadname(results['UID']) + '</td><td>' + results['Date'] + '</td><td>' + results['Package'] + '</td><td>' + results['Amount'] + '</td></tr>';

    });
    tbodylist.innerHTML = str;
    Spinner.hide();
});

function loadname(uid){
    database.ref('/Users/' + uid).once('value').then(function(snapshot) {
        var username = (snapshot.val() && snapshot.val().name) || 'Anonymous';
        document.getElementById(uid).innerHTML = username;
      });
}



