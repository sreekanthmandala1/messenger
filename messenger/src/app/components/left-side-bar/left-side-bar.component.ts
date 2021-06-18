import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.scss'],
  
})
export class LeftSideBarComponent implements OnInit {
  dataList:any = [
    
    {
    title : 'Lina roy',
    subtitle: 'okay meeting with client tomorrow',
    image : 'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png'
    },
    {
      title : 'Broad Frost',
      subtitle: 'Nice to meet you',
      image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJbM1sKRHlT8AroSFkNAmAT4fCrvcBOqCUXX_e1YF45ZjkBnqYDKz7AmqZblmAlZALabY&usqp=CAU'
      },
      {
        title : 'paul irish',
        subtitle: 'Dont sleep. start working from tomorrow',
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCfvp52mMEvat7Adkb7LrjI9veIU-9HN1WlzghfKE0PmBJrGkvt83DwAZvO8DErD8NsnU&usqp=CAU'
        },
        {
          title : 'Jessica Glory',
          subtitle: 'that sounds good',
          image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEvkMZtGOAhpFvkJeuC-pRRrFFaQ9nL0NRTqoBAhLgzGxBwM-29_a4s5R0WwfDIg-1BOk&usqp=CAU'
          },
          {
            title : 'John Doe',
            subtitle: 'Hi sir. The second component will be completed tomorrow',
            image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4eeVnKlk0aXJAEH-CB7T9JXn6hGkmQVhTvDLbdyiPWaBPTMShFU_zOvtvO17XmMbUvk0&usqp=CAU'
            },
            {
              title : 'Eric peterson',
              subtitle: 'First of all mett with the company ceo and BOD',
              image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVxhAxJ4D7MOeTTj6kR9PBeZonW5HM7giKjTbEmR-HMBwf3G1VqGnlwpO1kWrdyIZu8_U&usqp=CAU'
              },
]
  constructor() {}

  ngOnInit(): void {}
}
