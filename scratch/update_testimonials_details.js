const fs = require('fs');
const path = require('path');

const projectRoot = 'c:\\Users\\Hp\\Desktop\\eledralabs- website\\eledralabs- website';
const servicesPath = path.join(projectRoot, 'components', 'services.html');
const solutionsPath = path.join(projectRoot, 'components', 'solutions.html');

// Define the updated Testimonials HTML
const updatedTestimonialsHtml = `
  <!-- Testimonials Grid Section -->
  <div id="solutions-testimonials-section" class="grid grid-cols-1 xl:grid-cols-[minmax(0,2fr)_minmax(360px,1fr)] mt-6 md:mt-8 lg:mt-10 border border-border spa-hidden">
    <!-- Card 1: Lime Green/Yellow -->
    <a class="group min-h-75 relative flex flex-col p-5 overflow-hidden gap-8 xl:border-r xl:border-border xl:gap-0 xl:justify-between" href="/contact" style="background: #d4f33b; color: #000000 !important;">
      <p class="relative z-10 text-24 leading-120 text-black max-w-140 font-sans" style="color: #000000 !important; font-weight: 500;">"Eledra Labs automated our entire customer workflow, every lead is now qualified, routed, and followed up within seconds. It's like adding a full operations team without the headcount."</p>
      <div class="relative z-10 flex items-center justify-between">
        <div class="flex items-center gap-5">
          <div style="width:40px;height:40px;border-radius:50%;background:rgba(0,0,0,0.08);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:18px;color:#000">S</div>
          <div class="flex flex-col font-sans">
            <p class="text-18 text-black leading-normal" style="color: #000000 !important; font-weight: 600;">Saloni</p>
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
      <p class="relative z-10 text-24 leading-120 text-white font-sans" style="color: #ffffff !important; font-weight: 500;">"The AI voice agent Eledra Labs built for us handles 300+ calls a day, patient satisfaction is up 40% and our staff finally has time to focus on care."</p>
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

  // Locate the testimonials grid section and replace it
  const testimonialStartIdx = content.indexOf('<!-- Testimonials Grid Section -->');
  const sectionEndIdx = content.lastIndexOf('</section>');

  if (testimonialStartIdx !== -1 && sectionEndIdx !== -1) {
    content = content.substring(0, testimonialStartIdx) + '\n' + updatedTestimonialsHtml + '\n' + content.substring(sectionEndIdx);
    console.log(`- Successfully updated testimonials details in ${path.basename(filePath)}`);
  } else {
    console.error(`- Failed to locate testimonial start or section end in ${path.basename(filePath)}!`);
  }

  fs.writeFileSync(filePath, content.replace(/\n/g, '\r\n'), 'utf8');
}

processFile(servicesPath);
processFile(solutionsPath);

console.log('Finished updating testimonials details!');
