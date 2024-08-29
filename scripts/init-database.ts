// scripts/init-database.ts

import sequelize from '../config/database';
import { Contact } from '../models/Contacts';

async function initDatabase() {
  try {
    // Force sync will drop existing tables and recreate them
    console.log('Syncing database...');
    await sequelize.sync({ force: true });
    console.log('Database synced successfully');

    // Add some test data
    console.log('Adding test data...');
    const testContacts = [
      { name: 'John Doe', phone: '123-456-7890', email: 'john@example.com', image: null },
      { name: 'Jane Smith', phone: '098-765-4321', email: 'jane@example.com', image: null }
    ];

    for (const contact of testContacts) {
      await Contact.create(contact);
      console.log(`Created contact: ${contact.name}`);
    }

    console.log('Test data added successfully');

    // Verify the data was added
    const count = await Contact.count();
    console.log(`Total contacts in database: ${count}`);

    const allContacts = await Contact.findAll();
    console.log('All contacts:', JSON.stringify(allContacts, null, 2));

  } catch (error) {
    console.error('Error initializing database:', error);
  } finally {
    await sequelize.close();
  }
}

initDatabase();