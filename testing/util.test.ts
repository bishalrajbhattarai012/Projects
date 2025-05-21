
const {expect,toBe,describe,it,test} = require("jest")
const {add} = require("./util")

describe("Utility",()=>{

    test("should return 2",()=>{

        expect(add(1+1).toBe(2))

    })

})