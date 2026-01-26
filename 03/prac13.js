class HashTable {
    constructor(size = 5) {
        this.table = new Array(size)
        this.size = size
        this.count =0;
    }


    hashFunc(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = hash + key.charCodeAt(i)
        }
        console.log(`Index found from hashFunc: ${hash % this.size}`)
        return hash % this.size
    }


    set(key, value) {
        const index = this.hashFunc(key)
       
        console.log(index)

        if (!this.table[index]) {
            this.table[index] = []
        }
        this.table[index].push([key, value])
        this.count++

        if(this.count /this.size >0.7){
            console.log(`Need to do Rehasing as load factor is: ${this.count /this.size}`)
            this.reHashing();
        }
    }


    reHashing(){
        const oldTable = this.table

        this.size = this.size *2
        this.table = new Array(this.size)
        this.count = 0

        for(let bucket of oldTable){

            if(bucket){
                for(let[key,value] of bucket){
                    this.set(key,value)
                }
            }

        }
    }


    get(key){
        const bucket  = this.table[this.hashFunc(key)]

        if(!bucket) {
            let ans = `Entered key: ${key} not found.`
            
            return ans;
        }

        for(let i=0; i<bucket.length;i++){
            if(bucket[i][0] === key){
                // bucket.splice(i,1)
                let ans = `Key Found : ${bucket[i][0]} , value is :${bucket[i][1]}`
                return ans
            }
        }
       
    }


    remove(key){

        const index = this.hashFunc(key)
        const bucket = this.table[index]

     if(!bucket) return false
     for(let i =0; i<bucket.length;i++){
        if(bucket[i][0] === key){

            bucket.splice(i,1);
            return true
        }
        return false
     }



    }


}


const ht = new HashTable()
ht.set("abc", 11)
ht.set("apple", 12)
ht.set("mangoe",15)
ht.set("Kiwi",17)

console.log(ht.table)


// let a = [1,2,3,4]
// console.log(a.splice(0,1))
// console.log(a)