class AuthenticationService {

    registerSuccessfulLogin(username, password){
        console.log('hola')
        sessionStorage.setItem('authenticatedUser', username)
    }

    logout(){
        console.log('logout')
        sessionStorage.removeItem('authenticatedUser')
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser')
        if(user===null) return false
        return true
    }

}

export default new AuthenticationService()