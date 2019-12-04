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
                validator: function (value) {
                    return value === 'rectangular' || value === 'rounded' || value === 'square' || value === 'hexagonal' || value === 'rounded-square' || value === 'rounded-rectangle' || value === 'mast'
                }
            },
            design: {
                type: String,
                validator: function (value) {
                    return value === 'ds1' || value === 'ds2'
                }
            }
        },
        computed: {
            iconClass() {
                return {
                    [`vf-icon ${this.iconCountry}${this.flagType}${this.flagDesign}`]: true
                }
            },
            iconCountry() {
                return `vf-icon-${this.country.toLowerCase()}`
            },
            flagType() {
                switch (this.type) {
                    case 'rectangular':
                        return ''
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
            },
            flagDesign() {
                switch (this.design) {
                    case 'ds1':
                        return ''
                    case 'ds2':
                        return '-ds2'
                    default:
                        return ''
                }
            }
        }
    }
</script>