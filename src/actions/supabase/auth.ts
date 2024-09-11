"use server"
import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { createClient } from "~/utils/supabase/server"

const LoginRedirectPath = "/dashboard/profile"
export async function googlelogin() {
    const supabase = createClient()
    const h = headers()
    const host = h.get('host')
    const protocol = h.get('x-forwarded-proto') ?? 'http'
    const fullUrl = `${protocol}://${host}`

    const redirectUrl = new URL(fullUrl)
    redirectUrl.pathname += 'auth/callback'
    redirectUrl.searchParams.set("next", LoginRedirectPath)
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: redirectUrl.toString(),
        },
    })
    if (error) {
        console.error(error)
        redirect('/error')
    }
    if (data.url) {
        redirect(data.url) // use the redirect API for your server framework
    }
}
