
# Vue-Autoheight-Input

A simple vuejs plugin for auto resizing the height of a textarea





## Installation
### npm
```bash
  npm install vue-autoheight-input
```
### yarn
```bash
  yarn add vue-autoheight-input
```

## Usage
The wrapper creates a textarea feild on which all actions are implemented

```bash
<template>
    <autoheight-input v-model="content" @input="handleInput"></autoheight-input>
</template>
<script>
import {AutoheightInput} from 'vue-autoheight-input'
export default{
    components:{
        AutoheightInput
    },
    data(){
        return{
            content:''
        }
    },
    methods:{
        handleInput(evt){
            //
        }
    }
}
</script>
```

## Custom styling
All custom styling can be adding via class aributes

## Props

| Property  | Type     | Required | Description       | Default
| :-------- | :------- | :----    | :------------------------- | :-------|
| placeholder | String | false    | the editor placeholder  | type here |
| maxlength | Integer | false    | the max lenght of the input  | null |
| minlength | Integer | false    | the min lenght of the input  | null |