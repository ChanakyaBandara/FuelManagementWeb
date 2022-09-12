const tbodylist = document.getElementById('tblview');

const database = firebase.database();
const storageRef = firebase.storage().ref();
Spinner();
Spinner.show();
database.ref('/Users').on('value', snapshot => {
    
    console.log(Object.keys(snapshot.val()));
    tbodylist.innerHTML = "";
    var str = "";
    var temp = Object.keys(snapshot.val());
    temp.forEach(function (result1) {
        result2 = snapshot.val();
        results = result2[result1]
        str = str + '<tr onclick="myFunction(\'' + result1 + '\')"><td>' + results['name'] + '</td><td>' + results['age'] + '</td><td>' + results['gender'] + '</td><td>' + results['height'] + '</td><td>' + results['weight'] + '</td><td>' + results['BMI'] + '</td></tr>';

    });
    tbodylist.innerHTML = str;
    Spinner.hide();
});
function myFunction(id){
    console.log(id);
    window.location.href = "member.html?UID="+encodeURI(id);
}