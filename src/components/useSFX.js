// Lightweight WebAudio-based UI sound effects (blip / click)
// No external assets; generates tones at runtime.
export function useSFX() {
  let ctx;
  const getCtx = () => {
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    return ctx;
  };

  const playTone = (freq = 440, duration = 0.08, type = 'sine', gainValue = 0.06) => {
    const audio = getCtx();
    const osc = audio.createOscillator();
    const gain = audio.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audio.currentTime);
    gain.gain.setValueAtTime(gainValue, audio.currentTime);
    osc.connect(gain);
    gain.connect(audio.destination);
    osc.start();
    osc.stop(audio.currentTime + duration);
  };

  const blip = () => {
    // Two quick tones for a high-tech blip
    playTone(740, 0.05, 'square', 0.05);
    setTimeout(() => playTone(1180, 0.05, 'triangle', 0.05), 40);
  };

  const click = () => {
    // Short, tactile UI click
    playTone(220, 0.04, 'sawtooth', 0.05);
  };

  return { blip, click };
}
