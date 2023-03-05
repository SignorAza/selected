
let id = 1;
const app = {
    data() {
        return {
            game: '',
            text: '',
            csgo: [{name:'Oleg',user: 'Jumanji'}],
            dota: [{name: 'Avatar'}],
            pubg: [{name: 'Vodka'}],
            newGamer: {name: ''},
            selected: ''
            
        }
    },
    methods: {
        addNote() {
            if(this.selected === 'csgo' && isNaN(this.text) && this.text.length > 2) {
                this.csgo.push({
                    name: this.text,
                    
                })
                this.selected = ''
                this.game = ''
                this.text = ''
            }else if(this.selected === 'dota' && isNaN(this.text) && this.text.length > 2) {
                this.dota.push({
                    name: this.text
                })
                this.selected = ''
                this.game = ''
                this.text = ''
            }else if (this.selected === 'pubg' && isNaN(this.text) && this.text.length > 2){
                this.pubg.push({
                    name: this.text
                })
                this.selected = ''
                this.game = ''
                this.text = ''
                
            }
        }
    }
}

Vue.createApp(app).mount('#app')

   
    
       