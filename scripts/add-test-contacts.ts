import { Contact } from '../models/Contacts';
import sequelize from '../config/database';

async function seed() {
  try {
    await sequelize.sync({ force: true }); // This will drop the table if it exists
    await Contact.bulkCreate([
      { name: 'John Doe', phone: '123-456-7890', email: 'john@example.com' },
      { name: 'Jane Smith', phone: '098-765-4321', email: 'jane@example.com' },
      { name: 'Bob Johnson', phone: '555-555-5555', email: 'bob@example.com' },
    ]);
    console.log('Seed data inserted successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await sequelize.close();
  }
}

seed();