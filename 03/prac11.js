class Node {

    constructor(value) {
        console.log(`I am in Constructor of Node`)
        this.value = value
        this.next = null;
    }

}


class SinglyLinkedList {


    constructor() {
        console.log(`I am in Constructor of Singly`)
        this.head = null
        this.size = 0;
    }

    // Insert at end

    append(value) {
        const newNode = new Node(value)

        if (this.head === null) {
            this.head = newNode
            console.log(newNode)
            console.log(`Head Null`)
        } else {
            console.log(`Head not null`)
            let current = this.head
            console.log(current)
            while (current.next != null) {

                current = current.next
            }
            current.next = newNode
            console.log(current)
        }

        this.size++
    }

    // Insert at Front

    prepend(value){
        const newNode = new Node(value)

        newNode.next = this.head;
        this.head = newNode
        this.size++
    }

    // Remove by value

    remove(value){
        if(!this.head) return

        if(this.head.value === value){
            this.head = this.head.next
            this.size--
            return
        }

        let current = this.head
       
        while(current.next && current.next.value !== value){
           
            current = current.next
        }
        if(current.next){
           
            current.next = current.next.next
            this.size--
        }


    }

    // Search Ele

    search(value){
        let current = this.head
        while(current){
            if(current.value === value){
                return true
            }
            current =current.next
        }
        return false
    }


    print() {
        let current = this.head
        let output = ''

        while (current) {
            output = output + current.value + '->'
            current = current.next
        }
        console.log(output + 'null')
    }

}

const list = new SinglyLinkedList()
console.log(list)

list.append(10)
list.append(15)
list.append(20)
list.append(25)
list.remove(20)
console.log(list)

