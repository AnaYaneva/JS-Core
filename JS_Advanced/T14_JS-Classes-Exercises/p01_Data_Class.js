/**
 * Created by PC on 15.7.2017 г..
 */
class Data{
    constructor(method,uri,version,message, response,fulfilled){
       this.method=method;
       this.uri=uri;
       this.version=version;
       this.message=message;
       this.response=response||undefined ;
       this.fulfilled=fulfilled||false;
    }
}