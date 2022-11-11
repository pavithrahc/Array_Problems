let simpleArray=[1,2,4,5,6]
console.log(simpleArray)
let simpleObject ={ FirstPraperty:10,
    secondpraperty :"pavithra"
}
console.log(simpleObject)

//let secondValue= simpleObject.secondpraperty
//console.log(secondValue)

let secondValue= simpleObject.FirstPraperty
console.log(secondValue)
console.log(typeof secondValue)

let secondObject= {
    1:" name",
    2:"Address",
    3:"pincode"
}

let thirdValue= secondObject[1]
console.log(thirdValue)
console.log(typeof thirdValue)  

let objectArr= {
    First :16,
    second:" second",
    $:"five",
    nulling:null,
    undef: undefined

}
console.log(Object.keys(objectArr))
console.log(Object.values(objectArr))



let SimpleObject1 ={
    firstName:" pavithra",
    lastName:"hc",
    address:"bangalore"
}

let SimpleObject2 ={
    firstName:" madhu",
    lastName:"b",
    address:"tumkur"
}

let SimpleObjectArray=[SimpleObject1,SimpleObject2]
console.log(SimpleObjectArray[1].firstName)

let simpleObject3={
    firstName:"pranali",
    address:"karnataka",
    phone:[12344556,2456789,58900426,256667]
}


let apicall = {
    someProp: "Value",
    somenestedPRop: {
        somepropnseted: 45,
        somepropnestedtwo: [
            {
                firstprop: {
                    secondvalue: 56
                }
            },
            {

            }
        ]
    }
}

let secondvalue1= apicall.somenestedPRop.somepropnestedtwo[0].firstprop.secondvalue
console.log(secondvalue1)