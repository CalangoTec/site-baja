import { Link, useNavigate } from 'react-router-dom'; // Adicionado useNavigate
import logoAmarelo from '../assets/logoAmarelo.png';
import { useState, useEffect, useRef } from 'react';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [subsistemasOpen, setSubsistemasOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate(); // Hook para redirecionamento

    const navbarItens = [
        { name: 'HOME', link: '/home' },
        { name: 'SUBSISTEMAS', link: '#' },
        { name: 'LOJA', link: '/loja' },
        { name: 'CONTATO', link: '/contato' },
    ];

    const subsistemas = [
        { name: 'FREIOS', link: '/subsistemas/freio' },
        { name: 'GESTÃO', link: '/subsistemas/gestao' },
        { name: 'CÁLCULO ESTRUTURAL', link: '/subsistemas/calculo' },
        { name: 'ESTRUTURA', link: '/subsistemas/estrutura' },
        { name: 'SUSPENSÃO', link: '/subsistemas/suspensao' },     
        { name: 'ELETRÔNICA', link: '/subsistemas/eletronica' },
        { name: 'POWERTRAIN', link: '/subsistemas/powertrain' },
        
    ];

    // Fechar o dropdown ao clicar fora
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
                setSubsistemasOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className="bg-black flex flex-col items-center sm:items-start sm:flex-row w-full font-[Inter] p-2 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
            {/* Logo + Nome da Equipe */}
            <div className="flex items-center justify-between w-full sm:w-auto">
                <div className="flex items-center gap-3 ml-4">
                    {/* Ícone do Baja agora redireciona para Home */}
                    <img 
                        src={logoAmarelo} 
                        alt="Logo" 
                        className="size-20 p-2 cursor-pointer" 
                        onClick={() => navigate('/home')} // Redireciona ao clicar
                    />
                    {/* Nome da equipe ao lado da logo */}
                    <div className="text-white ml-[-10px]">
                        <p className="text-lg font-medium">EQUIPE</p>
                        <p className="text-sm font-bold text-[#F8C423]">CALANGOTEC</p>
                    </div>
                </div>

                {/* Ícone de menu para telas móveis */}
                <button 
                    className="text-[#F8C423] sm:hidden mr-4"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Navbar */}
            <div className='w-full'></div>
            <nav id='navbar' className={'w-fit p-7 ' + (isOpen || window.screen.width >= 640 ? 'flex' : 'hidden')}>
                <ul className='flex flex-col sm:flex-row items-center justify-center gap-8'>
                    {navbarItens.map((item) => (
                        item.name === 'SUBSISTEMAS' ? (
                            <div 
                                key={item.name} 
                                className='relative w-full sm:w-auto'
                                ref={dropdownRef}
                                onMouseEnter={() => window.innerWidth >= 640 && setDropdownOpen(true)}
                                
                            >
                                {/* Botão que expande o menu */}
                                <button 
                                    className="left-[-50%] flex justify-center items-center w-full text-center text-[#F8C423] font-bold sm:w-auto sm:text-center"
                                    onClick={() => {
                                        if (window.innerWidth >= 640) {
                                            setDropdownOpen(!dropdownOpen);
                                        } else {
                                            setSubsistemasOpen(!subsistemasOpen);
                                        }
                                    }}
                                >
                                    {item.name}
                                    <FaChevronDown 
                                        size={12} 
                                        className={`ml-2 transition-transform duration-200 ${dropdownOpen || subsistemasOpen ? 'rotate-180' : ''}`}
                                    />
                                </button>

                                {/* Menu dropdown para telas grandes */}
                                {dropdownOpen && (
                                    <ul 
                                        className="absolute left-[-9%] transform -translate-x-1/6  mt-1 bg-black border border-[#F8C423] rounded-sm shadow-md w-40 hidden sm:block text-center "
                                        onMouseLeave={() => window.innerWidth >= 640 && setDropdownOpen(false)}>
                                        {subsistemas.map((sub) => (
                                            <li 
                                                key={sub.name} 
                                                className='hover:bg-[#F8C423] p-2 text-[#F8C423] hover:text-black'
                                            >
                                                <Link to={sub.link} onClick={() => setDropdownOpen(false)}>
                                                    {sub.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {/* Expansão do menu para telas pequenas */}
                                <div className={`w-full flex flex-col items-center gap-2 text-sm text-[#F8C423] ${subsistemasOpen ? 'block' : 'hidden'} sm:hidden pt-4`}>
                                    {subsistemas.map((sub) => (
                                        <Link key={sub.name} to={sub.link} className="hover:text-yellow-500" onClick={() => setSubsistemasOpen(false)}>
                                            {sub.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <Link key={item.name} to={item.link} className='relative'>
                                <li 
                                    className='font-bold text-[#F8C423] relative group'
                                >
                                    {item.name}
                                    <div className='absolute left-0 bottom-0 w-0 h-[2px] bg-[#F8C423] transition-all duration-150 ease-in group-hover:w-full'></div>
                                </li>
                            </Link>
                        )
                    ))}
                </ul>
            </nav>
        </header>
    );
}