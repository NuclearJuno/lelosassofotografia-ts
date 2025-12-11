import { useState } from 'react'

// TYPESCRIPT: Aqui criamos os "contratos" dos dados.
// Isso é exclusivo do TS e ajuda o editor a te dar dicas.
interface NavItem {
  label: string;
  href: string;
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Portfolio', href: '#' },
    { label: 'Contact', href: '#' }
  ];

  return (
    // CONTAINER PRINCIPAL
    <div className="min-h-screen bg-fashion-bg text-fashion-black font-sans overflow-x-hidden selection:bg-black selection:text-white">
      
      <div className="max-w-7xl mx-auto px-6">

        {/* --- MENU DE NAVEGAÇÃO --- */}
        <nav className="flex justify-between items-center py-8 border-b border-gray-200">
          <div className="font-serif text-xl font-semibold tracking-wider">
            MARY ROMANOVSKAYA
          </div>
          
          {/* Menu Desktop */}
          <ul className="hidden md:flex gap-8 text-xs uppercase tracking-widest text-gray-600">
            {navItems.map((item) => (
              <li key={item.label} className="cursor-pointer hover:text-black transition duration-300 relative group">
                <a href={item.href}>{item.label}</a>
                {/* Linha animada embaixo do menu */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </nav>

        {/* --- HERO SECTION (Topo) --- */}
        <header className="flex flex-col md:flex-row mt-16 mb-24 gap-12 items-center">
          
          {/* Imagem Esquerda */}
          <div className="w-full md:w-3/5 relative">
            <img 
              src="https://images.unsplash.com/photo-1485230405346-71acb9518d9c?q=80&w=2094&auto=format&fit=crop" 
              alt="Hero Fashion" 
              className="w-full h-[500px] object-cover shadow-xl" 
            />
            {/* Borda decorativa deslocada */}
            <div className="absolute top-4 -right-4 w-full h-full border border-gray-300 -z-10 hidden md:block"></div>
          </div>

          {/* Texto Direita */}
          <div className="w-full md:w-2/5 text-center md:text-left">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4">Fashion Photographer</p>
            <h1 className="font-serif text-5xl md:text-6xl mb-6 leading-[1.1]">
              Mary <br/> Romanovskaya
            </h1>
            <p className="text-gray-600 mb-8 leading-relaxed text-sm md:text-base">
              Capturando a essência da moda urbana e editorial com uma visão única, onde a elegância clássica encontra a atitude moderna.
            </p>
            <button className="bg-black text-white px-8 py-4 text-xs uppercase tracking-widest hover:bg-gray-800 transition duration-300">
              Ver Galeria Completa
            </button>
          </div>
        </header>

        {/* --- GRID ASSIMÉTRICO (Estilo Revista) --- */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-32">
          
          {/* 1. Imagem Pequena Esquerda */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <img 
              src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop" 
              alt="Landscape" 
              className="w-full h-64 object-cover filter grayscale hover:grayscale-0 transition duration-500"
            />
            <p className="text-[10px] uppercase tracking-widest text-gray-500">Editorial Collection '24</p>
          </div>
          
          {/* 2. Título Gigante Centro */}
          <div className="md:col-span-4 text-center py-10 md:py-0">
            <h2 className="font-serif text-6xl md:text-7xl italic text-gray-900">Fashion</h2>
            <p className="text-xs mt-4 text-gray-400 uppercase tracking-widest">Estética & Movimento</p>
          </div>

          {/* 3. Imagem Grande Direita com Texto Sobreposto */}
          <div className="md:col-span-5 relative group cursor-pointer overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070&auto=format&fit=crop" 
              alt="Move" 
              className="w-full h-[500px] object-cover transition duration-700 group-hover:scale-105"
            />
            {/* Texto "move." colado na imagem */}
            <div className="absolute top-8 left-8 text-white mix-blend-difference">
              <h3 className="text-5xl font-bold font-serif">move.</h3>
            </div>
          </div>
        </section>

        {/* --- GALERIA DE 3 FOTOS --- */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-24">
          {[
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1620327334789-9e8c47482d7a?q=80&w=1974&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=1964&auto=format&fit=crop"
          ].map((url, index) => (
             <div key={index} className="overflow-hidden">
                <img src={url} alt={`Detail ${index}`} className="w-full h-80 object-cover hover:scale-105 transition duration-700 ease-in-out" />
             </div>
          ))}
        </section>

      </div>

      {/* --- RODAPÉ --- */}
      <footer className="bg-black text-white py-20 px-6 mt-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="md:w-1/3">
                <h2 className="font-serif text-3xl mb-4">Mary Romanovskaya</h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Fotografia é a arte de congelar o tempo e capturar a alma do momento. Disponível para projetos em todo o mundo.
                </p>
            </div>
            
            <div className="flex gap-16 text-sm text-gray-400">
                <div className="flex flex-col gap-3">
                    <h4 className="text-white uppercase tracking-widest text-xs mb-1">Social</h4>
                    <a href="#" className="hover:text-white transition">Instagram</a>
                    <a href="#" className="hover:text-white transition">Behance</a>
                </div>
                <div className="flex flex-col gap-3">
                    <h4 className="text-white uppercase tracking-widest text-xs mb-1">Contact</h4>
                    <a href="#" className="hover:text-white transition">hello@mary.com</a>
                </div>
            </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 text-center text-gray-600 text-xs uppercase tracking-widest">
            © 2024 Mary Romanovskaya. All rights reserved.
        </div>
      </footer>

    </div>
  )
}

export default App