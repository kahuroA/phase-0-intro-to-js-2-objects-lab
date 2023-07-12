// Write your solution in this file!
const employee={
    Name:"Jane",
    streetAddress: "256347"
}


function updateEmployeeWithKeyAndValue(ob, k, v){

    return {...ob, [k]:v};

}

function destructivelyUpdateEmployeeWithKeyAndValue(ob, k,v){
    ob[k]=v;

    return ob;
}


function deleteFromEmployeeByKey(ob,k){
    const newob={...ob};
    delete newob[k];
    return newob;
}


function destructivelyDeleteFromEmployeeByKey(ob, k){

    delete ob[k];
    return ob;
}