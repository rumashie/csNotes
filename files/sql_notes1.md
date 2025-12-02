
## Relational Databases: Basic Database Concepts

Relational databases are tabular. They are made up of Tables, which are made up of Columns and Rows. Tables are also referred to as **relations**, rows as **tuples**, and columns as **attributes**.


**Primary Key**: A column that uniquely identifies each row in a table. No two rows can have the same primary key value, ensuring each value returns exactly one row. A combination of more than one column can also serve as a table's primary key; when a set of columns is used, it is called a **composite key**.

**Example:** A table called Customer that stores customer data.

| customer_id | customer_name | customer_phone |
| ----------- | ------------- | -------------- |
| 1           | mashie        | 000-111-2222   |
| 2           | yoshi         | 000-111-3333   |
| 3           | mario         | 000-111-4444   |
| 4           | nath          | 000-111-5555   |

In this example, the primary key of the table is the column `customer_id`. You can find the customer mashie by filtering for `customer_id = 1`. `customer_id = 1` will only return one row; `customer_id` uniquely identifies each row.

Sometimes the primary key is a system-generated sequence number that auto-increments with every added row. This type of key is called a **synthetic** or **surrogate key**, and can be configured when creating a table.

**Foreign Key**: A column that refers to the primary key of another table, linking the two tables.

**Example:** An Orders table

| order_id | customer_id | order_total | order_date |
| -------- | ----------- | ----------- | ---------- |
| 123      | 1           | 20          | 09/09/2025 |
| 456      | 2           | 50          | 08/04/2024 |

`customer_id` is the foreign key of this table, linking the Orders table to the Customer table.


Common data types supported by relational databases (the types of data you can store):

- **INT**: Whole numbers, no decimals
- **VARCHAR**: A collection of characters, text strings of a given length. Defined as `VARCHAR(n)` where n is the maximum number of characters
- **TEXT**: Large text blocks (like comments)
- **DATE**: Dates, usually in YYYY-MM-DD format
- **DATETIME**: Date and time, usually in format YYYY-MM-DD HH:MM:SS
- **BOOLEAN**: True or False values
- **DECIMAL**: Numbers with decimals, defined as `DECIMAL(M, D)` where M is total digits and D is digits after the decimal point
- **FLOAT**: Approximate decimals, 7 total digits of precision
- **DOUBLE**: Approximate decimals, 15 total digits of precision

**NULL**: NULL is a special value in databases. It is not zero or an empty string; instead, it represents the absence of data. It signifies the data is unknown or does not exist.

------------------------------------------------------------------------

## SQL Basics

SQL allows you to:
- Query existing data (get data)
- Create new data
- Modify or delete existing data

SQL **commands** can be divided into two main categories:

**Data Definition Language (DDL)** - Commands that affect the **structure** of tables/databases:
- CREATE, ALTER, DROP, TRUNCATE, RENAME

**Data Manipulation Language (DML)** - Commands that affect the **data** inside tables:
- SELECT, INSERT, UPDATE, DELETE, MERGE

---

## DDL Commands (Data Definition Language)

### Creating New Tables

To create a new table, use the `CREATE TABLE` command, followed by the table name and a list of columns and their data types.

```sql
CREATE TABLE table_name (
    column_name DATA_TYPE,
    column_name DATA_TYPE,
    column_name DATA_TYPE
);
```

Every column must have a data type, and values inserted need to adhere to that column's definition. In addition to specifying the column's data type, columns can also include **constraints**:

**Set a column as the Primary Key:**
```sql
CREATE TABLE table_name (
    column_name DATA_TYPE PRIMARY KEY,
    column_name DATA_TYPE,
    column_name DATA_TYPE
);
```

**Set a column as the Foreign Key:**
```sql
CREATE TABLE table_name (
    column_name DATA_TYPE,
    column_name2 DATA_TYPE,
    FOREIGN KEY (column_name2) REFERENCES other_table(column_name2)
);
```

**Set a column to be NOT NULL:** Not allowed to be empty. Multiple constraints can be applied to the same column.
```sql
CREATE TABLE table_name (
    column_name DATA_TYPE PRIMARY KEY NOT NULL,
    column_name DATA_TYPE,
    column_name DATA_TYPE
);
```

**Assign a column a Default value:** This value will be used if no other value is given.
```sql
CREATE TABLE table_name (
    column_name DATA_TYPE DEFAULT 0,
    column_name DATA_TYPE,
    column_name DATA_TYPE
);
```

**Add a CHECK constraint:** CHECK validates data before insertion. If the value fails the CHECK constraint, the data will not be inserted, and the DBMS will throw an error.
```sql
CREATE TABLE table_name (
    column_name DATA_TYPE,
    column_name DATA_TYPE CHECK (column_name = 'student'),
    column_name DATA_TYPE CHECK (column_name > 100)
);
```

**Use Auto-increment:** Allows a unique number to be generated automatically when a new record is inserted into a table.

For MySQL:
```sql
CREATE TABLE table_name (
    column_name INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    column_name DATA_TYPE,
    column_name DATA_TYPE
);
```

For SQL Server:
```sql
CREATE TABLE table_name (
    column_name INT IDENTITY(1,1) PRIMARY KEY,
    column_name DATA_TYPE,
    column_name DATA_TYPE
);
```

### Modifying Table Structure

The `ALTER TABLE` command is used to modify columns in an existing table, including adding and deleting columns. It can also be used to add or remove constraints on tables.

**Add a new column to an existing table:**
```sql
ALTER TABLE table_name
ADD column_name DATA_TYPE;
```

**Remove a column from a table:**
```sql
ALTER TABLE table_name
DROP COLUMN column_name;
```

**Rename a column:**
```sql
ALTER TABLE table_name
RENAME COLUMN old_name TO new_name;
```

For SQL Server:
```sql
EXEC sp_rename 'table_name.old_name', 'new_name', 'COLUMN';
```

**Change the data type of a column:**
```sql
ALTER TABLE table_name
ALTER COLUMN column_name DATA_TYPE;
```

**Modify column constraints:**
```sql
ALTER TABLE table_name
ALTER COLUMN column_name DATA_TYPE [constraints];
```

### Deleting Tables and Data

**Delete an entire table:**
```sql
DROP TABLE table_name;
```

**Delete all data inside a table (but keep the table structure):**
```sql
TRUNCATE TABLE table_name;
```

--------------------------------------------------------------------------------

## DML Commands (Data Manipulation Language)

### Selecting Data

Once the table is created, you can query the data.

**Select all columns or specify the columns from a table:**
```sql
SELECT * FROM table_name;
```

```sql
SELECT column1, column2 FROM table_name;
```

**Add conditions with WHERE clause:**
```sql
SELECT * FROM table_name
WHERE {condition};
```

### Inserting New Data
To add new records into a table, use the `INSERT INTO` command. There are two ways to use it:

**1. Specify column names and values:**
```sql
INSERT INTO table_name (column1, column3, column6)
VALUES (value1, value3, value6);
```

**2. Insert values for all columns:** If you are adding values for all columns, you do not need to specify the column names. But the values must be in the same order as the columns in the table.
```sql
INSERT INTO table_name
VALUES (value1, value2, value3);
```

#### Copying Data Between Tables
**SELECT INTO (SQL Server only, not PostgreSQL):** Copies data from one table into a new table.

```sql
SELECT *
INTO newtable
FROM oldtable;
```

Copy only specified columns:
```sql
SELECT column1, column2
INTO newtable
FROM oldtable;
```

Add conditions:
```sql
SELECT *
INTO newtable
FROM oldtable
WHERE {condition};
```

**INSERT INTO SELECT:** Copies data from one table and inserts it into another existing table.
```sql
INSERT INTO table2
SELECT * FROM table1
WHERE {condition};
```

### Updating Data
To update data inside a table, use the `UPDATE` command.

```sql
UPDATE table_name
SET column_name = new_value
WHERE {condition};
```

**Update multiple columns:**

```sql
UPDATE table_name
SET column1 = value1, column2 = value2
WHERE {condition};
```

Without a `WHERE` clause every row in the table is updated!

### Deleting Data

**Delete specific rows based on conditions:**

```sql
DELETE FROM table_name
WHERE {condition};
```

Without a `WHERE` clause, all rows will be deleted (but the table structure remains).











