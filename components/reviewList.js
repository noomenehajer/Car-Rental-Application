app.component('review-list', {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template:
    /*html*/
    `
    <div class="review-container">
        <h3>Commentaires:</h3>
        <ul>
            <li v-for="(review, index) in reviews" :key="index">
                {{ review.name }} :
                "{{ review.review }}"
                <br/>
                Recommandé: {{ review.recommend }}
            </li>
        </ul>
    </div>
    `
})

