import { Component } from '@angular/core';

function log(target, name, descriptor) {
  console.log(target, name, descriptor)
  // store the original function in
   const original = descriptor.value
  // original()
  // a variable, do some manipulations with
  // descriptor.value
  descriptor.value = function(...args) {
    console.log("Arguments", args, " were passed in this function")
    const result = original(this, args)
    console.log("The result of the function is", result)
  }
  // return the descriptor
  return descriptor
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my Sample App';

  @log
  aSimpleMethod() {
    console.log("Hey there!")
  }
}
