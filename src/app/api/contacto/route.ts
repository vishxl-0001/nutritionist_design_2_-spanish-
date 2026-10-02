import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { nombre, email, telefono, mensaje, servicio, hp } = data;

    // Honeypot anti-spam check
    if (hp) {
      return NextResponse.json({ ok: true, message: 'Mensaje recibido con éxito.' });
    }

    // Required fields validation
    if (!nombre || !nombre.trim()) {
      return NextResponse.json(
        { ok: false, error: 'Este campo es obligatorio: Nombre' },
        { status: 400 }
      );
    }

    if (!email || !email.trim() || !email.includes('@')) {
      return NextResponse.json(
        { ok: false, error: 'Introduce un correo válido' },
        { status: 400 }
      );
    }

    if (!mensaje || !mensaje.trim()) {
      return NextResponse.json(
        { ok: false, error: 'Este campo es obligatorio: Mensaje' },
        { status: 400 }
      );
    }

    // Here an email service (Resend, Cloudflare Workers Email, SendGrid, etc.) can be bound via process.env.EMAIL_API_KEY
    // For production resilience, we log the intake securely and return confirmation
    console.log('[FORMULARIO CONTACTO]', {
      nombre,
      email,
      telefono: telefono || 'No facilitado',
      servicio: servicio || 'General',
      mensaje,
      fecha: new Date().toISOString(),
    });

    return NextResponse.json({
      ok: true,
      message: 'Gracias, te responderé lo antes posible.',
    });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: 'Ha ocurrido un error inesperado. Por favor, inténtalo de nuevo o escríbeme por WhatsApp.' },
      { status: 500 }
    );
  }
}
