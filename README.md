# A single page webapp to sell digital products like courses.

it's a single page React web application with minimalistic funtionality.

As FEATURES of this webpage you will find
- Very users friendly easy to navigate among courses to cart.
- Users can enroll to multiple courses if they have enough Credit.
- If a user run out of enough Credit to enroll the course then they will be notified by nice a toast notification.
More importantly they will not be allowed to enroll more courses.


In this assignment projects i have used React build in state managment hook "useState".
I have destuctured the hook by assigning realative words to access the current State value and to set the State value.
In the projects after fetching the data by useEffect i had keep these data in a State. So i use there useState hook to keep the data. As the data comes in a form of array of objects so initially i kept the state in empty array then sent the data by setCourses. Same way i used "useState" for selectedCourses also.

I have used "useState" for calculating user credit hours and for course prices also. But these times as data were in number formate so i kept initial sate in relavent numbers.
