import Link from 'next/link';


export const Navbar = () => {
  
  return (
    <>
      <nav className='flex flex-wrap sm:flex-row sm:justify-around px-auto'>
        
          <Link href='/'>
          <a className='lg:w-auto px-3 py-2 rounded text-white font-bold hover:bg-green-600 hover:text-black'>
                Home
          </a>
            </Link>
          <Link href='/about/about'>
          <a className='lg:w-auto px-3 py-2 rounded text-white font-bold hover:bg-green-600 hover:text-black'>
                About us 
          </a> 
          </Link>
            <Link href='/knowledge/knowledge'>
            <a className='lg:w-auto px-3 py-2 rounded text-white font-bold hover:bg-green-600 hover:text-black'>
            Knowledge Base
            </a>
            </Link>
            <Link href='/appsmith/appsmith'>
              <a className='lg:w-auto px-3 py-2 rounded text-white font-bold hover:bg-green-600 hover:text-black'>
                 portal
              </a>
            </Link>
      </nav>
    </>
  );
};