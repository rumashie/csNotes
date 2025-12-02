Keywords:
- DISTINCT: when added to SELECT keyword 'SELECT DISTINCT' removes duplicates from result set
- TOP / LIMIT: limit the total rows in the 
- ORDER BY ASC|DESC
- AND, OR
- IN
- NOT
- BETWEEN
- AS 


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


**Group By**: 

**Joins**:
**Unions**:

**Scalar Functions**:
Conditionals (CASE Expressions):

**Subqueries**:
**Transactions**:

**CTE (Common Table Expressions)**:
**Stored Procedures**:
- Temp Tables
**Views**

indexes 
Window function