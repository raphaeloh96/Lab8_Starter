# Lab 8 - Starter
---
## Completed By - Raphael Oh
---
## Check Your Understanding

### 1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.
### Solution: *Within a Github action that runs whenever code is pushed.*  **By using Github action to run automated tests whenever code is pushed, we eliminate the need for developer to run the tests manually. This way, developers can work efficiently without worrying about running tests. The developers can also keep track of whether a code push is breaking a feature or not.**
---
### 2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)
### Solution: **No**
---
### 3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
### Solution: **No. Unit test is used to test small individual parts(functions) of code in encapsulated units. The “message” feature of a messaging application would be a large complex feature involving multiple function calls. Thus, unit test would not be a proper way to test it's functionality.**
---
### 4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
### Solution: **Yes. The “max message length” feature of a messaging application would consist of small validation function. Hence, we can use a unit test to test this feature.**
---
## Screenshots
![S1](/screenshot_1.png)
![S2](/screenshot_2.png)