const fs = require("fs");

/**
 * The core function of the module
 * Uses utf8 encoding
 * Returns a empty promise if successfull, rejects with error object if fails. Therefore you can implement error catching if you like, but the program will work without any understanding of promises, despite not catching errors gracefully
 * @param {string} csvFile The csv data file
 * @param {string} callDestination The api endpoint to POST the data to
 * @returns {Promise} 
 */
let object

object.toREST = async function(csvFile, callDestination) {
}


object.toFile = function(csvFile, jsonFile) {

}

object.out = function(csv, cb) {
    if (typeof(cb) !== Function) console.log("Please provide a callback. If you want the JSON value returned please use outSync()\nPlease see the documentation for more info");
    
    var result;
    var err;

    try {
        csv = csv.split('\n')
        const HEADER = csv[0].split(',')
        for (let a = 1; a < csv.length; a++) {
            let line = csv[i]
            line = line.split(',')

            for (let b = 0; b < line.length; b++) {
                result[a][
                    HEADER[b]
                ] = line[b]
            }
        }

        err = false
    } catch (error) {
        err = error
    }
    cb(err, result)

}

object.outSync = function(csv) {
    let result
    object.out(csv, (err, res) => {
        if (err) throw err;
        result = res
    })
    return result
}

exports = object