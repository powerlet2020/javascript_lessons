//  ARRAY METHODS 

        // unshift and push 
        const myarray = [ 'hamza',6, 'go','away']
        myarray.push('powerlet')
        console.log(myarray)
        myarray.unshift('zology')
        console.log(myarray)

        //   shift and pop
        myarray.pop()
        console.log(myarray)
        myarray.shift()
        console.log(myarray)

        // concatenate() use to join two arrays 
        const array1 = ['orange', 'mango']
        const array2 = ['peeper','onion']
        const myNewArray = array1.concat(array2)
        console.log(myNewArray)

        //  sort method to arrange in ascending order

        myNewArray.sort()
        console.log(myNewArray)

        //  slice method is used to craete a new array from an existing one 
        const arr = ['hey', 'true','false', 'goal']
        const newArray = arr.slice(0, 3)
        console.log(newArray)