// app/api/contacts/[id]/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { Contact, ContactModel } from '../../../models/Contacts';
import sequelize from '../../../config/database';
import { writeFile, unlink } from 'fs/promises';
import path from 'path';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await sequelize.sync();
    const contact = await Contact.findByPk(params.id);
    if (contact) {
      return NextResponse.json(contact);
    } else {
      return NextResponse.json({ error: 'Contact not found' }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await sequelize.sync();

    const formData = await request.formData();
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;
    const image = formData.get('image') as File | null;

    const contact = await Contact.findByPk(params.id);
    if (!contact) {
      return NextResponse.json({ error: 'Contact not found' }, { status: 404 });
    }

    let imagePath = contact.image;
    if (image) {
      // Delete the old image if it exists
      if (contact.image) {
        const oldImagePath = path.join(process.cwd(), 'public', contact.image);
        await unlink(oldImagePath).catch(console.error);
      }

      // Save the new image
      const bytes = await image.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const filename = `${Date.now()}-${image.name}`;
      const filepath = path.join(process.cwd(), 'public', 'uploads', filename);
      await writeFile(filepath, buffer);
      imagePath = `/uploads/${filename}`;
    }

    const [updated] = await Contact.update({
      name,
      phone,
      email,
      image: imagePath
    }, {
      where: { id: params.id }
    });

    if (updated) {
      const updatedContact = await Contact.findByPk(params.id);
      return NextResponse.json(updatedContact);
    } else {
      return NextResponse.json({ error: 'Failed to update contact' }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await sequelize.sync();
    const deleted = await Contact.destroy({
      where: { id: params.id }
    });
    if (deleted) {
      return NextResponse.json({ message: 'Contact deleted successfully' });
    } else {
      return NextResponse.json({ error: 'Contact not found' }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}