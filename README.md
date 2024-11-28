# SOLID Principles

The **SOLID principles** are fundamental design guidelines for creating robust, maintainable, and scalable object-oriented systems. Each principle addresses a specific aspect of software design to improve code quality and ease of maintenance.

---

## 1. Single Responsibility Principle (SRP)

**Definition:**  
Every class should have a single responsibility, focusing on a specific part of the software's functionality.

**Why It Matters:**  
This modular approach simplifies debugging and updates, as changes to one responsibility won't inadvertently affect another.

**Problem with Violations:**  
If a class handles multiple responsibilities, changes in one area can lead to unintended side effects in others, resulting in tightly coupled code.

---

## 2. Open/Closed Principle (OCP)

**Definition:**  
A class should be **open for extension but closed for modification**.

**Why It Matters:**  
This reduces the risk of introducing bugs when requirements evolve. New functionality can be added by extending existing classes rather than altering their core implementation.

**How to Achieve:**  
Use abstraction, inheritance, or design patterns like the Strategy or Decorator patterns.

---

## 3. Liskov Substitution Principle (LSP)

**Definition:**  
Subclasses should be substitutable for their base classes without causing errors or altering program behavior.

**Why It Matters:**  
Ensures that derived classes preserve the essence of the base class while possibly extending its functionality.

**Problem with Violations:**  
If a subclass fails to uphold this principle, substituting it for the base class may lead to incorrect behavior, logical inconsistencies, or runtime errors.

---

## 4. Interface Segregation Principle (ISP)

**Definition:**  
Interfaces should be specific and focused, not overly broad or generalized.

**Why It Matters:**  
This prevents implementing classes from being forced to define methods they don’t use, leading to cleaner and more efficient code.

**How to Achieve:**  
Instead of a large, all-encompassing interface, break it into smaller, purpose-driven interfaces that can be selectively implemented.

---

## 5. Dependency Inversion Principle (DIP)

**Definition:**  
Depend on abstractions, not on concrete implementations. High-level modules should not depend on low-level modules; both should depend on abstractions.

**Why It Matters:**  
Decouples different layers of the system, making it more flexible, testable, and maintainable.

**How to Achieve:**  
Use interfaces or abstract classes that define shared behaviors, allowing high- and low-level modules to interact without direct dependencies.

---

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

