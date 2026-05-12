import { getSupabase, supabaseConfigured } from './supabaseClient.js';

function redirectToLanding() {
  const landing = new URL('Landing.html', window.location.href);
  landing.searchParams.set('next', 'Brandbook.html');
  landing.searchParams.set('necesita-acceso', '1');
  landing.hash = 'auth';
  window.location.replace(landing.href);
}

const gate = document.createElement('div');
gate.id = 'bitra-auth-gate';
gate.textContent = 'Verificando acceso…';
Object.assign(gate.style, {
  position: 'fixed',
  inset: '0',
  background: '#0B0B0D',
  color: '#B4B6BD',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: '99999',
  fontFamily: 'system-ui,sans-serif',
  fontSize: '15px',
});
document.body.prepend(gate);

if (!supabaseConfigured()) {
  console.error('[Bitra] Configura VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY en .env');
  redirectToLanding();
} else {
  const supabase = getSupabase();
  const { data } = await supabase.auth.getSession();
  if (!data.session) {
    redirectToLanding();
  } else {
    gate.remove();
    await import('./deck-stage.js');
  }
}
