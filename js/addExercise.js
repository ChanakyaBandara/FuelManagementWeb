const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const Exercise = document.getElementById('Exercise');
const Cat = document.getElementById('Cat');
const image = document.getElementById('imageselect');
const imageview = document.getElementById('imageview');

const tbodylist = document.getElementById('extbl');


const submit = document.getElementById('submit');

const database = firebase.database();
const storageRef = firebase.storage().ref();

Spinner();

// Create the file metadata
var metadata = { contentType: 'image/png' };

console.log(urlParams.has('NIC'));
if (urlParams.has('NIC')) {
    var NIC = urlParams.get('NIC')
    console.log("NIC = " + NIC);
    database.ref('/Customer/' + NIC).on('value', snapshot => {

        console.log(snapshot.val());
        results = snapshot.val();
        if (results !== null) {
            contact_Full_name.value = results['contact_Full_name'];
            Customer_id.value = results['Customer_id'];
            Customer_email.value = results['Customer_email'];
            Customer_phone.value = results['Customer_phone'];
            Customer_license_no.value = results['Customer_license_no'];
            birth_daytxt.value = results['birth_daytxt'];
            addresstxt.value = results['addresstxt'];
            imageview.src = results['ImgURL'];
        } else {
            console.log("Customer Not Found!");
        }


    });
}


Spinner.show();
database.ref('/Exercise').on('value', snapshot => {
    console.log(Object.keys(snapshot.val()));
    tbodylist.innerHTML = "";
    var str = "";
    var temp = Object.keys(snapshot.val());
    var i = 0 ;
    temp.forEach(function (result1) {
        i++;
        result2 = snapshot.val();
        results = result2[result1]
        str = str + '<tr onclick="myFunction(\'' + result1 + '\')"><td>' + i + '</td><td><img src="' + results['ImgURL'] + '" class="img-thumbnail rounded-circle mr-3" alt="image"></td><td>' + results['Exercise'] + '</td><td>' + results['Cat'] + '</td></tr>';

    });
    tbodylist.innerHTML = str;
    Spinner.hide();
});

submit.addEventListener('click', (e) => {
    e.preventDefault();

    var file = image.files[0];
    var now = new Date();

    var timestamp = now.getFullYear().toString(); // 2011
    timestamp += (now.getMonth < 9 ? '0' : '') + now.getMonth().toString(); // JS months are 0-based, so +1 and pad with 0's
    timestamp += ((now.getDate < 10) ? '0' : '') + now.getDate().toString(); // pad with a 0
    timestamp += now.getHours().toString(); // 2011
    timestamp += now.getMinutes().toString(); // 2011
    timestamp += now.getSeconds().toString(); // 2011
    timestamp += now.getMilliseconds().toString(); // 2011
    //...etc... with .getHours(), getMinutes(), getSeconds(), getMilliseconds()
    console.log(timestamp);
    // Upload file and metadata to the object 'images/mountains.jpg'
    var uploadTask = storageRef.child('Exercise/' + timestamp + '.png').put(file, metadata);
    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
        function (snapshot) {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                    console.log('Upload is paused');
                    break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                    console.log('Upload is running');
                    break;
            }
        }, function (error) {
            //console.log(error);
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    console.log("User doesn't have permission to access the object");
                    break;

                case 'storage/canceled':
                    // User canceled the upload
                    console.log("User canceled the upload");
                    break;

                case 'storage/unknown':
                    // Unknown error occurred, inspect error.serverResponse
                    console.log(error);
                    break;
            }
        }, function () {
            // Upload completed successfully, now we can get the download URL
            console.log('Upload completed successfully');
            uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                console.log('File available at', downloadURL);
                var newPostKey = firebase.database().ref().child('Exercise').push().key;
                database.ref('/Exercise/' + newPostKey).set({
                    Exercise: Exercise.value,
                    Cat: Cat.value,
                    ImgURL: downloadURL
                }, function (error) {
                    if (error) {
                        console.log('Error ', error);
                    } else {
                        // Data saved successfully!
                        alert("Data Updated successfully!");
                        console.log('Data Updated successfully! ');
                    }
                });

            });
        });

});

//database.ref('/Exercise/' + Customer_id.value).remove();



image.onchange = e => {
    console.log("Image changed");
    var file = image.files[0];
    reader = new FileReader();
    reader.onload = function () {
        imageview.src = reader.result;
    }
    reader.readAsDataURL(file);
}

