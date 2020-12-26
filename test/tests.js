var assert = require('assert')

describe("Task selection tests", () => {
    it('Should select a task and assign it to a person',
    () => {
        var result = "some text"
        assert.equal(result.length, 2)
    })
})



// final output should be an array with 2 strings


// on first button click, a randomly selected task is given to a randomly selected person
// on next button click, that task and that person are excluded from the things that can be randomly selected
// the initial program state is saved to a file
// on each button click, the current program state is retrieved from a file
// on each button click, the new program state is saved to a file
// when there are no people remaining, everyone is re-added to the random selection pool
// when there are no tasks remaining, return "out of tasks"
// if a file is empty