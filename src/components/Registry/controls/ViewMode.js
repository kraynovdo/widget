export default function ViewMode(props) {
    <button onClick={() => {
        const viewMode = props.viewMode === 'list' ? 'tile' : 'list';
        props.onViewModeChanged(viewMode);
    }}>Change viewMode</button>
}