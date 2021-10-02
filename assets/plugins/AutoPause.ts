import MediaPlayer from '../MediaPlayer';
class AutoPause {
    private threshold: number;
    player: MediaPlayer;
    constructor() {
        this.threshold = 0.25;
        this.handleIntersection = this.handleIntersection.bind(this);
        this.handleVisibilitychange = this.handleVisibilitychange.bind(this);
    }
    run(player) {
        this.player = player;
        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold
        });
        observer.observe(this.player.media);
        document.addEventListener("visibilitychange", this.handleVisibilitychange)
    }
    //  Función invocada cuando se cumpla el umbral (0.25)
    private handleIntersection(entries: IntersectionObserverEntry[]) {
        const entry = entries[0];
        const isVisible = entry.intersectionRatio >= this.threshold;
        (isVisible)
            ? this.player.play()
            : this.player.pause();
    }
    private handleVisibilitychange() {
        const isVisible = document.visibilityState === "visible";
        (isVisible)
            ? this.player.play()
            : this.player.pause();
    }
}
export default AutoPause;