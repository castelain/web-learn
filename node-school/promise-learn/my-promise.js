/*
 * This class is my self achievement for Promise
 * Rename Promise as MyPromise
 * MyPromise is a class to simulation Promise object
 */
class MyPromise{
    /*
     * @parameter function(fulfill,reject)
     * return this(an object of class MyPromise)
     */
    constructor(){
        this.status = 'pending';
        this.value = '';
        this.reason = '';

        if(arguments.length >= 1){
           this.callback = arguments[0];
           // Save an reference to the new object instance
           let that = this;
           this.callback(
               // Assign this to that outside
               // because this has the value of global object in anonymous(匿名的) functions
               // In fact, this problem can use arrow functions to resolve.
               function(){
                   that.value = arguments[0];
                   that.status = 'fulfilled';
               },
               function(){
                   that.reason = arguments[0];
                   that.status = 'rejected';
               }
           );
        }else{
            // If never pass a parameter to the constructor,throw an error
            throw new Error('Promise resolver undefined is not a function');
        }
    }

    /*
     * MyPromise.resolve: equal as Promise.resolve
     * @parameter value: Mypromise / other types
     * return an object instance of class MyPromise
     */
    static resolve(value){
        if(value instanceof MyPromise){
            return value;
        }
        let p = new MyPromise(function(fulfill,reject){
            fulfill(value);
        });
        return p;
    }

    /*
     * MyPromise.reject: equal as Promise.reject
     * @parameter reason: Mypromise / other types
     * return an object instance of class MyPromise
     */
    static reject(reason){
        if(reason instanceof MyPromise){
            return reason;
        }
        let p = new MyPromise(function(fulfill,reject){
            reject(reason);
        });
        return p;
    }

    /*
     * MyPromise.all: equal as Promise.all
     * @parameter list: any type
     * return an object instance of class MyPromise
     */
    static all(){
        let list = arguments[0];
        if(list === undefined){
            return new Promise(function(fulfill,reject){});
        }else if(list[Symbol.iterator] === undefined){
            throw new Error('The parameter passed was wrong');
        }else{
            let p = new MyPromise(function(fulfill,reject){
                let values = [];
                for(let i = 0; i < list.length; i ++){
                    if(list[i] instanceof MyPromise){
                        if(list[i].status === 'rejected'){
                            reject(list[i].reason);
                            return this;
                        }else{
                            values.push(list[i].value);
                        }
                    }else{
                        values.push(list[i]);
                    }
                }
                fulfill(values);
            });
            return p;
        }
    }

    /*
     * MyPromise.race: equal as Promise.race
     * @parameter list: any type
     * return an object instance of class MyPromise
     */
    static race(){
        let list = arguments[0];
        if(list === undefined){
            return new Promise(function(fulfill,reject){});
        }else if(list[Symbol.iterator] === undefined){
            throw new Error('The parameter passed was wrong');
        }else{
            let p = new MyPromise(function(fulfill,reject){
                for(let i = 0; i < list.length; i ++){
                    if(list[i] instanceof MyPromise){
                        if(list[i].status != 'pending'){
                            if(list[i].status === 'fulfilled'){
                                fulfill(list[i].value);
                                break;
                            }else{
                                reject(list[i].reason);
                                break;
                            }
                        }
                    }
                }
            });
            return p;
        }
    }

    /*
     * [myPromise].then（onResolved,onRejected）
     * @parameter callbacks: function
     * return an object instance of class MyPromise
     */
    then(){
        if(arguments.length >= 2){
            if(this.status === 'fulfilled'){
                arguments[0](this.value);
            }else{
                arguments[1](this.reason);
            }
        }else if(arguments.length === 1){
            if(this.status === 'fulfilled'){
                arguments[0](this.value);
            }
        }
        return this;
    }

    /*
     * [myPromise].catch（callback）
     * @parameter callback: function
     * return an object instance of class MyPromise
     */
    catch(){
        if(this.status === 'fulfilled'){
            return;
        }
        if(arguments.length != 0){
            arguments[0](this.reason);
        }
    }
}

module.exports = MyPromise;
