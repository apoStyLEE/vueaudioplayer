<script>
import PlayList from '@/components/PlayList'
import Player from '@/components/Player'
import * as mtypes  from '@/stores/mutation-types';
import { loadTheme } from '@/services/themeService';

export default {
  name: 'AudioPlayer',
  template:loadTheme("AudioPlayer.html"),
  components:{ 
    PlayList,
    Player
  },
  created() {
    var id = this.$route.params.id || "0";
    this.$store.dispatch(mtypes.FETCH_PLAYLIST, [appOptions.playListSourceUrl, id]);
  },
  computed:{
    playList(){
      var plist = this.$store.state.playList;
      document.title = plist.title;
      return plist;
    },
    currentList(){
      return this.$store.state.currentList;
    },
    loading(){
      return this.$store.state.loading;
    }
  }
};
</script>