##Notes

Components

- Templates - html templates with angular bindings
- Class - properties / methods for handling logic
- metadata - extra data for angualr - defined with a decorator

decorator
- a function that adds metadata to a class, its members, or its method arguments.
    - Prefixed with an @
    - anuglar has a bunch of built-in decorators - example being @Component()

@Component
- selector - tag used in html
- template - same as angular 1 templates - can use data binding


TypeScript

any - can be used when you don't know or don't care about the data type

Structural Directives - Use for...of when using *ngFor
for...of ES6 looping though arrays

for...in ES5 looping over properties of an object


Property binding - binding html properies to data **prefer this
<img [src]='product.imageUrl' />

Interpolation binding -
<img src={{product.imageUrl}} />

Event Binding - <button (click)='toggleImage()'> - function on the class


Two-way Binding
<input [(ngModel)] ='listFilter'>

Pipes = transform properties before they are displayed
pipes can take params {{product.price | currency:'USD':true:'1.2-2' }}
they are seperatored by ':'


Interfaces - specification for identifying related set of properties and methods


Encapsulating component styles
- styles: ['thead { color: #337AB7;}']  inline styles for the component
- sytlesUrls: ['app/products/product-list.component.css'] - external style sheets


Lifecycle Hooks
- OnInit: Perform component initialization, retrieve data
- OnChanges: Perform action after change to input properties
- OnDestory: clean up before angular destroys the component

Pipes transform bound properties
- Can build custome pipes

Realative Paths and Module Id
- setting moduleId makes it so you can use relative urls
- only availabe using commonjs module formats


@Input decorator for a class property specifies that property comes from the directive like props in react

@Output emits an event to the parent
