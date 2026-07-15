class apierror extends Error {
    constructor(
        statuscode,
        message= "",
        
    ){
        super(message)
        this.statuscode=statuscode
        this.data=null
        this.message= message
        this.success= false;
        this.error= error
    }
}
export {apierror}