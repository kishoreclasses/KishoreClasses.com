package com.expense.estimator;

/**
 * This class represent Developer
 * @author KishoreClasses.com
 *
 */

public class Developer implements Employee {

	private String name;
	private double salary;

	public Developer(String name, double salary) {
		this.name = name;
		this.salary = salary;
	}

	public String getName() {
		return name;
	}

	public double getSalary() {
		return salary;
	}

	public void print() {
		System.out.println(" Developer Name ="+getName()+" Salary ="+getSalary());
	}

	public double getTotalSalaryExpenses() {
		return salary;// As no subordinates only employees salary is expenses
	}

	public void add(Employee employee) {
		// this is leaf node so this method is not applicable to this class.
	}

	public Employee getChild(int i) {
		// this is leaf node so this method is not applicable to this class.
		return null;
	}

	public void remove(Employee employee) {
		// this is leaf node so this method is not applicable to this class.
	}
}
