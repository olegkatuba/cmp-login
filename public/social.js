!function(){"use strict";var o;window.addEventListener("message",(function(e){console.log(e.data),"google"===e.data?o.signIn().then((function(e){o.signOut();var t=e.getAuthResponse().id_token;window.top.postMessage({provider:"google",status:"success",token:t},"*")})).catch((function(o){var e=o.error;console.log(e),window.top.postMessage({provider:"google",status:"failure",error:e},"*")})):"apple"===e.data&&AppleID.auth.signIn().then((function(o){var e=o.authorization.id_token;window.top.postMessage({provider:"apple",status:"success",token:e},"*")})).catch((function(o){var e=o.error;console.log(e),window.top.postMessage({provider:"apple",status:"failure",error:e},"*")}))})),window.addEventListener("message",(function(o){console.log(o);try{var e=JSON.parse(o.data).params.authResult.id_token;console.log(e),window.top.postMessage({provider:"google",status:"success",token:e},"*")}catch(o){console.log(o),window.top.postMessage({provider:"google",status:"failure",error:o},"*")}})),gapi.load("auth2",(function(){o=gapi.auth2.init({client_id:"4357416598-q07c52qvdlt9tottmlo3c3mp723e0rf0.apps.googleusercontent.com"})})),AppleID.auth.init({clientId:"com.usercentrics.login-cmp-services",scope:"name email",redirectURI:"https://cmp-login.herokuapp.com/",usePopup:!0})}();