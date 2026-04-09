class SupplierException extends Error {
  constructor(public status: number, public message: string){
    super(message);
    this.status = status;
    this.message = message;
    this.name = this.constructor.name
    Error.captureStackTrace(this.constructor)
  }
}

export default SupplierException;