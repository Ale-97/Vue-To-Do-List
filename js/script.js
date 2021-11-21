Vue.config.devtools = true;

new Vue({
    el: `#app`,
    data: {
        list:[],
        newTask:'',
    },
    mounted(){
        this.autofocus();
    },
    methods: {
        // FUNZIONE CHE SERVE PER TENERE IL FOCUS SULL'ELEMENTO ASSOCIATO ALLA FUNZIONE
        autofocus: function(){
            const element = document.getElementById('newTaskElement');
            element.focus();
        },
        // FUNZIONE CHE SERVE PER AGGIUNGERE UN ELEMENTO ALL'INTERNO DI LIST POSIZIONATO IN DATA
        addTask: function(){
            this.list.push(this.newTask);
            this.newTask = "";
            this.autofocus();
        },

        // FUNZIONE CHE SERVE PER ELIMINARE UN ELEMENTO ALL'INTERNO DI LIST POSIZIONATO IN DATA
        deleteTask: function(index){
            //tra le parentesi dello slplice metto il valore da dove iniziare e il secondo valore sono il numero di elementi da eliminare a partire dal primo valore
            this.list.splice(index,1);
            this.autofocus();

        }

    }
})