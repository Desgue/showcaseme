import { NextResponse } from "next/server"
import { createClient } from "~/utils/supabase/server"

export async function GET() {
    const supabase = createClient()
    const { error } = await supabase.auth.signOut()
    if (error) {
        console.error(error)
        throw new Error(error.message)
    }
    return new NextResponse()
}