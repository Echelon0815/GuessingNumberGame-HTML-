## What Is A Dialog element?
* A dialog element is simply a popup that appears on top of the current page, and it is designed for displaying a dialog or a modal.

## Difference between dialog and modal
* A modal is supposed to prevent client from interacting with other elements, while a dialog only show imformations and still allow client to interact with other elements.

## Features
* New dialog Element could at as either a popup or a modal, depending on which method we use: `open()` and `openModal()`

* Modal can be closed using the 'ESC' button.

* we can use the `::backdrop` psuedo-element to modify backdrop of a modal.

* we can create a form inside a dialog element, but make sure to set the form element's attribute `method` to `dialog`, then we need to set button's attribute `frommethod` to `dialog` to make the form work. 

* once the form (with attribute `method="dialog`) is submitted, the modal will be closed.

* The `returnValue` attribute stores the value of the submit button's `value` attribute that close the `dialog` element

* Although the `dialog` element is really convinient, but the "clicking other places to close the modal" feature is not built in by default. We need to add an `eventListener` by ourselves.


## mis

(Elements' Event Attribute)[https://www.w3schools.com/tags/ref_eventattributes.asp]

(Dialog element on MDN)[https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog]

(ReturnedValue of dialog)[https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/returnValue]

(`output` element)[https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output]

(There are many elements have the "name" attirbute)[https://www.w3schools.com/tags/att_name.asp]

* `name` has a lot of features, when using name with forms and input. The names represent the property of the `input` value.
* Sometimes, Name attributes are used with other elements like 'iframe', 'map'. The name attributes are used to let those elements find the target elements and display content inside the target elements.
* `name` are like `id`, a attribute used by document to find HTML element (e.g. `getElementsByName` is like `getElementById`)
* In the example below, the `output` element would show the sum of two `input` elements. Modifying the value of `id` or `name` both works. (only id & only name & name + id)
  
```HTML
<body>
    <form oninput="result.value=parseInt(a.value)+parseInt(b.value)">
        <input type="range" id="b" name="b" value="50" /> +
        <input type="number" id="a" name="a" value="10" /> =
        <output id="result" name="test" for="a b">60</output>
      </form>
</body>
```