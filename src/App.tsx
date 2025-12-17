import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react'; 

interface NavItem {
  label: string;
  href: string;
}

interface Category {
  id: number;
  title: string;
  label: string;
  img: string;
  mt: string;
}

function App() {
  // Estados para controle de UI
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: 'Home', href: '#home' },
    { label: 'Colaborações', href: '#colab' },
    { label: 'Categorias', href: '#categories' },
    { label: 'Sobre', href: '#about' },
    { label: 'Contato', href: '#contact' }
  ];

  const categories: Category[] = [
    { id: 0, title: 'Fashion', label: '[Fashion]', img: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070&auto=format&fit=crop', mt: 'mt-0' },
    { id: 1, title: 'Beauty', label: '[Beauty]', img: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1887&auto=format&fit=crop', mt: 'md:mt-24' },
    { id: 2, title: 'Commercial', label: '[Commercial]', img: 'https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?q=80&w=1887&auto=format&fit=crop', mt: 'mt-0' },
    { id: 3, title: 'Culture', label: '[Culture]', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop', mt: 'mt-0' },
    { id: 4, title: 'Lifestyle', label: '[Lifestyle]', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2020&auto=format&fit=crop', mt: 'md:mt-24' },
    { id: 5, title: 'Magazine', label: '[Magazine]', img: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1887&auto=format&fit=crop', mt: 'mt-0' },
  ];

  const collaborations = [
    { id: 0, text: "Campanha 'Neon Nights' — Uma exploração de luz e sombra em ambiente urbano.", img: "https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?q=80&w=1887&auto=format&fit=crop" },
    { id: 1, text: "Editorial 'Minimalist Soul' — A beleza encontrada na simplicidade dos acessórios de luxo.", img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1935&auto=format&fit=crop" },
    { id: 2, text: "Projeto 'Red Velvet' — Direção de arte focada em cores vibrantes e empoderamento.", img: "https://images.unsplash.com/photo-1535605463067-dd31100ee40a?q=80&w=1887&auto=format&fit=crop" },
    { id: 3, text: "Lookbook 'Street Vanguard' — Capturando a essência do movimento nas ruas de Paris.", img: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1887&auto=format&fit=crop" }
  ];

  // Efeito do carrossel automático
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (!isCarouselHovered) {
      interval = setInterval(() => { setCurrentSlide((prev) => (prev + 1) % collaborations.length); }, 2500);
    }
    return () => clearInterval(interval);
  }, [isCarouselHovered, collaborations.length]);

  // Sub-componente para item da categoria no Desktop (para limpar o código)
  const DesktopCategoryItem = ({ cat }: { cat: Category }) => {
    const isHovered = activeCategory === cat.id;
    const isAnyHovered = activeCategory !== null;
    
    return (
      <div 
        onMouseEnter={() => setActiveCategory(cat.id)} 
        onMouseLeave={() => setActiveCategory(null)} 
        className={`relative h-full cursor-pointer transition-all duration-500 ease-out ${cat.mt} 
          ${isHovered ? 'w-[600px] z-20 grayscale-0' : 'w-[80px] lg:w-[120px] grayscale'} 
          ${isAnyHovered && !isHovered ? 'w-0 opacity-0 overflow-hidden m-0 p-0' : 'opacity-100'}`}
      >
        <img src={cat.img} className="w-full h-full object-cover" alt={cat.title}/>
        <div className={`mt-4 text-center transition-all duration-300 absolute -bottom-10 left-0 right-0 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
          <span className="text-xs uppercase tracking-widest text-black font-bold">{cat.label}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-fashion-bg text-fashion-black font-sans overflow-x-hidden selection:bg-black selection:text-white flex flex-col scroll-smooth">
      
      {/* MENU MOBILE (Overlay) */}
      <div className={`fixed inset-0 bg-white z-[60] flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-8 right-6 p-2 text-black hover:rotate-90 transition-transform duration-300">
          <X size={32} />
        </button>
        <ul className="flex flex-col gap-8 text-3xl font-serif text-center">
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="hover:italic transition-all duration-300">{item.label}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* --- MENU / NAV --- */}
      <div className="w-full max-w-[1600px] mx-auto px-6 flex-grow">
        <nav className="flex justify-between items-center py-6 md:py-8 border-b border-gray-200 mb-8 md:mb-12 sticky top-0 bg-fashion-bg/90 backdrop-blur-sm z-50 transition-all">
          <div className="font-serif text-xl md:text-2xl font-semibold tracking-wider z-50">Lelo Sasso</div>
          
          {/* Desktop Links */}
          <ul className="hidden md:flex gap-8 text-xs uppercase tracking-widest text-gray-500">
            {navItems.map((item) => (
              <li key={item.label} className="cursor-pointer hover:text-black transition duration-300 relative group">
                <a href={item.href}>{item.label}</a>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* Botão Hambúrguer Mobile */}
          <button className="md:hidden p-2 z-50 text-black" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </nav>

        {/* --- HERO SECTION --- */}
        <header id="home" className="flex flex-col md:flex-row mt-4 md:mt-8 mb-24 md:mb-32 gap-8 md:gap-12 items-center pt-4 md:pt-10">
          <div className="w-full md:w-3/5 relative order-2 md:order-1">
             <div className="overflow-hidden">
                <img src="https://images.unsplash.com/photo-1485230405346-71acb9518d9c?q=80&w=2094&auto=format&fit=crop" alt="Hero Fashion" className="w-full h-[400px] md:h-[600px] object-cover shadow-xl hover:scale-105 transition duration-[1.5s] ease-out" />
             </div>
          </div>
          <div className="w-full md:w-2/5 text-center md:text-left md:pl-8 order-1 md:order-2">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 animate-fade-in">Portfolio 2024</p>
            <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-[0.9] text-fashion-black">Lelo <br/> Sasso</h1>
            <p className="text-gray-500 mb-8 leading-relaxed text-sm max-w-xs mx-auto md:mx-0">Capturando a essência e lifestyle com uma visão contemporânea e única.</p>
            <a href="#categories" className="group border border-black px-8 py-3 text-[10px] uppercase tracking-widest hover:bg-black hover:text-white transition duration-300 inline-flex items-center gap-2">
              Ver Galeria <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/>
            </a>
          </div>
        </header>

        {/* --- COLABORAÇÕES --- */}
        <section id='colab' className="flex flex-col md:flex-row md:h-[600px] mb-24 md:mb-40 bg-gray-50 overflow-hidden group" onMouseEnter={() => setIsCarouselHovered(true)} onMouseLeave={() => setIsCarouselHovered(false)}>
           <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-12 md:pl-20 relative order-2 md:order-1 h-[350px] md:h-auto">
               <h2 className="font-serif text-3xl md:text-5xl mb-4 md:mb-8">Colaborações</h2>
               <div className="h-24 relative">
                  {collaborations.map((item, index) => (
                    <p key={item.id} className={`text-xs md:text-sm text-gray-600 leading-loose max-w-md absolute top-0 left-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 delay-200' : 'opacity-0'}`}>{item.text}</p>
                  ))}
               </div>
               {/* Indicadores de Slide */}
               <div className="flex gap-3 mt-4 md:mt-8">
                  {collaborations.map((_, index) => (
                    <button key={index} onClick={() => setCurrentSlide(index)} className={`h-0.5 md:h-1 cursor-pointer transition-all duration-500 ${index === currentSlide ? 'w-8 md:w-12 bg-black' : 'w-4 bg-gray-300'}`} aria-label={`Slide ${index}`}></button>
                  ))}
               </div>
           </div>
           <div className="w-full md:w-1/2 relative h-[300px] md:h-full order-1 md:order-2">
               {collaborations.map((item, index) => (
                  <img key={item.id} src={item.img} alt="Collaboration" className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}/>
               ))}
               <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-20 bg-white/90 backdrop-blur px-3 py-1"><span className="text-[10px] uppercase tracking-widest font-bold">0{currentSlide + 1} / 0{collaborations.length}</span></div>
           </div>
        </section>

        {/* --- CATEGORIES (REFORMULADO PARA MOBILE) --- */}
        <section id="categories" className="mb-24 md:mb-40 pt-10 md:pt-20">
           
           {/* MOBILE VERSION: Horizontal Snap Scroll 
               Aqui está a solução para o problema que você relatou. 
               Usamos 'snap-x' para criar uma rolagem magnética horizontal. 
           */}
           <div className="md:hidden">
              <div className="mb-6 flex justify-between items-end px-2">
                <h2 className="font-serif text-4xl text-fashion-black">Categories</h2>
                <span className="text-[10px] uppercase text-gray-400 tracking-widest animate-pulse">Deslize &rarr;</span>
              </div>
              
              {/* Container de Scroll Horizontal */}
              <div className="flex overflow-x-auto gap-4 pb-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6">
                 {categories.map((cat) => (
                    <div key={cat.id} className="min-w-[75vw] snap-center relative aspect-[3/4] overflow-hidden group">
                       <img src={cat.img} alt={cat.title} className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 transition-all duration-500" />
                       <div className="absolute bottom-0 left-0 bg-white/95 p-5 w-full backdrop-blur-sm translate-y-2 group-hover:translate-y-0 transition-transform">
                          <h3 className="font-serif text-2xl mb-1 text-black">{cat.title}</h3>
                          <p className="text-[10px] uppercase tracking-widest text-gray-500">Explorar Projetos</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           {/* DESKTOP VERSION: Accordion Logic (Original melhorado) */}
           <div className="hidden md:flex justify-center items-start w-full h-[600px] gap-2"> 
              {categories.slice(0, 3).map((cat) => <DesktopCategoryItem key={cat.id} cat={cat} />)}
              
              <div className={`flex items-center justify-center h-full transition-all duration-500 overflow-hidden ${activeCategory !== null ? 'w-0 opacity-0' : 'w-[300px] opacity-100'}`}>
                <h2 className="font-serif text-6xl text-fashion-black">Categories</h2>
              </div>
              
              {categories.slice(3, 6).map((cat) => <DesktopCategoryItem key={cat.id} cat={cat} />)}
           </div>
        </section>

        {/* --- ABOUT ME --- */}
        <section id="about" className="mb-24 pt-10 md:pt-20"> 
           <div className="flex flex-col md:flex-row justify-between items-start mb-8 md:mb-12">
             <h2 className="font-serif text-4xl md:text-6xl text-fashion-black mb-4 md:mb-0">Sobre</h2>
             <p className="md:w-1/3 text-sm text-gray-600 leading-relaxed md:text-right">
                Sou um fotógrafo que trabalha na interseção entre lifestyle & datas comemorativas. 
                Gosto de capturar a essência e o caráter das pessoas.
             </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto md:h-[800px]">
             {/* No Mobile, invertemos a ordem para texto vir antes da foto principal */}
             <div className="flex flex-col h-[600px] md:h-full gap-4 order-2 md:order-1">
                <div className="bg-[#1c1c1c] text-white p-8 md:p-12 flex flex-col justify-center h-[48%] relative overflow-hidden group">
                   <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all"></div>
                   
                   <h3 className="font-serif text-2xl md:text-3xl mb-4 text-white relative z-10">Minha Visão</h3>
                   <p className="text-gray-400 text-xs leading-loose mb-4 relative z-10">
                     Trabalho com fotografia lifestyle no Brasil, focando sempre na qualidade e na narrativa visual.
                   </p>
                   <p className="text-gray-400 text-xs leading-loose relative z-10">
                     Meu estilo é ousado, minimalista e moderno.
                   </p>
                </div>
                <div className="h-[48%] relative flex-grow">
                    <img 
                      src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1887&auto=format&fit=crop" 
                      alt="Portrait Face" 
                      className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700" 
                    />
                </div>
             </div>
             <div className="h-[400px] md:h-full relative order-1 md:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop" 
                  alt="Full Portrait" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
             </div>
           </div>
        </section>

      </div>

      {/* --- FOOTER --- */}
      <footer id="contact" className="bg-[#111] text-white py-16 md:py-24 px-6 w-full mt-auto border-t border-gray-900">
          <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">

            <div className="md:col-span-4 flex flex-col justify-between min-h-[200px] md:min-h-[250px]">
              <div>
                <p className="text-gray-500 text-[10px] mb-2 uppercase tracking-widest">© 2024 Photography Portfolio</p>
                <h2 className="font-serif text-3xl md:text-4xl text-white">Lelo Sasso</h2>
              </div>
              <div className="mt-8 md:mt-0">
                <p className="text-gray-500 text-[10px] mb-4 uppercase tracking-widest">Newsletter</p>
                <div className="flex items-center border-b border-gray-700 pb-2 w-full max-w-xs group focus-within:border-white transition-colors">
                   <input type="email" placeholder="Seu email" className="bg-transparent border-none outline-none text-white w-full text-sm placeholder-gray-600 focus:ring-0"/>
                   <span className="text-gray-500 group-focus-within:text-white cursor-pointer text-xl transition-colors">&rarr;</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 flex items-start">
               <p className="text-gray-400 text-sm leading-relaxed max-w-xs pt-0 md:pt-8">
                 Transformando momentos em memórias tangíveis através de uma lente minimalista e focada na emoção crua.
               </p>
            </div>

            <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-3 gap-8 text-sm text-gray-400 pt-0 md:pt-8">
                <div className="flex flex-col gap-3">
                  <h4 className="text-white mb-2 font-medium uppercase tracking-widest text-[10px]">Socials</h4>
                  <a href="#" className="hover:text-white transition">Instagram</a>
                  <a href="#" className="hover:text-white transition">TikTok</a>
                </div>
                <div className="flex flex-col gap-3">
                  <h4 className="text-white mb-2 font-medium uppercase tracking-widest text-[10px]">Info</h4>
                  <p>Curitiba - PR</p>
                  <a href="mailto:lelosassofotografia@gmail.com" className="hover:text-white transition">Email</a>
                </div>
            </div>
          </div>
      </footer>
      {/* --- WHATSAPP FLOATING BUTTON --- */}
      <a 
        /* AQUI ESTÁ A MÁGICA:
           ?text= define a mensagem automática.
           Os códigos "%20" são espaços em branco que o navegador entende.
        */
        href="https://wa.me/554195000580?text=Ol%C3%A1%2C%20Lelo!%20Vi%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20ensaios."
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[9999] group flex items-center justify-center"
        aria-label="Conversar no WhatsApp"
      >
        {/* Animação de "Onda" (Ping) atrás do botão */}
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30 duration-1000"></span>
        
        {/* O Botão em si */}
        <div className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 group-hover:scale-110 group-hover:shadow-2xl">
           
           {/* Ícone SVG do WhatsApp (Branco) */}
           <svg 
             viewBox="0 0 24 24" 
             fill="currentColor" 
             className="w-8 h-8 text-white"
           >
             <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
           </svg>
        </div>
        
        {/* Tooltip (Texto ao lado) */}
        <span className="absolute right-16 bg-black text-white text-xs py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden md:block tracking-widest uppercase shadow-lg">
          Fale Conosco
        </span>
      </a>
    </div>
  )
}

export default App