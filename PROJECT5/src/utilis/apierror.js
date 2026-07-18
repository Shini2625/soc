class apierror extends Error {
    constructor(
        statuscode,
        message= "Resources not found",
        
    ){
        super(message)
        this.statuscode=statuscode
        this.data=null
        this.message= message
        this.success= false;
    }
}
export default  {apierror}