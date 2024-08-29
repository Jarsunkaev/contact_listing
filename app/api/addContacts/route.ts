import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { Contact } from '../../../models/Contacts';
import sequelize from '../../../config/database';
import { IncomingForm } from 'formidable';

// Disable body parsing, as formidable will handle it
export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: Request) {
  try {
    await sequelize.sync();

    const form = new IncomingForm({
      uploadDir: path.join(process.cwd(), 'public', 'uploads'),
      keepExtensions: true,
    });

    return new Promise((resolve, reject) => {
      form.parse(req, async (err, fields, files) => {
        if (err) {
          console.error('Error parsing form data:', err);
          return resolve(new NextResponse(JSON.stringify({ error: 'Error parsing form data' }), { status: 500 }));
        }

        const { name, phone, email } = fields;
        const imageFile = files.image && files.image[0];

        let imagePath: string | null = null;
        if (imageFile) {
          const tempPath = imageFile.filepath;
          const filename = `${Date.now()}-${imageFile.originalFilename}`;
          const filepath = path.join(process.cwd(), 'public', 'uploads', filename);

          // Move the file from temp path to final destination
          await fs.promises.rename(tempPath, filepath);
          imagePath = `/uploads/${filename}`;
        }

        // Create a new contact in the database
        const contact = await Contact.create({
          name: name[0] as string,
          phone: phone[0] as string,
          email: email[0] as string | null,
          image: imagePath || null
        });

        resolve(new NextResponse(JSON.stringify(contact), { status: 201 }));
      });
    });
  } catch (error: unknown) {
    console.error('Error in POST handler:', error);
    if (error instanceof Error) {
      return new NextResponse(JSON.stringify({ error: error.message }), { status: 500 });
    } else {
      return new NextResponse(JSON.stringify({ error: 'An unknown error occurred' }), { status: 500 });
    }
  }
}
