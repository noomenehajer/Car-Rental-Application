app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: 
        /*html*/
        `<div class="product-display">
            <div class="product-container">
            <div class="product-image">
                <img v-if="inStock" v-bind:src="image" alt="">
               <img v-if="!inStock" v-bind:src="image" alt="" style="filter: blur(3px);">
                <div class="row">
                   <div v-for="(variant, index) in variants" 
                       :key="variant.id"    
                       @mouseover="updateVariant(index)" 
                       class="color"
                    :style="{ backgroundColor: variant.color }">
                   </div>   
                </div>
            </div>
            <div class="product-info">
                <h1>{{ title }}</h1>
                <p>A partir de:<strong> {{ price }} </strong>/jour</p>
                   <p v-if="inStock">Disponible</p>
                   <p v-else>Indisponible</p>
                <ul>
                <li v-for="detail in details">{{ detail }}</li>
                </ul>
                <button class="button" 
                        v-on:click="add"
                        :class="{ disabledButton: !inStock}"
                        :disabled="!inStock">
                        Réserver
                </button>
                <button class="button" 
                        @click="remove"
                        :class="{ disabledButton: !inStock }"
                        :disabled="!inStock">
                        Annuler
                </button>
            </div>
            </div>
            <review-list v-if="reviews.length" :reviews="reviews"></review-list>
            <div class="car">
            <review-form @review-submitted="addReview"></review-form>
            </div>
        </div>
    `,
    data () {
        return {
            titre: 'Louer Votre BMW X6',
            selectedVariant: 0,
            details: ['5 Sièges', '4 Valises' ,'Automatique'],
            variants: [
                { id: 2001, color: "#cc0000", image: './assets/images/rouge.jpg', quantity: 10 },
                { id: 2002, color: "#002266" , image: './assets/images/bleu.jpg' , quantity: 0 },
                { id: 2003, color: "#581845" , image: './assets/images/mauve.jpg' , quantity: 6 },
            ],
            reviews: []
        }
    },
    methods: {
        addReview(review) {
            this.reviews.push(review);
        },
        add() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id);
        },
        remove() {
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].id);
        },
        updateVariant(index) {
            this.selectedVariant = index;
        }
    },
    computed: {
        price() {
            if (this.premium) {
                return "279DT";
            }
            return ""
        },
        title() {
            return this.titre;
        },
        image() {
            return this.variants[this.selectedVariant].image;
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity;
        }, 
      
    }
})

