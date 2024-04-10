const obj = {
    a: null,
    b: false,
    c: true,
    d: 0,
    e: 1,
    f: '',
    g: 'a',
};
function deleteAllFalsy(obj:{[key:string]:any}):void{
    for(const key in obj){
        if(!obj[key]){
            delete(obj[key]);
        }
    }
}  