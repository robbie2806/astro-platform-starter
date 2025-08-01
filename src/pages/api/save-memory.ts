import { writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

export async function POST({ request }) {
  const body = await request.json();
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, '..', '..', '..', 'volt.json');

  try {
    await writeFile(filePath, JSON.stringify(body, null, 2));
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
}
