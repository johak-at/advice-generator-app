import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStore = defineStore(
    'store',
    () => {
        const name = ref('')
        const daisyTheme = ref('dark')
        const jokes = ref([])
        return { name, daisyTheme, jokes }
    },
    {
        persist: true
    }
)
