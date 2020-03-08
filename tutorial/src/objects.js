var person = {
    name: "Ishty",
    age: 24,
    major: "ENV Studies",
    isMale: true,
    occupation: 'researcher',
    printName: function() {
        document.write(this.name);
    }
};

// document.write(person.occupation);
person.printName();