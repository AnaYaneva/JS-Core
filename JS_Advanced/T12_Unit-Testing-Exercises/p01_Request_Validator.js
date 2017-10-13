/**
 * Created by PC on 12.7.2017 г..
 */

function validateRequest(request) {
    let methodPattern = /^(GET|POST|DELETE|CONNECT)$/g;
    let uriPattern=/^((\.)*[a-zA-Z0-9]+)+$/g;
    let versionPattern=/^(HTTP\/1\.1|HTTP\/1\.0|HTTP\/0\.9|HTTP\/2\.0)$/g;
    let messagePattern=/^([^<>&'"\\]*)$/g;

    if(!methodPattern.test(request.method)||request.method==undefined){
        throw new Error(`Invalid request header: Invalid Method`);
    }
    if(!uriPattern.test(request.uri)||!request.uri=="*"||request.uri==undefined){
        throw new Error(`Invalid request header: Invalid URI`);
    }
    if(!versionPattern.test(request.version)||request.version==undefined){
        throw new Error(`Invalid request header: Invalid Version`);
    }
    if(!messagePattern.test(request.message)||request.message==undefined){
        throw new Error(`Invalid request header: Invalid Message`);
    }

    return request;
}