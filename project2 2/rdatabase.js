const firebaseConfig = {
  apiKey: "AIzaSyAXuOVjRh9eeo96tLi7LeHft4Dc9xKoJQE",
  authDomain: "maps-5d90d.firebaseapp.com",
  databaseURL: "https://maps-5d90d-default-rtdb.firebaseio.com",
  projectId: "maps-5d90d",
  storageBucket: "maps-5d90d.appspot.com",
  messagingSenderId: "1007587899818",
  appId: "1:1007587899818:web:51c720fd45cf88eca853d3",
  measurementId: "G-DK387MGBL3"
};


firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref("registrationForm");

document.getElementById("registrationForm").addEventListener("submit", submitForm);

function submitForm(e) {
 e.preventDefault();

 var username = getElementVal("username");
  var email = getElementVal("email");
  var password = getElementVal("password");
  var address = getElementVal("address");
  var latitude = getElementVal("latitude");
  var longitude = getElementVal("longitude");
  var cameraMode = getElementVal("cameraMode");
  var resolution = getElementVal("resolution");
  var recordingCapabilities = getElementVal("recordingCapabilities");
  var licenseNumber = getElementVal("licenseNumber");
  var ownerAdress = getElementVal("ownerAddress");
  var ownerContact = getElementVal("ownerContact");
  var ownerEmail = getElementVal("ownerEmail");
  var visibilityDetails = getElementVal("visibilityDetails");
  var visibilityRange = getElementVal("visibilityRange");
  var fieldOfView = getElementVal("fieldOfView");

  saveMessages(username, email, password, address, latitude, longitude, cameraMode, resolution, recordingCapabilities, licenseNumber, ownerAdress, ownerContact, ownerEmail, visibilityDetails, visibilityRange, fieldOfView);

 document.querySelector(".alert").style.display = "block";

 setTimeout(() => {
   document.querySelector(".alert").style.display = "none";
 }, 3000);

 document.getElementById("registrationForm").reset();
}

const saveMessages = (username, email, password, address, latitude, longitude, cameraMode, resolution, recordingCapabilities, licenseNumber, ownerAddress, ownerContact, ownerEmail, visibilityDetails, visibilityRange, fieldOfView) => {
  var newContactForm = contactFormDB.push();
  newContactForm.set({
    Username: username,
    Email: email,
    Password: password,
    Address: address,
    Latitude: latitude,
    Longitude: longitude,
    CameraMode: cameraMode,
    Resolution: resolution,
    RecordingCapabilities: recordingCapabilities,
    LicenseNumber: licenseNumber,
    OwnerAdress: ownerAddress,
    OwnerContact: ownerContact,
    OwnerEmail: ownerEmail,
    VisibilityDetails: visibilityDetails,
    VisibilityRange: visibilityRange,
    FieldOfView: fieldOfView

  });
};

const getElementVal = (id) => {
 return document.getElementById(id).value;
};