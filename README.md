# Sprint 1: TypeScript CSV

### Task C: Proposing Enhancement

- #### Step 1: Brainstorm on your own.

    1. type checking data column (enhancement)
    -  WHAT? require caller to specify data type per column (or identify through algorithmic comparison --- most common type) and confirm that all data points match type or raise an error/warning/set as null
    - WHY? ensure consistency --- helpful for processing large data sets for statistical analysis, grouping, or visualization

    2. correctly handling commas within quotes
    - WHAT? parser should correctly handle commas within a field (when a field is distinguished by double quotes)
    - WHY? some fields, such as "citizenship" or "sibling names" may have more than one data point that can be separated by commas

    3. throw warning for missing fields
    - WHAT? when empty field is detected, parser should throw an error like "name: missing value"
    - WHY? helpful for cleaning/processing data to complete sound comparisons/visualizations

    4. identify header
    - WHAT? identify first row (row 0) as a header, when applicable
    - WHY? after identifying first row as header, extract labels for each column and apply them to each row of data for cleaner read (similar to record labels)
    

- #### Step 2: Use an LLM to help expand your perspective.

- #### Step 3: use an LLM to help expand your perspective.

    Include a list of the top 4 enhancements or edge cases you think are most valuable to explore in the next week’s sprint. Label them clearly by category (extensibility vs. functionality), and include whether they came from you, the LLM, or both. Describe these using the User Story format—see below for a definition. 

    Include your notes from above: what were your initial ideas, what did the LLM suggest, and how did the results differ by prompt? What resonated with you, and what didn’t? (3-5 sentences.) 

### Design Choices

### 1340 Supplement

- #### 1. Correctness

- #### 2. Random, On-Demand Generation

- #### 3. Overall experience, Bugs encountered and resolved
#### Errors/Bugs:
#### Tests:
#### How To…

#### Team members and contributions (include cs logins):

#### Collaborators (cslogins of anyone you worked with on this project and/or generative AI):
#### Total estimated time it took to complete project:
#### Link to GitHub Repo:  
