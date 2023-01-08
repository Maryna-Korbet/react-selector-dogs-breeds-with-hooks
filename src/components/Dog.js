export const Dog = ({ dog: { url, breeds}}) => {
    return (
        <div style={{ display: 'flex' }}>
            <img src={url} alt="" width="320" />
        </div>
    );
};