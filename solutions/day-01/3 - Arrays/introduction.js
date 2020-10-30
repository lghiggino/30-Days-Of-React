const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ]

 
    //Declare an empty array;
    let newArr = new Array()
    // Declare an array with more than 5 number of elements
    let otherArr = [1,2,3,4,5,6,7]
    // Find the length of your array
    console.log(otherArr.length)
    // Get the first item, the middle item and the last item of the array
    console.log(otherArr[0], otherArr[otherArr.length-1], otherArr[(otherArr.length-1)/2])
    // Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
    let mixedDataTypes = [1,"a", true, ["array", 7], {fruits: "bananas, apples and mandarines"}]
    // Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
    let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
    // Print the array using console.log()
    console.log(itCompanies)
    // Print the number of companies in the array
    console.log("number of companies:", itCompanies.length)
    // Print the first company, middle and last company
    console.log("first company:", itCompanies[0], "middle:", itCompanies[(itCompanies.length-1)/2], "last company",itCompanies[itCompanies.length-1])
    // Print out each company
    itCompanies.forEach(company => {
        console.log(company)
    })
    // Change each company name to uppercase one by one and print them out
    itCompanies.map(company => {
        console.log(company.toUpperCase())
    })
    // Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
    console.log(itCompanies.join(", "))
    // Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
    function existCompany (company){
        if (itCompanies.indexOf(company) === -1) {console.log("company is not found")}
        else console.log(company); 
    }
    existCompany("banana")
    existCompany("Apple")
    // Filter out companies which have more than one 'o' without the filter method
    function moreThanOne (itCompanies){
        let moreThanOneO =[]
        itCompanies.map(company => {
            if ((company.match(/\w+o{2,10}\w+|\w+o+\w+o+\w+/g))){
                moreThanOneO.push(company)
            }
        })
        console.log(moreThanOneO)
    }

    moreThanOne (itCompanies)
    // Sort the array using sort() method
    console.log(itCompanies.sort(), "sort")
    console.log(itCompanies.sort((a,b) => {
        if (a < b){
            return 1
        } if (a > b){
            return -1
        } return 0
    }),"reverse sort")
    // Reverse the array using reverse() method
    console.log(itCompanies.reverse(), "reverse sort reverse")
    // Slice out the first 3 companies from the array
    console.log(itCompanies.slice(0,3))
    // Slice out the last 3 companies from the array
    function sliceLast3 (array){
        console.log(array.splice(array.length-3))
    }

    sliceLast3(itCompanies)
    // Slice out the middle IT company or companies from the array
    function sliceMiddle (array){
        //se o array for par
        let halfL = array.length/2
        console.log(halfL)
        if (array.length % 2 === 0){
            let firstHalf = array.slice(0, halfL)
            let secondHalf = array.slice(halfL)
            firstHalf.pop()
            secondHalf.shift()
            let remadeArray = firstHalf.concat(secondHalf)
            console.log(remadeArray)
        }else{
            console.log(array[(array.length-1)/2])
        }
    }
    // Remove the first IT company from the array
    console.log(itCompanies.unshift())
    // Remove the middle IT company or companies from the array
    function removeMiddle (array){
        if (array.length % 2 === 0){
            let half = array.length / 2
            let begin = array.splice(0, half)
            let end = array
            begin.pop()
            end.shift()
            let union = begin.concat(end)
            console.log(union)
        } else {
            array.splice((array.length-1)/2, 1)
            console.log(array)
        }
    }
    // Remove the last IT company from the array
    itCompanies.pop()
    console.log(itCompanies)
    // Remove all IT companies 
    itCompanies.splice(0, itCompanies.length)
    console.log(itCompanies)

