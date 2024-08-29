import { IncomingForm } from 'formidable';
import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';
import { Contact } from '../../../models/Contacts';
import sequelize from '../../../config/database';

export async function POST(request: Request) {
    try {
        await sequelize.sync();
        const form = new IncomingForm();
        const parsedForm = await new Promise<any>((resolve, reject) => {
            form.parse(request.body as any, (err, fields, files) => {
                if (err) return reject(err);
                resolve({ fields, files });
            });
        });

        const { name, phone, email } = parsedForm.fields;
        const imageFile = parsedForm.files.image as any;

        // Handle image upload
        let imagePath: string | null = null;
        if (imageFile) {
            const tempPath = imageFile.filepath;
            const filename = `${Date.now()}-${imageFile.originalFilename}`;
            const filepath = path.join(process.cwd(), 'public', 'uploads', filename);

            // Move the file from the temp path to the uploads directory
            fs.renameSync(tempPath, filepath);
            imagePath = `/uploads/${filename}`;
        }

        // Create a new contact in the database
        const contact = await Contact.create({
            name,
            phone,
            email: email || null,
            image: imagePath || null
        });

        return NextResponse.json(contact, { status: 201 });
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
        return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
    }
}
