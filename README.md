**SOLID**
*1. Single Responsibility Principle (SRP)*
  Each class should focus on a single part of the functionality provided by the software. This makes the system more modular and easier to debug and update. If a class has multiple responsibilities, changes in one responsibility can impact others, leading to tightly coupled code.
*2. Open/Closed Principle (OCP)*
  You should be able to add new functionality to a class without altering its existing code. This reduces the risk of introducing bugs when requirements change. Achieving this often involves using abstraction and inheritance.
*3. Liskov Substitution Principle (LSP)*
  Subclasses should be able to stand in for their base classes without causing errors or unexpected behavior. This ensures that the derived classes extend the base class's behavior without changing its essence.
*4. Interface Segregation Principle (ISP)*
  Instead of having one large, all-encompassing interface, break it into smaller, more specific interfaces. This ensures that implementing classes only depend on methods they actually use.
*5. Dependency Inversion Principle (DIP)*
  This principle encourages the use of interfaces or abstract classes to reduce the dependency between higher-level and lower-level code. It decouples different parts of the system and makes them easier to test and maintain.

  # Dependency Inversion Principle Demo

This project's first part demonstrates the **Dependency Inversion Principle (DIP)** in object-oriented programming using JavaScript.

---

## What is DIP?

The **Dependency Inversion Principle** states:

1. **High-level modules** should not depend on low-level modules. Both should depend on abstractions.
2. **Abstractions** should not depend on details. Details should depend on abstractions.

By following DIP, we decouple high-level business logic from low-level implementation details, improving maintainability, testability, and flexibility.

---

## Code Structure

### **Abstraction**
The `SocialMediaApp` class acts as an abstraction that defines two methods:
- `makeComment()`
- `shareContent()`



# Liskov Substitution Principle Violation: Mammals Example

This projects second part demonstrates a violation of the **Liskov Substitution Principle (LSP)** using a simple example of mammals (`Cat` and `Platypus`). The example highlights why following LSP is crucial for creating robust and maintainable object-oriented code.

---

## What is the Liskov Substitution Principle?

The **Liskov Substitution Principle** is one of the SOLID principles of object-oriented design. It states:

> **Objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program.**

In simpler terms, any subclass should be able to stand in for its parent class without altering the expected behavior of the program. This ensures that subclasses are proper specializations of their parent class.

---

## Violating the LSP

In this project, we have a base class `Mammals` with a `giveBirth()` method. The `Cat` class correctly uses this method, as cats are mammals that give birth to live offspring. However, the `Platypus` class inherits `giveBirth()` even though platypuses lay eggs, which violates biological reality and the LSP.

---

