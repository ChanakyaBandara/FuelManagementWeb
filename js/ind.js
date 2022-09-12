const packFr = document.getElementById('packFr');
const packIn = document.getElementById('packIn');
const packEl = document.getElementById('packEl');

const database = firebase.database();
Spinner();

Spinner.show();
database.ref('/Packages').on('value', snapshot => {
    console.log(Object.keys(snapshot.val()));
    var result = snapshot.val();
    packFr.innerHTML = result['Freshman']+ " LKR";
    packIn.innerHTML = result['Intermediate']+ " LKR";
    packEl.innerHTML = result['Elite']+ " LKR";
    Spinner.hide();
});