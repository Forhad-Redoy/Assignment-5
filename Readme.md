1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
-->The primary differences between getElementById, getElementsByClassName, and querySelector/querySelectorAll lie
   in their selection criteria, return types, and whether the returned collections are live or static.

2.How do you create and insert a new element into the DOM?
-->Creating and inserting a new element into the DOM in JavaScript involves two main steps: 
  creating the element and then attaching it to an existing element in the DOM tree.

3.What is Event Bubbling and how does it work?
-->Event bubbling is the process where a triggered DOM event on a nested element, like a click, travels up
   from the target element to its ancestors and eventually to the root of the document. Each ancestor element
   has a chance to handle the event, and this mechanism allows for event delegation, where a single parent 
   element can manage events for multiple child elements, improving performance and code organization.     

4.What is Event Delegation in JavaScript? Why is it useful?
-->Event delegation is a powerful pattern in JavaScript that improves both the performance and
 maintainability of your code, especially when dealing with dynamic content or a large number of 
 elements. By leveraging event bubbling, you can reduce the number of event listeners 
 and streamline your code.

5.What is the difference between preventDefault() and stopPropagation() methods?
-->preventDefault() is used to prevent the default action that belongs to the event, 
such as preventing a form from submitting. event. stopPropagation() is used to stop
 the event from bubbling up to parent elements, preventing any parent event handlers
  from being executed.