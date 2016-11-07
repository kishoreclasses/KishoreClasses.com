package com.expense.estimator;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
/**
 * This class represent department
 * @author KishoreClasses.com  
 * This class developed  as part of sample, in Java Assignment Help Service.
 */
public class Department {
	
	private String name;
	private List<Employee> reportingEmployees;

	public Department(String name) {
		this.name = name;
		this.reportingEmployees = new ArrayList<Employee>();
	}

	public String getName() {
		return name;
	}

	public List<Employee> getReportingEmployees() {
		return reportingEmployees;
	}

	public void addEmployee(Employee e) {
		reportingEmployees.add(e);

	}
	
	public void print() {
		System.out.println(" Department Name ="+getName());		
	
		
		Iterator<Employee> employeeIterator = reportingEmployees.iterator();
		  while(employeeIterator.hasNext()){
			  Employee employee = employeeIterator.next();
			  employee.print();
		  }
	}
	
	/**
	 * This method responsible for calculate total expenses of department 
	 * 
	 * @return
	 */	
	public double getTotalSalaryExpenses()
	{
		double totalSalary = 0;
		Iterator<Employee> employeeIterator = reportingEmployees.iterator();
		  while(employeeIterator.hasNext()){
			  Employee employee = employeeIterator.next();
			  totalSalary+=employee.getTotalSalaryExpenses();
		  }
		return totalSalary;
	}
}
