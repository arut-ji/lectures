(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{170:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("h2",{attrs:{id:"stack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stack","aria-hidden":"true"}},[t._v("#")]),t._v(" Stack")]),t._v(" "),s("p",[t._v("In this problem, students are asked to implement a stack-liked class.\nThe class should contain these following operations.")]),t._v(" "),s("ul",[s("li",[s("strong",[s("code",[t._v("push(T item)")])]),t._v(": Adds the element item which has a type of "),s("strong",[t._v("T")]),t._v(" at the top of the stack.")]),t._v(" "),s("li",[s("strong",[s("code",[t._v("pop()")])]),t._v(": Deletes the top most element of the stack and return out the element.")]),t._v(" "),s("li",[s("strong",[s("code",[t._v("size()")])]),t._v(": Returns the size of the stack.")]),t._v(" "),s("li",[s("strong",[s("code",[t._v("top()")])]),t._v(": Returns a reference to the top most element of the stack.")]),t._v(" "),s("li",[s("strong",[s("code",[t._v("isEmpty()")])]),t._v(": Returns whether he stack is empty or not.")])]),t._v(" "),s("h2",{attrs:{id:"queue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#queue","aria-hidden":"true"}},[t._v("#")]),t._v(" Queue")]),t._v(" "),s("p",[t._v("In this problem, students are asked to implement a queue-liked class.\nThe class should contain these following operations.")]),t._v(" "),s("ul",[s("li",[s("strong",[s("code",[t._v("enqueue(T item)")])]),t._v(": Adds the element item which as a type of T at the rear of the queue.")]),t._v(" "),s("li",[s("strong",[s("code",[t._v("dequeue()")])]),t._v(": Removes the front element of the queue and return the ejected-element to the caller.")]),t._v(" "),s("li",[s("strong",[s("code",[t._v("peek()")])]),t._v(": Returns the front element present in the queue without dequeuing it.")]),t._v(" "),s("li",[s("strong",[s("code",[t._v("isEmpty()")])]),t._v(": Checks if the queue is empty.")]),t._v(" "),s("li",[s("strong",[s("code",[t._v("size()")])]),t._v(": Returns the number of elements present in the queue.")])]),t._v(" "),s("h4",{attrs:{id:"condition"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#condition","aria-hidden":"true"}},[t._v("#")]),t._v(" Condition")]),t._v(" "),s("p",[t._v("Within the Queue class, only "),s("strong",[t._v("an instance of the Stack class")]),t._v(" is allowed to use as an\nelements container. Therefore, more than one of a Stack instance is not prohibited.")]),t._v(" "),s("h4",{attrs:{id:"example-code-layout"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-code-layout","aria-hidden":"true"}},[t._v("#")]),t._v(" Example Code Layout")]),t._v(" "),s("p",[t._v("To demonstrate, the Queue class should have an implementation format similar to this.")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("template")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typename")]),t._v(" T"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Queue")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("T"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("enqueue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("T item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        T "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dequeue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        T "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("peek")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isEmpty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        Stack"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("T"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" container"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),s("h2",{attrs:{id:"the-mighty-thor-and-his-storm-breaker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-mighty-thor-and-his-storm-breaker","aria-hidden":"true"}},[t._v("#")]),t._v(" The mighty Thor and his storm-breaker")]),t._v(" "),s("p",[t._v("After several of obstacles, Thor finally obtains his new weapon - the Storm-breaker axe.\nThor aims to use this axe in the upcoming battle, the infinity war. For the axe ability, when it hits\nthe ground, it'll result the surrounding areas to be damaged. Then, Thor decided to hit the axe on the ground carefully.\nHence, before he smash the axe on the ground, he has to simulate the damage that will occur on the battle area.\nBut, this kind of operation would cause Thor a lot of calculations. So, Thor asked you, a very great Software Engineering student, to design and implement a program which simulate the damage that is caused by the Storm-break axe.")]),t._v(" "),s("h3",{attrs:{id:"input"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#input","aria-hidden":"true"}},[t._v("#")]),t._v(" Input")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("line 1")]),t._v(": p - The initial power of the axe. (1 <= p <= 10000)")]),t._v(" "),s("li",[s("strong",[t._v("line 2")]),t._v(": x, y - The coordinate is inputted, and be used as a hitting point of the axe.")]),t._v(" "),s("li",[s("strong",[t._v("line 3")]),t._v(": n - The size of the battle field which is n x n.")])]),t._v(" "),s("h3",{attrs:{id:"output"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#output","aria-hidden":"true"}},[t._v("#")]),t._v(" Output")]),t._v(" "),s("ul",[s("li",[t._v("n rows and n columns of matrix illustrates the damage done by the storm breaker.")])]),t._v(" "),s("h3",{attrs:{id:"test-case-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#test-case-1","aria-hidden":"true"}},[t._v("#")]),t._v(" Test case - 1")]),t._v(" "),s("h4",{attrs:{id:"input-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#input-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Input")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n")])])]),s("h4",{attrs:{id:"output-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#output-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Output")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" \n")])])]),s("h2",{attrs:{id:"indexed-linked-list"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#indexed-linked-list","aria-hidden":"true"}},[t._v("#")]),t._v(" Indexed-Linked-List")])])}],!1,null,null,null);e.default=n.exports}}]);