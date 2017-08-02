	var config = {
	    apiKey: "AIzaSyBu_GIpCFIHbqOQfMIVzK0OSY-M-wx0mMM",
	    authDomain: "universidad-gratuita.firebaseapp.com",
	    databaseURL: "https://universidad-gratuita.firebaseio.com",
	    projectId: "universidad-gratuita",
	    storageBucket: "",
	    messagingSenderId: "842957196693"
	}, database, getUrl;

  	firebase.initializeApp(config);
	database = firebase.database();
    // session = firebase.auth().currentUser
    getUrl = window.location;