import logo from '../../assets/ignite-logo.svg'

const Header = () => {
    return (
        <header className="w-full h-[100px] flex items-center justify-center gap-4 bg-[#202024]">
            <img src={logo} alt="logo" className='w-[48px] h-[48px]' />
            <h1 className="text-white text-2xl font-bold">Ignite Feed</h1>
        </header>
    )
}

export default Header