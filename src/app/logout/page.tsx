import { redirect } from 'next/navigation';
import { signOut } from '~/actions/supabase/auth';
import { createClient } from '~/utils/supabase/server';

export default async function LogoutPage() {
    await signOut() 
    const supabase = createClient();
    const { data, error } = await supabase.auth.getUser();
    if (!data?.user && error) {
      redirect("/");
    }
  return

}
