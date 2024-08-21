import './SendMessage.css'
import { FiSend } from 'react-icons/fi'

const SendMessage = () => {
    return (
        <div>
            <button className='send-message-button'>
                <div className="svg-wrapper-1">
                    <div className="svg-wrapper">
                        <FiSend size={24} />
                    </div>
                </div>
                <span>Send Message</span>
            </button>
        </div>
    )
}

export default SendMessage