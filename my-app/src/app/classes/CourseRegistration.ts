export class CourseRegistration {
  constructor(
    public fullName: string = '',
    public email: string = '',
    public phone: string = '',
    public course: string = '',
    public shift: string = 'sang',
    public agree: boolean = true
  ) {}
  getInfor():string
  {
    let infor="Full Name = "+this.fullName+"\n"
                  +"Email="+this.email+"\n"
                  +"Phone="+this.phone+"\n"
                  +"Course="+this.course+"\n"
                  +"Shift="+this.shift+"\n"
                  +"Agree="+this.agree
    return infor
  }
}

