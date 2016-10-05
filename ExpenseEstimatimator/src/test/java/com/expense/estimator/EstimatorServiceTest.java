package com.expense.estimator;

import static org.junit.Assert.assertTrue;
import org.junit.Test;

/**
 * This is class to test different scenarios of salary estimation
 * 
 * @author KishoreClasses.com
 *
 */
public class EstimatorServiceTest {

	/**
	 * Case 1:Single Manager Level
	 */
	@Test
	public void testGetTotalEstimationForManagerWihSingleLevel() {
		System.out.println("================================================================");

		System.out.println(" Case 1:Single Manager Level ");

		Developer dev = new Developer("Raju", 1000);
		QATester qa = new QATester("Jhon", 1000);
		Manager manager = new Manager("Pete", 2000);
		manager.add(dev);
		manager.add(qa);

		manager.print();
		System.out.println(" Total Expenses :"
				+ manager.getTotalSalaryExpenses());
		assertTrue(4000 == manager.getTotalSalaryExpenses());

		System.out.println("================================================================\n\n\n\n");
	}

	/**
	 * Case 2:Double Manager Level
	 */
	@Test
	public void testGetTotalEstimationForManagerWihDoubleLevel() {
		System.out.println("================================================================");

		System.out.println(" Case 2:Double Manager Level ");

		Manager seniorManager = new Manager("Steve", 3000);
		Developer dev = new Developer("Raju", 1000);
		QATester qa = new QATester("Jhon", 1000);
		Manager manager = new Manager("Pete", 2000);

		manager.add(dev);
		manager.add(qa);
		seniorManager.add(manager);

		seniorManager.print();

		System.out.println(" Total Expenses :"
				+ seniorManager.getTotalSalaryExpenses());
		assertTrue(7000 == seniorManager.getTotalSalaryExpenses());

		System.out.println("================================================================\n\n\n\n");
	}

	/**
	 * Case 3:Total Expense Estimation For Department
	 */
	@Test
	public void testGetTotalEstimationForDepartment() {
		System.out.println("================================================================");

		System.out.println("Case 3:Total Expense Estimation For Department ");

		Department dept = new Department("Technology");

		Manager seniorManager1 = new Manager("Steve", 3000);
		Developer dev1 = new Developer("Raju", 1000);
		QATester qa1 = new QATester("Jhon", 1000);
		Manager manager1 = new Manager("Pete", 2000);

		manager1.add(dev1);
		manager1.add(qa1);
		seniorManager1.add(manager1);

		Manager seniorManager2 = new Manager("Kuma", 3000);
		Developer dev2 = new Developer("Rake", 1000);
		QATester qa2 = new QATester("Ping", 1000);
		Manager manager2 = new Manager("Chun", 2000);

		manager2.add(dev2);
		manager2.add(qa2);
		seniorManager2.add(manager2);

		dept.addEmployee(seniorManager1);
		dept.addEmployee(seniorManager2);

		dept.print();
		System.out.println(" Total Expenses :" + dept.getTotalSalaryExpenses());
		assertTrue(14000 == dept.getTotalSalaryExpenses());

		System.out.println("================================================================\n\n\n\n");
	}

	

}
