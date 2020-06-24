"use strict"
/// <reference path = 'form-namespace.ts'/>
var TheForm;
(function(TheForm) {
  class MyForm {
    constructor(email) {
      this.email = email
      this.type = 'inline'
      this.state = 'active'
    }
    getInfo() {
      return {
        type: this.type,
        state: this.state
      }
    }
  }
  TheForm.myForm = new MyForm('sonik@sosal.kappa')
})(TheForm || (TheForm = {}))
console.log(TheForm.myForm)
//# sourceMappingURL=namespaces.js.map