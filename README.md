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

    **Is there overlap with what you thought of?**
    - comma usage in quoted fields
    - leader row detection
    - empty data points/rows
    - data validation (types)
    - schema validation
    - row length mismatches (e.g. extra columns)
    **What possible concerns did it point out that you may have missed** 
    - other forms of delimiters (e.g. semicolons, tabs, or user-specific)
    - embedded newlines
    - error handling
    **Where might it have missed the point?** 
    - The response did not begin by outlining the functionality and measurements of success for the parser: What defines a good parser? To produce more informed feedback, the LLM should evaluate goals and criteria in parsing (e.g. what assumptions can we make, what ranges of CSVs are we assessing, what determines good parsing, how large do we anticipate files to be, what purpose do we hope the parser will serve, etc.)

    **Modifying Prompt: First** 
    - What did I modify? To the original prompt, I added information about assumptions we can hold true in our build + need for functionality. For example, I specified that the delimiter is a comma, rows are separated by newlines, and all values are raw strings.
    **Modifying Prompt: Second**
    - What did I modify? In my second iteration, I asked the LLM to re-evaluate potential edge cases and design options from a consumer-centric perspective; Prior to asking the LLM to brainstorm missing features and edge cases, I required it to walk through a developer's goals, demands, and operations when using a CSV parser. 
    **Impact: Similarities and Differences**
    While the revised prompts often flagged similar potential issues — missing fields, header identification, quoted fields, row structure, schema/data validation, etc. — the latter responses catered recommendations and analysis to more closely extend of real, likely developer problems and suggested additional considerations given possible individualized user specifications. For example, the last (and most specific) prompt response touched not only on the importance of identifying CSV headers, but also addressed unique attributes of header labels (e.g. special characters) and need for developer control in supplying/manipulating column names. 


- #### Step 3: use an LLM to help expand your perspective.

    Include a list of the top 4 enhancements or edge cases you think are most valuable to explore in the next week’s sprint. Label them clearly by category (extensibility vs. functionality), and include whether they came from you, the LLM, or both. Describe these using the User Story format—see below for a definition. 

    Include your notes from above: what were your initial ideas, what did the LLM suggest, and how did the results differ by prompt? What resonated with you, and what didn’t? (3-5 sentences.) 

    **4 enhancements**
    1. Functionality: Data Validation
    In our parser, we are assuming that developers are able to specify a object type/schema to produce more accurate and clear framing of a data point in context. Thus, it is necessary for our parser to check if a schema/type is provided and, if so, whether our data output matches the desired Zod type. 

    As a user, I may also want to conduct quantitative analysis of a large set of data points (e.g. hours spent on CSCI 0320 homework weekly). To easily complete this task, it is vital that the data within each field is coerced into the same type for accurate cross-comparison. Thus, the parser should also identify + convert columns into the appriopriate type. 

    2. Functionality: Missing Information
    When loading in a CSV, one of my first priorities is confirming that the data is not corrupt or malformed, with missing or inconsistent structure and information. To prevent against this, the parser should throw an error if missing or inconsistent fields are identified. By implementing this feature, a user does not need to tediously, manually pick through a large dataset to pinpoint structural errors (which can be minute and difficult to locate).

    3. Functionality: Field Structure + Attributes
    Within a column and data point, each individual field may be structured different (with quotes, commas, special characters, etc.). However, it may be difficult for a parser to recognize what information can be isolated to a field and what can be attributed as a delimiter. When sorting through a CSV, appriopriate recognition of a field's qualities is extremely important for accuracy of analysis and consistency. For example, if a header's column labels are "name,age,time spent on CSCI" and one data point is incorrectly parsed to output "Tiffany, Xiao, 16, years old, four," the data may be inaccurately flagged for extraneous columns/information due to incorrect splitting. 

    4. Enhancement: Header Handling
    A developer may be interested in custom labeling the headers to a dataset after initial loading it to more clearly understand/describe the data in a column. Therefore, it would be helpful if the parser is able to recognize when a header is present and allow for easy manipulation of fields in the header row. 

    **Initial Ideas and Evolution**
    Initially, I brainstormed broad areas to test or strategically assess: data formatting within a field, high-level structure, and data manipulation. While most of my ideas remained consistent throughout the brainstorming process (from initial ideation to LLM prompting and refinement to final proposition), I continued to polish my recommendations in each stage to most efficiently adapt to user/developer needs. For example, I initially proposed type validation per column as an enhancement feature, but when I more concretely walked through a developer's concerns of usable structures and escaping issues, I reached the conclusion that type validation is necessary, not voluntary. 

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
