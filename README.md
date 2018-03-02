
## Create a search pipe to dynamically filter results with Angular-2
A very common use case of this is to have an input box where a user enters a search text and the results are filtered appropriately.
In our amplification was necessary to integrate a filter in order to make it easy to search for a Project, because sometimes looking for a Project among hundreds of these can be very annoying.

### 1- Create the Filter Pipe
For pipe creation we use the following command:
```sh
$ ng g pipe filter-text
```
Let’s populate the pipe with code for the filter, Here is the code:

<p align="center"><img width="90%" src="project-documentation/screenshots/filter-text-pipe.png"></p>

This code will return a subset of an array of _Projects_ if any project contains the searchText string in its property _title_. In the future we can extend our code to expand the search on other properties such as the category etc.

### 2- We created _Imput_ declaration, and then we included _Two-way Binding_ using _ngModel_, this allows the Project model _text_ variable to update the input when it changes and listen for changes on the input as well. Here is the code:
<p align="center"><img width="90%" src="project-documentation/screenshots/input-search.png"></p>
