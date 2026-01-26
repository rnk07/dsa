class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}


class LinkedList {
    constructor() {
        this.head = null
    }



    append(value) {

        const newNode = new Node(value)

        if (!this.head) {
            this.head = newNode
            return
        }

        let current = this.head
        while (current.next) {
            current = current.next
        }
        current.next = newNode


    }

    // Merger Sort

    mergeSort(head = this.head){

    // base case
    if(!head || !head.next) return head

    // split
    const middle = this.getMiddle(head)
    const rightHead = middle.next
    middle.next = null

    // sort halves
    const left = this.mergeSort(head)
    const right = this.mergeSort(rightHead)

    // merge
    return this.merge(left,right)


    }


    getMiddle(head){
        let slow = head
        let fast = head.next


        while(fast & fast.next){
            slow = slow.next
            fast = fast.next.next
        }

        return slow
    }


    merge(l1,l2){
        let dummy = new Node(0)
        let tail = dummy


        while(l1 && l2){
            if(l1.value <= l2.value){
                tail.next = l1
                l1 = l1.next
            }else{
                tail.next = l2
                l2 = l2.next
            }
            tail = tail.next
        }

        tail.next = l1 || l2
        return dummy.next
    }



}


const list = new LinkedList()
list.append(8)
list.append(81)
list.append(1)
list.append(0)
list.append(5)
list.append(4)

console.log(list)
list.head = list.mergeSort()
console.log(list)