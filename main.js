const addContact = require('./addContact');
const viewContacts = require('./viewContacts');
const updateContact = require('./updateContact');
const deleteContact = require('./deleteContact');

console.log("\n✅ Adding Valid Contact...");
const contact1 = addContact("John", "Doe", "123 Main St", "New York", "NY", "12345", "123-456-7890", "john.doe@example.com");
console.log("✔️ Contact Added:", contact1);

console.log("\n📋 Viewing All Contacts:");
console.log(viewContacts());

// ✅ Updating Contact
console.log("\n✏️ Updating Contact...");
const updatedContact = updateContact(1, { phoneNumber: "111-222-3333", email: "new.email@example.com" });
console.log("✔️ Updated Contact:", updatedContact);

// ✅ Deleting Contact
console.log("\n🗑️ Deleting Contact...");
const deletedContact = deleteContact(1);
console.log("✔️ Deleted Contact:", deletedContact);

// 📋 Final Contact List
console.log("\n📋 Final Contact List:");
console.log(viewContacts());
