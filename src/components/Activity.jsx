import './components.css';

function Activity({ activity }) {
    const destination = activity.activityType.toLowerCase().includes('favorite')
        ? 'favorites'
        : 'watch later';

    const date = new Date(activity.createdAt).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });
    
    return (
        <li className="activity-item">
            <p>
                 <span className="activity-highlight">{activity.user.username}</span>
                 {' '}added{' '}
                 <span className="activity-highlight">{activity.title.title}</span>
                 {' '}to {destination} - {date}
            </p>
        </li>
    );
}

export default Activity;
