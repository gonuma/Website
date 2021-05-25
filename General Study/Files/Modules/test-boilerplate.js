"use strict";
// Please don't delete the 'use strict' line above

function test(actual, expected) {
  if (_.isEqual(actual, expected)) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.trace();
    console.groupEnd();
  }
}
