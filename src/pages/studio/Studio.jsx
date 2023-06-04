
import Header from '../../components/studio/layout/Header'
import SideBar from '../../components/studio/layout/SideBar'

function Studio() {
    return (
        <div>
            <Header />
            <div className='flex  justify-between'>
                <SideBar >
                    left
                </SideBar>
                <main className='bg-gray-200 w-full h-[92vh]'>
                    fasdfasd
                </main>
                <SideBar >
                    rigth
                </SideBar>
            </div>

        </div>
    )
}

export default Studio