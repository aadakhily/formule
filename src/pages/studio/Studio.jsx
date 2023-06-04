
// layout
import Header from '../../components/studio/layout/Header'
import SideBar from '../../components/studio/layout/SideBar'

import StudioEditor from '../../components/studio/editor/Editor'

function Studio() {
    return (
        <div>
            <Header />
            <div className='flex  justify-between'>
                <SideBar >
                    left
                </SideBar>
                <main className='bg-gray-200 w-full h-[92vh]'>
                    <StudioEditor />
                </main>
                <SideBar >
                    rigth
                </SideBar>
            </div>

        </div>
    )
}

export default Studio