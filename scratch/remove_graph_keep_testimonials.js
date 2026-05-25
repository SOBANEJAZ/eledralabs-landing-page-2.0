const fs = require('fs');
const path = require('path');

const projectRoot = 'c:\\Users\\Hp\\Desktop\\eledralabs- website\\eledralabs- website';
const servicesPath = path.join(projectRoot, 'components', 'services.html');
const solutionsPath = path.join(projectRoot, 'components', 'solutions.html');

// Vibrant testimonials HTML (lime and deep orange cards with toggle id and class)
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

function processFile(filePath) {
  console.log(`Processing ${path.basename(filePath)}...`);
  let content = fs.readFileSync(filePath, 'utf8').replace(/\r\n/g, '\n');

  // A. Clean up graph styles in services.html
  const styleStart = content.indexOf('/* --- Architecture Graph Styles --- */');
  const styleEnd = content.indexOf('</style>');
  if (styleStart !== -1 && styleEnd !== -1 && styleStart < styleEnd) {
    content = content.substring(0, styleStart) + content.substring(styleEnd);
    console.log(`- Removed circular graph style block`);
  }

  // Also clean up style block in solutions.html (which is a standalone style block)
  if (path.basename(filePath) === 'solutions.html') {
    const standaloneStyleRegex = /<style>[\s\S]*?<\/style>/;
    const styleMatch = content.match(standaloneStyleRegex);
    if (styleMatch && styleMatch[0].includes('Architecture Graph')) {
      content = content.replace(standaloneStyleRegex, '');
      console.log(`- Removed standalone circular graph <style> block`);
    }
  }

  // B. Find the very beginning of the bottom elements (e.g. Testimonials Grid Section comment, or graph section comment)
  let testimonialIndex = content.indexOf('<!-- Testimonials Grid Section -->');
  let graphIndex = content.indexOf('<!-- Unified Interactive Architecture Loop Section (Solutions Page Only) -->');

  let cutIndex = -1;
  if (testimonialIndex !== -1 && graphIndex !== -1) {
    cutIndex = Math.min(testimonialIndex, graphIndex);
  } else if (testimonialIndex !== -1) {
    cutIndex = testimonialIndex;
  } else if (graphIndex !== -1) {
    cutIndex = graphIndex;
  }

  const sectionEndIdx = content.lastIndexOf('</section>');

  if (cutIndex !== -1 && sectionEndIdx !== -1) {
    // Replace all trailing sections before </section> with just the clean, togglable testimonialsHtml
    content = content.substring(0, cutIndex) + '\n' + testimonialsHtml + '\n' + content.substring(sectionEndIdx);
    console.log(`- Successfully removed graph and restored pristine testimonials block`);
  } else {
    console.error(`- Failed to locate sections to replace in ${path.basename(filePath)}`);
  }

  fs.writeFileSync(filePath, content.replace(/\n/g, '\r\n'), 'utf8');
  console.log(`Successfully completed all updates in ${path.basename(filePath)}\n`);
}

processFile(servicesPath);
processFile(solutionsPath);

console.log('Finished removing interactive circular graph!');
