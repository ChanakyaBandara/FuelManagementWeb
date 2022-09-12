const Updatebtn = document.getElementById('Updatebtn');

const packFr = document.getElementById('packFr');
const packIn = document.getElementById('packIn');
const packEl = document.getElementById('packEl');
const txtFr = document.getElementById('txtFr');
const txtIn = document.getElementById('txtIn');
const txtEl = document.getElementById('txtEl');

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

Updatebtn.addEventListener('click', (e) => {
    e.preventDefault();

    database.ref('/Packages' ).update({
        Freshman: txtFr.value,
        Intermediate: txtIn.value,
        Elite: txtEl.value
    });
});
