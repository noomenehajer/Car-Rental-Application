app.component('review-form', {
    data() {
        return {
            name: '',
            review: '',
            recommend: null
        }
    },
    template: 
        /*html*/
        `<form class="review-form" @submit.prevent="onSubmit">
            <h3>Laisser un commentaire</h3>
            <label for="name">Nom:</label>
            <input type="text" id="name" v-model="name">

            <label for="review">Commentaire</label>
            <textarea id="review" v-model="review"></textarea>

            <label for="recommend">Recommandation </label>
            <select id="recommend" v-model="recommend">
                <option>Oui !</option>
                <option>Non</option>
            </select>

            <input type="submit" class="button" value="Envoyer">
        </form>`,
    methods: {
        onSubmit () {
            if (this.name === '' || this.review === '' || this.recommend === null) {
                alert("S'il vous plais remplissez les champs.");
                return;
            }

            let productReview = {
                name: this.name,
                review: this.review,
                recommend: this.recommend
            }
            this.$emit('review-submitted', productReview);

            this.name = '';
            this.review = '';
            this.recommend = null;
        }
    }
})

