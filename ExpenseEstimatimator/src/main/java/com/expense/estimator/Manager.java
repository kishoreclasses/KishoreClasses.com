package com.expense.estimator;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

/**
 * This class represent Manager
 * 
 * @author KishoreClasses.com
 * This class developed  as part of sample, in Java Assignment Help Service.
 *
 */
public class Manager implements Employee {

	private String name;
	private double salary;

	public Manager(String name, double salary) {
		this.name = name;
		this.salary = salary;
	}

	List<Employee> employees = new ArrayList<Employee>();

	public void add(Employee employee) {
		employees.add(employee);
	}

	public Employee getChild(int i) {
		return employees.get(i);
	}

	public String getName() {
		return name;
	}

	public double getSalary() {
		return salary;
	}

	public void print() {
		System.out.println(" Manager Name =" + getName() + " Salary ="
				+ getSalary());
		Iterator<Employee> employeeIterator = employees.iterator();
		while (employeeIterator.hasNext()) {
			Employee employee = employeeIterator.next();
			employee.print();
		}
	}

	/**
	 * Get Total Salary Expenses of Manager
	 */
	public double getTotalSalaryExpenses() {
		double totalSalary = this.salary;
		Iterator<Employee> employeeIterator = employees.iterator();
		while (employeeIterator.hasNext()) {
			Employee employee = employeeIterator.next();
			totalSalary += employee.getTotalSalaryExpenses();
		}
		return totalSalary;
	}

	public void remove(Employee employee) {
		employees.remove(employee);
	}
}
