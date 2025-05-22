const {add,throwAnError} = require("./util")
// import {add} from "./util"

test("should return 2",()=>{
    expect(add(1,1)).toBe(2)
})


test("should throw an error",()=>{
    expect(()=>{
        throwAnError()
    }).toThrow();

})
