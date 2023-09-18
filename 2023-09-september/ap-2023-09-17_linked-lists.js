/*
You are given a node that is the beginning of a linked list. 
This list contains a dangling piece and a loop. 
Your objective is to determine the length of the loop. 

Use the `getNext' method or 'next' property to get the following node.
node.getNext()
node.next


do NOT mutate the nodes!
in some cases there may be only a loop, with no dangling piece

*/

function loop_size(node) {
    var turtle = node;
    var rabbit = node;

    //* first, we need turtle and rabbit to be inside the loop on the sameF node
    //* so, have the rabbit move twice as fast as the turtle
    //* this will guarantee that it completes one cycle of the list before
    //* they are on the same node
    do {
        turtle = turtle.getNext();
        rabbit - rabbit.getNext().getNext();
    } while (turtle != rabbit);

    //* then, freeze the turtle and have the rabbit complete another lap at normal pace
    //* while counting up.
    //* once rabbit reaches turtle again, we've found the length of the closed list
    let count = 0;
    do {
        count++;
        rabbit = rabbit.getNext();
    } while (turtle != rabbit);

    return count;
}
