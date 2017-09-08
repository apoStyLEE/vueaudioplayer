<script>
import { loadTheme } from '@/services/themeService';
import * as mtypes  from '@/stores/mutation-types';

export default {
    template: loadTheme("PlayList.html"),
    name: "PlayList",
    props: ["playList"],
    methods:{
        playerControl(index){
            //routing TAQLA
            if(this.$store.state.currentList.id == index){
                this.$store.commit(mtypes.PLAYER_STARTSTOP_TRACK, !this.$store.state.startStopTrack);
            }
            else{
                this.$store.commit(mtypes.PLAYER_STARTSTOP_TRACK, true);
                this.$store.commit(mtypes.GET_CURRENT_LIST, this.$route.params.id);
            }
        }
    },
    computed:{
        isPlaying(){
            return this.$store.state.isPlaying;
        }
    }
}
</script>