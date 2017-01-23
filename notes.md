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
