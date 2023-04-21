import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';

const Authenticated = ({ children }: any) => {
    return (
        <div className='grid grid-cols-12 gap-6'>
            <div className="col-span-2">
                <Sidebar />
            </div>

            <div className="col-span-10">
                <Header />
            </div>

            <main className="">
                {children}
            </main>
        </div>
    )
}

export default Authenticated
