const fs = require('fs');
const path = require('path');

const projectRoot = 'c:\\Users\\Hp\\Desktop\\eledralabs- website\\eledralabs- website';
const servicesPath = path.join(projectRoot, 'components', 'services.html');
const solutionsPath = path.join(projectRoot, 'components', 'solutions.html');

// 1. Define the Testimonials HTML (added id="solutions-testimonials-section" and "spa-hidden" class)
const testimonialsHtml = `
  <!-- Testimonials Grid Section -->
  <div id="solutions-testimonials-section" class="grid grid-cols-1 xl:grid-cols-[minmax(0,2fr)_minmax(360px,1fr)] mt-6 md:mt-8 lg:mt-10 border border-border spa-hidden">
    <!-- Card 1: Lime Green/Yellow -->
    <a class="group min-h-75 relative flex flex-col p-5 overflow-hidden gap-8 xl:border-r xl:border-border xl:gap-0 xl:justify-between" href="/contact" style="background: #d4f33b; color: #000000 !important;">
      <p class="relative z-10 text-24 leading-120 text-black max-w-140 font-sans" style="color: #000000 !important; font-weight: 500;">"Eledra Labs automated our entire customer workflow — every lead is now qualified, routed, and followed up within seconds. It's like adding a full operations team without the headcount."</p>
      <div class="relative z-10 flex items-center justify-between">
        <div class="flex items-center gap-5">
          <div style="width:40px;height:40px;border-radius:50%;background:rgba(0,0,0,0.08);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:18px;color:#000">J</div>
          <div class="flex flex-col font-sans">
            <p class="text-18 text-black leading-normal" style="color: #000000 !important; font-weight: 600;">James Whitford</p>
            <p class="text-base text-black/60 leading-normal" style="color: rgba(0,0,0,0.6) !important;">CEO, NexaScale Inc.</p>
          </div>
        </div>
        <span aria-hidden="true" class="pointer-events-none flex items-center gap-1 text-sm text-black font-sans opacity-50 group-hover:opacity-80 transition-opacity">
          <span class="leading-none" style="color: #000000 !important;">Read case study</span>
          <svg width="14" height="14" viewBox="0 0 12 12" fill="none" class="w-3.5 h-3.5 text-black">
            <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"/>
          </svg>
        </span>
      </div>
    </a>
    
    <!-- Card 2: Deep Orange/Red -->
    <a class="group relative flex flex-col p-5 overflow-hidden gap-8 xl:min-h-75 xl:gap-0 xl:justify-between" href="/contact" style="background: #ff5a1f; color: #ffffff !important;">
      <p class="relative z-10 text-24 leading-120 text-white font-sans" style="color: #ffffff !important; font-weight: 500;">"The AI voice agent Eledra Labs built for us handles 300+ calls a day — patient satisfaction is up 40% and our staff finally has time to focus on care."</p>
      <div class="relative z-10 flex items-center justify-between">
        <div class="flex items-center gap-5">
          <div style="width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,0.12);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:18px;color:#fff">S</div>
          <div class="flex flex-col font-sans">
            <p class="text-18 text-white leading-normal" style="color: #ffffff !important; font-weight: 600;">Sarah Okonkwo</p>
            <p class="text-base text-white/60 leading-normal" style="color: rgba(255,255,255,0.6) !important;">Operations Director, MedCore</p>
          </div>
        </div>
        <span aria-hidden="true" class="pointer-events-none flex items-center gap-1 opacity-50 group-hover:opacity-100 transition-opacity">
          <svg width="14" height="14" viewBox="0 0 12 12" fill="none" class="w-3.5 h-3.5 text-white">
            <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"/>
          </svg>
        </span>
      </div>
    </a>
  </div>
`;

// 2. Define the compact circular graph HTML (with spa-hidden by default)
const graphHtmlAbove = `
  <!-- Unified Interactive Architecture Loop Section (Solutions Page Only) -->
  <div id="architecture-graph-section" class="relative z-10 bg-surface px-5 py-12 border-t border-border mt-10 spa-hidden">
    <div class="mx-auto flex flex-col items-center justify-center" style="max-width: 1024px; gap: 2rem;">
      <p class="font-favorit text-[10px] uppercase tracking-widest text-white/30 text-center">Interactive System Architecture</p>
      
      <div id="architecture-circle-container" class="relative">
        
        <!-- 6-Part Thick Curved SVG Arrow Loop -->
        <svg class="absolute inset-0 w-full h-full pointer-events-auto" viewBox="0 0 200 200" style="overflow: visible;">
          <!-- 1. Agent Orchestration Arrow -->
          <g class="hero-segment hero-seg-1" data-node="hero-node-1" transform="rotate(0 100 100)">
            <path d="M 113.2 25.2 A 76 76 0 0 1 158.2 51.1" fill="none" stroke="currentColor" stroke-linecap="round" />
            <polygon points="-1,-3.5 5,0 -1,3.5" fill="currentColor" transform="translate(158.2, 51.1) rotate(50)" />
          </g>
          <!-- 2. Docker Sandbox Arrow -->
          <g class="hero-segment hero-seg-2" data-node="hero-node-2" transform="rotate(60 100 100)">
            <path d="M 113.2 25.2 A 76 76 0 0 1 158.2 51.1" fill="none" stroke="currentColor" stroke-linecap="round" />
            <polygon points="-1,-3.5 5,0 -1,3.5" fill="currentColor" transform="translate(158.2, 51.1) rotate(50)" />
          </g>
          <!-- 3. Verification Layer Arrow -->
          <g class="hero-segment hero-seg-3" data-node="hero-node-3" transform="rotate(120 100 100)">
            <path d="M 113.2 25.2 A 76 76 0 0 1 158.2 51.1" fill="none" stroke="currentColor" stroke-linecap="round" />
            <polygon points="-1,-3.5 5,0 -1,3.5" fill="currentColor" transform="translate(158.2, 51.1) rotate(50)" />
          </g>
          <!-- 4. Distributed Compute Arrow -->
          <g class="hero-segment hero-seg-4" data-node="hero-node-4" transform="rotate(180 100 100)">
            <path d="M 113.2 25.2 A 76 76 0 0 1 158.2 51.1" fill="none" stroke="currentColor" stroke-linecap="round" />
            <polygon points="-1,-3.5 5,0 -1,3.5" fill="currentColor" transform="translate(158.2, 51.1) rotate(50)" />
          </g>
          <!-- 5. Full Observability Arrow -->
          <g class="hero-segment hero-seg-5" data-node="hero-node-5" transform="rotate(240 100 100)">
            <path d="M 113.2 25.2 A 76 76 0 0 1 158.2 51.1" fill="none" stroke="currentColor" stroke-linecap="round" />
            <polygon points="-1,-3.5 5,0 -1,3.5" fill="currentColor" transform="translate(158.2, 51.1) rotate(50)" />
          </g>
          <!-- 6. Reinforcement Learning Arrow -->
          <g class="hero-segment hero-seg-6" data-node="hero-node-6" transform="rotate(300 100 100)">
            <path d="M 113.2 25.2 A 76 76 0 0 1 158.2 51.1" fill="none" stroke="currentColor" stroke-linecap="round" />
            <polygon points="-1,-3.5 5,0 -1,3.5" fill="currentColor" transform="translate(158.2, 51.1) rotate(50)" />
          </g>
        </svg>

        <!-- Center Core Hub -->
        <div class="center-hub">
          <div class="absolute inset-0 rounded-full bg-white/2 blur-[8px]"></div>
          <div class="hub-default flex flex-col items-center justify-center transition-all duration-300">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-5 h-5 text-white/25">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <div class="hub-hover absolute inset-0 flex items-center justify-center p-1.5 opacity-0 transition-all duration-300 pointer-events-none">
            <span class="center-hub-title">CORE</span>
          </div>
        </div>

        <!-- Node 1: Agent Orchestration -->
        <div class="hero-node-item hero-node-1 absolute left-1/2 top-[12%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5 cursor-pointer z-20 group text-center" data-target="hero-seg-1">
          <div class="node-icon-wrapper w-8 h-8 rounded-full bg-black border border-white/10 flex items-center justify-center shadow-lg transition-all duration-300">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="w-3.5 h-3.5 text-white/40 transition-all duration-300">
              <circle cx="12" cy="12" r="3" />
              <circle cx="12" cy="4" r="1.5" fill="currentColor" />
              <circle cx="12" cy="20" r="1.5" fill="currentColor" />
              <circle cx="4" cy="12" r="1.5" fill="currentColor" />
              <circle cx="20" cy="12" r="1.5" fill="currentColor" />
              <path d="M12 7V9.5" />
              <path d="M12 14.5V17" />
              <path d="M7 12H9.5" />
              <path d="M14.5 12H17" />
            </svg>
          </div>
          <span>Agent Orchestration</span>
        </div>

        <!-- Node 2: Docker Sandbox -->
        <div class="hero-node-item hero-node-2 absolute left-[83%] top-[31%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5 cursor-pointer z-20 group text-center" data-target="hero-seg-2">
          <div class="node-icon-wrapper w-8 h-8 rounded-full bg-black border border-white/10 flex items-center justify-center shadow-lg transition-all duration-300">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="w-3.5 h-3.5 text-white/40 transition-all duration-300">
              <path d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z" />
              <path d="M12 3V12" />
              <path d="M12 12L4 7.5" />
              <path d="M12 12L20 7.5" />
            </svg>
          </div>
          <span>Docker Sandbox</span>
        </div>

        <!-- Node 3: Verification Layer -->
        <div class="hero-node-item hero-node-3 absolute left-[83%] top-[69%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5 cursor-pointer z-20 group text-center" data-target="hero-seg-3">
          <div class="node-icon-wrapper w-8 h-8 rounded-full bg-black border border-white/10 flex items-center justify-center shadow-lg transition-all duration-300">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="w-3.5 h-3.5 text-white/40 transition-all duration-300">
              <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" />
              <path d="M9 11L11 13L15 9" stroke-width="1.5" />
            </svg>
          </div>
          <span>Verification Layer</span>
        </div>

        <!-- Node 4: Distributed Compute -->
        <div class="hero-node-item hero-node-4 absolute left-1/2 top-[88%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5 cursor-pointer z-20 group text-center" data-target="hero-seg-4">
          <div class="node-icon-wrapper w-8 h-8 rounded-full bg-black border border-white/10 flex items-center justify-center shadow-lg transition-all duration-300">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="w-3.5 h-3.5 text-white/40 transition-all duration-300">
              <rect x="4" y="4" width="5" height="5" rx="0.75" />
              <rect x="15" y="4" width="5" height="5" rx="0.75" />
              <rect x="4" y="15" width="5" height="5" rx="0.75" />
              <rect x="15" y="15" width="5" height="5" rx="0.75" />
              <path d="M9 6.5h6M9 17.5h6M6.5 9v6M17.5 9v6" stroke-dasharray="1.5 1.5" />
            </svg>
          </div>
          <span>Distributed Compute</span>
        </div>

        <!-- Node 5: Full Observability -->
        <div class="hero-node-item hero-node-5 absolute left-[17%] top-[69%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5 cursor-pointer z-20 group text-center" data-target="hero-seg-5">
          <div class="node-icon-wrapper w-8 h-8 rounded-full bg-black border border-white/10 flex items-center justify-center shadow-lg transition-all duration-300">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="w-3.5 h-3.5 text-white/40 transition-all duration-300">
              <circle cx="12" cy="12" r="9" stroke-dasharray="3 3" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="12" cy="12" r="1.5" fill="currentColor" />
              <line x1="12" y1="12" x2="18.5" y2="5.5" />
              <circle cx="7" cy="8" r="0.75" fill="currentColor" opacity="0.8" />
              <circle cx="16" cy="15" r="0.75" fill="currentColor" opacity="0.8" />
            </svg>
          </div>
          <span>Full Observability</span>
        </div>

        <!-- Node 6: Reinforcement Learning -->
        <div class="hero-node-item hero-node-6 absolute left-[17%] top-[31%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5 cursor-pointer z-20 group text-center" data-target="hero-seg-6">
          <div class="node-icon-wrapper w-8 h-8 rounded-full bg-black border border-white/10 flex items-center justify-center shadow-lg transition-all duration-300">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="w-3.5 h-3.5 text-white/40 transition-all duration-300">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 13.9 2.53 15.67 3.45 17.18" />
              <path d="M12 22C17.52 22 22 17.52 22 12C22 10.1 21.47 8.33 20.55 6.82" />
              <path d="M22 6.82H17.55V11.27" />
              <path d="M2 17.18H6.45V12.73" />
              <circle cx="12" cy="12" r="2.5" />
              <path d="M8.5 12H9.5" />
              <path d="M14.5 12H15.5" />
            </svg>
          </div>
          <span>Reinforcement Learning</span>
        </div>

      </div>

      <!-- Synchronized Hover Effects Script -->
      <script>
        (function() {
          const container = document.getElementById('architecture-circle-container');
          if (!container) return;
          
          const nodes = container.querySelectorAll('.hero-node-item');
          const segments = container.querySelectorAll('.hero-segment');
          
          nodes.forEach(node => {
            const targetClass = node.getAttribute('data-target');
            const seg = container.querySelector('.' + targetClass);
            
            node.addEventListener('mouseenter', () => {
              node.classList.add('active-hover');
              if (seg) seg.classList.add('active-hover');
              
              const hubDefault = container.querySelector('.hub-default');
              const hubHover = container.querySelector('.hub-hover');
              const hubTitle = container.querySelector('.center-hub-title');
              if (hubDefault && hubHover && hubTitle) {
                const rawName = node.querySelector('span').textContent.replace(/<br\\\\s*\\\\/?>/gi, ' ').trim();
                hubTitle.textContent = rawName;
                hubDefault.style.opacity = '0';
                hubHover.style.opacity = '1';
              }
            });
            
            node.addEventListener('mouseleave', () => {
              node.classList.remove('active-hover');
              if (seg) seg.classList.remove('active-hover');
              
              const hubDefault = container.querySelector('.hub-default');
              const hubHover = container.querySelector('.hub-hover');
              if (hubDefault && hubHover) {
                hubDefault.style.opacity = '1';
                hubHover.style.opacity = '0';
              }
            });
          });
          
          segments.forEach(seg => {
            const nodeClass = seg.getAttribute('data-node');
            const node = container.querySelector('.' + nodeClass);
            
            seg.addEventListener('mouseenter', () => {
              seg.classList.add('active-hover');
              if (node) node.classList.add('active-hover');
              
              const hubDefault = container.querySelector('.hub-default');
              const hubHover = container.querySelector('.hub-hover');
              const hubTitle = container.querySelector('.center-hub-title');
              if (node && hubDefault && hubHover && hubTitle) {
                const rawName = node.querySelector('span').textContent.replace(/<br\\\\s*\\\\/?>/gi, ' ').trim();
                hubTitle.textContent = rawName;
                hubDefault.style.opacity = '0';
                hubHover.style.opacity = '1';
              }
            });
            
            seg.addEventListener('mouseleave', () => {
              seg.classList.remove('active-hover');
              if (node) node.classList.remove('active-hover');
              
              const hubDefault = container.querySelector('.hub-default');
              const hubHover = container.querySelector('.hub-hover');
              if (hubDefault && hubHover) {
                hubDefault.style.opacity = '1';
                hubHover.style.opacity = '0';
              }
            });
          });
        })();
      </script>
    </div>
  </div>
`;

function processFile(filePath) {
  console.log(`Processing ${path.basename(filePath)}...`);
  let content = fs.readFileSync(filePath, 'utf8').replace(/\r\n/g, '\n');

  // Let's locate the Testimonial Section comment or grid class start index
  const targetStart = '<!-- Testimonials Grid Section -->';
  let testimonialIndex = content.indexOf(targetStart);
  
  if (testimonialIndex === -1) {
    // try direct grid search
    const gridSearch = '<div class="grid grid-cols-1 xl:grid-cols-[minmax(0,2fr)_minmax(360px,1fr)]';
    testimonialIndex = content.indexOf(gridSearch);
  }

  const sectionEndIdx = content.lastIndexOf('</section>');

  if (testimonialIndex !== -1 && sectionEndIdx !== -1) {
    // Replace from testimonialIndex to sectionEndIdx with: graphHtmlAbove + testimonialsHtml
    content = content.substring(0, testimonialIndex) + '\n' + graphHtmlAbove + '\n' + testimonialsHtml + '\n' + content.substring(sectionEndIdx);
    console.log(`- Successfully reordered and added spa-hidden toggles to both sections in ${path.basename(filePath)}`);
  } else {
    console.error(`- Failed to locate testimonial start or section end in ${path.basename(filePath)}!`);
  }

  fs.writeFileSync(filePath, content.replace(/\n/g, '\r\n'), 'utf8');
}

processFile(servicesPath);
processFile(solutionsPath);

console.log('Finished reordering circular graph and testimonials!');
