# ios

https://docs.swift.org/swift-book/LanguageGuide/BasicOperators.html

## 遍历

### for in

```swift
for index in 1...5 {
    print("\(index)")
}

let names = ["Anna", "Alex", "Brian", "Jack"]
let count = names.count
for i in 0..<count {
    print("\(names[i])")
}

for name in names[2...] {
    print(name)
}

for name in names[...2] {
    print(name)
}

for name in names[..<2] {
    print(name)
}
```