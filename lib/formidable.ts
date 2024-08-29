import formidable from 'formidable';

export const parseFormData = (req: any) => {
    const form = new formidable.IncomingForm({ keepExtensions: true });
    return new Promise<{ fields: any; files: any }>((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
            if (err) {
                return reject(err);
            }
            resolve({ fields, files });
        });
    });
};
