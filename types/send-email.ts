export interface SendEmailOpts {
    from: string,
    to: string,
    subject: string,
    text: string,
    html: string,
    attachments?: EmailFileAttachment[];
  }
export interface EmailFileAttachment {
    filename: string,
    content: any,
    contentType: string;
}