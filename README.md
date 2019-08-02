# React Devise

## Introduction

Devise has long been the go-to authentication library for Rails apps. Just
drop Devise into your Rails app, make a few tweaks, and get on with building
awesome business features. 

Much of Devise's functionality involves server side routing and rendering, so
what about single page apps? Does Devise do that, or must you leave Devise
behind when you move to React? Maybe not. It turns out it's pretty easy to
purpose Devise as an authentication backend. 

But that leaves undone a bunch of routing and view related functionality that
Devise provides out of the box.

Enter **React Devise**.

The goal of React Devise is to make it extremely easy to add authentication to
a new React+Rails app while maintaining the total flexibility that Devise
users have come to expect.

## Dependencies

React Devise has deep dependencies on a few popular React modules. The most
significant one is:

* [react-router](https://github.com/ReactTraining/react-router)

## Installation

```
yarn add react-devise
```

## Documentation

[Documenation Wiki](https://github.com/highlands/react-devise/wiki/Home)

## To Do

* Create a ruby gem
* Ouath support
* Support multiple resource types
* Support all devise views
* Support more customization of messages
* Possibly an "eject" function to allow full customization of views
* ???
