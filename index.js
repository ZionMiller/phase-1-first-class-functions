function receivesAFunction(callBack) {
    return callBack();
};
callback("hello");

function aFunction(){
    console.log('say HELLO!')
}
function returnsANamedFunction(){
    return(aFunction)
};

function returnsAnAnonymousFunction(){
    return () => console.log('an anonymous function')
};
