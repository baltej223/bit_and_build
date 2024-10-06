function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());

    // You can send the ID token to your server here.
    var id_token = googleUser.getAuthResponse().id_token;
    console.log('ID Token: ' + id_token);

    // Example: Redirect to a logged-in page
    window.location.href = 'catalog.html';
}
