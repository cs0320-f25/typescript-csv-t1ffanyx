import { parseCSV } from "../src/basic-parser";
import * as path from "path";
import { z } from "zod";

const PEOPLE_CSV_PATH = path.join(__dirname, "../data/people.csv");

// given tests (result: arrays)

test("parseCSV yields arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH)
  
  expect(results).toHaveLength(12);
  expect(results[0]).toEqual(["name", "age"]);
  expect(results[1]).toEqual(["Alice", "23"]);
  expect(results[2]).toEqual(["Bob", "thirty"]); // why does this work? :(
  expect(results[3]).toEqual(["Charlie", "25"]);
  expect(results[4]).toEqual(["Nim", "22"]);
});

test("parseCSV yields only arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH)

  for(const row of results) {
    expect(Array.isArray(row)).toBe(true);
  }
});

/**
 * extended testing suite:
 * - missing data
 * - attributes of a fields: commas, spaces, quotations 
 * - special characters
 * - schema
 * - column headers [come back to test]
 * - large files [come back to test]
 */

// missing values handled

test("parseCSV missing values", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH)

  expect(results[5]).toEqual(["", "23"]);
});

// attributes of fields: quotes, commas, spaces

test("parseCSV: quoted fields", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH);
  expect(results[6]).toEqual(["Alice", "fifty"]);
});

test("parseCSV: commas", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH);
  expect(results[7]).toEqual(["Milton, Dan", "29"]);
});

test("parseCSV: spaces", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH);
  expect(results[8]).toEqual(["Ali Bally", "20"]);
});

test("parseCSV: decimal", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH);
  expect(results[11]).toEqual(["Bella", "12.9"]);
});


// special characters

test("parseCSV: special character last", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH);
  expect(results[9]).toEqual(["MICHA!!!", "10"]);
});

test("parseCSV: special character first", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH);
  expect(results[10]).toEqual(["~nina", "16"]);
});

// too many columns (mismatch) --> throw error

// test("parseCSV: too many columns", async () => {
//   const results = await parseCSV(PEOPLE_CSV_PATH);
//   expect(results[12]).toEqual(["MICHA!!!", "10"]);
// });

// schema: not specified (returns strings, in first example)

// schema doesn't match provided

// test("parseCSV: schema provided", async () => {
//   const PersonSchema = z.object({
//     name: z.string(),
//     age: z.union([z.string(), z.number()]),
//   });

//   const results = await parseCSV(PEOPLE_CSV_PATH, { schema: PersonSchema });

//   expect(results[1]).toEqual([{ name: "Alice", age: "23"}]);
// });

// column header [think of how to test]






