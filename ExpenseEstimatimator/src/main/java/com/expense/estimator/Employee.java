package com.expense.estimator;

/**
 * This interface represent Employee
 * @author KishoreClasses.com
 *
 */
public interface Employee {

	 public void add(Employee employee);
	 public void remove(Employee employee);
	 public Employee getChild(int i);
	 public String getName();
	 public double getSalary();
	 public double getTotalSalaryExpenses();
	 public void print();
}
