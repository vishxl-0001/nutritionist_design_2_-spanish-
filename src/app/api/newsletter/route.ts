import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { nombre, email, hp } = data;

    // Honeypot spam protection
    if (hp) {
      return NextResponse.json({ ok: true, message: 'Guía enviada correctamente.' });
    }

    if (!email || !email.trim() || !email.includes('@')) {
      return NextResponse.json(
        { ok: false, error: 'Introduce un correo válido' },
        { status: 400 }
      );
    }

    console.log('[SUSCRIPCIÓN GUÍA GRATUITA]', {
      nombre: nombre || 'Lector anónimo',
      email,
      fecha: new Date().toISOString(),
    });

    return NextResponse.json({
      ok: true,
      message: 'Te he enviado la guía a tu correo. Revisa también tu carpeta de promociones o correo no deseado.',
    });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: 'No se ha podido procesar la solicitud. Por favor, inténtalo más tarde.' },
      { status: 500 }
    );
  }
}
