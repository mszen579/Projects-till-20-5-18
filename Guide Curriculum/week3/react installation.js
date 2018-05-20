/*
//////////////////////////////REACT NOTES/////////////////////////////
1- install node.js
2- install npm
3- npm install -g create-react-app
4- create-react-app "and the name of your project"
5- npm start

NOTES
1- How we create react component??
class 'Component name' extends React.Component

2- What is the method for rendering a React component to the DOM?
'ReactDOM.render'

3- Which code is correct for using react DOM render??
'ReactDOM.render(< Hello />, document.getElementById('app'))'


/////////////////////////////////////////////////////////////////////
Components:
An element is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components. Elements can contain other elements in their props. Creating a React element is cheap. Once an element is created, it is never mutated.
A component can be declared in several different ways. It can be a class with a render() method. Alternatively, in simple cases, it can be defined as a function. In either case, it takes props as an input, and returns an element tree as the output.


/////////////////////////////////////////////////////////////////////
1- COMPONENT EXAMPLE with PORPS:
class HelloUser extends React.Component {
  render() {
    return (
      <div> Hello, {this.props.name}
      <h2>{this.props.name}</h2>
      <h2>{this.props.job}</h2>
      </div>
    )
  }
}
ReactDOM.render(<HelloUser name="Tyler" job="Coder"/>, document.getElementById('app'));


2- COMPONENT EXAMPLE with var:
var USER_DATA = {
  name: 'Tyler McGinnis',
  img: 'https://avatars0.githubusercontent.com/u/2933430?v=3&s=460',
  username: 'tylermcginnis'
}

class Badge extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.user.img} />
        <h1>Name: {this.props.user.name}</h1>
        <h3>username: {this.props.user.username}</h3>
      </div>
    )
  }
}

ReactDOM.render(
  <Badge user={USER_DATA}/>,
  document.getElementById('app')
);


3- COMPONENT EXAMPLE with multi components:
class Avatar extends React.Component {
  render() {
    return (
      <img src={this.props.img} />
    )
  }
}

class Label extends React.Component {
  render() {
    return (
      <h1>Name: {this.props.name}</h1>
    )
  }
}

class ScreenName extends React.Component {
  render() {
    return (
      <h3>Username: {this.props.username}</h3>
    )
  }
}

class Badge extends React.Component {
  render() {
    return (
      <div>
        <Avatar img={this.props.user.img}/>
        <Label name={this.props.user.name}/>
        <ScreenName username={this.props.user.username}/>
      </div>
    )
  }
}

ReactDOM.render(
  <Badge user={{
    name: 'Tyler McGinnis',
    img: 'https://avatars0.githubusercontent.com/u/2933430?v=3&s=460',
    username: 'tylermcginnis'
  }} />,
  document.getElementById('app')
);

/////////////////////////////////////////////////////////////////
Creating lists in React with .map and .filter:
Example of mapping:
var numbers = [1,2,3];
var numbersPlusTen = numbers.map(function (num) {
  return num + 10
});
console.log(numbersPlusTen) // => [11, 12, 13]


Example of react component using mapping:
//Parent Component:
class FriendsContainer extends React.Component {
  render() {
    var name = 'Tyler McGinnis';
    var friends = ['Ean Platter', 'Murphy Randall', 'Merrick Christensen'];
    return (
      <div>
        <h3> Name: {name} </h3>
        <ShowList names={friends} />
      </div>
    )
  }
}
//Child Component 'ShowList':
class ShowList extends React.Component {
  render() {
    return (
      <div>
        <h3> Friends </h3>
        <ul>
          {this.props.names.map(function(friend){
            return <li> {friend} </li>;
          })}
        </ul>
      </div>
    )
  }
}


//Create an <li> for every name in an array:
class Users extends React.Component {
  render() {
    return (
      <ul>
        {this.props.list.map(function(name){
                return <li> {name} </li>
        })}
      </ul>
    )
  }
}

ReactDOM.render(
  <Users list={['Tyler', 'Mikenzi', 'Ryan', 'Michael']} />,
  document.getElementById('app')
);



//Create an <li> for every name in the list array who is frinds and another list for non friends:
class Users extends React.Component {
  render() {
    return (
    <div>

        <h1>Friends</h1>

          <ul>
          {this.props.list.filter(function(user){
                return user.friend === true
            }).map(function (user){
              return <li>{user.name}</li>
            })}
            </ul>

            <hr />

            
        <h1> Non Friends </h1>
            <ul>
              {this.props.list.filter(function(user){
                return user.friend !== true
            }).map(function (user){
              return <li>{user.name}</li>
            })}
            </ul>


    </div>
    )
  }
}

ReactDOM.render(
  <Users list={[
    { name: 'Tyler', friend: true },
    { name: 'Ryan', friend: true },
    { name: 'Michael', friend: false },
    { name: 'Mikenzi', friend: false },
    { name: 'Jessica', friend: true },
    { name: 'Dan', friend: false } ]}
  />,
  document.getElementById('app')
);


///////////////////////////////////////////////////////////////
'this' key word:
important terms:
- Implicit binding
- explicit binding
- new binding
- window binding


1- Implicit Binding
this refer to the left side of the dot, so here this = me

Example 1:
var me = {
  name: 'tyler',
  age: 25,
  sayName: function(){
  console.log(this.name);
}
};
me.sayName();

Example 2:
var person = function(name, age){
 return{
  name: name,
    age: age,
      sayName: function(){
        console.log(this.name);
    },
   mother:{
     name: 'Kamar',
     age: 70,
     sayName: function(){
       console.log(this.name)
     }
   }
 };
};

var Mohammad = person('Mohammad', 30);

Mohammad.sayName();
Mohammad.mother.sayName();



2- Explicit Binding
//call , apply , bind     built-in function

Example 1:
var sayName = function(lang1, lang2, lang3){
  console.log('My name is' + this.name + " and I am familiar with " + lang1 + " " + lang2 + " " + lang3);
};

var Mohammad = {
  name: 'Mohammad',
  age:34
};

var languages = ['ruby','js','php'];
sayName.call(Mohammad, languages[0],languages[1], languages[2] );
sayName.apply(Mohammad, languages);
sayName.bind(Mohammad, languages[0],languages[1], languages[2] ); // using bind you create a new function and you can use it somewhere else



3- new binding: bind Returns a new function specifying the context ("this" keyword) inside that function
var Animal = function (color, name, type){  //we wrote the var with capital because this funciton is a constructor function
  this.name = "name",
  this.color = "color",
  this.type = 'type' 
};
var zebra = new Animal('black', 'zebra', 'donkey');


4- Window binding:
var sayAge = function(){
  console.log(this.age);
};

var me = {
  age = 25
};

if you use the sayAge without argument
sayAge() => undifined
because this now will reference to windows

////////////////////////////////////////////////////////////
Render method in a React component needs to be a pure function That means it needs to be stateless, it needs to not make any Ajax requests, etc. It should just receive state and props and then render a UI.

You can really break React's Life Cycle Methods down into two categories.
1) When a component gets mounted and unmounted to the DOM.
2) When a component receives new data