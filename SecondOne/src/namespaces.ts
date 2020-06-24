/// <reference path = 'form-namespace.ts'/>

namespace TheForm {
  class MyForm {
    private type: FormType = 'inline'
    private state: FormState = 'active'

    constructor(public email: string) {
    }

    getInfo(): FormInfo {
      return {
        type: this.type,
        state: this.state
      }
    }
  }

  export const myForm = new MyForm('sonik@sosal.kappa')
}

console.log(TheForm.myForm)