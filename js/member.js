const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const txtName = document.getElementById('txtName');
const txtEmail = document.getElementById('txtEmail');
const txtPhone = document.getElementById('txtPhone');
const txtAge = document.getElementById('txtAge');
const txtGender = document.getElementById('txtGender');
const txtHeight = document.getElementById('txtHeight');
const txtWeight = document.getElementById('txtWeight');

const txtChe = document.getElementById('txtChe');
const txtSho = document.getElementById('txtSho');
const txtArm = document.getElementById('txtArm');
const txtAbs = document.getElementById('txtAbs');
const txtLeg = document.getElementById('txtLeg');
const txtBac = document.getElementById('txtBac');

const workoutList = document.getElementById('workoutList');
const reps = document.getElementById('reps');
const sets = document.getElementById('sets');
const tblWorkout = document.getElementById('tblWorkout');

const addBtn = document.getElementById('submit');
const updatePro = document.getElementById('updatePro');

const database = firebase.database();
const storageRef = firebase.storage().ref();


Spinner();

// Create the file metadata
var metadata = { contentType: 'image/png' };
var UID;
var result2;
console.log(urlParams.has('UID'));
if (urlParams.has('UID')) {
    UID = urlParams.get('UID')
    console.log("UID = " + UID);
    database.ref('/Users/' + UID).on('value', snapshot => {

        console.log(snapshot.val());
        results = snapshot.val();
        if (results !== null) {
            txtName.innerHTML = results['name'];;
            txtEmail.innerHTML = results['email'];
            txtPhone.innerHTML = results['contact'];
            txtAge.innerHTML = results['age'];
            txtGender.innerHTML = results['gender'];
            txtHeight.innerHTML = results['height']+" cm";
            txtWeight.innerHTML = results['weight']+" kg";
            //loadtbl(IID_temp);
        } else {
            console.log("Not Found!");
        }


    });
}

Spinner.show();
database.ref('/Exercise').on('value', snapshot => {
    console.log(Object.keys(snapshot.val()));
    workoutList.innerHTML = "";
    var str = "";
    var temp = Object.keys(snapshot.val());
    var i = 0 ;
    result2 = snapshot.val();
    temp.forEach(function (result1) {
        i++;
        results = result2[result1]
        str = str + '<option value="' + result1 + '">' + results['Exercise'] + '</option>';

    });
    workoutList.innerHTML = str;
    //Spinner.hide();
});

database.ref().child('Workouts').orderByChild('uid').equalTo(UID).on('value', snapshot => {
    console.log(Object.keys(snapshot.val()));
    tblWorkout.innerHTML = "";
    var str = "";
    var temp = Object.keys(snapshot.val());
    var i = 0 ;
    var result2tenp = snapshot.val();
    temp.forEach(function (result1) {
        i++;
        results = result2tenp[result1]
        str = str + '<tr><td><img src="' + results['imgURL'] + '" class="img-thumbnail rounded-circle mr-3" alt="image"></td><td>' + results['exercise'] + '</td><td>' + results['cat'] + '</td><td>' + results['reps'] + '</td><td>' + results['sets'] + '</td><td class="text-danger"><button type="button" onclick="myRemoveFunction(\'' + result1 + '\')" class="btn btn-inverse-danger btn-icon"><i class="mdi mdi mdi-close"></i></button></td></tr>';

    });
    tblWorkout.innerHTML = str;
    Spinner.hide();
});

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    resulttemp = result2[workoutList.value]
    var newPostKey = firebase.database().ref().child('Workouts').push().key;
    database.ref('/Workouts/' + newPostKey).set({
        uid: UID,
        reps: reps.value,
        sets: sets.value,
        exercise: resulttemp['Exercise'],
        cat: resulttemp['Cat'],
        imgURL: resulttemp['ImgURL']
    });
});

updatePro.addEventListener('click', (e) => {
    e.preventDefault();
    database.ref('/Users/' + UID).update({
        txtChe: txtChe.value,
        txtSho: txtSho.value,
        txtArm: txtArm.value,
        txtAbs: txtAbs.value,
        txtLeg: txtLeg.value,
        txtBac: txtBac.value
    });
});

function myRemoveFunction(id){
    console.log(id);
    database.ref('/Workouts/' + id).remove();
}
