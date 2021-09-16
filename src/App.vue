<template> 
    <textarea 
        @keydown.enter.exact.prevent="handleEnter"
        :id="id"
        :placeholder="placeholder" 
        v-model="value"
        rows="1"
        :maxlength="maxlength"
        :minlength="minlength"
        ref="autoResizeInput"
    ></textarea>
</template>
<script>
export default {
    name: "VueAutoHeightInput",
    mixins: [],
    props:{
        placeholder:{
            type:String,
            required:false,
            default:'type here'
        },
        modelValue:{
            type:String,
            required:false,
            default:''
        },
        maxlength:{
            type:Number,
            required:false,
            default:null
        },
        minlength:{
            type:Number,
            required:false,
            default:null
        },
    },
    emits: ['update:modelValue'],
    data(){
        return{
            el:document.getElementsByTagName('textarea'),
            value:'',
        }
    },
    computed:{
        id(){
            return 'chartjs-'+Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        },
    },
    methods:{
        handleEnter(){
            return null;
        },
        autoResize() {
            this.$refs.autoResizeInput.style.height = "auto";
            this.$refs.autoResizeInput.style.height = `${this.$refs.autoResizeInput.scrollHeight}px`;
        },
    },
    watch: {
        value() {
            this.autoResize();
            this.$emit('update:modelValue', this.value);
        }
    },
    mounted(){
        this.value=this.modelValue;
        setTimeout(() => {
            this.autoResize();
        }, 20);
    },
    
};
</script>
<style scoped>
    textarea{
        resize: none!important;
    }
</style>