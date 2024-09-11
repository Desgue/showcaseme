import { redirect } from 'next/navigation';
import React from 'react'
import LoginPageComponent from '~/components/login-page'
import { createClient } from '~/utils/supabase/server';

async function LoginPage() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (data?.user && !error) {
    redirect("/dashboard");
  }
  return (
    <LoginPageComponent/>
  )
}

export default LoginPage