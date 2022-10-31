/* gets e print */

function gets(){
    return 10;
}

function print(texto){
    console.log(texto);
}

//para utilizar o require, precisa ser exportado um objeto:

module.exports = {
    gets, 
    print
};

/*
    module.exports.gets = gets;
*/