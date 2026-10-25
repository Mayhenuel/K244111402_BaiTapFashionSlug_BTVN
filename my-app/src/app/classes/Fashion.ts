export class Fashion{
    constructor(
        public _id:any=null,
        public style:string="",
        public fashion_subject:string="",
        public fashion_detail:string="",
        public fashion_image:string="",
        public IdF:number|null=null){}
    getBase64String(): string {
    const image = (this.fashion_image || '').trim();

    if (!image) {
      return '';
    }
    if (image.startsWith('data:image/')) {
      return image;
    }
    if (/^(https?:)?\/\//i.test(image) || image.startsWith('/')) {
      return image;
    }
    return 'data:image/png;base64,' + image;
  }
}
