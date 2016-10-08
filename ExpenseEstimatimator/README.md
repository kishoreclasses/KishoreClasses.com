Note:This README.md you can use as Abstract for this Project.

#### Author:kishoreclasses.com
 if you feel you need to change or add new functionality or your facing complex assignment need to be implemented then feel free to contact us [Java Assignment Help](https://kishoreclasses.com/Java-Assignment-Help-From-India.html)
## About Assignment(Project):

### Requirement:
Develop a java application which calculates employee salary based on department.
This application should flexible to count all "n"(any) number of employee salary in particular department and should be able to calculate total expenses of the department.
The application should be developed in a manner to do unit testing. In this, you should Introduce at least three type of employee example Developer,Manager,QATester.
The application should allow employee hierarchy example: A senior manager may have ‘n’(any number of ) managers.

-   Department
-    Developer 
-    Employee 
-    Manager 
-   QATester

### Technical Point of view:

This application developed using core java and JUNIT test cases.

__Design Pattern__: This application implemented using composite design pattern ("composites that contain components, each of which could be a composite").
As we following composite design pattern in this assignment we took Employee (Interface) as abstract base with base behavior like
To add new employee 
```sh
add (Employee employee)
```
To remove existing employee 
```sh
remove (Employee employee)
```
To remove child 
```sh
getChild(int i)
```
To get name of employee 
```sh
getName()
```
To get the salary of current employee 
```sh
getSalary()
```

To get total salary 
```sh
getTotalSalaryExpenses()
```
To print all details of employee
```sh
print()
```

Using above methods we can couple more employee as children.
We defined 3 employee types.

* Developer 
* Manager 
* QATester 

So we can any of the type to parent employee or department list.

# How To Run?
Please make sure you installed below above in your system.
1.Java 1.5 or above.
2.Maven 3 or above 
Please follow below video to run and test.


UML:
### Department class diagram
![picture alt](https://github.com/kishoreclasses/KishoreClasses.com/blob/master/ExpenseEstimatimator/src/test/resources/uml/Department_class_diagram.png "Department class diagram")
### Employee class diagram
![picture alt](https://github.com/kishoreclasses/KishoreClasses.com/blob/master/ExpenseEstimatimator/src/test/resources/uml/Employee_class_diagram.png "Employee class diagram")
### Expense Estimatimator sequence diagram
![picture alt](https://github.com/kishoreclasses/KishoreClasses.com/blob/master/ExpenseEstimatimator/src/test/resources/uml/Expense_Estimatimator_sequence_diagram.png "Expense Estimatimator sequence diagram")


## FAQ
#### 1)Is it possible to add "n"  Developer, Employee,Manager,QATester?
 _Yes you can please check "Case 2:Double Manager" in   EstimatorServiceTest.java_
#### 2)Is it possible to add nested Department (Means Department inside Department)?
-_No, but you can nest employee list and couple with another employee_
#### 3)Is any limitation for salary configuration?
_double limitation approximately ±1.79769313486231570E+308
(15 significant decimal digits)_


 
