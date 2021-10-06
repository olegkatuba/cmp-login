class HttpException extends Error {
  status: number;
  messages: any[];
  constructor(status: number, messages: any[] | string) {
    super();
    this.status = status;
    if (typeof messages === "string") {
      this.messages = [{
        msg: messages
      }]
    } else {
      this.messages = messages;
    }
  }
}
 
export default HttpException;