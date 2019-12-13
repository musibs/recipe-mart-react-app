import auth0 from 'auth0-js';

const LOGIN_SUCCESS_PAGE = "/recipes";
const LOGIN_FAILURE_PAGE = "/loginFailed";

/* eslint no-restricted-globals: 0 */
class Auth{

    auth0 = new auth0.WebAuth({
        domain: "musibs.auth0.com",
        clientID: "aLfZvQiMfpqkVP7vTS0QxGYITVJ3tlrh",
        redirectUri: "https://eloquent-visvesvaraya-e78194.netlify.com/callback",
        audience: "https://musibs.auth0.com/userinfo",
        responseType: "token id_token",
        scope: "openid profile"
    })

    constructor(){
        this.login = this.login.bind(this);
     }
 
     login(){
         this.auth0.authorize();
     }
 
     handleAuthentication(){
         this.auth0.parseHash((err, authResult) => {
             if(authResult && authResult.accessToken && authResult.idToken){
                 console.log('Autenticated');
                 let expiresAt = JSON.stringify((authResult.expiresIn) * 1000 +new Date().getTime());
                 localStorage.setItem("access_token", authResult.accessToken);
                 localStorage.setItem("id_token", authResult.idToken);
                 localStorage.setItem("expires_at", expiresAt);
                 location.hash = "";
                 location.pathname = LOGIN_SUCCESS_PAGE;
             }
             else if(err){
                 console.log(err);
                 location.pathname = LOGIN_FAILURE_PAGE;
             }
         })
     }
     
     isAuthenticated(){
         let expiresAt = localStorage.getItem("expires_at");
         return new Date().getTime() < expiresAt;
     }
 
     logout(){
         localStorage.removeItem("access_token");
         localStorage.removeItem("id_token");
         localStorage.removeItem("expires_at");
         location.pathname= "/";
     }
}

export default Auth;