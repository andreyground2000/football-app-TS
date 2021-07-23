import fs from "fs";

export class CsvFileReader {
    constructor(public filename: string, public data:string[][] = []) {}

    read(): void {
        this.data = fs.readFileSync(this.filename, {
            encoding: "utf-8",
        })
        .split("\n")
        .map((row: string) : string[] => { 
            return row.split(",");
        });
    }
}

