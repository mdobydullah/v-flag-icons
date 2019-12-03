<template>
    <span :class="iconClass" v-if="country"/>
</template>

<script>
    export default {
        name: 'vFlagIcons',
        props: {
            country: {
                type: String,
                required: true,
                validator: function (value) {
                    return value.length === 2
                }
            },
            type: {
              type: String,
              validator: function(value) {
                return value === 'rounded'  || value === 'square'  || value === 'hexagonal' || value === 'rounded-square' || value === 'rounded-rectangle' || value === 'mast'
              }
            }
        },
        computed: {
            iconClass() {
                return {
                    [`vf-icon ${this.iconCountry}${this.flagType}`]: true
                }
            },
            iconCountry() {
                return `vf-icon-${this.country.toLowerCase()}`
            },
            flagType() {
              switch (this.type) {
                case 'square':
                    return '-square'
                case 'hexagonal':
                    return '-hexagonal'
                case 'rounded-square':
                    return '-rounded-square'
                case 'rounded-rectangle':
                    return '-rounded-rectangle'
                case 'mast':
                    return '-mast'
                default:
                    return ''
              }
            }
        }
    }
</script>