import { getSupabase, supabaseConfigured } from './supabaseClient.js';

const overlay = document.getElementById('auth-overlay');
const opener = document.getElementById('open-auth');
const closer = document.getElementById('auth-close');
const form = document.getElementById('auth-form');
const errEl = document.getElementById('auth-error');
const submitBtn = document.getElementById('auth-submit');
const modeToggle = document.getElementById('auth-mode-toggle');

let mode = 'signin';

function showErr(msg) {
  if (!errEl) return;
  errEl.classList.remove('info');
  errEl.textContent = msg;
  errEl.hidden = false;
}

function showInfo(msg) {
  if (!errEl) return;
  errEl.classList.add('info');
  errEl.textContent = msg;
  errEl.hidden = false;
}

function clearErr() {
  if (!errEl) return;
  errEl.classList.remove('info');
  errEl.textContent = '';
  errEl.hidden = true;
}

function syncModeUi() {
  const signin = mode === 'signin';
  if (submitBtn) {
    submitBtn.innerHTML = signin
      ? 'Acceder <span class="arr">→</span>'
      : 'Crear cuenta <span class="arr">→</span>';
  }
  if (modeToggle) {
    modeToggle.textContent = signin
      ? '¿Primera vez? Crear cuenta'
      : 'Ya tengo cuenta · Iniciar sesión';
  }
}

function open(e) {
  if (e) e.preventDefault();
  if (!overlay) return;
  clearErr();
  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  setTimeout(() => {
    const i = overlay.querySelector('input[type="email"]');
    if (i) i.focus();
  }, 300);
}

function close() {
  if (!overlay) return;
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function readNext() {
  const p = new URLSearchParams(window.location.search);
  const next = p.get('next');
  if (next && /^[\w./-]+$/.test(next)) return next;
  return 'Brandbook.html';
}

if (opener) opener.addEventListener('click', open);
if (closer) closer.addEventListener('click', close);
if (overlay) {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close();
  });
}
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') close();
});

if (modeToggle) {
  modeToggle.addEventListener('click', (e) => {
    e.preventDefault();
    mode = mode === 'signin' ? 'signup' : 'signin';
    syncModeUi();
    clearErr();
  });
}

const qs = new URLSearchParams(window.location.search);
if (window.location.hash === '#auth' || qs.get('necesita-acceso') === '1') {
  open();
}

if (form && submitBtn) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearErr();

    if (!supabaseConfigured()) {
      showErr(
        'Configura VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY (copia .env.example → .env) y ejecuta npm run dev o npm run build.',
      );
      return;
    }

    const email = (form.querySelector('input[name="email"]') || {}).value || '';
    const password = (form.querySelector('input[name="password"]') || {}).value || '';
    const trimmed = email.trim();

    if (!trimmed || !password) {
      showErr('Introduce correo y contraseña.');
      return;
    }

    const supabase = getSupabase();
    submitBtn.disabled = true;
    submitBtn.textContent = 'Conectando…';

    try {
      if (mode === 'signup') {
        const { data, error } = await supabase.auth.signUp({
          email: trimmed,
          password,
        });
        if (error) throw error;
        if (data.user && !data.session) {
          showInfo(
            'Cuenta creada. Si tu proyecto exige confirmación por correo, revisa tu bandeja antes de acceder al Brandbook.',
          );
          return;
        }
        window.location.href = readNext();
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email: trimmed,
          password,
        });
        if (error) throw error;
        window.location.href = readNext();
      }
    } catch (err) {
      showErr(err?.message || 'No se pudo completar la autenticación.');
    } finally {
      submitBtn.disabled = false;
      syncModeUi();
    }
  });
}

syncModeUi();

const recover = document.getElementById('auth-recover');
if (recover) {
  recover.addEventListener('click', async (e) => {
    e.preventDefault();
    if (!supabaseConfigured()) {
      showErr('Configura primero las variables de entorno de Supabase.');
      open();
      return;
    }
    const trimmed = (form?.querySelector('input[name="email"]')?.value || '').trim();
    if (!trimmed) {
      showErr('Escribe tu correo arriba y vuelve a pulsar «Recuperar contraseña».');
      open();
      return;
    }
    const supabase = getSupabase();
    const redirectTo = `${window.location.origin}${window.location.pathname}`;
    const { error } = await supabase.auth.resetPasswordForEmail(trimmed, { redirectTo });
    if (error) {
      showErr(error.message);
      open();
      return;
    }
    showInfo(
      'Si el correo existe, recibirás un enlace para restablecer la contraseña (revisa también spam).',
    );
    open();
  });
}
