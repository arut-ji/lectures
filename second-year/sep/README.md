# Software Engineering Principle 


## Equivalence partitions
- Break values into three ranges.
- Minimum: the range which is very low and rarely encountered.
- Mid: the range which is encountered very often.
- Maximum: the range which is very low and rarely encountered.

## Search routine specification
Test cases can be derive base on the partitioning technique.
### Define
- Pre-condition
- Post-condition
- Additional conditions


## Structural testing
- Sometime called white-box testing.
- Derivation of test cases according to program structure. Knowledge of the program
is used to identify additional test cases.
- Objective is to exercise all program statements (not all path combinations).
- Try to create the highest coverage of the code.

## Basic Path Testing
 ### Flow Graph Notation
 - Convert statements into nodes.
 - **Region**: enclosed-area in the graph.
 - In defining number of paths, uses the **Cyclomatic complexity technique**.
 - Use the number of regions.
 - **V(G) = E - N + 2**
    - **E**: Number of edges
    - **N**: Number of nodes
 - **V(G) = P + 1**
    - **P:** predicate nodes - nodes those leads to more than 2 nodes.
 - Cyclomatic Complexity considers only in the syntactical aspect.
 
 
 ### Deriving Test Cases
1. Using the design or code as a foundation, draw a corresponding flow graph.
2. Determine the cyclomatic complexity of the resultant flow graph.
3. Determine a basis set of linearly independent paths.
4. Prepare test cases that will force execution of each path in the basis set. 
    
 # Final Exam Guideline [Lecture]
 - **Closed-book exam**
 ## Final Lecture-exam
 - Focuses on **Object-Oriented Analysis and Design**.
    - **Diagrams**: derives diagrams from requirements
        - Use-case Diagram 
        - Sequence Diagram
        - Class Diagram
        - State-chart Diagram
 - Testing.
    - Testing definitions
    - Basic Path Testing

## Final Lab-exam [Laboratory]
- Basic concept of Python implementation: **Polymorphism, Inheritance**
- Class Diagrams --> Python Code
- Some diagrams.
- Chapter 13 

