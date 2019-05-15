## Stack

In this problem, students are asked to implement a stack-liked class. 
The class should contain these following operations.

- **```push(T item)```**: Adds the element item which has a type of **T** at the top of the stack.
- **```pop()```**: Deletes the top most element of the stack and return out the element.
- **```size()```**: Returns the size of the stack.
- **```top()```**: Returns a reference to the top most element of the stack.
- **```isEmpty()```**: Returns whether he stack is empty or not. 

## Queue

In this problem, students are asked to implement a queue-liked class.
The class should contain these following operations.

- **```enqueue(T item)```**: Adds the element item which as a type of T at the rear of the queue. 
- **```dequeue()```**: Removes the front element of the queue and return the ejected-element to the caller.
- **```peek()```**: Returns the front element present in the queue without dequeuing it.
- **```isEmpty()```**: Checks if the queue is empty.
- **```size()```**: Returns the number of elements present in the queue.

#### Condition
Within the Queue class, only **an instance of the Stack class** is allowed to use as an 
elements container. Therefore, more than one of a Stack instance is not prohibited.  

#### Example Code Layout
To demonstrate, the Queue class should have an implementation format similar to this.

```cpp
...
template <typename T>
class Queue<T> {
    public:
        void enqueue(T item);
        T dequeue();
        T peek() const;
        bool isEmpty() const;
        int size() const;
    private:
        Stack<T> container;
}
...
```

## The mighty Thor and his storm-breaker
After several of obstacles, Thor finally obtains his new weapon - the Storm-breaker axe.
Thor aims to use this axe in the upcoming battle, the infinity war. For the axe ability, when it hits
the ground, it'll result the surrounding areas to be damaged. Then, Thor decided to hit the axe on the ground carefully.
Hence, before he smash the axe on the ground, he has to simulate the damage that will occur on the battle area.
But, this kind of operation would cause Thor a lot of calculations. So, Thor asked you, a very great Software Engineering student, to design and implement a program which simulate the damage that is caused by the Storm-break axe.

### Input
- **line 1**: p - The initial power of the axe. (1 <= p <= 10000)
- **line 2**: x, y - The coordinate is inputted, and be used as a hitting point of the axe. 
- **line 3**: n - The size of the battle field which is n x n.
 
### Output
- n rows and n columns of matrix illustrates the damage done by the storm breaker.

### Test case - 1
#### Input
```cpp
9
3 3
5
``` 

#### Output
```cpp
5 6 7 6 5
6 7 8 7 6
7 8 9 8 7
6 7 8 7 6
5 6 7 6 5 
```

## Indexed-Linked-List




