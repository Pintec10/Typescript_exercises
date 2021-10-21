enum AuthError {
    WRONG_CREDENTIALS,      //uppercase by convention
    SERVER_FAIL,
    EXPIRED_SESSION
}

//each gets a number: 0, 1, 2...
console.log(AuthError.WRONG_CREDENTIALS); // --> 0
console.log(AuthError[AuthError.WRONG_CREDENTIALS]); // --> WRONG_CREDENTIALS


//one can also assign string values to them
enum AuthError2 {
    WRONG_CREDENTIALS = 'credentials not recognized',      
    SERVER_FAIL = 'server is unavailable',
    EXPIRED_SESSION = 'session has expired'
}

console.log(AuthError2.WRONG_CREDENTIALS); // --> credentials not recognized
