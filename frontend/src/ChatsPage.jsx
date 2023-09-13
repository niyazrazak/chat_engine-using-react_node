import {
    MultiChatSocket,
    useMultiChatLogic,
    MultiChatWindow
} from 'react-chat-engine-advanced';
import PropTypes from 'prop-types';

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '87500de8-8589-479d-97a5-c04bff845452',
        props.user.username,
        props.user.secret
    );
    return (
        <div style={{height:'100vh'}}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps}  style={{height:'100%'}}/>
        </div>
    );
};

ChatsPage.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        secret: PropTypes.string.isRequired
    }).isRequired
};

export default ChatsPage;