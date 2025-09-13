import * as fs from "fs";
import * as readline from "readline";
import { ZodType } from "zod";

/**
 * This is a JSDoc comment. Similar to JavaDoc, it documents a public-facing
 * function for others to use. Most modern editors will show the comment when 
 * mousing over this function name. Try it in run-parser.ts!
 * 
 * File I/O in TypeScript is "asynchronous", meaning that we can't just
 * read the file and return its contents. You'll learn more about this 
 * in class. For now, just leave the "async" and "await" where they are. 
 * You shouldn't need to alter them.
 * 
 * @param path The path to the file being loaded.
 * @returns a "promise" to produce a 2-d array of cell values
 */
export async function parseCSV<T>(
  // specify parameters
  path: string,
  schema?: ZodType<T>,
): Promise<string[][] | T[]> // generic string or specified schema 

{ 
  // This initial block of code reads from a file in Node.js. The "rl"
  // value can be iterated over in a "for" loop. 
  const fileStream = fs.createReadStream(path);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity, // handle different line endings
  });

  // Create an empty array to hold the results
  let result = []
  
  // We add the "await" here because file I/O is asynchronous. 
  // We need to force TypeScript to _wait_ for a row before moving on. 
  // More on this in class soon!
  for await (const line of rl) {
    const values = line.split(",").map((v) => v.trim());
    result.push(values)
  }

  // empty csv, return empty list
  if (result.length === 0) {
    return [];
  }

  // no schema provided
  if (!schema) return result;

  // schema provided, rows should follow object structure
  const [headerRow, ... dataRows] = result; // split top headerRow with data entries
  return dataRows.map( row => {
    const obj: Record<string, unknown> = {};
    headerRow.forEach((h, i) => {
      obj[h] = row[i];
    })
    return schema.parse(obj);
  });

}