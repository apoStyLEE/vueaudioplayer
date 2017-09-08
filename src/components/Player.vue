<script>
import { loadTheme } from '@/services/themeService';
import * as mtypes  from '@/stores/mutation-types';

export default {
    name: "Player",
    template:loadTheme("Player.html"),
    props:{
        currentList:{
            type: Object,
            required: true
        }
    },
    data(){
        return{
            id : parseInt(this.$route.params.id),
            isPlaying: false
        }
    },
    computed:{
        getModalClassList(){
            return document.querySelector(".modal-wrapper").classList;
        },
        getAudioPlayer(){
            return this.$refs.player;
        },
        startStopTrack(){
            return this.$store.state.startStopTrack;
        }
    },
    watch:{
        currentList(){
            this.loadTrack();
        },
        startStopTrack(){
            this.playerChange();
        },
        isPlaying(){
            this.$store.state.isPlaying = this.isPlaying;
        }
    },
    methods:{
        playerChange(){
            const player = this.getAudioPlayer;

            const isPlaying = player.currentTime > 0 && !player.paused && !player.ended && player.readyState > 2
            
            if(isPlaying){
                player.pause();
                this.isPlaying = false
            }
            else{
                player.play();
                this.isPlaying = true
            }
        },
        openModal(){
            this.getModalClassList.add("open");
        },
        closeModal(){
            this.getModalClassList.remove("open");
        },
        loadTrack(){
            const player = this.getAudioPlayer;
            player.load();
            this.playerChange();
        }
    }
}
</script>