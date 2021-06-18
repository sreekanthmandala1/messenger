import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-middle-bar',
  templateUrl: './middle-bar.component.html',
  styleUrls: ['./middle-bar.component.scss'],
})
export class MiddleBarComponent implements OnInit {
 
  msgForm: any = FormGroup;
  name: any;
  messages:any;
  profile:any=[{
    fullName : 'Dianne Vanhorn',
    pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn8P6POnmXE2YJlFMqlJ-b2F_t8bdqTq4CAb-mQWDeI813MCCXefNOg9RjN2AQZwPzy3Y&usqp=CAU'
  }]
  constructor(
    private messagesService: MessagesService,
    private fb: FormBuilder
  ) {
    this.onMessageSubmit()
  }
  ngOnInit(): void {
    
    this.messagesService.fetchData().subscribe((res)=>{
      this.messages = res
    }) 
    this.msgForm = this.fb.group({
      _id: [''],
      msg: [''],
    });
  }
  onMessageSubmit() {
    if (this.msgForm.valid) {
      // console.log(this.empForm.value)
      this.messagesService.saveMessages(this.msgForm.value).subscribe((res) => {
        console.log(res);
        this.messagesService.fetchData().subscribe((res)=>{
          this.messages = res;
          this.msgForm.reset();
        })
      });
    } else {
      (err:any)=>{
        console.log(err)
    }
    
  }
  
}


}
