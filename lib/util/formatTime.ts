export default function formatTime(seconds: number) {
    if (isNaN(seconds) || !seconds) return '00:00';
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
    return hours > 0
        ? `${hours}:${minutes}:${secs}`
        : `${minutes}:${secs}`;
}
