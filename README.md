# Introducing SEOUX

### ProjectCode - 
lackadaisical-pig-5537

[https://sage-trifle-9d9328.netlify.app] 

![seoux_logo - Edited](https://user-images.githubusercontent.com/85841972/229421591-0cb0c816-7047-4b74-925c-9c7da0cc40ae.png)


# What is SEOUX?

Seoux is your scheduling automation platform for eliminating the back-and-forth emails for finding the perfect time — and so much more.
It is a tool for scheduling appointments and events. It eliminates the usual back-and-forth emails and messages involved in nailing down time.
MyCal enables a smooth workflow by automating tasks such as appointment booking and rescheduling,
and sending reminders and thank you notes to prospective and existing clients and team members.
You can share your availability preferences and meeting location in one click.

This website is fully functional website with all CRUD operations by user .
They need to go through User Authentication middleware, to perform any interactions

# Workflow


```
    Category(userSide) -->  1.Mens(button)  2.Womens d (Home)   
                              |
                              |
                              ↓ 
                             done ------>  Caregory(backend) ----> 1. haricut(onclick= image) 2.NailPaint 3.NailPolish ..etc
                                                                  |
                                                                  |
                                                                  ↓ 
         id: {name,title,img,rate}WorkingProfnational(List)<-------- done
                                            |
                                            |
                                            |
                                            ↓ 

                                            |
                                            |
                                            ↓ 
                   id: TimeSlot(forBooking,availability of WorkingProfnational) //
                                            |
                                            |
                                            |
                                            ↓ 
                 {UniqueID:(_id(Professonal ID),Booked at : Time}

                                            |
                                            |
                                            |
                                            |
                                            |
                                            |
                                            ↓ 
                                        
             
                                  


[ (8:00) disable , 8:30 , 10:00] frontend --> arr.push[8:00] == data(timeslot) // include

click on the image of working prof : --> api call --> timeslot ---> all data --> filter data --> id 



 appointment page --->| 8:00 |  8:30 9:00
                         |
                         |
                         |
                         ___ disable(x)(post request)-----user ID -->  link appointment slot--> |
                                                                                                |
                                                                                                |
                                                                                        my appointment(user)
```



# TechStack Used for this website :-

### Frontend :-
- HTML
- CSS
- JavaScript
- Bootstrap & AOS

### Backend :-
- Node.js
- Express.js
- Authentication - JWT, Bcrypt,

### Database :-
> MongoDB Atlas
  
# Features of this Website:-
- Login & Signup feature.
- User can book time slots
- User will recieve reminders before time via email.

# Application Guide :-

### To Create an Event 
* First Login to your MyCal Account
* Then Select your perticular worker and selet him or her
* book the time slot
* Make Payment
* Give feedback

### Team Members of the Project :- 
- Hariom Kumar
- Rajesh K
- Sitansu Mandal
- Saurabh Singh
- Saurav Sharma




## Here are some screenshots of website.

### :large_blue_circle: Home Page :-


![idexpage](https://user-images.githubusercontent.com/85841972/229423602-d9604550-ba36-4ed9-9099-fbbb69675f26.PNG)




### :large_blue_circle: Category Page :-
![menpage](https://user-images.githubusercontent.com/85841972/229423718-5b547be3-ca3f-4627-bcac-d99112ccdaed.PNG)
![women_page](https://user-images.githubusercontent.com/85841972/229423729-a9eb6302-33aa-42ac-ba05-d8dbfc8df631.PNG)


### :large_blue_circle: Login/Signup Page :-

![loginsignup](https://user-images.githubusercontent.com/85841972/229423877-38a33053-8a83-4057-a658-d75068b431c2.PNG)

### :large_blue_circle: User Dashboard :- 

![working_prof](https://user-images.githubusercontent.com/85841972/229423914-9db4a85c-ab59-4fb4-b649-df12638c5f78.PNG)

### :large_blue_circle: BookingPage :-

![booking](https://user-images.githubusercontent.com/85841972/229424001-777b004e-b4c7-4aae-ad0a-081e4488d489.PNG)

### :large_blue_circle: Payment Page :-

![payment](https://user-images.githubusercontent.com/85841972/229424048-7ea5c8e7-915c-4ab5-aea5-1fa8da87bc83.PNG)

### :large_blue_circle: Feedback Page :-
![feedBack](https://user-images.githubusercontent.com/85841972/229424257-1b8b4281-bc3f-4491-ad36-34bf86737997.PNG)

### :large_blue_circle: Admin Page :-


![admin](https://user-images.githubusercontent.com/85841972/229424509-4157b4a7-a3b9-499d-b73a-eb6f76ca6965.PNG)

---


## Thankyou for your Time :raised_hands: :-
