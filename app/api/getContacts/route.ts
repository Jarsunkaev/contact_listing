import { NextResponse } from 'next/server';
import { Contact } from '../../../models/Contacts';
import sequelize from '../../../config/database';


export async function GET() {
    try {
        // Sync the database (use cautiously in production)
        await sequelize.sync();

        // Fetch all contacts from the database
        const contacts = await Contact.findAll();
        return NextResponse.json(contacts);
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
        return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
    }
}