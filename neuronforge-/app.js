const prompt = document.querySelector('#prompt');
const send = document.querySelector('#sendButton');
const conversation = document.querySelector('#conversation');
const toast = document.querySelector('#toast');

const responses = [
  `I found a clear pattern: new teams struggle most with connecting their first data source, while power users want faster ways to share insights. The strongest opportunity is a guided “first value” workflow that recommends the next best integration.`,
  `Based on 248 recent customer signals, trial conversion is most sensitive to time-to-first-insight. I’d prioritize an in-product sample project, a contextual setup checklist, and a one-click invite flow.`,
  `The experiment is trending positively (+8.4% activation), but confidence remains medium because the Enterprise segment is under-sampled. I recommend extending the test for seven days and targeting Enterprise onboarding.`
];

function escapeHTML(value) { const node = document.createElement('div'); node.textContent = value; return node.innerHTML; }
function addMessage(text) {
  const user = document.createElement('div');
  user.className = 'message user'; user.innerHTML = escapeHTML(text); conversation.appendChild(user);
  const typing = document.createElement('div'); typing.className = 'message ai'; typing.innerHTML = '<strong>✦ NEURONFORGE</strong><br><span class="typing">Reviewing trusted context…</span>'; conversation.appendChild(typing);
  conversation.scrollTop = conversation.scrollHeight;
  setTimeout(() => {
    const reply = responses[Math.floor(Math.random() * responses.length)];
    typing.innerHTML = `<strong>✦ NEURONFORGE · GROUNDED RESPONSE</strong><br>${reply}<div class="source-pills"><span>⌘ 14 customer calls</span><span>◈ Q3 product research</span><span>◒ Live metrics</span></div>`;
    conversation.scrollTop = conversation.scrollHeight;
  }, 700);
}
function submit() { const value = prompt.value.trim(); if (!value) return; addMessage(value); prompt.value = ''; prompt.style.height = '31px'; }
send.addEventListener('click', submit);
prompt.addEventListener('keydown', event => { if (event.key === 'Enter' && !event.shiftKey) { event.preventDefault(); submit(); } });
prompt.addEventListener('input', () => { prompt.style.height = '31px'; prompt.style.height = Math.min(prompt.scrollHeight, 110) + 'px'; });
document.querySelectorAll('[data-prompt]').forEach(button => button.addEventListener('click', () => { prompt.value = button.dataset.prompt; prompt.focus(); }));
document.querySelector('#newChat').addEventListener('click', () => { conversation.innerHTML = '<div class="welcome-message"><span class="spark">✦</span><div><strong>Fresh workspace created.</strong><p>Bring a question, a document, or a decision you need to make.</p></div></div>'; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 2600); prompt.focus(); });
document.querySelector('#modeButton').addEventListener('click', () => { const labels = ['✦ Deep research', '⌁ Fast answer', '◈ Agent workflow']; const next = (labels.indexOf(document.querySelector('#modeButton').innerText.trim().replace('⌄','').trim()) + 1) % labels.length; document.querySelector('#modeButton').innerHTML = `<span>${labels[next].charAt(0)}</span> ${labels[next].slice(2)} <b>⌄</b>`; });
