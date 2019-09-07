# OOP Design Patterns implemented in TypeScript

"For the things we have to learn before we can do them, we learn by doing them."
--Aristotle

## Creational Patterns

### Abstract Factory Pattern
Offers the interface (abstract factory) for creating a families of related objects (factories), without explicitly specifying their classes.

Useful for creating another abstraction around Factory method pattern.

## Structural Patterns

### Adapter Pattern
Converts the interface of a class into another interface clients expect.

Useful when combining the capability of two independent interfaces.

### Bridge Pattern
Helps to decouple implementation class and abstract class by providing a bridge structure between them.

Useful when you have an abstraction that has different implementations. It allows the abstraction and the implementation to vary independently of each other.

## Behavioral Patterns

### Command Pattern
A request is wrapped under an object as command and passed to invoker object. Invoker object looks for the appropriate object which can handle this command and passes the command to the corresponding object which executes the command.

Executor of the command does not need to know anything at all about what the command is, what context information it needs on or what it does. All of that is encapsulated in the command.