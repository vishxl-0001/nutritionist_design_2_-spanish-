import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { nombre, email, telefono, servicio, modalidad, fecha, hora, notas, hp } = data;

    // Honeypot spam protection
    if (hp) {
      return NextResponse.json({ ok: true, message: 'Solicitud de cita recibida.' });
    }

    if (!nombre || !nombre.trim()) {
      return NextResponse.json(
        { ok: false, error: 'Este campo es obligatorio: Nombre completo' },
        { status: 400 }
      );
    }

    if (!email || !email.trim() || !email.includes('@')) {
      return NextResponse.json(
        { ok: false, error: 'Introduce un correo válido' },
        { status: 400 }
      );
    }

    if (!telefono || !telefono.trim()) {
      return NextResponse.json(
        { ok: false, error: 'Este campo es obligatorio: Teléfono de contacto' },
        { status: 400 }
      );
    }

    if (!fecha || !hora) {
      return NextResponse.json(
        { ok: false, error: 'Por favor, selecciona una fecha y franja horaria para tu consulta' },
        { status: 400 }
      );
    }

    console.log('[SOLICITUD DE RESERVA DE CITA]', {
      nombre,
      email,
      telefono,
      servicio: servicio || 'Primera consulta',
      modalidad: modalidad || 'Presencial / Online a convenir',
      fecha,
      hora,
      notas: notas || 'Sin notas adicionales',
      fechaCreacion: new Date().toISOString(),
    });

    return NextResponse.json({
      ok: true,
      message: 'Tu solicitud de reserva ha sido enviada con éxito. Me pondré en contacto contigo en menos de 24 horas laborables para confirmar la cita y facilitarte los detalles.',
    });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: 'Ha ocurrido un error al procesar tu reserva. Por favor, llámame o escríbeme por WhatsApp al +34 615 89 86 13.' },
      { status: 500 }
    );
  }
}
