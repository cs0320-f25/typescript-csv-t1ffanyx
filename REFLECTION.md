1. Correctness
- input: the program is able to take most (if not all forms) of CSVs, regardless of internal structure, file size, or other inconsistencies
- output: the parser produces output corresponding to appropriate type (object if specified, string[][] if generic)
- corrupt data: caller is notified of any damaged/inconsistent data (e.g. data that cannot be properly coerced into necessary type, missing fields, extraneous columns); this includes not only raising/notifying of error, but explicitly stating error for ease of resolution
- operation: parser runs through csv line by line iteratively 
- performance & reliability: parser runs smoothly (without crashing) through large, faulty, or complex data sets
- adapability: program should successfully navigate optional headers, flexible naming conventions, etc. 

2. Random, On-Demand Generation
- large data: create large data sets to test robustness of program
- delimiter variations: create CSVs that use other characters (such as semicolons or spaces) as delimiters
- edge cases: generate random variations of inconsistently structured fields, with a mix of special characters, long strings, spaces, etc. 
- schemas: create personalized schemas to see if program is adaptable, responsive

3. Overall experience, Bugs encountered and resolved
This sprint challenged me to navigate with functions, libraries, and syntax that I was unfamiliar with while simultaneously tackling a programming problem at a conceptual level. While working, I needed to both embrace a questioning and curious mindset — reminding myself to search up syntax conventions, data structure functionality, and niche details like error handling/message printing — while taking a hands-on approach to writing code. Previously having primarily worked with object-oriented Java, which is very particular about criteria like statement terminators and type definition, I was cautious about identifying what loosened regulation in TypeScript is effective and where failures to specify can lead to down-the-line complications. Some bugs I intiailly faced were related to appropriately working with union types. Initially, some operations were throwing errors because I was incorrectly setting types that were incompatible, which led me to more closely analyze how TypeScript narrows union types and how type checking works in different contexts.

