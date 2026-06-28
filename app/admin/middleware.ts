import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  let supabaseResponse = NextResponse.next()

  const supabase = createServerClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!, // Wir nutzen hier Service Role für den Server-Check, da es sicherer ist als Cookie-Abfrage in Middleware für komplexe Logik, oder besser: wir prüfen Session
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            supabaseResponse.cookies.set(name, value, options)
          })
        },
      },
    }
  )

  // 1. Session prüfen
  const {
    data: { session },
  } = await supabase.auth.getSession()

  // Wenn nicht eingeloggt und nicht auf Login-Seite -> Weiterleitung zu Login
  if (!session && !request.nextUrl.pathname.startsWith('/admin/login')) {
    const url = request.nextUrl.clone()
    url.pathname = '/admin/login'
    return NextResponse.redirect(url)
  }

  // 2. Admin-Rechte prüfen (nur wenn eingeloggt und nicht auf Login-Seite)
  if (session && request.nextUrl.pathname.startsWith('/admin') && !request.nextUrl.pathname.includes('/login')) {
    const { data: adminCheck } = await supabase
      .from('admin_users')
      .select('email')
      .eq('email', session.user.email)
      .single()

    // Wenn User nicht in admin_users steht -> Rauswerfen zur Startseite
    if (!adminCheck) {
      const url = request.nextUrl.clone()
      url.pathname = '/'
      return NextResponse.redirect(url)
    }
  }

  return supabaseResponse
}

export const config = {
  matcher: ['/admin/:path*'],
}
