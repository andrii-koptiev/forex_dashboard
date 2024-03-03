# FPFX Technologies - React Test

## Task Description

It is necessary to create and style the application using React, preferably with Next.js (Not mandatory but recommended). Use TypeScript. Develop reusable components. For styling, you can use modules, styled components (preferably TailwindCSS, not required but recommended).

**Note:** It is necessary to simulate a fake API (JSON file located in the data folder) by running the JSON server. The script to start it can be found in the `package.json` file. The JSON server needs to run concurrently with the application to fetch users.

The task consists of two parts.

### Part 1: Implement Table Functionality

1. **Search by User:**

   - Implement a search functionality allowing users to search for specific entries.

2. **Sorting:**

   - Enable sorting in both ascending and descending order.

3. **Pagination:**

   - Implement pagination to display entries.

4. **Display Entries:**

   - Display entries from 5 to 20, with the default being 10 entries shown.

5. **Current Displayed Entries:**

   - Show the number of entries currently displayed.

6. **Profit and Loss Calculation:**

   - Calculate Profit and Loss shown in the table as the sum of values in the array.

7. **Balance Calculation:**
   - Calculate the balance as (profit - loss). If the balance is positive, use the green color, if negative, use red.

### Part 2: Use Recharts for Chart Implementation

- Use [Recharts](https://recharts.org/en-US/) to implement a chart.
- Retrieve data by selecting any user from the dropdown menu.
- Display profit and loss on the chart obtained from the array.

**Note:** Chart styling is limited; it does not have to be styled like the mockup.
