import { FormEvent, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRightIcon, BotIcon, CircleHelpIcon, SendIcon, XIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const routes = [
  { label: 'Learn production', note: 'Compare courses and Academy plans', to: '/#courses' },
  { label: 'Book the studio', note: 'Tell us the session and date you need', to: '/enquire?category=studio&service=recording' },
  { label: 'Licence a beat', note: 'Compare Basic and Premium usage rights', to: '/#beats' },
  { label: 'Submit music', note: 'Send a listening link to the label team', to: '/enquire?category=label&service=demo-submission' },
];

type ChatMessage = { role: 'user' | 'assistant'; content: string };

export function HelpAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isSending, setIsSending] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  useEffect(() => { setIsOpen(false); setChatOpen(false); }, [location.pathname, location.search, location.hash]);

  const sendMessage = async (event: FormEvent) => {
    event.preventDefault();
    const trimmed = message.trim();
    if (!trimmed || isSending) return;
    setMessages((current) => [...current, { role: 'user', content: trimmed }]);
    setMessage('');
    setIsSending(true);
    try {
      const response = await fetch('/api/academy-assistant', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: trimmed }) });
      const data = await response.json();
      setMessages((current) => [...current, { role: 'assistant', content: data.reply ?? data.error ?? 'Please try again.' }]);
    } catch {
      setMessages((current) => [...current, { role: 'assistant', content: 'I could not connect right now. Please use the enquiry page and our team will help.' }]);
    } finally { setIsSending(false); }
  };

  return <>
    <button ref={triggerRef} type="button" className="wayfinder-trigger" onClick={() => setIsOpen(true)} aria-haspopup="dialog" aria-expanded={isOpen}>
      <CircleHelpIcon aria-hidden="true" /><span>Help me choose</span>
    </button>
    <AnimatePresence>
      {isOpen && <motion.div className="wayfinder-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => { if (event.target === event.currentTarget) { setIsOpen(false); triggerRef.current?.focus(); } }}>
        <motion.div className="wayfinder" role="dialog" aria-modal="true" aria-labelledby="wayfinder-title" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 16 }}>
          <div className="wayfinder__head"><div><p className="console-label">SIGNAL ROUTING / ACADEMY AI</p><h2 id="wayfinder-title">What do you need?</h2><p>Choose a route or ask the Academy assistant for guidance.</p></div><button type="button" onClick={() => setIsOpen(false)} aria-label="Close help assistant"><XIcon aria-hidden="true" /></button></div>
          {!chatOpen ? <>
            <div className="wayfinder__routes">{routes.map((route, index) => <Link key={route.label} to={route.to}><span className="wayfinder__number">{String(index + 1).padStart(2, '0')}</span><span><strong>{route.label}</strong><small>{route.note}</small></span><ArrowRightIcon aria-hidden="true" /></Link>)}</div>
            <button type="button" className="assistant-launch" onClick={() => setChatOpen(true)}><BotIcon aria-hidden="true" /><span><strong>Ask the Academy assistant</strong><small>Get practical guidance about courses and production.</small></span><ArrowRightIcon aria-hidden="true" /></button>
          </> : <div className="assistant-chat">
            <div className="assistant-chat__messages" aria-live="polite">{messages.length === 0 && <p className="assistant-chat__empty">Ask about courses, Reason 14, FL Studio, Cubase, music business, memberships or student support.</p>}{messages.map((item, index) => <p key={`${item.role}-${index}`} className={`assistant-chat__message assistant-chat__message--${item.role}`}>{item.content}</p>)}{isSending && <p className="assistant-chat__message assistant-chat__message--assistant">Thinking…</p>}</div>
            <form onSubmit={sendMessage} className="assistant-chat__form"><label htmlFor="academy-question">Your question</label><div><input id="academy-question" value={message} onChange={(event) => setMessage(event.target.value)} placeholder="How do I start producing Afro House?" maxLength={2000} /><button type="submit" aria-label="Send question" disabled={isSending || !message.trim()}><SendIcon aria-hidden="true" /></button></div></form>
            <button type="button" className="button button-quiet button-full" onClick={() => setChatOpen(false)}>Back to routes</button>
          </div>}
          <p className="wayfinder__foot">AI guidance is general information. Confirm prices and availability with the Lukulu team.</p>
        </motion.div>
      </motion.div>}
    </AnimatePresence>
  </>;
}
