/*fetch('data/object.json')
  .then(response => response.json())
  .then(data => {
    roar(data)
  })
  .catch(error => {
    console.error('Error:', error);
  });


function roar(data){
  console.log(data["hello"])
}*/
function onSignIn(googleUser) {
  // Get the ID token and basic profile information
  var id_token = googleUser.getAuthResponse().id_token;
  var profile = googleUser.getBasicProfile();

  // Send the ID token to your server for verification and authentication
  // ...
}
