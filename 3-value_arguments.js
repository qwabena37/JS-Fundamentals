#!/usr/bin/env node

const [School, Hospital, Church] = process.argv;

if (School === undefined) {
  console.log("No argument");
} else {
  console.log(School);
}
