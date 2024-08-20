import './Resume.css'
import { HiOutlineDocumentDownload } from "react-icons/hi";


const Resume = () => {
    return (
        <div>
            <button className='resume-button'>
                <HiOutlineDocumentDownload />
                My Resume
            </button>
        </div>
    )
}

export default Resume
