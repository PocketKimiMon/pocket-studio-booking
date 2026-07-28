/* Monster Survivor — Arena: a lightweight animated canvas backdrop.
   Not a real game loop's worth of logic — just enough motion to sit a HUD on. */
(function () {
  const { useRef, useEffect } = React;
  function Arena({ paused }) {
    const ref = useRef(null);
    const pausedRef = useRef(paused);
    useEffect(() => { pausedRef.current = paused; }, [paused]);
    useEffect(() => {
      const cv = ref.current, ctx = cv.getContext('2d');
      let raf, w, h, t = 0;
      const DPR = Math.min(window.devicePixelRatio || 1, 2);
      function resize() {
        w = cv.clientWidth; h = cv.clientHeight;
        cv.width = w * DPR; cv.height = h * DPR; ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      }
      resize(); window.addEventListener('resize', resize);
      // monsters: drifting toward center
      const mons = Array.from({ length: 26 }, () => ({
        a: Math.random() * Math.PI * 2, r: 180 + Math.random() * 260,
        sp: 0.12 + Math.random() * 0.18, sz: 7 + Math.random() * 10,
        c: Math.random() < 0.25 ? '#7C8BA0' : (Math.random() < 0.5 ? '#E8483F' : '#B6F23A'),
      }));
      const stars = Array.from({ length: 70 }, () => ({ x: Math.random(), y: Math.random(), z: Math.random() }));
      function draw() {
        t += pausedRef.current ? 0 : 1;
        const cx = w / 2, cy = h / 2;
        ctx.fillStyle = '#0B0B0F'; ctx.fillRect(0, 0, w, h);
        // grid floor glow
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(w, h) * 0.6);
        g.addColorStop(0, 'rgba(197,59,56,0.10)'); g.addColorStop(1, 'transparent');
        ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
        // stars
        ctx.fillStyle = 'rgba(244,239,230,0.5)';
        stars.forEach(s => { const sz = s.z * 1.8 + 0.3; ctx.globalAlpha = 0.3 + s.z * 0.5; ctx.fillRect(s.x * w, s.y * h, sz, sz); });
        ctx.globalAlpha = 1;
        // monsters spiraling in
        mons.forEach(m => {
          if (!pausedRef.current) { m.a += m.sp * 0.01; m.r -= m.sp * 0.25; if (m.r < 70) m.r = 200 + Math.random() * 240; }
          const x = cx + Math.cos(m.a) * m.r, y = cy + Math.sin(m.a) * m.r * 0.62;
          ctx.beginPath(); ctx.arc(x, y, m.sz, 0, Math.PI * 2);
          ctx.fillStyle = m.c; ctx.shadowColor = m.c; ctx.shadowBlur = 14; ctx.fill(); ctx.shadowBlur = 0;
        });
        // player orb
        const pulse = 1 + Math.sin(t * 0.06) * 0.08;
        ctx.beginPath(); ctx.arc(cx, cy, 16 * pulse, 0, Math.PI * 2);
        ctx.fillStyle = '#F4EFE6'; ctx.shadowColor = '#33CBD2'; ctx.shadowBlur = 22; ctx.fill();
        ctx.beginPath(); ctx.arc(cx, cy, 30 * pulse, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(51,203,210,0.6)'; ctx.lineWidth = 2; ctx.stroke(); ctx.shadowBlur = 0;
        raf = requestAnimationFrame(draw);
      }
      draw();
      return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
    }, []);
    return <canvas ref={ref} className="ms-canvas" />;
  }
  window.Arena = Arena;
})();
