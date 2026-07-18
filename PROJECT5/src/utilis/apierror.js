class apierror extends Error {
    constructor(
        statuscode,
        message= "Resources not found",
        
    ){
        super(message)
        this.statuscode=statuscode
        this.data=null
        this.success= false;
         Object.defineProperty(this, 'message', {
            value: message,
            enumerable: true,
        })
    }
}
export {apierror}