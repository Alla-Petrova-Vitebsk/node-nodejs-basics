import __dirname from "../dirName.js";
import { join } from 'path';
import { writeFile } from "fs/promises";

export const create = async () => {
  const pathToFile = join(__dirname, 'fs','files', 'fresh.txt');
  try {
    await writeFile(pathToFile, 'TI am fresh and young',{flag:'wx'});
  } catch (err) {
    console.error('FS operation failed', err.message)
  }
};

create();