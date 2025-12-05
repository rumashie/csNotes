#### SQL Notes 2
Keywords:
- **DISTINCT**: when added to SELECT keyword 'SELECT DISTINCT' removes duplicates from result set
- **TOP / LIMIT**: limit the total rows in the result set
  	- SQL Server: ```sql SELECT TOP (X) FROM table;``` (x is total number of rows you want returned)
  	- MySQL: ```sql SELECT * FROM table LIMIT (X); ```
- **ORDER BY ASC|DESC**: order by organize the result set in ascending or descending (ASC is default if no value given) order based on given columns. You can ORDER BY multiple columns, they will be organized by the columns orders the first column will take precedent.
- **AND**, **OR**: AND, OR operators to use in WHERE clauses to create conditionals
- **IN**: allows you to specify multiple values in a WHERE clause
   ```sql
	SELECT * FROM table WHERE column IN (value1, value2, value3);
   ```
- **NOT**: negates some condition. NOT takes precedence before all operators except parenthesis (). Use parenthesis to clarify statements you are negating.
	- WHERE NOT importKey < 10 is parsed as WHERE (NOT importKey) > 10 because NOT has higher precedence than comparison operators.
	- Instead, WHERE NOT (importKey < 10) 
- **BETWEEN**: selects values within a given range. The values can be numbers, text, or dates. The BETWEEN operator is inclusive: begin and end values are included (be careful with dates without time, parts of the day may not be included). 
- **AS**: keyword to create aliases, creates a 'nickname' for database objects (tables, columns, databases). you can skip the AS keyword and create an ALIAS. You can refer to an object using its alias. 
 ```sql
   SELECT * FROM table AS t;
   SELECT * FROM table t;    
  ```

SQL Standard Precedence (highest to lowest):
	- (): parentheses
	- Unary operators (NOT, unary + / unary -)
	- Multiplicative (*, /)
	- Additive (+, -)
	- Comparison (=, <, >, <>, <=, >=, BETWEEN, LIKE, IN)
	- AND
	- OR

**Aggregate Functions**: Built in functions that perform a calculation on a set of values and returns a single value
- MIN(): returns the smallest value within the selected column
- MAX(): return the largest value
- COUNT(): returns the number of rows in a set 
- COUNT(\*): counts the total number of rows in a table or result set (including NULL)
- SUM(): returns the sum of a numerical column
- AVG(): returns the average value of a numerical column

```sql
SELECT MIN(column) AS {result_column_name} FROM table_name;
SELECT MAX(column) FROM table_name WHERE {condition}; 
```

```sql
SELECT COUNT(column) FROM table_name WHERE {condition};
SELECT COUNT(*) FROM table_name WHERE {condition};
```

```sql
SELECT SUM(column) FROM table_name;
SELECT AVG(column) FROM table_name;
```

**LIKE Operator**: Used to build WHERE clauses to search for a specified pattern in a column
```sql
SELECT * FROM table_name WHERE column LIKE '%xyz_';
```
- Wildcards
	- % represents zero, one or multiple characters (anything)
	- _ represents one, single character


**Group By**: groups rows that have the same balues into summary rows. GROUP BY statements are often used with aggregate functions to group result-set by one or more columns.
- When you use GROUP BY, every column you select must be inside of an aggregate function OR in the GROUP BY clause. Since GROUP BY is grouping/combining multiple rows, it would not know what value to show for columns that are not in group by clause or inside a aggregate funciton. 
```sql
SELECT COUNT(item), orderID
FROM table
GROUP BY orderID;

-- Find the orders with the most items
SELECT COUNT(item) AS total_items, orderID
FROM table
GROUP BY orderID
ORDER BY total_items DESC;
```

**Joins**:
**Unions**:

**Scalar Functions**: built in functions that operate on 1 single value and return 1 single value. Usually used for data cleaning and manipulation.
 - USCASE(value): converts string to uppercase
 - LCASE(value): converts string to lowercase




**Conditionals (CASE Expressions)**:
**Subqueries**:
**Transactions**:
**CTE (Common Table Expressions)**:
**Stored Procedures**:
- Temp Tables
**Views**


indexes 
Window function
