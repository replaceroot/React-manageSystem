import JsonP from 'jsonp'
export default class Axios{
  static jsonp(options){
    return new Promise((resolve,reject)=>{
      JsonP(options.url, {
        params: 'callback'
      }, function(err,response){
        if(response.status === 'success'){
          resolve(response);
        }else{
          reject(response.message);
        }
      })
    })
  }
}