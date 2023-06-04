
import { Editor, Element, Frame } from '@craftjs/core'
import PerfectScrollbar from 'react-perfect-scrollbar'

// layout
import Header from '../../components/studio/layout/Header'
import NodesToolbar from '../../components/studio/editor/toolbars/nodesToolbar/NodesToolbar'
import ConfigToolbar from '../../components/studio/editor/toolbars/ConfigToolbar/ConfigToolbar'
import { EDITOR_NODES } from '../../components/studio/editor/nodes'


function Studio() {
    return (
        <Editor resolver={EDITOR_NODES}>

            <div>
                <Header />

                <div className='flex  justify-between'>
                    <NodesToolbar />

                    <PerfectScrollbar className=' w-full overflow-auto bg-gray-200'>
                        <Frame>
                            <Element canvas is="main" className=" w-full h-[92vh] p-20" >
                                you can drop
                            </Element>
                        </Frame>
                    </PerfectScrollbar>

                    <ConfigToolbar />
                </div>
            </div>
        </Editor>
    )
}

export default Studio