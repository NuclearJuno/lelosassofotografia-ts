import { useState, useEffect } from 'react'

interface NavItem {
  label: string;
  href: string;
}

function App() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);

  const navItems: NavItem[] = [
    { label: 'Home', href: '#home' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Highlights', href: '#highlights' },
    { label: 'Categories', href: '#categories' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  const categories = [
    { id: 0, title: 'Fashion', label: '[Fashion]', img: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070&auto=format&fit=crop', mt: 'mt-0' },
    { id: 1, title: 'Beauty', label: '[Beauty]', img: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1887&auto=format&fit=crop', mt: 'mt-24' },
    { id: 2, title: 'Commercial', label: '[Commercial]', img: 'https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?q=80&w=1887&auto=format&fit=crop', mt: 'mt-0' },
    { id: 3, title: 'Culture', label: '[Culture]', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop', mt: 'mt-0' },
    { id: 4, title: 'Lifestyle', label: '[Lifestyle]', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2020&auto=format&fit=crop', mt: 'mt-24' },
    { id: 5, title: 'Magazine', label: '[Magazine]', img: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1887&auto=format&fit=crop', mt: 'mt-0' },
  ];

  const collaborations = [
    { id: 0, text: "Campanha 'Neon Nights' — Uma exploração de luz e sombra em ambiente urbano.", img: "https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?q=80&w=1887&auto=format&fit=crop" },
    { id: 1, text: "Editorial 'Minimalist Soul' — A beleza encontrada na simplicidade dos acessórios de luxo.", img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1935&auto=format&fit=crop" },
    { id: 2, text: "Projeto 'Red Velvet' — Direção de arte focada em cores vibrantes e empoderamento.", img: "https://images.unsplash.com/photo-1535605463067-dd31100ee40a?q=80&w=1887&auto=format&fit=crop" },
    { id: 3, text: "Lookbook 'Street Vanguard' — Capturando a essência do movimento nas ruas de Paris.", img: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1887&auto=format&fit=crop" }
  ];

  useEffect(() => {
    let interval: any;
    if (!isCarouselHovered) {
      interval = setInterval(() => { setCurrentSlide((prev) => (prev + 1) % collaborations.length); }, 2500);
    }
    return () => clearInterval(interval);
  }, [isCarouselHovered, collaborations.length]);

  return (
    <div className="min-h-screen bg-fashion-bg text-fashion-black font-sans overflow-x-hidden selection:bg-black selection:text-white flex flex-col">
      
      {/* WRAPPER PRINCIPAL */}
      <div className="w-full max-w-[1600px] mx-auto px-6 flex-grow">
        
        {/* MENU */}
        <nav className="flex justify-between items-center py-8 border-b border-gray-200 mb-12 sticky top-0 bg-fashion-bg/95 backdrop-blur z-50 transition-all">
          <div className="font-serif text-xl font-semibold tracking-wider">MARY ROMANOVSKAYA</div>
          <ul className="hidden md:flex gap-8 text-xs uppercase tracking-widest text-gray-600">
            {navItems.map((item) => (
              <li key={item.label} className="cursor-pointer hover:text-black transition duration-300 relative group">
                <a href={item.href}>{item.label}</a>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </nav>

        {/* HERO */}
        <header id="home" className="flex flex-col md:flex-row mt-8 mb-32 gap-12 items-center pt-10">
          <div className="w-full md:w-3/5 relative"><img src="https://images.unsplash.com/photo-1485230405346-71acb9518d9c?q=80&w=2094&auto=format&fit=crop" alt="Hero Fashion" className="w-full h-[600px] object-cover shadow-xl" /></div>
          <div className="w-full md:w-2/5 text-center md:text-left pl-8">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4">Fashion Photographer</p>
            <h1 className="font-serif text-6xl md:text-7xl mb-6 leading-[1] text-fashion-black">Mary <br/> Romanovskaya</h1>
            <p className="text-gray-600 mb-8 leading-relaxed text-sm">Capturando a essência da moda urbana e editorial com uma visão única.</p>
            <a href="#portfolio" className="border border-black px-10 py-4 text-xs uppercase tracking-widest hover:bg-black hover:text-white transition duration-300 inline-block">Ver Galeria</a>
          </div>
        </header>

        {/* FASHION */}
        <section id="fashion" className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-40 pt-20">
           <div className="md:col-span-3"><img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop" className="w-full h-[300px] object-cover grayscale" alt="Fashion"/><p className="text-[10px] mt-2 uppercase tracking-widest text-gray-400">Editorial '24</p></div>
           <div className="md:col-span-6 text-center"><h2 className="font-serif text-7xl italic">Fashion</h2></div>
           <div className="md:col-span-3"><img src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070&auto=format&fit=crop" className="w-full h-[400px] object-cover" alt="Move"/></div>
        </section>

        {/* COLABORAÇÕES */}
        <section className="flex flex-col md:flex-row h-[600px] mb-40 bg-gray-50" onMouseEnter={() => setIsCarouselHovered(true)} onMouseLeave={() => setIsCarouselHovered(false)}>
           <div className="w-full md:w-1/2 flex flex-col justify-center p-12 md:pl-20 relative">
               <h2 className="font-serif text-5xl mb-8">Colaborações</h2>
               <div className="h-32 relative">
                  {collaborations.map((item, index) => (
                    <p key={item.id} className={`text-sm text-gray-600 leading-loose max-w-md absolute top-0 left-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 delay-200' : 'opacity-0'}`}>{item.text}</p>
                  ))}
               </div>
               <div className="flex gap-3 mt-8">
                  {collaborations.map((_, index) => (
                    <div key={index} onClick={() => setCurrentSlide(index)} className={`h-1 cursor-pointer transition-all duration-500 ${index === currentSlide ? 'w-12 bg-black' : 'w-4 bg-gray-300'}`}></div>
                  ))}
               </div>
           </div>
           <div className="w-full md:w-1/2 relative overflow-hidden h-full">
               {collaborations.map((item, index) => (
                  <img key={item.id} src={item.img} alt="Collaboration" className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}/>
               ))}
               <div className="absolute bottom-8 right-8 z-20 bg-white/90 backdrop-blur px-4 py-2"><span className="text-[10px] uppercase tracking-widest font-bold">Project 0{currentSlide + 1}</span></div>
           </div>
        </section>

        {/* HIGHLIGHTS */}
        <section id="highlights" className="mb-40 pt-20">
          <div className="flex flex-col md:flex-row items-start justify-between gap-6">
            <div className="md:w-[15%] pt-6"><h2 className="font-serif text-5xl text-fashion-black">Highlights</h2></div>
            <div className="flex flex-col gap-3 md:w-[15%]">
              <img src="https://images.unsplash.com/photo-1548366565-6bbab241282d?q=80&w=1887&auto=format&fit=crop" alt="Street" className="w-full h-[280px] object-cover grayscale hover:grayscale-0 transition duration-500" />
              <p className="text-xs text-gray-500 font-normal">[Street Style]</p>
            </div>
            <div className="flex flex-col gap-3 md:w-[35%]">
              <img src="https://images.unsplash.com/photo-1495385794356-15371f348c31?q=80&w=1870&auto=format&fit=crop" alt="Campaigns" className="w-full h-[600px] object-cover" />
              <p className="text-xs text-gray-500 font-normal">[Campaigns & Lookbooks]</p>
            </div>
            <div className="flex gap-4 md:w-[30%]">
              <div className="flex flex-col gap-3 w-1/3"><img src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=1887&auto=format&fit=crop" className="w-full h-[180px] object-cover grayscale hover:grayscale-0 transition" alt="Ed" /><p className="text-[10px] text-gray-500">[Editorials]</p></div>
              <div className="flex flex-col gap-3 w-1/3"><img src="https://images.unsplash.com/photo-1502989642968-94fbdc9eace4?q=80&w=1888&auto=format&fit=crop" className="w-full h-[180px] object-cover grayscale hover:grayscale-0 transition" alt="Back" /><p className="text-[10px] text-gray-500">[Backstage]</p></div>
              <div className="flex flex-col gap-3 w-1/3"><img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop" className="w-full h-[180px] object-cover grayscale hover:grayscale-0 transition" alt="Port" /><p className="text-[10px] text-gray-500">[Portraits]</p></div>
            </div>
          </div>
        </section>

        {/* CATEGORIES */}
        <section id="categories" className="mb-40 min-h-[600px] flex flex-col justify-center relative pt-20">
           <div className="flex justify-center items-start w-full h-[600px] gap-2"> 
              {categories.slice(0, 3).map((cat) => {
                 const isHovered = activeCategory === cat.id; const isAnyHovered = activeCategory !== null;
                 return (
                    <div 
                        key={cat.id} 
                        onMouseEnter={() => setActiveCategory(cat.id)} 
                        onMouseLeave={() => setActiveCategory(null)} 
                        className={`relative h-full cursor-pointer transition-all duration-400 ease-in-out ${cat.mt} ${isHovered ? 'w-[700px] z-20 grayscale-0' : 'w-[100px] grayscale'} ${isAnyHovered && !isHovered ? 'w-0 opacity-0 overflow-hidden m-0 p-0' : 'opacity-100'}`}>
                       <img src={cat.img} className="w-full h-full object-cover" alt={cat.title}/>
                       <div className={`mt-4 text-center transition-opacity duration-300 ${isAnyHovered && !isHovered ? 'opacity-0' : 'opacity-100'}`}><span className="text-xs uppercase tracking-widest text-gray-600">{cat.label}</span></div>
                    </div>
                 )
              })}
              <div className={`flex items-center justify-center h-full transition-all duration-400 overflow-hidden ${activeCategory !== null ? 'w-0 opacity-0' : 'w-[300px] opacity-100'}`}><h2 className="font-serif text-6xl text-fashion-black">Categories</h2></div>
              {categories.slice(3, 6).map((cat) => {
                 const isHovered = activeCategory === cat.id; const isAnyHovered = activeCategory !== null;
                 return (
                    <div 
                        key={cat.id} 
                        onMouseEnter={() => setActiveCategory(cat.id)} 
                        onMouseLeave={() => setActiveCategory(null)} 
                        className={`relative h-full cursor-pointer transition-all duration-400 ease-in-out ${cat.mt} ${isHovered ? 'w-[700px] z-20 grayscale-0' : 'w-[100px] grayscale'} ${isAnyHovered && !isHovered ? 'w-0 opacity-0 overflow-hidden m-0 p-0' : 'opacity-100'}`}>
                       <img src={cat.img} className="w-full h-full object-cover" alt={cat.title}/>
                       <div className={`mt-4 text-center transition-opacity duration-300 ${isAnyHovered && !isHovered ? 'opacity-0' : 'opacity-100'}`}><span className="text-xs uppercase tracking-widest text-gray-600">{cat.label}</span></div>
                    </div>
                 )
              })}
           </div>
        </section>

        {/* --- ABOUT ME --- */}
        <section id="about" className="mb-24 pt-20"> 
           <div className="flex flex-col md:flex-row justify-between items-start mb-12">
             <h2 className="font-serif text-6xl text-fashion-black">About Me</h2>
             <p className="md:w-1/3 text-sm text-gray-600 leading-relaxed text-right pt-4">
                Sou uma fotógrafa que trabalha na interseção entre moda e lifestyle. 
                Gosto de capturar a essência e o caráter das pessoas.
             </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[800px]">
             <div className="flex flex-col h-full gap-4">
                <div className="bg-[#1c1c1c] text-white p-12 flex flex-col justify-center h-[48%]">
                   <h3 className="font-serif text-3xl mb-4 text-white">Minha Visão</h3>
                   <p className="text-gray-400 text-xs leading-loose mb-4">
                     Trabalho com fotografia de moda e lifestyle em Paris. Aceito projetos de qualquer escala, focando sempre na qualidade e na narrativa visual.
                   </p>
                   <p className="text-gray-400 text-xs leading-loose">
                     Meu estilo é ousado, minimalista e moderno. Trabalho para que cada foto seja atual e publicável.
                   </p>
                </div>
                <div className="h-[48%] relative">
                    <img 
                      src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1887&auto=format&fit=crop" 
                      alt="Portrait Face" 
                      className="absolute inset-0 w-full h-full object-cover grayscale" 
                    />
                </div>
             </div>
             <div className="h-full relative">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop" 
                  alt="Full Portrait" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
             </div>
           </div>
        </section>

        {/* --- PORTFOLIO (CORRIGIDO: h-auto PARA NÃO ESCORREGAR) --- */}
        <section id="portfolio" className="mb-20 pt-10 pb-10">
            <h2 className="font-serif text-6xl text-center mb-16">Portfolio</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto"> {/* h-auto é o segredo aqui */}
                
                {/* Coluna 1 */}
                <div className="md:col-span-3 flex flex-col gap-4">
                    <img src="https://images.unsplash.com/photo-1550614000-4b9519e003ac?q=80&w=1887&auto=format&fit=crop" className="h-[400px] w-full object-cover" alt="Port1"/>
                    <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop" className="h-[400px] w-full object-cover grayscale" alt="Port2"/>
                </div>

                {/* Coluna 2 */}
                <div className="md:col-span-4">
                    <img src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=1964&auto=format&fit=crop" className="h-[816px] w-full object-cover" alt="Red"/>
                </div>

                {/* Coluna 3 */}
                <div className="md:col-span-5 grid grid-cols-2 gap-4">
                    <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop" className="h-[260px] w-full object-cover" alt="Grid1"/>
                    <img src="https://images.unsplash.com/photo-1535605463067-dd31100ee40a?q=80&w=1887&auto=format&fit=crop" className="h-[260px] w-full object-cover" alt="Grid2"/>
                    <img src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=1935&auto=format&fit=crop" className="h-[260px] w-full object-cover grayscale" alt="Grid3"/>
                    <img src="https://images.unsplash.com/photo-1534008779888-29007a76080b?q=80&w=1887&auto=format&fit=crop" className="h-[260px] w-full object-cover grayscale" alt="Grid4"/>
                    <img src="https://images.unsplash.com/photo-1546768292-fb12f6c92568?q=80&w=2070&auto=format&fit=crop" className="h-[260px] w-full object-cover" alt="Grid5"/>
                    <img src="https://images.unsplash.com/photo-1502989642968-94fbdc9eace4?q=80&w=1888&auto=format&fit=crop" className="h-[260px] w-full object-cover" alt="Grid6"/>
                </div>
            </div>
            
            <div className="text-right mt-8">
                <button className="bg-[#222] text-white px-8 py-3 text-xs uppercase tracking-widest hover:bg-gray-800 transition">Ver tudo &rarr;</button>
            </div>
        </section>

      </div> {/* Fim do Wrapper */}

      {/* --- FOOTER (LARGURA TOTAL) --- */}
      <footer id="contact" className="bg-[#111] text-white py-24 px-6 w-full mt-auto">
          <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">

            <div className="md:col-span-4 flex flex-col justify-between min-h-[250px]">
              <div>
                <p className="text-gray-500 text-[10px] mb-2 uppercase tracking-widest">Fashion photographer</p>
                <h2 className="font-serif text-4xl text-white">Mary Romanovskaya</h2>
              </div>
              <div>
                <p className="text-gray-500 text-[10px] mb-4 uppercase tracking-widest">Fique por dentro das novidades</p>
                <div className="flex items-center border-b border-gray-700 pb-2 w-full max-w-xs">
                   <input type="email" placeholder="E-mail address" className="bg-transparent border-none outline-none text-white w-full text-sm placeholder-gray-600 focus:ring-0"/>
                   <span className="text-gray-500 cursor-pointer text-xl">&rarr;</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 flex items-start">
               <p className="text-white text-sm leading-relaxed max-w-xs pt-8">
                 Сотрудничаю с брендами, моделями и людьми, которые хотят выделяться.
                 <br /><br />
                 Давайте создадим историю вместе.
               </p>
            </div>

            <div className="md:col-span-4 grid grid-cols-3 gap-8 text-sm text-gray-400 pt-8">
                <div className="flex flex-col gap-3">
                  <h4 className="text-white mb-2 font-medium uppercase tracking-widest text-[10px]">Socials</h4>
                  <a href="#" className="hover:text-white transition">Instagram</a>
                  <a href="#" className="hover:text-white transition">TikTok</a>
                  <a href="#" className="hover:text-white transition">Behance</a>
                  <a href="#" className="hover:text-white transition">VK</a>
                </div>
                <div className="flex flex-col gap-3">
                  <h4 className="text-white mb-2 font-medium uppercase tracking-widest text-[10px]">Contacts</h4>
                  <p>Moscow</p>
                  <p>+7 (929) 633-14-43</p>
                  <a href="mailto:hello@st.com" className="hover:text-white transition">Email</a>
                </div>
                <div className="flex flex-col gap-3">
                  <h4 className="text-white mb-2 font-medium uppercase tracking-widest text-[10px]">Info</h4>
                  <a href="#portfolio" className="hover:text-white transition">Portfolio</a>
                  <a href="#about" className="hover:text-white transition">About Me</a>
                  <a href="#contact" className="hover:text-white transition">Contacts</a>
                </div>
            </div>

          </div>
      </footer>

    </div>
  )
}

export default App